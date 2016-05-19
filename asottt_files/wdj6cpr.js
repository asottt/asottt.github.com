/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if (!window.Typekit)window.Typekit = {};
window.Typekit.config = {
    "a": "786656",
    "c": [".tk-brandon-grotesque", "\"brandon-grotesque\",sans-serif", ".tk-adobe-garamond-pro", "\"adobe-garamond-pro\",sans-serif"],
    "f": "./js/userType.css",
    "fi": [10296, 10294, 10300, 10302, 10303, 6769, 6770, 6771, 6768],
    "fn": ["adobe-garamond-pro", ["i4", "i7", "n4", "n7"], "brandon-grotesque", ["i5", "n3", "n4", "n5", "n7"]],
    "ht": "tk",
    "js": "1.6.4",
    "k": "./js/userType.js",
    "kt": "wdj6cpr",
    "p": "//p.typekit.net/p.gif?s=1&k=wdj6cpr&ht=tk&h={host}&f=10296.10294.10300.10302.10303.6769.6770.6771.6768&a=786656&_={_}",
    "ps": 1,
    "w": "wdj6cpr"
};
/*{"k":"1.6.4","auto_updating":false}*/
/*{"k":"1.6.4","created":"2013-09-09T09:32:23Z"}*/
;
(function (window, document, undefined) {
    var j = !0, k = null, l = !1;

    function m(a) {
        return function () {
            return this[a]
        }
    }

    var aa = this;

    function ba(a, b) {
        var c = a.split("."), d = aa;
        !(c[0]in d) && d.execScript && d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());)!c.length && void 0 !== b ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    }

    function da(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ea(a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function n(a, b, c) {
        n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? da : ea;
        return n.apply(k, arguments)
    }

    var fa = Date.now || function () {
            return +new Date
        };

    function ga(a, b) {
        this.da = a;
        this.V = b || a;
        this.z = this.V.document
    }

    ga.prototype.createElement = function (a, b, c) {
        a = this.z.createElement(a);
        if (b)for (var d in b)b.hasOwnProperty(d) && ("style" == d ? a.style.cssText = b[d] : a.setAttribute(d, b[d]));
        c && a.appendChild(this.z.createTextNode(c));
        return a
    };
    function q(a, b, c) {
        a = a.z.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a && a.lastChild && a.insertBefore(c, a.lastChild)
    }

    function ha(a, b) {
        function c() {
            a.z.body ? b() : setTimeout(c, 0)
        }

        c()
    }

    function r(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)if (c[d] == b)return;
        c.push(b);
        a.className = c.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function s(a, b) {
        for (var c = a.className.split(/\s+/), d = [], e = 0, f = c.length; e < f; e++)c[e] != b && d.push(c[e]);
        a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function ia(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)if (c[d] == b)return j;
        return l
    }

    function t(a) {
        var b = a.V.location.protocol;
        "about:" == b && (b = a.da.location.protocol);
        return "https:" === ("https:" == b ? "https:" : "http:")
    }

    function ja(a, b, c) {
        var d = a.z.getElementsByTagName("head")[0];
        if (d) {
            var e = a.createElement("script", {src: b}), f = l;
            e.onload = e.onreadystatechange = function () {
                if (!f && (!this.readyState || "loaded" == this.readyState || "complete" == this.readyState))f = j, c && c(k), e.onload = e.onreadystatechange = k, "HEAD" == e.parentNode.tagName && d.removeChild(e)
            };
            d.appendChild(e);
            window.setTimeout(function () {
                f || (f = j, c && c(Error("Script load timeout")))
            }, 5E3)
        }
    }

    function u(a, b, c) {
        this.Va = a;
        this.ga = b;
        this.Ua = c
    }

    ba("internalWebfont.BrowserInfo", u);
    u.prototype.Ia = m("Va");
    u.prototype.hasWebFontSupport = u.prototype.Ia;
    u.prototype.Ja = m("ga");
    u.prototype.hasWebKitFallbackBug = u.prototype.Ja;
    u.prototype.Ka = m("Ua");
    u.prototype.hasWebKitMetricsBug = u.prototype.Ka;
    function v(a, b, c, d) {
        this.g = a != k ? a : k;
        this.o = b != k ? b : k;
        this.J = c != k ? c : k;
        this.h = d != k ? d : k
    }

    var ka = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;

    function w(a, b) {
        return a.g > b.g || a.g === b.g && a.o > b.o || a.g === b.g && a.o === b.o && a.J > b.J ? 1 : a.g < b.g || a.g === b.g && a.o < b.o || a.g === b.g && a.o === b.o && a.J < b.J ? -1 : 0
    }

    function x(a, b) {
        return 0 === w(a, b) || 1 === w(a, b)
    }

    v.prototype.toString = function () {
        return [this.g, this.o || "", this.J || "", this.h || ""].join("")
    };
    function y(a) {
        a = ka.exec(a);
        var b = k, c = k, d = k, e = k;
        a && (a[1] !== k && a[1] && (b = parseInt(a[1], 10)), a[2] !== k && a[2] && (c = parseInt(a[2], 10)), a[3] !== k && a[3] && (d = parseInt(a[3], 10)), a[4] !== k && a[4] && (e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4]));
        return new v(b, c, d, e)
    }

    function A(a, b, c, d, e, f, g, h, p, z, ca) {
        this.W = a;
        this.q = b;
        this.Ta = c;
        this.B = d;
        this.F = e;
        this.ya = f;
        this.m = g;
        this.l = h;
        this.Pa = p;
        this.S = z;
        this.A = ca
    }

    ba("internalWebfont.UserAgent", A);
    A.prototype.getName = m("W");
    A.prototype.getName = A.prototype.getName;
    A.prototype.Ha = m("Ta");
    A.prototype.getVersion = A.prototype.Ha;
    A.prototype.Da = m("B");
    A.prototype.getEngine = A.prototype.Da;
    A.prototype.Ea = m("ya");
    A.prototype.getEngineVersion = A.prototype.Ea;
    A.prototype.Fa = m("m");
    A.prototype.getPlatform = A.prototype.Fa;
    A.prototype.Ga = m("Pa");
    A.prototype.getPlatformVersion = A.prototype.Ga;
    A.prototype.Ca = m("S");
    A.prototype.getDocumentMode = A.prototype.Ca;
    A.prototype.Ba = m("A");
    A.prototype.getBrowserInfo = A.prototype.Ba;
    function la(a, b) {
        this.e = a;
        this.R = b
    }

    var oa = new A("Unknown", new v, "Unknown", "Unknown", new v, "Unknown", "Unknown", new v, "Unknown", void 0, new u(l, l, l));
    la.prototype.parse = function () {
        var a;
        if (-1 != this.e.indexOf("MSIE") || -1 != this.e.indexOf("Trident/")) {
            a = C(this);
            var b = D(this), c = y(b), d = k, e = k, f = k, g = k, h = E(this.e, /Trident\/([\d\w\.]+)/, 1), p = F(this.R), d = -1 != this.e.indexOf("MSIE") ? E(this.e, /MSIE ([\d\w\.]+)/, 1) : E(this.e, /rv:([\d\w\.]+)/, 1), e = y(d);
            "" != h ? (f = "Trident", g = y(h)) : (f = "Unknown", g = new v, h = "Unknown");
            a = new A("MSIE", e, d, f, g, h, a, c, b, p, new u("Windows" == a && 6 <= e.g || "Windows Phone" == a && 8 <= c.g, l, l))
        } else if (-1 != this.e.indexOf("Opera"))a:if (a = "Unknown", b =
                E(this.e, /Presto\/([\d\w\.]+)/, 1), c = y(b), d = D(this), e = y(d), f = F(this.R), c.g !== k ? a = "Presto" : (-1 != this.e.indexOf("Gecko") && (a = "Gecko"), b = E(this.e, /rv:([^\)]+)/, 1), c = y(b)), -1 != this.e.indexOf("Opera Mini/"))g = E(this.e, /Opera Mini\/([\d\.]+)/, 1), h = y(g), a = new A("OperaMini", h, g, a, c, b, C(this), e, d, f, new u(l, l, l)); else {
            if (-1 != this.e.indexOf("Version/") && (g = E(this.e, /Version\/([\d\.]+)/, 1), h = y(g), h.g !== k)) {
                a = new A("Opera", h, g, a, c, b, C(this), e, d, f, new u(10 <= h.g, l, l));
                break a
            }
            g = E(this.e, /Opera[\/ ]([\d\.]+)/, 1);
            h = y(g);
            a = h.g !== k ? new A("Opera", h, g, a, c, b, C(this), e, d, f, new u(10 <= h.g, l, l)) : new A("Opera", new v, "Unknown", a, c, b, C(this), e, d, f, new u(l, l, l))
        } else/OPR\/[\d.]+/.test(this.e) ? a = pa(this) : /AppleWeb(K|k)it/.test(this.e) ? a = pa(this) : -1 != this.e.indexOf("Gecko") ? (a = "Unknown", b = new v, c = "Unknown", d = D(this), e = y(d), f = l, -1 != this.e.indexOf("Firefox") ? (a = "Firefox", c = E(this.e, /Firefox\/([\d\w\.]+)/, 1), b = y(c), f = 3 <= b.g && 5 <= b.o) : -1 != this.e.indexOf("Mozilla") && (a = "Mozilla"), g = E(this.e, /rv:([^\)]+)/, 1), h = y(g), f || (f = 1 < h.g ||
        1 == h.g && 9 < h.o || 1 == h.g && 9 == h.o && 2 <= h.J || g.match(/1\.9\.1b[123]/) != k || g.match(/1\.9\.1\.[\d\.]+/) != k), a = new A(a, b, c, "Gecko", h, g, C(this), e, d, F(this.R), new u(f, l, l))) : a = oa;
        return a
    };
    function C(a) {
        var b = E(a.e, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        if ("" != b)return /BB\d{2}/.test(b) && (b = "BlackBerry"), b;
        a = E(a.e, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
        return "" != a ? ("Mac_PowerPC" == a && (a = "Macintosh"), a) : "Unknown"
    }

    function D(a) {
        var b = E(a.e, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
        if (b || (b = E(a.e, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = E(a.e, /(iPhone )?OS ([\d_]+)/, 2)))return b;
        if (b = E(a.e, /(?:Linux|CrOS) ([^;)]+)/, 1))for (var b = b.split(/\s/), c = 0; c < b.length; c += 1)if (/^[\d\._]+$/.test(b[c]))return b[c];
        return (a = E(a.e, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }

    function pa(a) {
        var b = C(a), c = D(a), d = y(c), e = E(a.e, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1), f = y(e), g = "Unknown", h = new v, p = "Unknown", z = l;
        /OPR\/[\d.]+/.test(a.e) ? g = "Opera" : -1 != a.e.indexOf("Chrome") || -1 != a.e.indexOf("CrMo") || -1 != a.e.indexOf("CriOS") ? g = "Chrome" : /Silk\/\d/.test(a.e) ? g = "Silk" : "BlackBerry" == b || "Android" == b ? g = "BuiltinBrowser" : -1 != a.e.indexOf("PhantomJS") ? g = "PhantomJS" : -1 != a.e.indexOf("Safari") ? g = "Safari" : -1 != a.e.indexOf("AdobeAIR") && (g = "AdobeAIR");
        "BuiltinBrowser" == g ? p = "Unknown" : "Silk" == g ? p = E(a.e,
            /Silk\/([\d\._]+)/, 1) : "Chrome" == g ? p = E(a.e, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != a.e.indexOf("Version/") ? p = E(a.e, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == g ? p = E(a.e, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == g ? p = E(a.e, /OPR\/([\d.]+)/, 1) : "PhantomJS" == g && (p = E(a.e, /PhantomJS\/([\d.]+)/, 1));
        h = y(p);
        z = "AdobeAIR" == g ? 2 < h.g || 2 == h.g && 5 <= h.o : "BlackBerry" == b ? 10 <= d.g : "Android" == b ? 2 < d.g || 2 == d.g && 1 < d.o : 526 <= f.g || 525 <= f.g && 13 <= f.o;
        return new A(g, h, p, "AppleWebKit", f, e, b, d, c, F(a.R), new u(z, 536 > f.g || 536 == f.g && 11 > f.o, "iPhone" ==
        b || "iPad" == b || "iPod" == b || "Macintosh" == b))
    }

    function E(a, b, c) {
        return (a = a.match(b)) && a[c] ? a[c] : ""
    }

    function F(a) {
        if (a.documentMode)return a.documentMode
    }

    function qa(a) {
        this.Na = a || "-"
    }

    qa.prototype.h = function (a) {
        for (var b = [], c = 0; c < arguments.length; c++)b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.Na)
    };
    function ra(a, b, c) {
        this.j = a;
        this.n = b;
        this.$ = c;
        this.s = "wf";
        this.r = new qa("-")
    }

    function sa(a) {
        s(a.n, a.r.h(a.s, "loading"));
        ia(a.n, a.r.h(a.s, "active")) || r(a.n, a.r.h(a.s, "inactive"));
        G(a, "inactive")
    }

    function G(a, b, c) {
        if (a.$[b])if (c)a.$[b](c.getName(), H(c)); else a.$[b]()
    }

    function J(a, b) {
        this.W = a;
        this.ha = 4;
        this.X = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.X = c[1], this.ha = parseInt(c[2], 10))
    }

    J.prototype.getName = m("W");
    function H(a) {
        return a.X + a.ha
    }

    function K(a, b) {
        this.j = a;
        this.O = b;
        this.D = this.j.createElement("span", {"aria-hidden": "true"}, this.O)
    }

    function ta(a, b) {
        var c;
        c = [];
        for (var d = b.W.split(/,\s*/), e = 0; e < d.length; e++) {
            var f = d[e].replace(/['"]/g, "");
            -1 == f.indexOf(" ") ? c.push(f) : c.push("'" + f + "'")
        }
        c = c.join(",");
        d = "normal";
        e = b.ha + "00";
        "o" === b.X ? d = "oblique" : "i" === b.X && (d = "italic");
        a.D.style.cssText = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + c + ";" + ("font-style:" + d + ";font-weight:" + e + ";")
    }

    function ua(a) {
        q(a.j, "body", a.D)
    }

    K.prototype.remove = function () {
        var a = this.D;
        a.parentNode && a.parentNode.removeChild(a)
    };
    function va(a, b, c, d, e, f, g, h) {
        this.ia = a;
        this.Ma = b;
        this.j = c;
        this.C = d;
        this.O = h || "BESbswy";
        this.A = e;
        this.P = {};
        this.ea = f || 5E3;
        this.ra = g || k;
        this.N = this.M = k;
        a = new K(this.j, this.O);
        ua(a);
        for (var p in L)L.hasOwnProperty(p) && (ta(a, new J(L[p], H(this.C))), this.P[L[p]] = a.D.offsetWidth);
        a.remove()
    }

    var L = {ab: "serif", $a: "sans-serif", Xa: "monospace"};
    va.prototype.start = function () {
        this.M = new K(this.j, this.O);
        ua(this.M);
        this.N = new K(this.j, this.O);
        ua(this.N);
        this.Ra = fa();
        ta(this.M, new J(this.C.getName() + ",serif", H(this.C)));
        ta(this.N, new J(this.C.getName() + ",sans-serif", H(this.C)));
        wa(this)
    };
    function xa(a, b, c) {
        for (var d in L)if (L.hasOwnProperty(d) && b === a.P[L[d]] && c === a.P[L[d]])return j;
        return l
    }

    function wa(a) {
        var b = a.M.D.offsetWidth, c = a.N.D.offsetWidth;
        b === a.P.serif && c === a.P["sans-serif"] || a.A.ga && xa(a, b, c) ? fa() - a.Ra >= a.ea ? a.A.ga && xa(a, b, c) && (a.ra === k || a.ra.hasOwnProperty(a.C.getName())) ? ya(a, a.ia) : ya(a, a.Ma) : setTimeout(n(function () {
            wa(this)
        }, a), 25) : ya(a, a.ia)
    }

    function ya(a, b) {
        a.M.remove();
        a.N.remove();
        b(a.C)
    }

    function M(a, b, c, d) {
        this.j = b;
        this.G = c;
        this.ba = 0;
        this.va = this.pa = l;
        this.ea = d;
        this.A = a.A
    }

    M.prototype.fa = function (a, b, c, d) {
        if (0 === a.length && d)sa(this.G); else {
            this.ba += a.length;
            d && (this.pa = d);
            for (d = 0; d < a.length; d++) {
                var e = a[d], f = b[e.getName()], g = this.G, h = e;
                r(g.n, g.r.h(g.s, h.getName(), H(h).toString(), "loading"));
                G(g, "fontloading", h);
                (new va(n(this.za, this), n(this.Aa, this), this.j, e, this.A, this.ea, c, f)).start()
            }
        }
    };
    M.prototype.za = function (a) {
        var b = this.G;
        s(b.n, b.r.h(b.s, a.getName(), H(a).toString(), "loading"));
        s(b.n, b.r.h(b.s, a.getName(), H(a).toString(), "inactive"));
        r(b.n, b.r.h(b.s, a.getName(), H(a).toString(), "active"));
        G(b, "fontactive", a);
        this.va = j;
        za(this)
    };
    M.prototype.Aa = function (a) {
        var b = this.G;
        s(b.n, b.r.h(b.s, a.getName(), H(a).toString(), "loading"));
        ia(b.n, b.r.h(b.s, a.getName(), H(a).toString(), "active")) || r(b.n, b.r.h(b.s, a.getName(), H(a).toString(), "inactive"));
        G(b, "fontinactive", a);
        za(this)
    };
    function za(a) {
        0 == --a.ba && a.pa && (a.va ? (a = a.G, s(a.n, a.r.h(a.s, "loading")), s(a.n, a.r.h(a.s, "inactive")), r(a.n, a.r.h(a.s, "active")), G(a, "active")) : sa(a.G))
    }

    function Aa() {
        var a = [{name: "font-family", value: N.c[i + 1]}];
        this.Qa = [N.c[i]];
        this.la = a
    }

    function Ba(a) {
        for (var b = a.Qa.join(","), c = [], d = 0; d < a.la.length; d++) {
            var e = a.la[d];
            c.push(e.name + ":" + e.value + ";")
        }
        return b + "{" + c.join("") + "}"
    }

    function Ca(a) {
        this.j = a
    }

    Ca.prototype.toString = function () {
        return encodeURIComponent(this.j.V.location.hostname || this.j.da.location.hostname)
    };
    function Da(a, b) {
        this.t = a;
        this.v = b
    }

    Da.prototype.toString = function () {
        for (var a = [], b = 0; b < this.v.length; b++)for (var c = this.v[b], d = c.H(), c = c.H(this.t), e = 0; e < d.length; e++) {
            var f;
            a:{
                for (f = 0; f < c.length; f++)if (d[e] === c[f]) {
                    f = j;
                    break a
                }
                f = l
            }
            a.push(f ? 1 : 0)
        }
        a = a.join("");
        a = a.replace(/^0+/, "");
        b = [];
        for (d = a.length; 0 < d; d -= 4)c = a.slice(0 > d - 4 ? 0 : d - 4, d), b.unshift(parseInt(c, 2).toString(16));
        return b.join("")
    };
    function O(a) {
        this.Sa = a
    }

    O.prototype.h = function (a, b) {
        var c = b || {}, d = this.Sa.replace(/\{\/?([^*}]*)(\*?)\}/g, function (a, b, d) {
            return d && c[b] ? "/" + c[b].join("/") : c[b] || ""
        });
        d.match(/^\/\//) && (d = (a ? "https:" : "http:") + d);
        return d.replace(/\/*\?*($|\?)/, "$1")
    };
    function Ea(a, b, c, d) {
        this.L = a;
        this.T = b;
        this.eb = c;
        this.fb = d;
        this.na = {};
        this.ma = {}
    }

    Ea.prototype.H = function (a) {
        return a ? (this.na[a] || this.T).slice(0) : this.T.slice(0)
    };
    Ea.prototype.fa = function (a, b, c) {
        var d = [], e = {};
        Fa(this, b, d, e);
        a(d, e, c)
    };
    function Fa(a, b, c, d) {
        c.push(a.L);
        d[a.L] = a.H(b);
        a = a.ma[b] || [];
        for (b = 0; b < a.length; b++) {
            for (var e = a[b], f = e.L, g = l, h = 0; h < c.length; h++)c[h] == f && (g = j);
            g || (c.push(f), d[f] = e.H())
        }
    }

    function Ga(a, b) {
        this.L = a;
        this.T = b
    }

    Ga.prototype.H = m("T");
    function Ha() {
        this.ka = this.xa = this.K = this.U = this.oa = j
    }

    function P(a) {
        return "Windows" === a.m
    }

    function Q(a) {
        return P(a) && 0 === w(a.l, new v(5, 1)) || P(a) && 0 === w(a.l, new v(5, 2)) || P(a) && 0 === w(a.l, new v(6, 0)) || P(a) && x(a.l, new v(6, 1))
    }

    function R(a) {
        return "Macintosh" === a.m && (x(a.l, new v(10, 4)) || a.l.g === k)
    }

    function Ia(a, b) {
        return b.oa && ("iPhone" === a.m || "iPod" === a.m)
    }

    function Ja(a, b) {
        return Ia(a, b) && x(a.l, new v(4, 2)) && -1 === w(a.l, new v(5))
    }

    function Ka(a, b) {
        return b.U && "iPad" === a.m && x(a.l, new v(4, 2)) && -1 === w(a.l, new v(5))
    }

    function T(a, b) {
        return b.K && "Android" === a.m
    }

    function La(a, b) {
        return T(a, b) && x(a.l, new v(2, 2)) && -1 === w(a.l, new v(3, 1))
    }

    function Ma(a, b) {
        return T(a, b) && x(a.l, new v(3, 1)) && -1 === w(a.l, new v(4, 1))
    }

    function U(a) {
        return "Linux" === a.m || "Ubuntu" === a.m
    }

    function Na(a) {
        return "Gecko" === a.B && 0 === w(a.F, new v(1, 9, 1)) && !/^b[1-3]$/.test(a.F.h || "")
    }

    function Oa(a) {
        return "Safari" === a.getName() && "AppleWebKit" === a.B || "Unknown" === a.getName() && "AppleWebKit" === a.B && ("iPhone" === a.m || "iPad" === a.m || "iPod" === a.m)
    }

    function Pa(a) {
        return "Safari" === a.getName() && "AppleWebKit" === a.B && x(a.F, new v(525, 13)) && -1 === w(a.F, new v(534, 50))
    }

    function Qa(a) {
        return "Opera" === a.getName() && x(a.q, new v(10, 54)) && -1 === w(a.q, new v(11, 10))
    }

    function Ra(a) {
        return "BuiltinBrowser" === a.getName()
    }

    function Sa(a) {
        this.ua = a
    }

    function Ta(a, b) {
        return b
    }

    var Ua = {Ya: "a", Za: "b", cb: "d", bb: "f", Wa: "i"}, Va = {
        a: function (a, b) {
            return Pa(a) && Q(a) || Ra(a) && (La(a, b) || T(a, b) && x(a.l, new v(4, 1))) || b.K && "Silk" === a.getName() && -1 === w(a.q, new v(2)) && (La(a, b) || R) || b.K && "Silk" === a.getName() && x(a.q, new v(2)) && T(a, b) && x(a.l, new v(4, 1)) || Oa(a) && (Ka(a, b) || Ja(a, b)) || Na(a) && (Q(a) || U(a)) || Qa(a) && (Q(a) || U(a)) || ("Chrome" === a.getName() && 1 === w(a.q, new v(4, 0, 249)) && -1 === w(a.q, new v(6)) || 0 === w(a.q, new v(4, 0, 249)) && (a.q.h === k || 4 <= a.q.h)) && (Q(a) || U(a) || R(a)) || "Chrome" === a.getName() &&
                x(a.q, new v(6)) && (Ka(a, b) || Ja(a, b)) || "AdobeAIR" === a.getName() && x(a.q, new v(2, 5)) && (P(a) && a.l.g === k || U(a))
        }, b: function (a) {
            return Na(a) && R(a) || Pa(a) && R(a) || Qa(a) && R(a) || "AdobeAIR" === a.getName() && x(a.q, new v(2, 5)) && R(a)
        }, d: function (a, b) {
            return "Chrome" === a.getName() && x(a.q, new v(6)) && (Q(a) || U(a) || R(a) || T(a, b) || "CrOS" === a.m || b.U && "iPad" === a.m && x(a.l, new v(5)) || Ia(a, b) && x(a.l, new v(5))) || "Gecko" === a.B && 1 === w(a.F, new v(1, 9, 1)) && (Q(a) || U(a) || R(a) || T(a, b)) || "Safari" === a.getName() && ("AppleWebKit" === a.B && x(a.F,
                    new v(534, 50))) && (Q(a) || R(a)) || Oa(a) && (b.U && "iPad" === a.m && x(a.l, new v(5)) || Ia(a, b) && x(a.l, new v(5))) || "Opera" === a.getName() && x(a.q, new v(11, 10)) && (Q(a) || U(a) || R(a) || T(a, b)) || "MSIE" === a.getName() && 9 <= a.S && (P(a) && x(a.l, new v(6, 1)) || P(a) && 0 === w(a.l, new v(6, 0))) || "MSIE" === a.getName() && b.xa && "Windows Phone" === a.m && x(a.l, new v(8)) || Ra(a) && b.ka && "BlackBerry" === a.m && x(a.l, new v(10))
        }, f: function (a, b) {
            return Ra(a) && Ma(a, b) || b.K && "Silk" === a.getName() && x(a.q, new v(2)) && (Ma(a, b) || U(a))
        }, i: function (a) {
            return "MSIE" ===
                a.getName() && (x(a.q, new v(6, 0)) && (void 0 === a.S || 9 > a.S)) && Q(a)
        }
    };

    function Wa(a, b) {
        var c = b || new Ha, d;
        for (d in Ua) {
            var e = Ua[d];
            if (Va[e](a, c))return e
        }
        return k
    }

    var Xa = {};
    Xa.i = new Sa(function (a, b, c) {
        for (var d = 0; d < b.length; d += 1) {
            var e = b[d], f = a.replace(/(-1|-2)$/, "").slice(0, 28) + "-" + e;
            c.push(new Ga(f, [e]))
        }
        a = {};
        for (e = 0; e < b.length; e++)c = b[e], d = c.charAt(1), (a[d] || (a[d] = [])).push(c);
        c = [[4, 3, 2, 1, 5, 6, 7, 8, 9], [7, 8, 9, 6, 5, 4, 3, 2, 1]];
        d = [];
        for (e = 0; e < c.length; e++)for (var f = c[e], g = 0; g < f.length; g++) {
            var h = f[g];
            if (a[h]) {
                d = d.concat(a[h]);
                break
            }
        }
        c = d;
        d = {};
        a = [];
        for (e = 0; e < c.length; e++)f = c[e], d[f] || (d[f] = j, a.push(f));
        c = [];
        for (d = 0; d < b.length; d++) {
            e = b[d];
            for (f = 0; f < a.length; f++)g = a[f], g == e &&
            c.push(g)
        }
        return c
    });
    var V = {};
    V.a = V.b = V.d = function () {
        return []
    };
    V.f = function (a) {
        return [new Ca(a)]
    };
    V.i = function (a, b, c) {
        return [new Ca(a), new Da(b, c)]
    };
    function W(a) {
        this.j = a;
        this.Z = this.e = this.t = k;
        this.v = [];
        this.Q = [];
        this.wa = this.aa = k
    }

    W.prototype.supportsConfiguredBrowser = function () {
        return !!this.t
    };
    W.prototype.init = function () {
        if (0 < this.Q.length) {
            for (var a = [], b = 0; b < this.Q.length; b++)a.push(Ba(this.Q[b]));
            var b = this.j, a = a.join(""), c = this.j.createElement("style");
            c.setAttribute("type", "text/css");
            c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a));
            q(b, "head", c)
        }
    };
    W.prototype.load = function (a, b) {
        if (this.t) {
            for (var c = Xa[this.t] || new Sa(Ta), d = 0; d < this.v.length; d++) {
                for (var e = this.v[d], f = this.t, g = c, h = [], p = e.L.split(",")[0].replace(/"|'/g, ""), z = e.H(), ca = h, B = void 0, S = [], I = {}, ma = 0; ma < z.length; ma++)B = z[ma], 0 < B.length && !I[B] && (I[B] = j, S.push(B));
                z = S;
                g = g.ua ? g.ua(p, z, ca) : z;
                e.na[f] = g;
                e.ma[f] = h
            }
            if (this.aa) {
                c = V[this.t](this.j, this.t, this.v);
                d = this.t;
                e = [];
                for (f = 0; f < c.length; f++)e.push(c[f].toString());
                var d = this.aa.h(t(this.j), {format: d, extras: e}), c = this.j, d = c.createElement("link",
                    {rel: "stylesheet", href: d}), Z = l;
                d.onload = function () {
                    Z || (Z = j)
                };
                d.onerror = function () {
                    Z || (Z = j)
                };
                q(c, "head", d)
            }
            if (a) {
                var na = this, nb = this.t;
                ha(this.j, function () {
                    for (var c = 0; c < na.v.length; c++)na.v[c].fa(a, nb, b && c == na.v.length - 1)
                })
            }
        }
    };
    W.prototype.collectFontFamilies = function (a, b) {
        if (this.t)for (var c = 0; c < this.v.length; c++)Fa(this.v[c], this.t, a, b)
    };
    W.prototype.performOptionalActions = function () {
        if (this.ca) {
            var a = this, b = this.e, c = this.j;
            ha(this.j, function () {
                var d = a.ca;
                if (d.ta) {
                    var e = window.__adobewebfontsappname__, e = e ? e.toString().substr(0, 20) : "", d = d.ta.h(t(c), {
                        host: encodeURIComponent(c.V.location.hostname || c.da.location.hostname),
                        app: encodeURIComponent(e),
                        _: (+new Date).toString()
                    }), f = new Image(1, 1);
                    f.src = d;
                    f.onload = function () {
                        f.onload = k
                    }
                }
                d = a.ca;
                d.ja && (d = d.ja.h(b, c), q(c, "body", d))
            })
        }
    };
    function Ya(a, b, c, d) {
        this.Oa = a;
        this.j = b;
        this.e = c;
        this.n = d;
        this.u = []
    }

    Ya.prototype.Y = function (a) {
        this.u.push(a)
    };
    Ya.prototype.load = function (a, b) {
        var c = a, d = b || {};
        if ("string" == typeof c)c = [c]; else if (!c || !c.length)d = c || {}, c = [];
        if (c.length)for (var e = this, f = c.length, g = 0; g < c.length; g++) {
            var h = this.Oa.h(t(this.j), {id: encodeURIComponent(c[g])});
            ja(this.j, h, function () {
                0 == --f && Za(e, d)
            })
        } else Za(this, d)
    };
    function Za(a, b) {
        if (0 != a.u.length) {
            for (var c = new ra(a.j, a.n, b), d = l, e = 0; e < a.u.length; e++)a.u[e].init(), d = d || a.u[e].supportsConfiguredBrowser();
            if (d) {
                r(c.n, c.r.h(c.s, "loading"));
                G(c, "loading");
                for (var f = new M(a.e, a.j, c), c = function (a, b, c) {
                    for (var d = [], e = 0; e < a.length; e += 1) {
                        var B = a[e];
                        if (b[B])for (var S = b[B], I = 0; I < S.length; I += 1)d.push(new J(B, S[I])); else d.push(new J(B))
                    }
                    f.fa(d, {}, k, c)
                }, d = 0; d < a.u.length; d++)e = a.u[d], e.supportsConfiguredBrowser() && (e.load(c, d == a.u.length - 1), e.performOptionalActions(window))
            } else sa(c);
            a.u = []
        }
    }

    function $a(a) {
        this.I = a;
        this.u = []
    }

    $a.prototype.Y = function (a) {
        this.u.push(a)
    };
    $a.prototype.load = function () {
        var a = this.I.__webfonttypekitmodule__;
        if (a)for (var b = 0; b < this.u.length; b++) {
            var c = this.u[b], d = a[c.wa];
            d && d(function (a, b, d) {
                a = [];
                b = {};
                var h = (new la(navigator.userAgent, document)).parse(), p = c;
                p.e = h;
                p.t = Wa(p.e, p.Z);
                c.supportsConfiguredBrowser() && (c.init(), c.load(k), c.collectFontFamilies(a, b), c.performOptionalActions(window));
                d(c.supportsConfiguredBrowser(), a, b)
            })
        }
    };
    function ab(a, b, c, d) {
        this.I = a;
        this.z = b;
        this.La = c;
        this.qa = d
    }

    ab.prototype.h = function (a, b) {
        var c = this.z.createElement("img");
        c.setAttribute("width", 62);
        c.setAttribute("height", 25);
        c.setAttribute("src", this.La.h(t(b)));
        c.setAttribute("class", "typekit-badge");
        c.setAttribute("alt", "Fonts by Typekit");
        c.setAttribute("title", "Information about the fonts used on this site");
        c.style.position = "fixed";
        c.style.zIndex = 2E9;
        c.style.right = 0;
        c.style.bottom = 0;
        c.style.cursor = "pointer";
        c.style.border = 0;
        "Opera" != a.getName() && (c.style.content = "none");
        c.style.display = "inline";
        c.style["float"] =
            "none";
        c.style.height = "25px";
        c.style.left = "auto";
        c.style.margin = 0;
        c.style.maxHeight = "25px";
        c.style.maxWidth = "62px";
        c.style.minHeight = "25px";
        c.style.minWidth = "62px";
        c.style.orphans = 2;
        c.style.outline = "none";
        c.style.overflow = "visible";
        c.style.padding = 0;
        c.style.pageBreakAfter = "auto";
        c.style.pageBreakBefore = "auto";
        c.style.pageBreakInside = "auto";
        c.style.tableLayout = "auto";
        c.style.textIndent = 0;
        c.style.top = "auto";
        c.style.unicodeBidi = "normal";
        c.style.verticalAlign = "baseline";
        c.style.visibility = "visible";
        c.style.widows =
            2;
        c.style.width = "65px";
        if (this.qa) {
            var d = this.z, e = this.qa;
            bb(this, c, "click", function () {
                d.location.href = e
            })
        }
        var f = a.m;
        if ("MSIE" == a.getName() && "Windows Phone" != f) {
            c.style.position = "absolute";
            var g = this, h = function () {
                var a = cb(g, "scrollLeft", "scrollTop"), b = cb(g, "clientWidth", "clientHeight");
                c.style.bottom = "auto";
                c.style.right = "auto";
                c.style.top = a[1] + b[1] - 25 + "px";
                c.style.left = a[0] + b[0] - 3 - 62 + "px"
            };
            bb(this, this.I, "scroll", h);
            bb(this, this.I, "resize", h)
        }
        if ("iPhone" == f || "iPod" == f || "iPad" == f || "Android" == f || "Windows Phone" ==
            f || "BlackBerry" == f)c.style.display = "none";
        return c
    };
    function cb(a, b, c) {
        var d = 0, e = 0;
        a = a.z;
        if (a.documentElement && (a.documentElement[b] || a.documentElement[c]))d = a.documentElement[b], e = a.documentElement[c]; else if (a.body && (a.body[b] || a.body[c]))d = a.body[b], e = a.body[c];
        return [d, e]
    }

    function bb(a, b, c, d) {
        if (b.attachEvent) {
            var e = a.I;
            b["e" + c + d] = d;
            b[c + d] = function () {
                b["e" + c + d](e.event)
            };
            b.attachEvent("on" + c, b[c + d])
        } else b.addEventListener(c, d, l)
    }

    var db = (new la(navigator.userAgent, document)).parse();
    window.Typekit || (window.Typekit = {});
    if (!window.Typekit.load) {
        var eb = window.Typekit.config || {}, fb = k;
        eb.k && (fb = new O(eb.k));
        var X = new Ya(fb, new ga(window), db, document.documentElement), gb = new $a(window);
        window.Typekit.load = function () {
            X.load.apply(X, arguments)
        };
        window.Typekit.addKit = function () {
            X.Y.apply(X, arguments)
        }
    }
    var hb, ib = k, jb = k, kb = k, lb, Y, $, N = window.Typekit.config || {};
    N.b && (ib = new O(N.b), jb = new ab(window, document, ib, N.bu));
    N.p && (kb = new O(N.p));
    lb = new function () {
        var a = kb;
        this.ja = jb;
        this.ta = a
    };
    $ = new W(new ga(window));
    $.ca = lb;
    Y = new Ha;
    Y.oa = !N.si;
    Y.U = !N.st;
    Y.K = !N.sa;
    Y.xa = !N.sw;
    Y.ka = !N.sb;
    $.Z = Y;
    N.w && ($.wa = N.w);
    N.f && (hb = new O(N.f), $.aa = hb);
    var i;
    if (N.fn)for (i = 0; i < N.fn.length; i += 2)$.v.push(new Ea(N.fn[i], N.fn[i + 1]));
    if (N.c)for (i = 0; i < N.c.length; i += 2)$.Q.push(new Aa);
    var mb;
    if (mb = gb)mb = !!gb.I.__webfonttypekitmodule__;
    mb ? (gb.Y($), gb.load()) : ($.e = db, $.t = Wa($.e, $.Z), window.Typekit.addKit($));
})(this, document);
