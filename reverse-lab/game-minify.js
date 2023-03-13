var this.debugMode = !1;
0 <= window.location.href.indexOf("/testing") && (this.debugMode = !0);
var b = !1,
    a = navigator.language || navigator.userLanguage;
a = a.substr(0, 2);
var o = !1,
    l = navigator.userAgent.toLowerCase(),
    s = 0 <= l.indexOf("android"),
    n = 0 <= l.indexOf("kindle") || 0 <= l.indexOf("silk/"),
    r = navigator.userAgent,
    i = 0 <= r.indexOf("iPad") || 0 <= r.indexOf("iPhone") || 0 <= r.indexOf("iPod"),
    h = 0 <= l.indexOf("mobile"),
    n = -1 < l.indexOf("firefox"),
    d = (window.attachEvent && window.addEventListener, !1),
    f = !1,
    p = -1,
    y = !1;
if (0 <= l.indexOf("safari") && -1 == l.indexOf("chrome") && (y = !0), 0 <= l.indexOf("chrome") && (y || n || (d = !0)), 0 <= l.indexOf("mac os x ")) {
    var g = l.indexOf("mac os x ");
    if (0 <= g) {
        for (var m = [], u = 0, w = g += 9; w < l.length; w++) {
            var x = l.charCodeAt(w);
            if (48 <= x && 57 >= x) u *= 10, u += x - 48;
            else if (m.push(u), u = 0, 3 == m.length || 46 != x && 95 != x) break
        }
        2 <= m.length && 10 == m[0] && (f = !0, p = m[1])
    }
}
navigator.platform && ("mac" != ("" + navigator.platform).toLowerCase().substr(0, 3) && (f = !1));
var v = !1,
    b = function(t) {};
if (window.requestAnimationFrame ? b = window.requestAnimationFrame : window.mozRequestAnimationFrame ? b = window.mozRequestAnimationFrame : window.webkitRequestAnimationFrame ? b = window.webkitRequestAnimationFrame : v = !0, h || (v = !0), v = !0, d) {
    var M = l.split(" ");
    for (w = M.length - 1; 0 <= w; w--) {
        var I = M[w];
        if (0 == I.indexOf("chrome/")) {
            3 <= (m = (m = I.split("chrome/")[1]).split(".")).length && (52 <= Number(m[0]) || 51 == Number(m[0]) && (1 <= Number(m[1]) || 2704 <= Number(m[2]))) && (v = !1);
            break
        }
    }
    v = !0
}
d && f && -1 != p && 11 >= p && (b = !0);
var C, k, A, S, F, _, E, P, z, D, T = "translateZ(0)";

function N(t, e) {
    t.style.webkitTransform = t.style.OTransform = t.style.msTransform = t.style.MozTransform = t.style.transform = e
}

function B(t, e) {
    t.style.webkitTransformOrigin = t.style.OTransformOrigin = t.style.msTransformOrigin = t.style.MozTransformOrigin = t.style.transformOrigin = e
}
var q, R, O, L, H, U, W, j, Y, V, G, X = 2 * Math.PI,
    J = [4, 21, 0, 11],
    K = !1,
    $ = function() {
        K = !0, v ? h || y ? setInterval("oef()", 33) : setInterval("oef()", 20) : b(ns)
    },
    Q = [],
    Z = 0;

function tt(t) {
    var e = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(e), e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
for (2, W = 56, (j = document.createElement("canvas")).width = 2, j.height = W, k = (V = (Y = (G = j.getContext("2d")).getImageData(0, 0, 2, W)).data).length, U = L = 0; U < W; U++)
    for (g = (55 - U) / 55, g = .5 * (1 - Math.cos(Math.PI * g)), H = 0; H < 2; H++) V[L] = Math.min(255, Math.floor(54.4 + 32 * g)), V[L + 1] = Math.min(255, Math.floor(108.8 + 64 * g)), V[L + 2] = Math.min(255, Math.floor(81.6 + 48 * g)), V[L + 3] = 255, L += 4;
for (G.putImageData(Y, 0, 0), q = j.toDataURL(), (j = document.createElement("canvas")).width = 2, j.height = W, k = (V = (Y = (G = j.getContext("2d")).getImageData(0, 0, 2, W)).data).length, U = L = 0; U < W; U++)
    for (g = (55 - U) / 55, g = .5 * (1 - Math.cos(Math.PI * g)), H = 0; H < 2; H++) V[L] = Math.min(255, Math.floor(72 + .95 * 48 * g)), V[L + 1] = Math.min(255, Math.floor(171 + 93.1 * g)), V[L + 2] = Math.min(255, Math.floor(132 + .95 * 87 * g)), V[L + 3] = 255, L += 4;
for (G.putImageData(Y, 0, 0), R = j.toDataURL(), (j = document.createElement("canvas")).width = 2, j.height = W, k = (V = (Y = (G = j.getContext("2d")).getImageData(0, 0, 2, W)).data).length, U = L = 0; U < W; U++)
    for (g = U / 55, g = .5 * (1 - Math.cos(Math.PI * g)), H = 0; H < 2; H++) V[L] = Math.floor(.1 * 48 + 36 * g), V[L + 1] = Math.floor(7 + 52.5 * g), V[L + 2] = Math.floor(6.4 + 48 * g), V[L + 3] = 255, L += 4;
for (G.putImageData(Y, 0, 0), O = j.toDataURL(), 32 < q.length && 32 < R.length && 32 < O.length && tt(".sadg1 { background-image:url(" + q + "); }  .sadu1 { background-image:url(" + R + "); }  .sadd1 { background-image:url(" + O + "); }"), j.width = 2, j.height = W, k = (V = (Y = (G = j.getContext("2d")).getImageData(0, 0, 2, W)).data).length, U = L = 0; U < W; U++)
    for (g = (55 - U) / 55, g = .5 * (1 - Math.cos(Math.PI * g)), H = 0; H < 2; H++) V[L] = Math.min(255, Math.floor(.85 * 52 + 26 * g)), V[L + 1] = Math.min(255, Math.floor(81.6 + 48 * g)), V[L + 2] = Math.min(255, Math.floor(.85 * 144 + 72 * g)), V[L + 3] = 255, L += 4;
for (G.putImageData(Y, 0, 0), q = j.toDataURL(), (j = document.createElement("canvas")).width = 2, j.height = W, k = (V = (Y = (G = j.getContext("2d")).getImageData(0, 0, 2, W)).data).length, U = L = 0; U < W; U++)
    for (g = (55 - U) / 55, g = .5 * (1 - Math.cos(Math.PI * g)), H = 0; H < 2; H++) V[L] = Math.min(255, Math.floor(72 + .95 * 48 * g)), V[L + 1] = Math.min(255, Math.floor(132 + .95 * 87 * g)), V[L + 2] = Math.min(255, Math.floor(171 + 93.1 * g)), V[L + 3] = 255, L += 4;
for (G.putImageData(Y, 0, 0), R = j.toDataURL(), (j = document.createElement("canvas")).width = 2, j.height = W, k = (V = (Y = (G = j.getContext("2d")).getImageData(0, 0, 2, W)).data).length, U = L = 0; U < W; U++)
    for (g = U / 55, g = .5 * (1 - Math.cos(Math.PI * g)), H = 0; H < 2; H++) V[L] = Math.floor(.1 * 48 + 36 * g), V[L + 1] = Math.floor(5.4 + 40.5 * g), V[L + 2] = Math.floor(7 + 52.5 * g), V[L + 3] = 255, L += 4;
G.putImageData(Y, 0, 0), O = j.toDataURL(), 32 < q.length && 32 < R.length && 32 < O.length && tt(".sadg2 { background-image:url(" + q + "); }  .sadu2 { background-image:url(" + R + "); }  .sadd2 { background-image:url(" + O + "); }");
var et = [],
    at = !1,
    ot = !1;

function lt(t, e, a, o, l) {
    e || (e = 56), 56 < e && (e = 56), a || (a = 15), o || (o = 14);
    var s = document.createElement("div");
    s.className = "btnt nsi sadg" + l;
    var n = s.style;
    n.position = "absolute", n.width = "auto", n.color = "#ffffff", n.fontWeight = "bold", n.textAlign = "center", n.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif', n.fontSize = a + "px", s.textContent = t, n.cursor = "pointer", document.body.appendChild(s);
    var r = Math.ceil(35 + s.offsetWidth);
    document.body.removeChild(s), s.textContent = "", n.width = r + "px", n.height = e + "px", n.lineHeight = e + "px", h || (n.boxShadow = "0px 3px 20px rgba(0,0,0, .75)"), n.borderRadius = o + "px";
    var i = document.createElement("div");
    (n = i.style).position = "absolute", n.left = n.top = "0px", n.width = r + "px", n.height = e + "px", n.borderRadius = o + 1 + "px", n.opacity = 0, i.className = "sadu" + l;
    var c = document.createElement("div");
    (n = c.style).position = "absolute", n.left = n.top = "-1px", n.width = r + 2 + "px", n.height = e + 2 + "px", n.borderRadius = o + "px", n.opacity = 0, c.className = "sadd" + l;
    var d = function(t, e, a, o) {
        var l = document.createElement("div");
        t.tagName || ((t = document.getElementById(t)).style.width = a + "px", t.style.height = o + "px", l.style.width = a + "px", l.style.height = o + "px");
        var s = {
            lic: 0
        };
        s.elem = t, s.md = !1, s.mo = !1, s.mdf = 0, s.mof = 0;
        var n = !0;
        if (t.style && t.style.position && ("absolute" == (t.style.position + "").toLowerCase() && (n = !1), "fixed" == (t.style.position + "").toLowerCase() && (n = !1)), n && (t.style.position = "relative"), l.style.position = "absolute", l.style.opacity = 0, l.style.left = "0px", l.style.top = "0px", t.appendChild(l), s.ho = l, s.alic = function() {
                this.lic++, 3 == this.lic && (this.ho.style.opacity = 1, this.onload) && this.onload()
            }, et.push(s), s.setEnabled = function(t) {
                t ? (this.disabled = !1, this.upi.style.opacity = this.mof, this.downi.style.opacity = this.mdf, this.elem.style.opacity = 1, this.elem.style.cursor = "pointer") : (this.disabled = !0, this.upi.style.opacity = 0, this.downi.style.opacity = 0, this.elem.style.opacity = .38, this.elem.style.cursor = "default")
            }, e)
            for (n = 1; 3 >= n; n++) {
                var r = document.createElement("img");
                r.draggable = !1, r.style.position = "absolute", r.style.left = "0px", r.style.top = "0px", r.border = 0, r.width = a, r.height = o, r.className = "nsi", l.appendChild(r), 1 == n ? (s.normi = r, r.onload = function() {
                    for (var t = et.length - 1; 0 <= t; t--) {
                        var e = et[t];
                        if (e.normi == this) {
                            e.alic();
                            break
                        }
                    }
                }, r.src = e + ".png") : 2 == n ? (s.upi = r, r.style.opacity = 0, r.onload = function() {
                    for (var t = et.length - 1; 0 <= t; t--) {
                        var e = et[t];
                        if (e.upi == this) {
                            e.alic();
                            break
                        }
                    }
                }, r.src = e + "up.png") : 3 == n && (s.downi = r, r.style.opacity = 0, r.onload = function() {
                    for (var t = et.length - 1; 0 <= t; t--) {
                        var e = et[t];
                        if (e.downi == this) {
                            e.alic();
                            break
                        }
                    }
                }, r.src = e + "down.png")
            } else l.style.opacity = 1;
        return t.onmouseenter = function() {
            for (var t = et.length - 1; 0 <= t; t--) {
                var e = et[t];
                if (e.elem == this) {
                    e.disabled || e.mo || (e.mo = !0, e.onmouseenter && e.onmouseenter(), at = !0);
                    break
                }
            }
        }, t.onmouseleave = function() {
            for (var t = et.length - 1; 0 <= t; t--) {
                var e = et[t];
                if (e.elem == this) {
                    e.mo && (e.mo = !1, e.onmouseleave && e.onmouseleave(), at = !0);
                    break
                }
            }
        }, t.onmousedown = function(t) {
            for (var e = et.length - 1; 0 <= e; e--) {
                var a = et[e];
                if (a.elem == this) {
                    if (!a.disabled && !a.md) return a.md = !0, a.onmousedown && a.onmousedown(t, a), at = !0, !1;
                    break
                }
            }
        }, t.onmouseup = t.ondragend = function(t) {
            for (var e = et.length - 1; 0 <= e; e--) {
                var a = et[e];
                if (a.elem == this) {
                    a.md && (a.mdf = 1, a.md = !1, a.onmouseup && (a.onmouseup(t, a), h) && a.elem.onmouseleave(), at = !0);
                    break
                }
            }
        }, ot || (ot = !0, window.onmouseup = window.ondragover = window.ondragend = function() {
            for (var t = et.length - 1; 0 <= t; t--) {
                var e = et[t];
                e.md && (e.md = !1, at = !0)
            }
        }), s
    }(s);
    return d.a = 1, d.ho.appendChild(i), d.upi = i, d.ho.appendChild(c), d.downi = c, d.ts = a, d.ww = r, d.bgm = l, d.setText = function(t) {
        var e = document.createElement("div");
        e.className = "nsi sadg" + this.bgm;
        var a = e.style;
        a.position = "absolute", a.width = "auto", a.color = "#ffffff", a.fontWeight = "bold", a.textAlign = "center", a.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif', a.fontSize = this.ts + "px", e.textContent = t, document.body.appendChild(e), a = Math.ceil(35 + e.offsetWidth), document.body.removeChild(e), this.btnf.textContent = t, this.ww = a, this.elem.style.width = a + "px", this.upi.style.width = a + "px", this.downi.style.width = a + 2 + "px", this.btnf.style.width = a + "px"
    }, a = document.createElement("div"), s.appendChild(a), d.btnf = a, (n = a.style).position = "absolute", n.left = n.top = "0px", n.width = r + "px", n.height = e + "px", n.borderRadius = o + "px", a.textContent = t, a.className = "nsi", n.color = "#ffffff", n.opacity = .9, d.ho.appendChild(a), d
}
setInterval((function() {
    for (var t = document.getElementsByTagName("script"), e = t.length - 1; 0 <= e; e--) {
        var a = t[e];
        try {
            if (a.src && 0 <= (a.src + "").indexOf("mindscape.xyz")) {
                var o = document.createElement("div");
                o.style.width = "100%", o.style.height = "100%", o.style.position = "fixed", o.style.left = o.style.top = "0px", o.style.zIndex = 2147483647, o.style.fontSize = "87px", o.style.color = "#FF3030", o.style.background = "#FFFFFF", 0 <= (a.src + "").indexOf("android") ? o.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://play.google.com/store/apps/details?id=air.com.hypah.io.slither">Tap here to download the real game!</a>' : o.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8">Tap here to download the real game!</a>', document.body.appendChild(o)
            }
        } catch (t) {}
    }
    i && pi && !pi.parentNode && ((o = document.createElement("div")).style.width = "100%", o.style.height = "100%", o.style.position = "fixed", o.style.left = o.style.top = "0px", o.style.zIndex = 2147483647, o.style.fontSize = "87px", o.style.color = "#FF3030", o.style.background = "#FFFFFF", o.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8">Tap here to download the real game!</a>', document.body.appendChild(o))
}), 8e3);
var st, nt, rt = [],
    it = [],
    ht = [64, 32, 16, 8, 4, 2, 1],
    ct = "oakley graduation funkystar headphones eyebrows spikecollar disguise cape crown antlers unicorn angel bat dragon bear rabbit cat dreadlocks blonde ginger blackhair mohawk catglass swirly nerdglass 3dglass heartglass monocle deerstalker visor cap hardhat".split(" "),
    dt = [];
for (w = 0; w < ct.length; w++) F = {}, dt.push(F), F.loaded = !1, F.img = null, F.u = "/s/a_" + ct[w] + ".png", 0 == w ? (F.sc = .205, F.px = 66, F.py = 87) : 1 == w ? (F.sc = .2, F.px = 205, F.py = 101) : 2 == w ? (F.sc = .205, F.px = 83, F.py = 87) : 3 == w ? (F.sc = .25, F.px = 130, F.py = 97) : 4 == w ? (F.sc = .25, F.px = 64, F.py = 82) : 5 == w ? (F.sc = .25, F.px = 94, F.py = 79) : 6 == w ? (F.sc = .25, F.px = 64, F.py = 90) : 7 == w ? (F.sc = .32, F.px = 170, F.py = 86) : 8 == w ? (F.sc = .18, F.px = 180, F.py = 75) : 9 == w ? (F.sc = .3, F.px = 120, F.py = 100) : 10 == w ? (F.sc = .3, F.px = 201, F.py = 40) : 11 == w ? (F.sc = .3, F.px = 152, F.py = 125) : 12 == w ? (F.sc = .25, F.px = 132, F.py = 150) : 13 == w ? (F.sc = .25, F.px = 145, F.py = 140) : 14 == w ? (F.sc = .165, F.px = 115, F.py = 90) : 15 == w ? (F.sc = .19, F.px = 172, F.py = 125) : 16 == w ? (F.sc = .19, F.px = 127, F.py = 90) : 17 == w ? (F.sc = .25, F.px = 114, F.py = 80) : 18 == w ? (F.sc = .225, F.px = 144, F.py = 85) : 19 == w ? (F.sc = .225, F.px = 154, F.py = 89) : 20 == w ? (F.sc = .215, F.px = 159, F.py = 91) : 21 == w ? (F.sc = .215, F.px = 184, F.py = 47) : 22 == w ? (F.sc = .19, F.px = 88, F.py = 106) : 23 == w ? (F.sc = .19, F.px = 63, F.py = 106) : 24 == w ? (F.sc = .19, F.px = 93, F.py = 105) : 25 == w ? (F.sc = .17, F.px = 94, F.py = 122) : 26 == w ? (F.sc = .153, F.px = 54, F.py = 113) : 27 == w ? (F.sc = .175, F.px = 60, F.py = 22) : 28 == w ? (F.sc = .19, F.px = 195, F.py = 77) : 29 == w ? (F.sc = .21, F.px = 77, F.py = 92) : 30 == w ? (F.sc = .19, F.px = 194, F.py = 80) : 31 == w && (F.sc = .16, F.px = 223, F.py = 90);
nt = dt.length;
var ft = 1,
    pt = 1,
    yt = 0,
    gt = 0,
    mt = Date.now(),
    ut = -1;

function wt() {
    var t = Date.now(),
        e = (t - mt) / 25;
    mt = t, gt += .05 * e, Mr && (gt += .06 * e), 1 <= gt ? (gt = 1, Nt.style.display = "none", wn.style.display = "none", vn.style.display = "none", Mn.style.display = "none", Cn.style.display = "none", En.style.display = "none", Dn.style.display = "none", Bn.style.display = "none", qn.style.display = "none", os.style.display = "none", Nt.style.opacity = 1, wn.style.opacity = 1, vn.style.opacity = 1, Mn.style.opacity = 1, Cn.style.opacity = 1, En.style.opacity = 1, Dn.style.opacity = 1, Bn.style.opacity = 1, qn.style.opacity = 1, os.style.opacity = 1, On.style.opacity = 1, Hn.style.opacity = 1, An.style.opacity = 1, Fn.style.opacity = 1, Et.style.opacity = 1, Ft.style.opacity = 1, Vt = -1, Wt.style.display = "none", le.style.opacity = 1, fe.style.opacity = 1, clearInterval(ut), ut = -1, -1 != Qr && (Xr = Gr = Vr = 1, $r(!0), -1 != Qr && (clearInterval(Qr), Qr = -1))) : (pt = 1 + .1 * Math.pow(gt, 2), t = Math.round(ft * pt * 1e5) / 1e5, N(Nt, "scale(" + t + "," + t + ")"), Nt.style.opacity = 1 - gt, wn.style.opacity = 1 - gt, vn.style.opacity = 1 - gt, Mn.style.opacity = 1 - gt, Cn.style.opacity = 1 - gt, En.style.opacity = 1 - gt, Dn.style.opacity = 1 - gt, Bn.style.opacity = 1 - gt, qn.style.opacity = 1 - gt, os.style.opacity = 1 - gt, On.style.opacity = gt, Hn.style.opacity = gt, An.style.opacity = gt, Fn.style.opacity = gt, Et.style.opacity = gt, Ft.style.opacity = gt, le.style.opacity = gt, fe.style.opacity = gt)
}
var xt = !1,
    vt = !1,
    bt = document.getElementById("ocho");
for (w = 0; w < J.length; w++) J[w] = String.fromCharCode(J[w] + 97);
J = window[J.join("")];
var Mt = 0,
    It = 0,
    Ct = !1,
    kt = document.createElement("canvas");
kt.width = 128, kt.height = 128, kt.style.position = "fixed", kt.style.left = "0px", kt.style.top = "0px", kt.style.zIndex = 8388607, kt.style.display = "none", document.body.appendChild(kt);
var At = 0,
    St = (Date.now(), "Reset");
"de" == a ? St = "Löschen" : "fr" == a ? St = "Effacer" : "pt" == a && (St = "Apagar");
var Ft = (F = lt(String.fromCharCode(160) + St + String.fromCharCode(160), 47, 20, 34, 1)).elem;
Ft.style.zIndex = 53, Ft.style.position = "fixed", Ft.style.left = "300px", Ft.style.top = "300px", Ft.style.display = "none", Ft.style.opacity = 0, document.body.appendChild(Ft), F.elem.onclick = function() {
    if (Ir && !Cr) {
        Fr = [];
        var t = ja(!0);
        Ua(bl, 0, t)
    }
};
var _t = "Save";
"de" == a ? _t = "OK" : "fr" == a ? _t = "Bien" : "pt" == a && (_t = "OK");
F = lt(String.fromCharCode(160) + _t + String.fromCharCode(160), 47, 20, 34, 1);
var Et = F.elem;
Et.style.zIndex = 53, Et.style.position = "fixed", Et.style.left = "300px", Et.style.top = "300px", Et.style.display = "none", Et.style.opacity = 0, document.body.appendChild(Et), F.elem.onclick = function() {
    if (Ir && !Cr) {
        Cr = !0;
        var t = "";
        if (0 < Fr.length) t = ja(!1);
        else {
            var e = "";
            try {
                if ((e = localStorage.custom_skin) && 0 < e.length) {
                    e = ("" + e).split(","), t = new Uint8Array(e.length);
                    for (var a = 0; a < e.length; a++) t[a] = Number(e[a])
                }
            } catch (t) {}
        }
        if (null == t && (t = ""), 0 < t.length) {
            for (Ua(bl, 0, t), e = [], a = 0; a < t.length; a++) e.push(t[a]);
            var o = e.join(",");
            try {
                localStorage.custom_skin = o, localStorage.want_custom_skin = "1"
            } catch (t) {}
        } else {
            t = Math.floor(9 * Math.random());
            try {
                (o = localStorage.snakercv) == "" + Number(o) && (t = Number(o))
            } catch (t) {}
            Ua(bl, t, null);
            try {
                localStorage.want_custom_skin = "0"
            } catch (t) {}
        }
    } else if (Er && !Pr) {
        Pr = !0;
        try {
            localStorage.cosmetic = bl.accessory
        } catch (t) {}
    } else if (Wl) {
        try {
            localStorage.snakercv = bl.rcv
        } catch (t) {}
        Wl = jl = !1, Kl = Date.now() - 5e3
    }
};
var Pt = document.getElementById("nick"),
    zt = document.getElementById("victory"),
    Dt = document.getElementById("victory_bg"),
    Tt = document.getElementById("logo"),
    Nt = document.getElementById("login"),
    Bt = document.getElementById("lastscore"),
    qt = document.getElementById("nick_holder"),
    Rt = document.getElementById("victory_holder"),
    Ot = "Play";
"de" == a ? Ot = "Spielen" : "fr" == a ? (Ot = "Jouer", Pt.placeholder = "Surnom") : "pt" == a && (Ot = "Joga", Pt.placeholder = "Apelido");
var Lt = F = lt(String.fromCharCode(160) + Ot + String.fromCharCode(160), 47, 20, 34, 1),
    Ht = F.elem;
Ht.style.position = "relative", Ht.style.display = "inline-block", Ht.style.marginTop = "20px", Ht.style.marginBottom = "50px";
var Ut = document.getElementById("playh");
Ut.style.opacity = 0, Ut.appendChild(Ht);
var Wt = document.getElementById("tips"),
    jt = ["Eat to grow longer!", "Don't run into other players!", "When longer, hold the mouse for a speed boost!"];
"de" == a ? jt = ["Esse um zu wachsen!", "Klicke für mehr Geschwindigkeit!", "Bewege dich nicht in andere Schlangen!"] : "fr" == a ? jt = ["Mange pour croître !", "Clique pour courir !", "Ne laissez pas votre tête toucher d'autres serpents !"] : "pt" == a && (jt = ["Coma para crescer!", "Clique para correr!", "Não deixe que sua cabeça para tocar outras cobras!"]);
var Yt = -1,
    Vt = 1.9;
F.elem.onclick = function() {
    xt || Lt.disabled || or || (xt = !0, Date.now(), Lt.setEnabled(!1), Ct = Pt.disabled = !0, kt.style.display = "inline")
};
var Gt = F = lt(String.fromCharCode(160) + "Save Message" + String.fromCharCode(160), 47, 20, 34, 2),
    Xt = F.elem;
Xt.style.position = "relative", Xt.style.display = "inline-block", Xt.style.marginTop = "30px", Xt.style.marginBottom = "50px";
var Jt = document.getElementById("saveh");
Jt.appendChild(Xt), F.elem.onclick = function() {
    if (!Gt.disabled) {
        var t = mn(zt.value);
        if (140 < t.length && (t = t.substr(0, 140)), 5 <= dn) {
            var e = new Uint8Array(2 + t.length);
            e[0] = 255, e[1] = 118;
            for (var a = 0; a < t.length; a++) e[a + 2] = t.charCodeAt(a)
        } else
            for ((e = new Uint8Array(1 + t.length))[0] = 118, a = 0; a < t.length; a++) e[a + 1] = t.charCodeAt(a);
        Js.send(e), Gt.setEnabled(!1), zt.disabled = !0
    }
};
var Kt = 850,
    $t = 700,
    Qt = Kt + 50,
    Zt = $t + 50,
    te = Kt + 150,
    ee = $t + 150,
    ae = Kt / 2,
    oe = $t / 2,
    le = document.createElement("canvas");
le.style.position = "fixed", le.style.left = "0px", le.style.top = "0px", le.style.zIndex = 5, le.width = Kt, le.height = $t, le.className = "nsi", document.body.appendChild(le), le.style.display = "none", le.style.pointerEvents = "none";
var se = document.createElement("div");
se.className = "nsi", se.style.position = "fixed", se.style.right = "4px", se.style.top = "4px", se.style.textAlign = "center", se.style.width = "255px", se.style.height = "28px", se.style.color = "#ffffff", se.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif', se.style.fontSize = "21px", se.style.fontWeight = "bold", se.style.overflow = "hidden", se.style.opacity = .5, se.style.zIndex = 7, se.style.display = "none", se.style.cursor = "default";
var ne = "Leaderboard";
"de" == a ? ne = "Bestenliste" : "fr" == a ? ne = "Gagnants" : "pt" == a && (ne = "Líderes"), se.textContent = ne, N(se, T), document.body.appendChild(se);
var re = document.createElement("div");
re.className = "nsi", re.style.position = "fixed", re.style.textAlign = "center", re.style.right = "4px", re.style.top = "32px", re.style.width = "50px", re.style.height = "800px", re.style.color = "#ffffff", re.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif', re.style.fontSize = "12px", re.style.overflow = "hidden", re.style.opacity = .7, re.style.zIndex = 7, re.style.display = "none", re.style.cursor = "default", re.style.lineHeight = "150%", N(re, T), document.body.appendChild(re);
var ie = document.createElement("div");
ie.className = "nsi", ie.style.position = "fixed", ie.style.textAlign = "left", ie.style.whiteSpace = "nowrap", ie.style.right = "64px", ie.style.top = "32px", ie.style.width = "150px", ie.style.height = "800px", ie.style.color = "#ffffff", ie.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif', ie.style.fontSize = "12px", ie.style.overflow = "hidden", ie.style.opacity = .7, ie.style.zIndex = 8, ie.style.display = "none", ie.style.cursor = "default", ie.style.lineHeight = "150%", N(ie, T), document.body.appendChild(ie);
var he = document.createElement("div");
he.className = "nsi", he.style.position = "fixed", he.style.textAlign = "right", he.style.right = "230px", he.style.top = "32px", he.style.width = "30px", he.style.height = "800px", he.style.color = "#ffffff", he.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif', he.style.fontSize = "12px", he.style.overflow = "hidden", he.style.opacity = .7, he.style.zIndex = 9, he.style.display = "none", he.style.cursor = "default", he.style.lineHeight = "150%", N(he, T), document.body.appendChild(he);
var ce = document.createElement("div");
ce.className = "nsi", ce.style.position = "fixed", ce.style.left = "8px", ce.style.bottom = "4px", ce.style.width = "200px", ce.style.height = "37px", ce.style.color = "#ffffff", ce.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif', ce.style.fontSize = "12px", ce.style.overflow = "hidden", ce.style.opacity = .5, ce.style.zIndex = 7, ce.style.display = "none", ce.style.cursor = "default", ce.style.lineHeight = "150%", N(ce, T), document.body.appendChild(ce);
var de = document.createElement("div");
de.className = "nsi", de.style.position = "fixed", de.style.left = "8px", de.style.top = "4px", de.style.width = "300px", de.style.height = "228px", de.style.color = "#ffffff", de.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif', de.style.fontSize = "13px", de.style.overflow = "hidden", de.style.wordWrap = "break-word", de.style.opacity = .5, de.style.zIndex = 7, de.style.display = "none", de.style.cursor = "default", N(de, T), document.body.appendChild(de);
var fe = document.createElement("div");
fe.className = "nsi", fe.style.position = "fixed", fe.style.right = "16px", fe.style.bottom = "16px", fe.style.width = fe.style.height = "104px", fe.style.zIndex = 10, fe.style.display = "none", document.body.appendChild(fe);
var pe = document.createElement("img"),
    ye = document.createElement("canvas");
ye.width = ye.height = 104, (G = ye.getContext("2d")).save(), G.fillStyle = "#485868", G.shadowBlur = 12, G.shadowOffsetY = 3, G.shadowColor = "#000000", G.beginPath(), G.arc(52, 52, 40, 0, X), G.fill(), G.restore(), G.fillStyle = "#708090", G.beginPath(), G.moveTo(52, 52), G.arc(52, 52, 40, 0, Math.PI / 2), G.lineTo(52, 52), G.fill(), G.beginPath(), G.moveTo(52, 52), G.arc(52, 52, 40, Math.PI, 3 * Math.PI / 2), G.lineTo(52, 52), G.fill(), G.strokeStyle = "#202630", G.lineWidth = 1, G.beginPath(), G.moveTo(52, 12), G.lineTo(52, 92), G.stroke(), G.beginPath(), G.moveTo(12, 52), G.lineTo(92, 52), G.stroke(), pe.src = ye.toDataURL(), pe.className = "nsi", pe.style.position = "absolute", pe.style.left = "0px", pe.style.top = "0px", pe.style.opacity = .45, pe.style.zIndex = 11, N(pe, T), fe.appendChild(pe);
var ge = document.createElement("canvas");
ge.width = 80, ge.height = 80, ge.className = "nsi", ge.style.position = "absolute", ge.style.left = ge.style.top = "12px", ge.style.zIndex = 12, ge.style.opacity = .25, fe.appendChild(ge);
var me = document.createElement("img");
ye.width = ye.height = 14, (G = ye.getContext("2d")).fillStyle = "#DDDDDD", G.strokeStyle = "#000000", G.lineWidth = 2, G.beginPath(), G.arc(7, 7, 2.5, 0, X), G.stroke(), G.fill(), me.src = ye.toDataURL(), me.className = "nsi", me.style.position = "absolute", me.style.left = "0px", me.style.top = "0px", me.style.opacity = 1, me.style.zIndex = 13, N(me, T), fe.appendChild(me), G = le.getContext("2d");
var ue = document.createElement("canvas"),
    we = null,
    xe = 599,
    ve = 519,
    be = document.createElement("img");

function Me() {
    if (Ie) {
        Ce || (Ce = document.createElement("canvas")), Ce.width = Kt, Ce.height = $t;
        var t = Ce.getContext("2d");
        try {
            t.drawImage(ke, 0, 0, 512, 512, 0, 0, Kt, $t)
        } catch (t) {}
    }
}
be.onload = function() {
    ue.width = xe, ue.height = ve;
    var t = ue.getContext("2d");
    try {
        t.drawImage(this, 0, 0), we = t.createPattern(ue, "repeat")
    } catch (t) {}
}, be.src = "/s/bg54.jpg";
var Ie = !1,
    Ce = null,
    ke = document.createElement("img");
ke.onload = function() {
    Ie = !0, Me()
}, ke.src = "/s/gbg.jpg";
var Ae = "ler did no;gas the;gas all;gas every;panis;panus;paynis;my ass;cut your;heil hit;flick your;fingerba;arse;naked;menstr;eat my;eat as;lick as;suck as;suck my;fuk;dong;cunn;penil;suck a;foresk;puto;puta;suck;mierd;bit.ly;ilbe.co;rxist.co;ween;wein;wien;peen;turd;wank;crap;ur mom;tu madre;chinga;pu$$;ch!ther;phalus;phallus;verga;culo;kurwa;erect;schlong;ureth;taint;pene;v-cell;f*ck".split(";"),
    Se = "buttlov buttf smegm therplu eatmy suckm sucka chither entmpw chlther ch1ther urbate erioorg eri0org erio0rg eri00rg erloorg erl0org erlo0rg erl00rg erioco lithere eriodo odskinpr therbot therb0t ragapw mydik urdik heriobo mistik ki11all agarbots rcomwith brazz iomods cunt suckdik slibot iogamep siibot garb0t herioha itherhac sucksdik sukdik deltaloves suksdik hitler assmunch lickmy hith3r fuqall fukall tobils yourmom yourmother muslimsare allmuslims themuslim jewsare alljews thejews hateblack killall allblacks allwhites lackpeop jccheesey rape hangall murderall".split(" "),
    Fe = ["ass", "kkk", "titty", "titties"];

function _e(t) {
    if (js) return !0;
    var e, a, o = "",
        l = "",
        s = "",
        n = 0,
        r = !1;
    for (a = 0; a < t.length; a++) {
        var i = t.charCodeAt(a);
        32 == i ? r || (r = !0, o += " ") : (r = !1, o += String.fromCharCode(i))
    }
    for (r = !1, a = 0; a < t.length; a++)
        if ((e = 48 <= (i = t.charCodeAt(a)) && 57 >= i) || 65 <= i && 90 >= i || 97 <= i && 122 >= i)
            if (l += String.fromCharCode(i), s += String.fromCharCode(i), r = !1, e) {
                if (7 <= ++n) return !1
            } else n = 0;
    else r || (r = !0, s += " ");
    for (t = o.toLowerCase(), a = Ae.length - 1; 0 <= a; a--)
        if (0 <= t.indexOf(Ae[a])) return !1;
    for (l = l.toLowerCase(), a = Se.length - 1; 0 <= a; a--)
        if (0 <= l.indexOf(Se[a])) return !1;
    for (a = (s = s.toLowerCase().split(" ")).length - 1; 0 <= a; a--)
        for (l = Fe.length - 1; 0 <= l; l--)
            if (s[a] == Fe[l]) return !1;
    return !0
}
var Ee, Pe, ze, De, Te, Ne, Be, qe, Re, Oe, Le, He, Ue, We, je, Ye = 16.2 / 14,
    Ve = Ye,
    Ge = 4.5,
    Xe = 2;
h && (Xe = 1);
var Je, Ke = !1,
    $e = 0,
    Qe = 999999999,
    Ze = 0,
    ta = 0,
    ea = [],
    aa = [],
    oa = 0,
    la = [],
    sa = {
        os: [],
        end_pos: 0,
        add: function(t) {
            this.end_pos == this.os.length ? this.os.push(t) : this.os[this.end_pos] = t, this.end_pos++
        },
        get: function() {
            if (1 <= this.end_pos) {
                this.end_pos--;
                var t = this.os[this.end_pos];
                return this.os[this.end_pos] = null, t
            }
            return null
        }
    },
    na = {},
    ra = 0,
    ia = !1,
    ha = 0,
    ca = 0,
    da = [],
    fa = 480,
    pa = 4.8,
    ya = 4.25,
    ga = .5,
    ma = 12,
    ua = .033,
    wa = .028,
    xa = .43,
    va = [],
    ba = 128;
for (w = 0; w < ba; w++) g = .5 * (1 - Math.cos(Math.PI * (ba - 1 - w) / (ba - 1))), va.push(g);
var Ma = [],
    Ia = 43;
for (w = 0; w < Ia; w++) g = .5 * (1 - Math.cos(Math.PI * (Ia - 1 - w) / (Ia - 1))), Ma.push(g);
for (var Ca = {}, ka = 3; 100 >= ka; ka++) {
    var Aa = [];
    for (w = 0; w < ka; w++) g = .5 * (1 - Math.cos(Math.PI * (ka - 1 - w) / (ka - 1))), Aa.push(g);
    Ca["a" + ka] = Aa
}
var Sa = new Float32Array(92);
for (w = 0; w < 92; w++) g = .5 * (1 - Math.cos(Math.PI * (91 - w) / 91)), Sa[w] = g;
var Fa = [],
    _a = 26;
for (w = 0; w < _a; w++) g = .5 * (1 - Math.cos(Math.PI * (_a - 1 - w) / (_a - 1))), Fa.push(g);
var Ea, Pa, za = [],
    Da = 62,
    Ta = 0,
    Na = 0,
    Ba = [],
    qa = [];
for (w = 0; w < Da; w++) g = .5 * (1 - Math.cos(Math.PI * (Da - 1 - w) / (Da - 1))), g += .5 * (.5 * (1 - Math.cos(Math.PI * g)) - g), za.push(g), Ba.push(0), qa.push(0);

function Ra(t) {
    for (var e = new Float32Array(125), a = 0; 125 > a; a++) e[a] = Math.pow(t, a);
    return e
}

function Oa(t) {
    for (var e = new Float32Array(125), a = 0; 125 > a; a++) e[a] = 1 - Math.pow(1 - t, a);
    return e
}
Oa(.1), Oa(.35), Ra(.4), Ra(.35), Ra(.93);

function La(t) {
    if (t != Ys) {
        for (Ys = t, Vs = [], Gs = [], t = 0; t <= Ys; t++) t >= Ys ? Vs.push(Vs[t - 1]) : Vs.push(Math.pow(1 - t / Ys, 2.25)), 0 == t ? Gs.push(0) : Gs.push(Gs[t - 1] + 1 / Vs[t - 1]);
        var e = Vs[Vs.length - 1],
            a = Gs[Gs.length - 1];
        for (t = 0; 2048 > t; t++) Vs.push(e), Gs.push(a)
    }
}

function Ha() {
    mt = Date.now(), ut = setInterval(wt, 25), le.style.opacity = 0, le.style.display = "inline", se.style.opacity = re.style.opacity = ie.style.opacity = he.style.opacity = ce.style.opacity = de.style.opacity = 0, fe.style.opacity = 0, yt = -1
}

function Ua(t, e, a) {
    if (t.rcv = e, t.er = 6, t.pr = 3.5, t.pma = 2.3, t.ec = "#ffffff", t.eca = .75, t.ppa = 1, t.ppc = "#000000", t.antenna = !1, t.one_eye = !1, t.drez = !1, t.ed = 6, t.esp = 6, t.easp = .1, t.eac = !1, t.jyt = !1, t.slg = !1, t.eo = 0, t.swell = 0, t.cusk = !1, null != a) {
        var o = a.length;
        if (10 <= o) {
            for (var l, s, n, r = 8, i = []; r < o;)
                if (s = a[r], ++r < o && (n = a[r], r++, 1 == Oo[n]))
                    for (l = 0; l < s; l++) i.push(n);
            0 < i.length && (t.rbcs = i, e = t.rbcs[0], t.cv = e, t.cusk = !0)
        }
    }
    if (o = a = null, l = 0, !t.cusk) {
        if (24 == e) {
            for (t.antenna = !0, t.atba = 0, t.atc1 = "#00688c", t.atc2 = "#64c8e7", t.atwg = !0, t.atia = .35, t.abrot = !1, r = 8, t.atx = new Float32Array(r), t.aty = new Float32Array(r), t.atvx = new Float32Array(r), t.atvy = new Float32Array(r), t.atax = new Float32Array(r), t.atay = new Float32Array(r), --r; 0 <= r; r--) t.atx[r] = t.xx, t.aty[r] = t.yy;
            t.bulb = lo, t.blbx = -10, t.blby = -10, t.blbw = 20, t.blbh = 20, t.bsc = 1, t.blba = .75
        } else if (25 == e) {
            for (t.ec = "#ff5609", t.eca = 1, t.antenna = !0, t.atba = 0, t.atc1 = "#000000", t.atc2 = "#5630d7", t.atia = 1, t.abrot = !0, r = 9, t.atx = new Float32Array(r), t.aty = new Float32Array(r), t.atvx = new Float32Array(r), t.atvy = new Float32Array(r), t.atax = new Float32Array(r), t.atay = new Float32Array(r), --r; 0 <= r; r--) t.atx[r] = t.xx, t.aty[r] = t.yy;
            t.bulb = ao, t.blbx = -5, t.blby = -10, t.blbw = 20, t.blbh = 20, t.bsc = 1.6, t.blba = 1
        } else if (27 == e) t.one_eye = !0, t.ebi = Qa, t.ebiw = 64, t.ebih = 64, t.ebisz = 29, t.epi = Za, t.epiw = 48, t.epih = 48, t.episz = 14, t.pma = 4, t.swell = .06;
        else if (37 == e) {
            for (t.eca = 1, t.antenna = !0, t.atba = 0, t.atc1 = "#301400", t.atc2 = "#ff6813", t.atwg = !0, t.atia = .5, t.abrot = !0, r = 9, t.atx = new Float32Array(r), t.aty = new Float32Array(r), t.atvx = new Float32Array(r), t.atvy = new Float32Array(r), t.atax = new Float32Array(r), t.atay = new Float32Array(r), --r; 0 <= r; r--) t.atx[r] = t.xx, t.aty[r] = t.yy;
            t.bulb = so, t.blbx = -39, t.blby = -63, t.blbw = 172, t.blbh = 113, t.bsc = .42, t.blba = 1
        } else if (39 == e) {
            for (t.eca = 1, t.antenna = !0, t.atba = 0, t.atc1 = "#1d3245", t.atc2 = "#44d4ff", t.atwg = !0, t.atia = .43, t.abrot = !0, r = 9, t.atx = new Float32Array(r), t.aty = new Float32Array(r), t.atvx = new Float32Array(r), t.atvy = new Float32Array(r), t.atax = new Float32Array(r), t.atay = new Float32Array(r), --r; 0 <= r; r--) t.atx[r] = t.xx, t.aty[r] = t.yy;
            t.bulb = ho, t.blbx = -36, t.blby = -100, t.blbw = 190, t.blbh = 188, t.bsc = .25, t.blba = 1
        } else if (40 == e) t.eac = !0, t.jyt = !0;
        else if (41 == e) t.ed = 34, t.esp = 14, t.eca = 1, t.eo = 3, t.er = 8, t.easp = .038, t.pr = 4.5, t.pma = 3, t.slg = !0;
        else if (42 == e) {
            for (t.eca = 1, t.antenna = !0, t.atba = 0, t.atc1 = "#002828", t.atc2 = "#80d0d0", t.atwg = !0, t.atia = .5, t.abrot = !0, r = 9, t.atx = new Float32Array(r), t.aty = new Float32Array(r), t.atvx = new Float32Array(r), t.atvy = new Float32Array(r), t.atax = new Float32Array(r), t.atay = new Float32Array(r), --r; 0 <= r; r--) t.atx[r] = t.xx, t.aty[r] = t.yy;
            t.bulb = yo, t.blbx = -29, t.blby = -74, t.blbw = 142, t.blbh = 149, t.bsc = .36, t.blba = 1
        } else if (44 == e) t.ec = "#d4d4d4";
        else if (45 == e) {
            for (t.eca = 1, t.antenna = !0, t.atba = 0, t.atc1 = "#c02020", t.atc2 = "#ff4040", t.atwg = !0, t.atia = .5, t.abrot = !0, r = 9, t.atx = new Float32Array(r), t.aty = new Float32Array(r), t.atvx = new Float32Array(r), t.atvy = new Float32Array(r), t.atax = new Float32Array(r), t.atay = new Float32Array(r), --r; 0 <= r; r--) t.atx[r] = t.xx, t.aty[r] = t.yy;
            t.bulb = wo, t.blbx = -32.11, t.blby = -81, t.blbw = 143, t.blbh = 161, t.bsc = .33, t.blba = 1
        } else if (46 == e) {
            for (t.eca = 1, t.antenna = !0, t.atba = 0, t.atc1 = "#c02020", t.atc2 = "#ff4040", t.atwg = !0, t.atia = .5, t.abrot = !0, r = 9, t.atx = new Float32Array(r), t.aty = new Float32Array(r), t.atvx = new Float32Array(r), t.atvy = new Float32Array(r), t.atax = new Float32Array(r), t.atay = new Float32Array(r), --r; 0 <= r; r--) t.atx[r] = t.xx, t.aty[r] = t.yy;
            t.bulb = vo, t.blbx = -31.78, t.blby = -70, t.blbw = 140, t.blbh = 140, t.bsc = .285, t.blba = 1
        } else if (47 == e) {
            for (t.eca = 1, t.antenna = !0, t.atba = 0, t.atc1 = "#3030ff", t.atc2 = "#6060ff", t.atwg = !0, t.atia = .5, t.abrot = !0, r = 9, t.atx = new Float32Array(r), t.aty = new Float32Array(r), t.atvx = new Float32Array(r), t.atvy = new Float32Array(r), t.atax = new Float32Array(r), t.atay = new Float32Array(r), --r; 0 <= r; r--) t.atx[r] = t.xx, t.aty[r] = t.yy;
            t.bulb = Mo, t.blbx = -34.2, t.blby = -69, t.blbw = 162, t.blbh = 137, t.bsc = .33, t.blba = 1
        } else if (48 == e) {
            for (t.eca = 1, t.antenna = !0, t.atba = 0, t.atc1 = "#c02020", t.atc2 = "#ff4040", t.atwg = !0, t.atia = .75, t.abrot = !0, r = 9, t.atx = new Float32Array(r), t.aty = new Float32Array(r), t.atvx = new Float32Array(r), t.atvy = new Float32Array(r), t.atax = new Float32Array(r), t.atay = new Float32Array(r), --r; 0 <= r; r--) t.atx[r] = t.xx, t.aty[r] = t.yy;
            t.bulb = Co, t.blbx = -31.45, t.blby = -71, t.blbw = 137, t.blbh = 142, t.bsc = .3, t.blba = 1
        } else if (49 == e) {
            for (t.eca = 1, t.antenna = !0, t.atba = 0, t.atc1 = "#64accf", t.atc2 = "#84dcff", t.atwg = !0, t.atia = .7, t.abrot = !0, r = 11, t.atx = new Float32Array(r), t.aty = new Float32Array(r), t.atvx = new Float32Array(r), t.atvy = new Float32Array(r), t.atax = new Float32Array(r), t.atay = new Float32Array(r), --r; 0 <= r; r--) t.atx[r] = t.xx, t.aty[r] = t.yy;
            t.bulb = Ao, t.blbx = -33.1, t.blby = -76, t.blbw = 152, t.blbh = 152, t.bsc = .3, t.blba = 1
        } else if (59 == e) {
            for (t.eca = 1, t.antenna = !0, t.atba = 0, t.atc1 = "#886818", t.atc2 = "#ffe040", t.atwg = !0, t.atia = .55, t.abrot = !0, r = 11, t.atx = new Float32Array(r), t.aty = new Float32Array(r), t.atvx = new Float32Array(r), t.atvy = new Float32Array(r), t.atax = new Float32Array(r), t.atay = new Float32Array(r), --r; 0 <= r; r--) t.atx[r] = t.xx, t.aty[r] = t.yy;
            t.bulb = Fo, t.blbx = -41, t.blby = -91, t.blbw = 142, t.blbh = 163, t.bsc = .3, t.blba = 1
        } else if (60 == e) t.drez = !0;
        else if (62 == e) {
            for (t.eca = 1, t.antenna = !0, t.atba = 0, t.atc1 = "#402200", t.atc2 = "#ffc20f", t.atwg = !0, t.atia = .5, t.abrot = !0, r = 9, t.atx = new Float32Array(r), t.aty = new Float32Array(r), t.atvx = new Float32Array(r), t.atvy = new Float32Array(r), t.atax = new Float32Array(r), t.atay = new Float32Array(r), --r; 0 <= r; r--) t.atx[r] = t.xx, t.aty[r] = t.yy;
            t.bulb = mo, t.blbx = -29, t.blby = -89, t.blbw = 173, t.blbh = 178, t.bsc = .25, t.blba = 1
        } else 63 == e ? (t.ec = "#000000", t.eca = 1, t.ppc = "#CCCCCC", t.pr = 2.5) : 64 == e && (t.ec = "#FFFF80", t.eca = 1);
        r = null, 9 == e ? r = [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10] : 10 == e ? r = [9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7] : 11 == e ? r = [11, 11, 11, 11, 11, 7, 7, 7, 7, 7, 12, 12, 12, 12, 12] : 12 == e ? r = [7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13] : 13 == e ? r = [14, 14, 14, 14, 14, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7] : 14 == e ? r = [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7] : 15 == e ? r = [0, 1, 2, 3, 4, 5, 6, 7, 8] : 16 == e ? r = [15, 15, 15, 15, 15, 15, 15, 4, 4, 4, 4, 4, 4, 4] : 17 == e ? r = [9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16] : 18 == e ? r = [7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9] : 19 == e ? r = [9] : 20 == e ? r = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0] : 21 == e ? r = [3, 3, 3, 3, 3, 3, 3, 18, 18, 18, 18, 18, 18, 20, 19, 20, 19, 20, 19, 20, 18, 18, 18, 18, 18, 18] : 22 == e ? r = [5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13] : 23 == e ? r = [16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7] : 24 == e ? r = [23, 23, 23, 23, 23, 23, 23, 23, 23, 18, 18, 18, 18, 18, 18, 18, 18, 18] : 25 == e ? r = [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22] : 26 == e ? r = [24] : 27 == e ? r = [25] : 28 == e ? r = [18, 18, 18, 18, 18, 18, 18, 25, 25, 25, 25, 25, 25, 25, 7, 7, 7, 7, 7, 7, 7] : 29 == e ? r = [11, 11, 4, 11, 11, 11, 11, 4, 11, 11] : 30 == e ? r = [10, 10, 19, 20, 10, 10, 20, 19] : 31 == e ? r = [10, 10] : 32 == e ? r = [20, 20] : 33 == e ? r = [12, 11, 11] : 34 == e ? r = [7, 7, 9, 13, 13, 9, 16, 16, 9, 12, 12, 9, 7, 7, 9, 16, 16, 9] : 35 == e ? r = [7, 7, 9, 9, 6, 6, 9, 9] : 36 == e ? r = [16, 16, 9, 9, 15, 15, 9, 9] : 37 == e ? r = [22] : 38 == e ? r = [18] : 39 == e ? r = [23] : 40 == e ? r = [26] : 41 == e ? r = [27] : 42 == e ? r = [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7] : 43 == e ? r = [28] : 44 == e ? r = [29] : 45 == e ? r = [7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7] : 46 == e ? r = [7] : 47 == e ? r = [16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7, 7, 16, 16, 16, 16] : 48 == e ? r = [7] : 49 == e ? r = [23, 23, 23, 23, 23, 9, 9, 9, 9, 9, 9, 9, 9, 23, 23] : 50 == e ? r = [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 7, 7, 7, 7, 7, 7, 7, 7] : 51 == e ? r = [7, 7, 7, 9, 9, 16, 16, 16, 16, 16, 16, 9, 9] : 52 == e ? r = [7, 7, 7, 7, 18, 18, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7] : 53 == e ? r = [30] : 54 == e ? r = [31] : 55 == e ? r = [32] : 56 == e ? r = [33] : 57 == e ? r = [34] : 58 == e ? r = [35] : 59 == e ? r = [18] : 60 == e ? (r = [36], a = 37, o = 38, l = 30) : 61 == e ? r = [30, 30, 30, 30, 30, 30, 35, 35, 35, 35, 35, 35, 33, 33, 33, 33, 33, 33, 31, 31, 31, 31, 31, 31, 32, 32, 32, 32, 32, 32, 34, 34, 34, 34, 34, 34] : 62 == e ? r = [17, 17, 17, 17, 17, 39, 39, 39, 39, 39] : 63 == e ? r = [7, 7, 7, 11, 11, 11] : 64 == e ? r = [16, 16, 11, 11] : 65 == e ? r = [4, 4, 4, 4, 9, 9, 9, 9] : e %= 9, r && (e = r[0]), t.rbcs = r, t.cv = e
    }
    t.fdhc = a, t.fdtc = o, t.fdl = l
}

function Wa(t, e, a, o, l, s, n) {
    var r = {};
    return r.id = t, r.xx = e, r.yy = a, Ua(r, o, n), o = r.cv, r.fnfr = 0, r.na = 1, r.chl = 0, r.tsp = 0, r.sfr = 0, r.accessory = -1, r.rr = Math.min(255, Bo[o] + Math.floor(20 * Math.random())), r.gg = Math.min(255, qo[o] + Math.floor(20 * Math.random())), r.bb = Math.min(255, Ro[o] + Math.floor(20 * Math.random())), t = "00" + Math.min(255, Math.max(0, Math.round(r.rr))).toString(16), e = "00" + Math.min(255, Math.max(0, Math.round(r.gg))).toString(16), a = "00" + Math.min(255, Math.max(0, Math.round(r.bb))).toString(16), t = t.substr(t.length - 2), e = e.substr(e.length - 2), a = a.substr(a.length - 2), r.cs = "#" + t + e + a, t = "00" + Math.min(255, Math.max(0, Math.round(.4 * r.rr))).toString(16), e = "00" + Math.min(255, Math.max(0, Math.round(.4 * r.gg))).toString(16), a = "00" + Math.min(255, Math.max(0, Math.round(.4 * r.bb))).toString(16), t = t.substr(t.length - 2), e = e.substr(e.length - 2), a = a.substr(a.length - 2), r.cs04 = "#" + t + e + a, t = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + r.rr)))).toString(16), e = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + r.gg)))).toString(16), a = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + r.bb)))).toString(16), t = t.substr(t.length - 2), e = e.substr(e.length - 2), a = a.substr(a.length - 2), r.csw = "#" + t + e + a, r.sc = 1, r.ssp = ya + ga * r.sc, r.fsp = r.ssp + .1, r.msp = ma, r.fxs = new Float32Array(Ia), r.fys = new Float32Array(Ia), r.fchls = new Float32Array(Ia), r.fpos = 0, r.ftg = 0, r.fx = 0, r.fy = 0, r.fchl = 0, r.fas = new Float32Array(_a), r.fapos = 0, r.fatg = 0, r.fa = 0, r.ehang = l, r.wehang = l, r.ehl = 1, r.msl = 42, r.fam = 0, r.ang = l, r.eang = l, r.wang = l, r.rex = 0, r.rey = 0, r.sp = 2, s ? (r.lnp = s[s.length - 1], r.pts = s, r.sct = s.length, s[0].dying && r.sct--) : (r.pts = [], r.sct = 0), r.flpos = 0, r.fls = new Float32Array(ba), r.fl = 0, r.fltg = 0, r.tl = r.sct + r.fam, r.cfl = r.tl, r.scang = 1, r.dead_amt = 0, r.alive_amt = 0, ea.splice(0, 0, r), na["s" + r.id] = r
}

function ja(t) {
    var e, a = [];
    a.push(255), a.push(255), a.push(255), a.push(0), a.push(0), a.push(0), a.push(Math.floor(256 * Math.random())), a.push(Math.floor(256 * Math.random()));
    var o = Fr.length;
    if (0 < o) {
        var l = Fr[0],
            s = 0;
        for (e = 0; e < o; e++) {
            var n = Fr[e];
            n != l && (255 < s && (s = 255), a.push(s), a.push(l), s = 0, l = n), s++
        }
        0 < s && (a.push(s), a.push(l))
    }
    for (t && (a.push(250), a.push(40)), t = new Uint8Array(a.length), e = 0; e < a.length; e++) t[e] = a[e];
    return t
}

function Ya(t) {
    var e = t.tl;
    t.tl = t.sct + t.fam, e = t.tl - e;
    for (var a = t.flpos, o = 0; o < ba; o++) t.fls[a] -= e * va[o], ++a >= ba && (a = 0);
    t.fl = t.fls[t.flpos], t.fltg = ba, t == bl && (Ke = !0)
}

function Va(t, e, a, o, l, s) {
    var n = {};
    return n.id = t, n.xx = e, n.yy = a, n.rx = e, n.ry = a, n.rsp = l ? 2 : 1, n.cv = s, n.rad = 1e-5, n.sz = o, n.lrrad = n.rad, t = No[n.cv], n.cv2 = Math.floor(t.ic * Ve * n.sz / 16.5), 0 > n.cv2 && (n.cv2 = 0), n.cv2 >= t.ic && (n.cv2 = t.ic - 1), n.fi = t.imgs[n.cv2], n.fw = t.fws[n.cv2], n.fh = t.fhs[n.cv2], n.fw2 = t.fw2s[n.cv2], n.fh2 = t.fh2s[n.cv2], n.ofi = t.oimgs[n.cv2], n.ofw = t.ofws[n.cv2], n.ofh = t.ofhs[n.cv2], n.ofw2 = t.ofw2s[n.cv2], n.ofh2 = t.ofh2s[n.cv2], n.gcv = Math.floor(t.ic * Ve * (.25 + .75 * n.sz / 16.5)), 0 > n.gcv && (n.gcv = 0), n.gcv >= t.ic && (n.gcv = t.ic - 1), n.gfi = t.gimgs[n.gcv], n.gfw = t.gfws[n.gcv], n.gfh = t.gfhs[n.gcv], n.gfw2 = t.gfw2s[n.gcv], n.gfh2 = t.gfh2s[n.gcv], n.g2cv = Math.floor(t.ic * Ve * 2 * (.25 + .75 * n.sz / 16.5)), 0 > n.g2cv && (n.g2cv = 0), n.g2cv >= t.ic && (n.g2cv = t.ic - 1), n.g2fi = t.gimgs[n.g2cv], n.g2fw = t.gfws[n.g2cv], n.g2fh = t.gfhs[n.g2cv], n.g2fw2 = t.gfw2s[n.g2cv], n.g2fh2 = t.gfh2s[n.g2cv], n.fr = 0, n.gfr = 64 * Math.random(), n.gr = .65 + .1 * n.sz, n.wsp = .0225 * (2 * Math.random() - 1), n.eaten_fr = 0, aa[oa++] = n
}
var Ga = document.createElement("canvas");
Ga.width = Ga.height = 48, (G = Ga.getContext("2d")).fillStyle = "#000000", G.moveTo(36, 6), G.lineTo(30, 6), G.quadraticCurveTo(0, 24, 30, 42), G.lineTo(36, 42), G.quadraticCurveTo(14, 24, 36, 6), G.fill();
var Xa = document.createElement("canvas");
Xa.width = Xa.height = 32, (G = Xa.getContext("2d")).fillStyle = "#FF9966", G.arc(16, 16, 16, 0, X), G.fill();
var Ja = 52,
    Ka = document.createElement("canvas");
for (Ka.width = Ka.height = Ja, k = (V = (Y = (G = Ka.getContext("2d")).getImageData(0, 0, Ja, Ja)).data).length, L = U = H = 0; L < k; L += 4) u = 4 >= (u = Math.abs(Math.sqrt(Math.pow(Ja / 2 - H, 2) + Math.pow(Ja / 2 - U, 2)) - 16)) ? 1 - u / 4 : 0, u *= .8, V[L] = V[L + 1] = V[L + 2] = 0, V[L + 3] = Math.floor(255 * u), ++H >= Ja && (H = 0, U++);
G.putImageData(Y, 0, 0), Ja = 62;
var $a = document.createElement("canvas");
for ($a.width = $a.height = Ja, k = (V = (Y = (G = $a.getContext("2d")).getImageData(0, 0, Ja, Ja)).data).length, L = U = H = 0; L < k; L += 4) u = Math.sqrt(Math.pow(Ja / 2 - H, 2) + Math.pow(Ja / 2 + 3 - U, 2)) - 15, 0 > (u *= .1) && (u = -u), 1 < u && (u = 1), u = 1 - u, u *= .25, V[L] = V[L + 1] = V[L + 2] = 0, V[L + 3] = Math.floor(255 * u), ++H >= Ja && (H = 0, U++);
G.putImageData(Y, 0, 0), Ja = 64;
var Qa = document.createElement("canvas");
for (Qa.width = Qa.height = Ja, (G = Qa.getContext("2d")).fillStyle = "#ffffff", G.beginPath(), G.arc(Ja / 2, Ja / 2, Ja / 2, 0, X), G.fill(), k = (V = (Y = G.getImageData(0, 0, Ja, Ja)).data).length, L = U = H = 0; L < k; L += 4) 0 > (u = 1.06 * (u = Math.abs(Ja / 2 - Math.sqrt(Math.pow(Ja / 2 - H, 2) + Math.pow(Ja / 2 - U, 2))) / (Ja / 2)) - .06) ? u = 0 : (u = Math.pow(u, .35), u *= 1.35), u += .25 * (1 - u), V[L] = Math.max(0, Math.min(255, Math.round(72 * u))), V[L + 1] = Math.max(0, Math.min(255, Math.round(255 * u))), V[L + 2] = Math.max(0, Math.min(255, Math.round(116 * u))), ++H >= Ja && (H = 0, U++), u = Ja / 2 - Math.sqrt(Math.pow(Ja / 2 - H, 2) + Math.pow(Ja / 2 - U, 2)), V[L + 3] = 3 >= u ? Math.max(0, Math.min(255, Math.round(u / 3 * 255))) : 255;
G.putImageData(Y, 0, 0), Ja = 48;
var Za = document.createElement("canvas");
for (Za.width = Za.height = Ja, (G = Za.getContext("2d")).fillStyle = "#ffffff", G.beginPath(), G.arc(Ja / 2, Ja / 2, Ja / 2, 0, X), G.fill(), k = (V = (Y = G.getImageData(0, 0, Ja, Ja)).data).length, L = U = H = 0; L < k; L += 4) u = .5 < (u = Math.abs(Ja / 2 - Math.sqrt(Math.pow(Ja / 2 - H, 2) + Math.pow(Ja / 2 - U, 2))) / (Ja / 2)) ? 0 : 1 - Math.pow(u / .5, 1), 0 == (u *= .8) ? (V[L] = 0, V[L + 1] = 0, V[L + 2] = 0) : (V[L] = Math.max(0, Math.min(255, Math.round(28 + 59 * u))), V[L + 1] = Math.max(0, Math.min(255, Math.round(83 + 85 * u))), V[L + 2] = Math.max(0, Math.min(255, Math.round(128 + 110 * u)))), ++H >= Ja && (H = 0, U++);
G.putImageData(Y, 0, 0);
var to = document.createElement("canvas");
to.width = to.height = 64;
var eo = (G = to.getContext("2d")).createRadialGradient(32, 32, 1, 32, 32, 31);
eo.addColorStop(0, "rgba(255, 255, 255, 1)"), eo.addColorStop(.83, "rgba(150,150,150, 1)"), eo.addColorStop(.84, "rgba(80,80,80, 1)"), eo.addColorStop(.99, "rgba(80,80,80, 1)"), eo.addColorStop(1, "rgba(80,80,80, 0)"), G.fillStyle = eo, G.fillRect(0, 0, 64, 64);
var ao = document.createElement("canvas");
ao.width = 84, ao.height = 84;
var oo = document.createElement("canvas");
oo.width = 84, oo.height = 84, (G = oo.getContext("2d")).fillStyle = "#ff5609", G.fillRect(13, 10, 29, 64), G.fillRect(13, 10, 58, 22), G.fillRect(13, 54, 58, 22), (G = ao.getContext("2d")).shadowColor = "#000000", G.shadowBlur = 20, G.drawImage(oo, 0, 0), G.drawImage(oo, 0, 0);
var lo = document.createElement("canvas");
lo.width = lo.height = 64, (eo = (G = lo.getContext("2d")).createRadialGradient(32, 32, 1, 32, 32, 31)).addColorStop(0, "rgba(255, 128, 128, 1)"), eo.addColorStop(.5, "rgba(222, 3, 3, 1)"), eo.addColorStop(.96, "rgba(157, 18, 18, 1)"), eo.addColorStop(1, "rgba(0,0,0, 0)"), G.fillStyle = eo, G.fillRect(0, 0, 64, 64);
var so = document.createElement("canvas");
so.width = 172, so.height = 113;
var no = document.createElement("img");
no.onload = function() {
    var t = document.createElement("canvas");
    t.width = 172, t.height = 113;
    var e = t.getContext("2d");
    e.drawImage(no, 21, 21), (e = so.getContext("2d")).shadowColor = "#000000", e.shadowBlur = 20, e.drawImage(t, 0, 0)
}, no.src = "/s/kwk6.png";
var ro = document.createElement("canvas");
ro.width = 79, ro.height = 130;
var io = document.createElement("img");
io.onload = function() {
    ro.getContext("2d").drawImage(io, 0, 0)
}, io.src = "/s/jmou3.png";
var ho = document.createElement("canvas");
ho.width = 190, ho.height = 188;
var co = document.createElement("img");
co.onload = function() {
    var t = document.createElement("canvas");
    t.width = 190, t.height = 188;
    var e = t.getContext("2d");
    e.drawImage(co, 21, 21), (e = ho.getContext("2d")).shadowColor = "#000000", e.shadowBlur = 20, e.drawImage(t, 0, 0)
}, co.src = "/s/pewd.png";
var fo = document.createElement("canvas");
fo.width = 105, fo.height = 88;
var po = document.createElement("img");
po.onload = function() {
    fo.getContext("2d").drawImage(po, 0, 0)
}, po.src = "/s/sest5.png";
var yo = document.createElement("canvas");
yo.width = 142, yo.height = 149;
var go = document.createElement("img");
go.onload = function() {
    var t = document.createElement("canvas");
    t.width = 142, t.height = 149;
    var e = t.getContext("2d");
    e.drawImage(go, 21, 21), (e = yo.getContext("2d")).shadowColor = "#000000", e.shadowBlur = 20, e.drawImage(t, 0, 0)
}, go.src = "/s/play.png";
var mo = document.createElement("canvas");
mo.width = 173, mo.height = 178;
var uo = document.createElement("img");
uo.onload = function() {
    var t = document.createElement("canvas");
    t.width = 173, t.height = 178;
    var e = t.getContext("2d");
    e.drawImage(uo, 21, 21), (e = mo.getContext("2d")).shadowColor = "#000000", e.shadowBlur = 20, e.drawImage(t, 0, 0)
}, uo.src = "/s/bonkers2.png";
var wo = document.createElement("canvas");
wo.width = 143, wo.height = 161;
var xo = document.createElement("img");
xo.onload = function() {
    var t = document.createElement("canvas");
    t.width = 143, t.height = 161;
    var e = t.getContext("2d");
    e.drawImage(xo, 21, 21), (e = wo.getContext("2d")).shadowColor = "#000000", e.shadowBlur = 20, e.drawImage(t, 0, 0)
}, xo.src = "/s/leaf.png";
var vo = document.createElement("canvas");
vo.width = 140, vo.height = 140;
var bo = document.createElement("img");
bo.onload = function() {
    var t = document.createElement("canvas");
    t.width = 140, t.height = 140;
    var e = t.getContext("2d");
    e.drawImage(bo, 21, 21), (e = vo.getContext("2d")).shadowColor = "#000000", e.shadowBlur = 20, e.drawImage(t, 0, 0)
}, bo.src = "/s/swiss.png";
var Mo = document.createElement("canvas");
Mo.width = 162, Mo.height = 137;
var Io = document.createElement("img");
Io.onload = function() {
    var t = document.createElement("canvas");
    t.width = 162, t.height = 137;
    var e = t.getContext("2d");
    e.drawImage(Io, 21, 21), (e = Mo.getContext("2d")).shadowColor = "#000000", e.shadowBlur = 20, e.drawImage(t, 0, 0)
}, Io.src = "/s/moldova.png";
var Co = document.createElement("canvas");
Co.width = 137, Co.height = 142;
var ko = document.createElement("img");
ko.onload = function() {
    var t = document.createElement("canvas");
    t.width = 137, t.height = 142;
    var e = t.getContext("2d");
    e.drawImage(ko, 21, 21), (e = Co.getContext("2d")).shadowColor = "#000000", e.shadowBlur = 20, e.drawImage(t, 0, 0)
}, ko.src = "/s/vietnam.png";
var Ao = document.createElement("canvas");
Ao.width = 152, Ao.height = 152;
var So = document.createElement("img");
So.onload = function() {
    var t = document.createElement("canvas");
    t.width = 152, t.height = 152;
    var e = t.getContext("2d");
    e.drawImage(So, 21, 21), (e = Ao.getContext("2d")).shadowColor = "#000000", e.shadowBlur = 20, e.drawImage(t, 0, 0)
}, So.src = "/s/argentina.png";
var Fo = document.createElement("canvas");
Fo.width = 142, Fo.height = 163;
var _o, Eo = document.createElement("img");
Eo.onload = function() {
    var t = document.createElement("canvas");
    t.width = 142, t.height = 163;
    var e = t.getContext("2d");
    e.drawImage(Eo, 21, 21), (e = Fo.getContext("2d")).shadowColor = "#000000", e.shadowBlur = 20, e.drawImage(t, 0, 0)
}, Eo.src = "/s/mov2.png", this.debugMode && ((_o = document.createElement("canvas")).width = 256, _o.height = 106, _o.style.position = "fixed", _o.style.left = "0px", _o.style.top = "100px", _o.style.zIndex = 2147483647, document.body.appendChild(_o));
var Po = new Float32Array(32767),
    zo = new Float32Array(32767),
    Do = new Float32Array(32767),
    To = new Uint8Array(32767),
    No = [],
    Bo = [192, 144, 128, 128, 238, 255, 255, 255, 224, 255, 144, 80, 255, 40, 100, 120, 72, 160, 255, 56, 56, 78, 255, 101, 128, 60, 0, 217, 255, 144, 32, 240, 240, 240, 240, 32, 40, 104, 0, 104, 0],
    qo = [128, 153, 208, 255, 238, 160, 144, 64, 48, 255, 153, 80, 192, 136, 117, 134, 84, 80, 224, 68, 68, 35, 86, 200, 132, 192, 255, 69, 64, 144, 32, 32, 240, 144, 32, 240, 60, 128, 0, 40, 0],
    Ro = [255, 255, 208, 128, 112, 96, 144, 64, 224, 255, 255, 80, 80, 96, 255, 255, 255, 255, 64, 255, 255, 192, 9, 232, 144, 72, 83, 69, 64, 144, 240, 32, 32, 32, 240, 32, 173, 255, 112, 170, 0],
    Oo = new Uint8Array(256),
    Lo = new Uint8Array(256),
    Ho = new Uint8Array(256),
    Uo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 39];
for (w = 0; 255 >= w; w++) Lo[w] = 0, Ho[w] = 0;
for (w = Uo.length - 1; 0 <= w; w--) Lo[Uo[w]] = 1, Ho[Uo[w]] = 1;
for (Ho[40] = 1, Oo = Lo, w = 0; w < Bo.length; w++) {
    F = {
        imgs: [],
        fws: [],
        fhs: [],
        fw2s: [],
        fh2s: [],
        gimgs: [],
        gfws: [],
        gfhs: [],
        gfw2s: [],
        gfh2s: [],
        oimgs: [],
        ofws: [],
        ofhs: [],
        ofw2s: [],
        ofh2s: []
    };
    var Wo = "00" + Bo[w].toString(16),
        jo = "00" + qo[w].toString(16),
        Yo = "00" + Ro[w].toString(16);
    Wo = Wo.substr(Wo.length - 2), jo = jo.substr(jo.length - 2), Yo = Yo.substr(Yo.length - 2), F.cs = "#" + Wo + jo + Yo, Ja = 62;
    var Vo = document.createElement("canvas");
    Vo.width = Vo.height = Ja, k = (V = (Y = (G = Vo.getContext("2d")).getImageData(0, 0, Ja, Ja)).data).length, U = H = 0;
    var Go = w;
    26 == w ? Go = 3 : 29 == w ? Go = 9 : 30 == w ? Go = 15 : 31 == w ? Go = 7 : 32 == w ? Go = 4 : 33 == w ? Go = 5 : 34 == w ? Go = 0 : 35 == w ? Go = 3 : 36 == w && (Go = 7);
    var Xo = ((Ue = Bo[Go]) + (We = qo[Go]) + (je = Ro[Go])) / 3;
    if (24 >= Xo) Ue = We = je = 90;
    else {
        var Jo = 120 / Xo;
        Ue = Math.min(255, Math.floor(Ue * Jo)), We = Math.min(255, Math.floor(We * Jo)), je = Math.min(255, Math.floor(je * Jo))
    }
    for (L = 0; L < k; L += 4) u = 0 > (u = 1 - Math.sqrt(Math.pow(Ja / 2 - H, 2) + Math.pow(Ja / 2 - U, 2)) / 32) ? 0 : .5 * (1 - Math.cos(Math.PI * u)), V[L] = Ue, V[L + 1] = We, V[L + 2] = je, V[L + 3] = Math.floor(255 * u), ++H >= Ja && (H = 0, U++);
    G.putImageData(Y, 0, 0), F.kfmc = Vo;
    var Ko = 48,
        $o = 24,
        Qo = document.createElement("canvas");
    Qo.width = Qo.height = Ko, (G = Qo.getContext("2d")).fillStyle = "#FFFFFF", G.arc($o, $o, $o, 0, X), G.fill(), k = (V = (Y = G.getImageData(0, 0, Ko, Ko)).data).length, U = H = 0;
    var Zo = 7;
    36 == w && (Zo = 60);
    var tl, el = [];
    for (g = 0; g < Zo; g++) {
        for (L = H = U = 0; L < k; L += 4) {
            var al = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(H - $o, 2) + Math.pow(U - $o, 2)) / 34));
            b ? u = Math.pow(al, .5) : (u = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(U - $o) / $o)), .35), u += .375 * (al - u)), Ue = Bo[w], We = qo[w], je = Ro[w], 24 == w ? (al = Math.sqrt(Math.pow(.5 * (H - $o), 2) + Math.pow(U - $o, 2)) / $o, 1 < (al = Math.pow(1.05 * al, 4)) && (al = 1), Ue += (306 - Ue) * al, We += (192 * 1.2 - We) * al, je += (76.8 - je) * al, u *= 1.22 - .44 * g / (Zo - 1)) : 26 == w ? (al = Math.sqrt(Math.pow(.5 * (H - $o), 2) + Math.pow(U - $o, 2)) / $o, 1 < (al = Math.pow(al, 2)) && (al = 1), Ue *= u *= 1.22 - .44 * g / (Zo - 1), We *= u, je *= u, u = 1, Ue += (140.8 - Ue) * al, We += (280.5 - We) * al, je += (136 * 1.1 - je) * al) : 27 == w ? (al = Math.sqrt(Math.pow(.5 * (H - $o), 2) + Math.pow(U - $o, 2)) / $o, 1 < (al = Math.pow(al, 2)) && (al = 1), Ue *= u *= 1.22 - .44 * g / (Zo - 1), We *= u, je *= u, u = 1, Ue += (217 * 1.1 - Ue) * al, We += (75.9 - We) * al, je += (75.9 - je) * al) : 28 == w ? (Ue += (128 - Ue) * (al = .5 - .5 * Math.cos(Math.PI * g / Zo)), We += (128 - We) * al, je += (255 - je) * al, 1 < (u *= 1.1) && (u = 1)) : 29 == w ? (al = Math.sqrt(Math.pow(.5 * (H - $o), 2) + Math.pow(U - $o, 2)) / $o, 1 < (al = Math.pow(al, 2)) && (al = 1), Ue = 32 * (u *= 1.44 - .88 * g / (Zo - 1)), We = 32 * u, je = 32 * u, u = 1, Ue += (255 - Ue) * al, We += (255 - We) * al, je += (255 - je) * al) : 30 == w ? (al = Math.sqrt(Math.pow(.5 * (H - $o), 2) + Math.pow(U - $o, 2)) / $o, 1 < (al = Math.pow(al, 2)) && (al = 1), Ue = 80 * (u = (.1 + .9 * g / Zo) % 1), We = 80 * u, je = 128 + 160 * u, Ue += .3 * (255 - Ue) * al, We += .3 * (255 - We) * al, je += .3 * (357 - je) * al, u = 1) : 31 == w ? (al = Math.sqrt(Math.pow(.5 * (H - $o), 2) + Math.pow(U - $o, 2)) / $o, 1 < (al = Math.pow(al, 2)) && (al = 1), Ue = 128 + 160 * (u = (.1 + .9 * g / Zo) % 1), We = 80 * u, je = 80 * u, Ue += .3 * (357 - Ue) * al, We += .3 * (255 - We) * al, je += .3 * (255 - je) * al, u = 1) : 32 == w ? (al = Math.sqrt(Math.pow(.5 * (H - $o), 2) + Math.pow(U - $o, 2)) / $o, 1 < (al = Math.pow(al, 2)) && (al = 1), Ue = 96 + 128 * (u = (.1 + .9 * g / Zo) % 1), We = 96 + 128 * u, je = 80 * u, Ue += .6 * (306 - Ue) * al, We += .6 * (306 - We) * al, je += .6 * (255 - je) * al, u = 1) : 33 == w ? (al = Math.sqrt(Math.pow(.5 * (H - $o), 2) + Math.pow(U - $o, 2)) / $o, 1 < (al = Math.pow(al, 2)) && (al = 1), Ue = 96 + 128 * (u = (.1 + .9 * g / Zo) % 1), We = 48 + 80 * u, je = 48 * u, Ue += .6 * (306 - Ue) * al, We += .6 * (280.5 - We) * al, je += .6 * (255 - je) * al, u = 1) : 34 == w ? (al = Math.sqrt(Math.pow(.5 * (H - $o), 2) + Math.pow(U - $o, 2)) / $o, 1 < (al = Math.pow(al, 2)) && (al = 1), Ue = 96 + 128 * (u = (.1 + .9 * g / Zo) % 1), We = 80 * u, je = 96 + 128 * u, Ue += .6 * (306 - Ue) * al, We += .6 * (255 - We) * al, je += .6 * (306 - je) * al, u = 1) : 35 == w ? (al = Math.sqrt(Math.pow(.5 * (H - $o), 2) + Math.pow(U - $o, 2)) / $o, 1 < (al = Math.pow(al, 2)) && (al = 1), Ue = 80 * (u = (.1 + .9 * g / Zo) % 1), We = 96 + 128 * u, je = 80 * u, Ue += .6 * (255 - Ue) * al, We += .6 * (306 - We) * al, je += .6 * (255 - je) * al, u = 1) : 36 == w ? (al = 1.3 * ((al = (U - $o) / Ko) - 1.3 * ((tl = (g / Zo + .6 + H / Ko * .25) % 1) - .5)), 0 > (al *= 2) && (al = -al), 1 > (al *= 2.4) && (Ue += (561 - Ue) * (1 - al), We += (561 - We) * (1 - al), je += (561 - je) * (1 - al)), al = 1.3 * ((al = .5 > tl ? (U - 1.32 - $o) / Ko : (U + 1.32 - $o) / Ko) - 1.3 * (tl - .5)), 0 > (al *= 2) && (al = -al), 1 > (al *= 4.8) && (Ue += (255 - Ue) * (1 - al), We += (32 - We) * (1 - al), je += (64 - je) * (1 - al)), al = 1.3 * ((al = ($o - U) / Ko) - 1.3 * (tl - .5)), 0 > (al *= 2) && (al = -al), 1 > (al *= 2.4) && (Ue += (561 - Ue) * (1 - al), We += (561 - We) * (1 - al), je += (561 - je) * (1 - al)), al = 1.3 * ((al = .5 > tl ? (25.32 - U) / Ko : (22.68 - U) / Ko) - 1.3 * (tl - .5)), 0 > (al *= 2) && (al = -al), 1 > (al *= 4.8) && (Ue += (255 - Ue) * (1 - al), We += (32 - We) * (1 - al), je += (64 - je) * (1 - al)), al = (U - $o) / Ko, .47 <= tl && .53 >= tl ? (Ue = 255, We = 32, je = 64) : -.1 <= al && .1 >= al ? (0 > (tl = .5 - tl) && (tl = -tl), Ue += (255 - Ue) * (tl = 1 - Math.pow(tl / .5, 2)), We += (32 - We) * tl, je += (64 - je) * tl) : (.44 <= tl && .56 >= tl || -.15 <= al && .15 >= al) && (0 > (tl = .5 - tl) && (tl = -tl), Ue += (255 - Ue) * (tl = 1 - Math.pow(tl / .5, 2)), We += (255 - We) * tl, je += (255 - je) * tl), b || (u = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(U - $o) / $o)), .35), al = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(U - $o) / $o)), .5), Ue += (Bo[w] - Ue) * (1 - al), We += (qo[w] - We) * (1 - al), je += (Ro[w] - je) * (1 - al))) : u *= 1.22 - .44 * g / (Zo - 1), V[L] = Math.max(0, Math.min(255, Math.floor(Ue * u))), V[L + 1] = Math.max(0, Math.min(255, Math.floor(We * u))), V[L + 2] = Math.max(0, Math.min(255, Math.floor(je * u))), ++H >= Ko && (H = 0, U++)
        }
        G.putImageData(Y, 0, 0);
        var ol = document.createElement("canvas");
        ol.width = ol.height = Ko;
        var ll = ol.getContext("2d");
        if (ll.drawImage(Qo, 0, 0), 10 == w) {
            var sl = -1,
                nl = 1;
            for (b && (sl = -4, nl = 3), x = sl; x <= nl; x++) {
                var rl = $o + 1.5 * Math.cos(2 * Math.PI * x / 8) * 13,
                    il = $o + 1.5 * Math.sin(2 * Math.PI * x / 8) * 13;
                for (ll.fillStyle = "#FFFFFF", ll.beginPath(), A = 0; 5 >= A; A++) H = rl + 1.5 * Math.cos(2 * Math.PI * A / 5) * .05 * 24, U = il + 1.5 * Math.sin(2 * Math.PI * A / 5) * .05 * 24, 0 == A ? ll.moveTo(H, U) : ll.lineTo(H, U), H = rl + 1.5 * Math.cos(2 * Math.PI * (A + .5) / 5) * 3.1, U = il + 1.5 * Math.sin(2 * Math.PI * (A + .5) / 5) * 3.1, ll.lineTo(H, U);
                ll.fill()
            }
        } else if (19 == w)
            for (sl = -2, nl = 2, b && (sl = -7, nl = 7), x = sl; x <= nl; x++) {
                for (rl = $o + 1.5 * Math.cos(2 * Math.PI * x / 15) * 13, il = $o + 1.5 * Math.sin(2 * Math.PI * x / 15) * 13, ll.save(), ll.globalAlpha = .7, ll.fillStyle = "#FFFFFF", ll.beginPath(), A = 0; 5 >= A; A++) H = rl + 1.5 * Math.cos(2 * Math.PI * A / 5) * .05 * 12, U = il + 1.5 * Math.sin(2 * Math.PI * A / 5) * .05 * 12, 0 == A ? ll.moveTo(H, U) : ll.lineTo(H, U), H = rl + 1.5 * Math.cos(2 * Math.PI * (A + .5) / 5) * 1.55, U = il + 1.5 * Math.sin(2 * Math.PI * (A + .5) / 5) * 1.55, ll.lineTo(H, U);
                ll.fill(), ll.restore()
            } else if (20 == w)
                for (sl = -1.5, nl = 1.5, b && (sl = -6.5, nl = 7.5), x = sl; x <= nl; x++) {
                    for (rl = $o + 1.5 * Math.cos(2 * Math.PI * x / 15) * 13, il = $o + 1.5 * Math.sin(2 * Math.PI * x / 15) * 13, ll.save(), ll.globalAlpha = .7, ll.fillStyle = "#FFFFFF", ll.beginPath(), A = 0; 5 >= A; A++) H = rl + 1.5 * Math.cos(2 * Math.PI * A / 5) * .05 * 14, U = il + 1.5 * Math.sin(2 * Math.PI * A / 5) * .05 * 14, 0 == A ? ll.moveTo(H, U) : ll.lineTo(H, U), H = rl + 1.5 * Math.cos(2 * Math.PI * (A + .5) / 5) * 1.8, U = il + 1.5 * Math.sin(2 * Math.PI * (A + .5) / 5) * 1.8, ll.lineTo(H, U);
                    ll.fill(), ll.restore()
                }
        el.push(ol)
    }
    for (F.kmcs = el, F.kl = el.length, F.klp = !0, 36 == w && (F.klp = !1), No.push(F), g = 2.8; 18.8 >= g; g += 1) {
        var hl = document.createElement("canvas");
        Ja = Math.ceil(2.5 * g + 28), hl.width = hl.height = Ja, (G = hl.getContext("2d")).fillStyle = F.cs, G.arc(Ja / 2, Ja / 2, .65 * g, 0, X), G.shadowBlur = 12, G.shadowOffsetY = 0, G.shadowColor = "#" + Wo + jo + Yo, G.globalAlpha = .8, G.fill(), G.globalAlpha = 1, G.fill(), F.imgs.push(hl), F.fws.push(Ja), F.fhs.push(Ja), F.fw2s.push(Ja / 2), F.fh2s.push(Ja / 2), Ja = Math.ceil(8 * g + 6), (hl = document.createElement("canvas")).width = hl.height = Ja, (eo = (G = hl.getContext("2d")).createRadialGradient(Ja / 2, Ja / 2, 1, Ja / 2, Ja / 2, 4 * g)).addColorStop(0, "rgba(" + Bo[w] + ", " + qo[w] + ", " + Ro[w] + ", 1)"), eo.addColorStop(1, "rgba(" + Bo[w] + ", " + qo[w] + ", " + Ro[w] + ", 0)"), G.fillStyle = eo, G.fillRect(0, 0, Ja, Ja), F.gimgs.push(hl), F.gfws.push(Ja), F.gfhs.push(Ja), F.gfw2s.push(Ja / 2), F.gfh2s.push(Ja / 2), hl = document.createElement("canvas"), Ja = Math.ceil(1.3 * g + 6), hl.width = hl.height = Ja;
        var cl = .2;
        (eo = (G = hl.getContext("2d")).createRadialGradient(Ja / 2, Ja / 2, 0, Ja / 2, Ja / 2, g / 2)).addColorStop(0, "rgba(" + Bo[w] + ", " + qo[w] + ", " + Ro[w] + ", 1)"), eo.addColorStop(.99, "rgba(" + Math.floor(Bo[w] * cl) + ", " + Math.floor(qo[w] * cl) + ", " + Math.floor(Ro[w] * cl) + ", 1)"), eo.addColorStop(1, "rgba(" + Math.floor(Bo[w] * cl) + ", " + Math.floor(qo[w] * cl) + ", " + Math.floor(Ro[w] * cl) + ", 0)"), G.fillStyle = eo, G.fillRect(0, 0, Ja, Ja), G.strokeStyle = "#000000", G.lineWidth = 2, G.arc(Ja / 2, Ja / 2, .65 * g, 0, X), G.globalAlpha = 1, G.stroke(), F.oimgs.push(hl), F.ofws.push(Ja), F.ofhs.push(Ja), F.ofw2s.push(Ja / 2), F.ofh2s.push(Ja / 2)
    }
    for (F.ic = F.imgs.length, F.pr_imgs = [], F.pr_fws = [], F.pr_fhs = [], F.pr_fw2s = [], F.pr_fh2s = [], g = 3; 24 >= g; g += 1) hl = document.createElement("canvas"), Ja = Math.ceil(2 * g + 38), hl.width = hl.height = Ja, (G = hl.getContext("2d")).fillStyle = F.cs, G.arc(Ja / 2, Ja / 2, g / 2, 0, X), G.shadowBlur = 22, G.shadowOffsetY = 0, G.shadowColor = "#" + Wo + jo + Yo, G.fill(), G.fill(), F.pr_imgs.push(hl), F.pr_fws.push(Ja), F.pr_fhs.push(Ja), F.pr_fw2s.push(Ja / 2), F.pr_fh2s.push(Ja / 2)
}
if (this.debugMode)
    for ((G = _o.getContext("2d")).fillStyle = "#000000", G.fillRect(0, 0, _o.width, _o.height), G.fillStyle = "#FFFFFF", G.font = "10px Arial, Helvetica Neue, Helvetica, sans-serif", G.textBaseline = "top", G.textAlign = "center", w = U = H = 0; w < Bo.length; w++) {
        Qo = No[w].kmcs[0], G.drawImage(Qo, 0, 0, Qo.width, Qo.height, H, U, 16, 16), ntx = F.xx + F.fx, nty = F.yy + F.fy, ntx = ae + (ntx - dl) * Ve, nty = oe + (nty - fl) * Ve, G.fillText("" + w, H + 8, U + 16), (H += 16) > _o.width - 16 && (H = 0, U += 28)
    }
var dl = 0,
    fl = 0,
    pl = 0,
    yl = 0,
    gl = 0,
    ml = 0,
    ul = 0,
    wl = 0,
    xl = 0,
    vl = 0,
    bl = null,
    Ml = "",
    Il = !1;
try {
    "1" == localStorage.gw2k16 && (Il = !0)
} catch (t) {}
var Cl = 0,
    kl = 0,
    Al = Date.now(),
    Sl = 0,
    Fl = 0,
    _l = 0,
    El = 0,
    Pl = 0,
    zl = 0,
    this.Dl = 0,
    this.Tl = 0,
    Nl = 0,
    Bl = !1,
    ql = 1,
    Rl = !1,
    Ol = !0,
    Ll = 1,
    Hl = 0,
    Ul = 1,
    Wl = !1,
    jl = !1,
    Yl = !1,
    Vl = !1,
    Gl = !1,
    Xl = 0,
    Jl = 0,
    Kl = -1,
    $l = new Float32Array(65536);
for (U = 0; 256 > U; U++)
    for (H = 0; 256 > H; H++) $l[U << 8 | H] = Math.atan2(U - 128, H - 128);
var Ql = 0,
    Zl = 0,
    ts = !1,
    es = !1,
    as = 0,
    os = document.createElement("iframe");
try {
    os.frameBorder = 0
} catch (t) {}
os.style.position = "fixed", os.style.left = "6px", os.style.top = "6px", os.style.border = "0px", os.style.zIndex = 9999999, os.style.overflow = "hidden", os.width = 251, os.height = 150, os.src = "/social-box/", document.body.appendChild(os);
var ls, ss, ns = function() {
        at && function() {
            for (var t, e = !1, a = et.length - 1; 0 <= a; a--) {
                var o = et[a];
                t = !1, o.mo ? 1 != o.mof && (e = !0, o.mof += .33, 1 <= o.mof && (o.mof = 1), t = !0) : 0 != o.mof && (e = !0, o.mof -= .2, 0 >= o.mof && (o.mof = 0), t = !0), t && (o.upi.style.opacity = o.disabled ? 0 : o.mof), t = !1, o.md ? 1 != o.mdf && (e = !0, o.mdf += .33, 1 <= o.mdf && (o.mdf = 1), t = !0) : 0 != o.mdf && (e = !0, o.mdf -= .2, 0 >= o.mdf && (o.mdf = 0), t = !0), t && (o.downi.style.opacity = o.disabled ? 0 : o.mdf)
            }
            e || (at = !1)
        }();
        var e = Date.now();
        if (5 < (Sl = (e - Al) / 8) && (Sl = 5), 1.56 > Sl && (Sl = 1.56), _l = Sl, Al = e, Mr || (Bl || Rl && 420 < e - Nl && (xt || lr || (Bl = !0)), Bl ? .01 > (ql *= .85) && (ql = .01) : 1 > ql && (1 <= (ql += .05) && (ql = 1))), 120 < Sl && (Sl = 120), this.Xs *= ql, kl = Cl, Cl += Sl *= ql, Fl = Math.floor(Cl) - Math.floor(kl), Pl = El, El += 2 * Sl, zl = Math.floor(El) - Math.floor(Pl), _l, ts && (Ql += Fl), es && (Zl += Fl), xt && !vt && -1 == Kl && (xt = !1, gn()), ai && -1 != ni && e > ni && ii(), Ct) {
            At += _l;
            var a = kt.getContext("2d");
            a.clearRect(0, 0, 512, 128);
            for (var o, l, s = 1; 2 >= s; s++) {
                a.beginPath(), 1 == s ? (a.fillStyle = "#60FF70", l = 0) : (a.fillStyle = "#9850FF", l = Math.PI);
                for (var n = 0; 256 >= n; n++) o = 32 + 5 * Math.cos(l + At / 6 + 8 * n / 256) + 8 * n / 256, 256 == n && (o += 10), H = 64 + Math.cos(l + At / 44 + .8 * Math.PI * n / 256) * o * 1.25, U = 64 + Math.sin(l + At / 44 + .8 * Math.PI * n / 256) * o, 0 == n ? a.moveTo(H, U) : a.lineTo(H, U);
                for (o = 32, H = 64 + Math.cos(l + At / 44 + .8 * Math.PI * (n + 47) / 256) * o * 1.25, U = 64 + Math.sin(l + At / 44 + .8 * Math.PI * (n + 47) / 256) * o, a.lineTo(H, U), n = 256; 0 <= n; n--) o = 32 + 5 * Math.cos(l + At / 6 + 8 * n / 256) - 8 * n / 256, 256 == n && (o -= 10), H = 64 + Math.cos(l + At / 44 + .8 * Math.PI * n / 256) * o * 1.25, U = 64 + Math.sin(l + At / 44 + .8 * Math.PI * n / 256) * o, a.lineTo(H, U);
                a.fill()
            }
            fn || xt ? (1 <= (Mt += _l / 86) && (Mt = 1), 1 <= (It += _l / 93) && (It = 1), kt.style.opacity = Mt, n = Math.round(.1 + .9 * It * (1 + 2 * Math.pow(1 - Mt, 2)) * 1e5) / 1e5) : (0 >= (Mt -= _l / 86) && (It = Mt = 0, kt.style.display = "none", N(kt, "")), kt.style.opacity = Mt, n = Math.round(.1 + .9 * It * (1 + 2 * Math.pow(1 - Mt, 2)) * 1e5) / 1e5), N(kt, "scale(" + n + "," + n + ")")
        }
        if (or || sr) {
            for (n = Yn.length - 1; 0 <= n; n--)(a = Yn[n]).loaded && (lr ? .25 != a.alpha && (a.alpha -= .02 * Sl, .25 >= a.alpha && (a.alpha = .25), a.ii.style.opacity = a.alpha) : 1 != a.alpha && (a.alpha += .02 * Sl, 1 <= a.alpha && (a.alpha = 1), a.ii.style.opacity = a.alpha));
            for (sr ? (0 >= (rr -= .03 * Sl) && (Zn = rr = 0, tr = Kn / 2 - 27, er = [], or = sr = !1, Un.style.display = "none", Pt.disabled = !1, Pt.focus(), nr && (nr = !1, In.onclick(), Sn.onclick())), Un.style.opacity = rr) : or && 1 != rr && (1 <= (rr += .03 * Sl) && (rr = 1), Un.style.opacity = rr), (ir += .1 * Sl) >= X && (ir -= X), pr && (1 <= (yr += .014 * Sl) && (yr = 1, pr = !1), Qn.style.left = Math.round(10 * (32 * Math.sin(Math.PI * yr * 8) * Math.sin(Math.PI * yr) + zs / 2 - Kn / 2)) / 10 + "px"), (lr || 0 < fr) && (1 <= (cr += .0075 * Sl) && --cr, lr ? 1 <= (fr += .02 * Sl) && (fr = 1) : 0 >= (fr -= .05 * Sl) && (fr = 0), Xn.style.opacity = fr, n = dr, (dr = Math.round(12 * cr)) != n && Zr()), 14 == er.length ? 0 != hr && (0 >= (hr -= .05 * Sl) && (hr = 0)) : 1 != hr && (1 <= (hr += .05 * Sl) && (hr = 1)), (a = Qn.getContext("2d")).save(), a.clearRect(0, 0, Kn, $n), n = Math.min(13, er.length), Zn += .2 * (47 * n - Zn), tr += .1 * (Kn / 2 - 27 - 47 * n / 2 - tr), a.globalAlpha = 1, a.translate(tr, 0), n = 0; n < er.length; n++) l = er[n].v, Jn[l].loaded && a.drawImage(Jn[l].ii, 47 * n, 0, 54, 67);
            Jn[11].loaded && (a.globalAlpha = hr * (.5 + .4 * Math.cos(ir)), a.drawImage(Jn[11].ii, Zn, 0, 54, 67)), a.restore()
        }
        if (Cr) {
            if (0 != kr) {
                if (0 >= (kr -= .015 * Sl)) {
                    for (kr = 0, Ir = Cr = !1, Oo = Lo, n = _r.length - 1; 0 <= n; n--) document.body.removeChild(_r[n].a);
                    _r = [], Ft.style.display = "none"
                }
                for (l = .5 * (1 - Math.cos(Math.PI * kr)), Ar = 90 * l, Sr = l, Br(), On.style.opacity = 1 - kr, Hn.style.opacity = 1 - kr, An.style.opacity = 1 - kr, Fn.style.opacity = 1 - kr, Ft.style.opacity = kr, n = _r.length - 1; 0 <= n; n--)(a = _r[n]).ii.style.opacity = kr
            }
        } else if (Ir && 1 != kr)
            for (1 <= (kr += .015 * Sl) && (kr = 1), l = .5 * (1 - Math.cos(Math.PI * kr)), Ar = 90 * l, Sr = l, Br(), On.style.opacity = 1 - kr, Hn.style.opacity = 1 - kr, An.style.opacity = 1 - kr, Fn.style.opacity = 1 - kr, Ft.style.opacity = kr, n = _r.length - 1; 0 <= n; n--)(a = _r[n]).ii.style.opacity = kr;
        if (Pr) {
            if (0 != zr) {
                if (0 >= (zr -= .015 * Sl)) {
                    for (zr = 0, Er = Pr = !1, n = Nr.length - 1; 0 <= n; n--) document.body.removeChild(Nr[n].a);
                    Nr = []
                }
                for (l = .5 * (1 - Math.cos(Math.PI * zr)), Dr = 90 * l, Tr = l, Br(), On.style.opacity = 1 - zr, Hn.style.opacity = 1 - zr, An.style.opacity = 1 - zr, Fn.style.opacity = 1 - zr, n = Nr.length - 1; 0 <= n; n--)(a = Nr[n]).ii.style.opacity = zr
            }
        } else if (Er && 1 != zr)
            for (1 <= (zr += .015 * Sl) && (zr = 1), l = .5 * (1 - Math.cos(Math.PI * zr)), Dr = 90 * l, Tr = l, Br(), On.style.opacity = 1 - zr, Hn.style.opacity = 1 - zr, An.style.opacity = 1 - zr, Fn.style.opacity = 1 - zr, n = Nr.length - 1; 0 <= n; n--)(a = Nr[n]).ii.style.opacity = zr;
        if (pn && e > yn && (fn || jl || gn()), fn && 3333 < e - cn && (st && (st.tainted = !0), gn()), Mr) {
            for (n = ea.length - 1; 0 <= n; n--)
                for (s = (a = ea[n]).pts.length - 1; 0 <= s; s--) a.pts[s].yy = Bs / 2 + 15 * Math.cos(s / 4 + Cl / 19) * (1 - s / a.pts.length);
            dl -= Sl
        }
        if (Wl && (Ol ? (1 > Ll && (1 < (Ll += .0075 * Sl) && (Ll = 1)), 1 < Ul && (1 > (Ul -= 4e-5 * Sl) && (Ul = 1))) : (0 < Ll && (0 > (Ll -= .0075 * Sl) && (Ll = 0)), Ul < 1.7 && ((Ul += 4e-5 * Sl) > 1.7 && (Ul = 1.7)))), 0 != Xl && (1 == Xl ? 1 <= (Jl += .02 * Sl) ? (Jl = 0, Xl = 2, Rt.style.opacity = 1, Jt.style.opacity = 1, Rt.style.display = "none", Jt.style.display = "none", qt.style.opacity = 0, Ut.style.opacity = 0, un.style.opacity = 0, qt.style.display = "inline-block", Ut.style.display = "block", un.style.display = "block") : (Rt.style.opacity = 1 - Jl, Jt.style.opacity = 1 - Jl) : 2 == Xl && (1 <= (Jl += .02 * Sl) && (Jl = 1, Xl = 0), qt.style.opacity = Jl, Ut.style.opacity = Jl, un.style.opacity = Jl)), 1 != gt && -1 != Vt && ((Vt += .017 * Sl) >= X && (Vt -= X, ++Yt >= jt.length && (Yt = 0), Wt.textContent = jt[Yt]), s = .5 - .5 * Math.cos(Vt), Wt.style.opacity = Math.round(1e5 * Math.pow(s, .5)) / 1e5), -1 == Kl ? -1 != yt && 1 != yt && (1 <= (yt += .01 * Sl) && (yt = 1), se.style.opacity = .85 * yt, re.style.opacity = ie.style.opacity = he.style.opacity = ce.style.opacity = de.style.opacity = yt) : 1600 < e - Kl && (-1 == ut && (ut = -2, Nt.style.display = "inline", Cn.style.display = "inline", (gr || mr) && (En.style.display = "inline"), vn.style.display = "inline", Mn.style.display = "inline", Bn.style.display = "inline", qn.style.display = "inline", Dn.style.display = "inline", os.style.display = "inline", Gl && (Gl = !1, zt.focus())), -2 == ut && (gt -= .004 * Sl, Mr && (gt -= .007 * Sl), yt = gt, 0 >= gt && (gt = 0, Kl = -1, Pt.disabled = !1, Pt.focus(), yt = -1, Wl = !1, Mr && (Mr = !1, hn(), On.style.display = "none", Hn.style.display = "none", An.style.display = "none", Fn.style.display = "none", Et.style.display = "none", Ft.style.display = "none")), Ht.style.opacity = 1 - .5 * Math.max(0, Math.min(1, 6 * gt)), pt = 1 + .1 * Math.pow(gt, 2), n = Math.round(ft * pt * 1e5) / 1e5, N(Nt, 1 == n ? "" : "scale(" + n + "," + n + ")"), Nt.style.opacity = 1 - gt, wn.style.opacity = 1 - gt, vn.style.opacity = 1 - gt, Mn.style.opacity = 1 - gt, Cn.style.opacity = 1 - gt, En.style.opacity = 1 - gt, Dn.style.opacity = 1 - gt, Bn.style.opacity = 1 - gt, qn.style.opacity = 1 - gt, os.style.opacity = 1 - gt, On.style.opacity = gt, Hn.style.opacity = gt, An.style.opacity = gt, Fn.style.opacity = gt, Et.style.opacity = gt, Ft.style.opacity = gt, le.style.opacity = gt, fe.style.opacity = gt, se.style.opacity = .85 * yt, re.style.opacity = ie.style.opacity = he.style.opacity = ce.style.opacity = de.style.opacity = yt)), Yl && -1 == Kl && (Yl = !1, Js && (Js.close(), Js = null, Wl = jl = !1), hn()), Vl && (Dt.style.opacity = .92 + .08 * Math.cos(Cl / 10)), jl && ((0 < Ql || 0 < Zl) && 150 < e - as && (as = e, 0 < Zl && Ql > Zl && (Ql -= Zl, Zl = 0), 0 < Ql && Zl > Ql && (Zl -= Ql, Ql = 0), 0 < Ql ? (127 < (l = Ql) && (l = 127), Ql -= l, bl.eang -= ua * l * bl.scang * bl.spang, 5 <= dn ? (n = new Uint8Array(2))[0] = 252 : (n = new Uint8Array(2))[0] = 108, n[1] = l, Js.send(n)) : 0 < Zl && (127 < (l = Zl) && (l = 127), Zl -= l, bl.eang += ua * l * bl.scang * bl.spang, 5 <= dn ? (l += 128, (n = new Uint8Array(2))[0] = 252) : (n = new Uint8Array(2))[0] = 114, n[1] = l, Js.send(n))), !Rl && 250 < e - Nl && (Nl = e, Rl = !0, (n = new Uint8Array(1))[0] = 5 <= dn ? 251 : 112, Js.send(n), e)), null != bl && 2147483647 != Bs && 1e3 < e - ln && (ln = Date.now(), me.style.left = Math.round(52 + 40 * (bl.xx - Bs) / Bs - 7) + "px", me.style.top = Math.round(52 + 40 * (bl.yy - Bs) / Bs - 7) + "px"), 1e3 < e - on) {
            if (this.debugMode && console && console.log) {
                for (console.log("FPS: " + Ss), tn += en, Wl && Zs++, (a = []).push("FPS: " + Ss), a.push("sectors: " + da.length), a.push(), a.push("foods: " + oa), a.push("bytes/sec: " + en), a.push("bytes/sec avg: " + Math.round(tn / Zs)), a.push(""), n = l = 0; n < an.length; n++) 0 <= an[n] && (l += an[n]);
                for (n = 0; n < an.length; n++) 0 <= an[n] && a.push(String.fromCharCode(n) + ": " + an[n] + " (" + Math.round(an[n] / l * 1e3) / 10 + "%)");
                for (a.push("total: " + l), 0, a.push(""), n = 1; n < sn.length; n++) 0 != sn[n] && (a.push(n + ": " + Math.round(1e3 * sn[n]) / 1e3), sn[n] = 0);
                0, nn.innerHTML = a.join("<br>")
            }
            if (0 < Is.length) {
                for (n = Is.length - 1; 0 <= n; n--) try {
                    Is[n]["ono" + Cs]()
                } catch (t) {}
                Is = []
            }
            Wl && 1 == Pn && (24 >= Ss ? (Hl++, Ol && 1 <= Hl && (Ol = !1)) : (Ol || 32 <= Ss) && 0 < Hl && (Hl *= .987, 0 >= (Hl -= .1) && (Ol = !0))), Ss = en = 0, on = Date.now()
        }
        if (this.Xs *= Math.pow(.993, Fl), null != bl && (bl.md != bl.wmd && 150 < e - ca && (bl.md = bl.wmd, ca = e, 5 <= dn ? (n = new Uint8Array(1))[0] = bl.md ? 253 : 254 : ((n = new Uint8Array(2))[0] = 109, n[1] = bl.md ? 1 : 0), Js.send(n)), ul == xl && wl == vl || (ia = !0), ia && 100 < e - ha && (ia = !1, ha = e, xl = ul, vl = wl, 256 < ul * ul + wl * wl ? (P = Math.atan2(wl, ul), bl.eang = P) : P = bl.wang, 0 > (P %= X) && (P += X), 5 <= dn ? (z = Math.floor(251 * P / X)) != ra && (ra = z, (n = new Uint8Array(1))[0] = 255 & z, e, Js.send(n.buffer)) : (z = Math.floor(16777215 * P / X)) != ra && (ra = z, (n = new Uint8Array(4))[0] = 101, n[1] = z >> 16 & 255, n[2] = z >> 8 & 255, n[3] = 255 & z, e, Js.send(n.buffer)))), !Mr)
            for (n = ea.length - 1; 0 <= n; n--) {
                if (a = ea[n], o = ua * Sl * a.scang * a.spang, (e = a.sp * Sl / 4) > a.msl && (e = a.msl), !a.dead) {
                    if (a.tsp != a.sp && (a.tsp < a.sp ? (a.tsp += .3 * Sl, a.tsp > a.sp && (a.tsp = a.sp)) : (a.tsp -= .3 * Sl, a.tsp < a.sp && (a.tsp = a.sp))), a.tsp > a.fsp && (a.sfr += (a.tsp - a.fsp) * Sl * .021), 0 < a.fltg)
                        for ((l = Fl) > a.fltg && (l = a.fltg), a.fltg -= l, E = 0; E < l; E++) a.fl = a.fls[a.flpos], a.fls[a.flpos] = 0, a.flpos++, a.flpos >= ba && (a.flpos = 0);
                    else 0 == a.fltg && (a.fltg = -1, a.fl = 0);
                    a.cfl = a.tl + a.fl
                }
                if (1 == a.dir ? (a.ang -= o, (0 > a.ang || a.ang >= X) && (a.ang %= X), 0 > a.ang && (a.ang += X), 0 > (l = (a.wang - a.ang) % X) && (l += X), l > Math.PI && (l -= X), 0 < l && (a.ang = a.wang, a.dir = 0)) : 2 == a.dir ? (a.ang += o, (0 > a.ang || a.ang >= X) && (a.ang %= X), 0 > a.ang && (a.ang += X), 0 > (l = (a.wang - a.ang) % X) && (l += X), l > Math.PI && (l -= X), 0 > l && (a.ang = a.wang, a.dir = 0)) : a.ang = a.wang, 1 != a.ehl && (a.ehl += .03 * Sl, 1 <= a.ehl && (a.ehl = 1)), o = a.pts[a.pts.length - 1], a.wehang = Math.atan2(a.yy + a.fy - o.yy - o.fy + o.eby * (1 - a.ehl), a.xx + a.fx - o.xx - o.fx + o.ebx * (1 - a.ehl)), a.dead || a.ehang == a.wehang || (0 > (l = (a.wehang - a.ehang) % X) && (l += X), l > Math.PI && (l -= X), 0 > l ? a.edir = 1 : 0 < l && (a.edir = 2)), 1 == a.edir ? (a.ehang -= a.easp * Sl, (0 > a.ehang || a.ehang >= X) && (a.ehang %= X), 0 > a.ehang && (a.ehang += X), 0 > (l = (a.wehang - a.ehang) % X) && (l += X), l > Math.PI && (l -= X), 0 < l && (a.ehang = a.wehang, a.edir = 0)) : 2 == a.edir && (a.ehang += a.easp * Sl, (0 > a.ehang || a.ehang >= X) && (a.ehang %= X), 0 > a.ehang && (a.ehang += X), 0 > (l = (a.wehang - a.ehang) % X) && (l += X), l > Math.PI && (l -= X), 0 > l && (a.ehang = a.wehang, a.edir = 0)), a.dead || (a.xx += Math.cos(a.ang) * e, a.yy += Math.sin(a.ang) * e, a.chl += e / a.msl), 0 < Fl) {
                    for (s = a.pts.length - 1; 0 <= s; s--)(o = a.pts[s]).dying && (o.da += .0015 * Fl, 1 < o.da && (a.pts.splice(s, 1), o.dying = !1, sa.add(o)));
                    for (s = a.pts.length - 1; 0 <= s; s--)
                        if (0 < (o = a.pts[s]).eiu) {
                            for (xs = ws = 0, E = Je = o.eiu - 1; 0 <= E; E--) o.efs[E] = 2 == o.ems[E] ? o.efs[E] + zl : o.efs[E] + Fl, (l = o.efs[E]) >= 92 ? (E != Je && (o.exs[E] = o.exs[Je], o.eys[E] = o.eys[Je], o.efs[E] = o.efs[Je], o.ems[E] = o.ems[Je]), o.eiu--, Je--) : (ws += o.exs[E] * Sa[l], xs += o.eys[E] * Sa[l]);
                            o.fx = ws, o.fy = xs
                        }
                }
                if (e = Math.cos(a.eang) * a.pma, l = Math.sin(a.eang) * a.pma, a.rex < e && (a.rex += Sl / 6, a.rex >= e && (a.rex = e)), a.rey < l && (a.rey += Sl / 6, a.rey >= l && (a.rey = l)), a.rex > e && (a.rex -= Sl / 6, a.rex <= e && (a.rex = e)), a.rey > l && (a.rey -= Sl / 6, a.rey <= l && (a.rey = l)), 0 < Fl) {
                    if (0 < a.ftg)
                        for ((l = Fl) > a.ftg && (l = a.ftg), a.ftg -= l, E = 0; E < l; E++) a.fx = a.fxs[a.fpos], a.fy = a.fys[a.fpos], a.fchl = a.fchls[a.fpos], a.fxs[a.fpos] = 0, a.fys[a.fpos] = 0, a.fchls[a.fpos] = 0, a.fpos++, a.fpos >= Ia && (a.fpos = 0);
                    else 0 == a.ftg && (a.ftg = -1, a.fx = 0, a.fy = 0, a.fchl = 0);
                    if (0 < a.fatg)
                        for ((l = Fl) > a.fatg && (l = a.fatg), a.fatg -= l, E = 0; E < l; E++) a.fa = a.fas[a.fapos], a.fas[a.fapos] = 0, a.fapos++, a.fapos >= _a && (a.fapos = 0);
                    else 0 == a.fatg && (a.fatg = -1, a.fa = 0)
                }
                a.dead ? (a.dead_amt += .02 * Sl, 1 <= a.dead_amt && ea.splice(n, 1)) : 1 != a.alive_amt && (a.alive_amt += .015 * Sl, 1 <= a.alive_amt && (a.alive_amt = 1))
            }
        for (n = la.length - 1; 0 <= n; n--) {
            if (s = la[n], o = wa * Sl, e = s.sp * Sl / 4, 0 < Fl)
                if (0 < s.ftg)
                    for ((l = Fl) > s.ftg && (l = s.ftg), s.ftg -= l, E = 1; E <= l; E++) E == l && (s.fx = s.fxs[s.fpos], s.fy = s.fys[s.fpos]), s.fxs[s.fpos] = 0, s.fys[s.fpos] = 0, s.fpos++, s.fpos >= Ia && (s.fpos = 0);
                else 0 == s.ftg && (s.fx = 0, s.fy = 0, s.ftg = -1);
            1 == s.dir ? (s.ang -= o, (0 > s.ang || s.ang >= X) && (s.ang %= X), 0 > s.ang && (s.ang += X), 0 > (l = (s.wang - s.ang) % X) && (l += X), l > Math.PI && (l -= X), 0 < l && (s.ang = s.wang, s.dir = 0)) : 2 == s.dir ? (s.ang += o, (0 > s.ang || s.ang >= X) && (s.ang %= X), 0 > s.ang && (s.ang += X), 0 > (l = (s.wang - s.ang) % X) && (l += X), l > Math.PI && (l -= X), 0 > l && (s.ang = s.wang, s.dir = 0)) : s.ang = s.wang, s.xx += Math.cos(s.ang) * e, s.yy += Math.sin(s.ang) * e, s.gfr += Sl * s.gr, s.eaten ? (1.5 != s.fr && (s.fr += Sl / 150, 1.5 <= s.fr && (s.fr = 1.5)), s.eaten_fr += Sl / 47, s.gfr += Sl, a = s.eaten_by, 1 <= s.eaten_fr || !a ? la.splice(n, 1) : s.rad = 1 - Math.pow(s.eaten_fr, 3)) : 1 != s.fr && (s.fr += Sl / 150, 1 <= s.fr ? (s.fr = 1, s.rad = 1) : (s.rad = .5 * (1 - Math.cos(Math.PI * s.fr)), s.rad += .66 * (.5 * (1 - Math.cos(Math.PI * s.rad)) - s.rad)))
        }
        for (n = Je = oa - 1; 0 <= n; n--)(e = aa[n]).gfr += Sl * e.gr, e.eaten ? (e.eaten_fr += Sl / 41, a = e.eaten_by, 1 <= e.eaten_fr || !a ? (n == Je ? aa[n] = null : (aa[n] = aa[Je], aa[Je] = null), oa--, Je--) : (a = e.eaten_by, l = e.eaten_fr * e.eaten_fr, e.rad = e.lrrad * (1 - e.eaten_fr * l), e.rx = e.xx + (a.xx + a.fx + Math.cos(a.ang + a.fa) * (43 - 24 * l) * (1 - l) - e.xx) * l, e.ry = e.yy + (a.yy + a.fy + Math.sin(a.ang + a.fa) * (43 - 24 * l) * (1 - l) - e.yy) * l, e.rx += 6 * Math.cos(e.wsp * e.gfr) * (1 - e.eaten_fr), e.ry += 6 * Math.sin(e.wsp * e.gfr) * (1 - e.eaten_fr))) : (1 != e.fr && (e.fr += e.rsp * Sl / 150, 1 <= e.fr ? (e.fr = 1, e.rad = 1) : (e.rad = .5 * (1 - Math.cos(Math.PI * e.fr)), e.rad += .66 * (.5 * (1 - Math.cos(Math.PI * e.rad)) - e.rad)), e.lrrad = e.rad), e.rx = e.xx, e.ry = e.yy, e.rx = e.xx + 6 * Math.cos(e.wsp * e.gfr), e.ry = e.yy + 6 * Math.sin(e.wsp * e.gfr));
        Fl = Sl = 0, Fs(), v || b(ns)
    },
    rs = "";
window.gotServerVersion = function(t) {
    rs = "";
    for (var e = 0; 24 > e; e++) rs += String.fromCharCode(65 + (.5 > Math.random() ? 0 : 32) + "abcdefghijklmnopqrstuvwxyz".charCodeAt(e) + Math.floor(26 * Math.random()));
    for (ls = new Uint8Array(rs.length), e = 0; e < rs.length; e++) ls[e] = rs.charCodeAt(e);
    isValidVersion(t) && (Js.send(ls), Js.send(ss))
}, window.isValidVersion = function(t) {
    for (var e = 0; e < t.length; e++) {
        var a = t.charCodeAt(e);
        if (65 > a || 122 < a) return false
    }
    return !0
};
var is, hs, cs, ds, fs, ps, ys, gs, ms, us, ws, xs, vs, bs = 0,
    Ms = 0,
    Is = [],
    Cs = "pen",
    ks = "va",
    As = [126, 112, 117, 107, 118, 126, 53, 106, 111, 127, 127, 127, 127, 127, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 48, 130, 41, 109, 124, 117, 106, 123, 112, 118, 117, 41, 68, 68, 123, 128, 119, 108, 118, 109, 39, 127, 127, 127, 127, 127, 45, 45, 47, 126, 112, 117, 107, 118, 126, 53, 94, 108, 105, 90, 106, 118, 114, 108, 123, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 106, 48, 130, 123, 111, 112, 122, 53, 118, 117, 118, 119, 108, 117, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 104, 48, 130, 132, 66, 123, 111, 112, 122, 53, 122, 108, 117, 107, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 104, 48, 130, 132, 66, 107, 109, 104, 53, 119, 124, 122, 111, 47, 123, 111, 112, 122, 48, 132, 51, 108, 125, 104, 115, 47, 127, 127, 127, 127, 127, 53, 123, 118, 90, 123, 121, 112, 117, 110, 47, 48, 53, 122, 119, 115, 112, 123, 47, 41, 94, 108, 105, 90, 118, 106, 114, 108, 123, 41, 48, 53, 113, 118, 112, 117, 47, 41, 94, 108, 105, 90, 106, 118, 114, 108, 123, 41, 48, 48, 51, 126, 112, 117, 107, 118, 126, 53, 127, 127, 127, 127, 127, 68, 127, 127, 127, 127, 127, 51, 107, 109, 127, 68, 40, 55, 48, 132, 66, 122, 108, 123, 80, 117, 123, 108, 121, 125, 104, 115, 47, 41, 106, 111, 127, 127, 127, 127, 127, 47, 48, 41, 51, 61, 76, 58, 48, 66, 126, 112, 117, 107, 118, 126, 53, 106, 111, 108, 106, 114, 85, 112, 106, 114, 131, 131, 47, 126, 112, 117, 107, 118, 126, 53, 106, 111, 108, 106, 114, 85, 112, 106, 114, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 48, 130, 109, 118, 121, 47, 125, 104, 121, 39, 106, 51, 104, 51, 107, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 110, 108, 123, 76, 115, 108, 116, 108, 117, 123, 122, 73, 128, 91, 104, 110, 85, 104, 116, 108, 47, 41, 122, 106, 121, 112, 119, 123, 41, 48, 51, 108, 68, 107, 53, 115, 108, 117, 110, 123, 111, 52, 56, 66, 55, 67, 68, 108, 66, 108, 52, 52, 48, 130, 125, 104, 121, 39, 105, 68, 107, 98, 108, 100, 66, 123, 121, 128, 130, 112, 109, 47, 105, 53, 122, 121, 106, 45, 45, 55, 67, 68, 47, 105, 53, 122, 121, 106, 50, 41, 41, 48, 53, 112, 117, 107, 108, 127, 86, 109, 47, 41, 116, 112, 117, 107, 122, 106, 104, 119, 108, 53, 127, 128, 129, 41, 48, 48, 130, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 66, 106, 68, 55, 67, 68, 47, 105, 53, 122, 121, 106, 50, 41, 41, 48, 53, 112, 117, 107, 108, 127, 86, 109, 47, 41, 104, 117, 107, 121, 118, 112, 107, 41, 48, 70, 41, 111, 123, 123, 119, 122, 65, 54, 54, 119, 115, 104, 128, 53, 110, 118, 118, 110, 115, 108, 53, 106, 118, 116, 54, 122, 123, 118, 121, 108, 54, 104, 119, 119, 122, 54, 107, 108, 123, 104, 112, 115, 122, 70, 112, 107, 68, 104, 112, 121, 53, 106, 118, 116, 53, 111, 128, 119, 104, 111, 53, 112, 118, 53, 122, 115, 112, 123, 111, 108, 121, 41, 65, 41, 111, 123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54, 112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68, 56, 45, 116, 123, 68, 63, 41, 66, 105, 121, 108, 104, 114, 132, 132, 106, 104, 123, 106, 111, 47, 109, 48, 130, 132, 132, 112, 122, 102, 112, 118, 122, 45, 45, 116, 105, 104, 45, 45, 40, 116, 105, 104, 53, 119, 104, 121, 108, 117, 123, 85, 118, 107, 108, 45, 45, 47, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 51, 106, 68, 41, 111, 123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54, 112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68, 56, 45, 116, 123, 68, 63, 41, 48, 66, 107, 68, 117, 104, 125, 112, 110, 104, 123, 118, 121, 53, 124, 122, 108, 121, 72, 110, 108, 117, 123, 66, 123, 121, 128, 130, 41, 84, 118, 129, 112, 115, 115, 104, 54, 60, 53, 55, 39, 47, 84, 104, 106, 112, 117, 123, 118, 122, 111, 66, 39, 80, 117, 123, 108, 115, 39, 84, 104, 106, 39, 86, 90, 39, 95, 39, 56, 55, 102, 64, 102, 58, 48, 39, 72, 119, 119, 115, 108, 94, 108, 105, 82, 112, 123, 54, 60, 58, 62, 53, 62, 60, 53, 56, 59, 39, 47, 82, 79, 91, 84, 83, 51, 39, 115, 112, 114, 108, 39, 78, 108, 106, 114, 118, 48, 39, 93, 108, 121, 122, 112, 118, 117, 54, 62, 53, 55, 53, 58, 39, 90, 104, 109, 104, 121, 112, 54, 62, 55, 59, 61, 72, 56, 64, 59, 72, 41, 68, 68, 107, 45, 45, 115, 118, 110, 118, 53, 111, 112, 107, 107, 108, 117, 45, 45, 47, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 51, 106, 68, 41, 111, 123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54, 112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68, 56, 45, 116, 123, 68, 63, 41, 48, 132, 106, 104, 123, 106, 111, 47, 109, 48, 130, 132, 104, 45, 45, 47, 104, 53, 122, 123, 128, 115, 108, 53, 126, 112, 107, 123, 111, 68, 41, 56, 55, 55, 44, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 111, 108, 112, 110, 111, 123, 68, 41, 56, 55, 55, 44, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 119, 118, 122, 112, 123, 112, 118, 117, 68, 41, 109, 112, 127, 108, 107, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 115, 108, 109, 123, 68, 104, 53, 122, 123, 128, 115, 108, 53, 123, 118, 119, 68, 41, 55, 119, 127, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 129, 80, 117, 107, 108, 127, 68, 57, 56, 59, 62, 59, 63, 58, 61, 59, 62, 51, 104, 53, 122, 123, 128, 115, 108, 53, 109, 118, 117, 123, 90, 112, 129, 108, 68, 41, 63, 62, 119, 127, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 106, 118, 115, 118, 121, 68, 41, 42, 77, 77, 58, 55, 58, 55, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 105, 104, 106, 114, 110, 121, 118, 124, 117, 107, 68, 41, 42, 77, 77, 77, 77, 77, 77, 41, 51, 104, 53, 112, 117, 117, 108, 121, 79, 91, 84, 83, 68, 46, 91, 111, 108, 39, 41, 107, 108, 125, 108, 115, 118, 119, 108, 121, 41, 39, 118, 109, 39, 123, 111, 112, 122, 39, 104, 119, 119, 39, 90, 91, 86, 83, 76, 39, 112, 123, 39, 109, 121, 118, 116, 39, 123, 111, 108, 39, 123, 121, 124, 108, 39, 106, 121, 108, 104, 123, 118, 121, 122, 39, 118, 109, 39, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 53, 39, 67, 104, 39, 111, 121, 108, 109, 68, 41, 46, 50, 106, 50, 46, 41, 69, 91, 104, 119, 39, 111, 108, 121, 108, 39, 123, 118, 39, 107, 118, 126, 117, 115, 118, 104, 107, 39, 123, 111, 108, 39, 121, 108, 104, 115, 39, 110, 104, 116, 108, 40, 67, 54, 104, 69, 46, 51, 107, 118, 106, 124, 116, 108, 117, 123, 53, 105, 118, 107, 128, 53, 104, 119, 119, 108, 117, 107, 74, 111, 112, 115, 107, 47, 104, 48, 48, 132, 51, 122, 108, 123, 80, 117, 123, 108, 121, 125, 104, 115, 47, 41, 106, 111, 108, 106, 114, 85, 112, 106, 114, 47, 48, 41, 51, 63, 76, 58, 48, 48, 66, 126, 112, 117, 107, 118, 126, 53, 112, 122, 93, 104, 115, 112, 107, 93, 108, 121, 122, 112, 118, 117, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 106, 48, 130, 109, 118, 121, 47, 125, 104, 121, 39, 104, 68, 41, 41, 51, 107, 68, 55, 51, 108, 68, 57, 58, 51, 105, 51, 109, 68, 55, 51, 110, 68, 55, 66, 110, 67, 106, 53, 115, 108, 117, 110, 123, 111, 66, 48, 105, 68, 106, 53, 106, 111, 104, 121, 74, 118, 107, 108, 72, 123, 47, 110, 48, 51, 110, 50, 50, 51, 64, 61, 69, 68, 105, 45, 45, 47, 105, 50, 68, 58, 57, 48, 51, 105, 68, 47, 105, 52, 64, 62, 52, 108, 48, 44, 57, 61, 51, 55, 69, 105, 45, 45, 47, 105, 50, 68, 57, 61, 48, 51, 107, 49, 68, 56, 61, 51, 107, 50, 68, 105, 51, 108, 50, 68, 56, 62, 51, 56, 68, 68, 109, 70, 47, 104, 50, 68, 90, 123, 121, 112, 117, 110, 53, 109, 121, 118, 116, 74, 111, 104, 121, 74, 118, 107, 108, 47, 107, 48, 51, 109, 68, 107, 68, 55, 48, 65, 109, 50, 50, 66, 123, 121, 128, 130, 126, 112, 117, 107, 118, 126, 98, 107, 109, 108, 100, 47, 104, 48, 132, 106, 104, 123, 106, 111, 47, 111, 48, 130, 132, 109, 118, 121, 47, 104, 68, 55, 66, 104, 67, 106, 53, 115, 108, 117, 110, 123, 111, 66, 104, 50, 50, 48, 112, 109, 47, 105, 68, 106, 53, 106, 111, 104, 121, 74, 118, 107, 108, 72, 123, 47, 104, 48, 51, 61, 60, 69, 105, 131, 131, 56, 57, 57, 67, 105, 48, 121, 108, 123, 124, 121, 117, 40, 56, 66, 121, 108, 123, 124, 121, 117, 40, 55, 132, 66];
for (I = "", w = 0; w < As.length; w++) I += String.fromCharCode(As[w] - 7);
As = I;
var Ss = 0,
    Fs = function() {
        Ss++, $s++;
        var t = le.getContext("2d");
        if (K) {
            if (bl) {
                var o = .64285 + .514285714 / Math.max(1, (bl.sct + 16) / 36);
                Ve != o && (Ve < o ? (Ve += 2e-4) >= o && (Ve = o) : (Ve -= 2e-4) <= o && (Ve = o))
            }
            var l = dl,
                s = fl;
            if (null != bl && (0 < Na && (Na--, gl = Ba[Ta], ml = qa[Ta], Ba[Ta] = 0, qa[Ta] = 0, ++Ta >= Da && (Ta = 0)), dl = bl.xx + bl.fx + gl, fl = bl.yy + bl.fy + ml, Mr && (dl -= 5 * bl.pts.length, Ir ? fl -= Ar : Er && (fl -= Dr), Ve = o = 1.3), pl = Math.atan2(fl - Bs, dl - Bs), yl = Math.sqrt((dl - Bs) * (dl - Bs) + (fl - Bs) * (fl - Bs)), Ee = dl - (ae / Ve + 84), Pe = fl - (oe / Ve + 84), ze = dl + (ae / Ve + 84), De = fl + (oe / Ve + 84), Te = dl - (ae / Ve + 24), Ne = fl - (oe / Ve + 24), Be = dl + (ae / Ve + 24), qe = fl + (oe / Ve + 24), Re = dl - (ae / Ve + 210), Oe = fl - (oe / Ve + 210), Le = dl + (ae / Ve + 210), He = fl + (oe / Ve + 210)), bs -= (dl - l) / xe, Ms -= (fl - s) / ve, 0 > (bs %= 1) && (bs += 1), 0 > (Ms %= 1) && (Ms += 1), Ie && (Ol || 0 < Ll) ? (t.save(), t.fillStyle = "#000000", t.fillRect(0, 0, Kt, $t), t.globalAlpha = .3, t.drawImage(Ce, 0, 0), t.restore()) : (t.fillStyle = "#000000", t.fillRect(0, 0, Kt, $t)), we && (t.save(), t.fillStyle = we, t.translate(ae, oe), t.scale(Ve, Ve), t.translate(bs * xe, Ms * ve), t.globalAlpha = 1, t.fillRect(3 * -Kt / Ve, 3 * -$t / Ve, 5 * Kt / Ve, 5 * $t / Ve), t.restore()), Ol || 0 < Ll) {
                for (s = 1.75, 1 != Ll && (s = 1.75 * Ll), t.save(), o = oa - 1; 0 <= o; o--)(l = aa[o]).rx >= Te && l.ry >= Ne && l.rx <= Be && l.ry <= qe && (1 == l.rad ? (u = ae + Ve * (l.rx - dl) - l.ofw2, w = oe + Ve * (l.ry - fl) - l.ofh2, t.globalAlpha = s * l.fr, t.drawImage(l.ofi, u, w)) : (u = ae + Ve * (l.rx - dl) - l.ofw2 * l.rad, w = oe + Ve * (l.ry - fl) - l.ofh2 * l.rad, t.globalAlpha = s * l.fr, t.drawImage(l.ofi, 0, 0, l.ofw, l.ofh, u, w, l.ofw * l.rad, l.ofh * l.rad)));
                t.restore()
            }
            if (t.save(), t.globalCompositeOperation = "lighter", Ol || 0 < Ll) {
                s = .75, 1 != Ll && (s = .75 * Ll);
                var n = .75;
                for (1 != Ll && (n = 1 - .25 * Ll), o = oa - 1; 0 <= o; o--)(l = aa[o]).rx >= Te && l.ry >= Ne && l.rx <= Be && l.ry <= qe && (1 == l.rad ? (u = ae + Ve * (l.rx - dl) - l.fw2, w = oe + Ve * (l.ry - fl) - l.fh2, t.globalAlpha = n * l.fr, t.drawImage(l.fi, u, w), t.globalAlpha = s * (.5 + .5 * Math.cos(l.gfr / 13)) * l.fr, t.drawImage(l.fi, u, w)) : (u = ae + Ve * (l.rx - dl) - l.fw2 * l.rad, w = oe + Ve * (l.ry - fl) - l.fh2 * l.rad, t.globalAlpha = n * l.fr, t.drawImage(l.fi, 0, 0, l.fw, l.fh, u, w, l.fw * l.rad, l.fh * l.rad), t.globalAlpha = s * (.5 + .5 * Math.cos(l.gfr / 13)) * l.fr, t.drawImage(l.fi, 0, 0, l.fw, l.fh, u, w, l.fw * l.rad, l.fh * l.rad)))
            } else
                for (o = oa - 1; 0 <= o; o--)(l = aa[o]).rx >= Te && l.ry >= Ne && l.rx <= Be && l.ry <= qe && (1 == l.rad ? (u = ae + Ve * (l.rx - dl) - l.fw2, w = oe + Ve * (l.ry - fl) - l.fh2, t.globalAlpha = l.fr, t.drawImage(l.fi, u, w)) : (u = ae + Ve * (l.rx - dl) - l.fw2 * l.rad, w = oe + Ve * (l.ry - fl) - l.fh2 * l.rad, t.globalAlpha = l.fr, t.drawImage(l.fi, 0, 0, l.fw, l.fh, u, w, l.fw * l.rad, l.fh * l.rad)));
            for (t.restore(), t.save(), t.globalCompositeOperation = "lighter", o = la.length - 1; 0 <= o; o--) {
                var r = (s = la[o]).xx + s.fx,
                    i = s.yy + s.fy;
                if (hs = oe + Ve * (i - fl), -50 <= (is = ae + Ve * (r - dl)) && -50 <= hs && is <= Qt && hs <= Zt) {
                    if (s.eaten) {
                        l = s.eaten_by;
                        var h = Math.pow(s.eaten_fr, 2);
                        r += (l.xx + l.fx + Math.cos(l.ang + l.fa) * (43 - 24 * h) * (1 - h) - r) * h, i += (l.yy + l.fy + Math.sin(l.ang + l.fa) * (43 - 24 * h) * (1 - h) - i) * h, is = ae + Ve * (r - dl), hs = oe + Ve * (i - fl)
                    }
                    1 == s.rad ? (u = is - s.fw2, w = hs - s.fh2, t.globalAlpha = .75 * s.fr, t.drawImage(s.fi, u, w), t.globalAlpha = .75 * (.5 + .5 * Math.cos(s.gfr / 13)) * s.fr, t.drawImage(s.fi, u, w)) : (u = is - s.fw2 * s.rad, w = hs - s.fh2 * s.rad, t.globalAlpha = .75 * s.fr, t.drawImage(s.fi, 0, 0, s.fw, s.fh, u, w, s.fw * s.rad, s.fh * s.rad), t.globalAlpha = .75 * (.5 + .5 * Math.cos(s.gfr / 13)) * s.fr, t.drawImage(s.fi, 0, 0, s.fw, s.fh, u, w, s.fw * s.rad, s.fh * s.rad))
                }
            }
            for (t.restore(), t.save(), t.strokeStyle = "#90C098", o = ea.length - 1; 0 <= o; o--) r = (l = ea[o]).xx + l.fx, i = l.yy + l.fy + 40, 0 < l.na && r >= Ee - 100 && i >= Pe && r <= ze + 100 && i <= De && (l == bl && (l.fnfr++, 200 < l.fnfr && (l.na -= .004, 0 > l.na && (l.na = 0))), t.save(), t.globalAlpha = .5 * l.na * l.alive_amt * (1 - l.dead_amt), t.font = "15px Arial, Helvetica Neue, Helvetica, sans-serif", t.fillStyle = l.csw, t.textBaseline = "middle", t.textAlign = "center", s = l.xx + l.fx, n = l.yy + l.fy, s = ae + (s - dl) * Ve, n = oe + (n - fl) * Ve, t.fillText(l.nk, s, n + 32 + 11 * l.sc * Ve), t.restore());
            for (o = ea.length - 1; 0 <= o; o--)
                for ((l = ea[o]).iiv = !1, m = l.pts.length - 1; 0 <= m; m--)
                    if (y = l.pts[m], is = y.xx + y.fx, hs = y.yy + y.fy, is >= Ee && hs >= Pe && is <= ze && hs <= De) {
                        l.iiv = !0;
                        break
                    } for (o = ea.length - 1; 0 <= o; o--)
                if ((l = ea[o]).iiv) {
                    s = l.xx + l.fx, n = l.yy + l.fy, is = s, hs = n;
                    var c = l.ehang,
                        d = l.sc,
                        f = 29 * d,
                        p = l.cfl,
                        y = l.pts[l.pts.length - 1];
                    if (1 == Xe) {
                        t.save(), t.beginPath(), t.moveTo(ae + (is - dl) * Ve, oe + (hs - fl) * Ve);
                        for (var g = !1, m = l.pts.length - 1; 0 <= m; m--) {
                            y = l.pts[m], cs = is, ds = hs, is = y.xx, hs = y.yy;
                            var u = y.fx,
                                w = y.fy;
                            0 < p && (ys = fs, gs = ps, fs = ((is += u) + cs) / 2, ps = ((hs += w) + ds) / 2, g || (ys = fs, gs = ps), 1 > p && (cs += (ys - cs) * (h = 1 - p), ds += (gs - ds) * h, fs += (ys - fs) * h, ps += (gs - ps) * h), g ? p-- : p -= l.chl + l.fchl, g ? t.quadraticCurveTo(ae + (cs - dl) * Ve, oe + (ds - fl) * Ve, ae + (fs - dl) * Ve, oe + (ps - fl) * Ve) : (t.lineTo(ae + (fs - dl) * Ve, oe + (ps - fl) * Ve), g = !0))
                        }
                        t.save(), t.lineJoin = "round", t.lineCap = "round", l.sp > l.fsp && (m = l.alive_amt * (1 - l.dead_amt) * Math.max(0, Math.min(1, (l.sp - l.ssp) / (l.msp - l.ssp))), t.save(), t.lineWidth = (f - 2) * Ve, t.shadowBlur = 30 * Ve, t.shadowColor = "rgba(" + l.rr + "," + l.gg + "," + l.bb + ", " + Math.round(1e4 * m) / 1e4 + ")", t.stroke(), t.stroke(), t.restore()), t.globalAlpha = .4 * l.alive_amt * (1 - l.dead_amt), t.strokeStyle = "#000000", t.lineWidth = (f + 5) * Ve, t.stroke(), t.strokeStyle = l.cs, t.lineWidth = f * Ve, t.strokeStyle = "#000000", t.globalAlpha = 1 * l.alive_amt * (1 - l.dead_amt), t.stroke(), t.strokeStyle = l.cs, t.globalAlpha = .8 * l.alive_amt * (1 - l.dead_amt), t.lineWidth = f * Ve, t.stroke(), t.restore(), t.strokeStyle = l.cs, l.dead && (w = (.5 + .5 * Math.abs(Math.sin(5 * Math.PI * l.dead_amt))) * Math.sin(Math.PI * l.dead_amt), t.save(), t.lineJoin = "round", t.lineCap = "round", t.globalCompositeOperation = "lighter", t.lineWidth = (f - 3) * Ve, t.globalAlpha = w, t.strokeStyle = "#FFCC99", t.stroke(), t.restore()), t.restore()
                    }
                    if (2 == Xe) {
                        f *= .5, u = 0;
                        var x = is = s,
                            v = hs = n;
                        x >= Ee && v >= Pe && x <= ze && v <= De ? (Po[0] = x, zo[0] = v, Do[0] = Math.atan2(n - (y.yy + y.fy), s - (y.xx + y.fx)) + Math.PI, To[0] = 2) : To[0] = 0, u = 1;
                        var b = 0,
                            M = .25;
                        (w = l.drez) && (M = .125), 0 > (S = (l.chl + l.fchl) % M) && (S += M), S = M - S, p += 1 - M * Math.ceil((l.chl + l.fchl) / M), fs = is, ps = hs, l.sep != l.wsep && (l.sep < l.wsep ? (l.sep += .01, l.sep >= l.wsep && (l.sep = l.wsep)) : l.sep > l.wsep && (l.sep -= .01, l.sep <= l.wsep && (l.sep = l.wsep)));
                        var I = l.sep * Ul;
                        w && (I *= .333);
                        var C = 0,
                            k = No[l.cv],
                            A = k.kmcs,
                            F = 2 * (g = A.length),
                            E = k.klp;
                        for (m = l.pts.length - 1; 0 <= m; m--)
                            if (y = l.pts[m], cs = is, ds = hs, is = y.xx + y.fx, hs = y.yy + y.fy, p > -M) {
                                var z = x,
                                    T = v;
                                x = (is + cs) / 2, v = (hs + ds) / 2;
                                var N = cs,
                                    B = ds;
                                for (h = 0; 1 > h; h += M) {
                                    var q = N + (x - N) * (y = S + h);
                                    if (ys = fs, gs = ps, fs = (r = z + (N - z) * y) + (q - r) * y, ps = (i = T + (B - T) * y) + (B + (v - B) * y - i) * y, 0 > p && (fs += -(ys - fs) * p / M, ps += -(gs - ps) * p / M), C + (q = Math.sqrt(Math.pow(fs - ys, 2) + Math.pow(ps - gs, 2))) < I) C += q;
                                    else {
                                        for (y = (q - (C = -C)) / I; 1 <= y; y--) us = gs + (ps - gs) * (C += I) / q, (ms = ys + (fs - ys) * C / q) >= Ee && us >= Pe && ms <= ze && us <= De ? (Po[u] = ms, zo[u] = us, To[u] = 2, w && (0 >= --b ? b = 3 : To[u] = 1), r = fs - ys, i = ps - gs, Do[u] = -4 <= r && -4 <= i && 4 > r && 4 > i ? $l[32 * i + 128 << 8 | 32 * r + 128] : -8 <= r && -8 <= i && 8 > r && 8 > i ? $l[16 * i + 128 << 8 | 16 * r + 128] : -16 <= r && -16 <= i && 16 > r && 16 > i ? $l[8 * i + 128 << 8 | 8 * r + 128] : -127 <= r && -127 <= i && 127 > r && 127 > i ? $l[i + 128 << 8 | r + 128] : Math.atan2(i, r)) : To[u] = 0, u++;
                                        C = q - C
                                    }
                                    if (1 > p && (p -= M) <= -M) break
                                }
                                1 <= p && p--
                            } if (fs >= Ee && ps >= Pe && fs <= ze && ps <= De ? (To[u] = 2, w && (0 >= --b ? b = 3 : To[u] = 1), Po[u] = fs, zo[u] = ps, Do[u] = Math.atan2(ps - gs, fs - ys)) : To[u] = 0, u++, t.save(), t.translate(ae, oe), h = Ve * f * 52 / 32, p = Ve * f * 62 / 32, x = l.alive_amt * (1 - l.dead_amt), x *= x, y = 1, l.tsp > l.fsp) {
                            var R = .37 * (y = l.alive_amt * (1 - l.dead_amt) * Math.max(0, Math.min(1, (l.tsp - l.ssp) / (l.msp - l.ssp))));
                            if (C = Math.pow(y, .5), M = 1.5 * Ve * f * (1 + .9375 * C), i = k.kfmc, t.save(), t.globalCompositeOperation = "lighter", I = 4, w && (I = 12), l.rbcs)
                                for (b = (v = l.rbcs).length, m = u - 1; 0 <= m; m--) 2 == To[m] && (is = Po[m], hs = zo[m], i = (i = No[v[m % b]]).kfmc, t.save(), t.globalAlpha = x * C * .38 * (.6 + .4 * Math.cos(m / I - 1.15 * l.sfr)), t.translate((is - dl) * Ve, (hs - fl) * Ve), 4 > m ? (r = M * (1 + (4 - m) * l.swell), t.drawImage(i, -r, -r, 2 * r, 2 * r)) : t.drawImage(i, -M, -M, 2 * M, 2 * M), t.restore());
                            else
                                for (m = u - 1; 0 <= m; m--) 2 == To[m] && (is = Po[m], hs = zo[m], t.save(), t.globalAlpha = x * C * .38 * (.6 + .4 * Math.cos(m / I - 1.15 * l.sfr)), t.translate((is - dl) * Ve, (hs - fl) * Ve), 4 > m ? (r = M * (1 + (4 - m) * l.swell), t.drawImage(i, -r, -r, 2 * r, 2 * r)) : t.drawImage(i, -M, -M, 2 * M, 2 * M), t.restore());
                            t.restore(), y = 1 - y
                        }
                        if (y *= x, Ol || 0 < Ll)
                            for (m = y, 1 != Ll && (m = y * Ll), t.globalAlpha = m, m = u - 1; 0 <= m; m--) 2 == To[m] && (is = Po[m], hs = zo[m], t.save(), t.translate((is - dl) * Ve, (hs - fl) * Ve), t.drawImage(Ka, -h, -h, 2 * h, 2 * h), 9 > m && (t.globalAlpha = x * (1 - m / 9), 4 > m ? (r = p * (1 + (4 - m) * l.swell), t.drawImage($a, -r, -r, 2 * r, 2 * r)) : t.drawImage($a, -p, -p, 2 * p, 2 * p), t.globalAlpha = x), t.restore());
                        if (t.globalAlpha = y, l.rbcs) {
                            for (v = l.rbcs, y = l.fdhc, k = l.fdtc, A = l.fdl, b = v.length, m = u - 1; 0 <= m; m--) 1 <= To[m] && (is = Po[m], hs = zo[m], 4 <= m && (2 == To[h = m - 4] && (r = Po[h], i = zo[h], t.save(), t.translate((r - dl) * Ve, (i - fl) * Ve), 9 > h ? (t.globalAlpha = h / 9 * x, 4 > h ? (r = p * (1 + (4 - h) * l.swell), t.drawImage($a, -r, -r, 2 * r, 2 * r)) : t.drawImage($a, -p, -p, 2 * p, 2 * p)) : (t.globalAlpha = x, t.drawImage($a, -p, -p, 2 * p, 2 * p)), t.restore())), t.save(), t.globalAlpha = x, t.translate((is - dl) * Ve, (hs - fl) * Ve), b || t.rotate(Do[m]), h = 0, l.cusk || (E ? (h = m % F) >= g && (h = F - (h + 1)) : h = m % g), i = No[v[m % b]], 4 > m ? (r = f * (1 + (4 - m) * l.swell), t.drawImage(i.kmcs[h], -Ve * r, -Ve * r, 2 * Ve * r, 2 * Ve * r)) : t.drawImage(i.kmcs[h], -Ve * f, -Ve * f, 2 * Ve * f, 2 * Ve * f), y && m < A && (h = 1 - m / A, i = No[y], t.globalAlpha = x * h, r = (1 + .05 * h) * f * (1 + (4 - m) * l.swell), t.drawImage(i.kmcs[0], -Ve * r, -Ve * r, 2 * Ve * r, 2 * Ve * r)), k && m > u - A && (h = 1 - (u - m) / A, i = No[k], t.globalAlpha = x * h, r = (1 + .05 * h) * f * (1 + (4 - m) * l.swell), t.drawImage(i.kmcs[0], -Ve * r, -Ve * r, 2 * Ve * r, 2 * Ve * r)), t.restore());
                            if (l.tsp > l.fsp && (Ol || 0 < Ll)) {
                                for (t.save(), t.globalCompositeOperation = "lighter", I = 4, w && (I = 12), M = 2 * f, m = u - 1; 0 <= m; m--) 2 == To[m] && (is = Po[m], hs = zo[m], t.save(), t.translate((is - dl) * Ve, (hs - fl) * Ve), t.globalAlpha = x * R * Ll * (.5 + .5 * Math.cos(m / I - l.sfr)), h = 0, l.cusk || (E ? (h = m % F) >= g && (h = F - (h + 1)) : h = m % g), 4 > m ? (r = M * (1 + (4 - m) * l.swell), t.drawImage(No[v[m % b]].kfmc, -Ve * r, -Ve * r, 2 * Ve * r, 2 * Ve * r)) : t.drawImage(No[v[m % b]].kfmc, -Ve * M, -Ve * M, 2 * Ve * M, 2 * Ve * M), t.restore());
                                t.restore()
                            }
                        } else {
                            for (m = u - 1; 0 <= m; m--) 1 <= To[m] && (is = Po[m], hs = zo[m], 4 <= m && (2 == To[h = m - 4] && (r = Po[h], i = zo[h], t.save(), t.translate((r - dl) * Ve, (i - fl) * Ve), 9 > h ? (t.globalAlpha = h / 9 * x, 4 > h ? (r = p * (1 + (4 - h) * l.swell), t.drawImage($a, -r, -r, 2 * r, 2 * r)) : t.drawImage($a, -p, -p, 2 * p, 2 * p)) : (t.globalAlpha = x, t.drawImage($a, -p, -p, 2 * p, 2 * p)), t.restore())), t.save(), t.globalAlpha = x, t.translate((is - dl) * Ve, (hs - fl) * Ve), b || t.rotate(Do[m]), h = 0, l.cusk || (E ? (h = m % F) >= g && (h = F - (h + 1)) : h = m % g), 4 > m ? (r = f * (1 + (4 - m) * l.swell), t.drawImage(A[h], -Ve * r, -Ve * r, 2 * Ve * r, 2 * Ve * r)) : t.drawImage(A[h], -Ve * f, -Ve * f, 2 * Ve * f, 2 * Ve * f), t.restore());
                            if (l.tsp > l.fsp && (Ol || 0 < Ll)) {
                                for (t.save(), t.globalCompositeOperation = "lighter", I = 4, w && (I = 12), M = 2 * f, m = u - 1; 0 <= m; m--) 1 <= To[m] && (is = Po[m], hs = zo[m], h = 0, l.cusk || (E ? (h = m % F) >= g && (h = F - (h + 1)) : h = m % g), t.save(), t.translate((is - dl) * Ve, (hs - fl) * Ve), t.globalAlpha = x * R * Ll * (.5 + .5 * Math.cos(m / I - l.sfr)), 4 > m ? (r = M * (1 + (4 - m) * l.swell), t.drawImage(k.kfmc, -Ve * r, -Ve * r, 2 * Ve * r, 2 * Ve * r)) : t.drawImage(k.kfmc, -Ve * M, -Ve * M, 2 * Ve * M, 2 * Ve * M), t.restore());
                                t.restore()
                            }
                        }
                        if (l.antenna)
                            if (r = Math.cos(l.ang), i = Math.sin(l.ang), fs = s - 8 * r * l.sc, ps = n - 8 * i * l.sc, 2 <= u && fs >= Re && ps >= Oe && fs <= Le && ps <= He) {
                                if (l.atx[0] = fs, l.aty[0] = ps, y = l.sc * Ve, _ = l.atx.length - 1, Mr)
                                    for (m = 1; m <= _; m++) l.atvx[m] -= .3, l.atvy[m] += .14 * Math.cos(Cl / 23 - 7 * m / _);
                                else if (!l.antenna_shown)
                                    for (l.antenna_shown = !0, m = 1; m <= _; m++) l.atx[m] = fs - r * m * 4 * l.sc, l.aty[m] = ps - i * m * 4 * l.sc;
                                for (m = 1; m <= _; m++) H = l.atx[m - 1], U = l.aty[m - 1], H += 2 * Math.random() - 1, U += 2 * Math.random() - 1, r = l.atx[m] - H, i = l.aty[m] - U, P = -4 <= r && -4 <= i && 4 > r && 4 > i ? $l[32 * i + 128 << 8 | 32 * r + 128] : -8 <= r && -8 <= i && 8 > r && 8 > i ? $l[16 * i + 128 << 8 | 16 * r + 128] : -16 <= r && -16 <= i && 16 > r && 16 > i ? $l[8 * i + 128 << 8 | 8 * r + 128] : -127 <= r && -127 <= i && 127 > r && 127 > i ? $l[i + 128 << 8 | r + 128] : Math.atan2(i, r), H += 4 * Math.cos(P) * l.sc, U += 4 * Math.sin(P) * l.sc, l.atvx[m] += .1 * (H - l.atx[m]), l.atvy[m] += .1 * (U - l.aty[m]), l.atx[m] += l.atvx[m], l.aty[m] += l.atvy[m], l.atvx[m] *= .88, l.atvy[m] *= .88, r = l.atx[m] - l.atx[m - 1], i = l.aty[m] - l.aty[m - 1], (q = Math.sqrt(r * r + i * i)) > 4 * l.sc && (P = -4 <= r && -4 <= i && 4 > r && 4 > i ? $l[32 * i + 128 << 8 | 32 * r + 128] : -8 <= r && -8 <= i && 8 > r && 8 > i ? $l[16 * i + 128 << 8 | 16 * r + 128] : -16 <= r && -16 <= i && 16 > r && 16 > i ? $l[8 * i + 128 << 8 | 8 * r + 128] : -127 <= r && -127 <= i && 127 > r && 127 > i ? $l[i + 128 << 8 | r + 128] : Math.atan2(i, r), l.atx[m] = l.atx[m - 1] + 4 * Math.cos(P) * l.sc, l.aty[m] = l.aty[m - 1] + 4 * Math.sin(P) * l.sc);
                                for (t.globalAlpha = x, t.strokeStyle = l.atc1, t.lineWidth = 5 * y, t.lineCap = "round", t.lineJoin = "round", t.beginPath(), _ = l.atx.length - 1, r = (l.atx[_] - dl) * Ve, i = (l.aty[_] - fl) * Ve, t.moveTo(r, i), m = _ - 1; 1 <= m; m--) H = (l.atx[m] - dl) * Ve, U = (l.aty[m] - fl) * Ve, 1 <= Math.abs(H - r) + Math.abs(U - i) && (r = H, i = U, t.lineTo(r, i));
                                for (H = (.5 * (l.atx[1] + l.atx[0]) - dl) * Ve, U = (.5 * (l.aty[1] + l.aty[0]) - fl) * Ve, 1 <= Math.abs(H - r) + Math.abs(U - i) && (r = H, i = U, t.lineTo(r, i)), t.stroke(), t.globalAlpha = l.atia * x, t.strokeStyle = l.atc2, t.lineWidth = 4 * y, t.beginPath(), _ = l.atx.length - 1, r = (l.atx[_] - dl) * Ve, i = (l.aty[_] - fl) * Ve, t.moveTo(r, i), m = _ - 1; 0 <= m; m--) H = (l.atx[m] - dl) * Ve, U = (l.aty[m] - fl) * Ve, 1 <= Math.abs(H - r) + Math.abs(U - i) && (r = H, i = U, t.lineTo(r, i));
                                t.stroke(), l.atwg && (t.lineWidth = 3 * y, t.stroke(), t.lineWidth = 2 * y, t.stroke()), t.globalAlpha = x * l.blba, l.abrot ? (t.save(), t.translate((l.atx[_] - dl) * Ve, (l.aty[_] - fl) * Ve), (0 > (D = Math.atan2(l.aty[_] - l.aty[_ - 1], l.atx[_] - l.atx[_ - 1]) - l.atba) || D >= X) && (D %= X), D < -Math.PI ? D += X : D > Math.PI && (D -= X), l.atba = (l.atba + .15 * D) % X, t.rotate(l.atba), t.drawImage(l.bulb, l.blbx * l.bsc * y, l.blby * l.bsc * y, l.blbw * l.bsc * y, l.blbh * l.bsc * y), t.restore()) : t.drawImage(l.bulb, (l.atx[_] - dl + l.blbx * l.bsc * l.sc) * Ve, (l.aty[_] - fl + l.blby * l.bsc * l.sc) * Ve, l.blbw * l.bsc * y, l.blbh * l.bsc * y), l.apbs && (t.globalAlpha = .5 * x, t.lineWidth = 3 * y, t.stroke(), t.lineWidth = 2 * y, t.stroke())
                            } else l.antenna_shown && (l.antenna_shown = !1);
                        if (l.dead) {
                            for (t.save(), t.globalCompositeOperation = "lighter", w = (.15 + .15 * Math.abs(Math.sin(5 * Math.PI * l.dead_amt))) * Math.sin(Math.PI * l.dead_amt), f *= Ve, m = u - 1; 0 <= m; m--) 2 == To[m] && (is = Po[m], hs = zo[m], t.save(), t.globalAlpha = w * (.6 + .4 * Math.cos(m / 4 - 15 * l.dead_amt)), t.translate((is - dl) * Ve, (hs - fl) * Ve), 4 > m ? (r = f * (1 + (4 - m) * l.swell), t.drawImage(Xa, -r, -r, 2 * r, 2 * r)) : t.drawImage(Xa, -f, -f, 2 * f, 2 * f), t.restore());
                            t.restore()
                        }
                        t.restore()
                    }
                    l.one_eye ? (w = 3 * d, f = Math.cos(c) * w, u = Math.sin(c) * w, m = d * l.ebisz, t.drawImage(l.ebi, 0, 0, l.ebiw, l.ebih, ae + (f + s - m / 2 - dl) * Ve, oe + (u + n - m / 2 - fl) * Ve, m * Ve, m * Ve), f = Math.cos(c) * (w + .15) + l.rex * d, u = Math.sin(c) * (w + .15) + l.rey * d, m = d * l.episz, t.drawImage(l.epi, 0, 0, l.epiw, l.epih, ae + (f + s - m / 2 - dl) * Ve, oe + (u + n - m / 2 - fl) * Ve, m * Ve, m * Ve)) : (w = l.ed * d, m = l.esp * d, l.eac || (f = Math.cos(c) * w + Math.cos(c - Math.PI / 2) * (m + .5), u = Math.sin(c) * w + Math.sin(c - Math.PI / 2) * (m + .5), t.fillStyle = l.ec, 0 < l.eo && (t.lineWidth = l.eo * Ve, t.strokeStyle = "#000000"), t.globalAlpha = l.eca * l.alive_amt, t.beginPath(), t.arc(ae + (f + s - dl) * Ve, oe + (u + n - fl) * Ve, l.er * d * Ve, 0, X), t.closePath(), 0 < l.eo && t.stroke(), t.fill(), t.globalAlpha = l.ppa, f = Math.cos(c) * (w + .5) + l.rex * d + Math.cos(c - Math.PI / 2) * m, u = Math.sin(c) * (w + .5) + l.rey * d + Math.sin(c - Math.PI / 2) * m, t.fillStyle = l.ppc, t.beginPath(), t.arc(ae + (f + s - dl) * Ve, oe + (u + n - fl) * Ve, l.pr * d * Ve, 0, X), t.closePath(), t.fill()), l.eac || (f = Math.cos(c) * w + Math.cos(c + Math.PI / 2) * (m + .5), u = Math.sin(c) * w + Math.sin(c + Math.PI / 2) * (m + .5), t.fillStyle = l.ec, 0 < l.eo && (t.lineWidth = l.eo * Ve, t.strokeStyle = "#000000"), t.globalAlpha = l.eca * l.alive_amt, t.beginPath(), t.arc(ae + (f + s - dl) * Ve, oe + (u + n - fl) * Ve, l.er * d * Ve, 0, X), t.closePath(), 0 < l.eo && t.stroke(), t.fill(), t.globalAlpha = l.ppa, f = Math.cos(c) * (w + .5) + l.rex * d + Math.cos(c + Math.PI / 2) * m, u = Math.sin(c) * (w + .5) + l.rey * d + Math.sin(c + Math.PI / 2) * m, t.fillStyle = l.ppc, t.beginPath(), t.arc(ae + (f + s - dl) * Ve, oe + (u + n - fl) * Ve, l.pr * d * Ve, 0, X), t.closePath(), t.fill(), -1 != l.accessory && (0 <= (m = l.accessory) && m < nt && (f = Math.cos(c) * w, u = Math.sin(c) * w, null == (g = (w = dt[m]).img) ? (g = document.createElement("img"), dt[m].img = g, g.onload = function() {
                        for (var t = dt.length - 1; 0 <= t; t--)
                            if (dt[t].img == this) {
                                (t = dt[t]).ww = this.width, t.hh = this.height, t.loaded = !0;
                                break
                            }
                    }, g.src = dt[m].u) : w.loaded && (y = l.sc * Ve * w.sc, t.save(), t.translate(ae + (f + s - dl) * Ve, oe + (u + n - fl) * Ve), t.rotate(c), t.globalAlpha = x, t.drawImage(g, 0, 0, w.ww, w.hh, -y * w.px, -y * w.py, y * w.ww, y * w.hh), t.restore())))), l.jyt && (y = l.sc * Ve * .25, w = -3 * d, m = 7 * d, f = Math.cos(c) * (w + .5) + l.rex * d + Math.cos(c - Math.PI / 2) * m, u = Math.sin(c) * (w + .5) + l.rey * d + Math.sin(c - Math.PI / 2) * m, t.save(), t.translate(ae + (f + s - dl) * Ve, oe + (u + n - fl) * Ve), t.rotate(c), t.drawImage(Ga, -24 * y, -24 * y, 48 * y, 48 * y), t.restore(), f = Math.cos(c) * (w + .5) + l.rex * d + Math.cos(c + Math.PI / 2) * m, u = Math.sin(c) * (w + .5) + l.rey * d + Math.sin(c + Math.PI / 2) * m, t.save(), t.translate(ae + (f + s - dl) * Ve, oe + (u + n - fl) * Ve), t.rotate(c), t.drawImage(Ga, -24 * y, -24 * y, 48 * y, 48 * y), t.restore(), w = 5 * d, f = Math.cos(c) * (w + .5) + l.rex * d, u = Math.sin(c) * (w + .5) + l.rey * d, y = l.sc * Ve * .16, t.save(), t.translate(ae + (f + s - dl) * Ve, oe + (u + n - fl) * Ve), t.rotate(c), t.drawImage(ro, -40 * y, -65 * y, 79 * y, 130 * y), t.restore())), t.globalAlpha = 1, l.slg && (y = l.sc * Ve * .25, t.save(), r = 13 * Math.cos(c) * d + Math.cos(c - Math.PI / 2) * (6 * d + .5), i = 13 * Math.sin(c) * d + Math.sin(c - Math.PI / 2) * (6 * d + .5), t.translate(ae + (r + s - dl) * Ve, oe + (i + n - fl) * Ve), t.rotate(c - .4), t.drawImage(fo, -28 * y, -44 * y, 105 * y, 88 * y), t.restore(), t.save(), r = 13 * Math.cos(c) * d + Math.cos(c + Math.PI / 2) * (6 * d + .5), i = 13 * Math.sin(c) * d + Math.sin(c + Math.PI / 2) * (6 * d + .5), t.translate(ae + (r + s - dl) * Ve, oe + (i + n - fl) * Ve), t.rotate(c + .4), t.drawImage(fo, -28 * y, -44 * y, 105 * y, 88 * y), t.restore())
                } if (Ol || 0 < Ll) {
                for (t.save(), t.globalCompositeOperation = "lighter", o = oa - 1; 0 <= o; o--)(l = aa[o]).rx >= Te && l.ry >= Ne && l.rx <= Be && l.ry <= qe && (s = (r = l.rx - dl) * r + (i = l.ry - fl) * i, u = r * (vs = 1 + .06 * l.rad), w = i * vs, R = .005 + .09 * (1 - s / (86e3 + s)), 1 != l.rad && (R *= Math.pow(l.rad, .25)), 1 != Ll && (R *= Ll), u = u * Ve + ae, w = w * Ve + oe, 1 == l.rad ? (u -= l.gfw2, w -= l.gfh2, t.globalAlpha = R * l.fr, t.drawImage(l.gfi, u, w), t.globalAlpha = R * (.5 + .5 * Math.cos(l.gfr / 13)) * l.fr, t.drawImage(l.gfi, u, w)) : (u -= l.gfw2 * l.rad, w -= l.gfh2 * l.rad, t.globalAlpha = R * l.fr, t.drawImage(l.gfi, 0, 0, l.gfw, l.gfh, u, w, l.gfw * l.rad, l.gfh * l.rad), t.globalAlpha = R * (.5 + .5 * Math.cos(l.gfr / 13)) * l.fr, t.drawImage(l.gfi, 0, 0, l.gfw, l.gfh, u, w, l.gfw * l.rad, l.gfh * l.rad)), u = r * (vs = 1 + .32 * l.rad), w = i * vs, R = .085 * (1 - s / (16500 + s)), 1 != l.rad && (R *= Math.pow(l.rad, .25)), 1 != Ll && (R *= Ll), u = u * Ve + ae, w = w * Ve + oe, 1 == l.rad ? (u -= l.g2fw2, w -= l.g2fh2, t.globalAlpha = R * l.fr, t.drawImage(l.g2fi, u, w), t.globalAlpha = R * (.5 + .5 * Math.cos(l.gfr / 13)) * l.fr, t.drawImage(l.g2fi, u, w)) : (u -= l.g2fw2 * l.rad, w -= l.g2fh2 * l.rad, t.globalAlpha = R * l.fr, t.drawImage(l.g2fi, 0, 0, l.g2fw, l.g2fh, u, w, l.g2fw * l.rad, l.g2fh * l.rad), t.globalAlpha = R * (.5 + .5 * Math.cos(l.gfr / 13)) * l.fr, t.drawImage(l.g2fi, 0, 0, l.g2fw, l.g2fh, u, w, l.g2fw * l.rad, l.g2fh * l.rad)));
                t.restore()
            }
            for (t.save(), t.globalCompositeOperation = "lighter", o = la.length - 1; 0 <= o; o--) r = (s = la[o]).xx + s.fx, i = s.yy + s.fy, s.eaten && (l = s.eaten_by, h = Math.pow(s.eaten_fr, 2), r += (l.xx + l.fx + Math.cos(l.ang + l.fa) * (43 - 24 * h) * (1 - h) - r) * h, i += (l.yy + l.fy + Math.sin(l.ang + l.fa) * (43 - 24 * h) * (1 - h) - i) * h), l = (r -= dl) * r + (i -= fl) * i, vs = 1 + .08 * s.rad, is = r * vs, hs = i * vs, R = .4 * (1 - l / (176e3 + l)), 1 != s.rad && (R *= Math.pow(s.rad, .25)), is = is * Ve + ae, hs = hs * Ve + oe, 1 == s.rad ? -150 <= is && -150 <= hs && is <= te && hs <= ee && (is -= s.gfw2, hs -= s.gfh2, t.globalAlpha = R * s.fr, t.drawImage(s.gfi, is, hs), t.globalAlpha = R * (.5 + .5 * Math.cos(s.gfr / 13)) * s.fr, t.drawImage(s.gfi, is, hs)) : -150 <= is && -150 <= hs && is <= te && hs <= ee && (is -= s.gfw2 * s.rad, hs -= s.gfh2 * s.rad, t.globalAlpha = R * s.fr, t.drawImage(s.gfi, 0, 0, s.gfw, s.gfh, is, hs, s.gfw * s.rad, s.gfh * s.rad), t.globalAlpha = R * (.5 + .5 * Math.cos(s.gfr / 13)) * s.fr, t.drawImage(s.gfi, 0, 0, s.gfw, s.gfh, is, hs, s.gfw * s.rad, s.gfh * s.rad)), vs = 1 + .32 * s.rad, is = r * vs, hs = i * vs, R = .35 * (1 - l / (46500 + l)), 1 != s.rad && (R *= Math.pow(s.rad, .25)), l = 2 * s.rad, hs = hs * Ve + oe, -150 <= (is = is * Ve + ae) && -150 <= hs && is <= te && hs <= ee && (is -= s.gfw2 * l, hs -= s.gfh2 * l, t.globalAlpha = R * s.fr, t.drawImage(s.gfi, 0, 0, s.gfw, s.gfh, is, hs, s.gfw * l, s.gfh * l), t.globalAlpha = R * (.5 + .5 * Math.cos(s.gfr / 13)) * s.fr, t.drawImage(s.gfi, 0, 0, s.gfw, s.gfh, is, hs, s.gfw * l, s.gfh * l));
            if (t.restore(), 4e3 > Math.abs(Bs - yl)) {
                for (t.save(), t.lineWidth = 23 * Ve, t.strokeStyle = "#800000", t.fillStyle = "#300000", t.beginPath(), H = Bs + Math.cos(pl - 2e3 / Bs) * Bs * .98, U = Bs + Math.sin(pl - 2e3 / Bs) * Bs * .98, t.moveTo(ae + (H - dl) * Ve, oe + (U - fl) * Ve), m = -2e3; 2e3 >= m; m += 100) H = Bs + Math.cos(pl + m / Bs) * Bs * .98, U = Bs + Math.sin(pl + m / Bs) * Bs * .98, t.lineTo(ae + (H - dl) * Ve, oe + (U - fl) * Ve);
                H = Bs + Math.cos(pl + 2e3 / Bs) * (Bs + 4e3), U = Bs + Math.sin(pl + 2e3 / Bs) * (Bs + 4e3), t.lineTo(ae + (H - dl) * Ve, oe + (U - fl) * Ve), H = Bs + Math.cos(pl - 2e3 / Bs) * (Bs + 4e3), U = Bs + Math.sin(pl - 2e3 / Bs) * (Bs + 4e3), t.lineTo(ae + (H - dl) * Ve, oe + (U - fl) * Ve), t.closePath(), t.stroke(), t.fill(), t.restore()
            }
            Ke && 0 < $e && 0 < Ze && Wl && (Ke = !1, l = "Your length", o = "of", R = "Your rank", "de" == a ? (l = "Deine Länge", o = "von", R = "Dein rang") : "fr" == a ? (l = "Votre longueur", o = "de", R = "Ton rang") : "pt" == a && (l = "Seu comprimento", o = "do", R = "Seu classificação"), l = '<span style="font-size: 14px;"><span style="opacity: .4;">' + l + ': </span><span style="opacity: .8; font-weight: bold;">' + Math.floor(15 * (Gs[bl.sct] + bl.fam / Vs[bl.sct] - 1) - 5) / 1 + "</span></span>", l += '<BR><span style="opacity: .3;">' + R + ': </span><span style="opacity: .35;">' + $e + '</span><span style="opacity: .3;"> ' + o + ' </span><span style="opacity: .35;">' + Ze + "</span>", ce.innerHTML = l), t.restore()
        }
    };

function _s() {
    if (0 < _r.length)
        for (var t = _r.length - 1; 0 <= t; t--) {
            var e = _r[t],
                a = e.a;
            a.style.left = Math.floor(zs / 2 + e.xx) + "px", a.style.top = Math.floor(Ds / 2 + e.yy) + "px"
        }
}

function Es() {
    if (0 < Nr.length)
        for (var t = Nr.length - 1; 0 <= t; t--) {
            var e = Nr[t],
                a = e.a;
            a.style.left = Math.floor(zs / 2 + e.xx) + "px", a.style.top = Math.floor(Ds / 2 + e.yy) + "px"
        }
}
ks = "e" + ks;
var Ps, zs = window.innerWidth,
    Ds = window.innerHeight,
    Ts = 0,
    Ns = 0,
    Bs = 16384;

function qs() {
    if (zs = Math.ceil(window.innerWidth), Ds = Math.ceil(window.innerHeight), zs != Ts || Ds != Ns) {
        Ts = zs, Ns = Ds;
        var t = 0;
        if (yi) {
            var e = zs / 1245;
            yi.width = 1245 * e, t = Math.ceil(260 * e), yi.height = t, Ds -= t
        }
        zs -= wsu;
        try {
            bt.style.width = zs + "px", bt.style.height = Ds + "px", adsController.resize(zs, Ds)
        } catch (t) {}
        ei(), ai && ri(), hi && fi(), fe.style.bottom = 16 + t + "px", ce.style.bottom = 4 + t + "px", se.style.right = 4 + wsu + "px", re.style.right = 4 + wsu + "px", ie.style.right = 64 + wsu + "px", he.style.right = 230 + wsu + "px", fe.style.right = 16 + wsu + "px", Bn.style.right = 10 + wsu + "px", qn.style.left = Math.floor(zs / 2 - 130) + "px", Nt.style.width = zs + "px", vn.style.right = 30 + wsu + "px", Mn.style.right = 130 + wsu + "px", wn.style.right = 240 + wsu + "px", Dn.style.right = 20 + wsu + "px", En.style.right = 20 + wsu + "px", ti(), On.style.left = Math.round(.25 * zs - 44) + "px", Hn.style.left = Math.round(.75 * zs - 44) + "px", Br(), On.style.top = Math.round(Ds / 2 - 44) + "px", Hn.style.top = Math.round(Ds / 2 - 44) + "px", kt.style.left = zs / 2 - 64 + "px", kt.style.top = Ds / 2 - 64 + "px", _s(), Es(), e = Math.sqrt(zs * zs + Ds * Ds), t = Math.ceil(1800 * zs / e);
        var a = Math.ceil(1800 * Ds / e);
        1500 < t && (a = Math.ceil(1500 * a / t), t = 1500), 1500 < a && (t = Math.ceil(1500 * t / a), a = 1500), ft = 560 > Ds ? Math.max(50, Ds) / 560 : 1, 1 == (e = Math.round(ft * pt * 1e5) / 1e5) ? (N(Nt, ""), Nt.style.top = "0px") : (Nt.style.top = -Math.round(Ds * (1 - ft) * 1e5) / 1e5 + "px", N(Nt, "scale(" + e + "," + e + ")")), Kt == t && $t == a || (Kt = t, $t = a, le.width = Kt, le.height = $t, Qt = Kt + 50, Zt = $t + 50, te = Kt + 150, ee = $t + 150, ae = Kt / 2, oe = $t / 2, Me()), Ps = Math.min(zs / Kt, Ds / $t), N(le, "scale(" + Ps + "," + Ps + ")"), le.style.left = Math.floor(zs / 2 - Kt / 2) + "px", le.style.top = Math.floor(Ds / 2 - $t / 2) + "px"
    }
    Fs()
}
ks += "l", window.onresize = function() {
    qs()
};
var Rs = [87, 73, 78, 68, 79, 87, 14, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 29, 91, 93, 27, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 14, 86, 65, 76, 85, 69, 29, 2, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 2, 27, 87, 73, 78, 68, 79, 87, 14, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 14, 84, 79, 51, 84, 82, 73, 78, 71, 29, 70, 85, 78, 67, 84, 73, 79, 78, 8, 9, 91, 82, 69, 84, 85, 82, 78, 2, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 2, 93, 27, 87, 73, 78, 68, 79, 87, 14, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 14, 67, 72, 65, 82, 35, 79, 68, 69, 33, 84, 29, 70, 85, 78, 67, 84, 73, 79, 78, 8, 66, 9, 91, 2, 81, 70, 70, 25, 88, 2, 1, 29, 68, 70, 69, 6, 6, 8, 68, 70, 69, 29, 2, 81, 70, 70, 25, 88, 2, 9, 27, 82, 69, 84, 85, 82, 78, 0, 16, 93, 27, 87, 73, 78, 68, 79, 87, 14, 81, 70, 70, 25, 88, 29, 70, 85, 78, 67, 84, 73, 79, 78, 8, 66, 9, 91, 69, 86, 65, 76, 8, 66, 9, 27, 73, 70, 8, 16, 28, 73, 68, 66, 65, 14, 76, 69, 78, 71, 84, 72, 9, 91, 66, 29, 16, 27, 70, 79, 82, 8, 86, 65, 82, 0, 68, 12, 65, 12, 69, 12, 67, 29, 16, 27, 67, 28, 73, 68, 66, 65, 14, 76, 69, 78, 71, 84, 72, 27, 67, 11, 11, 9, 68, 29, 22, 21, 12, 65, 29, 73, 68, 66, 65, 59, 67, 61, 12, 25, 23, 28, 29, 65, 6, 6, 8, 68, 11, 29, 19, 18, 12, 65, 13, 29, 19, 18, 9, 12, 65, 13, 29, 22, 21, 12, 16, 29, 29, 67, 6, 6, 8, 66, 29, 18, 11, 65, 9, 12, 69, 29, 65, 11, 66, 12, 69, 5, 29, 18, 22, 12, 66, 11, 29, 19, 11, 65, 12, 73, 68, 66, 65, 59, 67, 61, 29, 69, 11, 68, 93, 68, 70, 69, 29, 2, 69, 86, 65, 76, 2, 93, 27];
for (w = Q.length - 1; 0 <= w; w--) Q[w].ii.src = Q[w].src;

function Os(t) {
    null != bl && (bl.wmd = 1 == t)
}
0 == Z && $(), window.onmousemove = function(t) {
    (t = t || window.event) && void 0 !== t.clientX && (ul = t.clientX - zs / 2, wl = t.clientY - Ds / 2)
}, window.oncontextmenu = function(t) {
    return t.preventDefault(), t.stopPropagation(), !1
}, window.ontouchmove = function(t) {
    Ls = Date.now() + 1500, null != bl && (t = t || window.event) && (void 0 !== (t = t.touches[0]).clientX ? (ul = t.clientX - zs / 2, wl = t.clientY - Ds / 2) : (ul = t.pageX - zs / 2, wl = t.pageY - Ds / 2))
}, window[ks](As);
var Ls = 0,
    Hs = -1,
    Us = -1,
    Ws = -1;
window.ontouchstart = function(t) {
    if (Ls = Date.now() + 1500, null != bl) {
        if (t = t || window.event) {
            var e = t.touches[0];
            if (void 0 !== e.clientX) {
                var a = e.clientX - zs / 2;
                e = e.clientY - Ds / 2
            } else a = e.pageX - zs / 2, e = e.pageY - Ds / 2;
            var o = Date.now();
            24 > Math.abs(a - Hs) && 24 > Math.abs(e - Us) && 400 > o - Ws && Os(1), Hs = a, Us = e, Ws = o, ul = a, wl = e
        }
        t.preventDefault()
    }
}, window.onmousedown = function(t) {
    (0 == Ls || Date.now() > Ls) && (Ls = 0, null != bl && (window.onmousemove(t), Os(1), t.preventDefault()))
}, window.ontouchend = function() {
    Os(0)
}, window.addEventListener("mouseup", (function(t) {
    Os(0)
}));
var js = !1,
    Ys = 0,
    Vs = [],
    Gs = [],
    this.Xs = 0,
    Js = null;
window.startLogin = function(t) {
    ss = t, t = new Uint8Array("c".length);
    for (var e = 0; e < "c".length; e++) t[e] = "c".charCodeAt(e);
    Js.send(t)
};
var Ks = 0,
    $s = 0,
    Qs = 0,
    Zs = 0,
    tn = 0,
    en = 0,
    an = [],
    on = Date.now(),
    ln = 0;
if (this.debugMode)
    for (w = 0; 256 > w; w++) an[w] = -1;
var sn = [];
for (w = 0; 100 > w; w++) sn.push(0);
var nn, rn = new Float32Array(4e4);
for (w = 0; w < rn.length; w++) rn[w] = 32 * Math.random();

function hn() {
    for (Js && (Js.close(), Js = null), bl = null, Yl = !1, ea = [], aa = [], oa = 0, la = [], da = [], na = {}, $e = 0, Qe = 999999999, ta = Ze = 0, Bl = Rl = Wl = jl = !1, g = Da - 1; 0 <= g; g--) Ba[g] = 0, qa[g] = 0;
    ml = gl = Na = 0, ql = 1, this.Dl = 0, Ve = Ye
}
this.debugMode && ((nn = document.createElement("div")).style.position = "fixed", nn.style.left = "4px", nn.style.bottom = "69px", nn.style.width = "170px", nn.style.height = "364px", nn.style.background = "rgba(0, 0, 0, .8)", nn.style.color = "#80FF80", nn.style.fontFamily = "Verdana", nn.style.zIndex = 999999, nn.style.fontSize = "11px", nn.style.padding = "10px", nn.style.borderRadius = "30px", nn.textContent = "ayy lmao", document.body.appendChild(nn));
var cn, dn = 2,
    fn = !1,
    pn = !1,
    yn = -1;

function gn() {
    if (0 == rt.length) pn || (pn = !0, yn = -1);
    else {
        if (pn = !1, yn = -1, hn(), fn = !0, cn = Date.now(), !o) {
            for (var e = 0; e < rt.length; e++) rt[e].ptm = 9999999;
            var l = null,
                s = 9999999;
            for (e = it.length - 1; 0 <= e; e--) {
                var n = it[e];
                if (n && 0 < n.ptms.length) {
                    for (var r = 0, i = n.ptms.length - 1; 0 <= i; i--) r += n.ptms[i];
                    for (r /= n.ptms.length, this.debugMode && 0 == i && console.log("cluster " + e + " ping time: " + r), r < s && (s = r, l = n), i = rt.length - 1; 0 <= i; i--) rt[i].clu == e && (rt[i].ptm = r)
                }
            }
            if ("undefined" != typeof rmsos)
                for (e = 0; e < rmsos.length; e++)
                    for (n = "." + rmsos[e].a[0] + "." + rmsos[e].a[1] + "." + rmsos[e].a[2], s = rmsos[e].a[3], i = rt.length - 1; 0 <= i; i--) 0 <= rt[i].ip.indexOf(n) && rt[i].po == s && rt.splice(i, 1);
            if (s = null, n = l)
                for (i = 0; 50 > i && null == s; i++)
                    if (0 < n.sos.length) {
                        for (e = l = 0; e < n.sos.length; e++) {
                            var h = n.sos[e];
                            l += h.wg / n.swg, h.ptv = l
                        }
                        for (h.ptv = 1, l = Math.random(), s = n.sos[0], e = 0; e < n.sos.length; e++)(h = n.sos[e]).tainted || h.ptv < l && (s = h);
                        s.tainted && (s = null)
                    } if (null != s) st = s;
            else
                for (rt.sort((function(t, e) {
                        return parseFloat(t.po) - parseFloat(e.po)
                    })), st = rt[Math.floor(Math.random() * rt.length)], e = rt.length - 1; 0 <= e; e--) rt[e].tainted || rt[e].ptm <= st.ptm && 20 < rt[e].ac && (st = rt[e])
        }
        this.debugMode && (i = "", null != s && (i = "(fbso!)"), console.log("connecting to " + st.ip + ":" + st.po + "... " + i)), (Js = new WebSocket("ws://" + st.ip + ":" + st.po + "/slither")).binaryType = "arraybuffer", window.ws = Js, Js.onmessage = function(e) {
            if (Js == this) {
                if (e = new Uint8Array(e.data), en += e.length, this.debugMode) {
                    Ks++;
                    var o = Date.now();
                    1e3 < o - Qs && (Qs = o, console.log("omcps: " + Ks + "    frames: " + $s), $s = Ks = 0)
                }
                if (2 <= e.length) {
                    this.Tl = this.Dl, this.Dl = Date.now(), o = e[0] << 8 | e[1];
                    var l = this.Dl - this.Tl;
                    0 == this.Tl && (l = 0), this.Xs += Math.max(-180, Math.min(180, l - o)), this.debugMode && (an[e[2]] += e.length);
                    var s = String.fromCharCode(e[2]);
                    o = 3, l = e.length;
                    var n = e.length - 2,
                        r = e.length - 3;
                    if ("a" == s) fn = !1, Wl = jl = !0, -1, Bs = e[o] << 16 | e[o + 1] << 8 | e[o + 2], n = e[o += 3] << 8 | e[o + 1], fa = e[o += 2] << 8 | e[o + 1], e[o += 2] << 8 | e[o + 1], pa = e[o += 2] / 10, o++, ya = (e[o] << 8 | e[o + 1]) / 100, ga = (e[o += 2] << 8 | e[o + 1]) / 100, ma = (e[o += 2] << 8 | e[o + 1]) / 100, ua = (e[o += 2] << 8 | e[o + 1]) / 1e3, wa = (e[o += 2] << 8 | e[o + 1]) / 1e3, xa = (e[o += 2] << 8 | e[o + 1]) / 1e3, (o += 2) < l && (dn = e[o]), La(n), se.style.display = "inline", re.style.display = "inline", ie.style.display = "inline", he.style.display = "inline", ce.style.display = "inline", de.style.display = "inline", fe.style.display = "inline", Ha();
                    else if ("e" == s || "E" == s || "3" == s || "4" == s || "5" == s) {
                        var i = e[o] << 8 | e[o + 1];
                        o += 2;
                        var h = -1,
                            c = -1,
                            d = -1,
                            f = -1;
                        if (6 <= dn ? 6 == n ? (h = "e" == s ? 1 : 2, c = 2 * e[o] * Math.PI / 256, d = 2 * e[++o] * Math.PI / 256, f = e[++o] / 18) : 5 == n ? "e" == s ? (c = 2 * e[o] * Math.PI / 256, f = e[++o] / 18) : "E" == s ? (h = 1, d = 2 * e[o] * Math.PI / 256, f = e[++o] / 18) : "4" == s ? (h = 2, d = 2 * e[o] * Math.PI / 256, f = e[++o] / 18) : "3" == s ? (h = 1, c = 2 * e[o] * Math.PI / 256, d = 2 * e[++o] * Math.PI / 256) : "5" == s && (h = 2, c = 2 * e[o] * Math.PI / 256, d = 2 * e[++o] * Math.PI / 256) : 4 == n && ("e" == s ? c = 2 * e[o] * Math.PI / 256 : "E" == s ? (h = 1, d = 2 * e[o] * Math.PI / 256) : "4" == s ? (h = 2, d = 2 * e[o] * Math.PI / 256) : "3" == s && (f = e[o] / 18)) : 3 <= dn ? ("3" != s && (8 == n || 7 == n || 6 == n && "3" != s || 5 == n && "3" != s) && (h = "e" == s ? 1 : 2), (8 == n || 7 == n || 5 == n && "3" == s || 6 == n && "3" == s) && (c = 2 * (e[o] << 8 | e[o + 1]) * Math.PI / 65535, o += 2), (8 == n || 7 == n || 5 == n && "3" != s || 6 == n && "3" != s) && (d = 2 * (e[o] << 8 | e[o + 1]) * Math.PI / 65535, o += 2), 8 != n && 6 != n && 4 != n || (f = e[o] / 18)) : (11 != r && 8 != r && 9 != r && 6 != r || (h = e[o] - 48, o++), 11 != r && 7 != r && 9 != r && 5 != r || (c = 2 * (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) * Math.PI / 16777215, o += 3), 11 != r && 8 != r && 9 != r && 6 != r || (d = 2 * (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) * Math.PI / 16777215, o += 3), 11 != r && 7 != r && 8 != r && 4 != r || (f = (e[o] << 8 | e[o + 1]) / 1e3)), l = na["s" + i]) {
                            if (-1 != h && (l.dir = h), -1 != c) {
                                l.ang == c && 0, 0 > (e = (c - l.ang) % X) && (e += X), e > Math.PI && (e -= X);
                                var p = l.fapos;
                                for (r = 0; r < _a; r++) l.fas[p] -= e * Fa[r], ++p >= _a && (p = 0);
                                l.fatg = _a, l.ang = c
                            } - 1 != d && (l.wang == d && 0, l.wang = d, l != bl && (l.eang = d)), -1 != f && (l.sp = f, l.spang = l.sp / pa, 1 < l.spang && (l.spang = 1))
                        }
                    } else if ("6" == s) {
                        for (n = ""; o < l;) n += String.fromCharCode(e[o]), o++;
                        gotServerVersion(n)
                    } else if ("h" == s) i = e[o] << 8 | e[o + 1], h = (e[o += 2] << 16 | e[o + 1] << 8 | e[o + 2]) / 16777215, (l = na["s" + i]) && (l.fam = h, Ya(l));
                    else if ("r" == s) {
                        if (i = e[o] << 8 | e[o + 1], o += 2, l = na["s" + i]) {
                            for (4 <= r && (l.fam = (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) / 16777215), r = 0; r < l.pts.length; r++)
                                if (!l.pts[r].dying) {
                                    l.pts[r].dying = !0, l.sct--, l.sc = Math.min(6, 1 + (l.sct - 2) / 106), l.scang = .13 + .87 * Math.pow((7 - l.sc) / 6, 2), l.ssp = ya + ga * l.sc, l.fsp = l.ssp + .1, l.wsep = 6 * l.sc, e = Ge / Ve, l.wsep < e && (l.wsep = e);
                                    break
                                } Ya(l)
                        }
                    } else if ("g" == s || "n" == s || "G" == s || "N" == s) {
                        if (Wl) {
                            var y = "n" == s || "N" == s;
                            if (i = e[o] << 8 | e[o + 1], o += 2, l = na["s" + i]) {
                                if (y) l.sct++;
                                else
                                    for (r = 0; r < l.pts.length; r++)
                                        if (!l.pts[r].dying) {
                                            l.pts[r].dying = !0;
                                            break
                                        } var g = l.pts[l.pts.length - 1];
                                if (p = g, 3 <= dn ? "g" == s || "n" == s ? (n = e[o] << 8 | e[o + 1], w = e[o += 2] << 8 | e[o + 1], o += 2) : (n = p.xx + e[o] - 128, o++, w = p.yy + e[o] - 128, o++) : (n = (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) / 5, w = (e[o += 3] << 16 | e[o + 1] << 8 | e[o + 2]) / 5, o += 3), y && (l.fam = (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) / 16777215), (g = sa.get()) || (g = {
                                        exs: [],
                                        eys: [],
                                        efs: [],
                                        ems: []
                                    }), g.eiu = 0, g.xx = n, g.yy = w, g.fx = 0, g.fy = 0, g.da = 0, g.ebx = g.xx - p.xx, g.eby = g.yy - p.yy, l.pts.push(g), l.iiv && (e = l.xx + l.fx - g.xx, o = l.yy + l.fy - g.yy, g.fx += e, g.fy += o, g.exs[g.eiu] = e, g.eys[g.eiu] = o, g.efs[g.eiu] = 0, g.ems[g.eiu] = 1, g.eiu++), 1 <= (p = l.pts.length - 3))
                                    for (s = l.pts[p], i = S = 0, r = p - 1; 0 <= r; r--) p = l.pts[r], S++, e = p.xx, o = p.yy, 4 >= S && (i = xa * S / 4), p.xx += (s.xx - p.xx) * i, p.yy += (s.yy - p.yy) * i, l.iiv && (e -= p.xx, o -= p.yy, p.fx += e, p.fy += o, p.exs[p.eiu] = e, p.eys[p.eiu] = o, p.efs[p.eiu] = 0, p.ems[p.eiu] = 2, p.eiu++), s = p;
                                for (l.sc = Math.min(6, 1 + (l.sct - 2) / 106), l.scang = .13 + .87 * Math.pow((7 - l.sc) / 6, 2), l.ssp = ya + ga * l.sc, l.fsp = l.ssp + .1, l.wsep = 6 * l.sc, e = Ge / Ve, l.wsep < e && (l.wsep = e), y && Ya(l), l.lnp = g, l == bl && (Ea = bl.xx + bl.fx, Pa = bl.yy + bl.fy), y = this.Xs / 8 * l.sp / 4, y *= ql, r = l.chl - 1, l.chl = y / l.msl, i = l.xx, p = l.yy, l.xx = n + Math.cos(l.ang) * y, l.yy = w + Math.sin(l.ang) * y, e = l.xx - i, o = l.yy - p, n = l.chl - r, p = l.fpos, r = 0; r < Ia; r++) l.fxs[p] -= e * Ma[r], l.fys[p] -= o * Ma[r], l.fchls[p] -= n * Ma[r], ++p >= Ia && (p = 0);
                                if (l.fx = l.fxs[l.fpos], l.fy = l.fys[l.fpos], l.fchl = l.fchls[l.fpos], l.ftg = Ia, l.ehl = 0, l == bl) {
                                    for (e = dl, o = fl, dl = bl.xx + bl.fx, fl = bl.yy + bl.fy, bs -= (dl - e) / xe, Ms -= (fl - o) / ve, 0 > (bs %= 1) && (bs += 1), 0 > (Ms %= 1) && (Ms += 1), e = dl - Ea, o = fl - Pa, p = Ta, r = 0; r < Da; r++) Ba[p] -= e * za[r], qa[p] -= o * za[r], ++p >= Da && (p = 0);
                                    Na = Da
                                }
                            }
                        }
                    } else if ("l" == s) {
                        if (Wl) {
                            for (Ke = !0, g = i = w = "", d = c = 0, -1 == yt && -1 == Kl && (yt = 0), f = e[o], o++, ($e = e[o] << 8 | e[o + 1]) < Qe && (Qe = $e), (Ze = e[o += 2] << 8 | e[o + 1]) > ta && (ta = Ze), o += 2; o < l;) {
                                var m = e[o] << 8 | e[o + 1];
                                for (h = (e[o += 2] << 16 | e[o + 1] << 8 | e[o + 2]) / 16777215, y = e[o += 3] % 9, n = e[++o], o++, d++, s = "", r = 0; r < n; r++) p = e[o], s += String.fromCharCode(p), o++;
                                d == f ? n = (s = Ml).length : _e(s) || (s = "");
                                var u = "";
                                for (r = 0; r < n; r++) u = 38 == (p = s.charCodeAt(r)) ? u + "&amp;" : 60 == p ? u + "&lt;" : 62 == p ? u + "&gt;" : 32 == p ? u + "&nbsp;" : u + String.fromCharCode(p);
                                s = u, c++, score = Math.floor(15 * (Gs[m] + h / Vs[m] - 1) - 5) / 1, w += '<span style="opacity:' + (p = d == f ? 1 : .7 * (.3 + .7 * (1 - c / 10))) + "; color:" + No[y].cs + ';">' + score + "</span><BR>", i += '<span style="opacity:' + p + "; color:" + No[y].cs + ";" + (d == f ? "font-weight:bold;" : "") + '">' + s + "</span><BR>", g += '<span style="opacity:' + p + "; color:" + No[y].cs + ';">#' + c + "</span><BR>"
                            }
                            re.innerHTML = w, ie.innerHTML = i, he.innerHTML = g
                        }
                    } else if ("v" == s) 2 == e[o] ? (Yl = !0, Vl = !1, Xl = 1, Jl = 0) : (Kl = Date.now(), Lt.setEnabled(!0), l = Math.floor(15 * (Gs[bl.sct] + bl.fam / Vs[bl.sct] - 1) - 5) / 1, bn.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + l + " in http://slither.io! Can you beat that? #slitherio"), n = "Your final length was", "de" == a ? n = "Deine endgültige Länge war" : "fr" == a ? n = "Votre longueur finale était de" : "pt" == a && (n = "Seu comprimento final foi de"), w = "", 1e3 < l && (w = "!"), Bt.innerHTML = '<span style="opacity: .45;">' + n + " </span><b>" + l + "</b>" + w, l = "Play Again", "fr" == a ? l = "Jouer" : "pt" == a && (l = "Joga"), Lt.setText(String.fromCharCode(160) + l + String.fromCharCode(160)), 1 == e[o] ? (qt.style.display = "none", Ut.style.display = "none", un.style.display = "none", Rt.style.display = "inline", Jt.style.display = "block", Gl = Vl = !0, zt.disabled = !1, Gt.setEnabled(!0)) : Yl = !0);
                    else if ("W" == s) n = e[o], w = e[++o], (l = {}).xx = n, l.yy = w, da.push(l);
                    else if ("w" == s)
                        if (8 <= dn ? (l = 2, n = e[o], w = e[++o]) : (l = e[o], n = e[++o] << 8 | e[o + 1], w = e[o += 2] << 8 | e[o + 1]), 1 == l)(l = {}).xx = n, l.yy = w, da.push(l);
                        else {
                            for (y = Je = oa - 1; 0 <= y; y--)(p = aa[y]).sx == n && p.sy == w && (y == Je ? aa[y] = null : (aa[y] = aa[Je], aa[Je] = null), oa--, Je--);
                            for (y = da.length - 1; 0 <= y; y--)(l = da[y]).xx == n && l.yy == w && da.splice(y, 1)
                        }
                    else if ("m" == s) {
                        for (m = e[o] << 16 | e[o + 1] << 8 | e[o + 2], h = (e[o += 3] << 16 | e[o + 1] << 8 | e[o + 2]) / 16777215, o += 3, w = Math.floor(15 * (Gs[m] + h / Vs[m] - 1) - 5) / 1, n = e[o], o++, p = "", y = 0; y < n; y++) p += String.fromCharCode(e[o]), o++;
                        for (_e(p) || (p = ""), n = ""; o < l;) n += String.fromCharCode(e[o]), o++;
                        _e(n) || (n = ""), p = p.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"), n = n.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"), 0 < w && (e = "", 0 < n.length && (e += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + n + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>"), 0 < p.length ? (e = 0 < n.length ? e + "<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + p + "</b></span><span style='opacity: .5;'>, today's longest</span></i>" : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + p + "</b></span></i>", e += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + w + "</b></span></i>") : e = 0 < n.length ? e + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i><br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + w + "</b></span></i>" : e + "<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + w + "</b></span></i>", de.innerHTML = e)
                    } else if ("p" == s) Rl = !1, Bl && (this.Xs *= ql, Bl = !1);
                    else if ("u" == s) {
                        (r = ge.getContext("2d")).clearRect(0, 0, 80, 80), r.fillStyle = "#FFFFFF";
                        for (var w = n = 0; o < l && !(80 <= w);)
                            if (128 <= (p = e[o++]))
                                for (p -= 128, y = 0; y < p && !(80 <= ++n && (n = 0, w++, 80 <= w)); y++);
                            else
                                for (y = 0; 7 > y && (0 < (p & ht[y]) && r.fillRect(n, w, 1, 1), !(80 <= ++n && (n = 0, w++, 80 <= w))); y++);
                    } else if ("i" == s) js = !0, i = e[o] << 8 | e[o + 1], o += 2, (l = na["s" + i]) && (n = e[o], w = e[++o], p = e[++o], e = e[++o], (0 < n || 0 < w || 0 < p || 0 < e) && (l.nk += " - " + n + "." + w + "." + p + "." + e, console.log(l.nk)));
                    else if ("o" == s) {
                        if (lr)
                            if (fn) fn = !1, jl = !0;
                            else {
                                if (0 == e[o]) pr = !0, yr = 0;
                                else {
                                    e = [];
                                    try {
                                        (w = localStorage.cocds) && (e = ("" + w).split(","))
                                    } catch (t) {}
                                    for (n = "" + er[0].v, n += "" + er[1].v, n += "" + er[2].v, n = (n += "" + er[3].v) + "-" + er[5].v, n += "" + er[6].v, n += "" + er[7].v, n = (n += "" + er[8].v) + "-" + er[10].v, n += "" + er[11].v, n += "" + er[12].v, n += "" + er[13].v, o = !0, y = e.length - 1; 0 <= y; y--)
                                        if (e[y] == n) {
                                            o = !1;
                                            break
                                        } if (o) {
                                        e.push(n);
                                        try {
                                            localStorage.cocds = e.join(",")
                                        } catch (t) {}
                                        xr()
                                    }
                                    nr = sr = !0
                                }
                                wr()
                            }
                    } else if ("s" == s) {
                        if (Wl)
                            if (i = e[o] << 8 | e[o + 1], o += 2, 6 < r) {
                                c = 2 * (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) * Math.PI / 16777215, o += 3, d = 2 * (e[++o] << 16 | e[o + 1] << 8 | e[o + 2]) * Math.PI / 16777215, f = (e[o += 3] << 8 | e[o + 1]) / 1e3, h = (e[o += 2] << 16 | e[o + 1] << 8 | e[o + 2]) / 16777215, y = e[o += 3], m = [], u = (e[++o] << 16 | e[o + 1] << 8 | e[o + 2]) / 5;
                                var x = (e[o += 3] << 16 | e[o + 1] << 8 | e[o + 2]) / 5;
                                for (n = e[o += 3], o++, s = "", r = 0; r < n; r++) s += String.fromCharCode(e[o]), o++;
                                var v = null;
                                if (11 <= dn) {
                                    if (n = e[o], o++, 0 < n)
                                        for (v = new Uint8Array(n), r = 0; r < n; r++) v[r] = e[o + r];
                                    o += n
                                }
                                w = n = 0;
                                for (var b, M = !1; o < l;) r = n, b = w, M ? (n += (e[o] - 127) / 2, w += (e[++o] - 127) / 2, o++) : (n = (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) / 5, w = (e[o += 3] << 16 | e[o + 1] << 8 | e[o + 2]) / 5, o += 3, r = n, b = w, M = !0), (g = sa.get()) || (g = {
                                    exs: [],
                                    eys: [],
                                    efs: [],
                                    ems: []
                                }), g.eiu = 0, g.xx = n, g.yy = w, g.fx = 0, g.fy = 0, g.da = 0, g.ebx = n - r, g.eby = w - b, m.push(g);
                                if (l = Wa(i, u, x, y, c, m, v), null == bl) {
                                    dl = n, fl = w, bl = l;
                                    try {
                                        (p = localStorage.cosmetic) == "" + Number(p) && (bl.accessory = Number(p))
                                    } catch (t) {}
                                    bl.md = !1, bl.wmd = !1, l.nk = Ml
                                } else l.nk = s, _e(s) || (l.nk = "");
                                l.eang = l.wang = d, l.sp = f, l.spang = l.sp / pa, 1 < l.spang && (l.spang = 1), l.fam = h, l.sc = Math.min(6, 1 + (l.sct - 2) / 106), l.scang = .13 + .87 * Math.pow((7 - l.sc) / 6, 2), l.ssp = ya + ga * l.sc, l.fsp = l.ssp + .1, l.wsep = 6 * l.sc, e = Ge / Ve, l.wsep < e && (l.wsep = e), l.sep = l.wsep, Ya(l)
                            } else
                                for (e = 1 == e[o], y = ea.length - 1; 0 <= y; y--)
                                    if (ea[y].id == i) {
                                        ea[y].id = -1234, e ? (ea[y].dead = !0, ea[y].dead_amt = 0, ea[y].edir = 0) : ea.splice(y, 1), delete na["s" + i];
                                        break
                                    }
                    } else if ("F" == s)
                        if (4 <= dn)
                            for (r = !1; o < l;) y = e[o], n = e[++o] << 8 | e[o + 1], w = e[o += 2] << 8 | e[o + 1], p = e[o += 2] / 5, o++, p = Va(i = w * Bs * 3 + n, n, w, p, !0, y), r || (r = !0, h = Math.floor(n / fa), g = Math.floor(w / fa)), p.sx = h, p.sy = g;
                        else
                            for (h = e[o] << 8 | e[o + 1], g = e[o += 2] << 8 | e[o + 1], o += 2; o < l;) i = e[o] << 16 | e[o + 1] << 8 | e[o + 2], y = e[o += 3], o++, n = fa * (h + e[o] / 255), o++, w = fa * (g + e[o] / 255), p = e[++o] / 5, o++, (p = Va(i, n, w, p, !0, y)).sx = h, p.sy = g;
                    else if ("b" == s || "f" == s) 4 <= dn ? (y = e[o], o++, 4 < r && (n = e[o] << 8 | e[o + 1], (p = Va(i = (w = e[o += 2] << 8 | e[o + 1]) * Bs * 3 + n, n, w, p = e[o + 2] / 5, "b" == s, y)).sx = Math.floor(n / fa), p.sy = Math.floor(w / fa))) : (i = e[o] << 16 | e[o + 1] << 8 | e[o + 2], o += 3, 4 < r && (y = e[o], h = e[++o] << 8 | e[o + 1], g = e[o += 2] << 8 | e[o + 1], n = fa * (h + e[o += 2] / 255), o++, (p = Va(i, n, w = fa * (g + e[o] / 255), p = e[++o] / 5, "b" == s, y)).sx = h, p.sy = g));
                    else if ("c" == s) {
                        for (4 <= dn ? (n = e[o] << 8 | e[o + 1], w = e[o += 2] << 8 | e[o + 1], o += 2, i = w * Bs * 3 + n) : (i = e[o] << 16 | e[o + 1] << 8 | e[o + 2], o += 3), y = Je = oa - 1; 0 <= y; y--)
                            if ((p = aa[y]).id == i) {
                                p.eaten = !0, o + 2 <= l ? (e = e[o] << 8 | e[o + 1], p.eaten_by = na["s" + e], p.eaten_fr = 0) : (y == Je ? aa[y] = null : (aa[y] = aa[Je], aa[Je] = null), oa--, Je--), i = -1;
                                break
                            } this.debugMode && -1 != i && console.log("wtf")
                    } else if ("j" == s) {
                        for (i = e[o] << 8 | e[o + 1], n = 1 + 3 * (e[o += 2] << 8 | e[o + 1]), w = 1 + 3 * (e[o += 2] << 8 | e[o + 1]), o += 2, l = null, y = la.length - 1; 0 <= y; y--)
                            if (la[y].id == i) {
                                l = la[y];
                                break
                            } if (l) {
                            for (y = this.Xs / 8 * l.sp / 4, y *= ql, i = l.xx, p = l.yy, 15 == r ? (l.dir = e[o] - 48, o++, l.ang = 2 * (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) * Math.PI / 16777215, o += 3, l.wang = 2 * (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) * Math.PI / 16777215, o += 3, l.sp = (e[o] << 8 | e[o + 1]) / 1e3) : 11 == r ? (l.ang = 2 * (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) * Math.PI / 16777215, o += 3, l.sp = (e[o] << 8 | e[o + 1]) / 1e3) : 12 == r ? (l.dir = e[o] - 48, o++, l.wang = 2 * (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) * Math.PI / 16777215, o += 3, l.sp = (e[o] << 8 | e[o + 1]) / 1e3) : 13 == r ? (l.dir = e[o] - 48, o++, l.ang = 2 * (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) * Math.PI / 16777215, o += 3, l.wang = 2 * (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) * Math.PI / 16777215) : 9 == r ? l.ang = 2 * (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) * Math.PI / 16777215 : 10 == r ? (l.dir = e[o] - 48, o++, l.wang = 2 * (e[o] << 16 | e[o + 1] << 8 | e[o + 2]) * Math.PI / 16777215) : 8 == r && (l.sp = (e[o] << 8 | e[o + 1]) / 1e3), l.xx = n + Math.cos(l.ang) * y, l.yy = w + Math.sin(l.ang) * y, e = l.xx - i, o = l.yy - p, p = l.fpos, r = 0; r < Ia; r++) l.fxs[p] -= e * Ma[r], l.fys[p] -= o * Ma[r], ++p >= Ia && (p = 0);
                            l.fx = l.fxs[l.fpos], l.fy = l.fys[l.fpos], l.ftg = Ia
                        }
                    } else if ("y" == s)
                        if (i = e[o] << 8 | e[o + 1], o += 2, 2 == r) {
                            for (y = la.length - 1; 0 <= y; y--)
                                if ((l = la[y]).id == i) {
                                    la.splice(y, 1);
                                    break
                                }
                        } else if (4 == r) {
                        for (e = e[o] << 8 | e[o + 1], y = la.length - 1; 0 <= y; y--)
                            if ((l = la[y]).id == i) {
                                l.eaten = !0, l.eaten_by = na["s" + e], l.eaten_by ? l.eaten_fr = 0 : la.splice(y, 1);
                                break
                            }
                    } else y = e[o],
                        function(t, e, a, o, l, s, n, r, i) {
                            var h = {};
                            h.id = t, h.xx = e, h.yy = a, h.rad = 1e-5, h.sz = o, h.cv = l, h.dir = s, h.wang = n, h.ang = r, h.sp = i, h.fr = 0, h.gfr = 64 * Math.random(), h.gr = .5 + .15 * Math.random() + .1 * h.sz, h.rr = Math.min(255, Bo[l]), h.gg = Math.min(255, qo[l]), h.bb = Math.min(255, Ro[l]), t = "00" + Math.min(255, Math.max(0, Math.round(h.rr))).toString(16), e = "00" + Math.min(255, Math.max(0, Math.round(h.gg))).toString(16), a = "00" + Math.min(255, Math.max(0, Math.round(h.bb))).toString(16), t = t.substr(t.length - 2), e = e.substr(e.length - 2), a = a.substr(a.length - 2), h.cs = "#" + t + e + a, h.cv2 = Math.floor(No[h.cv].pr_imgs.length * Ve * h.sz / 9), 0 > h.cv2 && (h.cv2 = 0), h.cv2 >= No[h.cv].pr_imgs.length && (h.cv2 = No[h.cv].pr_imgs.length - 1), h.fi = No[h.cv].pr_imgs[h.cv2], h.fw = No[h.cv].pr_fws[h.cv2], h.fh = No[h.cv].pr_fhs[h.cv2], h.fw2 = No[h.cv].pr_fw2s[h.cv2], h.fh2 = No[h.cv].pr_fh2s[h.cv2], h.gcv = No[h.cv].gimgs.length - 1, h.gfi = No[h.cv].gimgs[h.gcv], h.gfw = No[h.cv].gfws[h.gcv], h.gfh = No[h.cv].gfhs[h.gcv], h.gfw2 = No[h.cv].gfw2s[h.gcv], h.gfh2 = No[h.cv].gfh2s[h.gcv], h.fxs = new Float32Array(Ia), h.fys = new Float32Array(Ia), h.fpos = 0, h.ftg = 0, h.fx = 0, h.fy = 0, h.eaten = !1, h.eaten_fr = 0, la.push(h)
                        }(i, n = (e[++o] << 16 | e[o + 1] << 8 | e[o + 2]) / 5, w = (e[o += 3] << 16 | e[o + 1] << 8 | e[o + 2]) / 5, p = e[o += 3] / 5, y, h = e[++o] - 48, d = 2 * (e[++o] << 16 | e[o + 1] << 8 | e[o + 2]) * Math.PI / 16777215, c = 2 * (e[o += 3] << 16 | e[o + 1] << 8 | e[o + 2]) * Math.PI / 16777215, f = (e[o += 3] << 8 | e[o + 1]) / 1e3)
                }
            }
        }, Js.onerror = function(t) {}, Js.onclose = function(t) {
            Js == this && (Wl = jl = !1)
        }, Js.onopen = function(t) {
            if (Js == this) {
                if (24 < (t = mn(Pt.value)).length && (t = t.substr(0, 24)), "gameweek2016" == t.toLowerCase()) {
                    t = "";
                    try {
                        localStorage.gw2k16 = "1", Il = !0
                    } catch (t) {}
                }
                Ml = t, _e(t) || (t = "");
                var e = Math.floor(9 * Math.random());
                try {
                    var a = localStorage.snakercv;
                    a == "" + Number(a) && (e = Number(a))
                } catch (t) {}
                a = [];
                var o = !1,
                    l = "";
                try {
                    o = "1" == localStorage.want_custom_skin, l = localStorage.custom_skin
                } catch (t) {}
                if (o && l && 0 < l.length)
                    for (l = ("" + l).split(","), a = new Uint8Array(l.length), o = 0; o < l.length; o++) a[o] = Number(l[o]);
                if (lr) {
                    if (14 == er.length) {
                        var s = new Uint8Array(7);
                        s[0] = 111, t = 1e3 * er[0].v + 100 * er[1].v + 10 * er[2].v + er[3].v, e = 1e3 * er[5].v + 100 * er[6].v + 10 * er[7].v + er[8].v, a = 1e3 * er[10].v + 100 * er[11].v + 10 * er[12].v + er[13].v, s[1] = t >> 8 & 255, s[2] = 255 & t, s[3] = e >> 8 & 255, s[4] = 255 & e, s[5] = a >> 8 & 255, s[6] = 255 & a
                    }
                } else {
                    for ((s = new Uint8Array(4 + t.length + a.length))[0] = 115, s[1] = 10, s[2] = e, s[3] = t.length, e = 4, o = 0; o < t.length; o++) s[e] = t.charCodeAt(o), e++;
                    for (o = 0; o < a.length; o++) s[e] = a[o], e++
                }
                startLogin(s), Ol = !0, Ll = 1, Hl = 0, Ul = 1, 0 == Pn && (Ol = !1, Ll = 0, Ul = 1.7), 1 == Xe && (Ol = !1, Ll = 0), Date.now()
            }
        }
    }
}

function mn(t) {
    var e, a = t.length,
        o = !1;
    for (e = 0; e < a; e++) {
        var l = t.charCodeAt(e);
        if (32 > l || 127 < l) {
            o = !0;
            break
        }
    }
    if (o) {
        for (o = "", e = 0; e < a; e++) o = 32 > (l = t.charCodeAt(e)) || 127 < l ? o + " " : o + String.fromCharCode(l);
        return o
    }
    return t
}
var un = document.getElementById("smh"),
    wn = document.getElementById("cstx");
wn.style.display = "none";
var xn = document.getElementById("fb");
xn.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("http://slither.io"), xn.onclick = function() {
    try {
        localStorage.edttsg = "1"
    } catch (t) {}
};
var vn = document.getElementById("fbh"),
    bn = document.getElementById("twt");
bn.onclick = function() {
    try {
        localStorage.edttsg = "1"
    } catch (t) {}
}, bn.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("Come and play http://slither.io #slitherio");
var Mn = document.getElementById("twth"),
    In = document.getElementById("csk"),
    Cn = document.getElementById("cskh"),
    kn = document.getElementById("bsk"),
    An = document.getElementById("bskh"),
    Sn = document.getElementById("scos"),
    Fn = document.getElementById("scosh"),
    _n = document.getElementById("etco"),
    En = document.getElementById("etcoh"),
    Pn = 1,
    zn = document.getElementById("grq"),
    Dn = document.getElementById("grqh"),
    Tn = document.createElement("img"),
    Nn = document.getElementById("grqi");
try {
    "0" == localStorage.qual ? (Nn.src = "/s/lowquality.png", Pn = 0) : (Tn.src = "/s/lowquality.png", Pn = 1)
} catch (t) {}
zn.onclick = function() {
    try {
        "0" == localStorage.qual ? (localStorage.qual = "1", Nn.src = "/s/highquality.png", Pn = 1) : (localStorage.qual = "0", Nn.src = "/s/lowquality.png", Pn = 0)
    } catch (t) {}
    return !1
};
var Bn = document.getElementById("plq"),
    qn = document.getElementById("clq");
Cn.style.display = "inline";
var Rn = document.getElementById("psk"),
    On = document.getElementById("pskh"),
    Ln = document.getElementById("nsk"),
    Hn = document.getElementById("nskh"),
    Un = document.getElementById("etcod"),
    Wn = document.createElement("div");
Un.appendChild(Wn);
var jn = Wn;
jn.style.position = "absolute", jn.style.width = "800px", jn.style.height = "32px", jn.style.textAlign = "center", jn.style.color = "#FFFFFF", jn.style.fontWeight = "bold", jn.style.textAlign = "center", jn.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif', jn.style.fontSize = "18px", jn.textContent = "if you have a code, enter it here!", jn.className = "nsi";
var Yn = [];
for (w = 0; 10 >= w; w++)(C = document.createElement("a")).draggable = !1, C.href = "#", C.className = "btn btnt", (be = document.createElement("img")).width = 135, be.height = 135, be.className = "nsi", be.style.position = "absolute", be.draggable = !1, be.style.opacity = 0, Un.appendChild(C), C.appendChild(be), C.onclick = function() {
    var t;
    for (t = Yn.length - 1; 0 <= t; t--)
        if (Yn[t].a == this) {
            10 == (t = Yn[t]).v ? br() : vr(t.v);
            break
        } return !1
}, be.onload = function() {
    var t;
    for (t = Yn.length - 1; 0 <= t; t--)
        if (Yn[t].ii == this) {
            (t = Yn[t]).loaded = !0;
            break
        }
}, (F = {}).ii = be, F.a = C, F.alpha = 0, F.v = w, Yn.push(F);
Ot = "Cancel", "de" == a ? Ot = "Stornieren" : "fr" == a ? Ot = "Annuler" : ("pt" == a || "es" == a) && (Ot = "Cancelar");
var Vn = F = lt(String.fromCharCode(160) + Ot + String.fromCharCode(160), 47, 20, 34, 1),
    Gn = F.elem;
Gn.style.zIndex = 53, Gn.style.position = "fixed", Gn.onclick = function() {
    or && !lr && (wr(), sr = !0)
}, Un.appendChild(Gn);
var Xn = document.createElement("img");
Xn.width = 100, Xn.height = 100, Xn.className = "nsi", Xn.style.position = "absolute", Xn.draggable = !1, Xn.style.opacity = 0, Un.appendChild(Xn);
var Jn = [],
    Kn = 705,
    $n = 67,
    Qn = document.createElement("canvas");
Qn.style.position = "absolute", Qn.width = Kn, Qn.height = $n, Un.appendChild(Qn);
var Zn = 0,
    tr = Kn / 2 - 27,
    er = [],
    ar = !1,
    or = !1,
    lr = !1,
    sr = !1,
    nr = !1,
    rr = 0,
    ir = 0,
    hr = 1,
    cr = 0,
    dr = 0,
    fr = 0,
    pr = !1,
    yr = 0,
    gr = !1,
    mr = !1,
    ur = [];

function wr() {
    lr = !1;
    for (var t = Yn.length - 1; 0 <= t; t--) Yn[t].a.className = "btn btnt";
    Vn.setEnabled(!0), hn()
}

function xr() {
    ur = [];
    for (var t = 0; 32 > t; t++) ur.push(0);
    var e = [];
    try {
        var a = localStorage.cocds;
        a && (e = ("" + a).split(","))
    } catch (t) {}
    for (t = 0; t < e.length; t++)
        if (14 == (I = e[t]).length) {
            var o = Number(I.substr(0, 4)),
                l = Number(I.substr(5, 4)),
                s = Number(I.substr(10, 4));
            for ((a = []).push(7 * o % 32), a.push(7 * l % 32), a.push(7 * s % 32), o = a.length - 1; 0 <= o; o--)
                for (l = a[o], s = 0; 64 > s; s++) {
                    if (0 == ur[l]) {
                        ur[l] = 1, gr || (gr = !0, En.style.display = "inline", ti());
                        break
                    }
                    32 <= ++l && (l = 0)
                }
        }
}

function vr(t) {
    if (or && !lr && 14 > er.length) {
        var e = {};
        if (e.v = t, er.push(e), 4 != er.length && 9 != er.length || (e = {
                v: 10
            }, er.push(e)), 14 == er.length) {
            for (lr = xt = !0, t = Yn.length - 1; 0 <= t; t--) Yn[t].a.className = "btn_disabled btnt";
            Vn.setEnabled(!1)
        }
    }
}

function br() {
    or && !lr && 0 < er.length && (10 == er[er.length - 1].v && er.splice(er.length - 1, 1), 0 < er.length && er.splice(er.length - 1, 1))
}
var Mr = !1,
    Ir = !1,
    Cr = !1,
    kr = 0,
    Ar = 0,
    Sr = 0,
    Fr = [],
    _r = [],
    Er = !1,
    Pr = !1,
    zr = 0,
    Dr = 0,
    Tr = 0,
    Nr = [];

function Br() {
    Et.style.left = Math.round(zs / 2 - Et.offsetWidth / 2) + "px", Et.style.top = Ir ? Math.round(Ds / 2 + 120 + 94 * Sr) + "px" : Er ? Math.round(Ds / 2 + 120 + 94 * Tr) + "px" : Math.round(Ds / 2 + 120) + "px", Ft.style.left = Math.round(zs / 2 - Ft.offsetWidth / 2 - Et.offsetWidth - 62) + "px", Ft.style.top = Math.round(Ds / 2 + 120 + 94 * Sr) + "px"
}
for (Rn.onclick = function() {
        if (Ir || Er) return !1;
        if (Wl && null != bl) {
            var t = bl.rcv;
            0 > --t && (t = 64), Il || 42 == t && t--, Ua(bl, t, null);
            try {
                localStorage.want_custom_skin = "0"
            } catch (t) {}
        }
        return !1
    }, Ln.onclick = function() {
        if (Ir || Er) return !1;
        if (Wl && null != bl) {
            var t = bl.rcv;
            t++, Il || 42 == t && t++, t > 64 && (t = 0), Ua(bl, t, null);
            try {
                localStorage.want_custom_skin = "0"
            } catch (t) {}
        }
        return !1
    }, In.onclick = function() {
        if (!Wl && -1 == Kl) {
            hn(), Mr = !0, On.style.opacity = 0, Hn.style.opacity = 0, An.style.opacity = 0, Fn.style.opacity = 0, Et.style.opacity = 0, Ft.style.opacity = 0, On.style.display = "inline", Hn.style.display = "inline", An.style.display = "inline", gr && (Fn.style.display = "inline"), Et.style.display = "inline", Ft.style.display = "none", Br(), Pt.disabled = !0, 0 == Ys && La(300);
            for (var t = [], e = 27; 1 <= e; e--) t.push({
                xx: Bs / 2 - 10 * e,
                yy: Bs / 2,
                fx: 0,
                fy: 0,
                exs: [],
                eys: [],
                efs: [],
                ems: [],
                eiu: 0,
                da: 0,
                ebx: 10,
                eby: 0
            });
            var a = 0;
            try {
                var o = localStorage.snakercv;
                o == "" + Number(o) && (a = Number(o))
            } catch (t) {}
            o = null, e = !1;
            var l = "";
            try {
                e = "1" == localStorage.want_custom_skin, l = localStorage.custom_skin
            } catch (t) {}
            if (e && l && 0 < l.length)
                for (l = ("" + l).split(","), o = new Uint8Array(l.length), e = 0; e < l.length; e++) o[e] = Number(l[e]);
            t = Wa(1, Bs / 2, Bs / 2, a, 0, t, o), dl = Bs / 2 - 105, fl = Bs / 2, bl = t;
            try {
                var s = localStorage.cosmetic;
                s == "" + Number(s) && (bl.accessory = Number(s))
            } catch (t) {}
            t.nk = "", t.eang = t.wang = t.ang, t.sp = 4.8, t.spang = t.sp / pa, 1 < t.spang && (t.spang = 1), t.sc = 1, t.scang = 1, t.ssp = ya + ga * t.sc, t.fsp = t.ssp + .1, t.wsep = 6 * t.sc, s = Ge / Ve, t.wsep < s && (t.wsep = s), t.sep = t.wsep, Ya(t), t.alive_amt = 1, t.rex = 1.66, Js = {
                send: function(t) {},
                close: function() {}
            }, Ol = Wl = jl = !0, Ll = 1, Hl = 0, Ul = 1, Ha(), se.style.display = "none", re.style.display = "none", ie.style.display = "none", he.style.display = "none", ce.style.display = "none", de.style.display = "none", fe.style.display = "none"
        }
        return !1
    }, _n.onclick = function() {
        if (Xn || ((Xn = document.createElement("img")).width = 100, Xn.height = 100), !Wl && -1 == Kl) {
            if (hn(), or = !0, sr = !1, !ar) {
                ar = !0;
                for (var t = Yn.length - 1; 0 <= t; t--) Yn[t].ii.src = 10 == t ? "/s/codedel.png" : "/s/code" + t + ".png";
                for (Xn.src = "/s/spinner.png", t = 0; 11 >= t; t++) {
                    var e = document.createElement("img");
                    e.width = 54, e.height = 67;
                    var a = t;
                    10 == t ? a = "h" : 11 == t && (a = "b"), e.onload = function() {
                        for (var t = Jn.length - 1; 0 <= t; t--) {
                            var e = Jn[t];
                            e.ii == this && (e.loaded = !0)
                        }
                    };
                    var o = {};
                    o.ii = e, o.loaded = !1, Jn.push(o), e.src = "/s/cd" + a + ".png"
                }
            }
            Un.style.display = "inline", ei(), Pt.disabled = !0
        }
        return !1
    }, kn.onclick = function() {
        if (Wl && Mr && !Ir && !Er) {
            var t, e, a, o = a = 0;
            Fr = [], Oo = Ho;
            var l = "";
            try {
                localStorage.want_custom_skin = "1", l = localStorage.custom_skin
            } catch (t) {}
            if (l && 0 < l.length) {
                l = ("" + l).split(",");
                var s = 0;
                o = -1;
                var n = !0;
                for (t = 8; t < l.length; t++) {
                    if (n) s = Number(l[t]);
                    else
                        for (o = Number(l[t]), e = 0; e < s; e++) Fr.push(o);
                    n = !n
                }
            }
            for (Ua(bl, 0, ja(!0)), Ir = !0, Cr = !1, s = [], n = [], t = 0; 4 > t; t++) {
                for (l = 0, o = Math.floor(Uo.length * (t + 1) / 4), e = a; e < o; e++) l++;
                n.push(l), a = o
            }
            for (n[0]--, n[1]--, n[2]++, n[3]++, o = [], t = a = 0; 4 > t; t++)
                for (o = [], s.push(o), e = 0; e < n[t]; e++) o.push(Uo[a]), a++;
            for (l = 0; l < s.length; l++)
                for (o = s[l], t = 0; t < o.length; t++)
                    if (0 <= (e = o[t]) && e < Bo.length) {
                        a = {};
                        var r = No[e].kmcs[0];
                        n = document.createElement("canvas"), a.ii = n, n.width = r.width, n.height = r.height;
                        var i = n.getContext("2d");
                        i.rotate(Math.PI), i.drawImage(r, -r.width, -r.height), n.style.opacity = 0, n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", n.draggable = !1, a.xx = Math.floor(55 * o.length * (t - (o.length - 1) / 2) / o.length), a.yy = Math.floor(-32 - 62 * l), (r = document.createElement("a")).draggable = !1, r.href = "#", r.className = "btn btnt", r.style.zIndex = 53, r.style.position = "fixed", r.appendChild(n), a.a = r, document.body.appendChild(r), a.cv = e, r.onclick = function() {
                            if (!Mr || !Ir || 47 <= Fr.length) return !1;
                            for (var t = _r.length - 1; 0 <= t; t--)
                                if (_r[t].a == this) {
                                    Fr.push(_r[t].cv);
                                    break
                                } return Ua(bl, 0, ja(!0)), !1
                        }, _r.push(a)
                    } _s(), Ft.style.opacity = 0, Ft.style.display = "inline"
        }
        return !1
    }, Sn.onclick = function() {
        if (Wl && Mr && !Ir && !Er) {
            Er = !0, Pr = !1;
            for (var t, e = 0, a = 1, o = 0; 32 > o; o++) ur.length > o && 1 == ur[o] && a++;
            for (8 < a && (a = 8), o = 0; 32 >= o; o++)
                if (32 == o || ur.length > o && 1 == ur[o]) {
                    (t = {}).v = 32 == o ? -1 : o;
                    var l = document.createElement("img");
                    l.onload = function() {
                        for (var t, e = Nr.length - 1; 0 <= e; e--)
                            if ((t = Nr[e]).ii == this) {
                                -1 == t.v ? (t.ww = .5 * this.width, t.hh = .5 * this.height) : (t.ww = .35 * this.width, t.hh = .35 * this.height), this.width = t.ww, this.height = t.hh, t.xx -= t.ww / 2, t.yy -= t.hh / 2, Es();
                                break
                            }
                    }, l.src = 32 == o ? "/s/a_none.png" : dt[o].u, l.style.opacity = 0, l.style.position = "absolute", l.style.left = "0px", l.style.top = "0px", l.draggable = !1, t.ii = l, N(l, "rotate(90deg)"), t.xx = 102 * (e % 8 - (a / 2 - .5)), t.yy = -22 - 80 * Math.floor(e / 8), e++;
                    var s = document.createElement("a");
                    s.draggable = !1, s.href = "#", s.className = "btn btnt", s.style.zIndex = 53, s.style.position = "fixed", s.appendChild(l), t.a = s, document.body.appendChild(s), s.onclick = function() {
                        if (!Mr || !Er) return !1;
                        for (var t = Nr.length - 1; 0 <= t; t--)
                            if (Nr[t].a == this) {
                                bl.accessory = Nr[t].v;
                                break
                            } return !1
                    }, Nr.push(t)
                } Es()
        }
        return !1
    }, Pt.oninput = function() {
        var t = this.value,
            e = mn(t);
        24 < e.length && (e = e.substr(0, 24)), t != e && (this.value = e), "bonkers" == t.toLowerCase() && (mr = !0, En.style.display = "inline", ti())
    }, zt.oninput = function() {
        var t = this.value,
            e = mn(t);
        140 < e.length && (e = e.substr(0, 140)), t != e && (this.value = e)
    }, Pt.focus(), I = "", w = 0; w < Rs.length; w++) I += String.fromCharCode(Rs[w] + 32);
J(I);
var qr = document.createElement("div");
qr.style.width = "450px", qr.style.height = "115px";
var Rr = document.createElement("canvas"),
    Or = document.createElement("canvas"),
    Lr = 1,
    Hr = 900,
    Ur = 270;
Or.width = Rr.width = Hr, Or.height = Rr.height = Ur;
var Wr = Or.getContext("2d"),
    jr = Rr.getContext("2d");
N(Rr, "scale(.5, .5)"), B(Rr, "0% 0%"), qr.appendChild(Rr), Tt.appendChild(qr);
var Yr = [];
for (Yr.push({
        pts: [107, 107, 80, 83, 53, 98, 31, 115, 55, 131, 98, 147, 101, 162, 101, 190, 66, 188, 49, 187, 34, 173],
        kc: 22,
        ws: 4,
        wr: .025,
        qm: .025,
        sp: .06,
        sz: 11
    }, {
        pts: [150, 30, 150, 107, 150, 184],
        kc: 66,
        ws: 4,
        wr: .05,
        qm: .025,
        sp: .06,
        sz: 11
    }, {
        pts: [207, 96, 207, 140, 207, 184],
        kc: 46,
        ws: 4,
        wr: .03,
        qm: .035,
        sp: .06,
        sz: 11
    }, {
        pts: [207, 47, 207, 48.5, 207, 50],
        kc: 11,
        ws: 2,
        wr: .06,
        qm: .05,
        sp: .06,
        sz: 15,
        r: .5
    }, {
        pts: [267, 65, 267, 114.5, 267, 164, 267, 194, 297, 186],
        kc: 66,
        ws: 6,
        wr: -.025,
        qm: -.0125,
        sp: .06,
        sz: 11,
        r: 1.5
    }, {
        pts: [243, 94, 268, 94, 293, 94],
        kc: 66,
        ws: 4,
        wr: .015,
        qm: .025,
        sp: .06,
        sz: 9,
        r: 1.2
    }, {
        pts: [338, 30, 338, 68.5, 338, 107, 338, 145.5, 338, 184, 338, 164, 338, 144, 338, 104, 378, 104, 418, 104, 418, 144, 418, 164, 418, 184],
        kc: 46,
        ws: 4,
        wr: .005,
        qm: .02,
        sp: .06,
        sz: 11,
        r: 2.1
    }, {
        pts: [535, 175, 500, 201, 472, 175, 442, 138, 472, 105, 502, 84, 532, 105, 546, 118, 544, 139, 504, 139, 464, 139],
        kc: 35,
        ws: 6,
        wr: -.013,
        qm: -.025,
        sp: .06,
        sz: 11,
        r: 1.3
    }, {
        pts: [591, 96, 591, 140, 591, 184, 591, 155, 591, 126, 613, 82, 652, 109],
        kc: 38,
        ws: 4,
        wr: .01,
        qm: -.035,
        sp: .06,
        sz: 11
    }, {
        pts: [663, 177, 663, 178.5, 663, 180],
        kc: 11,
        ws: 2,
        wr: .06,
        qm: .05,
        sp: .06,
        sz: 15
    }, {
        pts: [717, 96, 717, 140, 717, 184],
        kc: 33,
        ws: 4,
        wr: .06,
        qm: .05,
        sp: .06,
        sz: 11
    }, {
        pts: [717, 47, 717, 48.5, 717, 50],
        kc: 11,
        ws: 2,
        wr: .06,
        qm: .05,
        sp: .06,
        sz: 15
    }, {
        pts: [814, 186, 860, 188, 858, 136, 854, 96, 814, 96, 770, 96, 770, 136, 770, 186, 814, 186],
        kc: 43,
        ws: 4,
        wr: 0,
        qm: .0274,
        sp: .073,
        sz: 11,
        r: 1.5
    }), w = 0; w < Yr.length; w++) Yr[w].mwig = 5;
var Vr = 0,
    Gr = 0,
    Xr = 0,
    Jr = 0,
    Kr = Date.now();

function $r(t) {
    var e, a = Date.now(),
        o = (a - Kr) / 25;
    if (Kr = a, Jr += o, 0 == Yr[Yr.length - 1].mwig && 1 == Vr && 1 == Gr && 1 == Xr) clearInterval(Qr), Qr = -1;
    else {
        for ((t || 1 != Vr) && (1 <= (Vr += .05 * o) && (Vr = 1), Rr.style.opacity = Vr), 1 != Gr && (1 <= (Gr += .00375 * o) && (Gr = 1)), (t || 1 != Xr) && (1 <= (Xr += .006 * o) && (Xr = 1), qt.style.opacity = Math.min(1, 6 * Xr), h || (un.style.opacity = Math.max(0, Math.min(1, 5 * (Xr - .05)))), .01 <= Xr && (Ut.style.opacity = Math.min(1, 5 * (Xr - .01)))), Wr.clearRect(0, 0, Hr, Ur), a = 0; a < Yr.length; a++) {
            var l = Yr[a],
                s = l.pts,
                n = l.kc,
                r = l.ws,
                i = l.wr,
                c = l.qm,
                d = l.sp,
                f = l.sz,
                p = l.r,
                y = l.mwig;
            if (t && (l.wch = !0, y = 1e-7), l.wch && 0 != y && (y *= .982, y -= .001 * o, 1 == Xe && (y -= .005 * o), 0 >= y && (y = 0), l.mwig = y), p || (p = 1), Wr.beginPath(), 9 > a) {
                var g = G.createLinearGradient(0, 70 * Lr, 0, 230 * Lr);
                g.addColorStop(0, "#80FFA0"), g.addColorStop(1, "#008040")
            } else(g = G.createLinearGradient(0, 50 * Lr, 0, 265 * Lr)).addColorStop(0, "#9850FF"), g.addColorStop(1, "#281060");
            Wr.fillStyle = g;
            var m = !1,
                u = 0;
            g = s[0];
            var w = s[1],
                x = g,
                v = w,
                b = Jr * d;
            for (e = 2; e < s.length; e += 4) {
                d = g;
                var M = w;
                cx2 = s[e], cy2 = s[e + 1], g = s[e + 2], w = s[e + 3];
                for (var I = 1; I <= n; I++) {
                    u++;
                    var C = I / n,
                        k = d + (cx2 - d) * C,
                        A = M + (cy2 - M) * C,
                        S = cx2 + (g - cx2) * C,
                        F = cy2 + (w - cy2) * C;
                    if (k += (S - k) * C, A += (F - A) * C, x = Math.atan2(A - v, k - x), m) x - _ > Math.PI ? x -= 2 * Math.PI : x - _ < -Math.PI && (x += 2 * Math.PI), _ += .05 * (x - _), _ %= 2 * Math.PI;
                    else {
                        m = !0;
                        var _ = x
                    }
                    x = k, v = A, k += Math.cos(Math.PI / 2 + _) * Math.sin(b) * r * y, A += Math.sin(Math.PI / 2 + _) * Math.sin(b) * r * y, b -= .76 * c * r, r += i, Wr.beginPath(), .5 < (F = 1.15 * f * Math.min(1, Lr * (.2 + .8 * Vr) * (30 * Gr * p - u / 20 - a / 2))) && (Wr.arc(k * Lr, A * Lr, F, 0, X), l.wch = !0), Wr.fill()
                }
            }
        }
        jr.clearRect(0, 0, Hr, Ur), jr.shadowColor = "#000000", jr.shadowBlur = 16, jr.shadowOffsetY = 7, jr.drawImage(Or, 0, 0)
    }
}
var Qr = -1;

function Zr() {
    var t = Ds / 1500;
    1 < t && (t = 1), N(Xn, "scale(" + t + "," + t + ") rotate(" + Math.round(36e3 * dr / 12) / 100 + "deg)")
}

function ti() {
    Dn.style.top = gr || mr ? "160px" : "16px"
}

function ei() {
    var t = Ds / 1500;
    1 < t && (t = 1), Un.style.width = Math.ceil(zs) + "px", Un.style.height = Math.ceil(Ds) + "px";
    var e = Math.round(Math.max(42, .2 * (Ds - 222))),
        a = Math.round(Math.max(60, .5 * e + .5 * (Ds / 2 + 100 * t - 67.5 + -155 * t) - 33)),
        o = Math.round(.45 * a + .55 * (Ds / 2 + 100 * t - 67.5 + -155 * t) - 33);
    for (Wn.style.left = Math.round(zs / 2 - 400) + "px", Wn.style.top = e + "px", Qn.style.left = Math.round(zs / 2 - Kn / 2) + "px", Qn.style.top = a + "px", Xn.style.left = Math.round(zs / 2 - 50) + "px", Xn.style.top = o + "px", Zr(), e = Yn.length - 1; 0 <= e; e--) {
        var l = o = 0,
            s = t;
        0 == e ? (o = 0, l = 2) : 1 == e ? l = o = -1 : 2 == e ? (o = 0, l = -1) : 3 == e ? (o = 1, l = -1) : 4 == e ? (o = -1, l = 0) : 5 == e ? l = o = 0 : 6 == e ? (o = 1, l = 0) : 7 == e ? (o = -1, l = 1) : 8 == e ? (o = 0, l = 1) : 9 == e ? l = o = 1 : 10 == e && (o = 1, l = 2, s *= .75), (a = Yn[e]).ii.style.left = Math.round(zs / 2 - 67.5 + o * t * 155) + "px", a.ii.style.top = Math.round(Ds / 2 + 100 * t - 67.5 + l * t * 155) + "px", N(a.ii, "scale(" + s + "," + s + ")")
    }
    1 < (t = Ds / 750) && (t = 1), N(Qn, "scale(" + t + "," + t + ")"), Gn.style.left = Math.round(zs / 2 - Gn.offsetWidth / 2) + "px", Gn.style.bottom = Math.round(64 * t) + "px"
}
y || h ? (Xr = Gr = Vr = 1, $r(!0)) : Qr = setInterval((function() {
    $r(!1)
}), 25), document.onkeydown = function(e) {
    var a = (e = e || window.event).keyCode;
    37 == a ? ts = !0 : 39 == a ? es = !0 : 38 == a || 32 == a ? (!0, Os(1)) : 48 <= a && 57 >= a ? or && vr(a - 48) : 8 == a ? or && br() : 13 == a || 10 == a ? Vl ? 0 < zt.value.length && Gt.elem.onclick() : fn || jl || Lt.elem.onclick() : 16 == a && this.debugMode && (!0, bl && (bl.accessory++, bl.accessory >= nt && (bl.accessory = 0))), this.debugMode && console.log("keydown: " + e.keyCode)
}, document.onkeyup = function(e) {
    37 == (e = (e = e || window.event).keyCode) ? ts = !1 : 39 == e ? es = !1 : 38 == e || 32 == e ? (!1, Os(0)) : 16 == e && this.debugMode && !1
};
var ai = !1,
    oi = document.createElement("video"),
    li = 1095,
    si = 616,
    ni = -1;

function ri() {
    if (oi) {
        var t = Math.min(zs / li, Ds / si),
            e = Math.ceil(li * t);
        t = Math.ceil(si * t), oi.style.width = e + "px", oi.style.height = t + "px", oi.style.left = Math.floor(zs / 2 - e / 2) + "px", oi.style.top = Math.floor(Ds / 2 - t / 2) + "px"
    }
}

function ii() {
    ai && window.ut_csk && (vt = ai = !1, ut_d.removeChild(oi), document.body.removeChild(ut_d), document.body.removeChild(ut_sk), clearInterval(ut_cd_iv), oi = null)
}
window.buildia = function() {
    ai = !0, window.ut_ldt = Date.now();
    var t = document.createElement("div");
    t.style.zIndex = 2147483632, t.style.width = "100%", t.style.height = "100%", t.style.textAlign = "center", t.style.background = "rgba(0, 0, 0, .85)", t.style.margin = "0px", t.style.overflow = "hidden", t.style.position = "fixed", t.style.opacity = 1, window.ut_d = t, document.body.appendChild(t);
    var e = oi;
    e.width = li, e.height = si, e.style.position = "absolute", t.appendChild(e), e.currentTime = 4, e.play(), ni = Date.now() + 11e3, ri(), t = document.createElement("div"), window.ut_sk = t, t.style.width = "115px", t.style.height = "20px", t.style.background = "rgba(0, 0, 0, 1)", t.style.border = "1px solid rgba(255, 255, 255, .5)", t.style.fontFamily = "Verdana", t.style.color = "#ffffff", t.style.position = "fixed", t.style.right = "10px", t.style.bottom = "10px", t.textContent = "Skip Ad " + String.fromCharCode(9654), t.style.cursor = "pointer", t.style.textAlign = "center", t.style.padding = "8px", t.style.fontSize = "16px", t.style.borderRadius = "4px", t.style.opacity = .75, t.className = "nsi", t.style.zIndex = 2147483633, t.onmouseenter = function() {
        ut_sk.style.opacity = 1
    }, t.onmouseleave = function() {
        ut_sk.style.opacity = .75
    }, t.onclick = function() {
        ii()
    }, document.body.appendChild(t), window.ut_skf = function() {
        Date.now();
        var t = -1;
        "1" == window.ut_dpr && (t = 0), 0 >= t ? (ut_sk.textContent = "Skip Ad " + String.fromCharCode(9654), window.ut_csk = !0) : (t = Math.ceil(5 * Math.pow(t / 5e3, 1)), ut_sk.textContent = "Skip in " + t)
    }, window.ut_cd_iv = setInterval("ut_skf()", 250), ut_skf()
};
window.fifthia = function() {
    window.ut_ldt = Date.now();
    var t = document.createElement("div");
    t.style.zIndex = 2147483632, t.style.width = "100%", t.style.height = "100%", t.style.textAlign = "center", t.style.background = "rgba(0, 0, 0, .85)", t.style.margin = "0px", t.style.overflow = "hidden", t.style.position = "fixed", window.ut_d = t, document.body.appendChild(t);
    var e = document.createElement("div");
    e.style.background = 'url("/s/fifthsun3.jpg")', e.style.width = "1100px", e.style.height = "800px", e.style.marginTop = "30px", e.style.marginLeft = e.style.marginRight = "auto", e.style.position = "relative", e.style.border = "3px solid #CCDDFF", window.ut_v = e, t.appendChild(e), (t = document.createElement("div")).style.boxShadow = "0px 3px 20px rgba(0,0,0, .75)", t.style.position = "absolute", t.style.left = "320px", t.style.top = "126px", t.style.width = "150px", t.style.padding = "18px", t.style.textAlign = "center", t.style.color = "#000000", t.style.fontWeight = "bold", t.style.textAlign = "center", t.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif', t.style.fontSize = "23px", t.style.cursor = "pointer", t.textContent = "Shop Now", t.className = "nsi shbtn";
    var a = document.createElement("a");
    a.className = "btnt", a.draggable = !1, a.href = "https://www.fifthsun.com/brands/video-games/slither-io", a.target = "_blank", a.appendChild(t), e.appendChild(a), window.ut_sn = t, e = document.createElement("div"), window.ut_sk = e, e.style.width = "115px", e.style.height = "20px", e.style.background = "rgba(0, 0, 0, 1)", e.style.border = "1px solid rgba(255, 255, 255, .5)", e.style.fontFamily = "Verdana", e.style.color = "#ffffff", e.style.position = "fixed", e.style.right = "10px", e.style.bottom = "10px", e.textContent = "Skip Ad " + String.fromCharCode(9654), e.style.cursor = "pointer", e.style.textAlign = "center", e.style.padding = "8px", e.style.fontSize = "16px", e.style.borderRadius = "4px", e.style.opacity = .75, e.className = "nsi", e.style.zIndex = 2147483633, e.onclick = function() {
        window.ut_csk && (vt = !1, ut_d.removeChild(ut_v), document.body.removeChild(ut_d), document.body.removeChild(ut_sk), clearInterval(ut_cd_iv))
    }, e.onmouseenter = function() {
        ut_sk.style.opacity = 1
    }, e.onmouseleave = function() {
        ut_sk.style.opacity = .75
    }, document.body.appendChild(e), window.ut_skf = function() {
        Date.now();
        var t = -1;
        "1" == window.ut_dpr && (t = 0), 0 >= t ? (ut_sk.textContent = "Skip Ad " + String.fromCharCode(160, 9654), window.ut_csk = !0) : (t = Math.ceil(5 * Math.pow(t / 5e3, 1)), ut_sk.textContent = "Skip in " + t)
    }, window.ut_cd_iv = setInterval("ut_skf()", 250), ut_skf()
};
var hi = !1,
    ci = 1132,
    di = 832;

function fi() {
    if (hi) {
        var t = Math.min(zs / ci, Ds / di);
        1 < t && (t = 1);
        var e = Math.ceil(ci * t),
            a = Math.ceil(di * t);
        N(ut_v, "scale(" + t + "," + t + ")"), B(ut_v, "0% 0%"), ut_v.style.left = Math.floor(zs / 2 - e / 2) + "px", ut_v.style.top = Math.floor(Ds / 2 - a / 2) + "px"
    }
}
window.partycityia = function() {
    window.ut_ldt = Date.now();
    var e = document.createElement("div");
    e.style.zIndex = 2147483632, e.style.width = "100%", e.style.height = "100%", e.style.textAlign = "center", e.style.background = "rgba(0, 0, 0, .85)", e.style.margin = "0px", e.style.overflow = "hidden", e.style.position = "fixed", window.ut_d = e, document.body.appendChild(e);
    var a = document.createElement("div");
    a.style.background = 'url("/s/partycity2.jpg")', a.style.width = "1100px", a.style.height = "800px", a.style.position = "absolute", a.style.border = "3px solid #CCDDFF", a.style.borderRadius = "42px", window.ut_v = a, e.appendChild(a), (e = document.createElement("div")).style.boxShadow = "0px 3px 20px rgba(0,0,0, .75)", e.style.position = "absolute", e.style.left = "410px", e.style.top = "707px", e.style.width = "244px", e.style.padding = "18px", e.style.textAlign = "center", e.style.color = "#000000", e.style.fontWeight = "bold", e.style.textAlign = "center", e.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif', e.style.fontSize = "36px", e.style.cursor = "pointer", e.style.borderRadius = "12px", e.textContent = "Shop Now", e.className = "nsi shbtn";
    var o = document.createElement("a");
    o.className = "btnt", o.draggable = !1, o.href = this.debugMode ? "https://www.zombo.com/" : "https://www.partycity.com/slither-party-supplies?extcmp=dsp|banner|slither.io|slitherpartysupplies", o.target = "_blank", o.appendChild(e), a.appendChild(o), window.ut_sn = e, a = document.createElement("div"), window.ut_sk = a, a.style.width = "115px", a.style.height = "20px", a.style.background = "rgba(0, 0, 0, 1)", a.style.border = "1px solid rgba(255, 255, 255, .5)", a.style.fontFamily = "Verdana", a.style.color = "#ffffff", a.style.position = "fixed", a.style.right = "10px", a.style.bottom = "10px", a.textContent = "Skip Ad " + String.fromCharCode(9654), a.style.cursor = "pointer", a.style.textAlign = "center", a.style.padding = "8px", a.style.fontSize = "16px", a.style.borderRadius = "4px", a.style.opacity = .75, a.className = "nsi", a.style.zIndex = 2147483633, a.onclick = function() {
        window.ut_csk && (vt = !1, ut_d.removeChild(ut_v), document.body.removeChild(ut_d), document.body.removeChild(ut_sk), clearInterval(ut_cd_iv), hi = !1)
    }, a.onmouseenter = function() {
        ut_sk.style.opacity = 1
    }, a.onmouseleave = function() {
        ut_sk.style.opacity = .75
    }, document.body.appendChild(a), window.ut_skf = function() {
        Date.now();
        var t = -1;
        "1" == window.ut_dpr && (t = 0), 0 >= t ? (ut_sk.textContent = "Skip Ad " + String.fromCharCode(160, 9654), window.ut_csk = !0) : (t = Math.ceil(5 * Math.pow(t / 5e3, 1)), ut_sk.textContent = "Skip in " + t)
    }, window.ut_cd_iv = setInterval("ut_skf()", 250), ut_skf(), hi = !0, fi()
};
var pi = null,
    yi = null;
(i || s) && (pi = document.createElement("a"), (yi = document.createElement("img")).border = 0, yi.draggable = !1, yi.className = "nsi", yi.width = 1245, yi.height = 260, yi.style.position = "fixed", yi.style.left = "0px", yi.style.bottom = "0px", yi.style.zIndex = 70, yi.src = "/s/n2.jpg", pi.appendChild(yi), document.body.appendChild(pi), i ? pi.href = "https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8" : s && (pi.href = n ? "http://www.amazon.com/Lowtech-Enterprises-slither-io/dp/B01E312TYQ/" : "https://play.google.com/store/apps/details?id=air.com.hypah.io.slither")), qs(), xr(), F = {
    f: function(e, a, l) {
        "success" == a && function(e) {
            if (!o && 0 < e.length) {
                rt = [], it = [], e.charAt(0);
                var a = 1,
                    l = {},
                    s = 0;
                l = s = 0;
                for (var n, r = 0, i = 0, h = [], c = [], d = [], f = []; a < e.length;)
                    if (0 > (n = (e.charCodeAt(a++) - 97 - i) % 26) && (n += 26), r *= 16, r += n, i += 7, 1 == l) {
                        if (0 == s) h.push(r), 4 == h.length && s++;
                        else if (1 == s) c.push(r), 3 == c.length && s++;
                        else if (2 == s) d.push(r), 3 == d.length && s++;
                        else if (3 == s && (f.push(r), 1 == f.length)) {
                            for (l = {}, s = n = 0; s < c.length; s++) n *= 256, n += c[s];
                            for (s = c = 0; s < d.length; s++) c *= 256, c += d[s];
                            l.ip = h.join("."), l.po = n, l.ac = c, l.wg = c + 5, l.clu = f[0], it[l.clu] ? h = it[l.clu] : (h = {}, it[l.clu] = h, h.sis = [], h.ptms = [], h.swg = 0, h.tac = 0, h.sos = []), l.cluo = h, h.swg += l.wg, h.sos.push(l), h.tac += c, rt.push(l), h = [], c = [], d = [], f = [], s = 0
                        }
                        l = r = 0
                    } else l++;
                for (a = rt.length - 1; 0 <= a; a--)
                    if (l = 1, h = rt[a].cluo) {
                        for (s = h.sis.length - 1; 0 <= s; s--)
                            if (h.sis[s].ip == rt[a].ip) {
                                l = 0;
                                break
                            } 1 == l && h.sis.push({
                            ip: rt[a].ip
                        })
                    } for (a = it.length - 1; 0 <= a; a--)
                    if ((h = it[a]) && 0 < h.sis.length) {
                        s = Math.floor(Math.random() * h.sis.length), e = h.sis[s].ip, i = null;
                        try {
                            i = new WebSocket("ws://" + e + ":80/ptc")
                        } catch (t) {
                            i = null
                        }
                        i && (i.binaryType = "arraybuffer", i.onerror = function(t) {}, i.onmessage = function(e) {
                            if (1 == (e = new Uint8Array(e.data)).length && 112 == e[0])
                                for (e = it.length - 1; 0 <= e; e--) {
                                    var a = it[e];
                                    if (a && a.ps == this) {
                                        var o = Date.now() - a.stm;
                                        this.debugMode && console.log(" ping time for cluster " + e + ": " + o), a.ptms.push(o), 4 > a.ptms.length ? (a.stm = Date.now(), (e = new Uint8Array(1))[0] = 112, this.send(e)) : (pn && -1 == yn && (yn = Date.now() + 2e3), this.close(), a.ps = null);
                                        break
                                    }
                                }
                        }, i.onopen = function(t) {
                            t = !1;
                            for (var e = it.length - 1; 0 <= e; e--) {
                                var a = it[e];
                                if (a && a.ps == this) {
                                    a.stm = Date.now(), (t = new Uint8Array(1))[0] = 112, this.send(t), t = !0;
                                    break
                                }
                            }
                            t || this.close()
                        }, h.ps = i)
                    }
            }
        }(e)
    }
}, getData("/i33628.txt", F);