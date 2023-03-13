import { WebSocket } from "ws";
import { messages } from "./slither-data.js";

class slitherClient {
    constructor(){
        this.ws;

        this.Tl = 0 // last frame time
        this.Dl = 0 // current frame time

        this.Xs = 0
        this.debugMode = false;
    }
    connect(url) {
        this.ws = new WebSocket(url,{
            headers: {
                'origin': 'http://slither.io',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69'
            }
        });
        this.ws.on('open', () => {
            this.Tl = Date.now()
          console.log('WebSocket connection established!');
          this.ws.send(messages.HANDSHAKE_START)
        });
        this.ws.on('message', (b) => {
          console.log('Received message from server:', b);
          this.onMessage(b)
        });
        
        this.ws.on('close', () => {
          console.log('WebSocket connection closed!');
        });
        
        this.ws.on('error', (error) => {
          console.error('WebSocket error:', error);
        });
    }
    solveServerChallenge(n) {
        let s = ""

        // some stange that return eval code
        for (let d = 0, e = 23, b, f = 0, g = 0; g < n.length; )
        (b = n.charCodeAt(g)),
            g++,
            96 >= b && (b += 32),
            (b = (b - 97 - e) % 26),
            0 > b && (b += 26),
            (d *= 16),
            (d += b),
            (e += 17),
            1 == f ? ((s += String.fromCharCode(d)), (f = d = 0)) : f++;

        // we not eval here
        s = [...s.substring(7,31)].map(_=>_.charCodeAt(0))

        // qff9x
        if (0 < s.length) {
            let b = 0;
            for (let d, a, e, c = 0; c < s.length; c++)
            (d = 65),
                (a = s[c]),
                97 <= a && ((d += 32), (a -= 32)),
                (a -= 65),
                0 == c && (b = 2 + a),
                (e = a + b),
                (e %= 26),
                (b += 3 + a),
                (s[c] = e + d);
        }
        return s
    }
    getSpawnPayload(nick, e=[]) {
        let randomColor = Math.floor(9 * Math.random());
        let buf = new Buffer.alloc(4 + nick.length + e.length)
        buf[0] = 115;
        buf[1] = 10;
        buf[2] = randomColor;
        buf[3] = nick.length;
        let bufCursor = 4;
        for (let f = 0; f < nick.length; f++) (buf[bufCursor] = nick.charCodeAt(f)), bufCursor++;
        for (let f = 0; f < e.length; f++) (buf[bufCursor] = e[f]), bufCursor++;
        return buf
    }
    onMessage(b) {
        if (2 <= b.length) {
            this.Tl = this.Dl, this.Dl = Date.now();
            let frame = this.Dl - this.Tl;
            let o = b[0] << 8 | b[1];
            0 == this.Tl && (frame = 0);
            this.Xs += Math.max(-180, Math.min(180, frame - o)), this.debugMode && (an[b[2]] += b.length);
            let s = String.fromCharCode(b[2]);
            o = 3, frame = b.length;
            let n = b.length - 2,
                r = b.length - 3;
            if ("a" == s) fn = !1, Wl = jl = !0, -1, Bs = b[o] << 16 | b[o + 1] << 8 | b[o + 2], n = b[o += 3] << 8 | b[o + 1], fa = b[o += 2] << 8 | b[o + 1], b[o += 2] << 8 | b[o + 1], pa = b[o += 2] / 10, o++, ya = (b[o] << 8 | b[o + 1]) / 100, ga = (b[o += 2] << 8 | b[o + 1]) / 100, ma = (b[o += 2] << 8 | b[o + 1]) / 100, ua = (b[o += 2] << 8 | b[o + 1]) / 1e3, wa = (b[o += 2] << 8 | b[o + 1]) / 1e3, xa = (b[o += 2] << 8 | b[o + 1]) / 1e3, (o += 2) < frame && (dn = b[o]), La(n), se.style.display = "inline", re.style.display = "inline", ie.style.display = "inline", he.style.display = "inline", ce.style.display = "inline", de.style.display = "inline", fe.style.display = "inline", Ha();
            else if ("e" == s || "E" == s || "3" == s || "4" == s || "5" == s) {
                let i = b[o] << 8 | b[o + 1];
                o += 2;
                let h = -1,
                    c = -1,
                    d = -1,
                    f = -1;
                if (6 <= dn ? 6 == n ? (h = "e" == s ? 1 : 2, c = 2 * b[o] * Math.PI / 256, d = 2 * b[++o] * Math.PI / 256, f = b[++o] / 18) : 5 == n ? "e" == s ? (c = 2 * b[o] * Math.PI / 256, f = b[++o] / 18) : "E" == s ? (h = 1, d = 2 * b[o] * Math.PI / 256, f = b[++o] / 18) : "4" == s ? (h = 2, d = 2 * b[o] * Math.PI / 256, f = b[++o] / 18) : "3" == s ? (h = 1, c = 2 * b[o] * Math.PI / 256, d = 2 * b[++o] * Math.PI / 256) : "5" == s && (h = 2, c = 2 * b[o] * Math.PI / 256, d = 2 * b[++o] * Math.PI / 256) : 4 == n && ("e" == s ? c = 2 * b[o] * Math.PI / 256 : "E" == s ? (h = 1, d = 2 * b[o] * Math.PI / 256) : "4" == s ? (h = 2, d = 2 * b[o] * Math.PI / 256) : "3" == s && (f = b[o] / 18)) : 3 <= dn ? ("3" != s && (8 == n || 7 == n || 6 == n && "3" != s || 5 == n && "3" != s) && (h = "e" == s ? 1 : 2), (8 == n || 7 == n || 5 == n && "3" == s || 6 == n && "3" == s) && (c = 2 * (b[o] << 8 | b[o + 1]) * Math.PI / 65535, o += 2), (8 == n || 7 == n || 5 == n && "3" != s || 6 == n && "3" != s) && (d = 2 * (b[o] << 8 | b[o + 1]) * Math.PI / 65535, o += 2), 8 != n && 6 != n && 4 != n || (f = b[o] / 18)) : (11 != r && 8 != r && 9 != r && 6 != r || (h = b[o] - 48, o++), 11 != r && 7 != r && 9 != r && 5 != r || (c = 2 * (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) * Math.PI / 16777215, o += 3), 11 != r && 8 != r && 9 != r && 6 != r || (d = 2 * (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) * Math.PI / 16777215, o += 3), 11 != r && 7 != r && 8 != r && 4 != r || (f = (b[o] << 8 | b[o + 1]) / 1e3)), frame = na["s" + i]) {
                    if (-1 != h && (frame.dir = h), -1 != c) {
                        frame.ang == c && 0, 0 > (b = (c - frame.ang) % X) && (b += X), b > Math.PI && (b -= X);
                        let p = frame.fapos;
                        for (r = 0; r < _a; r++) frame.fas[p] -= b * Fa[r], ++p >= _a && (p = 0);
                        frame.fatg = _a, frame.ang = c
                    } - 1 != d && (frame.wang == d && 0, frame.wang = d, frame != bl && (frame.eang = d)), -1 != f && (frame.sp = f, frame.spang = frame.sp / pa, 1 < frame.spang && (frame.spang = 1))
                }
            } else if ("6" == s) {
                for (n = ""; o < frame;) n += String.fromCharCode(b[o]), o++;
                let ls = this.solveServerChallenge(n)
                this.ws.send(Buffer.from(ls))
                this.ws.send(new Buffer.from([0x73, 0x0a ,0x03,0x08,0x75,0x73,0x65,0x72,0x6e,0x61,0x6d,0x65]))
            } else if ("h" == s) i = b[o] << 8 | b[o + 1], h = (b[o += 2] << 16 | b[o + 1] << 8 | b[o + 2]) / 16777215, (frame = na["s" + i]) && (frame.fam = h, Ya(frame));
            else if ("r" == s) {
                if (i = b[o] << 8 | b[o + 1], o += 2, frame = na["s" + i]) {
                    for (4 <= r && (frame.fam = (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) / 16777215), r = 0; r < frame.pts.length; r++)
                        if (!frame.pts[r].dying) {
                            frame.pts[r].dying = !0, frame.sct--, frame.sc = Math.min(6, 1 + (frame.sct - 2) / 106), frame.scang = .13 + .87 * Math.pow((7 - frame.sc) / 6, 2), frame.ssp = ya + ga * frame.sc, frame.fsp = frame.ssp + .1, frame.wsep = 6 * frame.sc, b = Ge / Ve, frame.wsep < b && (frame.wsep = b);
                            break
                        } Ya(frame)
                }
            } else if ("g" == s || "n" == s || "G" == s || "N" == s) {
                if (Wl) {
                    let y = "n" == s || "N" == s;
                    if (i = b[o] << 8 | b[o + 1], o += 2, frame = na["s" + i]) {
                        if (y) frame.sct++;
                        else
                            for (r = 0; r < frame.pts.length; r++)
                                if (!frame.pts[r].dying) {
                                    frame.pts[r].dying = !0;
                                    break
                                } let g = frame.pts[frame.pts.length - 1];
                        if (p = g, 3 <= dn ? "g" == s || "n" == s ? (n = b[o] << 8 | b[o + 1], w = b[o += 2] << 8 | b[o + 1], o += 2) : (n = p.xx + b[o] - 128, o++, w = p.yy + b[o] - 128, o++) : (n = (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) / 5, w = (b[o += 3] << 16 | b[o + 1] << 8 | b[o + 2]) / 5, o += 3), y && (frame.fam = (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) / 16777215), (g = sa.get()) || (g = {
                                exs: [],
                                eys: [],
                                efs: [],
                                ems: []
                            }), g.eiu = 0, g.xx = n, g.yy = w, g.fx = 0, g.fy = 0, g.da = 0, g.ebx = g.xx - p.xx, g.eby = g.yy - p.yy, frame.pts.push(g), frame.iiv && (b = frame.xx + frame.fx - g.xx, o = frame.yy + frame.fy - g.yy, g.fx += b, g.fy += o, g.exs[g.eiu] = b, g.eys[g.eiu] = o, g.efs[g.eiu] = 0, g.ems[g.eiu] = 1, g.eiu++), 1 <= (p = frame.pts.length - 3))
                            for (s = frame.pts[p], i = S = 0, r = p - 1; 0 <= r; r--) p = frame.pts[r], S++, b = p.xx, o = p.yy, 4 >= S && (i = xa * S / 4), p.xx += (s.xx - p.xx) * i, p.yy += (s.yy - p.yy) * i, frame.iiv && (b -= p.xx, o -= p.yy, p.fx += b, p.fy += o, p.exs[p.eiu] = b, p.eys[p.eiu] = o, p.efs[p.eiu] = 0, p.ems[p.eiu] = 2, p.eiu++), s = p;
                        for (frame.sc = Math.min(6, 1 + (frame.sct - 2) / 106), frame.scang = .13 + .87 * Math.pow((7 - frame.sc) / 6, 2), frame.ssp = ya + ga * frame.sc, frame.fsp = frame.ssp + .1, frame.wsep = 6 * frame.sc, b = Ge / Ve, frame.wsep < b && (frame.wsep = b), y && Ya(frame), frame.lnp = g, frame == bl && (Ea = bl.xx + bl.fx, Pa = bl.yy + bl.fy), y = this.Xs / 8 * frame.sp / 4, y *= ql, r = frame.chl - 1, frame.chl = y / frame.msl, i = frame.xx, p = frame.yy, frame.xx = n + Math.cos(frame.ang) * y, frame.yy = w + Math.sin(frame.ang) * y, b = frame.xx - i, o = frame.yy - p, n = frame.chl - r, p = frame.fpos, r = 0; r < Ia; r++) frame.fxs[p] -= b * Ma[r], frame.fys[p] -= o * Ma[r], frame.fchls[p] -= n * Ma[r], ++p >= Ia && (p = 0);
                        if (frame.fx = frame.fxs[frame.fpos], frame.fy = frame.fys[frame.fpos], frame.fchl = frame.fchls[frame.fpos], frame.ftg = Ia, frame.ehl = 0, frame == bl) {
                            for (b = dl, o = fl, dl = bl.xx + bl.fx, fl = bl.yy + bl.fy, bs -= (dl - b) / xe, Ms -= (fl - o) / ve, 0 > (bs %= 1) && (bs += 1), 0 > (Ms %= 1) && (Ms += 1), b = dl - Ea, o = fl - Pa, p = Ta, r = 0; r < Da; r++) Ba[p] -= b * za[r], qa[p] -= o * za[r], ++p >= Da && (p = 0);
                            Na = Da
                        }
                    }
                }
            } else if ("l" == s) {
                if (Wl) {
                    for (Ke = !0, g = i = w = "", d = n = 0, -1 == yt && -1 == Kl && (yt = 0), f = b[o], o++, ($e = b[o] << 8 | b[o + 1]) < Qe && (Qe = $e), (Ze = b[o += 2] << 8 | b[o + 1]) > ta && (ta = Ze), o += 2; o < frame;) {
                        let m = b[o] << 8 | b[o + 1];
                        for (h = (b[o += 2] << 16 | b[o + 1] << 8 | b[o + 2]) / 16777215, y = b[o += 3] % 9, n = b[++o], o++, d++, s = "", r = 0; r < n; r++) p = b[o], s += String.fromCharCode(p), o++;
                        d == f ? n = (s = Ml).length : _e(s) || (s = "");
                        let u = "";
                        for (r = 0; r < n; r++) u = 38 == (p = s.charCodeAt(r)) ? u + "&amp;" : 60 == p ? u + "&lt;" : 62 == p ? u + "&gt;" : 32 == p ? u + "&nbsp;" : u + String.fromCharCode(p);
                        s = u, n++, score = Math.floor(15 * (Gs[m] + h / Vs[m] - 1) - 5) / 1, w += '<span style="opacity:' + (p = d == f ? 1 : .7 * (.3 + .7 * (1 - n / 10))) + "; color:" + No[y].cs + ';">' + score + "</span><BR>", i += '<span style="opacity:' + p + "; color:" + No[y].cs + ";" + (d == f ? "font-weight:bold;" : "") + '">' + s + "</span><BR>", g += '<span style="opacity:' + p + "; color:" + No[y].cs + ';">#' + n + "</span><BR>"
                    }
                    re.innerHTML = w, ie.innerHTML = i, he.innerHTML = g
                }
            } else if ("v" == s) 2 == b[o] ? (Yl = !0, Vl = !1, Xl = 1, Jl = 0) : (Kl = Date.now(), Lt.setEnabled(!0), frame = Math.floor(15 * (Gs[bl.sct] + bl.fam / Vs[bl.sct] - 1) - 5) / 1, bn.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + frame + " in http://slither.io! Can you beat that? #slitherio"), n = "Your final length was", "de" == a ? n = "Deine endgültige Länge war" : "fr" == a ? n = "Votre longueur finale était de" : "pt" == a && (n = "Seu comprimento final foi de"), w = "", 1e3 < frame && (w = "!"), Bt.innerHTML = '<span style="opacity: .45;">' + n + " </span><b>" + frame + "</b>" + w, frame = "Play Again", "fr" == a ? frame = "Jouer" : "pt" == a && (frame = "Joga"), Lt.setText(String.fromCharCode(160) + frame + String.fromCharCode(160)), 1 == b[o] ? (qt.style.display = "none", Ut.style.display = "none", un.style.display = "none", Rt.style.display = "inline", Jt.style.display = "block", Gl = Vl = !0, zt.disabled = !1, Gt.setEnabled(!0)) : Yl = !0);
            else if ("W" == s) n = b[o], w = b[++o], (frame = {}).xx = n, frame.yy = w, da.push(frame);
            else if ("w" == s)
                if (8 <= dn ? (frame = 2, n = b[o], w = b[++o]) : (frame = b[o], n = b[++o] << 8 | b[o + 1], w = b[o += 2] << 8 | b[o + 1]), 1 == frame)(frame = {}).xx = n, frame.yy = w, da.push(frame);
                else {
                    for (y = Je = oa - 1; 0 <= y; y--)(p = aa[y]).sx == n && p.sy == w && (y == Je ? aa[y] = null : (aa[y] = aa[Je], aa[Je] = null), oa--, Je--);
                    for (y = da.length - 1; 0 <= y; y--)(frame = da[y]).xx == n && frame.yy == w && da.splice(y, 1)
                }
            else if ("m" == s) {
                for (m = b[o] << 16 | b[o + 1] << 8 | b[o + 2], h = (b[o += 3] << 16 | b[o + 1] << 8 | b[o + 2]) / 16777215, o += 3, w = Math.floor(15 * (Gs[m] + h / Vs[m] - 1) - 5) / 1, n = b[o], o++, p = "", y = 0; y < n; y++) p += String.fromCharCode(b[o]), o++;
                for (_e(p) || (p = ""), n = ""; o < frame;) n += String.fromCharCode(b[o]), o++;
                _e(n) || (n = ""), p = p.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"), n = n.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"), 0 < w && (b = "", 0 < n.length && (b += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + n + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>"), 0 < p.length ? (b = 0 < n.length ? b + "<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + p + "</b></span><span style='opacity: .5;'>, today's longest</span></i>" : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + p + "</b></span></i>", b += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + w + "</b></span></i>") : b = 0 < n.length ? b + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i><br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + w + "</b></span></i>" : b + "<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + w + "</b></span></i>", de.innerHTML = b)
            } else if ("p" == s) Rl = !1, Bl && (this.Xs *= ql, Bl = !1);
            else if ("u" == s) {
                (r = ge.getContext("2d")).clearRect(0, 0, 80, 80), r.fillStyle = "#FFFFFF";
                for (let w = n = 0; o < frame && !(80 <= w);)
                    if (128 <= (p = b[o++]))
                        for (p -= 128, y = 0; y < p && !(80 <= ++n && (n = 0, w++, 80 <= w)); y++);
                    else
                        for (y = 0; 7 > y && (0 < (p & ht[y]) && r.fillRect(n, w, 1, 1), !(80 <= ++n && (n = 0, w++, 80 <= w))); y++);
            } else if ("i" == s) js = !0, i = b[o] << 8 | b[o + 1], o += 2, (frame = na["s" + i]) && (n = b[o], w = b[++o], p = b[++o], b = b[++o], (0 < n || 0 < w || 0 < p || 0 < b) && (frame.nk += " - " + n + "." + w + "." + p + "." + b, console.log(frame.nk)));
            else if ("o" == s) {
                if (lr)
                    if (fn) fn = !1, jl = !0;
                    else {
                        if (0 == b[o]) pr = !0, yr = 0;
                        else {
                            b = [];
                            try {
                                (w = localStorage.cocds) && (b = ("" + w).split(","))
                            } catch (t) {}
                            for (n = "" + er[0].v, n += "" + er[1].v, n += "" + er[2].v, n = (n += "" + er[3].v) + "-" + er[5].v, n += "" + er[6].v, n += "" + er[7].v, n = (n += "" + er[8].v) + "-" + er[10].v, n += "" + er[11].v, n += "" + er[12].v, n += "" + er[13].v, o = !0, y = b.length - 1; 0 <= y; y--)
                                if (b[y] == n) {
                                    o = !1;
                                    break
                                } if (o) {
                                b.push(n);
                                try {
                                    localStorage.cocds = b.join(",")
                                } catch (t) {}
                                xr()
                            }
                            nr = sr = !0
                        }
                        wr()
                    }
            } else if ("s" == s) {
                if (Wl)
                    if (i = b[o] << 8 | b[o + 1], o += 2, 6 < r) {
                        n = 2 * (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) * Math.PI / 16777215, o += 3, d = 2 * (b[++o] << 16 | b[o + 1] << 8 | b[o + 2]) * Math.PI / 16777215, f = (b[o += 3] << 8 | b[o + 1]) / 1e3, h = (b[o += 2] << 16 | b[o + 1] << 8 | b[o + 2]) / 16777215, y = b[o += 3], m = [], u = (b[++o] << 16 | b[o + 1] << 8 | b[o + 2]) / 5;
                        let x = (b[o += 3] << 16 | b[o + 1] << 8 | b[o + 2]) / 5;
                        for (n = b[o += 3], o++, s = "", r = 0; r < n; r++) s += String.fromCharCode(b[o]), o++;
                        let v = null;
                        if (11 <= dn) {
                            if (n = b[o], o++, 0 < n)
                                for (v = new Uint8Array(n), r = 0; r < n; r++) v[r] = b[o + r];
                            o += n
                        }
                        w = n = 0;
                        for (let b, M = !1; o < frame;) r = n, b = w, M ? (n += (b[o] - 127) / 2, w += (b[++o] - 127) / 2, o++) : (n = (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) / 5, w = (b[o += 3] << 16 | b[o + 1] << 8 | b[o + 2]) / 5, o += 3, r = n, b = w, M = !0), (g = sa.get()) || (g = {
                            exs: [],
                            eys: [],
                            efs: [],
                            ems: []
                        }), g.eiu = 0, g.xx = n, g.yy = w, g.fx = 0, g.fy = 0, g.da = 0, g.ebx = n - r, g.eby = w - b, m.push(g);
                        if (frame = Wa(i, u, x, y, n, m, v), null == bl) {
                            dl = n, fl = w, bl = frame;
                            try {
                                (p = localStorage.cosmetic) == "" + Number(p) && (bl.accessory = Number(p))
                            } catch (t) {}
                            bl.md = !1, bl.wmd = !1, frame.nk = Ml
                        } else frame.nk = s, _e(s) || (frame.nk = "");
                        frame.eang = frame.wang = d, frame.sp = f, frame.spang = frame.sp / pa, 1 < frame.spang && (frame.spang = 1), frame.fam = h, frame.sc = Math.min(6, 1 + (frame.sct - 2) / 106), frame.scang = .13 + .87 * Math.pow((7 - frame.sc) / 6, 2), frame.ssp = ya + ga * frame.sc, frame.fsp = frame.ssp + .1, frame.wsep = 6 * frame.sc, b = Ge / Ve, frame.wsep < b && (frame.wsep = b), frame.sep = frame.wsep, Ya(frame)
                    } else
                        for (b = 1 == b[o], y = ea.length - 1; 0 <= y; y--)
                            if (ea[y].id == i) {
                                ea[y].id = -1234, b ? (ea[y].dead = !0, ea[y].dead_amt = 0, ea[y].edir = 0) : ea.splice(y, 1), delete na["s" + i];
                                break
                            }
            } else if ("F" == s)
                if (4 <= dn)
                    for (r = !1; o < frame;) y = b[o], n = b[++o] << 8 | b[o + 1], w = b[o += 2] << 8 | b[o + 1], p = b[o += 2] / 5, o++, p = Va(i = w * Bs * 3 + n, n, w, p, !0, y), r || (r = !0, h = Math.floor(n / fa), g = Math.floor(w / fa)), p.sx = h, p.sy = g;
                else
                    for (h = b[o] << 8 | b[o + 1], g = b[o += 2] << 8 | b[o + 1], o += 2; o < frame;) i = b[o] << 16 | b[o + 1] << 8 | b[o + 2], y = b[o += 3], o++, n = fa * (h + b[o] / 255), o++, w = fa * (g + b[o] / 255), p = b[++o] / 5, o++, (p = Va(i, n, w, p, !0, y)).sx = h, p.sy = g;
            else if ("b" == s || "f" == s) 4 <= dn ? (y = b[o], o++, 4 < r && (n = b[o] << 8 | b[o + 1], (p = Va(i = (w = b[o += 2] << 8 | b[o + 1]) * Bs * 3 + n, n, w, p = b[o + 2] / 5, "b" == s, y)).sx = Math.floor(n / fa), p.sy = Math.floor(w / fa))) : (i = b[o] << 16 | b[o + 1] << 8 | b[o + 2], o += 3, 4 < r && (y = b[o], h = b[++o] << 8 | b[o + 1], g = b[o += 2] << 8 | b[o + 1], n = fa * (h + b[o += 2] / 255), o++, (p = Va(i, n, w = fa * (g + b[o] / 255), p = b[++o] / 5, "b" == s, y)).sx = h, p.sy = g));
            else if ("c" == s) {
                for (4 <= dn ? (n = b[o] << 8 | b[o + 1], w = b[o += 2] << 8 | b[o + 1], o += 2, i = w * Bs * 3 + n) : (i = b[o] << 16 | b[o + 1] << 8 | b[o + 2], o += 3), y = Je = oa - 1; 0 <= y; y--)
                    if ((p = aa[y]).id == i) {
                        p.eaten = !0, o + 2 <= frame ? (b = b[o] << 8 | b[o + 1], p.eaten_by = na["s" + b], p.eaten_fr = 0) : (y == Je ? aa[y] = null : (aa[y] = aa[Je], aa[Je] = null), oa--, Je--), i = -1;
                        break
                    } this.debugMode && -1 != i && console.log("wtf")
            } else if ("j" == s) {
                for (i = b[o] << 8 | b[o + 1], n = 1 + 3 * (b[o += 2] << 8 | b[o + 1]), w = 1 + 3 * (b[o += 2] << 8 | b[o + 1]), o += 2, frame = null, y = la.length - 1; 0 <= y; y--)
                    if (la[y].id == i) {
                        frame = la[y];
                        break
                    } if (frame) {
                    for (y = this.Xs / 8 * frame.sp / 4, y *= ql, i = frame.xx, p = frame.yy, 15 == r ? (frame.dir = b[o] - 48, o++, frame.ang = 2 * (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) * Math.PI / 16777215, o += 3, frame.wang = 2 * (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) * Math.PI / 16777215, o += 3, frame.sp = (b[o] << 8 | b[o + 1]) / 1e3) : 11 == r ? (frame.ang = 2 * (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) * Math.PI / 16777215, o += 3, frame.sp = (b[o] << 8 | b[o + 1]) / 1e3) : 12 == r ? (frame.dir = b[o] - 48, o++, frame.wang = 2 * (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) * Math.PI / 16777215, o += 3, frame.sp = (b[o] << 8 | b[o + 1]) / 1e3) : 13 == r ? (frame.dir = b[o] - 48, o++, frame.ang = 2 * (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) * Math.PI / 16777215, o += 3, frame.wang = 2 * (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) * Math.PI / 16777215) : 9 == r ? frame.ang = 2 * (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) * Math.PI / 16777215 : 10 == r ? (frame.dir = b[o] - 48, o++, frame.wang = 2 * (b[o] << 16 | b[o + 1] << 8 | b[o + 2]) * Math.PI / 16777215) : 8 == r && (frame.sp = (b[o] << 8 | b[o + 1]) / 1e3), frame.xx = n + Math.cos(frame.ang) * y, frame.yy = w + Math.sin(frame.ang) * y, b = frame.xx - i, o = frame.yy - p, p = frame.fpos, r = 0; r < Ia; r++) frame.fxs[p] -= b * Ma[r], frame.fys[p] -= o * Ma[r], ++p >= Ia && (p = 0);
                    frame.fx = frame.fxs[frame.fpos], frame.fy = frame.fys[frame.fpos], frame.ftg = Ia
                }
            } else if ("y" == s)
                if (i = b[o] << 8 | b[o + 1], o += 2, 2 == r) {
                    for (y = la.length - 1; 0 <= y; y--)
                        if ((frame = la[y]).id == i) {
                            la.splice(y, 1);
                            break
                        }
                } else if (4 == r) {
                for (b = b[o] << 8 | b[o + 1], y = la.length - 1; 0 <= y; y--)
                    if ((frame = la[y]).id == i) {
                        frame.eaten = !0, frame.eaten_by = na["s" + b], frame.eaten_by ? frame.eaten_fr = 0 : la.splice(y, 1);
                        break
                    }
            } else y = b[o],
                function(t, e, a, o, l, s, n, r, i) {
                    let h = {};
                    h.id = t, h.xx = e, h.yy = a, h.rad = 1e-5, h.sz = o, h.cv = l, h.dir = s, h.wang = n, h.ang = r, h.sp = i, h.fr = 0, h.gfr = 64 * Math.random(), h.gr = .5 + .15 * Math.random() + .1 * h.sz, h.rr = Math.min(255, Bo[l]), h.gg = Math.min(255, qo[l]), h.bb = Math.min(255, Ro[l]), t = "00" + Math.min(255, Math.max(0, Math.round(h.rr))).toString(16), e = "00" + Math.min(255, Math.max(0, Math.round(h.gg))).toString(16), a = "00" + Math.min(255, Math.max(0, Math.round(h.bb))).toString(16), t = t.substr(t.length - 2), e = e.substr(e.length - 2), a = a.substr(a.length - 2), h.cs = "#" + t + e + a, h.cv2 = Math.floor(No[h.cv].pr_imgs.length * Ve * h.sz / 9), 0 > h.cv2 && (h.cv2 = 0), h.cv2 >= No[h.cv].pr_imgs.length && (h.cv2 = No[h.cv].pr_imgs.length - 1), h.fi = No[h.cv].pr_imgs[h.cv2], h.fw = No[h.cv].pr_fws[h.cv2], h.fh = No[h.cv].pr_fhs[h.cv2], h.fw2 = No[h.cv].pr_fw2s[h.cv2], h.fh2 = No[h.cv].pr_fh2s[h.cv2], h.gcv = No[h.cv].gimgs.length - 1, h.gfi = No[h.cv].gimgs[h.gcv], h.gfw = No[h.cv].gfws[h.gcv], h.gfh = No[h.cv].gfhs[h.gcv], h.gfw2 = No[h.cv].gfw2s[h.gcv], h.gfh2 = No[h.cv].gfh2s[h.gcv], h.fxs = new Float32Array(Ia), h.fys = new Float32Array(Ia), h.fpos = 0, h.ftg = 0, h.fx = 0, h.fy = 0, h.eaten = !1, h.eaten_fr = 0, la.push(h)
                }(i, n = (b[++o] << 16 | b[o + 1] << 8 | b[o + 2]) / 5, w = (b[o += 3] << 16 | b[o + 1] << 8 | b[o + 2]) / 5, p = b[o += 3] / 5, y, h = b[++o] - 48, d = 2 * (b[++o] << 16 | b[o + 1] << 8 | b[o + 2]) * Math.PI / 16777215, n = 2 * (b[o += 3] << 16 | b[o + 1] << 8 | b[o + 2]) * Math.PI / 16777215, f = (b[o += 3] << 8 | b[o + 1]) / 1e3)
        }
    }
}
export { 
    slitherClient
}