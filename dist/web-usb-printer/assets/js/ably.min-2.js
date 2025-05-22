/*@license Copyright 2015-2022 Ably Real-time Ltd (ably.com)

Ably JavaScript Library v2.9.0
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
  var mt = Object.defineProperty,
    Dr = Object.defineProperties,
    Hr = Object.getOwnPropertyDescriptor,
    Gr = Object.getOwnPropertyDescriptors,
    Fr = Object.getOwnPropertyNames,
    ft = Object.getOwnPropertySymbols;
  var zt = Object.prototype.hasOwnProperty,
    bs = Object.prototype.propertyIsEnumerable;
  var Ps = (s, t, e) => (t in s ? mt(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (s[t] = e)),
    E = (s, t) => {
      for (var e in t || (t = {})) zt.call(t, e) && Ps(s, e, t[e]);
      if (ft) for (var e of ft(t)) bs.call(t, e) && Ps(s, e, t[e]);
      return s;
    },
    D = (s, t) => Dr(s, Gr(t));
  var Cs = (s, t) => {
    var e = {};
    for (var n in s) zt.call(s, n) && t.indexOf(n) < 0 && (e[n] = s[n]);
    if (s != null && ft) for (var n of ft(s)) t.indexOf(n) < 0 && bs.call(s, n) && (e[n] = s[n]);
    return e;
  };
  var As = (s, t) => {
      for (var e in t) mt(s, e, { get: t[e], enumerable: !0 });
    },
    jr = (s, t, e, n) => {
      if ((t && typeof t == "object") || typeof t == "function") for (let r of Fr(t)) !zt.call(s, r) && r !== e && mt(s, r, { get: () => t[r], enumerable: !(n = Hr(t, r)) || n.enumerable });
      return s;
    };
  var Wr = (s) => jr(mt({}, "__esModule", { value: !0 }), s);
  var Ci = {};
  As(Ci, { ErrorInfo: () => h, Realtime: () => Ve, Rest: () => We, default: () => bi, makeProtocolMessageFromDeserialized: () => Ln, msgpack: () => Vt });
  module.exports = Wr(Ci);
  var p = class {};
  var Jt = typeof global != "undefined" ? global : typeof window != "undefined" ? window : self;
  function yt(s, t) {
    return `${s}`.padStart(t ? 3 : 2, "0");
  }
  function Vr(s) {
    return p.Config.logTimestamps
      ? function (t) {
          let e = new Date();
          s(yt(e.getHours()) + ":" + yt(e.getMinutes()) + ":" + yt(e.getSeconds()) + "." + yt(e.getMilliseconds(), 1) + " " + t);
        }
      : function (t) {
          s(t);
        };
  }
  var zr = () => {
      var e;
      let s, t;
      return (
        typeof ((e = Jt == null ? void 0 : Jt.console) == null ? void 0 : e.log) == "function"
          ? ((s = function (...n) {
              console.log.apply(console, n);
            }),
            (t = console.warn
              ? function (...n) {
                  console.warn.apply(console, n);
                }
              : s))
          : (s = t = function () {}),
        [s, t].map(Vr)
      );
    },
    K = class K {
      constructor() {
        this.deprecated = (t, e) => {
          this.deprecationWarning(`${t} is deprecated and will be removed in a future version. ${e}`);
        };
        this.shouldLog = (t) => t <= this.logLevel;
        this.setLog = (t, e) => {
          t !== void 0 && (this.logLevel = t), e !== void 0 && (this.logHandler = this.logErrorHandler = e);
        };
        (this.logLevel = K.defaultLogLevel), (this.logHandler = K.defaultLogHandler), (this.logErrorHandler = K.defaultLogErrorHandler);
      }
      static initLogHandlers() {
        let [t, e] = zr();
        (this.defaultLogHandler = t), (this.defaultLogErrorHandler = e), (this.defaultLogger = new K());
      }
      static logActionNoStrip(t, e, n, r) {
        t.logAction(e, n, r);
      }
      logAction(t, e, n) {
        this.shouldLog(t) && (t === 1 ? this.logErrorHandler : this.logHandler)("Ably: " + e + ": " + n, t);
      }
      renamedClientOption(t, e) {
        this.deprecationWarning(`The \`${t}\` client option has been renamed to \`${e}\`. Please update your code to use \`${e}\` instead. \`${t}\` will be removed in a future version.`);
      }
      renamedMethod(t, e, n) {
        this.deprecationWarning(`\`${t}\`\u2019s \`${e}\` method has been renamed to \`${n}\`. Please update your code to use \`${n}\` instead. \`${e}\` will be removed in a future version.`);
      }
      deprecationWarning(t) {
        this.shouldLog(1) && this.logErrorHandler(`Ably: Deprecation warning - ${t}`, 1);
      }
    };
  (K.defaultLogLevel = 1),
    (K.LOG_NONE = 0),
    (K.LOG_ERROR = 1),
    (K.LOG_MAJOR = 2),
    (K.LOG_MINOR = 3),
    (K.LOG_MICRO = 4),
    (K.logAction = (t, e, n, r) => {
      K.logActionNoStrip(t, e, n, r);
    });
  var Kt = K,
    i = Kt;
  var O = {};
  As(O, {
    Format: () => Y,
    allSame: () => Zt,
    allToLowerCase: () => $e,
    allToUpperCase: () => rn,
    arrChooseN: () => sn,
    arrDeleteValue: () => ks,
    arrEquals: () => cn,
    arrIntersect: () => ws,
    arrIntersectOb: () => Os,
    arrPopRandomElement: () => Rt,
    arrWithoutValue: () => Yr,
    cheapRandStr: () => Te,
    containsValue: () => Xr,
    copy: () => oe,
    createMissingPluginError: () => Ze,
    dataSizeBytes: () => tn,
    decodeBody: () => B,
    encodeBody: () => H,
    ensureArray: () => Qt,
    forInOwnNonNullProperties: () => Yt,
    getBackoffCoefficient: () => Ms,
    getGlobalObject: () => Ye,
    getJitterCoefficient: () => Es,
    getRetryTime: () => Xe,
    inherits: () => $r,
    inspectBody: () => en,
    inspectError: () => w,
    intersect: () => $t,
    isEmpty: () => Kr,
    isErrorInfoOrPartialErrorInfo: () => Qe,
    isNil: () => z,
    isObject: () => ie,
    keysArray: () => pe,
    matchDerivedChannel: () => an,
    mixin: () => C,
    parseQueryString: () => Ae,
    prototypicalClone: () => Is,
    randomString: () => nn,
    shallowClone: () => Qr,
    shallowEquals: () => on,
    throwMissingPluginError: () => _,
    toBase64: () => Ee,
    toQueryString: () => le,
    valuesArray: () => Xt,
    whenPromiseSettles: () => N,
    withTimeoutAsync: () => ln,
  });
  function Ts(s) {
    let t = "[" + s.constructor.name;
    return (
      s.message && (t += ": " + s.message),
      s.statusCode && (t += "; statusCode=" + s.statusCode),
      s.code && (t += "; code=" + s.code),
      s.cause && (t += "; cause=" + w(s.cause)),
      s.href && !(s.message && s.message.indexOf("help.ably.io") > -1) && (t += "; see " + s.href + " "),
      (t += "]"),
      t
    );
  }
  var h = class s extends Error {
      constructor(e, n, r, o) {
        super(e);
        typeof Object.setPrototypeOf != "undefined" && Object.setPrototypeOf(this, s.prototype), (this.code = n), (this.statusCode = r), (this.cause = o);
      }
      toString() {
        return Ts(this);
      }
      static fromValues(e) {
        let { message: n, code: r, statusCode: o } = e;
        if (typeof n != "string" || typeof r != "number" || typeof o != "number") throw new Error("ErrorInfo.fromValues(): invalid values: " + p.Config.inspect(e));
        let a = Object.assign(new s(n, r, o), e);
        return a.code && !a.href && (a.href = "https://help.ably.io/error/" + a.code), a;
      }
    },
    v = class s extends Error {
      constructor(e, n, r, o) {
        super(e);
        typeof Object.setPrototypeOf != "undefined" && Object.setPrototypeOf(this, s.prototype), (this.code = n), (this.statusCode = r), (this.cause = o);
      }
      toString() {
        return Ts(this);
      }
      static fromValues(e) {
        let { message: n, code: r, statusCode: o } = e;
        if (typeof n != "string" || (!z(r) && typeof r != "number") || (!z(o) && typeof o != "number")) throw new Error("PartialErrorInfo.fromValues(): invalid values: " + p.Config.inspect(e));
        let a = Object.assign(new s(n, r, o), e);
        return a.code && !a.href && (a.href = "https://help.ably.io/error/" + a.code), a;
      }
    };
  function Jr(s) {
    return Math.floor(Math.random() * s.length);
  }
  function C(s, ...t) {
    for (let e = 0; e < t.length; e++) {
      let n = t[e];
      if (!n) break;
      for (let r in n) Object.prototype.hasOwnProperty.call(n, r) && (s[r] = n[r]);
    }
    return s;
  }
  function oe(s) {
    return C({}, s);
  }
  function Qt(s) {
    return z(s) ? [] : Array.isArray(s) ? s : [s];
  }
  function ie(s) {
    return Object.prototype.toString.call(s) == "[object Object]";
  }
  function Kr(s) {
    for (let t in s) return !1;
    return !0;
  }
  function z(s) {
    return s == null;
  }
  function Qr(s) {
    let t = new Object();
    for (let e in s) t[e] = s[e];
    return t;
  }
  function Is(s, t) {
    class e {}
    e.prototype = s;
    let n = new e();
    return t && C(n, t), n;
  }
  var $r = function (s, t) {
    if (p.Config.inherits) {
      p.Config.inherits(s, t);
      return;
    }
    (s.super_ = t), (s.prototype = Is(t.prototype, { constructor: s }));
  };
  function Xr(s, t) {
    for (let e in s) if (s[e] == t) return !0;
    return !1;
  }
  function $t(s, t) {
    return Array.isArray(t) ? ws(s, t) : Os(s, t);
  }
  function ws(s, t) {
    let e = [];
    for (let n = 0; n < s.length; n++) {
      let r = s[n];
      t.indexOf(r) != -1 && e.push(r);
    }
    return e;
  }
  function Os(s, t) {
    let e = [];
    for (let n = 0; n < s.length; n++) {
      let r = s[n];
      r in t && e.push(r);
    }
    return e;
  }
  function ks(s, t) {
    let e = s.indexOf(t),
      n = e != -1;
    return n && s.splice(e, 1), n;
  }
  function Yr(s, t) {
    let e = s.slice();
    return ks(e, t), e;
  }
  function pe(s, t) {
    let e = [];
    for (let n in s) (t && !Object.prototype.hasOwnProperty.call(s, n)) || e.push(n);
    return e;
  }
  function Xt(s, t) {
    let e = [];
    for (let n in s) (t && !Object.prototype.hasOwnProperty.call(s, n)) || e.push(s[n]);
    return e;
  }
  function Yt(s, t) {
    for (let e in s) Object.prototype.hasOwnProperty.call(s, e) && s[e] && t(e);
  }
  function Zt(s, t) {
    if (s.length === 0) return !0;
    let e = s[0][t];
    return s.every(function (n) {
      return n[t] === e;
    });
  }
  var Y = ((e) => ((e.msgpack = "msgpack"), (e.json = "json"), e))(Y || {});
  function Rt(s) {
    return s.splice(Jr(s), 1)[0];
  }
  function le(s) {
    let t = [];
    if (s) for (let e in s) t.push(encodeURIComponent(e) + "=" + encodeURIComponent(s[e]));
    return t.length ? "?" + t.join("&") : "";
  }
  function Ae(s) {
    let t,
      e = /([^?&=]+)=?([^&]*)/g,
      n = {};
    for (; (t = e.exec(s)); ) n[decodeURIComponent(t[1])] = decodeURIComponent(t[2]);
    return n;
  }
  function Qe(s) {
    return typeof s == "object" && s !== null && (s instanceof h || s instanceof v);
  }
  function w(s) {
    var t, e;
    return s instanceof Error || ((t = s == null ? void 0 : s.constructor) == null ? void 0 : t.name) === "ErrorInfo" || ((e = s == null ? void 0 : s.constructor) == null ? void 0 : e.name) === "PartialErrorInfo" ? s.toString() : p.Config.inspect(s);
  }
  function en(s) {
    return p.BufferUtils.isBuffer(s) ? s.toString() : typeof s == "string" ? s : p.Config.inspect(s);
  }
  function tn(s) {
    if (p.BufferUtils.isBuffer(s)) return p.BufferUtils.byteLength(s);
    if (typeof s == "string") return p.Config.stringByteSize(s);
    if (typeof s == "number") return 8;
    if (typeof s == "boolean") return 1;
    throw new Error(`Expected input of Utils.dataSizeBytes to be a string, a number, a boolean or a buffer, but was: ${typeof s}`);
  }
  function Te() {
    return String(Math.random()).substr(2);
  }
  var nn = async (s) => {
    let t = await p.Config.getRandomArrayBuffer(s);
    return p.BufferUtils.base64Encode(t);
  };
  function sn(s, t) {
    let e = Math.min(t, s.length),
      n = s.slice(),
      r = [];
    for (let o = 0; o < e; o++) r.push(Rt(n));
    return r;
  }
  function N(s, t) {
    s.then((e) => {
      t == null || t(null, e);
    }).catch((e) => {
      t == null || t(e);
    });
  }
  function B(s, t, e) {
    return e == "msgpack" ? (t || _("MsgPack"), t.decode(s)) : JSON.parse(String(s));
  }
  function H(s, t, e) {
    return e == "msgpack" ? (t || _("MsgPack"), t.encode(s, !0)) : JSON.stringify(s);
  }
  function $e(s) {
    return s.map(function (t) {
      return t && t.toLowerCase();
    });
  }
  function rn(s) {
    return s.map(function (t) {
      return t && t.toUpperCase();
    });
  }
  function Ms(s) {
    return Math.min((s + 2) / 3, 2);
  }
  function Es() {
    return 1 - Math.random() * 0.2;
  }
  function Xe(s, t) {
    return s * Ms(t) * Es();
  }
  function Ye() {
    return typeof global != "undefined" ? global : typeof window != "undefined" ? window : self;
  }
  function on(s, t) {
    return Object.keys(s).every((e) => s[e] === t[e]) && Object.keys(t).every((e) => t[e] === s[e]);
  }
  function an(s) {
    let t = /^(\[([^?]*)(?:(.*))\])?(.+)$/,
      e = s.match(t);
    if (!e || !e.length || e.length < 5) throw new h("regex match failed", 400, 40010);
    if (e[2]) throw new h(`cannot use a derived option with a ${e[2]} channel`, 400, 40010);
    return { qualifierParam: e[3] || "", channelName: e[4] };
  }
  function Ee(s) {
    let t = p.BufferUtils,
      e = t.utf8Encode(s);
    return t.base64Encode(e);
  }
  function cn(s, t) {
    return (
      s.length === t.length &&
      s.every(function (e, n) {
        return e === t[n];
      })
    );
  }
  function Ze(s) {
    return new h(`${s} plugin not provided`, 40019, 400);
  }
  function _(s) {
    throw Ze(s);
  }
  async function ln(s, t = 5e3, e = "Timeout expired") {
    let n = new h(e, 5e4, 500);
    return Promise.race([s, new Promise((r, o) => setTimeout(() => o(n), t))]);
  }
  var un = "2.9.0";
  var eo = "ably-js/" + un,
    j = {
      ENVIRONMENT: "",
      REST_HOST: "rest.ably.io",
      REALTIME_HOST: "realtime.ably.io",
      FALLBACK_HOSTS: ["A.ably-realtime.com", "B.ably-realtime.com", "C.ably-realtime.com", "D.ably-realtime.com", "E.ably-realtime.com"],
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
      version: un,
      protocolVersion: 3,
      agent: eo,
      getHost: vs,
      getPort: to,
      getHttpScheme: no,
      environmentFallbackHosts: Ss,
      getFallbackHosts: xs,
      getHosts: so,
      checkHost: Us,
      objectifyOptions: io,
      normaliseOptions: ao,
      defaultGetHeaders: co,
      defaultPostHeaders: lo,
    };
  function vs(s, t, e) {
    return e ? (t = (t == s.restHost && s.realtimeHost) || t || s.realtimeHost) : (t = t || s.restHost), t;
  }
  function to(s, t) {
    return t || s.tls ? s.tlsPort : s.port;
  }
  function no(s) {
    return s.tls ? "https://" : "http://";
  }
  function Ss(s) {
    return [s + "-a-fallback.ably-realtime.com", s + "-b-fallback.ably-realtime.com", s + "-c-fallback.ably-realtime.com", s + "-d-fallback.ably-realtime.com", s + "-e-fallback.ably-realtime.com"];
  }
  function xs(s) {
    let t = s.fallbackHosts,
      e = typeof s.httpMaxRetryCount != "undefined" ? s.httpMaxRetryCount : j.httpMaxRetryCount;
    return t ? sn(t, e) : [];
  }
  function so(s, t) {
    let e = [s.restHost].concat(xs(s));
    return t ? e.map((n) => vs(s, n, !0)) : e;
  }
  function Us(s) {
    if (typeof s != "string") throw new h("host must be a string; was a " + typeof s, 4e4, 400);
    if (!s.length) throw new h("host must not be zero-length", 4e4, 400);
  }
  function ro(s, t, e, n) {
    return s.realtimeHost
      ? s.realtimeHost
      : s.restHost
      ? (i.logAction(
          n,
          i.LOG_MINOR,
          "Defaults.normaliseOptions",
          'restHost is set to "' + s.restHost + '" but realtimeHost is not set, so setting realtimeHost to "' + s.restHost + '" too. If this is not what you want, please set realtimeHost explicitly.'
        ),
        s.restHost)
      : t
      ? j.REALTIME_HOST
      : e + "-" + j.REALTIME_HOST;
  }
  function oo(s) {
    let t = {};
    for (let e in j.TIMEOUTS) t[e] = s[e] || j.TIMEOUTS[e];
    return t;
  }
  function bt(s) {
    let t = j.agent;
    if (s.agents) for (var e in s.agents) t += " " + e + "/" + s.agents[e];
    return t;
  }
  function io(s, t, e, n, r) {
    if (s === void 0) {
      let a = t ? `${e} must be initialized with either a client options object, an Ably API key, or an Ably Token` : `${e} must be initialized with a client options object`;
      throw (i.logAction(n, i.LOG_ERROR, `${e}()`, a), new Error(a));
    }
    let o;
    if (typeof s == "string")
      if (s.indexOf(":") == -1) {
        if (!t) {
          let a = `${e} cannot be initialized with just an Ably Token; you must provide a client options object with a \`plugins\` property. (Set this Ably Token as the object\u2019s \`token\` property.)`;
          throw (i.logAction(n, i.LOG_ERROR, `${e}()`, a), new Error(a));
        }
        o = { token: s };
      } else {
        if (!t) {
          let a = `${e} cannot be initialized with just an Ably API key; you must provide a client options object with a \`plugins\` property. (Set this Ably API key as the object\u2019s \`key\` property.)`;
          throw (i.logAction(n, i.LOG_ERROR, `${e}()`, a), new Error(a));
        }
        o = { key: s };
      }
    else o = s;
    return r && (o = D(E({}, o), { plugins: E(E({}, r), o.plugins) })), o;
  }
  function ao(s, t, e) {
    let n = e != null ? e : i.defaultLogger;
    typeof s.recover == "function" &&
      s.closeOnUnload === !0 &&
      (i.logAction(n, i.LOG_ERROR, "Defaults.normaliseOptions", "closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter"), (s.recover = void 0)),
      "closeOnUnload" in s || (s.closeOnUnload = !s.recover),
      "queueMessages" in s || (s.queueMessages = !0);
    let r = (s.environment && String(s.environment).toLowerCase()) || j.ENVIRONMENT,
      o = !r || r === "production";
    !s.fallbackHosts && !s.restHost && !s.realtimeHost && !s.port && !s.tlsPort && (s.fallbackHosts = o ? j.FALLBACK_HOSTS : Ss(r));
    let a = s.restHost || (o ? j.REST_HOST : r + "-" + j.REST_HOST),
      c = ro(s, o, r, n);
    (s.fallbackHosts || []).concat(a, c).forEach(Us), (s.port = s.port || j.PORT), (s.tlsPort = s.tlsPort || j.TLS_PORT), "tls" in s || (s.tls = !0);
    let l = oo(s);
    t ? ("useBinaryProtocol" in s ? (s.useBinaryProtocol = p.Config.supportsBinary && s.useBinaryProtocol) : (s.useBinaryProtocol = p.Config.preferBinary)) : (s.useBinaryProtocol = !1);
    let u = {};
    s.clientId && (u["X-Ably-ClientId"] = p.BufferUtils.base64Encode(p.BufferUtils.utf8Encode(s.clientId))), "idempotentRestPublishing" in s || (s.idempotentRestPublishing = !0);
    let g = null,
      d = s.connectivityCheckUrl;
    if (s.connectivityCheckUrl) {
      let [f, y] = s.connectivityCheckUrl.split("?");
      (g = y ? Ae(y) : {}), f.indexOf("://") === -1 && (f = "https://" + f), (d = f);
    }
    let m = s.wsConnectivityCheckUrl;
    return (
      m && m.indexOf("://") === -1 && (m = "wss://" + m),
      D(E({}, s), { realtimeHost: c, restHost: a, maxMessageSize: s.maxMessageSize || j.maxMessageSize, timeouts: l, connectivityCheckParams: g, connectivityCheckUrl: d, wsConnectivityCheckUrl: m, headers: u })
    );
  }
  function ve(s, t, e) {
    let n = e || {};
    if (n.cipher) {
      s || _("Crypto");
      let r = s.getCipher(n.cipher, t);
      (n.cipher = r.cipherParams), (n.channelCipher = r.cipher);
    } else "cipher" in n && ((n.cipher = void 0), (n.channelCipher = null));
    return n;
  }
  var Bs = { json: "application/json", xml: "application/xml", html: "text/html", msgpack: "application/x-msgpack", text: "text/plain" },
    Pt = { format: "json", protocolVersion: j.protocolVersion };
  function co(s, { format: t = Pt.format, protocolVersion: e = Pt.protocolVersion } = {}) {
    return { accept: Bs[t], "X-Ably-Version": e.toString(), "Ably-Agent": bt(s) };
  }
  function lo(s, { format: t = Pt.format, protocolVersion: e = Pt.protocolVersion } = {}) {
    let n;
    return { accept: (n = Bs[t]), "content-type": n, "X-Ably-Version": e.toString(), "Ably-Agent": bt(s) };
  }
  var R = j;
  function _s(s) {
    return Object.assign(j, s);
  }
  var hn = class s {
      constructor(t, e) {
        this.logger = t;
        this.members = e || [];
      }
      call(t, e) {
        for (let n of this.members)
          if (n)
            try {
              n(t, e);
            } catch (r) {
              i.logAction(this.logger, i.LOG_ERROR, "Multicaster multiple callback handler", "Unexpected exception: " + r + "; stack = " + r.stack);
            }
      }
      push(...t) {
        this.members.push(...t);
      }
      createPromise() {
        return new Promise((t, e) => {
          this.push((n, r) => {
            n ? e(n) : t(r);
          });
        });
      }
      resolveAll(t) {
        this.call(null, t);
      }
      rejectAll(t) {
        this.call(t);
      }
      static create(t, e) {
        let n = new s(t, e);
        return Object.assign((r, o) => n.call(r, o), { push: (r) => n.push(r), createPromise: () => n.createPromise(), resolveAll: (r) => n.resolveAll(r), rejectAll: (r) => n.rejectAll(r) });
      }
    },
    Se = hn;
  var Ls = ((o) => ((o.Get = "get"), (o.Delete = "delete"), (o.Post = "post"), (o.Put = "put"), (o.Patch = "patch"), o))(Ls || {}),
    x = Ls;
  var Ns = ((c) => (
    (c[(c.Success = 200)] = "Success"),
    (c[(c.NoContent = 204)] = "NoContent"),
    (c[(c.BadRequest = 400)] = "BadRequest"),
    (c[(c.Unauthorized = 401)] = "Unauthorized"),
    (c[(c.Forbidden = 403)] = "Forbidden"),
    (c[(c.RequestTimeout = 408)] = "RequestTimeout"),
    (c[(c.InternalServerError = 500)] = "InternalServerError"),
    c
  ))(Ns || {});
  function qs(s) {
    return s >= 200 && s < 400;
  }
  var ge = Ns;
  var dn = Math.pow(2, 17);
  function uo() {
    return ("000000" + Math.floor(Math.random() * 1e16)).slice(-16);
  }
  function ho(s) {
    return !!s.connection;
  }
  function Ds(s) {
    return Qe(s) ? (s.code || (s.statusCode === 403 ? (s.code = 40300) : ((s.code = 40170), (s.statusCode = 401))), s) : new h(w(s), s.code || 40170, s.statusCode || 401);
  }
  var po = (s, t) => {
    let e = p.BufferUtils,
      n = e.utf8Encode(s),
      r = e.utf8Encode(t),
      o = e.hmacSha256(n, r);
    return e.base64Encode(o);
  };
  function Hs(s) {
    if (!s) return "";
    typeof s == "string" && (s = JSON.parse(s));
    let t = Object.create(null),
      e = pe(s, !0);
    if (!e) return "";
    e.sort();
    for (let n = 0; n < e.length; n++) t[e[n]] = s[e[n]].sort();
    return JSON.stringify(t);
  }
  function Gs(s, t) {
    if (s.authCallback) i.logAction(t, i.LOG_MINOR, "Auth()", "using token auth with authCallback");
    else if (s.authUrl) i.logAction(t, i.LOG_MINOR, "Auth()", "using token auth with authUrl");
    else if (s.key) i.logAction(t, i.LOG_MINOR, "Auth()", "using token auth with client-side signing");
    else if (s.tokenDetails) i.logAction(t, i.LOG_MINOR, "Auth()", "using token auth with supplied token only");
    else {
      let e = "authOptions must include valid authentication parameters";
      throw (i.logAction(t, i.LOG_ERROR, "Auth()", e), new Error(e));
    }
  }
  function go(s) {
    return "useTokenAuth" in s && !s.useTokenAuth;
  }
  function gn(s) {
    return s.useTokenAuth || (!go(s) && (s.authCallback || s.authUrl || s.token || s.tokenDetails));
  }
  function fo(s) {
    return !s.key && !s.authCallback && !s.authUrl;
  }
  var mo = 0;
  function yo() {
    return mo++;
  }
  var pn = class {
      constructor(t, e) {
        this.authOptions = {};
        if (((this.client = t), (this.tokenParams = e.defaultTokenParams || {}), (this.currentTokenRequestId = null), (this.waitingForTokenRequest = null), gn(e)))
          fo(e) &&
            i.logAction(this.logger, i.LOG_ERROR, "Auth()", "Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"),
            this._saveTokenOptions(e.defaultTokenParams, e),
            Gs(this.authOptions, this.logger);
        else {
          if (!e.key) {
            let n = "No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)";
            throw (i.logAction(this.logger, i.LOG_ERROR, "Auth()", n), new h(n, 40160, 401));
          }
          i.logAction(this.logger, i.LOG_MINOR, "Auth()", "anonymous, using basic auth"), this._saveBasicOptions(e);
        }
      }
      get logger() {
        return this.client.logger;
      }
      async authorize(t, e) {
        if (e && e.key && this.authOptions.key !== e.key) throw new h("Unable to update auth options with incompatible key", 40102, 401);
        try {
          let n = await this._forceNewToken(t != null ? t : null, e != null ? e : null);
          return ho(this.client)
            ? new Promise((r, o) => {
                this.client.connection.connectionManager.onAuthUpdated(n, (a, c) => (a ? o(a) : r(c)));
              })
            : n;
        } catch (n) {
          throw (this.client.connection && n.statusCode === ge.Forbidden && this.client.connection.connectionManager.actOnErrorFromAuthorize(n), n);
        }
      }
      async _forceNewToken(t, e) {
        (this.tokenDetails = null), this._saveTokenOptions(t, e), Gs(this.authOptions, this.logger);
        try {
          return this._ensureValidAuthCredentials(!0);
        } finally {
          delete this.tokenParams.timestamp, delete this.authOptions.queryTime;
        }
      }
      async requestToken(t, e) {
        let n = e || this.authOptions,
          r = t || oe(this.tokenParams),
          o,
          a = this.client;
        if (n.authCallback) i.logAction(this.logger, i.LOG_MINOR, "Auth.requestToken()", "using token auth with authCallback"), (o = n.authCallback);
        else if (n.authUrl)
          i.logAction(this.logger, i.LOG_MINOR, "Auth.requestToken()", "using token auth with authUrl"),
            (o = (l, u) => {
              let g = C({ accept: "application/json, text/plain" }, n.authHeaders),
                d = n.authMethod && n.authMethod.toLowerCase() === "post",
                m,
                f = n.authUrl.indexOf("?");
              f > -1 && ((m = Ae(n.authUrl.slice(f))), (n.authUrl = n.authUrl.slice(0, f)), d || (n.authParams = C(m, n.authParams)));
              let y = C({}, n.authParams || {}, l),
                P = (A) => {
                  var I, X;
                  let T = (I = A.body) != null ? I : null,
                    k = null;
                  if (A.error) i.logAction(this.logger, i.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received Error: " + w(A.error));
                  else {
                    let F = (X = A.headers["content-type"]) != null ? X : null;
                    Array.isArray(F) ? (k = F.join(", ")) : (k = F), i.logAction(this.logger, i.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received; content-type: " + k + "; body: " + en(T));
                  }
                  if (A.error) {
                    u(A.error, null);
                    return;
                  }
                  if (A.unpacked) {
                    u(null, T);
                    return;
                  }
                  if ((p.BufferUtils.isBuffer(T) && (T = T.toString()), !k)) {
                    u(new h("authUrl response is missing a content-type header", 40170, 401), null);
                    return;
                  }
                  let U = k.indexOf("application/json") > -1,
                    Me = k.indexOf("text/plain") > -1 || k.indexOf("application/jwt") > -1;
                  if (!U && !Me) {
                    u(new h("authUrl responded with unacceptable content-type " + k + ", should be either text/plain, application/jwt or application/json", 40170, 401), null);
                    return;
                  }
                  if (U) {
                    if (T.length > dn) {
                      u(new h("authUrl response exceeded max permitted length", 40170, 401), null);
                      return;
                    }
                    try {
                      T = JSON.parse(T);
                    } catch (F) {
                      u(new h("Unexpected error processing authURL response; err = " + F.message, 40170, 401), null);
                      return;
                    }
                  }
                  u(null, T, k);
                };
              if ((i.logAction(this.logger, i.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Requesting token from " + n.authUrl + "; Params: " + JSON.stringify(y) + "; method: " + (d ? "POST" : "GET")), d)) {
                let A = g || {};
                A["content-type"] = "application/x-www-form-urlencoded";
                let T = le(y).slice(1);
                N(this.client.http.doUri(x.Post, n.authUrl, A, T, m), (k, U) => P(k || U));
              } else N(this.client.http.doUri(x.Get, n.authUrl, g || {}, null, y), (A, T) => P(A || T));
            });
        else if (n.key)
          i.logAction(this.logger, i.LOG_MINOR, "Auth.requestToken()", "using token auth with client-side signing"),
            (o = (l, u) => {
              N(this.createTokenRequest(l, n), (g, d) => u(g, d != null ? d : null));
            });
        else {
          let l = "Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)";
          throw (
            (i.logAction(this.logger, i.LOG_ERROR, "Auth()", "library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"),
            new h(l, 40171, 403))
          );
        }
        "capability" in r && (r.capability = Hs(r.capability));
        let c = (l, u) => {
          let g = l.keyName,
            d = "/keys/" + g + "/requestToken",
            m = function (y) {
              return a.baseUri(y) + d;
            },
            f = R.defaultPostHeaders(this.client.options);
          n.requestHeaders && C(f, n.requestHeaders),
            i.logAction(this.logger, i.LOG_MICRO, "Auth.requestToken().requestToken", "Sending POST to " + d + "; Token params: " + JSON.stringify(l)),
            N(this.client.http.do(x.Post, m, f, JSON.stringify(l), null), (y, P) => (y ? u(y) : u(P.error, P.body, P.unpacked)));
        };
        return new Promise((l, u) => {
          let g = !1,
            d = this.client.options.timeouts.realtimeRequestTimeout,
            m = setTimeout(() => {
              g = !0;
              let f = "Token request callback timed out after " + d / 1e3 + " seconds";
              i.logAction(this.logger, i.LOG_ERROR, "Auth.requestToken()", f), u(new h(f, 40170, 401));
            }, d);
          o(r, (f, y, P) => {
            if (g) return;
            if ((clearTimeout(m), f)) {
              i.logAction(this.logger, i.LOG_ERROR, "Auth.requestToken()", "token request signing call returned error; err = " + w(f)), u(Ds(f));
              return;
            }
            if (typeof y == "string") {
              y.length === 0
                ? u(new h("Token string is empty", 40170, 401))
                : y.length > dn
                ? u(new h("Token string exceeded max permitted length (was " + y.length + " bytes)", 40170, 401))
                : y === "undefined" || y === "null"
                ? u(new h("Token string was literal null/undefined", 40170, 401))
                : y[0] === "{" && !(P && P.indexOf("application/jwt") > -1)
                ? u(new h("Token was double-encoded; make sure you're not JSON-encoding an already encoded token request or details", 40170, 401))
                : l({ token: y });
              return;
            }
            if (typeof y != "object" || y === null) {
              let T = "Expected token request callback to call back with a token string or token request/details object, but got a " + typeof y;
              i.logAction(this.logger, i.LOG_ERROR, "Auth.requestToken()", T), u(new h(T, 40170, 401));
              return;
            }
            let A = JSON.stringify(y).length;
            if (A > dn && !n.suppressMaxLengthCheck) {
              u(new h("Token request/details object exceeded max permitted stringified size (was " + A + " bytes)", 40170, 401));
              return;
            }
            if ("issued" in y) {
              l(y);
              return;
            }
            if (!("keyName" in y)) {
              let T = "Expected token request callback to call back with a token string, token request object, or token details object";
              i.logAction(this.logger, i.LOG_ERROR, "Auth.requestToken()", T), u(new h(T, 40170, 401));
              return;
            }
            c(y, (T, k, U) => {
              if (T) {
                i.logAction(this.logger, i.LOG_ERROR, "Auth.requestToken()", "token request API call returned error; err = " + w(T)), u(Ds(T));
                return;
              }
              U || (k = JSON.parse(k)), i.logAction(this.logger, i.LOG_MINOR, "Auth.getToken()", "token received"), l(k);
            });
          });
        });
      }
      async createTokenRequest(t, e) {
        (e = e || this.authOptions), (t = t || oe(this.tokenParams));
        let n = e.key;
        if (!n) throw new h("No key specified", 40101, 403);
        let r = n.split(":"),
          o = r[0],
          a = r[1];
        if (!a) throw new h("Invalid key specified", 40101, 403);
        if (t.clientId === "") throw new h("clientId can\u2019t be an empty string", 40012, 400);
        "capability" in t && (t.capability = Hs(t.capability));
        let c = C({ keyName: o }, t),
          l = t.clientId || "",
          u = t.ttl || "",
          g = t.capability || "";
        c.timestamp || (c.timestamp = await this._getTimestamp(e && e.queryTime));
        let d = c.nonce || (c.nonce = uo()),
          m = c.timestamp,
          f =
            c.keyName +
            `
` +
            u +
            `
` +
            g +
            `
` +
            l +
            `
` +
            m +
            `
` +
            d +
            `
`;
        return (c.mac = c.mac || po(f, a)), i.logAction(this.logger, i.LOG_MINOR, "Auth.getTokenRequest()", "generated signed request"), c;
      }
      async getAuthParams() {
        if (this.method == "basic") return { key: this.key };
        {
          let t = await this._ensureValidAuthCredentials(!1);
          if (!t) throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
          return { access_token: t.token };
        }
      }
      async getAuthHeaders() {
        if (this.method == "basic") return { authorization: "Basic " + this.basicKey };
        {
          let t = await this._ensureValidAuthCredentials(!1);
          if (!t) throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
          return { authorization: "Bearer " + Ee(t.token) };
        }
      }
      _saveBasicOptions(t) {
        (this.method = "basic"), (this.key = t.key), (this.basicKey = Ee(t.key)), (this.authOptions = t || {}), "clientId" in t && this._userSetClientId(t.clientId);
      }
      _saveTokenOptions(t, e) {
        (this.method = "token"),
          t && (this.tokenParams = t),
          e && (e.token && (e.tokenDetails = typeof e.token == "string" ? { token: e.token } : e.token), e.tokenDetails && (this.tokenDetails = e.tokenDetails), "clientId" in e && this._userSetClientId(e.clientId), (this.authOptions = e));
      }
      async _ensureValidAuthCredentials(t) {
        let e = this.tokenDetails;
        if (e) {
          if (this._tokenClientIdMismatch(e.clientId)) throw new h("Mismatch between clientId in token (" + e.clientId + ") and current clientId (" + this.clientId + ")", 40102, 403);
          if (!this.client.isTimeOffsetSet() || !e.expires || e.expires >= this.client.getTimestampUsingOffset()) return i.logAction(this.logger, i.LOG_MINOR, "Auth.getToken()", "using cached token; expires = " + e.expires), e;
          i.logAction(this.logger, i.LOG_MINOR, "Auth.getToken()", "deleting expired token"), (this.tokenDetails = null);
        }
        let n = (this.waitingForTokenRequest || (this.waitingForTokenRequest = Se.create(this.logger))).createPromise();
        if (this.currentTokenRequestId !== null && !t) return n;
        let r = (this.currentTokenRequestId = yo()),
          o,
          a = null;
        try {
          o = await this.requestToken(this.tokenParams, this.authOptions);
        } catch (l) {
          a = l;
        }
        if (this.currentTokenRequestId > r) return i.logAction(this.logger, i.LOG_MINOR, "Auth._ensureValidAuthCredentials()", "Discarding token request response; overtaken by newer one"), n;
        this.currentTokenRequestId = null;
        let c = this.waitingForTokenRequest;
        return (this.waitingForTokenRequest = null), a ? (c == null || c.rejectAll(a), n) : (c == null || c.resolveAll((this.tokenDetails = o)), n);
      }
      _userSetClientId(t) {
        if (typeof t == "string" || t === null) {
          if (t === "*")
            throw new h(
              'Can\u2019t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)',
              40012,
              400
            );
          {
            let e = this._uncheckedSetClientId(t);
            if (e) throw e;
          }
        } else throw new h("clientId must be either a string or null", 40012, 400);
      }
      _uncheckedSetClientId(t) {
        if (this._tokenClientIdMismatch(t)) {
          let e = "Unexpected clientId mismatch: client has " + this.clientId + ", requested " + t,
            n = new h(e, 40102, 401);
          return i.logAction(this.logger, i.LOG_ERROR, "Auth._uncheckedSetClientId()", e), n;
        } else return (this.clientId = this.tokenParams.clientId = t), null;
      }
      _tokenClientIdMismatch(t) {
        return !!(this.clientId && this.clientId !== "*" && t && t !== "*" && this.clientId !== t);
      }
      static isTokenErr(t) {
        return t.code && t.code >= 40140 && t.code < 40150;
      }
      revokeTokens(t, e) {
        return this.client.rest.revokeTokens(t, e);
      }
      async _getTimestamp(t) {
        return this.client.getTimestamp(t || !!this.authOptions.queryTime);
      }
    },
    $ = pn;
  function Ct(s) {
    let t = [];
    if (s) for (let e in s) t.push(e + "=" + s[e]);
    return t.join("&");
  }
  function Ie(s, t) {
    return s + (t ? "?" : "") + Ct(t);
  }
  function Ro(s, t, e, n, r) {
    s.error
      ? i.logActionNoStrip(r, i.LOG_MICRO, "Http." + t + "()", "Received Error; " + Ie(e, n) + "; Error: " + w(s.error))
      : i.logActionNoStrip(
          r,
          i.LOG_MICRO,
          "Http." + t + "()",
          "Received; " + Ie(e, n) + "; Headers: " + Ct(s.headers) + "; StatusCode: " + s.statusCode + "; Body" + (p.BufferUtils.isBuffer(s.body) ? " (Base64): " + p.BufferUtils.base64Encode(s.body) : ": " + s.body)
        );
  }
  function Po(s, t, e, n, r) {
    r.shouldLog(i.LOG_MICRO) && i.logActionNoStrip(r, i.LOG_MICRO, "Http." + s + "()", "Sending; " + Ie(t, n) + "; Body" + (p.BufferUtils.isBuffer(e) ? " (Base64): " + p.BufferUtils.base64Encode(e) : ": " + e));
  }
  var fe = class {
    constructor(t) {
      this.client = t;
      (this.platformHttp = new p.Http(t)), (this.checkConnectivity = this.platformHttp.checkConnectivity ? () => this.platformHttp.checkConnectivity() : void 0);
    }
    get logger() {
      var t, e;
      return (e = (t = this.client) == null ? void 0 : t.logger) != null ? e : i.defaultLogger;
    }
    get supportsAuthHeaders() {
      return this.platformHttp.supportsAuthHeaders;
    }
    get supportsLinkHeaders() {
      return this.platformHttp.supportsLinkHeaders;
    }
    _getHosts(t) {
      let e = t.connection,
        n = e && e.connectionManager.host;
      return n ? [n].concat(R.getFallbackHosts(t.options)) : R.getHosts(t.options);
    }
    async do(t, e, n, r, o) {
      try {
        let a = this.client;
        if (!a) return { error: new h("http.do called without client", 5e4, 500) };
        let c =
            typeof e == "function"
              ? e
              : function (m) {
                  return a.baseUri(m) + e;
                },
          l = a._currentFallback;
        if (l)
          if (l.validUntil > Date.now()) {
            let m = await this.doUri(t, c(l.host), n, r, o);
            return m.error && this.platformHttp.shouldFallback(m.error) ? ((a._currentFallback = null), this.do(t, e, n, r, o)) : m;
          } else a._currentFallback = null;
        let u = this._getHosts(a);
        if (u.length === 1) return this.doUri(t, c(u[0]), n, r, o);
        let g = null,
          d = async (m, f) => {
            let y = m.shift();
            g = g != null ? g : new Date();
            let P = await this.doUri(t, c(y), n, r, o);
            return P.error && this.platformHttp.shouldFallback(P.error) && m.length
              ? Date.now() - g.getTime() > a.options.timeouts.httpMaxRetryDuration
                ? { error: new h(`Timeout for trying fallback hosts retries. Total elapsed time exceeded the ${a.options.timeouts.httpMaxRetryDuration}ms limit`, 50003, 500) }
                : d(m, !0)
              : (f && (a._currentFallback = { host: y, validUntil: Date.now() + a.options.timeouts.fallbackRetryTimeout }), P);
          };
        return d(u);
      } catch (a) {
        return { error: new h(`Unexpected error in Http.do: ${w(a)}`, 500, 5e4) };
      }
    }
    async doUri(t, e, n, r, o) {
      try {
        Po(t, e, r, o, this.logger);
        let a = await this.platformHttp.doUri(t, e, n, r, o);
        return this.logger.shouldLog(i.LOG_MICRO) && Ro(a, t, e, o, this.logger), a;
      } catch (a) {
        return { error: new h(`Unexpected error in Http.doUri: ${w(a)}`, 500, 5e4) };
      }
    }
  };
  function bo(s, t, e, n) {
    try {
      e.apply(t, n);
    } catch (r) {
      i.logAction(s, i.LOG_ERROR, "EventEmitter.emit()", "Unexpected listener exception: " + r + "; stack = " + (r && r.stack));
    }
  }
  function fn(s, t, e) {
    let n, r, o;
    for (let a = 0; a < s.length; a++)
      if (((n = s[a]), e && (n = n[e]), Array.isArray(n))) {
        for (; (r = n.indexOf(t)) !== -1; ) n.splice(r, 1);
        e && n.length === 0 && delete s[a][e];
      } else if (ie(n)) for (o in n) Object.prototype.hasOwnProperty.call(n, o) && Array.isArray(n[o]) && fn([n], t, o);
  }
  var mn = class {
      constructor(t) {
        this.logger = t;
        (this.any = []), (this.events = Object.create(null)), (this.anyOnce = []), (this.eventsOnce = Object.create(null));
      }
      on(...t) {
        if (t.length === 1) {
          let e = t[0];
          if (typeof e == "function") this.any.push(e);
          else throw new Error("EventListener.on(): Invalid arguments: " + p.Config.inspect(t));
        }
        if (t.length === 2) {
          let [e, n] = t;
          if (typeof n != "function") throw new Error("EventListener.on(): Invalid arguments: " + p.Config.inspect(t));
          if (z(e)) this.any.push(n);
          else if (Array.isArray(e))
            e.forEach((r) => {
              this.on(r, n);
            });
          else {
            if (typeof e != "string") throw new Error("EventListener.on(): Invalid arguments: " + p.Config.inspect(t));
            (this.events[e] || (this.events[e] = [])).push(n);
          }
        }
      }
      off(...t) {
        if (t.length == 0 || (z(t[0]) && z(t[1]))) {
          (this.any = []), (this.events = Object.create(null)), (this.anyOnce = []), (this.eventsOnce = Object.create(null));
          return;
        }
        let [e, n] = t,
          r = null,
          o = null;
        if (t.length === 1 || !n) typeof e == "function" ? (r = e) : (o = e);
        else {
          if (typeof n != "function") throw new Error("EventEmitter.off(): invalid arguments:" + p.Config.inspect(t));
          [o, r] = [e, n];
        }
        if (r && z(o)) {
          fn([this.any, this.events, this.anyOnce, this.eventsOnce], r);
          return;
        }
        if (Array.isArray(o)) {
          o.forEach((a) => {
            this.off(a, r);
          });
          return;
        }
        if (typeof o != "string") throw new Error("EventEmitter.off(): invalid arguments:" + p.Config.inspect(t));
        r ? fn([this.events, this.eventsOnce], r, o) : (delete this.events[o], delete this.eventsOnce[o]);
      }
      listeners(t) {
        if (t) {
          let e = this.events[t] || [];
          return this.eventsOnce[t] && Array.prototype.push.apply(e, this.eventsOnce[t]), e.length ? e : null;
        }
        return this.any.length ? this.any : null;
      }
      emit(t, ...e) {
        let n = { event: t },
          r = [];
        this.anyOnce.length && (Array.prototype.push.apply(r, this.anyOnce), (this.anyOnce = [])), this.any.length && Array.prototype.push.apply(r, this.any);
        let o = this.eventsOnce[t];
        o && (Array.prototype.push.apply(r, o), delete this.eventsOnce[t]);
        let a = this.events[t];
        a && Array.prototype.push.apply(r, a),
          r.forEach((c) => {
            bo(this.logger, n, c, e);
          });
      }
      once(...t) {
        let e = t.length;
        if (e === 0 || (e === 1 && typeof t[0] != "function")) {
          let o = t[0];
          return new Promise((a) => {
            this.once(o, a);
          });
        }
        let [n, r] = t;
        if (t.length === 1 && typeof n == "function") this.anyOnce.push(n);
        else if (z(n)) {
          if (typeof r != "function") throw new Error("EventEmitter.once(): Invalid arguments:" + p.Config.inspect(t));
          this.anyOnce.push(r);
        } else if (Array.isArray(n)) {
          let o = this,
            a = function () {
              let c = Array.prototype.slice.call(arguments);
              if (
                (n.forEach(function (l) {
                  o.off(l, a);
                }),
                typeof r != "function")
              )
                throw new Error("EventEmitter.once(): Invalid arguments:" + p.Config.inspect(t));
              r.apply(this, c);
            };
          n.forEach(function (c) {
            o.on(c, a);
          });
        } else {
          if (typeof n != "string") throw new Error("EventEmitter.once(): Invalid arguments:" + p.Config.inspect(t));
          let o = this.eventsOnce[n] || (this.eventsOnce[n] = []);
          if (r) {
            if (typeof r != "function") throw new Error("EventEmitter.once(): Invalid arguments:" + p.Config.inspect(t));
            o.push(r);
          }
        }
      }
      async whenState(t, e) {
        if (typeof t != "string" || typeof e != "string") throw new Error("whenState requires a valid state String argument");
        return t === e ? null : this.once(t);
      }
    },
    M = mn;
  var b = {
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
      OBJECT: 19,
      OBJECT_SYNC: 20,
      ANNOTATION: 21,
    },
    yn = [];
  Object.keys(b).forEach(function (s) {
    yn[b[s]] = s;
  });
  var W = {
      HAS_PRESENCE: 1,
      HAS_BACKLOG: 2,
      RESUMED: 4,
      TRANSIENT: 16,
      ATTACH_RESUME: 32,
      HAS_OBJECTS: 128,
      PRESENCE: 65536,
      PUBLISH: 1 << 17,
      SUBSCRIBE: 1 << 18,
      PRESENCE_SUBSCRIBE: 1 << 19,
      ANNOTATION_PUBLISH: 1 << 21,
      ANNOTATION_SUBSCRIBE: 1 << 22,
      OBJECT_SUBSCRIBE: 1 << 24,
      OBJECT_PUBLISH: 1 << 25,
    },
    Fs = Object.keys(W);
  W.MODE_ALL = W.PRESENCE | W.PUBLISH | W.SUBSCRIBE | W.PRESENCE_SUBSCRIBE | W.ANNOTATION_PUBLISH | W.ANNOTATION_SUBSCRIBE | W.OBJECT_SUBSCRIBE | W.OBJECT_PUBLISH;
  var At = ["PRESENCE", "PUBLISH", "SUBSCRIBE", "PRESENCE_SUBSCRIBE", "ANNOTATION_PUBLISH", "ANNOTATION_SUBSCRIBE", "OBJECT_SUBSCRIBE", "OBJECT_PUBLISH"];
  function Co(s) {
    return !s || !s.channelOptions ? { channelOptions: s, plugins: {}, baseEncodedPreviousPayload: void 0 } : s;
  }
  function Tt(s, t, e) {
    if (e && e.cipher) {
      s || _("Crypto");
      let n = s.getCipher(e.cipher, t);
      return { cipher: n.cipherParams, channelCipher: n.cipher };
    }
    return e != null ? e : {};
  }
  async function Ao(s, t) {
    let { data: e, encoding: n } = await js(s.data, s.encoding, t);
    return (s.data = e), (s.encoding = n), s;
  }
  async function js(s, t, e) {
    let n = e.channelCipher,
      r = s,
      o = t ? t + "/" : "";
    p.BufferUtils.isBuffer(r) || ((r = p.BufferUtils.utf8Encode(String(r))), (o = o + "utf-8/"));
    let a = await n.encrypt(r);
    return (o = o + "cipher+" + n.algorithm), { data: a, encoding: o };
  }
  async function xe(s, t) {
    let e = typeof s.data == "string" || p.BufferUtils.isBuffer(s.data) || s.data === null || s.data === void 0,
      { data: n, encoding: r } = Ws(s.data, s.encoding, e);
    return (s.data = n), (s.encoding = r), t != null && t.cipher ? Ao(s, t) : s;
  }
  function Ws(s, t, e) {
    if (e) return { data: s, encoding: t };
    if (ie(s) || Array.isArray(s)) return { data: JSON.stringify(s), encoding: t ? t + "/json" : "json" };
    throw new h("Data type is unsupported", 40013, 400);
  }
  async function Ue(s, t) {
    let { data: e, encoding: n, error: r } = await Vs(s.data, s.encoding, t);
    if (((s.data = e), (s.encoding = n), r)) throw r;
  }
  async function Vs(s, t, e) {
    let n = Co(e),
      r = s,
      o = s,
      a = t,
      c;
    if (t) {
      let l = t.split("/"),
        u,
        g = l.length,
        d = "";
      try {
        for (; (u = g) > 0; ) {
          let m = l[--g].match(/([-\w]+)(\+([\w-]+))?/);
          if (!m) break;
          switch (((d = m[1]), d)) {
            case "base64":
              (o = p.BufferUtils.base64Decode(String(o))), u == l.length && (r = o);
              continue;
            case "utf-8":
              o = p.BufferUtils.utf8Decode(o);
              continue;
            case "json":
              o = JSON.parse(o);
              continue;
            case "cipher":
              if (n.channelOptions != null && n.channelOptions.cipher && n.channelOptions.channelCipher) {
                let f = m[3],
                  y = n.channelOptions.channelCipher;
                if (f != y.algorithm) throw new Error("Unable to decrypt message with given cipher; incompatible cipher params");
                o = await y.decrypt(o);
                continue;
              } else throw new Error("Unable to decrypt message; not an encrypted channel");
            case "vcdiff":
              if (!n.plugins || !n.plugins.vcdiff) throw new h("Missing Vcdiff decoder (https://github.com/ably-forks/vcdiff-decoder)", 40019, 400);
              if (typeof Uint8Array == "undefined") throw new h("Delta decoding not supported on this browser (need ArrayBuffer & Uint8Array)", 40020, 400);
              try {
                let f = n.baseEncodedPreviousPayload;
                typeof f == "string" && (f = p.BufferUtils.utf8Encode(f));
                let y = p.BufferUtils.toBuffer(f);
                (o = p.BufferUtils.toBuffer(o)), (o = p.BufferUtils.arrayBufferViewToBuffer(n.plugins.vcdiff.decode(o, y))), (r = o);
              } catch (f) {
                throw new h("Vcdiff delta decode failed with " + f, 40018, 400);
              }
              continue;
            default:
              throw new Error("Unknown encoding");
          }
        }
      } catch (m) {
        let f = m;
        c = new h(`Error processing the ${d} encoding, decoder returned \u2018${f.message}\u2019`, f.code || 40013, 400);
      } finally {
        a = u <= 0 ? null : l.slice(0, u).join("/");
      }
    }
    return c ? { error: c, data: o, encoding: a } : ((n.baseEncodedPreviousPayload = r), { data: o, encoding: a });
  }
  function Be(...s) {
    let t = s.length > 0 ? "json" : "msgpack",
      { data: e, encoding: n } = zs(this.data, this.encoding, t);
    return Object.assign({}, this, { encoding: n, data: e });
  }
  function zs(s, t, e) {
    return !s || !p.BufferUtils.isBuffer(s) ? { data: s, encoding: t } : e === "msgpack" ? { data: p.BufferUtils.toBuffer(s), encoding: t } : { data: p.BufferUtils.base64Encode(s), encoding: t ? t + "/base64" : "base64" };
  }
  var we = { encryptData: js, encodeData: Ws, encodeDataForWire: zs, decodeData: Vs };
  function et(s) {
    let { id: t, connectionId: e, timestamp: n } = s,
      r;
    switch (s.action) {
      case b.MESSAGE: {
        r = s.messages;
        break;
      }
      case b.PRESENCE:
      case b.SYNC:
        r = s.presence;
        break;
      case b.ANNOTATION:
        r = s.annotations;
        break;
      case b.OBJECT:
      case b.OBJECT_SYNC:
        r = s.state;
        break;
      default:
        throw new h("Unexpected action " + s.action, 4e4, 400);
    }
    for (let o = 0; o < r.length; o++) {
      let a = r[o];
      a.connectionId || (a.connectionId = e), a.timestamp || (a.timestamp = n), t && !a.id && (a.id = t + ":" + o);
    }
  }
  function ue(s, t) {
    let e = "[" + t;
    for (let n in s)
      n === "data"
        ? typeof s.data == "string"
          ? (e += "; data=" + s.data)
          : p.BufferUtils.isBuffer(s.data)
          ? (e += "; data (buffer)=" + p.BufferUtils.base64Encode(s.data))
          : typeof s.data != "undefined" && (e += "; data (json)=" + JSON.stringify(s.data))
        : n && (n === "extras" || n === "operation")
        ? (e += "; " + n + "=" + JSON.stringify(s[n]))
        : s[n] !== void 0 && (e += "; " + n + "=" + s[n]);
    return (e += "]"), e;
  }
  var ee = class {};
  var It = class {
    constructor(t) {
      this.Platform = p;
      this.ErrorInfo = h;
      this.Logger = i;
      this.Defaults = R;
      this.Utils = O;
      this.EventEmitter = M;
      this.MessageEncoding = we;
      var n, r, o, a, c, l, u, g, d, m;
      (this._additionalHTTPRequestImplementations = (n = t.plugins) != null ? n : null),
        (this.logger = new i()),
        this.logger.setLog(t.logLevel, t.logHandler),
        i.logAction(this.logger, i.LOG_MICRO, "BaseClient()", "initialized with clientOptions " + p.Config.inspect(t)),
        (this._MsgPack = (o = (r = t.plugins) == null ? void 0 : r.MsgPack) != null ? o : null);
      let e = (this.options = R.normaliseOptions(t, this._MsgPack, this.logger));
      if (e.key) {
        let f = e.key.match(/^([^:\s]+):([^:.\s]+)$/);
        if (!f) {
          let y = "invalid key parameter";
          throw (i.logAction(this.logger, i.LOG_ERROR, "BaseClient()", y), new h(y, 40400, 404));
        }
        (e.keyName = f[1]), (e.keySecret = f[2]);
      }
      if ("clientId" in e)
        if (typeof e.clientId == "string" || e.clientId === null) {
          if (e.clientId === "*") throw new h('Can\u2019t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})', 40012, 400);
        } else throw new h("clientId must be either a string or null", 40012, 400);
      i.logAction(this.logger, i.LOG_MINOR, "BaseClient()", "started; version = " + R.version),
        (this._currentFallback = null),
        (this.serverTimeOffset = null),
        (this.http = new fe(this)),
        (this.auth = new $(this, e)),
        (this._rest = (a = t.plugins) != null && a.Rest ? new t.plugins.Rest(this) : null),
        (this._Crypto = (l = (c = t.plugins) == null ? void 0 : c.Crypto) != null ? l : null),
        (this.__FilteredSubscriptions = (g = (u = t.plugins) == null ? void 0 : u.MessageInteractions) != null ? g : null),
        (this._Annotations = (m = (d = t.plugins) == null ? void 0 : d.Annotations) != null ? m : null);
    }
    get rest() {
      return this._rest || _("Rest"), this._rest;
    }
    get _FilteredSubscriptions() {
      return this.__FilteredSubscriptions || _("MessageInteractions"), this.__FilteredSubscriptions;
    }
    get channels() {
      return this.rest.channels;
    }
    get push() {
      return this.rest.push;
    }
    device() {
      var t;
      return (!((t = this.options.plugins) != null && t.Push) || !this.push.LocalDevice) && _("Push"), this._device || (this._device = this.push.LocalDevice.load(this)), this._device;
    }
    baseUri(t) {
      return R.getHttpScheme(this.options) + t + ":" + R.getPort(this.options, !1);
    }
    async stats(t) {
      return this.rest.stats(t);
    }
    async time(t) {
      return this.rest.time(t);
    }
    async request(t, e, n, r, o, a) {
      return this.rest.request(t, e, n, r, o, a);
    }
    batchPublish(t) {
      return this.rest.batchPublish(t);
    }
    batchPresence(t) {
      return this.rest.batchPresence(t);
    }
    setLog(t) {
      this.logger.setLog(t.level, t.handler);
    }
    async getTimestamp(t) {
      return !this.isTimeOffsetSet() && t ? this.time() : this.getTimestampUsingOffset();
    }
    getTimestampUsingOffset() {
      return Date.now() + (this.serverTimeOffset || 0);
    }
    isTimeOffsetSet() {
      return this.serverTimeOffset !== null;
    }
  };
  It.Platform = p;
  var wt = It;
  var Rn = class s {
      toJSON() {
        var t, e, n;
        return {
          id: this.id,
          deviceSecret: this.deviceSecret,
          platform: this.platform,
          formFactor: this.formFactor,
          clientId: this.clientId,
          metadata: this.metadata,
          deviceIdentityToken: this.deviceIdentityToken,
          push: { recipient: (t = this.push) == null ? void 0 : t.recipient, state: (e = this.push) == null ? void 0 : e.state, error: (n = this.push) == null ? void 0 : n.error },
        };
      }
      toString() {
        var e, n, r, o;
        let t = "[DeviceDetails";
        return (
          this.id && (t += "; id=" + this.id),
          this.platform && (t += "; platform=" + this.platform),
          this.formFactor && (t += "; formFactor=" + this.formFactor),
          this.clientId && (t += "; clientId=" + this.clientId),
          this.metadata && (t += "; metadata=" + this.metadata),
          this.deviceIdentityToken && (t += "; deviceIdentityToken=" + JSON.stringify(this.deviceIdentityToken)),
          (e = this.push) != null && e.recipient && (t += "; push.recipient=" + JSON.stringify(this.push.recipient)),
          (n = this.push) != null && n.state && (t += "; push.state=" + this.push.state),
          (r = this.push) != null && r.error && (t += "; push.error=" + JSON.stringify(this.push.error)),
          (o = this.push) != null && o.metadata && (t += "; push.metadata=" + this.push.metadata),
          (t += "]"),
          t
        );
      }
      static toRequestBody(t, e, n) {
        return H(t, e, n);
      }
      static fromResponseBody(t, e, n) {
        return n && (t = B(t, e, n)), Array.isArray(t) ? s.fromValuesArray(t) : s.fromValues(t);
      }
      static fromValues(t) {
        return (t.error = t.error && h.fromValues(t.error)), Object.assign(new s(), t);
      }
      static fromLocalDevice(t) {
        return Object.assign(new s(), t);
      }
      static fromValuesArray(t) {
        let e = t.length,
          n = new Array(e);
        for (let r = 0; r < e; r++) n[r] = s.fromValues(t[r]);
        return n;
      }
    },
    me = Rn;
  async function Js(s, t, e, n) {
    if (s.http.supportsAuthHeaders) {
      let r = await s.auth.getAuthHeaders();
      return n(C(r, t), e);
    } else {
      let r = await s.auth.getAuthParams();
      return n(t, C(r, e));
    }
  }
  function To(s, t, e) {
    if (s.err && !s.body) return { err: s.err };
    if (s.statusCode === ge.NoContent) return D(E({}, s), { body: [], unpacked: !0 });
    let n = s.body;
    if (!s.unpacked)
      try {
        n = B(n, t, e);
      } catch (c) {
        return Qe(c) ? { err: c } : { err: new v(w(c), null) };
      }
    if (!n) return { err: new v("unenvelope(): Response body is missing", null) };
    let { statusCode: r, response: o, headers: a } = n;
    if (r === void 0) return D(E({}, s), { body: n, unpacked: !0 });
    if (r < 200 || r >= 300) {
      let c = (o && o.error) || s.err;
      return c || ((c = new Error("Error in unenveloping " + n)), (c.statusCode = r)), { err: c, body: o, headers: a, unpacked: !0, statusCode: r };
    }
    return { err: s.err, body: o, headers: a, unpacked: !0, statusCode: r };
  }
  function Io(s, t, e, n, r) {
    s.err
      ? i.logAction(r, i.LOG_MICRO, "Resource." + t + "()", "Received Error; " + Ie(e, n) + "; Error: " + w(s.err))
      : i.logAction(
          r,
          i.LOG_MICRO,
          "Resource." + t + "()",
          "Received; " + Ie(e, n) + "; Headers: " + Ct(s.headers) + "; StatusCode: " + s.statusCode + "; Body: " + (p.BufferUtils.isBuffer(s.body) ? " (Base64): " + p.BufferUtils.base64Encode(s.body) : ": " + p.Config.inspect(s.body))
        );
  }
  var Pn = class s {
      static async get(t, e, n, r, o, a) {
        return s.do(x.Get, t, e, null, n, r, o, a != null ? a : !1);
      }
      static async delete(t, e, n, r, o, a) {
        return s.do(x.Delete, t, e, null, n, r, o, a);
      }
      static async post(t, e, n, r, o, a, c) {
        return s.do(x.Post, t, e, n, r, o, a, c);
      }
      static async patch(t, e, n, r, o, a, c) {
        return s.do(x.Patch, t, e, n, r, o, a, c);
      }
      static async put(t, e, n, r, o, a, c) {
        return s.do(x.Put, t, e, n, r, o, a, c);
      }
      static async do(t, e, n, r, o, a, c, l) {
        c && ((a = a || {}).envelope = c);
        let u = e.logger;
        async function g(m, f) {
          var P;
          if (u.shouldLog(i.LOG_MICRO)) {
            let A = r;
            if (((P = m["content-type"]) == null ? void 0 : P.indexOf("msgpack")) > 0)
              try {
                e._MsgPack || _("MsgPack"), (A = e._MsgPack.decode(r));
              } catch (T) {
                i.logAction(u, i.LOG_MICRO, "Resource." + t + "()", "Sending MsgPack Decoding Error: " + w(T));
              }
            i.logAction(u, i.LOG_MICRO, "Resource." + t + "()", "Sending; " + Ie(n, f) + "; Body: " + A);
          }
          let y = await e.http.do(t, n, m, r, f);
          return y.error && $.isTokenErr(y.error) ? (await e.auth.authorize(null, null), Js(e, m, f, g)) : { err: y.error, body: y.body, headers: y.headers, unpacked: y.unpacked, statusCode: y.statusCode };
        }
        let d = await Js(e, o, a, g);
        if ((c && (d = To(d, e._MsgPack, c)), u.shouldLog(i.LOG_MICRO) && Io(d, t, n, a, u), l)) {
          if (d.err) throw d.err;
          {
            let m = E({}, d);
            return delete m.err, m;
          }
        }
        return d;
      }
    },
    S = Pn;
  function wo(s) {
    let t = s.match(/^\.\/(\w+)\?(.*)$/);
    return t && t[2] && Ae(t[2]);
  }
  function Oo(s) {
    typeof s == "string" && (s = s.split(","));
    let t = {};
    for (let e = 0; e < s.length; e++) {
      let n = s[e].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);
      if (n) {
        let r = wo(n[1]);
        r && (t[n[2]] = r);
      }
    }
    return t;
  }
  function ko(s, t, e) {
    return !(e && (t || typeof s.code == "number"));
  }
  var bn = class {
      constructor(t, e, n, r, o, a) {
        (this.client = t), (this.path = e), (this.headers = n), (this.envelope = r != null ? r : null), (this.bodyHandler = o), (this.useHttpPaginatedResponse = a || !1);
      }
      get logger() {
        return this.client.logger;
      }
      async get(t) {
        let e = await S.get(this.client, this.path, this.headers, t, this.envelope, !1);
        return this.handlePage(e);
      }
      async delete(t) {
        let e = await S.delete(this.client, this.path, this.headers, t, this.envelope, !1);
        return this.handlePage(e);
      }
      async post(t, e) {
        let n = await S.post(this.client, this.path, e, this.headers, t, this.envelope, !1);
        return this.handlePage(n);
      }
      async put(t, e) {
        let n = await S.put(this.client, this.path, e, this.headers, t, this.envelope, !1);
        return this.handlePage(n);
      }
      async patch(t, e) {
        let n = await S.patch(this.client, this.path, e, this.headers, t, this.envelope, !1);
        return this.handlePage(n);
      }
      async handlePage(t) {
        if (t.err && ko(t.err, t.body, this.useHttpPaginatedResponse)) throw (i.logAction(this.logger, i.LOG_ERROR, "PaginatedResource.handlePage()", "Unexpected error getting resource: err = " + w(t.err)), t.err);
        let e, n, r;
        try {
          e = t.statusCode == ge.NoContent ? [] : await this.bodyHandler(t.body, t.headers || {}, t.unpacked);
        } catch (o) {
          throw t.err || o;
        }
        return t.headers && (n = t.headers.Link || t.headers.link) && (r = Oo(n)), this.useHttpPaginatedResponse ? new Cn(this, e, t.headers || {}, t.statusCode, r, t.err) : new Ot(this, e, r);
      }
    },
    Ot = class {
      constructor(t, e, n) {
        (this.resource = t), (this.items = e), (this._relParams = n);
      }
      async first() {
        if (this.hasFirst()) return this.get(this._relParams.first);
        throw new h("No link to the first page of results", 40400, 404);
      }
      async current() {
        if (this.hasCurrent()) return this.get(this._relParams.current);
        throw new h("No link to the current page of results", 40400, 404);
      }
      async next() {
        return this.hasNext() ? this.get(this._relParams.next) : null;
      }
      hasFirst() {
        return this._relParams != null && "first" in this._relParams;
      }
      hasCurrent() {
        return this._relParams != null && "current" in this._relParams;
      }
      hasNext() {
        return this._relParams != null && "next" in this._relParams;
      }
      isLast() {
        return !this.hasNext();
      }
      async get(t) {
        let e = this.resource,
          n = await S.get(e.client, e.path, e.headers, t, e.envelope, !1);
        return e.handlePage(n);
      }
    },
    Cn = class extends Ot {
      constructor(e, n, r, o, a, c) {
        super(e, n, a);
        (this.statusCode = o), (this.success = o < 300 && o >= 200), (this.headers = r), (this.errorCode = c && c.code), (this.errorMessage = c && c.message);
      }
      toJSON() {
        return { items: this.items, statusCode: this.statusCode, success: this.success, headers: this.headers, errorCode: this.errorCode, errorMessage: this.errorMessage };
      }
    },
    V = bn;
  var Oe = class Oe {
    toJSON() {
      return { channel: this.channel, deviceId: this.deviceId, clientId: this.clientId };
    }
    toString() {
      let t = "[PushChannelSubscription";
      return this.channel && (t += "; channel=" + this.channel), this.deviceId && (t += "; deviceId=" + this.deviceId), this.clientId && (t += "; clientId=" + this.clientId), (t += "]"), t;
    }
    static fromResponseBody(t, e, n) {
      return n && (t = B(t, e, n)), Array.isArray(t) ? Oe.fromValuesArray(t) : Oe.fromValues(t);
    }
    static fromValues(t) {
      return Object.assign(new Oe(), t);
    }
    static fromValuesArray(t) {
      let e = t.length,
        n = new Array(e);
      for (let r = 0; r < e; r++) n[r] = Oe.fromValues(t[r]);
      return n;
    }
  };
  Oe.toRequestBody = H;
  var An = Oe,
    _e = An;
  var Tn = class {
      constructor(t) {
        var e;
        (this.client = t),
          (this.admin = new In(t)),
          p.Config.push && (e = t.options.plugins) != null && e.Push && ((this.stateMachine = new t.options.plugins.Push.ActivationStateMachine(t)), (this.LocalDevice = t.options.plugins.Push.localDeviceFactory(me)));
      }
      async activate(t, e) {
        await new Promise((n, r) => {
          var o;
          if (!((o = this.client.options.plugins) != null && o.Push)) {
            r(Ze("Push"));
            return;
          }
          if (!this.stateMachine) {
            r(new h("This platform is not supported as a target of push notifications", 4e4, 400));
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
            n();
          }),
            (this.stateMachine.updateFailedCallback = e),
            this.stateMachine.handleEvent(new this.client.options.plugins.Push.CalledActivate(this.stateMachine, t));
        });
      }
      async deactivate(t) {
        await new Promise((e, n) => {
          var r;
          if (!((r = this.client.options.plugins) != null && r.Push)) {
            n(Ze("Push"));
            return;
          }
          if (!this.stateMachine) {
            n(new h("This platform is not supported as a target of push notifications", 4e4, 400));
            return;
          }
          if (this.stateMachine.deactivatedCallback) {
            n(new h("Deactivation already in progress", 4e4, 400));
            return;
          }
          (this.stateMachine.deactivatedCallback = (o) => {
            if (o) {
              n(o);
              return;
            }
            e();
          }),
            this.stateMachine.handleEvent(new this.client.options.plugins.Push.CalledDeactivate(this.stateMachine, t));
        });
      }
    },
    In = class {
      constructor(t) {
        (this.client = t), (this.deviceRegistrations = new wn(t)), (this.channelSubscriptions = new On(t));
      }
      async publish(t, e) {
        let n = this.client,
          r = n.options.useBinaryProtocol ? "msgpack" : "json",
          o = R.defaultPostHeaders(n.options, { format: r }),
          a = {},
          c = C({ recipient: t }, e);
        C(o, n.options.headers), n.options.pushFullWait && C(a, { fullWait: "true" });
        let l = H(c, n._MsgPack, r);
        await S.post(n, "/push/publish", l, o, a, null, !0);
      }
    },
    wn = class {
      constructor(t) {
        this.client = t;
      }
      async save(t) {
        let e = this.client,
          n = me.fromValues(t),
          r = e.options.useBinaryProtocol ? "msgpack" : "json",
          o = R.defaultPostHeaders(e.options, { format: r }),
          a = {};
        C(o, e.options.headers), e.options.pushFullWait && C(a, { fullWait: "true" });
        let c = H(n, e._MsgPack, r),
          l = await S.put(e, "/push/deviceRegistrations/" + encodeURIComponent(t.id), c, o, a, null, !0);
        return me.fromResponseBody(l.body, e._MsgPack, l.unpacked ? void 0 : r);
      }
      async get(t) {
        let e = this.client,
          n = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = R.defaultGetHeaders(e.options, { format: n }),
          o = t.id || t;
        if (typeof o != "string" || !o.length) throw new h("First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails", 4e4, 400);
        C(r, e.options.headers);
        let a = await S.get(e, "/push/deviceRegistrations/" + encodeURIComponent(o), r, {}, null, !0);
        return me.fromResponseBody(a.body, e._MsgPack, a.unpacked ? void 0 : n);
      }
      async list(t) {
        let e = this.client,
          n = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = this.client.http.supportsLinkHeaders ? void 0 : n,
          o = R.defaultGetHeaders(e.options, { format: n });
        return (
          C(o, e.options.headers),
          new V(e, "/push/deviceRegistrations", o, r, async function (a, c, l) {
            return me.fromResponseBody(a, e._MsgPack, l ? void 0 : n);
          }).get(t)
        );
      }
      async remove(t) {
        let e = this.client,
          n = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = R.defaultGetHeaders(e.options, { format: n }),
          o = {},
          a = t.id || t;
        if (typeof a != "string" || !a.length) throw new h("First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails", 4e4, 400);
        C(r, e.options.headers), e.options.pushFullWait && C(o, { fullWait: "true" }), await S.delete(e, "/push/deviceRegistrations/" + encodeURIComponent(a), r, o, null, !0);
      }
      async removeWhere(t) {
        let e = this.client,
          n = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = R.defaultGetHeaders(e.options, { format: n });
        C(r, e.options.headers), e.options.pushFullWait && C(t, { fullWait: "true" }), await S.delete(e, "/push/deviceRegistrations", r, t, null, !0);
      }
    },
    On = class s {
      constructor(t) {
        this.remove = s.prototype.removeWhere;
        this.client = t;
      }
      async save(t) {
        let e = this.client,
          n = _e.fromValues(t),
          r = e.options.useBinaryProtocol ? "msgpack" : "json",
          o = R.defaultPostHeaders(e.options, { format: r }),
          a = {};
        C(o, e.options.headers), e.options.pushFullWait && C(a, { fullWait: "true" });
        let c = H(n, e._MsgPack, r),
          l = await S.post(e, "/push/channelSubscriptions", c, o, a, null, !0);
        return _e.fromResponseBody(l.body, e._MsgPack, l.unpacked ? void 0 : r);
      }
      async list(t) {
        let e = this.client,
          n = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = this.client.http.supportsLinkHeaders ? void 0 : n,
          o = R.defaultGetHeaders(e.options, { format: n });
        return (
          C(o, e.options.headers),
          new V(e, "/push/channelSubscriptions", o, r, async function (a, c, l) {
            return _e.fromResponseBody(a, e._MsgPack, l ? void 0 : n);
          }).get(t)
        );
      }
      async removeWhere(t) {
        let e = this.client,
          n = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = R.defaultGetHeaders(e.options, { format: n });
        C(r, e.options.headers), e.options.pushFullWait && C(t, { fullWait: "true" }), await S.delete(e, "/push/channelSubscriptions", r, t, null, !0);
      }
      async listChannels(t) {
        let e = this.client,
          n = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = this.client.http.supportsLinkHeaders ? void 0 : n,
          o = R.defaultGetHeaders(e.options, { format: n });
        return (
          C(o, e.options.headers),
          e.options.pushFullWait && C(t, { fullWait: "true" }),
          new V(e, "/push/channels", o, r, async function (a, c, l) {
            let u = !l && n ? B(a, e._MsgPack, n) : a;
            for (let g = 0; g < u.length; g++) u[g] = String(u[g]);
            return u;
          }).get(t)
        );
      }
    },
    Ks = Tn;
  var Qs = ["absent", "present", "enter", "leave", "update"];
  async function kn(s, t, e, n) {
    let r = Tt(t, s, n != null ? n : null);
    return he.fromValues(e).decode(r, s);
  }
  async function $s(s, t, e, n) {
    return Promise.all(
      e.map(function (r) {
        return kn(s, t, r, n);
      })
    );
  }
  async function Mo(s, t) {
    return he.fromValues(s).decode(t.channelOptions, t.logger);
  }
  async function Mt(s, t) {
    return Promise.all(
      s.map(function (e) {
        return Mo(e, t);
      })
    );
  }
  var kt = class s extends ee {
      isSynthesized() {
        return !this.id || !this.connectionId ? !0 : this.id.substring(this.connectionId.length, 0) !== this.connectionId;
      }
      parseId() {
        if (!this.id) throw new Error("parseId(): Presence message does not contain an id");
        let e = this.id.split(":");
        return { connectionId: e[0], msgSerial: parseInt(e[1], 10), index: parseInt(e[2], 10) };
      }
      async encode(e) {
        let n = Object.assign(new he(), this, { action: Qs.indexOf(this.action || "present") });
        return xe(n, e);
      }
      static fromValues(e) {
        return Object.assign(new s(), e);
      }
      static fromValuesArray(e) {
        return e.map((n) => s.fromValues(n));
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
        return Be.call(this, ...e);
      }
      static fromValues(e) {
        return Object.assign(new s(), e);
      }
      static fromValuesArray(e) {
        return e.map((n) => s.fromValues(n));
      }
      async decode(e, n) {
        let r = Object.assign(new kt(), D(E({}, this), { action: Qs[this.action] }));
        try {
          await Ue(r, e);
        } catch (o) {
          i.logAction(n, i.LOG_ERROR, "WirePresenceMessage.decode()", w(o));
        }
        return r;
      }
      toString() {
        return ue(this, "WirePresenceMessage");
      }
    },
    Q = kt;
  var Mn = class {
      constructor(t) {
        this.channel = t;
      }
      get logger() {
        return this.channel.logger;
      }
      async get(t) {
        i.logAction(this.logger, i.LOG_MICRO, "RestPresence.get()", "channel = " + this.channel.name);
        let e = this.channel.client,
          n = e.options.useBinaryProtocol ? "msgpack" : "json",
          r = this.channel.client.http.supportsLinkHeaders ? void 0 : n,
          o = R.defaultGetHeaders(e.options, { format: n });
        return (
          C(o, e.options.headers),
          new V(e, this.channel.client.rest.presenceMixin.basePath(this), o, r, async (a, c, l) => {
            let u = l ? a : B(a, e._MsgPack, n);
            return Mt(u, this.channel);
          }).get(t)
        );
      }
      async history(t) {
        return i.logAction(this.logger, i.LOG_MICRO, "RestPresence.history()", "channel = " + this.channel.name), this.channel.client.rest.presenceMixin.history(this, t);
      }
    },
    Xs = Mn;
  var Ys = ["message.create", "message.update", "message.delete", "meta", "message.summary"];
  function Eo(s) {
    return Ys[s || 0] || "unknown";
  }
  function vo(s) {
    let t = 0;
    return s.name && (t += s.name.length), s.clientId && (t += s.clientId.length), s.extras && (t += JSON.stringify(s.extras).length), s.data && (t += tn(s.data)), t;
  }
  async function En(s, t, e, n) {
    let r = Tt(t, s, n != null ? n : null);
    return ye.fromValues(e).decode(r, s);
  }
  async function Zs(s, t, e, n) {
    return Promise.all(
      e.map(function (r) {
        return En(s, t, r, n);
      })
    );
  }
  async function So(s, t) {
    return ye.fromValues(s).decode(t.channelOptions, t.logger);
  }
  async function er(s, t) {
    return Promise.all(
      s.map(function (e) {
        return So(e, t);
      })
    );
  }
  async function vt(s, t) {
    return Promise.all(s.map((e) => e.encode(t)));
  }
  var tr = H;
  function Le(s) {
    let t,
      e = 0;
    for (let n = 0; n < s.length; n++) (t = s[n]), (e += t.size || (t.size = vo(t)));
    return e;
  }
  var Et = class s extends ee {
      expandFields() {
        this.action === "message.create" && (this.version && !this.serial && (this.serial = this.version), this.timestamp && !this.createdAt && (this.createdAt = this.timestamp));
      }
      async encode(e) {
        let n = Object.assign(new ye(), this, { action: Ys.indexOf(this.action || "message.create") });
        return xe(n, e);
      }
      static fromValues(e) {
        return Object.assign(new s(), e);
      }
      static fromValuesArray(e) {
        return e.map((n) => s.fromValues(n));
      }
      toString() {
        return ue(this, "Message");
      }
    },
    ye = class s extends ee {
      toJSON(...e) {
        return Be.call(this, ...e);
      }
      static fromValues(e) {
        return Object.assign(new s(), e);
      }
      static fromValuesArray(e) {
        return e.map((n) => s.fromValues(n));
      }
      async decodeWithErr(e, n) {
        let r = Object.assign(new Et(), D(E({}, this), { action: Eo(this.action) })),
          o;
        try {
          await Ue(r, e);
        } catch (a) {
          i.logAction(n, i.LOG_ERROR, "WireMessage.decode()", w(a)), (o = a);
        }
        return r.expandFields(), { decoded: r, err: o };
      }
      async decode(e, n) {
        let { decoded: r } = await this.decodeWithErr(e, n);
        return r;
      }
      toString() {
        return ue(this, "WireMessage");
      }
    },
    te = Et;
  var xo = 9;
  function Uo(s) {
    return s.every(function (t) {
      return !t.id;
    });
  }
  var vn = class {
      constructor(t, e, n) {
        this._annotations = null;
        var r, o;
        i.logAction(t.logger, i.LOG_MINOR, "RestChannel()", "started; name = " + e),
          (this.name = e),
          (this.client = t),
          (this.presence = new Xs(this)),
          (this.channelOptions = ve((r = t._Crypto) != null ? r : null, this.logger, n)),
          (o = t.options.plugins) != null && o.Push && (this._push = new t.options.plugins.Push.PushChannel(this)),
          t._Annotations && (this._annotations = new t._Annotations.RestAnnotations(this));
      }
      get annotations() {
        return this._annotations || _("Annotations"), this._annotations;
      }
      get push() {
        return this._push || _("Push"), this._push;
      }
      get logger() {
        return this.client.logger;
      }
      setOptions(t) {
        var e;
        this.channelOptions = ve((e = this.client._Crypto) != null ? e : null, this.logger, t);
      }
      async history(t) {
        return i.logAction(this.logger, i.LOG_MICRO, "RestChannel.history()", "channel = " + this.name), this.client.rest.channelMixin.history(this, t);
      }
      async publish(...t) {
        let e = t[0],
          n = t[1],
          r,
          o;
        if (typeof e == "string" || e === null) (r = [te.fromValues({ name: e, data: n })]), (o = t[2]);
        else if (ie(e)) (r = [te.fromValues(e)]), (o = t[1]);
        else if (Array.isArray(e)) (r = te.fromValuesArray(e)), (o = t[1]);
        else throw new h("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
        o || (o = {});
        let a = this.client,
          c = a.options,
          l = c.useBinaryProtocol ? "msgpack" : "json",
          u = a.options.idempotentRestPublishing,
          g = R.defaultPostHeaders(a.options, { format: l });
        if ((C(g, c.headers), u && Uo(r))) {
          let y = await nn(xo);
          r.forEach(function (P, A) {
            P.id = y + ":" + A.toString();
          });
        }
        let d = await vt(r, this.channelOptions),
          m = Le(d),
          f = c.maxMessageSize;
        if (m > f) throw new h(`Maximum size of messages that can be published at once exceeded (was ${m} bytes; limit is ${f} bytes)`, 40009, 400);
        await this._publish(tr(d, a._MsgPack, l), g, o);
      }
      async _publish(t, e, n) {
        await S.post(this.client, this.client.rest.channelMixin.basePath(this) + "/messages", t, e, n, null, !0);
      }
      async status() {
        return this.client.rest.channelMixin.status(this);
      }
    },
    nr = vn;
  var Sn = class s {
      constructor(t) {
        (this.entries = (t && t.entries) || void 0),
          (this.schema = (t && t.schema) || void 0),
          (this.appId = (t && t.appId) || void 0),
          (this.inProgress = (t && t.inProgress) || void 0),
          (this.unit = (t && t.unit) || void 0),
          (this.intervalId = (t && t.intervalId) || void 0);
      }
      static fromValues(t) {
        return new s(t);
      }
    },
    sr = Sn;
  var Ne = class {
    static basePath(t) {
      return "/channels/" + encodeURIComponent(t.name);
    }
    static history(t, e) {
      let n = t.client,
        r = n.options.useBinaryProtocol ? "msgpack" : "json",
        o = t.client.http.supportsLinkHeaders ? void 0 : r,
        a = R.defaultGetHeaders(n.options, { format: r });
      return (
        C(a, n.options.headers),
        new V(n, this.basePath(t) + "/messages", a, o, async function (c, l, u) {
          let g = u ? c : B(c, n._MsgPack, r);
          return er(g, t);
        }).get(e)
      );
    }
    static async status(t) {
      let e = t.client.options.useBinaryProtocol ? "msgpack" : "json",
        n = R.defaultPostHeaders(t.client.options, { format: e });
      return (await S.get(t.client, this.basePath(t), n, {}, e, !0)).body;
    }
  };
  var St = class {
    static basePath(t) {
      return Ne.basePath(t.channel) + "/presence";
    }
    static async history(t, e) {
      let n = t.channel.client,
        r = n.options.useBinaryProtocol ? "msgpack" : "json",
        o = t.channel.client.http.supportsLinkHeaders ? void 0 : r,
        a = R.defaultGetHeaders(n.options, { format: r });
      return (
        C(a, n.options.headers),
        new V(n, this.basePath(t) + "/history", a, o, async (c, l, u) => {
          let g = u ? c : B(c, n._MsgPack, r);
          return Mt(g, t.channel);
        }).get(e)
      );
    }
  };
  var qe = class {
      constructor(t) {
        this.channelMixin = Ne;
        this.presenceMixin = St;
        this.Resource = S;
        this.PaginatedResource = V;
        this.DeviceDetails = me;
        this.PushChannelSubscription = _e;
        (this.client = t), (this.channels = new xn(this.client)), (this.push = new Ks(this.client));
      }
      async stats(t) {
        let e = R.defaultGetHeaders(this.client.options),
          n = this.client.options.useBinaryProtocol ? "msgpack" : "json",
          r = this.client.http.supportsLinkHeaders ? void 0 : n;
        return (
          C(e, this.client.options.headers),
          new V(this.client, "/stats", e, r, function (o, a, c) {
            let l = c ? o : JSON.parse(o);
            for (let u = 0; u < l.length; u++) l[u] = sr.fromValues(l[u]);
            return l;
          }).get(t)
        );
      }
      async time(t) {
        let e = R.defaultGetHeaders(this.client.options);
        this.client.options.headers && C(e, this.client.options.headers);
        let n = (l) => this.client.baseUri(l) + "/time",
          { error: r, body: o, unpacked: a } = await this.client.http.do(x.Get, n, e, null, t);
        if (r) throw r;
        a || (o = JSON.parse(o));
        let c = o[0];
        if (!c) throw new h("Internal error (unexpected result type from GET /time)", 5e4, 500);
        return (this.client.serverTimeOffset = c - Date.now()), c;
      }
      async request(t, e, n, r, o, a) {
        var y;
        let [c, l, u] = (() => (this.client.options.useBinaryProtocol ? (this.client._MsgPack || _("MsgPack"), [this.client._MsgPack.encode, this.client._MsgPack.decode, "msgpack"]) : [JSON.stringify, JSON.parse, "json"]))(),
          g = this.client.http.supportsLinkHeaders ? void 0 : u;
        r = r || {};
        let d = t.toLowerCase(),
          m = d == "get" ? R.defaultGetHeaders(this.client.options, { format: u, protocolVersion: n }) : R.defaultPostHeaders(this.client.options, { format: u, protocolVersion: n });
        typeof o != "string" && (o = (y = c(o)) != null ? y : null), C(m, this.client.options.headers), a && C(m, a);
        let f = new V(
          this.client,
          e,
          m,
          g,
          async function (P, A, T) {
            return Qt(T ? P : l(P));
          },
          !0
        );
        if (!p.Http.methods.includes(d)) throw new h("Unsupported method " + d, 40500, 405);
        return p.Http.methodsWithBody.includes(d) ? f[d](r, o) : f[d](r);
      }
      async batchPublish(t) {
        let e, n;
        Array.isArray(t) ? ((e = t), (n = !1)) : ((e = [t]), (n = !0));
        let r = this.client.options.useBinaryProtocol ? "msgpack" : "json",
          o = R.defaultPostHeaders(this.client.options, { format: r });
        this.client.options.headers && C(o, this.client.options.headers);
        let a = H(e, this.client._MsgPack, r),
          c = await S.post(this.client, "/messages", a, o, {}, null, !0),
          l = c.unpacked ? c.body : B(c.body, this.client._MsgPack, r);
        return n ? l[0] : l;
      }
      async batchPresence(t) {
        let e = this.client.options.useBinaryProtocol ? "msgpack" : "json",
          n = R.defaultPostHeaders(this.client.options, { format: e });
        this.client.options.headers && C(n, this.client.options.headers);
        let r = t.join(","),
          o = await S.get(this.client, "/presence", n, { channels: r }, null, !0);
        return o.unpacked ? o.body : B(o.body, this.client._MsgPack, e);
      }
      async revokeTokens(t, e) {
        if (gn(this.client.options)) throw new h("Cannot revoke tokens when using token auth", 40162, 401);
        let n = this.client.options.keyName,
          r = e != null ? e : {},
          o = E({ targets: t.map((g) => `${g.type}:${g.value}`) }, r),
          a = this.client.options.useBinaryProtocol ? "msgpack" : "json",
          c = R.defaultPostHeaders(this.client.options, { format: a });
        this.client.options.headers && C(c, this.client.options.headers);
        let l = H(o, this.client._MsgPack, a),
          u = await S.post(this.client, `/keys/${n}/revokeTokens`, l, c, {}, null, !0);
        return u.unpacked ? u.body : B(u.body, this.client._MsgPack, a);
      }
    },
    xn = class {
      constructor(t) {
        (this.client = t), (this.all = Object.create(null));
      }
      get(t, e) {
        t = String(t);
        let n = this.all[t];
        return n ? e && n.setOptions(e) : (this.all[t] = n = new nr(this.client, t, e)), n;
      }
      release(t) {
        delete this.all[String(t)];
      }
    };
  var xt = class extends wt {
    constructor(t) {
      super(R.objectifyOptions(t, !1, "BaseRest", i.defaultLogger, { Rest: qe }));
    }
  };
  var Ut = { Rest: qe };
  var De = class extends te {
    static async fromEncoded(t, e) {
      return En(i.defaultLogger, p.Crypto, t, e);
    }
    static async fromEncodedArray(t, e) {
      return Zs(i.defaultLogger, p.Crypto, t, e);
    }
    static fromValues(t) {
      return te.fromValues(t);
    }
  };
  var He = class extends Q {
    static async fromEncoded(t, e) {
      return kn(i.defaultLogger, p.Crypto, t, e);
    }
    static async fromEncodedArray(t, e) {
      return $s(i.defaultLogger, p.Crypto, t, e);
    }
    static fromValues(t) {
      return Q.fromValues(t);
    }
  };
  var rr = ["annotation.create", "annotation.delete"];
  async function Un(s, t, e) {
    return ne.fromValues(t).decode(e || {}, s);
  }
  async function or(s, t, e) {
    return Promise.all(
      t.map(function (n) {
        return Un(s, n, e);
      })
    );
  }
  async function Bo(s, t) {
    return ne.fromValues(s).decode(t.channelOptions, t.logger);
  }
  async function ir(s, t) {
    return Promise.all(
      s.map(function (e) {
        return Bo(e, t);
      })
    );
  }
  var Bt = class s extends ee {
      async encode() {
        let e = Object.assign(new ne(), this, { action: rr.indexOf(this.action || "annotation.create") });
        return xe(e, {});
      }
      static fromValues(e) {
        return Object.assign(new s(), e);
      }
      static fromValuesArray(e) {
        return e.map((n) => s.fromValues(n));
      }
      toString() {
        return ue(this, "Annotation");
      }
    },
    ne = class s extends ee {
      toJSON(...e) {
        return Be.call(this, ...e);
      }
      static fromValues(e) {
        return Object.assign(new s(), e);
      }
      static fromValuesArray(e) {
        return e.map((n) => s.fromValues(n));
      }
      async decode(e, n) {
        let r = Object.assign(new Bt(), D(E({}, this), { action: rr[this.action] }));
        try {
          await Ue(r, e);
        } catch (o) {
          i.logAction(n, i.LOG_ERROR, "WireAnnotation.decode()", w(o));
        }
        return r;
      }
      toString() {
        return ue(this, "WireAnnotation");
      }
    },
    se = Bt;
  var Ge = class extends se {
    static async fromEncoded(t, e) {
      return Un(i.defaultLogger, t, e);
    }
    static async fromEncodedArray(t, e) {
      return or(i.defaultLogger, t, e);
    }
    static fromValues(t) {
      return se.fromValues(t);
    }
  };
  function cr(s) {
    let t;
    switch (typeof s) {
      case "string":
        t = s;
        break;
      case "object":
        t = s.serial;
        break;
    }
    if (!t || typeof t != "string") throw new h("First argument of annotations.publish() must be either a Message (or at least an object with a string `serial` property) or a message serial (string)", 40003, 400);
    return t;
  }
  function _n(s, t) {
    let e = cr(s);
    if (!t || typeof t != "object") throw new h("Second argument of annotations.publish() must be an object (the intended annotation to publish)", 40003, 400);
    let n = se.fromValues(t);
    return (n.messageSerial = e), n.action || (n.action = "annotation.create"), n;
  }
  function ar(s, t) {
    return s.client.rest.channelMixin.basePath(s) + "/messages/" + encodeURIComponent(t) + "/annotations";
  }
  var Bn = class {
      constructor(t) {
        this.channel = t;
      }
      async publish(t, e) {
        let n = _n(t, e),
          r = await n.encode(),
          o = this.channel.client,
          a = o.options,
          c = a.useBinaryProtocol ? "msgpack" : "json",
          l = R.defaultPostHeaders(o.options, { format: c }),
          u = {};
        C(l, o.options.headers);
        let g = H([r], o._MsgPack, c);
        await S.post(o, ar(this.channel, n.messageSerial), g, l, u, null, !0);
      }
      async delete(t, e) {
        return (e.action = "annotation.delete"), this.publish(t, e);
      }
      async get(t, e) {
        let n = this.channel.client,
          r = cr(t),
          o = n.options.useBinaryProtocol ? "msgpack" : "json",
          a = n.http.supportsLinkHeaders ? void 0 : o,
          c = R.defaultGetHeaders(n.options, { format: o });
        return (
          C(c, n.options.headers),
          new V(n, ar(this.channel, r), c, a, async (l, u, g) => {
            let d = g ? l : B(l, n._MsgPack, o);
            return ir(d, this.channel);
          }).get(e)
        );
      }
    },
    Re = Bn;
  var lr = H;
  function _t(s) {
    let t = [];
    if (s) for (let e = 0; e < s.length; e++) t.push(s[e].toString());
    return "[ " + t.join(", ") + " ]";
  }
  function ur(s, t, e, n, r, o) {
    let a = B(s, t, o);
    return Lt(a, e, n, r);
  }
  function Lt(s, t, e, n) {
    let r;
    s.error && (r = h.fromValues(s.error));
    let o;
    s.messages && (o = ye.fromValuesArray(s.messages));
    let a;
    t && s.presence && (a = t.WirePresenceMessage.fromValuesArray(s.presence));
    let c;
    e && s.annotations && (c = e.WireAnnotation.fromValuesArray(s.annotations));
    let l;
    return n && s.state && (l = n.ObjectMessage.fromValuesArray(s.state, O, we)), Object.assign(new tt(), D(E({}, s), { presence: a, messages: o, annotations: c, state: l, error: r }));
  }
  function Ln(s) {
    return (t) => {
      var e;
      return Lt(t, { PresenceMessage: Q, WirePresenceMessage: he }, { Annotation: se, WireAnnotation: ne, RealtimeAnnotations: je, RestAnnotations: Re }, (e = s == null ? void 0 : s.ObjectsPlugin) != null ? e : null);
    };
  }
  function G(s) {
    return Object.assign(new tt(), s);
  }
  function Fe(s, t, e, n) {
    let r = "[ProtocolMessage";
    s.action !== void 0 && (r += "; action=" + yn[s.action] || s.action);
    let o = ["id", "channel", "channelSerial", "connectionId", "count", "msgSerial", "timestamp"],
      a;
    for (let c = 0; c < o.length; c++) (a = o[c]), s[a] !== void 0 && (r += "; " + a + "=" + s[a]);
    if (
      (s.messages && (r += "; messages=" + _t(ye.fromValuesArray(s.messages))),
      s.presence && t && (r += "; presence=" + _t(t.WirePresenceMessage.fromValuesArray(s.presence))),
      s.annotations && e && (r += "; annotations=" + _t(e.WireAnnotation.fromValuesArray(s.annotations))),
      s.state && n && (r += "; state=" + _t(n.ObjectMessage.fromValuesArray(s.state, O, we))),
      s.error && (r += "; error=" + h.fromValues(s.error).toString()),
      s.auth && s.auth.accessToken && (r += "; token=" + s.auth.accessToken),
      s.flags && (r += "; flags=" + Fs.filter(s.hasFlag).join(",")),
      s.params)
    ) {
      let c = "";
      Yt(s.params, function (l) {
        c.length > 0 && (c += "; "), (c += l + "=" + s.params[l]);
      }),
        c.length > 0 && (r += "; params=[" + c + "]");
    }
    return (r += "]"), r;
  }
  var tt = class {
      constructor() {
        this.hasFlag = (t) => (this.flags & W[t]) > 0;
      }
      setFlag(t) {
        return (this.flags = this.flags | W[t]);
      }
      getMode() {
        return (this.flags || 0) & W.MODE_ALL;
      }
      encodeModesToFlags(t) {
        t.forEach((e) => this.setFlag(e));
      }
      decodeModesFromFlags() {
        let t = [];
        return (
          At.forEach((e) => {
            this.hasFlag(e) && t.push(e);
          }),
          t.length > 0 ? t : void 0
        );
      }
    },
    hr = tt;
  var Nn = class {
      constructor(t, e, n, r, o) {
        (this.previous = t), (this.current = e), e === "attached" && ((this.resumed = n), (this.hasBacklog = r)), o && (this.reason = o);
      }
    },
    nt = Nn;
  var dr = function () {};
  function _o(s) {
    if (s && "params" in s && !ie(s.params)) return new h("options.params must be an object", 4e4, 400);
    if (s && "modes" in s) {
      if (!Array.isArray(s.modes)) return new h("options.modes must be an array", 4e4, 400);
      for (let t = 0; t < s.modes.length; t++) {
        let e = s.modes[t];
        if (!e || typeof e != "string" || !At.includes(String.prototype.toUpperCase.call(e))) return new h("Invalid channel mode: " + e, 4e4, 400);
      }
    }
  }
  var qn = class s extends M {
    constructor(e, n, r) {
      var o, a, c;
      super(e.logger);
      this._annotations = null;
      this._mode = 0;
      this.retryCount = 0;
      this.history = async function (e) {
        i.logAction(this.logger, i.LOG_MICRO, "RealtimeChannel.history()", "channel = " + this.name);
        let n = this.client.rest.channelMixin;
        if (e && e.untilAttach) {
          if (this.state !== "attached") throw new h("option untilAttach requires the channel to be attached", 4e4, 400);
          if (!this.properties.attachSerial) throw new h("untilAttach was specified and channel is attached, but attachSerial is not defined", 4e4, 400);
          delete e.untilAttach, (e.from_serial = this.properties.attachSerial);
        }
        return n.history(this, e);
      };
      this.whenState = (e) => M.prototype.whenState.call(this, e, this.state);
      i.logAction(this.logger, i.LOG_MINOR, "RealtimeChannel()", "started; name = " + n),
        (this.name = n),
        (this.channelOptions = ve((o = e._Crypto) != null ? o : null, this.logger, r)),
        (this.client = e),
        (this._presence = e._RealtimePresence ? new e._RealtimePresence.RealtimePresence(this) : null),
        e._Annotations && (this._annotations = new e._Annotations.RealtimeAnnotations(this)),
        (this.connectionManager = e.connection.connectionManager),
        (this.state = "initialized"),
        (this.subscriptions = new M(this.logger)),
        (this.syncChannelSerial = void 0),
        (this.properties = { attachSerial: void 0, channelSerial: void 0 }),
        this.setOptions(r),
        (this.errorReason = null),
        (this._attachResume = !1),
        (this._decodingContext = { channelOptions: this.channelOptions, plugins: e.options.plugins || {}, baseEncodedPreviousPayload: void 0 }),
        (this._lastPayload = { messageId: null, protocolMessageChannelSerial: null, decodeFailureRecoveryInProgress: null }),
        (this._allChannelChanges = new M(this.logger)),
        (a = e.options.plugins) != null && a.Push && (this._push = new e.options.plugins.Push.PushChannel(this)),
        (c = e.options.plugins) != null && c.Objects && (this._objects = new e.options.plugins.Objects.Objects(this));
    }
    get presence() {
      return this._presence || _("RealtimePresence"), this._presence;
    }
    get annotations() {
      return this._annotations || _("Annotations"), this._annotations;
    }
    get push() {
      return this._push || _("Push"), this._push;
    }
    get objects() {
      return this._objects || _("Objects"), this._objects;
    }
    invalidStateError() {
      return new h("Channel operation failed as channel state is " + this.state, 90001, 400, this.errorReason || void 0);
    }
    static processListenerArgs(e) {
      return (e = Array.prototype.slice.call(e)), typeof e[0] == "function" && e.unshift(null), e;
    }
    async setOptions(e) {
      var o;
      let n = this.channelOptions,
        r = _o(e);
      if (r) throw r;
      if (((this.channelOptions = ve((o = this.client._Crypto) != null ? o : null, this.logger, e)), this._decodingContext && (this._decodingContext.channelOptions = this.channelOptions), this._shouldReattachToSetOptions(e, n)))
        return (
          this.attachImpl(),
          new Promise((a, c) => {
            this._allChannelChanges.once(["attached", "update", "detached", "failed"], function (l) {
              switch (this.event) {
                case "update":
                case "attached":
                  a();
                  break;
                default:
                  c(l.reason);
              }
            });
          })
        );
    }
    _shouldReattachToSetOptions(e, n) {
      if (!(this.state === "attached" || this.state === "attaching")) return !1;
      if (e != null && e.params) {
        let r = pr(e.params),
          o = pr(n.params);
        if (Object.keys(r).length !== Object.keys(o).length || !on(o, r)) return !0;
      }
      return !!(e != null && e.modes && (!n.modes || !cn(e.modes, n.modes)));
    }
    async publish(...e) {
      let n;
      if (e.length == 1)
        if (ie(e[0])) n = [te.fromValues(e[0])];
        else if (Array.isArray(e[0])) n = te.fromValuesArray(e[0]);
        else throw new h("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
      else n = [te.fromValues({ name: e[0], data: e[1] })];
      let o = this.client.options.maxMessageSize,
        a = await vt(n, this.channelOptions),
        c = Le(a);
      if (c > o) throw new h(`Maximum size of messages that can be published at once exceeded (was ${c} bytes; limit is ${o} bytes)`, 40009, 400);
      this.throwIfUnpublishableState(), i.logAction(this.logger, i.LOG_MICRO, "RealtimeChannel.publish()", "sending message; channel state is " + this.state + ", message count = " + a.length);
      let l = G({ action: b.MESSAGE, channel: this.name, messages: a });
      return this.sendMessage(l);
    }
    throwIfUnpublishableState() {
      if (!this.connectionManager.activeState()) throw this.connectionManager.getError();
      if (this.state === "failed" || this.state === "suspended") throw this.invalidStateError();
    }
    onEvent(e) {
      i.logAction(this.logger, i.LOG_MICRO, "RealtimeChannel.onEvent()", "received message");
      let n = this.subscriptions;
      for (let r = 0; r < e.length; r++) {
        let o = e[r];
        n.emit(o.name, o);
      }
    }
    async attach() {
      return this.state === "attached"
        ? null
        : new Promise((e, n) => {
            this._attach(!1, null, (r, o) => (r ? n(r) : e(o)));
          });
    }
    _attach(e, n, r) {
      r ||
        (r = (a) => {
          a && i.logAction(this.logger, i.LOG_ERROR, "RealtimeChannel._attach()", "Channel attach failed: " + a.toString());
        });
      let o = this.connectionManager;
      if (!o.activeState()) {
        r(o.getError());
        return;
      }
      (this.state !== "attaching" || e) && this.requestState("attaching", n),
        this.once(function (a) {
          switch (this.event) {
            case "attached":
              r == null || r(null, a);
              break;
            case "detached":
            case "suspended":
            case "failed":
              r == null || r(a.reason || o.getError() || new h("Unable to attach; reason unknown; state = " + this.event, 9e4, 500));
              break;
            case "detaching":
              r == null || r(new h("Attach request superseded by a subsequent detach request", 9e4, 409));
              break;
          }
        });
    }
    attachImpl() {
      i.logAction(this.logger, i.LOG_MICRO, "RealtimeChannel.attachImpl()", "sending ATTACH message");
      let e = G({ action: b.ATTACH, channel: this.name, params: this.channelOptions.params, channelSerial: this.properties.channelSerial });
      this.channelOptions.modes && e.encodeModesToFlags(rn(this.channelOptions.modes)),
        this._attachResume && e.setFlag("ATTACH_RESUME"),
        this._lastPayload.decodeFailureRecoveryInProgress && (e.channelSerial = this._lastPayload.protocolMessageChannelSerial),
        this.sendMessage(e).catch(dr);
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
          return new Promise((n, r) => {
            this.once(function (o) {
              switch (this.event) {
                case "detached":
                  n();
                  break;
                case "attached":
                case "suspended":
                case "failed":
                  r(o.reason || e.getError() || new h("Unable to detach; reason unknown; state = " + this.event, 9e4, 500));
                  break;
                case "attaching":
                  r(new h("Detach request superseded by a subsequent attach request", 9e4, 409));
                  break;
              }
            });
          });
      }
    }
    detachImpl() {
      i.logAction(this.logger, i.LOG_MICRO, "RealtimeChannel.detach()", "sending DETACH message");
      let e = G({ action: b.DETACH, channel: this.name });
      this.sendMessage(e).catch(dr);
    }
    async subscribe(...e) {
      let [n, r] = s.processListenerArgs(e);
      if (this.state === "failed") throw h.fromValues(this.invalidStateError());
      return n && typeof n == "object" && !Array.isArray(n) ? this.client._FilteredSubscriptions.subscribeFilter(this, n, r) : this.subscriptions.on(n, r), this.channelOptions.attachOnSubscribe !== !1 ? this.attach() : null;
    }
    unsubscribe(...e) {
      var o;
      let [n, r] = s.processListenerArgs(e);
      if ((typeof n == "object" && !r) || ((o = this.filteredSubscriptions) != null && o.has(r))) {
        this.client._FilteredSubscriptions.getAndDeleteFilteredSubscriptions(this, n, r).forEach((a) => this.subscriptions.off(a));
        return;
      }
      this.subscriptions.off(n, r);
    }
    sync() {
      switch (this.state) {
        case "initialized":
        case "detaching":
        case "detached":
          throw new v("Unable to sync to channel; not attached", 4e4);
        default:
      }
      let e = this.connectionManager;
      if (!e.activeState()) throw e.getError();
      let n = G({ action: b.SYNC, channel: this.name });
      this.syncChannelSerial && (n.channelSerial = this.syncChannelSerial), e.send(n);
    }
    async sendMessage(e) {
      return new Promise((n, r) => {
        this.connectionManager.send(e, this.client.options.queueMessages, (o) => {
          o ? r(o) : n();
        });
      });
    }
    async sendPresence(e) {
      let n = G({ action: b.PRESENCE, channel: this.name, presence: e });
      return this.sendMessage(n);
    }
    sendState(e) {
      let n = G({ action: b.OBJECT, channel: this.name, state: e });
      return this.sendMessage(n);
    }
    async processMessage(e) {
      (e.action === b.ATTACHED || e.action === b.MESSAGE || e.action === b.PRESENCE || e.action === b.OBJECT || e.action === b.ANNOTATION) && this.setChannelSerial(e.channelSerial);
      let n,
        r = !1;
      switch (e.action) {
        case b.ATTACHED: {
          (this.properties.attachSerial = e.channelSerial), (this._mode = e.getMode()), (this.params = e.params || {});
          let o = e.decodeModesFromFlags();
          this.modes = (o && $e(o)) || void 0;
          let a = e.hasFlag("RESUMED"),
            c = e.hasFlag("HAS_PRESENCE"),
            l = e.hasFlag("HAS_BACKLOG"),
            u = e.hasFlag("HAS_OBJECTS");
          if (this.state === "attached") {
            a || (this._presence && this._presence.onAttached(c), this._objects && this._objects.onAttached(u));
            let g = new nt(this.state, this.state, a, l, e.error);
            this._allChannelChanges.emit("update", g), (!a || this.channelOptions.updateOnAttached) && this.emit("update", g);
          } else this.state === "detaching" ? this.checkPendingState() : this.notifyState("attached", e.error, a, c, l, u);
          break;
        }
        case b.DETACHED: {
          let o = e.error ? h.fromValues(e.error) : new h("Channel detached", 90001, 404);
          this.state === "detaching" ? this.notifyState("detached", o) : this.state === "attaching" ? this.notifyState("suspended", o) : (this.state === "attached" || this.state === "suspended") && this.requestState("attaching", o);
          break;
        }
        case b.SYNC:
          if (((r = !0), (n = this.syncChannelSerial = e.channelSerial), !e.presence)) break;
        case b.PRESENCE: {
          if (!e.presence) break;
          et(e);
          let o = this.channelOptions;
          if (this._presence) {
            let a = await Promise.all(e.presence.map((c) => c.decode(o, this.logger)));
            this._presence.setPresence(a, r, n);
          }
          break;
        }
        case b.OBJECT:
        case b.OBJECT_SYNC: {
          if (!this._objects || !e.state) return;
          et(e);
          let o = e.state,
            a = this.client.connection.connectionManager.getActiveTransportFormat();
          await Promise.all(o.map((c) => this.client._objectsPlugin.ObjectMessage.decode(c, this.client, this.logger, i, O, a))),
            e.action === b.OBJECT ? this._objects.handleObjectMessages(o) : this._objects.handleObjectSyncMessages(o, e.channelSerial);
          break;
        }
        case b.MESSAGE: {
          if (this.state !== "attached") {
            i.logAction(this.logger, i.LOG_MAJOR, "RealtimeChannel.processMessage()", 'Message "' + e.id + '" skipped as this channel "' + this.name + '" state is not "attached" (state is "' + this.state + '").');
            return;
          }
          et(e);
          let o = e.messages,
            a = o[0],
            c = o[o.length - 1];
          if (a.extras && a.extras.delta && a.extras.delta.from !== this._lastPayload.messageId) {
            let u = 'Delta message decode failure - previous message not available for message "' + e.id + '" on this channel "' + this.name + '".';
            i.logAction(this.logger, i.LOG_ERROR, "RealtimeChannel.processMessage()", u), this._startDecodeFailureRecovery(new h(u, 40018, 400));
            break;
          }
          let l = [];
          for (let u = 0; u < o.length; u++) {
            let { decoded: g, err: d } = await o[u].decodeWithErr(this._decodingContext, this.logger);
            if (((l[u] = g), d))
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
          (this._lastPayload.messageId = c.id), (this._lastPayload.protocolMessageChannelSerial = e.channelSerial), this.onEvent(l);
          break;
        }
        case b.ANNOTATION: {
          et(e);
          let o = this.channelOptions;
          if (this._annotations) {
            let a = await Promise.all((e.annotations || []).map((c) => c.decode(o, this.logger)));
            this._annotations._processIncoming(a);
          }
          break;
        }
        case b.ERROR: {
          let o = e.error;
          o && o.code == 80016 ? this.checkPendingState() : this.notifyState("failed", h.fromValues(o));
          break;
        }
        default:
          i.logAction(this.logger, i.LOG_MAJOR, "RealtimeChannel.processMessage()", "Protocol error: unrecognised message action (" + e.action + ")");
      }
    }
    _startDecodeFailureRecovery(e) {
      this._lastPayload.decodeFailureRecoveryInProgress ||
        (i.logAction(this.logger, i.LOG_MAJOR, "RealtimeChannel.processMessage()", "Starting decode failure recovery process."),
        (this._lastPayload.decodeFailureRecoveryInProgress = !0),
        this._attach(!0, e, () => {
          this._lastPayload.decodeFailureRecoveryInProgress = !1;
        }));
    }
    onAttached() {
      i.logAction(this.logger, i.LOG_MINOR, "RealtimeChannel.onAttached", "activating channel; name = " + this.name);
    }
    notifyState(e, n, r, o, a, c) {
      if (
        (i.logAction(this.logger, i.LOG_MICRO, "RealtimeChannel.notifyState", "name = " + this.name + ", current state = " + this.state + ", notifying state " + e),
        this.clearStateTimer(),
        ["detached", "suspended", "failed"].includes(e) && (this.properties.channelSerial = null),
        e === this.state)
      )
        return;
      this._presence && this._presence.actOnChannelState(e, o, n),
        this._objects && this._objects.actOnChannelState(e, c),
        e === "suspended" && this.connectionManager.state.sendEvents ? this.startRetryTimer() : this.cancelRetryTimer(),
        n && (this.errorReason = n);
      let l = new nt(this.state, e, r, a, n),
        u = 'Channel state for channel "' + this.name + '"',
        g = e + (n ? "; reason: " + n : "");
      e === "failed" ? i.logAction(this.logger, i.LOG_ERROR, u, g) : i.logAction(this.logger, i.LOG_MAJOR, u, g),
        e !== "attaching" && e !== "suspended" && (this.retryCount = 0),
        e === "attached" && this.onAttached(),
        e === "attached" ? (this._attachResume = !0) : (e === "detaching" || e === "failed") && (this._attachResume = !1),
        (this.state = e),
        this._allChannelChanges.emit(e, l),
        this.emit(e, l);
    }
    requestState(e, n) {
      i.logAction(this.logger, i.LOG_MINOR, "RealtimeChannel.requestState", "name = " + this.name + ", state = " + e), this.notifyState(e, n), this.checkPendingState();
    }
    checkPendingState() {
      if (!this.connectionManager.state.sendEvents) {
        i.logAction(this.logger, i.LOG_MINOR, "RealtimeChannel.checkPendingState", "sendEvents is false; state is " + this.connectionManager.state.state);
        return;
      }
      switch ((i.logAction(this.logger, i.LOG_MINOR, "RealtimeChannel.checkPendingState", "name = " + this.name + ", state = " + this.state), this.state)) {
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
          i.logAction(this.logger, i.LOG_MINOR, "RealtimeChannel.startStateTimerIfNotRunning", "timer expired"), (this.stateTimer = null), this.timeoutPendingState();
        }, this.client.options.timeouts.realtimeRequestTimeout));
    }
    clearStateTimer() {
      let e = this.stateTimer;
      e && (clearTimeout(e), (this.stateTimer = null));
    }
    startRetryTimer() {
      if (this.retryTimer) return;
      this.retryCount++;
      let e = Xe(this.client.options.timeouts.channelRetryTimeout, this.retryCount);
      this.retryTimer = setTimeout(() => {
        this.state === "suspended" && this.connectionManager.state.sendEvents && ((this.retryTimer = null), i.logAction(this.logger, i.LOG_MINOR, "RealtimeChannel retry timer expired", "attempting a new attach"), this.requestState("attaching"));
      }, e);
    }
    cancelRetryTimer() {
      this.retryTimer && (clearTimeout(this.retryTimer), (this.retryTimer = null));
    }
    getReleaseErr() {
      let e = this.state;
      return e === "initialized" || e === "detached" || e === "failed"
        ? null
        : new h("Can only release a channel in a state where there is no possibility of further updates from the server being received (initialized, detached, or failed); was " + e, 90001, 400);
    }
    setChannelSerial(e) {
      i.logAction(this.logger, i.LOG_MICRO, "RealtimeChannel.setChannelSerial()", "Updating channel serial; serial = " + e + "; previous = " + this.properties.channelSerial), e && (this.properties.channelSerial = e);
    }
    async status() {
      return this.client.rest.channelMixin.status(this);
    }
  };
  function pr(s) {
    let n = s || {},
      { agent: t } = n;
    return Cs(n, ["agent"]);
  }
  var Pe = qn;
  var Dn = class {
      constructor(t) {
        (this.channel = t), (this.logger = t.logger), (this.subscriptions = new M(this.logger));
      }
      async publish(t, e) {
        let n = this.channel.name,
          r = _n(t, e),
          o = await r.encode();
        this.channel.throwIfUnpublishableState(), i.logAction(this.logger, i.LOG_MICRO, "RealtimeAnnotations.publish()", "channelName = " + n + ", sending annotation with messageSerial = " + r.messageSerial + ", type = " + r.type);
        let a = G({ action: b.ANNOTATION, channel: n, annotations: [o] });
        return this.channel.sendMessage(a);
      }
      async delete(t, e) {
        return (e.action = "annotation.delete"), this.publish(t, e);
      }
      async subscribe(...t) {
        let e = Pe.processListenerArgs(t),
          n = e[0],
          r = e[1],
          o = this.channel;
        if (o.state === "failed") throw h.fromValues(o.invalidStateError());
        if ((this.subscriptions.on(n, r), this.channel.channelOptions.attachOnSubscribe !== !1 && (await o.attach()), (this.channel.state === "attached" && this.channel._mode & W.ANNOTATION_SUBSCRIBE) === 0))
          throw new h(
            "You are trying to add an annotation listener, but you haven't requested the annotation_subscribe channel mode in ChannelOptions, so this won't do anything (we only deliver annotations to clients who have explicitly requested them)",
            93001,
            400
          );
      }
      unsubscribe(...t) {
        let e = Pe.processListenerArgs(t),
          n = e[0],
          r = e[1];
        this.subscriptions.off(n, r);
      }
      _processIncoming(t) {
        for (let e of t) this.subscriptions.emit(e.type || "", e);
      }
      async get(t, e) {
        return Re.prototype.get.call(this, t, e);
      }
    },
    je = Dn;
  var re = class re extends xt {
    constructor(t) {
      var n, r;
      if (!re._MsgPack) throw new Error("Expected DefaultRest._MsgPack to have been set");
      super(
        R.objectifyOptions(
          t,
          !0,
          "Rest",
          i.defaultLogger,
          D(E({}, Ut), { Crypto: (n = re.Crypto) != null ? n : void 0, MsgPack: (r = re._MsgPack) != null ? r : void 0, Annotations: { Annotation: se, WireAnnotation: ne, RealtimeAnnotations: je, RestAnnotations: Re } })
        )
      );
    }
    static get Crypto() {
      if (this._Crypto === null) throw new Error("Encryption not enabled; use ably.encryption.js instead");
      return this._Crypto;
    }
    static set Crypto(t) {
      this._Crypto = t;
    }
  };
  (re._Crypto = null), (re.Message = De), (re.PresenceMessage = He), (re.Annotation = Ge), (re._MsgPack = null), (re._Http = fe);
  var We = re;
  var Hn = class extends M {
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
      completeMessages(e, n, r) {
        i.logAction(this.logger, i.LOG_MICRO, "MessageQueue.completeMessages()", "serial = " + e + "; count = " + n), (r = r || null);
        let o = this.messages;
        if (o.length === 0) throw new Error("MessageQueue.completeMessages(): completeMessages called on any empty MessageQueue");
        let a = o[0];
        if (a) {
          let c = a.message.msgSerial,
            l = e + n;
          if (l > c) {
            let u = o.splice(0, l - c);
            for (let g of u) g.callback(r);
          }
          o.length == 0 && this.emit("idle");
        }
      }
      completeAllMessages(e) {
        this.completeMessages(0, Number.MAX_SAFE_INTEGER || Number.MAX_VALUE, e);
      }
      resetSendAttempted() {
        for (let e of this.messages) e.sendAttempted = !1;
      }
      clear() {
        i.logAction(this.logger, i.LOG_MICRO, "MessageQueue.clear()", "clearing " + this.messages.length + " messages"), (this.messages = []), this.emit("idle");
      }
    },
    Nt = Hn;
  var st = class {
      constructor(t, e) {
        (this.message = t), (this.callback = e), (this.merged = !1);
        let n = t.action;
        (this.sendAttempted = !1), (this.ackRequired = typeof n == "number" && [b.MESSAGE, b.PRESENCE, b.ANNOTATION, b.OBJECT].includes(n));
      }
    },
    Gn = class extends M {
      constructor(e) {
        super(e.logger);
        (this.transport = e),
          (this.messageQueue = new Nt(this.logger)),
          e.on("ack", (n, r) => {
            this.onAck(n, r);
          }),
          e.on("nack", (n, r, o) => {
            this.onNack(n, r, o);
          });
      }
      onAck(e, n) {
        i.logAction(this.logger, i.LOG_MICRO, "Protocol.onAck()", "serial = " + e + "; count = " + n), this.messageQueue.completeMessages(e, n);
      }
      onNack(e, n, r) {
        i.logAction(this.logger, i.LOG_ERROR, "Protocol.onNack()", "serial = " + e + "; count = " + n + "; err = " + w(r)), r || (r = new h("Unable to send message; channel not responding", 50001, 500)), this.messageQueue.completeMessages(e, n, r);
      }
      onceIdle(e) {
        let n = this.messageQueue;
        if (n.count() === 0) {
          e();
          return;
        }
        n.once("idle", e);
      }
      send(e) {
        e.ackRequired && this.messageQueue.push(e),
          this.logger.shouldLog(i.LOG_MICRO) &&
            i.logActionNoStrip(
              this.logger,
              i.LOG_MICRO,
              "Protocol.send()",
              "sending msg; " + Fe(e.message, this.transport.connectionManager.realtime._RealtimePresence, this.transport.connectionManager.realtime._Annotations, this.transport.connectionManager.realtime._objectsPlugin)
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
    gr = Gn;
  var Fn = class {
      constructor(t, e, n, r) {
        (this.previous = t), (this.current = e), n && (this.retryIn = n), r && (this.reason = r);
      }
    },
    rt = Fn;
  var be = { DISCONNECTED: 80003, SUSPENDED: 80002, FAILED: 8e4, CLOSING: 80017, CLOSED: 80017, UNKNOWN_CONNECTION_ERR: 50002, UNKNOWN_CHANNEL_ERR: 50001 },
    Lo = {
      disconnected: () => h.fromValues({ statusCode: 400, code: be.DISCONNECTED, message: "Connection to server temporarily unavailable" }),
      suspended: () => h.fromValues({ statusCode: 400, code: be.SUSPENDED, message: "Connection to server unavailable" }),
      failed: () => h.fromValues({ statusCode: 400, code: be.FAILED, message: "Connection failed or disconnected by server" }),
      closing: () => h.fromValues({ statusCode: 400, code: be.CLOSING, message: "Connection closing" }),
      closed: () => h.fromValues({ statusCode: 400, code: be.CLOSED, message: "Connection closed" }),
      unknownConnectionErr: () => h.fromValues({ statusCode: 500, code: be.UNKNOWN_CONNECTION_ERR, message: "Internal connection error" }),
      unknownChannelErr: () => h.fromValues({ statusCode: 500, code: be.UNKNOWN_CONNECTION_ERR, message: "Internal channel error" }),
    };
  function fr(s) {
    return !s.statusCode || !s.code || s.statusCode >= 500 ? !0 : Object.values(be).includes(s.code);
  }
  var ae = Lo;
  var No = G({ action: b.CLOSE }),
    qo = G({ action: b.DISCONNECT }),
    jn = class extends M {
      constructor(e, n, r, o) {
        super(e.logger);
        o && ((r.format = void 0), (r.heartbeats = !0)),
          (this.connectionManager = e),
          (this.auth = n),
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
        this.isConnected && this.requestClose(), this.finish("closed", ae.closed());
      }
      disconnect(e) {
        this.isConnected && this.requestDisconnect(), this.finish("disconnected", e || ae.disconnected());
      }
      fail(e) {
        this.isConnected && this.requestDisconnect(), this.finish("failed", e || ae.failed());
      }
      finish(e, n) {
        var r;
        this.isFinished || ((this.isFinished = !0), (this.isConnected = !1), (this.maxIdleInterval = null), clearTimeout((r = this.idleTimer) != null ? r : void 0), (this.idleTimer = null), this.emit(e, n), this.dispose());
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
                Fe(e, this.connectionManager.realtime._RealtimePresence, this.connectionManager.realtime._Annotations, this.connectionManager.realtime._objectsPlugin) +
                "; connectionId = " +
                this.connectionManager.connectionId
            ),
          this.onActivity(),
          e.action)
        ) {
          case b.HEARTBEAT:
            i.logActionNoStrip(this.logger, i.LOG_MICRO, "Transport.onProtocolMessage()", this.shortName + " heartbeat; connectionId = " + this.connectionManager.connectionId), this.emit("heartbeat", e.id);
            break;
          case b.CONNECTED:
            this.onConnect(e), this.emit("connected", e.error, e.connectionId, e.connectionDetails, e);
            break;
          case b.CLOSED:
            this.onClose(e);
            break;
          case b.DISCONNECTED:
            this.onDisconnect(e);
            break;
          case b.ACK:
            this.emit("ack", e.msgSerial, e.count);
            break;
          case b.NACK:
            this.emit("nack", e.msgSerial, e.count, e.error);
            break;
          case b.SYNC:
            this.connectionManager.onChannelMessage(e, this);
            break;
          case b.ACTIVATE:
            break;
          case b.AUTH:
            N(this.auth.authorize(), (n) => {
              n && i.logAction(this.logger, i.LOG_ERROR, "Transport.onProtocolMessage()", "Ably requested re-authentication, but unable to obtain a new token: " + w(n));
            });
            break;
          case b.ERROR:
            if (
              (i.logAction(
                this.logger,
                i.LOG_MINOR,
                "Transport.onProtocolMessage()",
                "received error action; connectionId = " + this.connectionManager.connectionId + "; err = " + p.Config.inspect(e.error) + (e.channel ? ", channel: " + e.channel : "")
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
        if (((this.isConnected = !0), !e.connectionDetails)) throw new Error("Transport.onConnect(): Connect message recieved without connectionDetails");
        let n = e.connectionDetails.maxIdleInterval;
        n && ((this.maxIdleInterval = n + this.timeouts.realtimeRequestTimeout), this.onActivity());
      }
      onDisconnect(e) {
        let n = e && e.error;
        i.logAction(this.logger, i.LOG_MINOR, "Transport.onDisconnect()", "err = " + w(n)), this.finish("disconnected", n);
      }
      onFatalError(e) {
        let n = e && e.error;
        i.logAction(this.logger, i.LOG_MINOR, "Transport.onFatalError()", "err = " + w(n)), this.finish("failed", n);
      }
      onClose(e) {
        let n = e && e.error;
        i.logAction(this.logger, i.LOG_MINOR, "Transport.onClose()", "err = " + w(n)), this.finish("closed", n);
      }
      requestClose() {
        i.logAction(this.logger, i.LOG_MINOR, "Transport.requestClose()", ""), this.send(No);
      }
      requestDisconnect() {
        i.logAction(this.logger, i.LOG_MINOR, "Transport.requestDisconnect()", ""), this.send(qo);
      }
      ping(e) {
        let n = { action: b.HEARTBEAT };
        e && (n.id = e), this.send(G(n));
      }
      dispose() {
        i.logAction(this.logger, i.LOG_MINOR, "Transport.dispose()", ""), (this.isDisposed = !0), this.off();
      }
      onActivity() {
        this.maxIdleInterval && ((this.lastActivity = this.connectionManager.lastActivity = Date.now()), this.setIdleTimer(this.maxIdleInterval + 100));
      }
      setIdleTimer(e) {
        this.idleTimer ||
          (this.idleTimer = setTimeout(() => {
            this.onIdleTimerExpire();
          }, e));
      }
      onIdleTimerExpire() {
        if (!this.lastActivity || !this.maxIdleInterval) throw new Error("Transport.onIdleTimerExpire(): lastActivity/maxIdleInterval not set");
        this.idleTimer = null;
        let e = Date.now() - this.lastActivity,
          n = this.maxIdleInterval - e;
        if (n <= 0) {
          let r = "No activity seen from realtime in " + e + "ms; assuming connection has dropped";
          i.logAction(this.logger, i.LOG_ERROR, "Transport.onIdleTimerExpire()", r), this.disconnect(new h(r, 80003, 408));
        } else this.setIdleTimer(n + 100);
      }
      static tryConnect(e, n, r, o, a) {
        let c = new e(n, r, o),
          l,
          u = function (d) {
            clearTimeout(l), a({ event: this.event, error: d });
          },
          g = n.options.timeouts.realtimeRequestTimeout;
        return (
          (l = setTimeout(() => {
            c.off(["preconnect", "disconnected", "failed"]), c.dispose(), u.call({ event: "disconnected" }, new h("Timeout waiting for transport to indicate itself viable", 5e4, 500));
          }, g)),
          c.on(["failed", "disconnected"], u),
          c.on("preconnect", function () {
            i.logAction(n.logger, i.LOG_MINOR, "Transport.tryConnect()", "viable transport " + c), clearTimeout(l), c.off(["failed", "disconnected"], u), a(null, c);
          }),
          c.connect(),
          c
        );
      }
      static isAvailable() {
        throw new h("isAvailable not implemented for transport", 5e4, 500);
      }
    },
    de = jn;
  var q;
  ((n) => ((n.WebSocket = "web_socket"), (n.Comet = "comet"), (n.XhrPolling = "xhr_polling")))(q || (q = {}));
  var Do = typeof global != "undefined" ? global : typeof window != "undefined" ? window : self,
    Wn = () => {
      var s;
      return typeof p.WebStorage != "undefined" && ((s = p.WebStorage) == null ? void 0 : s.localSupported);
    },
    ot = () => {
      var s;
      return typeof p.WebStorage != "undefined" && ((s = p.WebStorage) == null ? void 0 : s.sessionSupported);
    },
    mr = function () {},
    Vn = "ably-transport-preference";
  function Ho(s, t, e) {
    let n;
    if (s.channel !== t.channel || ((n = s.action) !== b.PRESENCE && n !== b.MESSAGE) || n !== t.action) return !1;
    let r = n === b.PRESENCE ? "presence" : "messages",
      o = s[r].concat(t[r]);
    return Le(o) > e ||
      !Zt(o, "clientId") ||
      !o.every(function (c) {
        return !c.id;
      })
      ? !1
      : ((s[r] = o), !0);
  }
  function zn(s) {
    try {
      return JSON.parse(s);
    } catch (t) {
      return null;
    }
  }
  var Jn = class {
      constructor(t, e, n, r) {
        (this.options = t), (this.host = e), (this.mode = n), (this.connectionKey = r), (this.format = t.useBinaryProtocol ? "msgpack" : "json");
      }
      getConnectParams(t) {
        let e = t ? oe(t) : {},
          n = this.options;
        switch (this.mode) {
          case "resume":
            e.resume = this.connectionKey;
            break;
          case "recover": {
            let r = zn(n.recover);
            r && (e.recover = r.connectionKey);
            break;
          }
          default:
        }
        return (
          n.clientId !== void 0 && (e.clientId = n.clientId),
          n.echoMessages === !1 && (e.echo = "false"),
          this.format !== void 0 && (e.format = this.format),
          this.stream !== void 0 && (e.stream = this.stream),
          this.heartbeats !== void 0 && (e.heartbeats = this.heartbeats),
          (e.v = R.protocolVersion),
          (e.agent = bt(this.options)),
          n.transportParams !== void 0 && C(e, n.transportParams),
          e
        );
      }
      toString() {
        let t = "[mode=" + this.mode;
        return this.host && (t += ",host=" + this.host), this.connectionKey && (t += ",connectionKey=" + this.connectionKey), this.format && (t += ",format=" + this.format), (t += "]"), t;
      }
    },
    Kn = class s extends M {
      constructor(e, n) {
        super(e.logger);
        this.supportedTransports = {};
        this.disconnectedRetryCount = 0;
        this.pendingChannelMessagesState = { isProcessing: !1, queue: [] };
        (this.realtime = e), this.initTransports(), (this.options = n);
        let r = n.timeouts,
          o = r.webSocketConnectTimeout + r.realtimeRequestTimeout;
        if (
          ((this.states = {
            initialized: { state: "initialized", terminal: !1, queueEvents: !0, sendEvents: !1, failState: "disconnected" },
            connecting: { state: "connecting", terminal: !1, queueEvents: !0, sendEvents: !1, retryDelay: o, failState: "disconnected" },
            connected: { state: "connected", terminal: !1, queueEvents: !1, sendEvents: !0, failState: "disconnected" },
            disconnected: { state: "disconnected", terminal: !1, queueEvents: !0, sendEvents: !1, retryDelay: r.disconnectedRetryTimeout, failState: "disconnected" },
            suspended: { state: "suspended", terminal: !1, queueEvents: !1, sendEvents: !1, retryDelay: r.suspendedRetryTimeout, failState: "suspended" },
            closing: { state: "closing", terminal: !1, queueEvents: !1, sendEvents: !1, retryDelay: r.realtimeRequestTimeout, failState: "closed" },
            closed: { state: "closed", terminal: !0, queueEvents: !1, sendEvents: !1, failState: "closed" },
            failed: { state: "failed", terminal: !0, queueEvents: !1, sendEvents: !1, failState: "failed" },
          }),
          (this.state = this.states.initialized),
          (this.errorReason = null),
          (this.queuedMessages = new Nt(this.logger)),
          (this.msgSerial = 0),
          (this.connectionDetails = void 0),
          (this.connectionId = void 0),
          (this.connectionKey = void 0),
          (this.connectionStateTtl = r.connectionStateTtl),
          (this.maxIdleInterval = null),
          (this.transports = $t(n.transports || R.defaultTransports, this.supportedTransports)),
          (this.transportPreference = null),
          this.transports.includes(q.WebSocket) && (this.webSocketTransportAvailable = !0),
          this.transports.includes(q.XhrPolling) ? (this.baseTransport = q.XhrPolling) : this.transports.includes(q.Comet) && (this.baseTransport = q.Comet),
          (this.httpHosts = R.getHosts(n)),
          (this.wsHosts = R.getHosts(n, !0)),
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
          i.logAction(this.logger, i.LOG_MINOR, "Realtime.ConnectionManager()", "started"),
          i.logAction(this.logger, i.LOG_MICRO, "Realtime.ConnectionManager()", "requested transports = [" + (n.transports || R.defaultTransports) + "]"),
          i.logAction(this.logger, i.LOG_MICRO, "Realtime.ConnectionManager()", "available transports = [" + this.transports + "]"),
          i.logAction(this.logger, i.LOG_MICRO, "Realtime.ConnectionManager()", "http hosts = [" + this.httpHosts + "]"),
          !this.transports.length)
        ) {
          let c = "no requested transports available";
          throw (i.logAction(this.logger, i.LOG_ERROR, "realtime.ConnectionManager()", c), new Error(c));
        }
        let a = p.Config.addEventListener;
        a &&
          (ot() && typeof n.recover == "function" && a("beforeunload", this.persistConnection.bind(this)),
          n.closeOnUnload === !0 &&
            a("beforeunload", () => {
              i.logAction(this.logger, i.LOG_MAJOR, "Realtime.ConnectionManager()", "beforeunload event has triggered the connection to close as closeOnUnload is true"), this.requestState({ state: "closing" });
            }),
          a("online", () => {
            var c;
            this.state == this.states.disconnected || this.state == this.states.suspended
              ? (i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager caught browser \u2018online\u2019 event", "reattempting connection"), this.requestState({ state: "connecting" }))
              : this.state == this.states.connecting && ((c = this.pendingTransport) == null || c.off(), this.disconnectAllTransports(), this.startConnect());
          }),
          a("offline", () => {
            this.state == this.states.connected && (i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager caught browser \u2018offline\u2019 event", "disconnecting active transport"), this.disconnectAllTransports());
          }));
      }
      static supportedTransports(e) {
        let n = { supportedTransports: {} };
        return this.initTransports(e, n), n.supportedTransports;
      }
      static initTransports(e, n) {
        let r = E(E({}, p.Transports.bundledImplementations), e);
        [q.WebSocket, ...p.Transports.order].forEach((o) => {
          let a = r[o];
          a && a.isAvailable() && (n.supportedTransports[o] = a);
        });
      }
      initTransports() {
        s.initTransports(this.realtime._additionalTransportImplementations, this);
      }
      createTransportParams(e, n) {
        return new Jn(this.options, e, n, this.connectionKey);
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
            i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.getTransportParams()", "Calling clientOptions-provided recover function with last session data (recovery scope: " + c + ")"),
              o(a, (l) => {
                l ? ((this.options.recover = a.recoveryKey), r("recover")) : r("clean");
              });
            return;
          }
          r("clean");
        })((r) => {
          let o = this.createTransportParams(null, r);
          if (r === "recover") {
            i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport recovery mode = recover; recoveryKey = " + this.options.recover);
            let a = zn(this.options.recover);
            a && (this.msgSerial = a.msgSerial);
          } else i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport params = " + o.toString());
          e(o);
        });
      }
      tryATransport(e, n, r) {
        i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.tryATransport()", "trying " + n),
          (this.proposedTransport = de.tryConnect(this.supportedTransports[n], this, this.realtime.auth, e, (o, a) => {
            let c = this.state;
            if (c == this.states.closing || c == this.states.closed || c == this.states.failed) {
              a && (i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.tryATransport()", "connection " + c.state + " while we were attempting the transport; closing " + a), a.close()), r(!0);
              return;
            }
            if (o) {
              i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.tryATransport()", "transport " + n + " " + o.event + ", err: " + o.error.toString()),
                $.isTokenErr(o.error) && !(this.errorReason && $.isTokenErr(this.errorReason))
                  ? ((this.errorReason = o.error),
                    N(this.realtime.auth._forceNewToken(null, null), (l) => {
                      if (l) {
                        this.actOnErrorFromAuthorize(l);
                        return;
                      }
                      this.tryATransport(e, n, r);
                    }))
                  : o.event === "failed"
                  ? (this.notifyState({ state: "failed", error: o.error }), r(!0))
                  : o.event === "disconnected" && (fr(o.error) ? r(!1) : (this.notifyState({ state: this.states.connecting.failState, error: o.error }), r(!0)));
              return;
            }
            i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.tryATransport()", "viable transport " + n + "; setting pending"), this.setTransportPending(a, e), r(null, a);
          }));
      }
      setTransportPending(e, n) {
        let r = n.mode;
        i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.setTransportPending()", "transport = " + e + "; mode = " + r),
          (this.pendingTransport = e),
          this.cancelWebSocketSlowTimer(),
          this.cancelWebSocketGiveUpTimer(),
          e.once("connected", (a, c, l) => {
            this.activateTransport(a, e, c, l), r === "recover" && this.options.recover && (delete this.options.recover, this.unpersistConnection());
          });
        let o = this;
        e.on(["disconnected", "closed", "failed"], function (a) {
          o.deactivateTransport(e, this.event, a);
        }),
          this.emit("transport.pending", e);
      }
      activateTransport(e, n, r, o) {
        i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.activateTransport()", "transport = " + n),
          e && i.logAction(this.logger, i.LOG_ERROR, "ConnectionManager.activateTransport()", "error = " + e),
          r && i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionId =  " + r),
          o && i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionDetails =  " + JSON.stringify(o)),
          this.persistTransportPreference(n);
        let a = this.state,
          c = this.states.connected.state;
        if ((i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.activateTransport()", "current state = " + a.state), a.state == this.states.closing.state || a.state == this.states.closed.state || a.state == this.states.failed.state))
          return i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.activateTransport()", "Disconnecting transport and abandoning"), n.disconnect(), !1;
        if ((delete this.pendingTransport, !n.isConnected)) return i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.activateTransport()", "Declining to activate transport " + n + " since it appears to no longer be connected"), !1;
        let l = this.activeProtocol;
        (this.activeProtocol = new gr(n)), (this.host = n.params.host);
        let u = o.connectionKey;
        if (
          (u && this.connectionKey != u && this.setConnection(r, o, !!e),
          this.onConnectionDetailsUpdate(o, n),
          p.Config.nextTick(() => {
            n.on("connected", (g, d, m) => {
              this.onConnectionDetailsUpdate(m, n), this.emit("update", new rt(c, c, null, g));
            });
          }),
          a.state === this.states.connected.state
            ? e && ((this.errorReason = this.realtime.connection.errorReason = e), this.emit("update", new rt(c, c, null, e)))
            : (this.notifyState({ state: "connected", error: e }), (this.errorReason = this.realtime.connection.errorReason = e || null)),
          this.emit("transport.active", n),
          l)
        )
          if (
            (l.messageQueue.count() > 0 &&
              i.logAction(
                this.logger,
                i.LOG_ERROR,
                "ConnectionManager.activateTransport()",
                "Previous active protocol (for transport " + l.transport.shortName + ", new one is " + n.shortName + ") finishing with " + l.messageQueue.count() + " messages still pending"
              ),
            l.transport === n)
          ) {
            let g = "Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = " + n.shortName + "; stack = " + new Error().stack;
            i.logAction(this.logger, i.LOG_ERROR, "ConnectionManager.activateTransport()", g);
          } else l.finish();
        return !0;
      }
      deactivateTransport(e, n, r) {
        let o = this.activeProtocol,
          a = o && o.getTransport() === e,
          c = e === this.pendingTransport,
          l = this.noTransportsScheduledForActivation();
        if (
          (i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.deactivateTransport()", "transport = " + e),
          i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.deactivateTransport()", "state = " + n + (a ? "; was active" : c ? "; was pending" : "") + (l ? "" : "; another transport is scheduled for activation")),
          r && r.message && i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.deactivateTransport()", "reason =  " + r.message),
          a &&
            (i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.deactivateTransport()", "Getting, clearing, and requeuing " + this.activeProtocol.messageQueue.count() + " pending messages"),
            this.queuePendingMessages(o.getPendingMessages()),
            o.clearPendingMessages(),
            (this.activeProtocol = this.host = null)),
          this.emit("transport.inactive", e),
          (a && l) || (a && n === "failed") || n === "closed" || (o === null && c))
        ) {
          if (n === "disconnected" && r && r.statusCode > 500 && this.httpHosts.length > 1) {
            this.unpersistTransportPreference(), (this.forceFallbackHost = !0), this.notifyState({ state: n, error: r, retryImmediately: !0 });
            return;
          }
          let u = n === "failed" && $.isTokenErr(r) ? "disconnected" : n;
          this.notifyState({ state: u, error: r });
          return;
        }
      }
      noTransportsScheduledForActivation() {
        return !this.pendingTransport || !this.pendingTransport.isConnected;
      }
      setConnection(e, n, r) {
        let o = this.connectionId;
        ((o && o !== e) || (!o && r)) && (i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.setConnection()", "Resetting msgSerial"), (this.msgSerial = 0), this.queuedMessages.resetSendAttempted()),
          this.connectionId !== e && i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.setConnection()", "New connectionId; reattaching any attached channels"),
          (this.realtime.connection.id = this.connectionId = e),
          (this.realtime.connection.key = this.connectionKey = n.connectionKey);
      }
      clearConnection() {
        (this.realtime.connection.id = this.connectionId = void 0), (this.realtime.connection.key = this.connectionKey = void 0), (this.msgSerial = 0), this.unpersistConnection();
      }
      createRecoveryKey() {
        return this.connectionKey ? JSON.stringify({ connectionKey: this.connectionKey, msgSerial: this.msgSerial, channelSerials: this.realtime.channels.channelSerials() }) : null;
      }
      checkConnectionStateFreshness() {
        if (!this.lastActivity || !this.connectionId) return;
        let e = Date.now() - this.lastActivity;
        e > this.connectionStateTtl + this.maxIdleInterval &&
          (i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.checkConnectionStateFreshness()", "Last known activity from realtime was " + e + "ms ago; discarding connection state"),
          this.clearConnection(),
          (this.states.connecting.failState = "suspended"));
      }
      persistConnection() {
        if (ot()) {
          let e = this.createRecoveryKey();
          e && this.setSessionRecoverData({ recoveryKey: e, disconnectedAt: Date.now(), location: Do.location, clientId: this.realtime.auth.clientId });
        }
      }
      unpersistConnection() {
        this.clearSessionRecoverData();
      }
      getActiveTransportFormat() {
        var e;
        return (e = this.activeProtocol) == null ? void 0 : e.getTransport().format;
      }
      getError() {
        if (this.errorReason) {
          let e = v.fromValues(this.errorReason);
          return (e.cause = this.errorReason), e;
        }
        return this.getStateError();
      }
      getStateError() {
        var e, n;
        return (n = (e = ae)[this.state.state]) == null ? void 0 : n.call(e);
      }
      activeState() {
        return this.state.queueEvents || this.state.sendEvents;
      }
      enactStateChange(e) {
        let n = "Connection state",
          r = e.current + (e.reason ? "; reason: " + e.reason : "");
        e.current === "failed" ? i.logAction(this.logger, i.LOG_ERROR, n, r) : i.logAction(this.logger, i.LOG_MAJOR, n, r),
          i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.enactStateChange", "setting new state: " + e.current + "; reason = " + (e.reason && e.reason.message));
        let o = (this.state = this.states[e.current]);
        e.reason && ((this.errorReason = e.reason), (this.realtime.connection.errorReason = e.reason)), (o.terminal || o.state === "suspended") && this.clearConnection(), this.emit("connectionstate", e);
      }
      startTransitionTimer(e) {
        i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "transitionState: " + e.state),
          this.transitionTimer && (i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "clearing already-running timer"), clearTimeout(this.transitionTimer)),
          (this.transitionTimer = setTimeout(() => {
            this.transitionTimer && ((this.transitionTimer = null), i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager " + e.state + " timer expired", "requesting new state: " + e.failState), this.notifyState({ state: e.failState }));
          }, e.retryDelay));
      }
      cancelTransitionTimer() {
        i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.cancelTransitionTimer()", ""), this.transitionTimer && (clearTimeout(this.transitionTimer), (this.transitionTimer = null));
      }
      startSuspendTimer() {
        this.suspendTimer ||
          (this.suspendTimer = setTimeout(() => {
            this.suspendTimer &&
              ((this.suspendTimer = null),
              i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager suspend timer expired", "requesting new state: suspended"),
              (this.states.connecting.failState = "suspended"),
              this.notifyState({ state: "suspended" }));
          }, this.connectionStateTtl));
      }
      checkSuspendTimer(e) {
        e !== "disconnected" && e !== "suspended" && e !== "connecting" && this.cancelSuspendTimer();
      }
      cancelSuspendTimer() {
        (this.states.connecting.failState = "disconnected"), this.suspendTimer && (clearTimeout(this.suspendTimer), (this.suspendTimer = null));
      }
      startRetryTimer(e) {
        this.retryTimer = setTimeout(() => {
          i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager retry timer expired", "retrying"), (this.retryTimer = null), this.requestState({ state: "connecting" });
        }, e);
      }
      cancelRetryTimer() {
        this.retryTimer && (clearTimeout(this.retryTimer), (this.retryTimer = null));
      }
      startWebSocketSlowTimer() {
        this.webSocketSlowTimer = setTimeout(() => {
          i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager WebSocket slow timer", "checking connectivity"),
            this.checkWsConnectivity()
              .then(() => {
                i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager WebSocket slow timer", "ws connectivity check succeeded"), (this.wsCheckResult = !0);
              })
              .catch(() => {
                i.logAction(this.logger, i.LOG_MAJOR, "ConnectionManager WebSocket slow timer", "ws connectivity check failed"), (this.wsCheckResult = !1);
              }),
            this.realtime.http.checkConnectivity &&
              N(this.realtime.http.checkConnectivity(), (e, n) => {
                e || !n
                  ? (i.logAction(this.logger, i.LOG_MAJOR, "ConnectionManager WebSocket slow timer", "http connectivity check failed"),
                    this.cancelWebSocketGiveUpTimer(),
                    this.notifyState({ state: "disconnected", error: new h("Unable to connect (network unreachable)", 80003, 404) }))
                  : i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager WebSocket slow timer", "http connectivity check succeeded");
              });
        }, this.options.timeouts.webSocketSlowTimeout);
      }
      cancelWebSocketSlowTimer() {
        this.webSocketSlowTimer && (clearTimeout(this.webSocketSlowTimer), (this.webSocketSlowTimer = null));
      }
      startWebSocketGiveUpTimer(e) {
        this.webSocketGiveUpTimer = setTimeout(() => {
          var n, r;
          this.wsCheckResult ||
            (i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager WebSocket give up timer", "websocket connection took more than 10s; " + (this.baseTransport ? "trying base transport" : "")),
            this.baseTransport
              ? ((this.abandonedWebSocket = !0), (n = this.proposedTransport) == null || n.dispose(), (r = this.pendingTransport) == null || r.dispose(), this.connectBase(e, ++this.connectCounter))
              : i.logAction(this.logger, i.LOG_MAJOR, "ConnectionManager WebSocket give up timer", "websocket connectivity appears to be unavailable but no other transports to try"));
        }, this.options.timeouts.webSocketConnectTimeout);
      }
      cancelWebSocketGiveUpTimer() {
        this.webSocketGiveUpTimer && (clearTimeout(this.webSocketGiveUpTimer), (this.webSocketGiveUpTimer = null));
      }
      notifyState(e) {
        var l, u;
        let n = e.state,
          r = n === "disconnected" && (this.state === this.states.connected || e.retryImmediately || (this.state === this.states.connecting && e.error && $.isTokenErr(e.error) && !(this.errorReason && $.isTokenErr(this.errorReason))));
        if (
          (i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.notifyState()", "new state: " + n + (r ? "; will retry connection immediately" : "")),
          n == this.state.state ||
            (this.cancelTransitionTimer(),
            this.cancelRetryTimer(),
            this.cancelWebSocketSlowTimer(),
            this.cancelWebSocketGiveUpTimer(),
            this.checkSuspendTimer(e.state),
            (n === "suspended" || n === "connected") && (this.disconnectedRetryCount = 0),
            this.state.terminal))
        )
          return;
        let o = this.states[e.state],
          a = o.retryDelay;
        o.state === "disconnected" && (this.disconnectedRetryCount++, (a = Xe(o.retryDelay, this.disconnectedRetryCount)));
        let c = new rt(this.state.state, o.state, a, e.error || ((u = (l = ae)[o.state]) == null ? void 0 : u.call(l)));
        if (r) {
          let g = () => {
              this.state === this.states.disconnected && ((this.lastAutoReconnectAttempt = Date.now()), this.requestState({ state: "connecting" }));
            },
            d = this.lastAutoReconnectAttempt && Date.now() - this.lastAutoReconnectAttempt + 1;
          d && d < 1e3
            ? (i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.notifyState()", "Last reconnect attempt was only " + d + "ms ago, waiting another " + (1e3 - d) + "ms before trying again"), setTimeout(g, 1e3 - d))
            : p.Config.nextTick(g);
        } else (n === "disconnected" || n === "suspended") && this.startRetryTimer(a);
        ((n === "disconnected" && !r) || n === "suspended" || o.terminal) &&
          p.Config.nextTick(() => {
            this.disconnectAllTransports();
          }),
          n == "connected" && !this.activeProtocol && i.logAction(this.logger, i.LOG_ERROR, "ConnectionManager.notifyState()", "Broken invariant: attempted to go into connected state, but there is no active protocol"),
          this.enactStateChange(c),
          this.state.sendEvents ? this.sendQueuedMessages() : this.state.queueEvents || (this.realtime.channels.propogateConnectionInterruption(n, c.reason), this.failQueuedMessages(c.reason));
      }
      requestState(e) {
        var a, c;
        let n = e.state;
        if (
          (i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.requestState()", "requested state: " + n + "; current state: " + this.state.state),
          n == this.state.state ||
            (this.cancelWebSocketSlowTimer(), this.cancelWebSocketGiveUpTimer(), this.cancelTransitionTimer(), this.cancelRetryTimer(), this.checkSuspendTimer(n), n == "connecting" && this.state.state == "connected") ||
            (n == "closing" && this.state.state == "closed"))
        )
          return;
        let r = this.states[n],
          o = new rt(this.state.state, r.state, null, e.error || ((c = (a = ae)[r.state]) == null ? void 0 : c.call(a)));
        this.enactStateChange(o),
          n == "connecting" &&
            p.Config.nextTick(() => {
              this.startConnect();
            }),
          n == "closing" && this.closeImpl();
      }
      startConnect() {
        if (this.state !== this.states.connecting) {
          i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.startConnect()", "Must be in connecting state to connect, but was " + this.state.state);
          return;
        }
        let e = this.realtime.auth,
          n = ++this.connectCounter,
          r = () => {
            this.checkConnectionStateFreshness(),
              this.getTransportParams((o) => {
                if (o.mode === "recover" && o.options.recover) {
                  let a = zn(o.options.recover);
                  a && this.realtime.channels.recoverChannels(a.channelSerials);
                }
                n === this.connectCounter && this.connectImpl(o, n);
              });
          };
        if ((i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.startConnect()", "starting connection"), this.startSuspendTimer(), this.startTransitionTimer(this.states.connecting), e.method === "basic")) r();
        else {
          let o = (a) => {
            n === this.connectCounter && (a ? this.actOnErrorFromAuthorize(a) : r());
          };
          this.errorReason && $.isTokenErr(this.errorReason) ? N(e._forceNewToken(null, null), o) : N(e._ensureValidAuthCredentials(!1), o);
        }
      }
      connectImpl(e, n) {
        let r = this.state.state;
        if (r !== this.states.connecting.state) {
          i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.connectImpl()", "Must be in connecting state to connect, but was " + r);
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
                  (i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.connectImpl():", "web socket connectivity available, cancelling connection attempt with " + this.baseTransport),
                  this.disconnectAllTransports(),
                  this.connectWs(e, ++this.connectCounter));
            })
            .catch(mr),
          (o && o === this.baseTransport) || (this.baseTransport && !this.webSocketTransportAvailable) ? this.connectBase(e, n) : this.connectWs(e, n);
      }
      connectWs(e, n) {
        i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.connectWs()"),
          (this.wsCheckResult = null),
          (this.abandonedWebSocket = !1),
          this.startWebSocketSlowTimer(),
          this.startWebSocketGiveUpTimer(e),
          this.tryTransportWithFallbacks("web_socket", e, !0, n, () => this.wsCheckResult !== !1 && !this.abandonedWebSocket);
      }
      connectBase(e, n) {
        i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.connectBase()"),
          this.baseTransport ? this.tryTransportWithFallbacks(this.baseTransport, e, !1, n, () => !0) : this.notifyState({ state: "disconnected", error: new h("No transports left to try", 8e4, 404) });
      }
      tryTransportWithFallbacks(e, n, r, o, a) {
        i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.tryTransportWithFallbacks()", e);
        let c = (m) => {
            this.notifyState({ state: this.states.connecting.failState, error: m });
          },
          l = r ? this.wsHosts.slice() : this.httpHosts.slice(),
          u = (m, f) => {
            if (o === this.connectCounter) {
              if (!a()) {
                f && f.dispose();
                return;
              }
              !f && !m && d();
            }
          },
          g = l.shift();
        if (!g) {
          c(new h("Unable to connect (no available host)", 80003, 404));
          return;
        }
        n.host = g;
        let d = () => {
          if (!l.length) {
            c(new h("Unable to connect (and no more fallback hosts to try)", 80003, 404));
            return;
          }
          if (!this.realtime.http.checkConnectivity) {
            c(new v("Internal error: Http.checkConnectivity not set", null, 500));
            return;
          }
          N(this.realtime.http.checkConnectivity(), (m, f) => {
            if (o === this.connectCounter && a()) {
              if (m) {
                c(m);
                return;
              }
              if (!f) {
                c(new h("Unable to connect (network unreachable)", 80003, 404));
                return;
              }
              (n.host = Rt(l)), this.tryATransport(n, e, u);
            }
          });
        };
        if (this.forceFallbackHost && l.length) {
          (this.forceFallbackHost = !1), d();
          return;
        }
        this.tryATransport(n, e, u);
      }
      closeImpl() {
        i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.closeImpl()", "closing connection"),
          this.cancelSuspendTimer(),
          this.startTransitionTimer(this.states.closing),
          this.pendingTransport && (i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing pending transport: " + this.pendingTransport), this.pendingTransport.close()),
          this.activeProtocol && (i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().close()),
          this.notifyState({ state: "closed" });
      }
      onAuthUpdated(e, n) {
        var r;
        switch (this.state.state) {
          case "connected": {
            i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Sending AUTH message on active transport");
            let o = (r = this.activeProtocol) == null ? void 0 : r.getTransport();
            o && o.onAuthUpdated && o.onAuthUpdated(e);
            let a = G({ action: b.AUTH, auth: { accessToken: e.token } });
            this.send(a);
            let c = () => {
                this.off(l), n(null, e);
              },
              l = (u) => {
                u.current === "failed" && (this.off(c), this.off(l), n(u.reason || this.getStateError()));
              };
            this.once("connectiondetails", c), this.on("connectionstate", l);
            break;
          }
          case "connecting":
            i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Aborting current connection attempts in order to start again with the new auth details"), this.disconnectAllTransports();
          default: {
            i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Connection state is " + this.state.state + "; waiting until either connected or failed");
            let o = (a) => {
              switch (a.current) {
                case "connected":
                  this.off(o), n(null, e);
                  break;
                case "failed":
                case "closed":
                case "suspended":
                  this.off(o), n(a.reason || this.getStateError());
                  break;
                default:
                  break;
              }
            };
            this.on("connectionstate", o), this.state.state === "connecting" ? this.startConnect() : this.requestState({ state: "connecting" });
          }
        }
      }
      disconnectAllTransports() {
        i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.disconnectAllTransports()", "Disconnecting all transports"),
          this.connectCounter++,
          this.pendingTransport && (i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting pending transport: " + this.pendingTransport), this.pendingTransport.disconnect()),
          delete this.pendingTransport,
          this.proposedTransport && (i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting proposed transport: " + this.pendingTransport), this.proposedTransport.disconnect()),
          delete this.pendingTransport,
          this.activeProtocol && (i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().disconnect());
      }
      send(e, n, r) {
        r = r || mr;
        let o = this.state;
        if (o.sendEvents) {
          i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.send()", "sending event"), this.sendImpl(new st(e, r));
          return;
        }
        if (!(n && o.queueEvents)) {
          let c = "rejecting event, queueEvent was " + n + ", state was " + o.state;
          i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.send()", c), r(this.errorReason || new h(c, 9e4, 400));
          return;
        }
        this.logger.shouldLog(i.LOG_MICRO) && i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.send()", "queueing msg; " + Fe(e, this.realtime._RealtimePresence, this.realtime._Annotations, this.realtime._objectsPlugin)), this.queue(e, r);
      }
      sendImpl(e) {
        let n = e.message;
        e.ackRequired && !e.sendAttempted && (n.msgSerial = this.msgSerial++);
        try {
          this.activeProtocol.send(e);
        } catch (r) {
          i.logAction(this.logger, i.LOG_ERROR, "ConnectionManager.sendImpl()", "Unexpected exception in transport.send(): " + r.stack);
        }
      }
      queue(e, n) {
        i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.queue()", "queueing event");
        let r = this.queuedMessages.last(),
          o = this.options.maxMessageSize;
        r && !r.sendAttempted && Ho(r.message, e, o) ? (r.merged || ((r.callback = Se.create(this.logger, [r.callback])), (r.merged = !0)), r.callback.push(n)) : this.queuedMessages.push(new st(e, n));
      }
      sendQueuedMessages() {
        i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.sendQueuedMessages()", "sending " + this.queuedMessages.count() + " queued messages");
        let e;
        for (; (e = this.queuedMessages.shift()); ) this.sendImpl(e);
      }
      queuePendingMessages(e) {
        e && e.length && (i.logAction(this.logger, i.LOG_MICRO, "ConnectionManager.queuePendingMessages()", "queueing " + e.length + " pending messages"), this.queuedMessages.prepend(e));
      }
      failQueuedMessages(e) {
        let n = this.queuedMessages.count();
        n > 0 && (i.logAction(this.logger, i.LOG_ERROR, "ConnectionManager.failQueuedMessages()", "failing " + n + " queued messages, err = " + w(e)), this.queuedMessages.completeAllMessages(e));
      }
      onChannelMessage(e, n) {
        this.pendingChannelMessagesState.queue.push({ message: e, transport: n }), this.pendingChannelMessagesState.isProcessing || this.processNextPendingChannelMessage();
      }
      processNextPendingChannelMessage() {
        if (this.pendingChannelMessagesState.queue.length > 0) {
          this.pendingChannelMessagesState.isProcessing = !0;
          let e = this.pendingChannelMessagesState.queue.shift();
          this.processChannelMessage(e.message)
            .catch((n) => {
              i.logAction(this.logger, i.LOG_ERROR, "ConnectionManager.processNextPendingChannelMessage() received error ", n);
            })
            .finally(() => {
              (this.pendingChannelMessagesState.isProcessing = !1), this.processNextPendingChannelMessage();
            });
        }
      }
      async processChannelMessage(e) {
        await this.realtime.channels.processChannelMessage(e);
      }
      async ping() {
        var o;
        if (this.state.state !== "connected") throw new h("Unable to ping service; not connected", 4e4, 400);
        let e = (o = this.activeProtocol) == null ? void 0 : o.getTransport();
        if (!e) throw this.getStateError();
        i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.ping()", "transport = " + e);
        let n = Date.now(),
          r = Te();
        return ln(
          new Promise((a) => {
            let c = (l) => {
              l === r && (e.off("heartbeat", c), a(Date.now() - n));
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
        var e, n;
        return this.transportPreference || (Wn() && ((n = (e = p.WebStorage) == null ? void 0 : e.get) == null ? void 0 : n.call(e, Vn)));
      }
      persistTransportPreference(e) {
        var n, r;
        (this.transportPreference = e.shortName), Wn() && ((r = (n = p.WebStorage) == null ? void 0 : n.set) == null || r.call(n, Vn, e.shortName));
      }
      unpersistTransportPreference() {
        var e, n;
        (this.transportPreference = null), Wn() && ((n = (e = p.WebStorage) == null ? void 0 : e.remove) == null || n.call(e, Vn));
      }
      actOnErrorFromAuthorize(e) {
        if (e.code === 40171) this.notifyState({ state: "failed", error: e });
        else if (e.code === 40102) this.notifyState({ state: "failed", error: e });
        else if (e.statusCode === ge.Forbidden) {
          let n = "Client configured authentication provider returned 403; failing the connection";
          i.logAction(this.logger, i.LOG_ERROR, "ConnectionManager.actOnErrorFromAuthorize()", n), this.notifyState({ state: "failed", error: new h(n, 80019, 403, e) });
        } else {
          let n = "Client configured authentication provider request failed";
          i.logAction(this.logger, i.LOG_MINOR, "ConnectionManager.actOnErrorFromAuthorize", n), this.notifyState({ state: this.state.failState, error: new h(n, 80019, 401, e) });
        }
      }
      onConnectionDetailsUpdate(e, n) {
        if (!e) return;
        (this.connectionDetails = e), e.maxMessageSize && (this.options.maxMessageSize = e.maxMessageSize);
        let r = e.clientId;
        if (r) {
          let a = this.realtime.auth._uncheckedSetClientId(r);
          if (a) {
            i.logAction(this.logger, i.LOG_ERROR, "ConnectionManager.onConnectionDetailsUpdate()", a.message), n.fail(a);
            return;
          }
        }
        let o = e.connectionStateTtl;
        o && (this.connectionStateTtl = o), (this.maxIdleInterval = e.maxIdleInterval), this.emit("connectiondetails", e);
      }
      checkWsConnectivity() {
        let e = this.options.wsConnectivityCheckUrl || R.wsConnectivityCheckUrl,
          n = new p.Config.WebSocket(e);
        return new Promise((r, o) => {
          let a = !1;
          (n.onopen = () => {
            a || ((a = !0), r(), n.close());
          }),
            (n.onclose = n.onerror =
              () => {
                a || ((a = !0), o());
              });
        });
      }
      sessionRecoveryName() {
        return this.options.recoveryKeyStorageName || "ably-connection-recovery";
      }
      getSessionRecoverData() {
        var e, n;
        return ot() && ((n = (e = p.WebStorage) == null ? void 0 : e.getSession) == null ? void 0 : n.call(e, this.sessionRecoveryName()));
      }
      setSessionRecoverData(e) {
        var n, r;
        return ot() && ((r = (n = p.WebStorage) == null ? void 0 : n.setSession) == null ? void 0 : r.call(n, this.sessionRecoveryName(), e));
      }
      clearSessionRecoverData() {
        var e, n;
        return ot() && ((n = (e = p.WebStorage) == null ? void 0 : e.removeSession) == null ? void 0 : n.call(e, this.sessionRecoveryName()));
      }
    },
    qt = Kn;
  var Qn = class extends M {
      constructor(e, n) {
        super(e.logger);
        this.whenState = (e) => M.prototype.whenState.call(this, e, this.state);
        (this.ably = e),
          (this.connectionManager = new qt(e, n)),
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
        i.logAction(this.logger, i.LOG_MINOR, "Connection.connect()", ""), this.connectionManager.requestState({ state: "connecting" });
      }
      async ping() {
        return i.logAction(this.logger, i.LOG_MINOR, "Connection.ping()", ""), this.connectionManager.ping();
      }
      close() {
        i.logAction(this.logger, i.LOG_MINOR, "Connection.close()", "connectionKey = " + this.key), this.connectionManager.requestState({ state: "closing" });
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
    yr = Qn;
  var Dt = class Dt extends wt {
    constructor(e) {
      var n, r, o, a;
      super(R.objectifyOptions(e, !1, "BaseRealtime", i.defaultLogger));
      if ((i.logAction(this.logger, i.LOG_MINOR, "Realtime()", ""), typeof EdgeRuntime == "string"))
        throw new h(
          `Ably.Realtime instance cannot be used in Vercel Edge runtime. If you are running Vercel Edge functions, please replace your "new Ably.Realtime()" with "new Ably.Rest()" and use Ably Rest API instead of the Realtime API. If you are server-rendering your application in the Vercel Edge runtime, please use the condition "if (typeof EdgeRuntime === 'string')" to prevent instantiating Ably.Realtime instance during SSR in the Vercel Edge runtime.`,
          4e4,
          400
        );
      (this._additionalTransportImplementations = Dt.transportImplementationsFromPlugins(this.options.plugins)),
        (this._RealtimePresence = (r = (n = this.options.plugins) == null ? void 0 : n.RealtimePresence) != null ? r : null),
        (this._objectsPlugin = (a = (o = this.options.plugins) == null ? void 0 : o.Objects) != null ? a : null),
        (this.connection = new yr(this, this.options)),
        (this._channels = new Xn(this)),
        this.options.autoConnect !== !1 && this.connect();
    }
    static transportImplementationsFromPlugins(e) {
      let n = {};
      return e != null && e.WebSocketTransport && (n[q.WebSocket] = e.WebSocketTransport), e != null && e.XHRPolling && (n[q.XhrPolling] = e.XHRPolling), n;
    }
    get channels() {
      return this._channels;
    }
    connect() {
      i.logAction(this.logger, i.LOG_MINOR, "Realtime.connect()", ""), this.connection.connect();
    }
    close() {
      i.logAction(this.logger, i.LOG_MINOR, "Realtime.close()", ""), this.connection.close();
    }
  };
  Dt.EventEmitter = M;
  var $n = Dt,
    Xn = class extends M {
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
        for (let n of pe(this.all, !0)) {
          let r = this.all[n];
          r.properties.channelSerial && (e[n] = r.properties.channelSerial);
        }
        return e;
      }
      recoverChannels(e) {
        for (let n of pe(e, !0)) {
          let r = this.get(n);
          r.properties.channelSerial = e[n];
        }
      }
      async processChannelMessage(e) {
        let n = e.channel;
        if (n === void 0) {
          i.logAction(this.logger, i.LOG_ERROR, "Channels.processChannelMessage()", "received event unspecified channel, action = " + e.action);
          return;
        }
        let r = this.all[n];
        if (!r) {
          i.logAction(this.logger, i.LOG_ERROR, "Channels.processChannelMessage()", "received event for non-existent channel: " + n);
          return;
        }
        await r.processMessage(e);
      }
      onTransportActive() {
        for (let e in this.all) {
          let n = this.all[e];
          n.state === "attaching" || n.state === "detaching" ? n.checkPendingState() : n.state === "suspended" ? n._attach(!1, null) : n.state === "attached" && n.requestState("attaching");
        }
      }
      propogateConnectionInterruption(e, n) {
        let r = { closing: "detached", closed: "detached", failed: "failed", suspended: "suspended" },
          o = ["attaching", "attached", "detaching", "suspended"],
          a = r[e];
        for (let c in this.all) {
          let l = this.all[c];
          o.includes(l.state) && l.notifyState(a, n);
        }
      }
      get(e, n) {
        e = String(e);
        let r = this.all[e];
        if (!r) r = this.all[e] = new Pe(this.realtime, e, n);
        else if (n) {
          if (r._shouldReattachToSetOptions(n, r.channelOptions)) throw new h("Channels.get() cannot be used to set channel options that would cause the channel to reattach. Please, use RealtimeChannel.setOptions() instead.", 4e4, 400);
          r.setOptions(n);
        }
        return r;
      }
      getDerived(e, n, r) {
        if (n.filter) {
          let o = Ee(n.filter),
            a = an(e);
          e = `[filter=${o}${a.qualifierParam}]${a.channelName}`;
        }
        return this.get(e, r);
      }
      release(e) {
        e = String(e);
        let n = this.all[e];
        if (!n) return;
        let r = n.getReleaseErr();
        if (r) throw r;
        delete this.all[e];
      }
    },
    Rr = $n;
  function Go(s, t) {
    if (s.isSynthesized() || t.isSynthesized()) return s.timestamp >= t.timestamp;
    let e = s.parseId(),
      n = t.parseId();
    return e.msgSerial === n.msgSerial ? e.index > n.index : e.msgSerial > n.msgSerial;
  }
  var ke = class extends M {
    constructor(e, n, r = Go) {
      super(e.logger);
      (this.presence = e), (this.map = Object.create(null)), (this.syncInProgress = !1), (this.residualMembers = null), (this.memberKey = n), (this.newerThan = r);
    }
    get(e) {
      return this.map[e];
    }
    getClient(e) {
      let n = this.map,
        r = [];
      for (let o in n) {
        let a = n[o];
        a.clientId == e && a.action != "absent" && r.push(a);
      }
      return r;
    }
    list(e) {
      let n = this.map,
        r = e && e.clientId,
        o = e && e.connectionId,
        a = [];
      for (let c in n) {
        let l = n[c];
        l.action !== "absent" && ((r && r != l.clientId) || (o && o != l.connectionId) || a.push(l));
      }
      return a;
    }
    put(e) {
      (e.action === "enter" || e.action === "update") && ((e = Q.fromValues(e)), (e.action = "present"));
      let n = this.map,
        r = this.memberKey(e);
      this.residualMembers && delete this.residualMembers[r];
      let o = n[r];
      return o && !this.newerThan(e, o) ? !1 : ((n[r] = e), !0);
    }
    values() {
      let e = this.map,
        n = [];
      for (let r in e) {
        let o = e[r];
        o.action != "absent" && n.push(o);
      }
      return n;
    }
    remove(e) {
      let n = this.map,
        r = this.memberKey(e),
        o = n[r];
      return o && !this.newerThan(e, o) ? !1 : (this.syncInProgress ? ((e = Q.fromValues(e)), (e.action = "absent"), (n[r] = e)) : delete n[r], !!o);
    }
    startSync() {
      let e = this.map,
        n = this.syncInProgress;
      i.logAction(this.logger, i.LOG_MINOR, "PresenceMap.startSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + n), this.syncInProgress || ((this.residualMembers = oe(e)), this.setInProgress(!0));
    }
    endSync() {
      let e = this.map,
        n = this.syncInProgress;
      if ((i.logAction(this.logger, i.LOG_MINOR, "PresenceMap.endSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + n), n)) {
        for (let r in e) e[r].action === "absent" && delete e[r];
        this.presence._synthesizeLeaves(Xt(this.residualMembers));
        for (let r in this.residualMembers) delete e[r];
        (this.residualMembers = null), this.setInProgress(!1);
      }
      this.emit("sync");
    }
    waitSync(e) {
      let n = this.syncInProgress;
      if ((i.logAction(this.logger, i.LOG_MINOR, "PresenceMap.waitSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + n), !n)) {
        e();
        return;
      }
      this.once("sync", e);
    }
    clear() {
      (this.map = {}), this.setInProgress(!1), (this.residualMembers = null);
    }
    setInProgress(e) {
      i.logAction(this.logger, i.LOG_MICRO, "PresenceMap.setInProgress()", "inProgress = " + e), (this.syncInProgress = e), (this.presence.syncComplete = !e);
    }
  };
  function Fo(s) {
    return s.channel.client.auth.clientId;
  }
  function Yn(s) {
    let t = s.channel.client,
      e = t.auth.clientId;
    return (!e || e === "*") && t.connection.state === "connected";
  }
  function jo(s, t, e) {
    switch (s.state) {
      case "attached":
      case "suspended":
        e();
        break;
      case "initialized":
      case "detached":
      case "detaching":
      case "attaching":
        N(s.attach(), function (n) {
          n ? t(n) : e();
        });
        break;
      default:
        t(h.fromValues(s.invalidStateError()));
    }
  }
  var Zn = class extends M {
      constructor(e) {
        super(e.logger);
        (this.channel = e),
          (this.syncComplete = !1),
          (this.members = new ke(this, (n) => n.clientId + ":" + n.connectionId)),
          (this._myMembers = new ke(this, (n) => n.clientId)),
          (this.subscriptions = new M(this.logger)),
          (this.pendingPresence = []);
      }
      async enter(e) {
        if (Yn(this)) throw new h("clientId must be specified to enter a presence channel", 40012, 400);
        return this._enterOrUpdateClient(void 0, void 0, e, "enter");
      }
      async update(e) {
        if (Yn(this)) throw new h("clientId must be specified to update presence data", 40012, 400);
        return this._enterOrUpdateClient(void 0, void 0, e, "update");
      }
      async enterClient(e, n) {
        return this._enterOrUpdateClient(void 0, e, n, "enter");
      }
      async updateClient(e, n) {
        return this._enterOrUpdateClient(void 0, e, n, "update");
      }
      async _enterOrUpdateClient(e, n, r, o) {
        let a = this.channel;
        if (!a.connectionManager.activeState()) throw a.connectionManager.getError();
        i.logAction(this.logger, i.LOG_MICRO, "RealtimePresence." + o + "Client()", "channel = " + a.name + ", id = " + e + ", client = " + (n || "(implicit) " + Fo(this)));
        let c = Q.fromData(r);
        (c.action = o), e && (c.id = e), n && (c.clientId = n);
        let l = await c.encode(a.channelOptions);
        switch (a.state) {
          case "attached":
            return a.sendPresence([l]);
          case "initialized":
          case "detached":
            a.attach();
          case "attaching":
            return new Promise((u, g) => {
              this.pendingPresence.push({ presence: l, callback: (d) => (d ? g(d) : u()) });
            });
          default: {
            let u = new v("Unable to " + o + " presence channel while in " + a.state + " state", 90001);
            throw ((u.code = 90001), u);
          }
        }
      }
      async leave(e) {
        if (Yn(this)) throw new h("clientId must have been specified to enter or leave a presence channel", 40012, 400);
        return this.leaveClient(void 0, e);
      }
      async leaveClient(e, n) {
        let r = this.channel;
        if (!r.connectionManager.activeState()) throw r.connectionManager.getError();
        i.logAction(this.logger, i.LOG_MICRO, "RealtimePresence.leaveClient()", "leaving; channel = " + this.channel.name + ", client = " + e);
        let o = Q.fromData(n);
        (o.action = "leave"), e && (o.clientId = e);
        let a = await o.encode(r.channelOptions);
        switch (r.state) {
          case "attached":
            return r.sendPresence([a]);
          case "attaching":
            return new Promise((c, l) => {
              this.pendingPresence.push({ presence: a, callback: (u) => (u ? l(u) : c()) });
            });
          case "initialized":
          case "failed":
            throw new v("Unable to leave presence channel (incompatible state)", 90001);
          default:
            throw r.invalidStateError();
        }
      }
      async get(e) {
        let n = !e || ("waitForSync" in e ? e.waitForSync : !0);
        return new Promise((r, o) => {
          function a(c) {
            r(e ? c.list(e) : c.values());
          }
          if (this.channel.state === "suspended") {
            n ? o(h.fromValues({ statusCode: 400, code: 91005, message: "Presence state is out of sync due to channel being in the SUSPENDED state" })) : a(this.members);
            return;
          }
          jo(
            this.channel,
            (c) => o(c),
            () => {
              let c = this.members;
              n
                ? c.waitSync(function () {
                    a(c);
                  })
                : a(c);
            }
          );
        });
      }
      async history(e) {
        i.logAction(this.logger, i.LOG_MICRO, "RealtimePresence.history()", "channel = " + this.name);
        let n = this.channel.client.rest.presenceMixin;
        if (e && e.untilAttach)
          if (this.channel.state === "attached") delete e.untilAttach, (e.from_serial = this.channel.properties.attachSerial);
          else throw new h("option untilAttach requires the channel to be attached, was: " + this.channel.state, 4e4, 400);
        return n.history(this, e);
      }
      setPresence(e, n, r) {
        i.logAction(this.logger, i.LOG_MICRO, "RealtimePresence.setPresence()", "received presence for " + e.length + " participants; syncChannelSerial = " + r);
        let o,
          a,
          c = this.members,
          l = this._myMembers,
          u = [],
          g = this.channel.connectionManager.connectionId;
        n && (this.members.startSync(), r && (a = r.match(/^[\w-]+:(.*)$/)) && (o = a[1]));
        for (let d of e)
          switch (d.action) {
            case "leave":
              c.remove(d) && u.push(d), d.connectionId === g && !d.isSynthesized() && l.remove(d);
              break;
            case "enter":
            case "present":
            case "update":
              c.put(d) && u.push(d), d.connectionId === g && l.put(d);
              break;
          }
        n && !o && (c.endSync(), (this.channel.syncChannelSerial = null));
        for (let d = 0; d < u.length; d++) {
          let m = u[d];
          this.subscriptions.emit(m.action, m);
        }
      }
      onAttached(e) {
        i.logAction(this.logger, i.LOG_MINOR, "RealtimePresence.onAttached()", "channel = " + this.channel.name + ", hasPresence = " + e),
          e ? this.members.startSync() : (this._synthesizeLeaves(this.members.values()), this.members.clear()),
          this._ensureMyMembersPresent();
        let n = this.pendingPresence,
          r = n.length;
        if (r) {
          this.pendingPresence = [];
          let o = [],
            a = Se.create(this.logger);
          i.logAction(this.logger, i.LOG_MICRO, "RealtimePresence.onAttached", "sending " + r + " queued presence messages");
          for (let c = 0; c < r; c++) {
            let l = n[c];
            o.push(l.presence), a.push(l.callback);
          }
          this.channel
            .sendPresence(o)
            .then(() => a())
            .catch((c) => a(c));
        }
      }
      actOnChannelState(e, n, r) {
        switch (e) {
          case "attached":
            this.onAttached(n);
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
          i.logAction(this.logger, i.LOG_MINOR, "RealtimeChannel.failPendingPresence", "channel; name = " + this.channel.name + ", err = " + w(e));
          for (let n = 0; n < this.pendingPresence.length; n++)
            try {
              this.pendingPresence[n].callback(e);
            } catch (r) {}
          this.pendingPresence = [];
        }
      }
      _clearMyMembers() {
        this._myMembers.clear();
      }
      _ensureMyMembersPresent() {
        let e = this._myMembers,
          n = this.channel.connectionManager.connectionId;
        for (let r in e.map) {
          let o = e.map[r];
          i.logAction(this.logger, i.LOG_MICRO, "RealtimePresence._ensureMyMembersPresent()", 'Auto-reentering clientId "' + o.clientId + '" into the presence set');
          let a = o.connectionId === n ? o.id : void 0;
          this._enterOrUpdateClient(a, o.clientId, o.data, "enter").catch((c) => {
            let l = new h("Presence auto re-enter failed", 91004, 400, c);
            i.logAction(this.logger, i.LOG_ERROR, "RealtimePresence._ensureMyMembersPresent()", "Presence auto re-enter failed; reason = " + w(c));
            let u = new nt(this.channel.state, this.channel.state, !0, !1, l);
            this.channel.emit("update", u);
          });
        }
      }
      _synthesizeLeaves(e) {
        let n = this.subscriptions;
        e.forEach(function (r) {
          let o = Q.fromValues({ action: "leave", connectionId: r.connectionId, clientId: r.clientId, data: r.data, encoding: r.encoding, timestamp: Date.now() });
          n.emit("leave", o);
        });
      }
      async subscribe(...e) {
        let n = Pe.processListenerArgs(e),
          r = n[0],
          o = n[1],
          a = this.channel;
        if (a.state === "failed") throw h.fromValues(a.invalidStateError());
        this.subscriptions.on(r, o), a.channelOptions.attachOnSubscribe !== !1 && (await a.attach());
      }
      unsubscribe(...e) {
        let n = Pe.processListenerArgs(e),
          r = n[0],
          o = n[1];
        this.subscriptions.off(r, o);
      }
    },
    Pr = Zn;
  var Wo = q.WebSocket;
  function Vo(s) {
    return !!s.on;
  }
  var es = class extends de {
      constructor(e, n, r) {
        super(e, n, r);
        this.shortName = Wo;
        (r.heartbeats = p.Config.useProtocolHeartbeats), (this.wsHost = r.host);
      }
      static isAvailable() {
        return !!p.Config.WebSocket;
      }
      createWebSocket(e, n) {
        return (this.uri = e + le(n)), new p.Config.WebSocket(this.uri);
      }
      toString() {
        return "WebSocketTransport; uri=" + this.uri;
      }
      connect() {
        i.logAction(this.logger, i.LOG_MINOR, "WebSocketTransport.connect()", "starting"), de.prototype.connect.call(this);
        let e = this,
          n = this.params,
          r = n.options,
          a = (r.tls ? "wss://" : "ws://") + this.wsHost + ":" + R.getPort(r) + "/";
        i.logAction(this.logger, i.LOG_MINOR, "WebSocketTransport.connect()", "uri: " + a),
          N(this.auth.getAuthParams(), function (c, l) {
            if (e.isDisposed) return;
            let u = "";
            for (let d in l) u += " " + d + ": " + l[d] + ";";
            if ((i.logAction(e.logger, i.LOG_MINOR, "WebSocketTransport.connect()", "authParams:" + u + " err: " + c), c)) {
              e.disconnect(c);
              return;
            }
            let g = n.getConnectParams(l);
            try {
              let d = (e.wsConnection = e.createWebSocket(a, g));
              (d.binaryType = p.Config.binaryType),
                (d.onopen = function () {
                  e.onWsOpen();
                }),
                (d.onclose = function (m) {
                  e.onWsClose(m);
                }),
                (d.onmessage = function (m) {
                  e.onWsData(m.data);
                }),
                (d.onerror = function (m) {
                  e.onWsError(m);
                }),
                Vo(d) &&
                  d.on("ping", function () {
                    e.onActivity();
                  });
            } catch (d) {
              i.logAction(e.logger, i.LOG_ERROR, "WebSocketTransport.connect()", "Unexpected exception creating websocket: err = " + (d.stack || d.message)), e.disconnect(d);
            }
          });
      }
      send(e) {
        let n = this.wsConnection;
        if (!n) {
          i.logAction(this.logger, i.LOG_ERROR, "WebSocketTransport.send()", "No socket connection");
          return;
        }
        try {
          n.send(lr(e, this.connectionManager.realtime._MsgPack, this.params.format));
        } catch (r) {
          let o = "Exception from ws connection when trying to send: " + w(r);
          i.logAction(this.logger, i.LOG_ERROR, "WebSocketTransport.send()", o), this.finish("disconnected", new h(o, 5e4, 500));
        }
      }
      onWsData(e) {
        i.logAction(this.logger, i.LOG_MICRO, "WebSocketTransport.onWsData()", "data received; length = " + e.length + "; type = " + typeof e);
        try {
          this.onProtocolMessage(ur(e, this.connectionManager.realtime._MsgPack, this.connectionManager.realtime._RealtimePresence, this.connectionManager.realtime._Annotations, this.connectionManager.realtime._objectsPlugin, this.format));
        } catch (n) {
          i.logAction(this.logger, i.LOG_ERROR, "WebSocketTransport.onWsData()", "Unexpected exception handing channel message: " + n.stack);
        }
      }
      onWsOpen() {
        i.logAction(this.logger, i.LOG_MINOR, "WebSocketTransport.onWsOpen()", "opened WebSocket"), this.emit("preconnect");
      }
      onWsClose(e) {
        let n, r;
        if ((typeof e == "object" ? ((r = e.code), (n = e.wasClean || r === 1e3)) : ((r = e), (n = r == 1e3)), delete this.wsConnection, n)) {
          i.logAction(this.logger, i.LOG_MINOR, "WebSocketTransport.onWsClose()", "Cleanly closed WebSocket");
          let o = new h("Websocket closed", 80003, 400);
          this.finish("disconnected", o);
        } else {
          let o = "Unclean disconnection of WebSocket ; code = " + r,
            a = new h(o, 80003, 400);
          i.logAction(this.logger, i.LOG_MINOR, "WebSocketTransport.onWsClose()", o), this.finish("disconnected", a);
        }
        this.emit("disposed");
      }
      onWsError(e) {
        i.logAction(this.logger, i.LOG_MINOR, "WebSocketTransport.onError()", "Error from WebSocket: " + e.message),
          p.Config.nextTick(() => {
            this.disconnect(Error(e.message));
          });
      }
      dispose() {
        i.logAction(this.logger, i.LOG_MINOR, "WebSocketTransport.dispose()", ""), (this.isDisposed = !0);
        let e = this.wsConnection;
        e &&
          ((e.onmessage = function () {}),
          delete this.wsConnection,
          p.Config.nextTick(() => {
            if ((i.logAction(this.logger, i.LOG_MICRO, "WebSocketTransport.dispose()", "closing websocket"), !e)) throw new Error("WebSocketTransport.dispose(): wsConnection is not defined");
            e.close();
          }));
      }
    },
    Ht = es;
  var Gt = class {
    static subscribeFilter(t, e, n) {
      let r = (o) => {
        var c, l, u, g, d, m;
        let a = {
          name: o.name,
          refTimeserial: (l = (c = o.extras) == null ? void 0 : c.ref) == null ? void 0 : l.timeserial,
          refType: (g = (u = o.extras) == null ? void 0 : u.ref) == null ? void 0 : g.type,
          isRef: !!((m = (d = o.extras) == null ? void 0 : d.ref) != null && m.timeserial),
          clientId: o.clientId,
        };
        Object.entries(e).find(([f, y]) => (y !== void 0 ? a[f] !== y : !1)) || n(o);
      };
      this.addFilteredSubscription(t, e, n, r), t.subscriptions.on(r);
    }
    static addFilteredSubscription(t, e, n, r) {
      var o;
      if ((t.filteredSubscriptions || (t.filteredSubscriptions = new Map()), t.filteredSubscriptions.has(n))) {
        let a = t.filteredSubscriptions.get(n);
        a.set(e, ((o = a == null ? void 0 : a.get(e)) == null ? void 0 : o.concat(r)) || [r]);
      } else t.filteredSubscriptions.set(n, new Map([[e, [r]]]));
    }
    static getAndDeleteFilteredSubscriptions(t, e, n) {
      if (!t.filteredSubscriptions) return [];
      if (!n && e)
        return Array.from(t.filteredSubscriptions.entries())
          .map(([a, c]) => {
            var u;
            let l = c.get(e);
            return c.delete(e), c.size === 0 && ((u = t.filteredSubscriptions) == null || u.delete(a)), l;
          })
          .reduce((a, c) => (c ? a.concat(...c) : a), []);
      if (!n || !t.filteredSubscriptions.has(n)) return [];
      let r = t.filteredSubscriptions.get(n);
      if (!e) {
        let a = Array.from(r.values()).reduce((c, l) => c.concat(...l), []);
        return t.filteredSubscriptions.delete(n), a;
      }
      let o = r.get(e);
      return r.delete(e), o || [];
    }
  };
  var J = class J extends Rr {
    constructor(t) {
      var n;
      let e = J._MsgPack;
      if (!e) throw new Error("Expected DefaultRealtime._MsgPack to have been set");
      super(
        R.objectifyOptions(
          t,
          !0,
          "Realtime",
          i.defaultLogger,
          D(E({}, Ut), {
            Crypto: (n = J.Crypto) != null ? n : void 0,
            MsgPack: e,
            RealtimePresence: { RealtimePresence: Pr, PresenceMessage: Q, WirePresenceMessage: he },
            Annotations: { Annotation: se, WireAnnotation: ne, RealtimeAnnotations: je, RestAnnotations: Re },
            WebSocketTransport: Ht,
            MessageInteractions: Gt,
          })
        )
      );
    }
    static get Crypto() {
      if (this._Crypto === null) throw new Error("Encryption not enabled; use ably.encryption.js instead");
      return this._Crypto;
    }
    static set Crypto(t) {
      this._Crypto = t;
    }
  };
  (J.Utils = O), (J.ConnectionManager = qt), (J.ProtocolMessage = hr), (J._Crypto = null), (J.Message = De), (J.PresenceMessage = He), (J.Annotation = Ge), (J._MsgPack = null), (J._Http = fe), (J._PresenceMap = ke), (J._MessageEncoding = we);
  var Ve = J;
  var ss = Uint8Array,
    ut = Uint32Array,
    rs = Math.pow,
    Cr = new ut(8),
    Ar = [],
    it = new ut(64);
  function br(s) {
    return ((s - (s | 0)) * rs(2, 32)) | 0;
  }
  var at = 2,
    ct = 0;
  for (; ct < 64; ) {
    for (ts = !0, Ft = 2; Ft <= at / 2; Ft++) at % Ft === 0 && (ts = !1);
    ts && (ct < 8 && (Cr[ct] = br(rs(at, 1 / 2))), (Ar[ct] = br(rs(at, 1 / 3))), ct++), at++;
  }
  var ts,
    Ft,
    zo = !!new ss(new ut([1]).buffer)[0];
  function ns(s) {
    return zo ? (s >>> 24) | (((s >>> 16) & 255) << 8) | ((s & 65280) << 8) | (s << 24) : s;
  }
  function ce(s, t) {
    return (s >>> t) | (s << (32 - t));
  }
  function lt(s) {
    var t = Cr.slice(),
      e = s.length,
      n = e * 8,
      r = 512 - ((n + 64) % 512) - 1 + n + 65,
      o = new ss(r / 8),
      a = new ut(o.buffer);
    o.set(s, 0), (o[e] = 128), (a[a.length - 1] = ns(n));
    for (var c, l = 0; l < r / 32; l += 16) {
      var u = t.slice();
      for (c = 0; c < 64; c++) {
        var g;
        if (c < 16) g = ns(a[l + c]);
        else {
          var d = it[c - 15],
            m = it[c - 2];
          g = it[c - 7] + it[c - 16] + (ce(d, 7) ^ ce(d, 18) ^ (d >>> 3)) + (ce(m, 17) ^ ce(m, 19) ^ (m >>> 10));
        }
        it[c] = g |= 0;
        for (var f = (ce(u[4], 6) ^ ce(u[4], 11) ^ ce(u[4], 25)) + ((u[4] & u[5]) ^ (~u[4] & u[6])) + u[7] + g + Ar[c], y = (ce(u[0], 2) ^ ce(u[0], 13) ^ ce(u[0], 22)) + ((u[0] & u[1]) ^ (u[2] & (u[0] ^ u[1]))), P = 7; P > 0; P--) u[P] = u[P - 1];
        (u[0] = (f + y) | 0), (u[4] = (u[4] + f) | 0);
      }
      for (c = 0; c < 8; c++) t[c] = (t[c] + u[c]) | 0;
    }
    return new ss(
      new ut(
        t.map(function (A) {
          return ns(A);
        })
      ).buffer
    );
  }
  function Tr(s, t) {
    if ((s.length > 64 && (s = lt(s)), s.length < 64)) {
      let c = new Uint8Array(64);
      c.set(s, 0), (s = c);
    }
    for (var e = new Uint8Array(64), n = new Uint8Array(64), r = 0; r < 64; r++) (e[r] = 54 ^ s[r]), (n[r] = 92 ^ s[r]);
    var o = new Uint8Array(t.length + 64);
    o.set(e, 0), o.set(t, 64);
    var a = new Uint8Array(64 + 32);
    return a.set(n, 0), a.set(lt(o), 64), lt(a);
  }
  var os = class {
      constructor() {
        this.base64CharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        this.hexCharSet = "0123456789abcdef";
      }
      uint8ViewToBase64(t) {
        let e = "",
          n = this.base64CharSet,
          r = t.byteLength,
          o = r % 3,
          a = r - o,
          c,
          l,
          u,
          g,
          d;
        for (let m = 0; m < a; m = m + 3) (d = (t[m] << 16) | (t[m + 1] << 8) | t[m + 2]), (c = (d & 16515072) >> 18), (l = (d & 258048) >> 12), (u = (d & 4032) >> 6), (g = d & 63), (e += n[c] + n[l] + n[u] + n[g]);
        return (
          o == 1 ? ((d = t[a]), (c = (d & 252) >> 2), (l = (d & 3) << 4), (e += n[c] + n[l] + "==")) : o == 2 && ((d = (t[a] << 8) | t[a + 1]), (c = (d & 64512) >> 10), (l = (d & 1008) >> 4), (u = (d & 15) << 2), (e += n[c] + n[l] + n[u] + "=")), e
        );
      }
      base64ToArrayBuffer(t) {
        let e = atob == null ? void 0 : atob(t),
          n = e.length,
          r = new Uint8Array(n);
        for (let o = 0; o < n; o++) {
          let a = e.charCodeAt(o);
          r[o] = a;
        }
        return this.toArrayBuffer(r);
      }
      isBuffer(t) {
        return t instanceof ArrayBuffer || ArrayBuffer.isView(t);
      }
      toBuffer(t) {
        if (!ArrayBuffer) throw new Error("Can't convert to Buffer: browser does not support the necessary types");
        if (t instanceof ArrayBuffer) return new Uint8Array(t);
        if (ArrayBuffer.isView(t)) return new Uint8Array(this.toArrayBuffer(t));
        throw new Error("BufferUtils.toBuffer expected an ArrayBuffer or a view onto one");
      }
      toArrayBuffer(t) {
        if (!ArrayBuffer) throw new Error("Can't convert to ArrayBuffer: browser does not support the necessary types");
        if (t instanceof ArrayBuffer) return t;
        if (ArrayBuffer.isView(t)) return t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
        throw new Error("BufferUtils.toArrayBuffer expected an ArrayBuffer or a view onto one");
      }
      base64Encode(t) {
        return this.uint8ViewToBase64(this.toBuffer(t));
      }
      base64UrlEncode(t) {
        return this.base64Encode(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
      }
      base64Decode(t) {
        if (ArrayBuffer && p.Config.atob) return this.base64ToArrayBuffer(t);
        throw new Error("Expected ArrayBuffer to exist and Platform.Config.atob to be configured");
      }
      hexEncode(t) {
        return this.toBuffer(t).reduce((n, r) => n + r.toString(16).padStart(2, "0"), "");
      }
      hexDecode(t) {
        if (t.length % 2 !== 0) throw new Error("Can't create a byte array from a hex string of odd length");
        let e = new Uint8Array(t.length / 2);
        for (let n = 0; n < e.length; n++) e[n] = parseInt(t.slice(2 * n, 2 * (n + 1)), 16);
        return this.toArrayBuffer(e);
      }
      utf8Encode(t) {
        if (p.Config.TextEncoder) {
          let e = new p.Config.TextEncoder().encode(t);
          return this.toArrayBuffer(e);
        } else throw new Error("Expected TextEncoder to be configured");
      }
      utf8Decode(t) {
        if (!this.isBuffer(t)) throw new Error("Expected input of utf8decode to be an arraybuffer or typed array");
        if (TextDecoder) return new TextDecoder().decode(t);
        throw new Error("Expected TextDecoder to be configured");
      }
      areBuffersEqual(t, e) {
        if (!t || !e) return !1;
        let n = this.toArrayBuffer(t),
          r = this.toArrayBuffer(e);
        if (n.byteLength != r.byteLength) return !1;
        let o = new Uint8Array(n),
          a = new Uint8Array(r);
        for (var c = 0; c < o.length; c++) if (o[c] != a[c]) return !1;
        return !0;
      }
      byteLength(t) {
        return t instanceof ArrayBuffer || ArrayBuffer.isView(t) ? t.byteLength : -1;
      }
      arrayBufferViewToBuffer(t) {
        return this.toArrayBuffer(t);
      }
      concat(t) {
        let e = t.reduce((o, a) => o + a.byteLength, 0),
          n = new Uint8Array(e),
          r = 0;
        for (let o of t) {
          let a = this.toBuffer(o);
          n.set(a, r), (r += a.byteLength);
        }
        return n.buffer;
      }
      sha256(t) {
        let e = lt(this.toBuffer(t));
        return this.toArrayBuffer(e);
      }
      hmacSha256(t, e) {
        let n = Tr(this.toBuffer(e), this.toBuffer(t));
        return this.toArrayBuffer(n);
      }
    },
    is = new os();
  var Ir = function (s, t) {
    var e = "aes",
      n = 256,
      r = "cbc",
      o = 16;
    function a(m) {
      if (m.algorithm === "aes" && m.mode === "cbc") {
        if (m.keyLength === 128 || m.keyLength === 256) return;
        throw new Error("Unsupported key length " + m.keyLength + " for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)");
      }
    }
    function c(m) {
      return m.replace("_", "/").replace("-", "+");
    }
    function l(m) {
      return m instanceof u;
    }
    class u {
      constructor(f, y, P, A) {
        (this.algorithm = f), (this.keyLength = y), (this.mode = P), (this.key = A);
      }
    }
    class g {
      static getDefaultParams(f) {
        var y;
        if (!f.key) throw new Error("Crypto.getDefaultParams: a key is required");
        typeof f.key == "string" ? (y = t.toArrayBuffer(t.base64Decode(c(f.key)))) : f.key instanceof ArrayBuffer ? (y = f.key) : (y = t.toArrayBuffer(f.key));
        var P = f.algorithm || e,
          A = y.byteLength * 8,
          T = f.mode || r,
          k = new u(P, A, T, y);
        if (f.keyLength && f.keyLength !== k.keyLength) throw new Error("Crypto.getDefaultParams: a keyLength of " + f.keyLength + " was specified, but the key actually has length " + k.keyLength);
        return a(k), k;
      }
      static async generateRandomKey(f) {
        try {
          return s.getRandomArrayBuffer((f || n) / 8);
        } catch (y) {
          throw new h("Failed to generate random key: " + y.message, 400, 5e4, y);
        }
      }
      static getCipher(f, y) {
        var A;
        var P = l(f) ? f : this.getDefaultParams(f);
        return { cipherParams: P, cipher: new d(P, (A = f.iv) != null ? A : null, y) };
      }
    }
    g.CipherParams = u;
    class d {
      constructor(f, y, P) {
        this.logger = P;
        if (!crypto.subtle)
          throw isSecureContext
            ? new Error("Crypto operations are not possible since the browser\u2019s SubtleCrypto class is unavailable (reason unknown).")
            : new Error("Crypto operations are is not possible since the current environment is a non-secure context and hence the browser\u2019s SubtleCrypto class is not available.");
        (this.algorithm = f.algorithm + "-" + String(f.keyLength) + "-" + f.mode), (this.webCryptoAlgorithm = f.algorithm + "-" + f.mode), (this.key = t.toArrayBuffer(f.key)), (this.iv = y ? t.toArrayBuffer(y) : null);
      }
      concat(f, y) {
        let P = new ArrayBuffer(f.byteLength + y.byteLength),
          A = new DataView(P),
          T = new DataView(t.toArrayBuffer(f));
        for (let U = 0; U < T.byteLength; U++) A.setInt8(U, T.getInt8(U));
        let k = new DataView(t.toArrayBuffer(y));
        for (let U = 0; U < k.byteLength; U++) A.setInt8(T.byteLength + U, k.getInt8(U));
        return P;
      }
      async encrypt(f) {
        i.logAction(this.logger, i.LOG_MICRO, "CBCCipher.encrypt()", "");
        let y = await this.getIv(),
          P = await crypto.subtle.importKey("raw", this.key, this.webCryptoAlgorithm, !1, ["encrypt"]),
          A = await crypto.subtle.encrypt({ name: this.webCryptoAlgorithm, iv: y }, P, f);
        return this.concat(y, A);
      }
      async decrypt(f) {
        i.logAction(this.logger, i.LOG_MICRO, "CBCCipher.decrypt()", "");
        let y = t.toArrayBuffer(f),
          P = y.slice(0, o),
          A = y.slice(o),
          T = await crypto.subtle.importKey("raw", this.key, this.webCryptoAlgorithm, !1, ["decrypt"]);
        return crypto.subtle.decrypt({ name: this.webCryptoAlgorithm, iv: P }, T, A);
      }
      async getIv() {
        if (this.iv) {
          var f = this.iv;
          return (this.iv = null), f;
        }
        let y = await s.getRandomArrayBuffer(o);
        return t.toArrayBuffer(y);
      }
    }
    return g;
  };
  var wr = ((r) => ((r[(r.REQ_SEND = 0)] = "REQ_SEND"), (r[(r.REQ_RECV = 1)] = "REQ_RECV"), (r[(r.REQ_RECV_POLL = 2)] = "REQ_RECV_POLL"), (r[(r.REQ_RECV_STREAM = 3)] = "REQ_RECV_STREAM"), r))(wr || {}),
    Z = wr;
  function Or() {
    return new h("No HTTP request plugin provided. Provide at least one of the FetchRequest or XHRRequest plugins.", 400, 4e4);
  }
  var ht,
    kr =
      ((ht = class {
        constructor(s) {
          this.checksInProgress = null;
          this.checkConnectivity = void 0;
          this.supportsAuthHeaders = !1;
          this.supportsLinkHeaders = !1;
          var l;
          this.client = s != null ? s : null;
          let t = (s == null ? void 0 : s.options.connectivityCheckUrl) || R.connectivityCheckUrl,
            e = (l = s == null ? void 0 : s.options.connectivityCheckParams) != null ? l : null,
            n = !(s != null && s.options.connectivityCheckUrl),
            r = E(E({}, kr.bundledRequestImplementations), s == null ? void 0 : s._additionalHTTPRequestImplementations),
            o = r.XHRRequest,
            a = r.FetchRequest,
            c = !!(o || a);
          if (!c) throw Or();
          p.Config.xhrSupported && o
            ? ((this.supportsAuthHeaders = !0),
              (this.Request = async function (u, g, d, m, f) {
                return new Promise((y) => {
                  var A;
                  let P = o.createRequest(g, d, m, f, Z.REQ_SEND, (A = s && s.options.timeouts) != null ? A : null, this.logger, u);
                  P.once("complete", (T, k, U, Me, I) => y({ error: T, body: k, headers: U, unpacked: Me, statusCode: I })), P.exec();
                });
              }),
              s != null && s.options.disableConnectivityCheck
                ? (this.checkConnectivity = async function () {
                    return !0;
                  })
                : (this.checkConnectivity = async function () {
                    var d;
                    i.logAction(this.logger, i.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Sending; " + t);
                    let u = await this.doUri(x.Get, t, null, null, e),
                      g = !1;
                    return n ? (g = !u.error && ((d = u.body) == null ? void 0 : d.replace(/\n/, "")) == "yes") : (g = !u.error && qs(u.statusCode)), i.logAction(this.logger, i.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Result: " + g), g;
                  }))
            : p.Config.fetchSupported && a
            ? ((this.supportsAuthHeaders = !0),
              (this.Request = async (u, g, d, m, f) => a(u, s != null ? s : null, g, d, m, f)),
              s != null && s.options.disableConnectivityCheck
                ? (this.checkConnectivity = async function () {
                    return !0;
                  })
                : (this.checkConnectivity = async function () {
                    var d;
                    i.logAction(this.logger, i.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Sending; " + t);
                    let u = await this.doUri(x.Get, t, null, null, null),
                      g = !u.error && ((d = u.body) == null ? void 0 : d.replace(/\n/, "")) == "yes";
                    return i.logAction(this.logger, i.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Result: " + g), g;
                  }))
            : (this.Request = async () => ({ error: c ? new v("no supported HTTP transports available", null, 400) : Or() }));
        }
        get logger() {
          var s, t;
          return (t = (s = this.client) == null ? void 0 : s.logger) != null ? t : i.defaultLogger;
        }
        async doUri(s, t, e, n, r) {
          return this.Request ? this.Request(s, t, e, r, n) : { error: new v("Request invoked before assigned to", null, 500) };
        }
        shouldFallback(s) {
          let t = s.statusCode;
          return (t === 408 && !s.code) || (t === 400 && !s.code) || (t >= 500 && t <= 504);
        }
      }),
      (ht.methods = [x.Get, x.Delete, x.Post, x.Put, x.Patch]),
      (ht.methodsWithoutBody = [x.Get, x.Delete]),
      (ht.methodsWithBody = [x.Post, x.Put, x.Patch]),
      ht),
    as = kr;
  var ze = "ablyjs-storage-test",
    Je = typeof global != "undefined" ? global : typeof window != "undefined" ? window : self,
    cs = class {
      constructor() {
        try {
          Je.sessionStorage.setItem(ze, ze), Je.sessionStorage.removeItem(ze), (this.sessionSupported = !0);
        } catch (t) {
          this.sessionSupported = !1;
        }
        try {
          Je.localStorage.setItem(ze, ze), Je.localStorage.removeItem(ze), (this.localSupported = !0);
        } catch (t) {
          this.localSupported = !1;
        }
      }
      get(t) {
        return this._get(t, !1);
      }
      getSession(t) {
        return this._get(t, !0);
      }
      remove(t) {
        return this._remove(t, !1);
      }
      removeSession(t) {
        return this._remove(t, !0);
      }
      set(t, e, n) {
        return this._set(t, e, n, !1);
      }
      setSession(t, e, n) {
        return this._set(t, e, n, !0);
      }
      _set(t, e, n, r) {
        let o = { value: e };
        return n && (o.expires = Date.now() + n), this.storageInterface(r).setItem(t, JSON.stringify(o));
      }
      _get(t, e) {
        if (e && !this.sessionSupported) throw new Error("Session Storage not supported");
        if (!e && !this.localSupported) throw new Error("Local Storage not supported");
        let n = this.storageInterface(e).getItem(t);
        if (!n) return null;
        let r = JSON.parse(n);
        return r.expires && r.expires < Date.now() ? (this.storageInterface(e).removeItem(t), null) : r.value;
      }
      _remove(t, e) {
        return this.storageInterface(e).removeItem(t);
      }
      storageInterface(t) {
        return t ? Je.sessionStorage : Je.localStorage;
      }
    },
    jt = new cs();
  var L = Ye(),
    Jo = typeof EdgeRuntime == "string";
  typeof Window == "undefined" && typeof WorkerGlobalScope == "undefined" && !Jo && console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm");
  function Ko() {
    let s = L.location;
    return !L.WebSocket || !s || !s.origin || s.origin.indexOf("http") > -1;
  }
  function Qo() {
    return typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope;
  }
  var $o = L.navigator && L.navigator.userAgent.toString(),
    Xo = L.location && L.location.href,
    Yo = {
      agent: "browser",
      logTimestamps: !0,
      userAgent: $o,
      currentUrl: Xo,
      binaryType: "arraybuffer",
      WebSocket: L.WebSocket,
      fetchSupported: !!L.fetch,
      xhrSupported: L.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
      allowComet: Ko(),
      useProtocolHeartbeats: !0,
      supportsBinary: !!L.TextDecoder,
      preferBinary: !1,
      ArrayBuffer: L.ArrayBuffer,
      atob: L.atob,
      nextTick:
        typeof L.setImmediate != "undefined"
          ? L.setImmediate.bind(L)
          : function (s) {
              setTimeout(s, 0);
            },
      addEventListener: L.addEventListener,
      inspect: JSON.stringify,
      stringByteSize: function (s) {
        return (L.TextDecoder && new L.TextEncoder().encode(s).length) || s.length;
      },
      TextEncoder: L.TextEncoder,
      TextDecoder: L.TextDecoder,
      getRandomArrayBuffer: async function (s) {
        let t = new Uint8Array(s);
        return L.crypto.getRandomValues(t), t.buffer;
      },
      isWebworker: Qo(),
      push: { platform: "browser", formFactor: "desktop", storage: jt },
    },
    ls = Yo;
  function Zo(s) {
    let t = [80015, 80017, 80030];
    return s.code ? ($.isTokenErr(s) ? !1 : t.includes(s.code) ? !0 : s.code >= 4e4 && s.code < 5e4) : !1;
  }
  function us(s) {
    return Zo(s) ? [G({ action: b.ERROR, error: s })] : [G({ action: b.DISCONNECTED, error: s })];
  }
  var hs = class extends de {
      constructor(e, n, r) {
        super(e, n, r, !0);
        this.onAuthUpdated = (e) => {
          this.authParams = { access_token: e.token };
        };
        (this.stream = "stream" in r ? r.stream : !0), (this.sendRequest = null), (this.recvRequest = null), (this.pendingCallback = null), (this.pendingItems = null);
      }
      connect() {
        i.logAction(this.logger, i.LOG_MINOR, "CometTransport.connect()", "starting"), de.prototype.connect.call(this);
        let e = this.params,
          n = e.options,
          r = R.getHost(n, e.host),
          o = R.getPort(n),
          a = n.tls ? "https://" : "http://";
        this.baseUri = a + r + ":" + o + "/comet/";
        let c = this.baseUri + "connect";
        i.logAction(this.logger, i.LOG_MINOR, "CometTransport.connect()", "uri: " + c),
          N(this.auth.getAuthParams(), (l, u) => {
            if (l) {
              this.disconnect(l);
              return;
            }
            if (this.isDisposed) return;
            this.authParams = u;
            let g = this.params.getConnectParams(u);
            "stream" in g && (this.stream = g.stream), i.logAction(this.logger, i.LOG_MINOR, "CometTransport.connect()", "connectParams:" + le(g));
            let d = !1,
              m = (this.recvRequest = this.createRequest(c, null, g, null, this.stream ? Z.REQ_RECV_STREAM : Z.REQ_RECV));
            m.on("data", (f) => {
              this.recvRequest && (d || ((d = !0), this.emit("preconnect")), this.onData(f));
            }),
              m.on("complete", (f) => {
                if ((this.recvRequest || (f = f || new h("Request cancelled", 80003, 400)), (this.recvRequest = null), !d && !f && ((d = !0), this.emit("preconnect")), this.onActivity(), f)) {
                  f.code ? this.onData(us(f)) : this.disconnect(f);
                  return;
                }
                p.Config.nextTick(() => {
                  this.recv();
                });
              }),
              m.exec();
          });
      }
      requestClose() {
        i.logAction(this.logger, i.LOG_MINOR, "CometTransport.requestClose()"), this._requestCloseOrDisconnect(!0);
      }
      requestDisconnect() {
        i.logAction(this.logger, i.LOG_MINOR, "CometTransport.requestDisconnect()"), this._requestCloseOrDisconnect(!1);
      }
      _requestCloseOrDisconnect(e) {
        let n = e ? this.closeUri : this.disconnectUri;
        if (n) {
          let r = this.createRequest(n, null, this.authParams, null, Z.REQ_SEND);
          r.on("complete", (o) => {
            o && (i.logAction(this.logger, i.LOG_ERROR, "CometTransport.request" + (e ? "Close()" : "Disconnect()"), "request returned err = " + w(o)), this.finish("disconnected", o));
          }),
            r.exec();
        }
      }
      dispose() {
        i.logAction(this.logger, i.LOG_MINOR, "CometTransport.dispose()", ""),
          this.isDisposed ||
            ((this.isDisposed = !0),
            this.recvRequest && (i.logAction(this.logger, i.LOG_MINOR, "CometTransport.dispose()", "aborting recv request"), this.recvRequest.abort(), (this.recvRequest = null)),
            this.finish("disconnected", ae.disconnected()),
            p.Config.nextTick(() => {
              this.emit("disposed");
            }));
      }
      onConnect(e) {
        var o;
        if (this.isDisposed) return;
        let n = (o = e.connectionDetails) == null ? void 0 : o.connectionKey;
        de.prototype.onConnect.call(this, e);
        let r = this.baseUri + n;
        i.logAction(this.logger, i.LOG_MICRO, "CometTransport.onConnect()", "baseUri = " + r), (this.sendUri = r + "/send"), (this.recvUri = r + "/recv"), (this.closeUri = r + "/close"), (this.disconnectUri = r + "/disconnect");
      }
      send(e) {
        if (this.sendRequest) {
          (this.pendingItems = this.pendingItems || []), this.pendingItems.push(e);
          return;
        }
        let n = this.pendingItems || [];
        n.push(e), (this.pendingItems = null), this.sendItems(n);
      }
      sendAnyPending() {
        let e = this.pendingItems;
        e && ((this.pendingItems = null), this.sendItems(e));
      }
      sendItems(e) {
        let n = (this.sendRequest = this.createRequest(this.sendUri, null, this.authParams, this.encodeRequest(e), Z.REQ_SEND));
        n.on("complete", (r, o) => {
          if ((r && i.logAction(this.logger, i.LOG_ERROR, "CometTransport.sendItems()", "on complete: err = " + w(r)), (this.sendRequest = null), r)) {
            r.code ? this.onData(us(r)) : this.disconnect(r);
            return;
          }
          o && this.onData(o),
            this.pendingItems &&
              p.Config.nextTick(() => {
                this.sendRequest || this.sendAnyPending();
              });
        }),
          n.exec();
      }
      recv() {
        if (this.recvRequest || !this.isConnected) return;
        let e = (this.recvRequest = this.createRequest(this.recvUri, null, this.authParams, null, this.stream ? Z.REQ_RECV_STREAM : Z.REQ_RECV_POLL));
        e.on("data", (n) => {
          this.onData(n);
        }),
          e.on("complete", (n) => {
            if (((this.recvRequest = null), this.onActivity(), n)) {
              n.code ? this.onData(us(n)) : this.disconnect(n);
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
          let n = this.decodeResponse(e);
          if (n && n.length) for (let r = 0; r < n.length; r++) this.onProtocolMessage(Lt(n[r], this.connectionManager.realtime._RealtimePresence, this.connectionManager.realtime._Annotations, this.connectionManager.realtime._objectsPlugin));
        } catch (n) {
          i.logAction(this.logger, i.LOG_ERROR, "CometTransport.onData()", "Unexpected exception handing channel event: " + n.stack);
        }
      }
      encodeRequest(e) {
        return JSON.stringify(e);
      }
      decodeResponse(e) {
        return typeof e == "string" ? JSON.parse(e) : e;
      }
    },
    Mr = hs;
  function ei(s, t) {
    return $e(pe(t)).includes("x-ably-errorcode");
  }
  function ti(s, t) {
    if (ei(s, t)) return s.error && h.fromValues(s.error);
  }
  var ni = function () {},
    si = 0,
    Er = {};
  function ri(s, t) {
    return s.getResponseHeader && s.getResponseHeader(t);
  }
  function oi(s) {
    return s.getResponseHeader && (s.getResponseHeader("transfer-encoding") || !s.getResponseHeader("content-length"));
  }
  function ii(s) {
    let t = s.getAllResponseHeaders().trim().split(`\r
`),
      e = {};
    for (let n = 0; n < t.length; n++) {
      let r = t[n].split(":").map((o) => o.trim());
      e[r[0].toLowerCase()] = r[1];
    }
    return e;
  }
  var ds = class s extends M {
      constructor(e, n, r, o, a, c, l, u) {
        super(l);
        (r = r || {}),
          (r.rnd = Te()),
          (this.uri = e + le(r)),
          (this.headers = n || {}),
          (this.body = o),
          (this.method = u ? u.toUpperCase() : z(o) ? "GET" : "POST"),
          (this.requestMode = a),
          (this.timeouts = c),
          (this.timedOut = !1),
          (this.requestComplete = !1),
          (this.id = String(++si)),
          (Er[this.id] = this);
      }
      static createRequest(e, n, r, o, a, c, l, u) {
        let g = c || R.TIMEOUTS;
        return new s(e, n, oe(r), o, a, g, l, u);
      }
      complete(e, n, r, o, a) {
        this.requestComplete || ((this.requestComplete = !0), !e && n && this.emit("data", n), this.emit("complete", e, n, r, o, a), this.dispose());
      }
      abort() {
        this.dispose();
      }
      exec() {
        let e = this.headers,
          n = this.requestMode == Z.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout,
          r = (this.timer = setTimeout(() => {
            (this.timedOut = !0), a.abort();
          }, n)),
          o = this.method,
          a = (this.xhr = new XMLHttpRequest()),
          c = e.accept,
          l = this.body,
          u = "text";
        c ? c.indexOf("application/x-msgpack") === 0 && (u = "arraybuffer") : (e.accept = "application/json"),
          l && (e["content-type"] || (e["content-type"] = "application/json")).indexOf("application/json") > -1 && typeof l != "string" && (l = JSON.stringify(l)),
          a.open(o, this.uri, !0),
          (a.responseType = u),
          "authorization" in e && (a.withCredentials = !0);
        for (let I in e) a.setRequestHeader(I, e[I]);
        let g = (I, X, F, Ke) => {
          var Rs;
          let Ce = X + " (event type: " + I.type + ")";
          (Rs = this == null ? void 0 : this.xhr) != null && Rs.statusText && (Ce += ", current statusText is " + this.xhr.statusText), i.logAction(this.logger, i.LOG_ERROR, "Request.on" + I.type + "()", Ce), this.complete(new v(Ce, F, Ke));
        };
        (a.onerror = function (I) {
          g(I, "XHR error occurred", null, 400);
        }),
          (a.onabort = (I) => {
            this.timedOut ? g(I, "Request aborted due to request timeout expiring", null, 408) : g(I, "Request cancelled", null, 400);
          }),
          (a.ontimeout = function (I) {
            g(I, "Request timed out", null, 408);
          });
        let d,
          m,
          f,
          y = 0,
          P = !1,
          A = () => {
            if ((clearTimeout(r), (f = m < 400), m == 204)) {
              this.complete(null, null, null, null, m);
              return;
            }
            d = this.requestMode == Z.REQ_RECV_STREAM && f && oi(a);
          },
          T = () => {
            let I;
            try {
              let F = ri(a, "content-type");
              if (F ? F.indexOf("application/json") >= 0 : a.responseType == "text") {
                let Ce = a.responseType === "arraybuffer" ? p.BufferUtils.utf8Decode(a.response) : String(a.responseText);
                Ce.length ? (I = JSON.parse(Ce)) : (I = Ce), (P = !0);
              } else I = a.response;
              I.response !== void 0 ? ((m = I.statusCode), (f = m < 400), (e = I.headers), (I = I.response)) : (e = ii(a));
            } catch (F) {
              this.complete(new v("Malformed response body from server: " + F.message, null, 400));
              return;
            }
            if (f || Array.isArray(I)) {
              this.complete(null, I, e, P, m);
              return;
            }
            let X = ti(I, e);
            X || (X = new v("Error response received from server: " + m + " body was: " + p.Config.inspect(I), null, m)), this.complete(X, I, e, P, m);
          };
        function k() {
          let I = a.responseText,
            X = I.length - 1,
            F,
            Ke;
          for (
            ;
            y < X &&
            (F = I.indexOf(
              `
`,
              y
            )) > -1;

          )
            (Ke = I.slice(y, F)), (y = F + 1), U(Ke);
        }
        let U = (I) => {
            try {
              I = JSON.parse(I);
            } catch (X) {
              this.complete(new v("Malformed response body from server: " + X.message, null, 400));
              return;
            }
            this.emit("data", I);
          },
          Me = () => {
            k(),
              (this.streamComplete = !0),
              p.Config.nextTick(() => {
                this.complete();
              });
          };
        (a.onreadystatechange = function () {
          let I = a.readyState;
          I < 3 || (a.status !== 0 && (m === void 0 && ((m = a.status), A()), I == 3 && d ? k() : I == 4 && (d ? Me() : T())));
        }),
          a.send(l);
      }
      dispose() {
        let e = this.xhr;
        if (e) {
          (e.onreadystatechange = e.onerror = e.onabort = e.ontimeout = ni), (this.xhr = null);
          let n = this.timer;
          n && (clearTimeout(n), (this.timer = null)), this.requestComplete || e.abort();
        }
        delete Er[this.id];
      }
    },
    Wt = ds;
  var vr = q.XhrPolling,
    ps = class extends Mr {
      constructor(e, n, r) {
        super(e, n, r);
        this.shortName = vr;
        (r.stream = !1), (this.shortName = vr);
      }
      static isAvailable() {
        return !!(p.Config.xhrSupported && p.Config.allowComet);
      }
      toString() {
        return "XHRPollingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected;
      }
      createRequest(e, n, r, o, a) {
        return Wt.createRequest(e, n, r, o, a, this.timeouts, this.logger);
      }
    },
    Sr = ps;
  var ai = ["xhr_polling"],
    ci = { order: ai, bundledImplementations: { web_socket: Ht, xhr_polling: Sr } },
    xr = ci;
  var li = { connectivityCheckUrl: "https://internet-up.ably-realtime.com/is-the-internet-up.txt", wsConnectivityCheckUrl: "wss://ws-up.ably-realtime.com", defaultTransports: [q.XhrPolling, q.WebSocket] },
    Ur = li;
  function ui(s) {
    if (s === void 0) return "undefined";
    let t, e;
    if ((s instanceof ArrayBuffer ? ((e = "ArrayBuffer"), (t = new DataView(s))) : s instanceof DataView && ((e = "DataView"), (t = s)), !t)) return JSON.stringify(s);
    let n = [];
    for (let r = 0; r < s.byteLength; r++) {
      if (r > 20) {
        n.push("...");
        break;
      }
      let o = t.getUint8(r).toString(16);
      o.length === 1 && (o = "0" + o), n.push(o);
    }
    return "<" + e + " " + n.join(" ") + ">";
  }
  function dt(s, t, e) {
    for (let n = 0, r = e.length; n < r; n++) {
      let o = e.charCodeAt(n);
      if (o < 128) {
        s.setUint8(t++, ((o >>> 0) & 127) | 0);
        continue;
      }
      if (o < 2048) {
        s.setUint8(t++, ((o >>> 6) & 31) | 192), s.setUint8(t++, ((o >>> 0) & 63) | 128);
        continue;
      }
      if (o < 65536) {
        s.setUint8(t++, ((o >>> 12) & 15) | 224), s.setUint8(t++, ((o >>> 6) & 63) | 128), s.setUint8(t++, ((o >>> 0) & 63) | 128);
        continue;
      }
      if (o < 1114112) {
        s.setUint8(t++, ((o >>> 18) & 7) | 240), s.setUint8(t++, ((o >>> 12) & 63) | 128), s.setUint8(t++, ((o >>> 6) & 63) | 128), s.setUint8(t++, ((o >>> 0) & 63) | 128);
        continue;
      }
      throw new Error("bad codepoint " + o);
    }
  }
  function Br(s, t, e) {
    let n = "";
    for (let r = t, o = t + e; r < o; r++) {
      let a = s.getUint8(r);
      if (!(a & 128)) {
        n += String.fromCharCode(a);
        continue;
      }
      if ((a & 224) === 192) {
        n += String.fromCharCode(((a & 15) << 6) | (s.getUint8(++r) & 63));
        continue;
      }
      if ((a & 240) === 224) {
        n += String.fromCharCode(((a & 15) << 12) | ((s.getUint8(++r) & 63) << 6) | ((s.getUint8(++r) & 63) << 0));
        continue;
      }
      if ((a & 248) === 240) {
        n += String.fromCharCode(((a & 7) << 18) | ((s.getUint8(++r) & 63) << 12) | ((s.getUint8(++r) & 63) << 6) | ((s.getUint8(++r) & 63) << 0));
        continue;
      }
      throw new Error("Invalid byte " + a.toString(16));
    }
    return n;
  }
  function fs(s) {
    let t = 0;
    for (let e = 0, n = s.length; e < n; e++) {
      let r = s.charCodeAt(e);
      if (r < 128) {
        t += 1;
        continue;
      }
      if (r < 2048) {
        t += 2;
        continue;
      }
      if (r < 65536) {
        t += 3;
        continue;
      }
      if (r < 1114112) {
        t += 4;
        continue;
      }
      throw new Error("bad codepoint " + r);
    }
    return t;
  }
  function hi(s, t) {
    let e = gt(s, t);
    if (e === 0) return;
    let n = new ArrayBuffer(e),
      r = new DataView(n);
    return pt(s, r, 0, t), n;
  }
  var ms = 65536 * 65536,
    _r = 1 / ms;
  function di(s, t) {
    return (t = t || 0), s.getInt32(t) * ms + s.getUint32(t + 4);
  }
  function pi(s, t) {
    return (t = t || 0), s.getUint32(t) * ms + s.getUint32(t + 4);
  }
  function gi(s, t, e) {
    e < 9223372036854776e3 ? (s.setInt32(t, Math.floor(e * _r)), s.setInt32(t + 4, e & -1)) : (s.setUint32(t, 2147483647), s.setUint32(t + 4, 2147483647));
  }
  function fi(s, t, e) {
    e < 18446744073709552e3 ? (s.setUint32(t, Math.floor(e * _r)), s.setInt32(t + 4, e & -1)) : (s.setUint32(t, 4294967295), s.setUint32(t + 4, 4294967295));
  }
  var gs = class {
    constructor(t, e) {
      this.map = (t) => {
        let e = {};
        for (let n = 0; n < t; n++) {
          let r = this.parse();
          e[r] = this.parse();
        }
        return e;
      };
      this.bin = (t) => {
        let e = new ArrayBuffer(t);
        return new Uint8Array(e).set(new Uint8Array(this.view.buffer, this.offset, t), 0), (this.offset += t), e;
      };
      this.buf = this.bin;
      this.str = (t) => {
        let e = Br(this.view, this.offset, t);
        return (this.offset += t), e;
      };
      this.array = (t) => {
        let e = new Array(t);
        for (let n = 0; n < t; n++) e[n] = this.parse();
        return e;
      };
      this.ext = (t) => ((this.offset += t), { type: this.view.getInt8(this.offset), data: this.buf(t) });
      this.parse = () => {
        let t = this.view.getUint8(this.offset),
          e,
          n;
        if (!(t & 128)) return this.offset++, t;
        if ((t & 240) === 128) return (n = t & 15), this.offset++, this.map(n);
        if ((t & 240) === 144) return (n = t & 15), this.offset++, this.array(n);
        if ((t & 224) === 160) return (n = t & 31), this.offset++, this.str(n);
        if ((t & 224) === 224) return (e = this.view.getInt8(this.offset)), this.offset++, e;
        switch (t) {
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
            return (n = this.view.getUint8(this.offset + 1)), (this.offset += 2), this.bin(n);
          case 197:
            return (n = this.view.getUint16(this.offset + 1)), (this.offset += 3), this.bin(n);
          case 198:
            return (n = this.view.getUint32(this.offset + 1)), (this.offset += 5), this.bin(n);
          case 199:
            return (n = this.view.getUint8(this.offset + 1)), (this.offset += 2), this.ext(n);
          case 200:
            return (n = this.view.getUint16(this.offset + 1)), (this.offset += 3), this.ext(n);
          case 201:
            return (n = this.view.getUint32(this.offset + 1)), (this.offset += 5), this.ext(n);
          case 202:
            return (e = this.view.getFloat32(this.offset + 1)), (this.offset += 5), e;
          case 203:
            return (e = this.view.getFloat64(this.offset + 1)), (this.offset += 9), e;
          case 204:
            return (e = this.view.getUint8(this.offset + 1)), (this.offset += 2), e;
          case 205:
            return (e = this.view.getUint16(this.offset + 1)), (this.offset += 3), e;
          case 206:
            return (e = this.view.getUint32(this.offset + 1)), (this.offset += 5), e;
          case 207:
            return (e = pi(this.view, this.offset + 1)), (this.offset += 9), e;
          case 208:
            return (e = this.view.getInt8(this.offset + 1)), (this.offset += 2), e;
          case 209:
            return (e = this.view.getInt16(this.offset + 1)), (this.offset += 3), e;
          case 210:
            return (e = this.view.getInt32(this.offset + 1)), (this.offset += 5), e;
          case 211:
            return (e = di(this.view, this.offset + 1)), (this.offset += 9), e;
          case 212:
            return (n = 1), this.offset++, this.ext(n);
          case 213:
            return (n = 2), this.offset++, this.ext(n);
          case 214:
            return (n = 4), this.offset++, this.ext(n);
          case 215:
            return (n = 8), this.offset++, this.ext(n);
          case 216:
            return (n = 16), this.offset++, this.ext(n);
          case 217:
            return (n = this.view.getUint8(this.offset + 1)), (this.offset += 2), this.str(n);
          case 218:
            return (n = this.view.getUint16(this.offset + 1)), (this.offset += 3), this.str(n);
          case 219:
            return (n = this.view.getUint32(this.offset + 1)), (this.offset += 5), this.str(n);
          case 220:
            return (n = this.view.getUint16(this.offset + 1)), (this.offset += 3), this.array(n);
          case 221:
            return (n = this.view.getUint32(this.offset + 1)), (this.offset += 5), this.array(n);
          case 222:
            return (n = this.view.getUint16(this.offset + 1)), (this.offset += 3), this.map(n);
          case 223:
            return (n = this.view.getUint32(this.offset + 1)), (this.offset += 5), this.map(n);
        }
        throw new Error("Unknown type 0x" + t.toString(16));
      };
      (this.offset = e || 0), (this.view = t);
    }
  };
  function mi(s) {
    let t = new DataView(s),
      e = new gs(t),
      n = e.parse();
    if (e.offset !== s.byteLength) throw new Error(s.byteLength - e.offset + " trailing bytes");
    return n;
  }
  function Lr(s, t) {
    return Object.keys(s).filter(function (e) {
      let n = s[e],
        r = typeof n;
      return (!t || n != null) && (r !== "function" || !!n.toJSON);
    });
  }
  function pt(s, t, e, n) {
    let r = typeof s;
    if (typeof s == "string") {
      let o = fs(s);
      if (o < 32) return t.setUint8(e, o | 160), dt(t, e + 1, s), 1 + o;
      if (o < 256) return t.setUint8(e, 217), t.setUint8(e + 1, o), dt(t, e + 2, s), 2 + o;
      if (o < 65536) return t.setUint8(e, 218), t.setUint16(e + 1, o), dt(t, e + 3, s), 3 + o;
      if (o < 4294967296) return t.setUint8(e, 219), t.setUint32(e + 1, o), dt(t, e + 5, s), 5 + o;
    }
    if ((ArrayBuffer.isView && ArrayBuffer.isView(s) && (s = s.buffer), s instanceof ArrayBuffer)) {
      let o = s.byteLength;
      if (o < 256) return t.setUint8(e, 196), t.setUint8(e + 1, o), new Uint8Array(t.buffer).set(new Uint8Array(s), e + 2), 2 + o;
      if (o < 65536) return t.setUint8(e, 197), t.setUint16(e + 1, o), new Uint8Array(t.buffer).set(new Uint8Array(s), e + 3), 3 + o;
      if (o < 4294967296) return t.setUint8(e, 198), t.setUint32(e + 1, o), new Uint8Array(t.buffer).set(new Uint8Array(s), e + 5), 5 + o;
    }
    if (typeof s == "number") {
      if (Math.floor(s) !== s) return t.setUint8(e, 203), t.setFloat64(e + 1, s), 9;
      if (s >= 0) {
        if (s < 128) return t.setUint8(e, s), 1;
        if (s < 256) return t.setUint8(e, 204), t.setUint8(e + 1, s), 2;
        if (s < 65536) return t.setUint8(e, 205), t.setUint16(e + 1, s), 3;
        if (s < 4294967296) return t.setUint8(e, 206), t.setUint32(e + 1, s), 5;
        if (s < 18446744073709552e3) return t.setUint8(e, 207), fi(t, e + 1, s), 9;
        throw new Error("Number too big 0x" + s.toString(16));
      }
      if (s >= -32) return t.setInt8(e, s), 1;
      if (s >= -128) return t.setUint8(e, 208), t.setInt8(e + 1, s), 2;
      if (s >= -32768) return t.setUint8(e, 209), t.setInt16(e + 1, s), 3;
      if (s >= -2147483648) return t.setUint8(e, 210), t.setInt32(e + 1, s), 5;
      if (s >= -9223372036854776e3) return t.setUint8(e, 211), gi(t, e + 1, s), 9;
      throw new Error("Number too small -0x" + (-s).toString(16).substr(1));
    }
    if (r === "undefined") return n ? 0 : (t.setUint8(e, 212), t.setUint8(e + 1, 0), t.setUint8(e + 2, 0), 3);
    if (s === null) return n ? 0 : (t.setUint8(e, 192), 1);
    if (r === "boolean") return t.setUint8(e, s ? 195 : 194), 1;
    if (typeof s.toJSON == "function") return pt(s.toJSON(), t, e, n);
    if (r === "object") {
      let o,
        a = 0,
        c,
        l = Array.isArray(s);
      if (
        (l ? (o = s.length) : ((c = Lr(s, n)), (o = c.length)),
        o < 16 ? (t.setUint8(e, o | (l ? 144 : 128)), (a = 1)) : o < 65536 ? (t.setUint8(e, l ? 220 : 222), t.setUint16(e + 1, o), (a = 3)) : o < 4294967296 && (t.setUint8(e, l ? 221 : 223), t.setUint32(e + 1, o), (a = 5)),
        l)
      )
        for (let u = 0; u < o; u++) a += pt(s[u], t, e + a, n);
      else if (c)
        for (let u = 0; u < o; u++) {
          let g = c[u];
          (a += pt(g, t, e + a)), (a += pt(s[g], t, e + a, n));
        }
      return a;
    }
    if (r === "function") return 0;
    throw new Error("Unknown type " + r);
  }
  function gt(s, t) {
    let e = typeof s;
    if (e === "string") {
      let n = fs(s);
      if (n < 32) return 1 + n;
      if (n < 256) return 2 + n;
      if (n < 65536) return 3 + n;
      if (n < 4294967296) return 5 + n;
    }
    if ((ArrayBuffer.isView && ArrayBuffer.isView(s) && (s = s.buffer), s instanceof ArrayBuffer)) {
      let n = s.byteLength;
      if (n < 256) return 2 + n;
      if (n < 65536) return 3 + n;
      if (n < 4294967296) return 5 + n;
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
    if (s === null) return t ? 0 : 1;
    if (s === void 0) return t ? 0 : 3;
    if (typeof s.toJSON == "function") return gt(s.toJSON(), t);
    if (e === "object") {
      let n,
        r = 0;
      if (Array.isArray(s)) {
        n = s.length;
        for (let o = 0; o < n; o++) r += gt(s[o], t);
      } else {
        let o = Lr(s, t);
        n = o.length;
        for (let a = 0; a < n; a++) {
          let c = o[a];
          r += gt(c) + gt(s[c], t);
        }
      }
      if (n < 16) return 1 + r;
      if (n < 65536) return 3 + r;
      if (n < 4294967296) return 5 + r;
      throw new Error("Array or object too long 0x" + n.toString(16));
    }
    if (e === "function") return 0;
    throw new Error("Unknown type " + e);
  }
  var Vt = { encode: hi, decode: mi, inspect: ui, utf8Write: dt, utf8Read: Br, utf8ByteCount: fs };
  function yi(s, t) {
    return !!t.get("x-ably-errorcode");
  }
  function Ri(s, t) {
    if (yi(s, t)) return s.error && h.fromValues(s.error);
  }
  function Pi(s) {
    let t = {};
    return (
      s.forEach((e, n) => {
        t[n] = e;
      }),
      t
    );
  }
  async function ys(s, t, e, n, r, o) {
    let a = new Headers(n || {}),
      c = s ? s.toUpperCase() : z(o) ? "GET" : "POST",
      l = new AbortController(),
      u,
      g = new Promise((f) => {
        u = setTimeout(
          () => {
            l.abort(), f({ error: new v("Request timed out", null, 408) });
          },
          t ? t.options.timeouts.httpRequestTimeout : R.TIMEOUTS.httpRequestTimeout
        );
      }),
      d = { method: c, headers: a, body: o, signal: l.signal };
    p.Config.isWebworker || (d.credentials = a.has("authorization") ? "include" : "same-origin");
    let m = (async () => {
      try {
        let f = new URLSearchParams(r || {});
        f.set("rnd", Te());
        let y = e + "?" + f,
          P = await Ye().fetch(y, d);
        if ((clearTimeout(u), P.status == 204)) return { error: null, statusCode: P.status };
        let A = P.headers.get("Content-Type"),
          T;
        A && A.indexOf("application/x-msgpack") > -1 ? (T = await P.arrayBuffer()) : A && A.indexOf("application/json") > -1 ? (T = await P.json()) : (T = await P.text());
        let k = !!A && A.indexOf("application/x-msgpack") === -1,
          U = Pi(P.headers);
        return P.ok
          ? { error: null, body: T, headers: U, unpacked: k, statusCode: P.status }
          : { error: Ri(T, P.headers) || new v("Error response received from server: " + P.status + " body was: " + p.Config.inspect(T), null, P.status), body: T, headers: U, unpacked: k, statusCode: P.status };
      } catch (f) {
        return clearTimeout(u), { error: f };
      }
    })();
    return Promise.race([g, m]);
  }
  var Nr = { XHRRequest: Wt, FetchRequest: ys };
  var qr = Ir(ls, is);
  p.Crypto = qr;
  p.BufferUtils = is;
  p.Http = as;
  p.Config = ls;
  p.Transports = xr;
  p.WebStorage = jt;
  for (let s of [We, Ve]) (s.Crypto = qr), (s._MsgPack = Vt);
  as.bundledRequestImplementations = Nr;
  i.initLogHandlers();
  p.Defaults = _s(Ur);
  p.Config.agent && (p.Defaults.agent += " " + p.Config.agent);
  var bi = { ErrorInfo: h, Rest: We, Realtime: Ve, msgpack: Vt, makeProtocolMessageFromDeserialized: Ln };
  if (typeof module.exports == "object" && typeof exports == "object") {
    var __cp = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of Object.getOwnPropertyNames(from)) {
          if (!Object.prototype.hasOwnProperty.call(to, key) && key !== except)
            Object.defineProperty(to, key, {
              get: () => from[key],
              enumerable: !(desc = Object.getOwnPropertyDescriptor(from, key)) || desc.enumerable,
            });
        }
      }
      return to;
    };
    module.exports = __cp(module.exports, exports);
  }
  return module.exports;
});
