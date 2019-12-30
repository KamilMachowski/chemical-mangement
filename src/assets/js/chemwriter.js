(function() {
  var p;
  function aa(a) {
    var b = 0;
    return function() {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  var ba =
      'function' == typeof Object.defineProperties
        ? Object.defineProperty
        : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value);
          },
    ca =
      'undefined' != typeof window && window === this
        ? this
        : 'undefined' != typeof global && null != global
        ? global
        : this;
  function da() {
    da = function() {};
    ca.Symbol || (ca.Symbol = ea);
  }
  function fa(a, b) {
    this.aa = a;
    ba(this, 'description', { configurable: !0, writable: !0, value: b });
  }
  fa.prototype.toString = function() {
    return this.aa;
  };
  var ea = (function() {
    function a(c) {
      if (this instanceof a) throw new TypeError('Symbol is not a constructor');
      return new fa('jscomp_symbol_' + (c || '') + '_' + b++, c);
    }
    var b = 0;
    return a;
  })();
  function ha() {
    da();
    var a = ca.Symbol.iterator;
    a || (a = ca.Symbol.iterator = ca.Symbol('Symbol.iterator'));
    'function' != typeof Array.prototype[a] &&
      ba(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
          return ia(aa(this));
        }
      });
    ha = function() {};
  }
  function ia(a) {
    ha();
    a = { next: a };
    a[ca.Symbol.iterator] = function() {
      return this;
    };
    return a;
  }
  function y(a) {
    var b =
      'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : { next: aa(a) };
  }
  function B(a) {
    if (!(a instanceof Array)) {
      a = y(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  var ka =
      'function' == typeof Object.create
        ? Object.create
        : function(a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    la;
  if ('function' == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
  else {
    var ma;
    a: {
      var na = { Yf: !0 },
        oa = {};
      try {
        oa.__proto__ = na;
        ma = oa.Yf;
        break a;
      } catch (a) {}
      ma = !1;
    }
    la = ma
      ? function(a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
          return a;
        }
      : null;
  }
  var pa = la;
  function sa(a, b) {
    a.prototype = ka(b.prototype);
    a.prototype.constructor = a;
    if (pa) pa(a, b);
    else
      for (var c in b)
        if ('prototype' != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.la = b.prototype;
  }
  function ta() {
    this.ea = !1;
    this.ba = null;
    this.ua = void 0;
    this.aa = 1;
    this.na = 0;
    this.da = null;
  }
  ta.prototype.Fd = function() {
    if (this.ea) throw new TypeError('Generator is already running');
    this.ea = !0;
  };
  ta.prototype.fa = function(a) {
    this.ua = a;
  };
  function ua(a, b) {
    a.da = { Kg: b, Qg: !0 };
    a.aa = a.na;
  }
  ta.prototype.return = function(a) {
    this.da = { return: a };
    this.aa = this.na;
  };
  function va(a) {
    this.aa = new ta();
    this.ba = a;
  }
  function wa(a, b) {
    a.aa.Fd();
    var c = a.aa.ba;
    if (c)
      return xa(
        a,
        'return' in c
          ? c['return']
          : function(d) {
              return { value: d, done: !0 };
            },
        b,
        a.aa.return
      );
    a.aa.return(b);
    return ya(a);
  }
  function xa(a, b, c, d) {
    try {
      var e = b.call(a.aa.ba, c);
      if (!(e instanceof Object))
        throw new TypeError('Iterator result ' + e + ' is not an object');
      if (!e.done) return (a.aa.ea = !1), e;
      var m = e.value;
    } catch (q) {
      return (a.aa.ba = null), ua(a.aa, q), ya(a);
    }
    a.aa.ba = null;
    d.call(a.aa, m);
    return ya(a);
  }
  function ya(a) {
    for (; a.aa.aa; )
      try {
        var b = a.ba(a.aa);
        if (b) return (a.aa.ea = !1), { value: b.value, done: !1 };
      } catch (c) {
        (a.aa.ua = void 0), ua(a.aa, c);
      }
    a.aa.ea = !1;
    if (a.aa.da) {
      b = a.aa.da;
      a.aa.da = null;
      if (b.Qg) throw b.Kg;
      return { value: b.return, done: !0 };
    }
    return { value: void 0, done: !0 };
  }
  function za(a) {
    this.next = function(b) {
      a.aa.Fd();
      a.aa.ba
        ? (b = xa(a, a.aa.ba.next, b, a.aa.fa))
        : (a.aa.fa(b), (b = ya(a)));
      return b;
    };
    this.throw = function(b) {
      a.aa.Fd();
      a.aa.ba
        ? (b = xa(a, a.aa.ba['throw'], b, a.aa.fa))
        : (ua(a.aa, b), (b = ya(a)));
      return b;
    };
    this.return = function(b) {
      return wa(a, b);
    };
    ha();
    this[Symbol.iterator] = function() {
      return this;
    };
  }
  function Aa(a, b) {
    b = new za(new va(b));
    pa && pa(b, a.prototype);
    return b;
  }
  function Ba(a, b) {
    if (b) {
      var c = ca;
      a = a.split('.');
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d &&
        null != b &&
        ba(c, a, { configurable: !0, writable: !0, value: b });
    }
  }
  Ba('Array.prototype.find', function(a) {
    return a
      ? a
      : function(b, c) {
          a: {
            var d = this;
            d instanceof String && (d = String(d));
            for (var e = d.length, m = 0; m < e; m++) {
              var q = d[m];
              if (b.call(c, q, m, d)) {
                b = q;
                break a;
              }
            }
            b = void 0;
          }
          return b;
        };
  });
  function Ca(a, b, c) {
    if (null == a)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          c +
          ' must not be null or undefined'
      );
    if (b instanceof RegExp)
      throw new TypeError(
        'First argument to String.prototype.' +
          c +
          ' must not be a regular expression'
      );
    return a + '';
  }
  Ba('String.prototype.repeat', function(a) {
    return a
      ? a
      : function(b) {
          var c = Ca(this, null, 'repeat');
          if (0 > b || 1342177279 < b)
            throw new RangeError('Invalid count value');
          b |= 0;
          for (var d = ''; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
          return d;
        };
  });
  function Da(a, b) {
    ha();
    a instanceof String && (a += '');
    var c = 0,
      d = {
        next: function() {
          if (c < a.length) {
            var e = c++;
            return { value: b(e, a[e]), done: !1 };
          }
          d.next = function() {
            return { done: !0, value: void 0 };
          };
          return d.next();
        }
      };
    d[Symbol.iterator] = function() {
      return d;
    };
    return d;
  }
  Ba('Array.prototype.keys', function(a) {
    return a
      ? a
      : function() {
          return Da(this, function(b) {
            return b;
          });
        };
  });
  function Ea(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  Ba('WeakMap', function(a) {
    function b(t) {
      this.aa = (q += Math.random() + 1).toString();
      if (t) {
        t = y(t);
        for (var z; !(z = t.next()).done; ) (z = z.value), this.set(z[0], z[1]);
      }
    }
    function c() {}
    function d(t) {
      if (!Ea(t, m)) {
        var z = new c();
        ba(t, m, { value: z });
      }
    }
    function e(t) {
      var z = Object[t];
      z &&
        (Object[t] = function(D) {
          if (D instanceof c) return D;
          d(D);
          return z(D);
        });
    }
    if (
      (function() {
        if (!a || !Object.seal) return !1;
        try {
          var t = Object.seal({}),
            z = Object.seal({}),
            D = new a([
              [t, 2],
              [z, 3]
            ]);
          if (2 != D.get(t) || 3 != D.get(z)) return !1;
          D.delete(t);
          D.set(z, 4);
          return !D.has(t) && 4 == D.get(z);
        } catch (C) {
          return !1;
        }
      })()
    )
      return a;
    var m = '$jscomp_hidden_' + Math.random();
    e('freeze');
    e('preventExtensions');
    e('seal');
    var q = 0;
    b.prototype.set = function(t, z) {
      d(t);
      if (!Ea(t, m)) throw Error('WeakMap key fail: ' + t);
      t[m][this.aa] = z;
      return this;
    };
    b.prototype.get = function(t) {
      return Ea(t, m) ? t[m][this.aa] : void 0;
    };
    b.prototype.has = function(t) {
      return Ea(t, m) && Ea(t[m], this.aa);
    };
    b.prototype.delete = function(t) {
      return Ea(t, m) && Ea(t[m], this.aa) ? delete t[m][this.aa] : !1;
    };
    return b;
  });
  Ba('Map', function(a) {
    function b() {
      var t = {};
      return (t.Cc = t.next = t.head = t);
    }
    function c(t, z) {
      var D = t.aa;
      return ia(function() {
        if (D) {
          for (; D.head != t.aa; ) D = D.Cc;
          for (; D.next != D.head; )
            return (D = D.next), { done: !1, value: z(D) };
          D = null;
        }
        return { done: !0, value: void 0 };
      });
    }
    function d(t, z) {
      var D = z && typeof z;
      'object' == D || 'function' == D
        ? m.has(z)
          ? (D = m.get(z))
          : ((D = '' + ++q), m.set(z, D))
        : (D = 'p_' + z);
      var C = t.ba[D];
      if (C && Ea(t.ba, D))
        for (t = 0; t < C.length; t++) {
          var S = C[t];
          if ((z !== z && S.key !== S.key) || z === S.key)
            return { id: D, list: C, index: t, nb: S };
        }
      return { id: D, list: C, index: -1, nb: void 0 };
    }
    function e(t) {
      this.ba = {};
      this.aa = b();
      this.size = 0;
      if (t) {
        t = y(t);
        for (var z; !(z = t.next()).done; ) (z = z.value), this.set(z[0], z[1]);
      }
    }
    if (
      (function() {
        if (
          !a ||
          'function' != typeof a ||
          !a.prototype.entries ||
          'function' != typeof Object.seal
        )
          return !1;
        try {
          var t = Object.seal({ x: 4 }),
            z = new a(y([[t, 's']]));
          if (
            's' != z.get(t) ||
            1 != z.size ||
            z.get({ x: 4 }) ||
            z.set({ x: 4 }, 't') != z ||
            2 != z.size
          )
            return !1;
          var D = z.entries(),
            C = D.next();
          if (C.done || C.value[0] != t || 's' != C.value[1]) return !1;
          C = D.next();
          return C.done ||
            4 != C.value[0].x ||
            't' != C.value[1] ||
            !D.next().done
            ? !1
            : !0;
        } catch (S) {
          return !1;
        }
      })()
    )
      return a;
    ha();
    var m = new WeakMap();
    e.prototype.set = function(t, z) {
      t = 0 === t ? 0 : t;
      var D = d(this, t);
      D.list || (D.list = this.ba[D.id] = []);
      D.nb
        ? (D.nb.value = z)
        : ((D.nb = {
            next: this.aa,
            Cc: this.aa.Cc,
            head: this.aa,
            key: t,
            value: z
          }),
          D.list.push(D.nb),
          (this.aa.Cc.next = D.nb),
          (this.aa.Cc = D.nb),
          this.size++);
      return this;
    };
    e.prototype.delete = function(t) {
      t = d(this, t);
      return t.nb && t.list
        ? (t.list.splice(t.index, 1),
          t.list.length || delete this.ba[t.id],
          (t.nb.Cc.next = t.nb.next),
          (t.nb.next.Cc = t.nb.Cc),
          (t.nb.head = null),
          this.size--,
          !0)
        : !1;
    };
    e.prototype.clear = function() {
      this.ba = {};
      this.aa = this.aa.Cc = b();
      this.size = 0;
    };
    e.prototype.has = function(t) {
      return !!d(this, t).nb;
    };
    e.prototype.get = function(t) {
      return (t = d(this, t).nb) && t.value;
    };
    e.prototype.entries = function() {
      return c(this, function(t) {
        return [t.key, t.value];
      });
    };
    e.prototype.keys = function() {
      return c(this, function(t) {
        return t.key;
      });
    };
    e.prototype.values = function() {
      return c(this, function(t) {
        return t.value;
      });
    };
    e.prototype.forEach = function(t, z) {
      for (var D = this.entries(), C; !(C = D.next()).done; )
        (C = C.value), t.call(z, C[1], C[0], this);
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var q = 0;
    return e;
  });
  Ba('Set', function(a) {
    function b(c) {
      this.aa = new Map();
      if (c) {
        c = y(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.aa.size;
    }
    if (
      (function() {
        if (
          !a ||
          'function' != typeof a ||
          !a.prototype.entries ||
          'function' != typeof Object.seal
        )
          return !1;
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(y([c]));
          if (
            !d.has(c) ||
            1 != d.size ||
            d.add(c) != d ||
            1 != d.size ||
            d.add({ x: 4 }) != d ||
            2 != d.size
          )
            return !1;
          var e = d.entries(),
            m = e.next();
          if (m.done || m.value[0] != c || m.value[1] != c) return !1;
          m = e.next();
          return m.done ||
            m.value[0] == c ||
            4 != m.value[0].x ||
            m.value[1] != m.value[0]
            ? !1
            : e.next().done;
        } catch (q) {
          return !1;
        }
      })()
    )
      return a;
    ha();
    b.prototype.add = function(c) {
      c = 0 === c ? 0 : c;
      this.aa.set(c, c);
      this.size = this.aa.size;
      return this;
    };
    b.prototype.delete = function(c) {
      c = this.aa.delete(c);
      this.size = this.aa.size;
      return c;
    };
    b.prototype.clear = function() {
      this.aa.clear();
      this.size = 0;
    };
    b.prototype.has = function(c) {
      return this.aa.has(c);
    };
    b.prototype.entries = function() {
      return this.aa.entries();
    };
    b.prototype.values = function() {
      return this.aa.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function(c, d) {
      var e = this;
      this.aa.forEach(function(m) {
        return c.call(d, m, m, e);
      });
    };
    return b;
  });
  Ba('Array.prototype.values', function(a) {
    return a
      ? a
      : function() {
          return Da(this, function(b, c) {
            return c;
          });
        };
  });
  Ba('Array.from', function(a) {
    return a
      ? a
      : function(b, c, d) {
          c =
            null != c
              ? c
              : function(t) {
                  return t;
                };
          var e = [],
            m =
              'undefined' != typeof Symbol &&
              Symbol.iterator &&
              b[Symbol.iterator];
          if ('function' == typeof m) {
            b = m.call(b);
            for (var q = 0; !(m = b.next()).done; )
              e.push(c.call(d, m.value, q++));
          } else
            for (m = b.length, q = 0; q < m; q++) e.push(c.call(d, b[q], q));
          return e;
        };
  });
  Ba('Object.is', function(a) {
    return a
      ? a
      : function(b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  Ba('Array.prototype.includes', function(a) {
    return a
      ? a
      : function(b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var m = d[c];
            if (m === b || Object.is(m, b)) return !0;
          }
          return !1;
        };
  });
  Ba('String.prototype.includes', function(a) {
    return a
      ? a
      : function(b, c) {
          return -1 !== Ca(this, b, 'includes').indexOf(b, c || 0);
        };
  });
  Ba('Array.prototype.entries', function(a) {
    return a
      ? a
      : function() {
          return Da(this, function(b, c) {
            return [b, c];
          });
        };
  });
  Ba('Array.prototype.fill', function(a) {
    return a
      ? a
      : function(b, c, d) {
          var e = this.length || 0;
          0 > c && (c = Math.max(0, e + c));
          if (null == d || d > e) d = e;
          d = Number(d);
          0 > d && (d = Math.max(0, e + d));
          for (c = Number(c || 0); c < d; c++) this[c] = b;
          return this;
        };
  });
  var Fa =
    'function' == typeof Object.assign
      ? Object.assign
      : function(a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) Ea(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  Ba('Object.assign', function(a) {
    return a || Fa;
  });
  function Ga(a, b) {
    a = void 0 !== a ? String(a) : ' ';
    return 0 < b && a ? a.repeat(Math.ceil(b / a.length)).substring(0, b) : '';
  }
  Ba('String.prototype.padStart', function(a) {
    return a
      ? a
      : function(b, c) {
          var d = Ca(this, null, 'padStart');
          return Ga(c, b - d.length) + d;
        };
  });
  Ba('String.prototype.padEnd', function(a) {
    return a
      ? a
      : function(b, c) {
          var d = Ca(this, null, 'padStart');
          return d + Ga(c, b - d.length);
        };
  });
  var Ha = this || self;
  function Ia(a) {
    return void 0 !== a;
  }
  function Ja(a) {
    return 'string' == typeof a;
  }
  function Ka(a) {
    return 'number' == typeof a;
  }
  function La() {}
  function Na(a) {
    var b = typeof a;
    if ('object' == b)
      if (a) {
        if (a instanceof Array) return 'array';
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ('[object Window]' == c) return 'object';
        if (
          '[object Array]' == c ||
          ('number' == typeof a.length &&
            'undefined' != typeof a.splice &&
            'undefined' != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable('splice'))
        )
          return 'array';
        if (
          '[object Function]' == c ||
          ('undefined' != typeof a.call &&
            'undefined' != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable('call'))
        )
          return 'function';
      } else return 'null';
    else if ('function' == b && 'undefined' == typeof a.call) return 'object';
    return b;
  }
  function Oa(a) {
    return 'array' == Na(a);
  }
  function Pa(a) {
    var b = Na(a);
    return 'array' == b || ('object' == b && 'number' == typeof a.length);
  }
  function Qa(a) {
    var b = typeof a;
    return ('object' == b && null != a) || 'function' == b;
  }
  function E(a) {
    return a[Ra] || (a[Ra] = ++Sa);
  }
  var Ra = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
    Sa = 0;
  function Ta(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function Ua(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function() {
      return a.apply(b, arguments);
    };
  }
  function Va(a, b, c) {
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf('native code')
      ? (Va = Ta)
      : (Va = Ua);
    return Va.apply(null, arguments);
  }
  var Wa =
    Date.now ||
    function() {
      return +new Date();
    };
  function Xa(a, b) {
    a = a.split('.');
    var c = Ha;
    a[0] in c ||
      'undefined' == typeof c.execScript ||
      c.execScript('var ' + a[0]);
    for (var d; a.length && (d = a.shift()); )
      !a.length && Ia(b)
        ? (c[d] = b)
        : c[d] && c[d] !== Object.prototype[d]
        ? (c = c[d])
        : (c = c[d] = {});
  }
  function F(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.la = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.di = function(d, e, m) {
      for (
        var q = Array(arguments.length - 2), t = 2;
        t < arguments.length;
        t++
      )
        q[t - 2] = arguments[t];
      return b.prototype[e].apply(d, q);
    };
  }
  function Ya(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Ya);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }
  F(Ya, Error);
  Ya.prototype.name = 'CustomError';
  var $a;
  function ab(a, b) {
    a = a.split('%s');
    for (var c = '', d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : '%s');
    Ya.call(this, c + a[d]);
  }
  F(ab, Ya);
  ab.prototype.name = 'AssertionError';
  function bb(a, b) {
    throw new ab(
      'Failure' + (a ? ': ' + a : ''),
      Array.prototype.slice.call(arguments, 1)
    );
  }
  function cb(a) {
    return a[a.length - 1];
  }
  var db = Array.prototype.indexOf
      ? function(a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function(a, b) {
          if (Ja(a)) return Ja(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    eb = Array.prototype.forEach
      ? function(a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function(a, b, c) {
          for (var d = a.length, e = Ja(a) ? a.split('') : a, m = 0; m < d; m++)
            m in e && b.call(c, e[m], m, a);
        },
    fb = Array.prototype.filter
      ? function(a, b) {
          return Array.prototype.filter.call(a, b, void 0);
        }
      : function(a, b) {
          for (
            var c = a.length, d = [], e = 0, m = Ja(a) ? a.split('') : a, q = 0;
            q < c;
            q++
          )
            if (q in m) {
              var t = m[q];
              b.call(void 0, t, q, a) && (d[e++] = t);
            }
          return d;
        },
    gb = Array.prototype.map
      ? function(a, b) {
          return Array.prototype.map.call(a, b, void 0);
        }
      : function(a, b) {
          for (
            var c = a.length, d = Array(c), e = Ja(a) ? a.split('') : a, m = 0;
            m < c;
            m++
          )
            m in e && (d[m] = b.call(void 0, e[m], m, a));
          return d;
        };
  function hb(a, b) {
    b = db(a, b);
    var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c;
  }
  function ib(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function kb(a, b, c, d) {
    Array.prototype.splice.apply(a, lb(arguments, 1));
  }
  function lb(a, b, c) {
    return 2 >= arguments.length
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c);
  }
  function mb(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  var nb = String.prototype.trim
      ? function(a) {
          return a.trim();
        }
      : function(a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        },
    ob = /&/g,
    pb = /</g,
    qb = />/g,
    rb = /"/g,
    sb = /'/g,
    tb = /\x00/g,
    ub = /[\x00&<>"']/;
  function vb(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  var wb;
  a: {
    var xb = Ha.navigator;
    if (xb) {
      var yb = xb.userAgent;
      if (yb) {
        wb = yb;
        break a;
      }
    }
    wb = '';
  }
  function I(a) {
    return -1 != wb.indexOf(a);
  }
  function zb(a, b) {
    for (var c in a) b.call(void 0, a[c], c, a);
  }
  var Ab = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
    ' '
  );
  function Bb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var m = 0; m < Ab.length; m++)
        (c = Ab[m]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function Cb(a) {
    var b = arguments.length;
    if (1 == b && Oa(arguments[0])) return Cb.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
    return c;
  }
  function Db() {
    return (I('Chrome') || I('CriOS')) && !I('Edge');
  }
  function Eb(a) {
    ub.test(a) &&
      (-1 != a.indexOf('&') && (a = a.replace(ob, '&amp;')),
      -1 != a.indexOf('<') && (a = a.replace(pb, '&lt;')),
      -1 != a.indexOf('>') && (a = a.replace(qb, '&gt;')),
      -1 != a.indexOf('"') && (a = a.replace(rb, '&quot;')),
      -1 != a.indexOf("'") && (a = a.replace(sb, '&#39;')),
      -1 != a.indexOf('\x00') && (a = a.replace(tb, '&#0;')));
    return a;
  }
  function Gb(a) {
    Gb[' '](a);
    return a;
  }
  Gb[' '] = La;
  function Hb(a, b) {
    var c = Ib;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
  }
  var Jb = I('Opera'),
    Kb = I('Trident') || I('MSIE'),
    Lb = I('Edge'),
    Mb =
      I('Gecko') &&
      !(-1 != wb.toLowerCase().indexOf('webkit') && !I('Edge')) &&
      !(I('Trident') || I('MSIE')) &&
      !I('Edge'),
    Nb = -1 != wb.toLowerCase().indexOf('webkit') && !I('Edge'),
    Ob = I('Macintosh'),
    Pb = I('Windows'),
    Qb = I('Linux') || I('CrOS');
  function Rb() {
    var a = Ha.document;
    return a ? a.documentMode : void 0;
  }
  var Sb;
  a: {
    var Tb = '',
      Ub = (function() {
        var a = wb;
        if (Mb) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Lb) return /Edge\/([\d\.]+)/.exec(a);
        if (Kb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Nb) return /WebKit\/(\S+)/.exec(a);
        if (Jb) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Ub && (Tb = Ub ? Ub[1] : '');
    if (Kb) {
      var Vb = Rb();
      if (null != Vb && Vb > parseFloat(Tb)) {
        Sb = String(Vb);
        break a;
      }
    }
    Sb = Tb;
  }
  var Ib = {};
  function Wb(a) {
    return Hb(a, function() {
      for (
        var b = 0,
          c = nb(String(Sb)).split('.'),
          d = nb(String(a)).split('.'),
          e = Math.max(c.length, d.length),
          m = 0;
        0 == b && m < e;
        m++
      ) {
        var q = c[m] || '',
          t = d[m] || '';
        do {
          q = /(\d*)(\D*)(.*)/.exec(q) || ['', '', '', ''];
          t = /(\d*)(\D*)(.*)/.exec(t) || ['', '', '', ''];
          if (0 == q[0].length && 0 == t[0].length) break;
          b =
            vb(
              0 == q[1].length ? 0 : parseInt(q[1], 10),
              0 == t[1].length ? 0 : parseInt(t[1], 10)
            ) ||
            vb(0 == q[2].length, 0 == t[2].length) ||
            vb(q[2], t[2]);
          q = q[3];
          t = t[3];
        } while (0 == b);
      }
      return 0 <= b;
    });
  }
  var Xb;
  var Yb = Ha.document;
  Xb =
    Yb && Kb
      ? Rb() || ('CSS1Compat' == Yb.compatMode ? parseInt(Sb, 10) : 5)
      : void 0;
  var Zb = !Kb || 9 <= Number(Xb);
  function $b(a, b, c) {
    return a + c * (b - a);
  }
  function bc(a, b) {
    this.x = Ia(a) ? a : 0;
    this.y = Ia(b) ? b : 0;
  }
  p = bc.prototype;
  p.clone = function() {
    return new bc(this.x, this.y);
  };
  p.toString = function() {
    return '(' + this.x + ', ' + this.y + ')';
  };
  p.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  p.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  p.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  p.translate = function(a, b) {
    a instanceof bc
      ? ((this.x += a.x), (this.y += a.y))
      : ((this.x += Number(a)), Ka(b) && (this.y += b));
    return this;
  };
  p.scale = function(a, b) {
    b = Ka(b) ? b : a;
    this.x *= a;
    this.y *= b;
    return this;
  };
  function cc(a, b) {
    zb(b, function(c, d) {
      c && 'object' == typeof c && c.gi && (c = c.fi());
      'style' == d
        ? (a.style.cssText = c)
        : 'class' == d
        ? (a.className = c)
        : 'for' == d
        ? (a.htmlFor = c)
        : dc.hasOwnProperty(d)
        ? a.setAttribute(dc[d], c)
        : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0)
        ? a.setAttribute(d, c)
        : (a[d] = c);
    });
  }
  var dc = {
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    colspan: 'colSpan',
    frameborder: 'frameBorder',
    height: 'height',
    maxlength: 'maxLength',
    nonce: 'nonce',
    role: 'role',
    rowspan: 'rowSpan',
    type: 'type',
    usemap: 'useMap',
    valign: 'vAlign',
    width: 'width'
  };
  function J(a, b, c) {
    return ec(document, arguments);
  }
  function ec(a, b) {
    var c = String(b[0]),
      d = b[1];
    if (!Zb && d && (d.name || d.type)) {
      c = ['<', c];
      d.name && c.push(' name="', Eb(d.name), '"');
      if (d.type) {
        c.push(' type="', Eb(d.type), '"');
        var e = {};
        Bb(e, d);
        delete e.type;
        d = e;
      }
      c.push('>');
      c = c.join('');
    }
    c = a.createElement(c);
    d &&
      (Ja(d)
        ? (c.className = d)
        : Oa(d)
        ? (c.className = d.join(' '))
        : cc(c, d));
    2 < b.length && fc(a, c, b);
    return c;
  }
  function fc(a, b, c) {
    function d(q) {
      q && b.appendChild(Ja(q) ? a.createTextNode(q) : q);
    }
    for (var e = 2; e < c.length; e++) {
      var m = c[e];
      !Pa(m) || (Qa(m) && 0 < m.nodeType) ? d(m) : eb(gc(m) ? ib(m) : m, d);
    }
  }
  function hc(a) {
    a && a.parentNode && a.parentNode.removeChild(a);
  }
  function gc(a) {
    if (a && 'number' == typeof a.length) {
      if (Qa(a))
        return 'function' == typeof a.item || 'string' == typeof a.item;
      if ('function' == Na(a)) return 'function' == typeof a.item;
    }
    return !1;
  }
  function ic() {
    this.aa = Ha.document || document;
  }
  ic.prototype.ha = function(a) {
    return Ja(a) ? this.aa.getElementById(a) : a;
  };
  ic.prototype.da = ic.prototype.ha;
  ic.prototype.ba = function(a, b, c) {
    return ec(this.aa, arguments);
  };
  var jc =
    Object.freeze ||
    function(a) {
      return a;
    };
  var kc = !Kb || 9 <= Number(Xb),
    lc = Kb && !Wb('9'),
    mc = (function() {
      if (!Ha.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
        b = Object.defineProperty({}, 'passive', {
          get: function() {
            a = !0;
          }
        });
      try {
        Ha.addEventListener('test', La, b),
          Ha.removeEventListener('test', La, b);
      } catch (c) {}
      return a;
    })();
  function nc() {
    0 != oc && (pc[E(this)] = this);
    this.ud = this.ud;
    this.Kc = this.Kc;
  }
  var oc = 0,
    pc = {};
  nc.prototype.ud = !1;
  function qc(a) {
    if (!a.ud && ((a.ud = !0), a.Mb(), 0 != oc)) {
      var b = E(a);
      if (0 != oc && a.Kc && 0 < a.Kc.length)
        throw Error(
          a +
            " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method."
        );
      delete pc[b];
    }
  }
  nc.prototype.Mb = function() {
    if (this.Kc) for (; this.Kc.length; ) this.Kc.shift()();
  };
  function K(a, b) {
    this.type = a;
    this.aa = this.target = b;
    this.ba = !1;
    this.Pf = !0;
  }
  K.prototype.stopPropagation = function() {
    this.ba = !0;
  };
  K.prototype.preventDefault = function() {
    this.Pf = !1;
  };
  function rc(a, b) {
    K.call(this, a ? a.type : '');
    this.relatedTarget = this.aa = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = '';
    this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = '';
    this.oc = null;
    a && this.ve(a, b);
  }
  F(rc, K);
  var sc = jc({ 2: 'touch', 3: 'pen', 4: 'mouse' });
  rc.prototype.ve = function(a, b) {
    var c = (this.type = a.type),
      d =
        a.changedTouches && a.changedTouches.length
          ? a.changedTouches[0]
          : null;
    this.target = a.target || a.srcElement;
    this.aa = b;
    if ((b = a.relatedTarget)) {
      if (Mb) {
        a: {
          try {
            Gb(b.nodeName);
            var e = !0;
            break a;
          } catch (m) {}
          e = !1;
        }
        e || (b = null);
      }
    } else
      'mouseover' == c
        ? (b = a.fromElement)
        : 'mouseout' == c && (b = a.toElement);
    this.relatedTarget = b;
    d
      ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
        (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0))
      : ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
        (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0));
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || '';
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = Ja(a.pointerType)
      ? a.pointerType
      : sc[a.pointerType] || '';
    this.oc = a;
    a.defaultPrevented && this.preventDefault();
  };
  rc.prototype.stopPropagation = function() {
    rc.la.stopPropagation.call(this);
    this.oc.stopPropagation
      ? this.oc.stopPropagation()
      : (this.oc.cancelBubble = !0);
  };
  rc.prototype.preventDefault = function() {
    rc.la.preventDefault.call(this);
    var a = this.oc;
    if (a.preventDefault) a.preventDefault();
    else if (((a.returnValue = !1), lc))
      try {
        if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
      } catch (b) {}
  };
  var tc = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
    uc = 0;
  function vc(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.Ud = e;
    this.key = ++uc;
    this.dd = this.Jd = !1;
  }
  function wc(a) {
    a.dd = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.Ud = null;
  }
  function xc(a) {
    this.src = a;
    this.aa = {};
    this.ba = 0;
  }
  xc.prototype.add = function(a, b, c, d, e) {
    var m = a.toString();
    a = this.aa[m];
    a || ((a = this.aa[m] = []), this.ba++);
    var q = yc(a, b, d, e);
    -1 < q
      ? ((b = a[q]), c || (b.Jd = !1))
      : ((b = new vc(b, this.src, m, !!d, e)), (b.Jd = c), a.push(b));
    return b;
  };
  xc.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.aa)) return !1;
    var e = this.aa[a];
    b = yc(e, b, c, d);
    return -1 < b
      ? (wc(e[b]),
        Array.prototype.splice.call(e, b, 1),
        0 == e.length && (delete this.aa[a], this.ba--),
        !0)
      : !1;
  };
  function zc(a, b) {
    var c = b.type;
    c in a.aa &&
      hb(a.aa[c], b) &&
      (wc(b), 0 == a.aa[c].length && (delete a.aa[c], a.ba--));
  }
  function yc(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var m = a[e];
      if (!m.dd && m.listener == b && m.capture == !!c && m.Ud == d) return e;
    }
    return -1;
  }
  var Ac = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    Cc = {},
    Gc = 0;
  function L(a, b, c, d, e) {
    if (d && d.once) return Hc(a, b, c, d, e);
    if (Oa(b)) {
      for (var m = 0; m < b.length; m++) L(a, b[m], c, d, e);
      return null;
    }
    c = Ic(c);
    return a && a[tc]
      ? a.ua.add(String(b), c, !1, Qa(d) ? !!d.capture : !!d, e)
      : Jc(a, b, c, !1, d, e);
  }
  function Jc(a, b, c, d, e, m) {
    if (!b) throw Error('Invalid event type');
    var q = Qa(e) ? !!e.capture : !!e,
      t = Kc(a);
    t || (a[Ac] = t = new xc(a));
    c = t.add(b, c, d, q, m);
    if (c.proxy) return c;
    d = Lc();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
      mc || (e = q),
        void 0 === e && (e = !1),
        a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Mc(b.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error('addEventListener and attachEvent are unavailable.');
    Gc++;
    return c;
  }
  function Lc() {
    var a = Nc,
      b = kc
        ? function(c) {
            return a.call(b.src, b.listener, c);
          }
        : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c;
          };
    return b;
  }
  function Hc(a, b, c, d, e) {
    if (Oa(b)) {
      for (var m = 0; m < b.length; m++) Hc(a, b[m], c, d, e);
      return null;
    }
    c = Ic(c);
    return a && a[tc]
      ? a.ua.add(String(b), c, !0, Qa(d) ? !!d.capture : !!d, e)
      : Jc(a, b, c, !0, d, e);
  }
  function M(a, b, c, d, e) {
    if (Oa(b)) for (var m = 0; m < b.length; m++) M(a, b[m], c, d, e);
    else
      ((d = Qa(d) ? !!d.capture : !!d), (c = Ic(c)), a && a[tc])
        ? a.ua.remove(String(b), c, d, e)
        : a &&
          (a = Kc(a)) &&
          ((b = a.aa[b.toString()]),
          (a = -1),
          b && (a = yc(b, c, d, e)),
          (c = -1 < a ? b[a] : null) && Oc(c));
  }
  function Oc(a) {
    if (!Ka(a) && a && !a.dd) {
      var b = a.src;
      if (b && b[tc]) zc(b.ua, a);
      else {
        var c = a.type,
          d = a.proxy;
        b.removeEventListener
          ? b.removeEventListener(c, d, a.capture)
          : b.detachEvent
          ? b.detachEvent(Mc(c), d)
          : b.addListener && b.removeListener && b.removeListener(d);
        Gc--;
        (c = Kc(b))
          ? (zc(c, a), 0 == c.ba && ((c.src = null), (b[Ac] = null)))
          : wc(a);
      }
    }
  }
  function Mc(a) {
    return a in Cc ? Cc[a] : (Cc[a] = 'on' + a);
  }
  function Pc(a, b, c, d) {
    var e = !0;
    if ((a = Kc(a)))
      if ((b = a.aa[b.toString()]))
        for (b = b.concat(), a = 0; a < b.length; a++) {
          var m = b[a];
          m && m.capture == c && !m.dd && ((m = Qc(m, d)), (e = e && !1 !== m));
        }
    return e;
  }
  function Qc(a, b) {
    var c = a.listener,
      d = a.Ud || a.src;
    a.Jd && Oc(a);
    return c.call(d, b);
  }
  function Nc(a, b) {
    if (a.dd) return !0;
    if (!kc) {
      if (!b)
        a: {
          b = ['window', 'event'];
          for (var c = Ha, d = 0; d < b.length; d++)
            if (((c = c[b[d]]), null == c)) {
              b = null;
              break a;
            }
          b = c;
        }
      d = b;
      b = new rc(d, this);
      c = !0;
      if (!(0 > d.keyCode || void 0 != d.returnValue)) {
        a: {
          var e = !1;
          if (0 == d.keyCode)
            try {
              d.keyCode = -1;
              break a;
            } catch (q) {
              e = !0;
            }
          if (e || void 0 == d.returnValue) d.returnValue = !0;
        }
        d = [];
        for (e = b.aa; e; e = e.parentNode) d.push(e);
        a = a.type;
        for (e = d.length - 1; !b.ba && 0 <= e; e--) {
          b.aa = d[e];
          var m = Pc(d[e], a, !0, b);
          c = c && m;
        }
        for (e = 0; !b.ba && e < d.length; e++)
          (b.aa = d[e]), (m = Pc(d[e], a, !1, b)), (c = c && m);
      }
      return c;
    }
    return Qc(a, new rc(b, this));
  }
  function Kc(a) {
    a = a[Ac];
    return a instanceof xc ? a : null;
  }
  var Rc = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
  function Ic(a) {
    if ('function' == Na(a)) return a;
    a[Rc] ||
      (a[Rc] = function(b) {
        return a.handleEvent(b);
      });
    return a[Rc];
  }
  var Sc = Array(4).join(String.fromCharCode(119));
  var Tc = /\\n/g;
  function Uc(a) {
    var b = a.getAttribute('id');
    b = b
      ? J('div', { class: 'chemwriter', id: b })
      : J('div', { class: 'chemwriter' });
    var c = a.getAttribute('data-chemwriter-width');
    a = (a = a.getAttribute('data-chemwriter-height')) ? a + 'px' : '100%';
    if (void 0 == a) throw Error('missing height argument');
    b.style.width = Vc(c ? c + 'px' : '100%');
    b.style.height = Vc(a);
    return b;
  }
  function Wc(a, b) {
    a = document.createElementNS('http://www.w3.org/2000/svg', a);
    if (b) for (var c in b) a.setAttribute(c, b[c]);
    return a;
  }
  function Xc(a, b) {
    b
      ? (a.setAttribute('fill', b.ba),
        1 !== b.aa && a.setAttribute('fill-opacity', b.aa))
      : a.setAttribute('fill', 'none');
  }
  function Yc(a, b) {
    a.setAttribute('stroke', b.ea);
    a.setAttribute('stroke-width', b.Jc());
    1 !== b.da && a.setAttribute('stroke-opacity', b.da);
    0 < b.aa.length &&
      a.setAttribute('stroke-dasharray', b.aa.join(',').toString());
  }
  function O() {
    nc.call(this);
    this.ua = new xc(this);
    this.Wf = this;
    this.be = null;
  }
  F(O, nc);
  O.prototype[tc] = !0;
  O.prototype.Wa = function(a) {
    this.be = a;
  };
  O.prototype.Xf = function(a, b, c, d) {
    L(this, a, b, c, d);
  };
  O.prototype.removeEventListener = function(a, b, c, d) {
    M(this, a, b, c, d);
  };
  function P(a, b) {
    var c,
      d = a.be;
    if (d) for (c = []; d; d = d.be) c.push(d);
    a = a.Wf;
    d = b.type || b;
    if (Ja(b)) b = new K(b, a);
    else if (b instanceof K) b.target = b.target || a;
    else {
      var e = b;
      b = new K(d, a);
      Bb(b, e);
    }
    e = !0;
    if (c)
      for (var m = c.length - 1; !b.ba && 0 <= m; m--) {
        var q = (b.aa = c[m]);
        e = Zc(q, d, !0, b) && e;
      }
    b.ba ||
      ((q = b.aa = a),
      (e = Zc(q, d, !0, b) && e),
      b.ba || (e = Zc(q, d, !1, b) && e));
    if (c)
      for (m = 0; !b.ba && m < c.length; m++)
        (q = b.aa = c[m]), (e = Zc(q, d, !1, b) && e);
    return e;
  }
  O.prototype.Mb = function() {
    O.la.Mb.call(this);
    if (this.ua) {
      var a = this.ua,
        b = 0,
        c;
      for (c in a.aa) {
        for (var d = a.aa[c], e = 0; e < d.length; e++) ++b, wc(d[e]);
        delete a.aa[c];
        a.ba--;
      }
    }
    this.be = null;
  };
  function Zc(a, b, c, d) {
    b = a.ua.aa[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, m = 0; m < b.length; ++m) {
      var q = b[m];
      if (q && !q.dd && q.capture == c) {
        var t = q.listener,
          z = q.Ud || q.src;
        q.Jd && zc(a.ua, q);
        e = !1 !== t.call(z, d) && e;
      }
    }
    return e && 0 != d.Pf;
  }
  function $c(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  }
  p = $c.prototype;
  p.Jc = function() {
    return this.right - this.left;
  };
  p.clone = function() {
    return new $c(this.top, this.right, this.bottom, this.left);
  };
  p.toString = function() {
    return (
      '(' +
      this.top +
      't, ' +
      this.right +
      'r, ' +
      this.bottom +
      'b, ' +
      this.left +
      'l)'
    );
  };
  p.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  p.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  p.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  p.translate = function(a, b) {
    a instanceof bc
      ? ((this.left += a.x),
        (this.right += a.x),
        (this.top += a.y),
        (this.bottom += a.y))
      : ((this.left += a),
        (this.right += a),
        Ka(b) && ((this.top += b), (this.bottom += b)));
    return this;
  };
  p.scale = function(a, b) {
    b = Ka(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b;
    return this;
  };
  function Vc(a) {
    'number' == typeof a && (a = Math.round(a) + 'px');
    return a;
  }
  function ad() {}
  ad.aa = void 0;
  ad.ba = function() {
    return ad.aa ? ad.aa : (ad.aa = new ad());
  };
  ad.prototype.aa = 0;
  function Q(a) {
    O.call(this);
    a || (a = $a || ($a = new ic()));
    this.Ee = a;
    this.Yd = null;
    this.Qb = !1;
    this.pa = null;
    this.wd = void 0;
    this.wa = this.fa = this.na = null;
  }
  F(Q, O);
  p = Q.prototype;
  p.Pg = ad.ba();
  function bd(a) {
    return a.Yd || (a.Yd = ':' + (a.Pg.aa++).toString(36));
  }
  p.ha = function() {
    return this.pa;
  };
  p.getParent = function() {
    return this.na;
  };
  p.Wa = function(a) {
    if (this.na && this.na != a) throw Error('Method not supported');
    Q.la.Wa.call(this, a);
  };
  p.Sa = function() {
    this.pa = this.Ee.aa.createElement('DIV');
  };
  function cd(a, b, c) {
    if (a.Qb) throw Error('Component already rendered');
    a.pa || a.Sa();
    b ? b.insertBefore(a.pa, c || null) : a.Ee.aa.body.appendChild(a.pa);
    (a.na && !a.na.Qb) || a.Fa();
  }
  p.Fa = function() {
    this.Qb = !0;
    dd(this, function(a) {
      !a.Qb && a.ha() && a.Fa();
    });
  };
  function ed(a) {
    dd(a, function(b) {
      b.Qb && ed(b);
    });
    a.wd && a.wd.aa();
    a.Qb = !1;
  }
  p.Mb = function() {
    this.Qb && ed(this);
    this.wd && (qc(this.wd), delete this.wd);
    dd(this, function(a) {
      qc(a);
    });
    this.pa && hc(this.pa);
    this.na = this.pa = this.wa = this.fa = null;
    Q.la.Mb.call(this);
  };
  function R(a, b) {
    fd(a, b, a.fa ? a.fa.length : 0);
  }
  function fd(a, b, c) {
    if (b.Qb) throw Error('Component already rendered');
    if (0 > c || c > (a.fa ? a.fa.length : 0))
      throw Error('Child component index out of bounds');
    (a.wa && a.fa) || ((a.wa = {}), (a.fa = []));
    if (b.getParent() == a) {
      var d = bd(b);
      a.wa[d] = b;
      hb(a.fa, b);
    } else {
      d = a.wa;
      var e = bd(b);
      if (null !== d && e in d)
        throw Error('The object already contains the key "' + e + '"');
      d[e] = b;
    }
    if (b == a) throw Error('Unable to set parent component');
    if (a && b.na && b.Yd && gd(b.na, b.Yd) && b.na != a)
      throw Error('Unable to set parent component');
    b.na = a;
    Q.la.Wa.call(b, a);
    kb(a.fa, c, 0, b);
    b.Qb && a.Qb && b.getParent() == a
      ? ((a = a.qe()),
        (c = a.childNodes[c] || null),
        c != b.ha() && a.insertBefore(b.ha(), c))
      : (a.pa || a.Sa(),
        (c = a.fa ? a.fa[c + 1] || null : null),
        cd(b, a.qe(), c ? c.pa : null));
  }
  p.qe = function() {
    return this.pa;
  };
  function hd(a) {
    var b = [];
    dd(a, function(c) {
      b.push(bd(c));
    });
    return b;
  }
  function gd(a, b) {
    a.wa && b
      ? ((a = a.wa), (b = (null !== a && b in a ? a[b] : void 0) || null))
      : (b = null);
    return b;
  }
  function dd(a, b) {
    a.fa && eb(a.fa, b, void 0);
  }
  function id(a, b, c, d) {
    this.Ia = a;
    this.Ja = b;
    this.Ya = c;
    this.Za = d;
  }
  id.prototype.clone = function() {
    return new id(this.Ia, this.Ja, this.Ya, this.Za);
  };
  function jd(a, b) {
    this.x = a;
    this.y = b;
  }
  F(jd, bc);
  jd.prototype.clone = function() {
    return new jd(this.x, this.y);
  };
  jd.prototype.scale = bc.prototype.scale;
  jd.prototype.add = function(a) {
    this.x += a.x;
    this.y += a.y;
    return this;
  };
  function kd(a, b) {
    a.x -= b.x;
    a.y -= b.y;
    return a;
  }
  function ld(a, b) {
    var c = Math.cos(b);
    b = Math.sin(b);
    var d = a.y * c + a.x * b;
    a.x = a.x * c - a.y * b;
    a.y = d;
    return a;
  }
  function md(a, b, c, d, e, m) {
    if (6 == arguments.length) nd(this, a, b, c, d, e, m);
    else {
      if (0 != arguments.length) throw Error('Insufficient matrix parameters');
      this.aa = this.ea = 1;
      this.da = this.ba = this.fa = this.na = 0;
    }
  }
  function od(a) {
    return (
      1 == a.aa && 0 == a.da && 0 == a.ba && 1 == a.ea && 0 == a.fa && 0 == a.na
    );
  }
  p = md.prototype;
  p.clone = function() {
    return new md(this.aa, this.da, this.ba, this.ea, this.fa, this.na);
  };
  function nd(a, b, c, d, e, m, q) {
    if (!(Ka(b) && Ka(c) && Ka(d) && Ka(e) && Ka(m) && Ka(q)))
      throw Error('Invalid transform parameters');
    a.aa = b;
    a.da = c;
    a.ba = d;
    a.ea = e;
    a.fa = m;
    a.na = q;
    return a;
  }
  p.scale = function(a, b) {
    this.aa *= a;
    this.da *= a;
    this.ba *= b;
    this.ea *= b;
    return this;
  };
  p.translate = function(a, b) {
    this.fa += a * this.aa + b * this.ba;
    this.na += a * this.da + b * this.ea;
    return this;
  };
  function pd(a, b) {
    var c = new md();
    var d = Math.cos(b);
    b = Math.sin(b);
    c = nd(c, d, b, -b, d, -(0 * d) + 0 * b, -(0 * b) - 0 * d);
    d = a.aa;
    b = a.ba;
    a.aa = c.aa * d + c.da * b;
    a.ba = c.ba * d + c.ea * b;
    a.fa += c.fa * d + c.na * b;
    d = a.da;
    b = a.ea;
    a.da = c.aa * d + c.da * b;
    a.ea = c.ba * d + c.ea * b;
    a.na += c.fa * d + c.na * b;
  }
  p.toString = function() {
    return (
      'matrix(' +
      [this.aa, this.da, this.ba, this.ea, this.fa, this.na].join() +
      ')'
    );
  };
  p.transform = function(a, b, c, d, e) {
    var m = b;
    for (b += 2 * e; m < b; ) {
      e = a[m++];
      var q = a[m++];
      c[d++] = e * this.aa + q * this.ba + this.fa;
      c[d++] = e * this.da + q * this.ea + this.na;
    }
  };
  function qd(a) {
    var b = a.Eb();
    if (0 === b.length) return 1;
    a = [];
    for (var c = 0; c < b.length; c++) {
      var d = b[c];
      a.push(rd(d.ta.ra(), d.Ka().ra()));
    }
    a.sort(mb);
    return 0 === a.length % 2
      ? ((b = a.length / 2), (a[b - 1] + a[b]) / 2)
      : a[(a.length - 1) / 2];
  }
  function sd(a, b, c, d) {
    return Math.sqrt((c - a) * (c - a) + (d - b) * (d - b));
  }
  function rd(a, b) {
    var c = a.x - b.x;
    a = a.y - b.y;
    return Math.sqrt(c * c + a * a);
  }
  function td(a, b) {
    var c = b.y + b.height,
      d = b.y,
      e = b.x;
    b = b.x + b.width;
    var m;
    (m = ud(a, new id(e, d, e, c))) ||
      (m = ud(a, new id(e, d, b, d))) ||
      (m = ud(a, new id(e, c, b, c))) ||
      (m = ud(a, new id(b, d, b, c)));
    return m;
  }
  function ud(a, b) {
    var c = a.Ia,
      d = a.Ja,
      e = a.Ya;
    a = a.Za;
    var m = b.Ia,
      q = b.Ja,
      t = b.Ya,
      z = b.Za;
    b = (z - q) * (e - c) - (t - m) * (a - d);
    if (
      0 !== b &&
      ((t = ((t - m) * (d - q) - (z - q) * (c - m)) / b),
      (m = ((e - c) * (d - q) - (a - d) * (c - m)) / b),
      0 <= t && 1 >= t && 0 <= m && 1 >= m)
    )
      return new bc(c + t * (e - c), d + t * (a - d));
  }
  function vd(a, b) {
    var c = Math.sin(b);
    b = Math.cos(b);
    var d = a.Ya - a.Ia,
      e = a.Za - a.Ja;
    a.Ya = a.Ia + (d * b - e * c);
    a.Za = a.Ja + (d * c + e * b);
  }
  function wd(a, b) {
    a = xd(a);
    b = xd(b);
    var c = b - a;
    return c > Math.PI
      ? b - 2 * Math.PI - a
      : c < -Math.PI
      ? b - a + 2 * Math.PI
      : c;
  }
  function xd(a) {
    a = Math.atan2(a.Za - a.Ja, a.Ya - a.Ia);
    return 0 > a ? 2 * Math.PI + a : a;
  }
  function yd(a, b) {
    var c = a.Ia - a.Ya,
      d = a.Ja - a.Za;
    b /= Math.sqrt(c * c + d * d);
    a.Ia += b * d;
    a.Ja -= b * c;
    a.Ya += b * d;
    a.Za -= b * c;
  }
  function zd(a, b) {
    return Ad(Math.atan2(b.y - a.y, b.x - a.x));
  }
  function Ad(a) {
    0 > a && (a += 2 * Math.PI);
    a >= 2 * Math.PI && (a -= 2 * Math.PI);
    return a;
  }
  function Bd(a, b, c) {
    a = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
    return 0 === a ? 0 : 0 < a ? 1 : -1;
  }
  function Cd(a) {
    return Dd(a.ta, a.Ka());
  }
  function Dd(a, b) {
    return zd(a.ra(), b.ra());
  }
  function Ed(a, b) {
    return Bd(a.ta.ra(), a.Ka().ra(), b.ra());
  }
  function Fd(a, b) {
    return Bd(a.ta.ra(), a.Ka().ra(), b);
  }
  function Gd(a) {
    switch (a.va.length) {
      case 1:
        return Ad(Dd(a, a.va[0]) + Math.PI);
      case 2:
        return Hd(a);
      case 3:
        return Id(a);
    }
    return Math.PI / 6;
  }
  function Jd(a) {
    switch (a.va.length) {
      case 0:
        return Math.PI / 6;
      case 1:
        return Kd(a);
      case 2:
        return Hd(a);
    }
    return Id(a);
  }
  function Kd(a) {
    var b = a.va[0];
    if (2 == b.va.length) {
      b = a.va[0];
      var c = b.va;
      c = c[0] == a ? c[1] : c[0];
      if (c === a) throw Error('cousin is node');
      var d = Dd(b, a);
      a = Ad(d + Math.PI / 3);
      d = Ad(d - Math.PI / 3);
      b = Dd(c, b);
      return Math.abs(b - a) > Math.abs(b - d) ? d : a;
    }
    b = Dd(b, a);
    if (0 <= b && b <= Math.PI / 2) return b - Math.PI / 3;
    if (b > Math.PI / 2 && b <= Math.PI) return b + Math.PI / 3;
    if (b > Math.PI && b <= (3 * Math.PI) / 2) return b - Math.PI / 3;
    if (b > (3 * Math.PI) / 2 && b <= 2 * Math.PI) return b + Math.PI / 3;
    throw Error('Unable to assign angle');
  }
  function Hd(a) {
    var b = a.va,
      c = Dd(a, b[0]);
    a = Dd(a, b[1]);
    c > a && ((b = c), (c = a), (a = b));
    b = a - c;
    b > Math.PI && (b = -(2 * Math.PI + c - a));
    return Ad(c + 0.5 * b + Math.PI);
  }
  function Id(a) {
    var b = a.va.slice(0);
    b.sort(function(z, D) {
      return Dd(a, z) - Dd(a, D);
    });
    for (var c = 0, d = 0, e = 1; e < b.length; e++) {
      var m = Dd(a, b[e - 1]),
        q = Dd(a, b[e]),
        t = q - m;
      1e-6 < t - c && ((c = t), (d = m + 0.5 * (q - m)));
    }
    e = Dd(a, b[b.length - 1]);
    t = 2 * Math.PI - e + Dd(a, b[0]);
    1e-6 < t - c && ((c = t), (d = Ad(e + 0.5 * t)));
    return d;
  }
  function Ld(a, b) {
    var c =
        b.width / b.height > a.width / a.height
          ? b.height / a.height
          : b.width / a.width,
      d = b.x + 0.5 * b.width - 0.5 * a.width * c;
    a = b.y + 0.5 * b.height - 0.5 * a.height * c;
    b = new md();
    b.translate(d, a);
    b.scale(c, c);
    return b;
  }
  function Md(a, b, c, d) {
    this.x = a;
    this.y = b;
    this.width = c;
    this.height = d;
  }
  Md.prototype.qc = function() {
    return new bc(this.x + 0.5 * this.width, this.y + 0.5 * this.height);
  };
  Md.prototype.clone = function() {
    return new this.constructor(this.x, this.y, this.width, this.height);
  };
  function Nd(a) {
    return [a.x, a.y, a.width, a.height].join(' ');
  }
  function Od(a) {
    return new Md(a.left, a.bottom, a.right - a.left, a.top - a.bottom);
  }
  function T() {
    this.jb = [];
    this.bb = [];
    this.pb = [];
  }
  T.prototype.Hb = null;
  T.prototype.eb = null;
  T.prototype.Nc = !0;
  var Pd = [, 2, 2, 6, 6, 0];
  function Qd(a, b) {
    b.eb &&
      (Array.prototype.push.apply(a.jb, b.jb),
      Array.prototype.push.apply(a.bb, b.bb),
      Array.prototype.push.apply(a.pb, b.pb),
      (a.eb = b.eb.concat()),
      (a.Hb = b.Hb.concat()),
      (a.Nc = a.Nc && b.Nc));
  }
  function Td(a) {
    a.jb.length = 0;
    a.bb.length = 0;
    a.pb.length = 0;
    delete a.Hb;
    delete a.eb;
    delete a.Nc;
  }
  p = T.prototype;
  p.rb = function(a, b) {
    1 == cb(this.jb)
      ? (this.pb.length -= 2)
      : (this.jb.push(1), this.bb.push(1));
    this.pb.push(a, b);
    this.eb = this.Hb = [a, b];
    return this;
  };
  p.Da = function(a) {
    var b = cb(this.jb);
    if (null == b) throw Error('Path cannot start with lineTo');
    2 != b && (this.jb.push(2), this.bb.push(0));
    for (b = 0; b < arguments.length; b += 2) {
      var c = arguments[b],
        d = arguments[b + 1];
      this.pb.push(c, d);
    }
    this.bb[this.bb.length - 1] += b / 2;
    this.eb = [c, d];
    return this;
  };
  p.lb = function(a) {
    var b = cb(this.jb);
    if (null == b) throw Error('Path cannot start with curve');
    3 != b && (this.jb.push(3), this.bb.push(0));
    for (b = 0; b < arguments.length; b += 6) {
      var c = arguments[b + 4],
        d = arguments[b + 5];
      this.pb.push(
        arguments[b],
        arguments[b + 1],
        arguments[b + 2],
        arguments[b + 3],
        c,
        d
      );
    }
    this.bb[this.bb.length - 1] += b / 6;
    this.eb = [c, d];
    return this;
  };
  p.close = function() {
    var a = cb(this.jb);
    if (null == a) throw Error('Path cannot start with close');
    5 != a && (this.jb.push(5), this.bb.push(1), (this.eb = this.Hb));
    return this;
  };
  p.ke = function(a, b, c, d) {
    var e = this.eb[0] - a * Math.cos((c * Math.PI) / 180),
      m = this.eb[1] - b * Math.sin((c * Math.PI) / 180),
      q = (d * Math.PI) / 180;
    d = Math.ceil((Math.abs(q) / Math.PI) * 2);
    q /= d;
    c = (c * Math.PI) / 180;
    for (var t = 0; t < d; t++) {
      var z = Math.cos(c),
        D = Math.sin(c),
        C = ((4 / 3) * Math.sin(q / 2)) / (1 + Math.cos(q / 2)),
        S = e + (z - C * D) * a,
        H = m + (D + C * z) * b;
      c += q;
      z = Math.cos(c);
      D = Math.sin(c);
      this.lb(
        S,
        H,
        e + (z + C * D) * a,
        m + (D - C * z) * b,
        e + z * a,
        m + D * b
      );
    }
    return this;
  };
  function Ud(a, b) {
    for (var c = a.pb, d = 0, e = 0, m = a.jb.length; e < m; e++) {
      var q = a.jb[e],
        t = Pd[q] * a.bb[e];
      b(q, c.slice(d, d + t));
      d += t;
    }
  }
  p.clone = function() {
    var a = new this.constructor();
    a.jb = this.jb.concat();
    a.bb = this.bb.concat();
    a.pb = this.pb.concat();
    a.Hb = this.Hb && this.Hb.concat();
    a.eb = this.eb && this.eb.concat();
    a.Nc = this.Nc;
    return a;
  };
  var Vd = {};
  Vd[1] = T.prototype.rb;
  Vd[2] = T.prototype.Da;
  Vd[5] = T.prototype.close;
  Vd[3] = T.prototype.lb;
  Vd[4] = T.prototype.ke;
  function Wd(a) {
    if (a.Nc) return a.clone();
    var b = new T();
    Ud(a, function(c, d) {
      Vd[c].apply(b, d);
    });
    return b;
  }
  function ae(a, b) {
    a = Wd(a);
    a.transform(b);
    return a;
  }
  T.prototype.transform = function(a) {
    if (!this.Nc) throw Error('Non-simple path');
    a.transform(this.pb, 0, this.pb, 0, this.pb.length / 2);
    this.Hb && a.transform(this.Hb, 0, this.Hb, 0, 1);
    this.eb && this.Hb != this.eb && a.transform(this.eb, 0, this.eb, 0, 1);
    return this;
  };
  T.prototype.Ma = function() {
    return 0 == this.jb.length;
  };
  T.prototype.vb = function() {
    if (!this.Ma()) {
      var a,
        b = (a = Number.POSITIVE_INFINITY),
        c,
        d = (c = Number.NEGATIVE_INFINITY);
      Ud(this, function(e, m) {
        e = 0;
        for (var q = m.length; e < q; e += 2)
          (b = Math.min(b, m[e])),
            (d = Math.max(d, m[e])),
            (a = Math.min(a, m[e + 1])),
            (c = Math.max(c, m[e + 1]));
      });
      return new Md(b, a, d - b, c - a);
    }
  };
  function be(a) {
    var b = [];
    Ud(a, function(c, d) {
      switch (c) {
        case 1:
          b.push(ce);
          Array.prototype.push.apply(b, d);
          break;
        case 2:
          b.push(de);
          Array.prototype.push.apply(b, d);
          break;
        case 3:
          b.push(ee);
          Array.prototype.push.apply(b, d);
          break;
        case 4:
          c = d[3];
          b.push(
            fe,
            d[0],
            d[1],
            0,
            180 < Math.abs(c) ? 1 : 0,
            0 < c ? 1 : 0,
            d[4],
            d[5]
          );
          break;
        case 5:
          b.push(ge);
      }
    });
    return b.join(' ');
  }
  var ce = 'M',
    de = 'L',
    ee = 'C',
    fe = 'A',
    ge = 'Z';
  function he(a, b, c, d) {
    this.ba = a;
    this.ea = b;
    this.da = void 0 === c ? 1 : c;
    this.aa = d || [];
  }
  he.prototype.Jc = function() {
    return this.ba;
  };
  function ie(a, b) {
    this.ba = a;
    this.aa = 0 === b ? 0 : b || 1;
  }
  var je = new ie('#000000', 0);
  function ke() {
    Q.call(this);
    this.aa = new md();
  }
  F(ke, Q);
  ke.prototype.Sa = function() {
    var a = Wc('g', { class: 'chemwriter-group' });
    od(this.aa) || a.setAttribute('transform', this.aa.toString());
    this.pa = a;
  };
  function le(a, b, c) {
    b = Wc('line', { x1: b.Ia, y1: b.Ja, x2: b.Ya, y2: b.Za });
    Yc(b, c);
    a.ha().appendChild(b);
    return b;
  }
  function me(a, b, c, d) {
    if (!c && !d) throw Error('a stroke or fill is required');
    b = Wc('path', { d: be(b) });
    c && Yc(b, c);
    Xc(b, d);
    a.ha().appendChild(b);
    return b;
  }
  function ne(a, b, c) {
    if (!c) throw Error('a stroke or fill is required');
    b = Wc('circle', { cx: b.x, cy: b.y, r: b.aa });
    c && Xc(b, c);
    a.ha().appendChild(b);
    return b;
  }
  function oe(a, b) {
    a.aa = b.clone();
    a.ha() &&
      (od(b)
        ? a.ha().removeAttribute('transform')
        : a.ha().setAttribute('transform', b.toString()));
  }
  function pe(a) {
    oe(a, new md());
    if (a.ha()) for (; a.ha().lastChild; ) a.ha().removeChild(a.ha().lastChild);
  }
  function qe(a) {
    Q.call(this);
    this.Jb = a;
    this.da = this.aa = this.ba = void 0;
  }
  F(qe, Q);
  qe.prototype.Sa = function() {
    var a = Wc('svg', { class: 'chemwriter-graphics' });
    this.ba && a.setAttribute('viewBox', Nd(this.ba));
    this.pa = a;
  };
  qe.prototype.Fa = function() {
    qe.la.Fa.call(this);
    this.Jb.ea ? this.ea() : Hc(this.Jb, re, this.ea, !1, this);
  };
  function se(a, b) {
    a.ba = b;
    a.ha() && a.ha().setAttribute('viewBox', Nd(b));
    a.aa && te(a);
  }
  qe.prototype.ea = function() {
    if (!this.Jb.td()) {
      this.aa = new ke();
      fd(this, this.aa, 0);
      var a = new T();
      a.rb(205.296, 64.33);
      a.Da(226.064, 99.258);
      a.Da(185.543, 98.541);
      a.lb(183.108, 84.311, 191.051, 69.885, 205.296, 64.33);
      a.close();
      a.rb(110.267, 247.395);
      a.lb(106.23, 247.395, 102.256, 246.33, 98.783, 244.324);
      a.Da(11.597, 193.991);
      a.lb(4.501, 189.887, 0.09, 182.264, 0.104, 174.095);
      a.Da(0.104, 73.4);
      a.lb(0.104, 65.217, 4.501, 57.596, 11.585, 53.509);
      a.Da(98.793, 3.176);
      a.lb(114.288, 0.102, 118.248, 1.165, 121.75, 3.176);
      a.Da(191.854, 43.664);
      a.lb(166.365, 41.689, 147.172, 74.737, 160.117, 98.22);
      a.Da(110.253, 69.34);
      a.Da(63.137, 96.529);
      a.Da(63.137, 150.97);
      a.Da(110.276, 178.174);
      a.lb(142.892, 159.473, 163.069, 147.904, 171.362, 143.189);
      a.lb(177.199, 139.85, 183.217, 138.159, 189.227, 138.159);
      a.lb(203.739, 138.159, 216.54, 148.286, 220.352, 162.774);
      a.lb(223.887, 176.187, 218.394, 188.869, 206.022, 195.863);
      a.lb(188.434, 205.827, 121.751, 244.323, 121.751, 244.323);
      a.lb(118.248, 246.334, 114.288, 247.395, 110.267, 247.395);
      a.close();
      var b = new ie('#ffffff', 0);
      this.da = a.vb();
      me(this.aa, a, void 0, b);
      te(this);
    }
  };
  function te(a) {
    var b = a.ba || new Md(0, 0, 100, 100);
    a.da && oe(a.aa, Ld(a.da, b));
  }
  var ue = {
    0: {
      bounds: [0.5859375, -0.181640625, 6.328125, 8.4609375],
      commands: 'MLQQLQQLQQLQQZMLQQLQQLQQLQQZ',
      points: [
        6.9140625,
        4.0546875,
        6.9140625,
        4.0546875,
        6.9140625,
        1.869140625,
        6.146484375,
        0.84375,
        5.37890625,
        -0.181640625,
        3.744140625,
        -0.181640625,
        3.744140625,
        -0.181640625,
        2.12109375,
        -0.181640625,
        1.353515625,
        0.84375,
        0.5859375,
        1.869140625,
        0.5859375,
        4.04296875,
        0.5859375,
        4.04296875,
        0.5859375,
        6.216796875,
        1.353515625,
        7.248046875,
        2.12109375,
        8.279296875,
        3.744140625,
        8.279296875,
        3.744140625,
        8.279296875,
        5.37890625,
        8.279296875,
        6.146484375,
        7.25390625,
        6.9140625,
        6.228515625,
        6.9140625,
        4.0546875,
        5.208984375,
        4.0546875,
        5.208984375,
        4.0546875,
        5.208984375,
        5.5078125,
        4.8544921875,
        6.1845703125,
        4.5,
        6.861328125,
        3.744140625,
        6.861328125,
        3.744140625,
        6.861328125,
        2.98828125,
        6.861328125,
        2.6396484375,
        6.1787109375,
        2.291015625,
        5.49609375,
        2.291015625,
        4.04296875,
        2.291015625,
        4.04296875,
        2.291015625,
        2.58984375,
        2.6396484375,
        1.9130859375,
        2.98828125,
        1.236328125,
        3.744140625,
        1.236328125,
        3.744140625,
        1.236328125,
        4.5,
        1.236328125,
        4.8544921875,
        1.9189453125,
        5.208984375,
        2.6015625,
        5.208984375,
        4.0546875
      ],
      bearing: [0.5859375, 0.5859375]
    },
    1: {
      bounds: [1.453125, 0, 3.62109375, 8.109375],
      commands: 'MLLLLQQQLLLZ',
      points: [
        5.07421875,
        0,
        3.421875,
        0,
        3.421875,
        5.4375,
        1.453125,
        5.4375,
        1.453125,
        6.55078125,
        2.296875,
        6.603515625,
        2.7275390625,
        6.7529296875,
        3.158203125,
        6.90234375,
        3.4130859375,
        7.21875,
        3.66796875,
        7.53515625,
        3.814453125,
        8.109375,
        3.814453125,
        8.109375,
        5.07421875,
        8.109375,
        5.07421875,
        0
      ],
      bearing: [1.453125, 2.42578125]
    },
    2: {
      bounds: [0.59765625, 0, 5.84765625, 8.279296875],
      commands: 'MLLQQQQLQQLQQLLQQLQQLQQQQLLLZ',
      points: [
        6.4453125,
        0,
        0.62109375,
        0,
        0.62109375,
        1.3828125,
        1.576171875,
        2.185546875,
        2.361328125,
        2.91796875,
        3.146484375,
        3.650390625,
        3.57421875,
        4.1337890625,
        4.001953125,
        4.6171875,
        4.2392578125,
        5.0595703125,
        4.4765625,
        5.501953125,
        4.4765625,
        5.98828125,
        4.4765625,
        5.98828125,
        4.4765625,
        6.369140625,
        4.189453125,
        6.591796875,
        3.90234375,
        6.814453125,
        3.3984375,
        6.814453125,
        3.3984375,
        6.814453125,
        2.853515625,
        6.814453125,
        2.5078125,
        6.5625,
        2.162109375,
        6.310546875,
        1.93359375,
        5.96484375,
        1.93359375,
        5.96484375,
        0.59765625,
        6.90234375,
        1.095703125,
        7.646484375,
        1.7783203125,
        7.962890625,
        2.4609375,
        8.279296875,
        3.48046875,
        8.279296875,
        3.48046875,
        8.279296875,
        4.734375,
        8.279296875,
        5.4580078125,
        7.693359375,
        6.181640625,
        7.107421875,
        6.181640625,
        6.046875,
        6.181640625,
        6.046875,
        6.181640625,
        5.267578125,
        5.8974609375,
        4.6787109375,
        5.61328125,
        4.08984375,
        5.0888671875,
        3.5361328125,
        4.564453125,
        2.982421875,
        3.7822265625,
        2.314453125,
        3,
        1.646484375,
        2.818359375,
        1.51171875,
        2.818359375,
        1.51171875,
        6.4453125,
        1.51171875,
        6.4453125,
        0
      ],
      bearing: [0.59765625, 0.609375]
    },
    3: {
      bounds: [0.38671875, -0.169921875, 5.794921875, 8.44921875],
      commands: 'MLQQLQQLLQQLQQLQLLLLQQLQQLQQLLQQLQQQLQLQQZ',
      points: [
        6.181640625,
        2.279296875,
        6.181640625,
        2.279296875,
        6.181640625,
        1.03125,
        5.3642578125,
        0.4306640625,
        4.546875,
        -0.169921875,
        3.1171875,
        -0.169921875,
        3.1171875,
        -0.169921875,
        2.09765625,
        -0.169921875,
        1.3916015625,
        0.2021484375,
        0.685546875,
        0.57421875,
        0.38671875,
        1.142578125,
        0.38671875,
        1.142578125,
        1.716796875,
        2.05078125,
        1.93359375,
        1.716796875,
        2.255859375,
        1.51171875,
        2.578125,
        1.306640625,
        3.134765625,
        1.306640625,
        3.134765625,
        1.306640625,
        3.837890625,
        1.306640625,
        4.1572265625,
        1.576171875,
        4.4765625,
        1.845703125,
        4.4765625,
        2.40234375,
        4.4765625,
        2.40234375,
        4.4765625,
        3.52734375,
        2.98828125,
        3.52734375,
        2.98828125,
        3.52734375,
        2.267578125,
        3.52734375,
        2.267578125,
        4.9453125,
        2.89453125,
        4.9453125,
        3.638671875,
        4.9453125,
        3.978515625,
        5.23828125,
        4.318359375,
        5.53125,
        4.318359375,
        6,
        4.318359375,
        6,
        4.318359375,
        6.345703125,
        4.072265625,
        6.57421875,
        3.826171875,
        6.802734375,
        3.263671875,
        6.802734375,
        3.263671875,
        6.802734375,
        2.701171875,
        6.802734375,
        2.3642578125,
        6.6240234375,
        2.02734375,
        6.4453125,
        1.787109375,
        6.08203125,
        1.787109375,
        6.08203125,
        0.46875,
        7.0078125,
        0.94921875,
        7.658203125,
        1.6318359375,
        7.96875,
        2.314453125,
        8.279296875,
        3.38671875,
        8.279296875,
        3.38671875,
        8.279296875,
        4.201171875,
        8.279296875,
        4.8076171875,
        8.0244140625,
        5.4140625,
        7.76953125,
        5.724609375,
        7.318359375,
        6.03515625,
        6.8671875,
        6.03515625,
        6.287109375,
        6.03515625,
        6.287109375,
        6.03515625,
        4.69921875,
        4.39453125,
        4.294921875,
        4.39453125,
        4.294921875,
        5.197265625,
        4.2421875,
        5.689453125,
        3.6884765625,
        6.181640625,
        3.134765625,
        6.181640625,
        2.279296875
      ],
      bearing: [0.38671875, 0.873046875]
    },
    4: {
      bounds: [0.369140625, 0, 6.650390625, 8.109375],
      commands: 'MLLLLLLLLLLLZMLLLZ',
      points: [
        7.01953125,
        1.341796875,
        6.0234375,
        1.341796875,
        6.0234375,
        0,
        4.44140625,
        0,
        4.44140625,
        1.341796875,
        0.369140625,
        1.341796875,
        0.369140625,
        2.865234375,
        4.330078125,
        8.109375,
        6.0234375,
        8.109375,
        6.0234375,
        2.759765625,
        7.01953125,
        2.759765625,
        7.01953125,
        1.341796875,
        4.44140625,
        2.759765625,
        4.44140625,
        5.94140625,
        1.98046875,
        2.759765625,
        4.44140625,
        2.759765625
      ],
      bearing: [0.369140625, 0.48046875]
    },
    5: {
      bounds: [0.287109375, -0.169921875, 6.158203125, 8.279296875],
      commands: 'MLQQLQLLQLQLQQLQLLLLLLLQLQQZ',
      points: [
        6.4453125,
        2.666015625,
        6.4453125,
        2.666015625,
        6.4453125,
        1.341796875,
        5.5986328125,
        0.5859375,
        4.751953125,
        -0.169921875,
        3.158203125,
        -0.169921875,
        3.158203125,
        -0.169921875,
        1.171875,
        -0.169921875,
        0.287109375,
        1.166015625,
        0.287109375,
        1.166015625,
        1.60546875,
        2.09765625,
        2.056640625,
        1.306640625,
        3.134765625,
        1.306640625,
        3.134765625,
        1.306640625,
        4.751953125,
        1.306640625,
        4.751953125,
        2.701171875,
        4.751953125,
        2.701171875,
        4.751953125,
        3.287109375,
        4.3271484375,
        3.6240234375,
        3.90234375,
        3.9609375,
        3.146484375,
        3.9609375,
        3.146484375,
        3.9609375,
        2.337890625,
        3.9609375,
        1.921875,
        3.52734375,
        1.921875,
        3.52734375,
        0.767578125,
        3.52734375,
        1.248046875,
        8.109375,
        5.98828125,
        8.109375,
        5.98828125,
        6.59765625,
        2.56640625,
        6.59765625,
        2.40234375,
        5.173828125,
        2.958984375,
        5.40234375,
        3.638671875,
        5.40234375,
        3.638671875,
        5.40234375,
        4.939453125,
        5.40234375,
        5.6923828125,
        4.705078125,
        6.4453125,
        4.0078125,
        6.4453125,
        2.666015625
      ],
      bearing: [0.287109375, 0.609375]
    },
    6: {
      bounds: [0.5859375, -0.169921875, 5.9765625, 8.44921875],
      commands: 'MLQQLQQLQLLQQLQQLQQLQQLQQZMLQQLQQLQQLQQQZ',
      points: [
        3.650390625,
        -0.169921875,
        3.650390625,
        -0.169921875,
        2.185546875,
        -0.169921875,
        1.3857421875,
        0.7998046875,
        0.5859375,
        1.76953125,
        0.5859375,
        3.5625,
        0.5859375,
        3.5625,
        0.5859375,
        5.859375,
        1.447265625,
        7.0693359375,
        2.30859375,
        8.279296875,
        3.9609375,
        8.279296875,
        3.9609375,
        8.279296875,
        5.525390625,
        8.279296875,
        6.275390625,
        7.6171875,
        6.275390625,
        7.6171875,
        5.337890625,
        6.345703125,
        5.05078125,
        6.59765625,
        4.728515625,
        6.7294921875,
        4.40625,
        6.861328125,
        3.9609375,
        6.861328125,
        3.9609375,
        6.861328125,
        3.169921875,
        6.861328125,
        2.8095703125,
        6.322265625,
        2.44921875,
        5.783203125,
        2.349609375,
        4.787109375,
        2.349609375,
        4.787109375,
        2.818359375,
        5.103515625,
        3.1904296875,
        5.2265625,
        3.5625,
        5.349609375,
        4.078125,
        5.349609375,
        4.078125,
        5.349609375,
        5.220703125,
        5.349609375,
        5.8916015625,
        4.6494140625,
        6.5625,
        3.94921875,
        6.5625,
        2.630859375,
        6.5625,
        2.630859375,
        6.5625,
        1.330078125,
        5.77734375,
        0.580078125,
        4.9921875,
        -0.169921875,
        3.650390625,
        -0.169921875,
        3.662109375,
        1.248046875,
        3.662109375,
        1.248046875,
        4.212890625,
        1.248046875,
        4.5615234375,
        1.541015625,
        4.91015625,
        1.833984375,
        4.91015625,
        2.58984375,
        4.91015625,
        2.58984375,
        4.91015625,
        3.2109375,
        4.564453125,
        3.580078125,
        4.21875,
        3.94921875,
        3.638671875,
        3.94921875,
        3.638671875,
        3.94921875,
        3.181640625,
        3.94921875,
        2.8330078125,
        3.7998046875,
        2.484375,
        3.650390625,
        2.302734375,
        3.50390625,
        2.302734375,
        3.50390625,
        2.302734375,
        2.607421875,
        2.4375,
        2.185546875,
        2.572265625,
        1.763671875,
        2.865234375,
        1.505859375,
        3.158203125,
        1.248046875,
        3.662109375,
        1.248046875
      ],
      bearing: [0.5859375, 0.4921875]
    },
    7: {
      bounds: [0.662109375, 0, 6.08203125, 8.109375],
      commands: 'MLLLLLLLZ',
      points: [
        6.744140625,
        7.1015625,
        3.697265625,
        0,
        1.845703125,
        0,
        4.833984375,
        6.59765625,
        0.662109375,
        6.59765625,
        0.662109375,
        8.109375,
        6.744140625,
        8.109375,
        6.744140625,
        7.1015625
      ],
      bearing: [0.662109375, 0.755859375]
    },
    8: {
      bounds: [0.4921875, -0.169921875, 6.05859375, 8.44921875],
      commands: 'MLQQLQQLQQLQQLQQLQQLQQQLQQQZMLQQLQQLQQQLQQZMLQQLQQLQQLQQZ',
      points: [
        6.55078125,
        2.197265625,
        6.55078125,
        2.197265625,
        6.55078125,
        1.072265625,
        5.7685546875,
        0.451171875,
        4.986328125,
        -0.169921875,
        3.52734375,
        -0.169921875,
        3.52734375,
        -0.169921875,
        2.0859375,
        -0.169921875,
        1.2890625,
        0.4248046875,
        0.4921875,
        1.01953125,
        0.4921875,
        2.197265625,
        0.4921875,
        2.197265625,
        0.4921875,
        2.91796875,
        0.8994140625,
        3.45703125,
        1.306640625,
        3.99609375,
        1.9921875,
        4.306640625,
        1.9921875,
        4.306640625,
        1.3359375,
        4.62890625,
        1.0107421875,
        5.0888671875,
        0.685546875,
        5.548828125,
        0.685546875,
        6.08203125,
        0.685546875,
        6.08203125,
        0.685546875,
        7.154296875,
        1.435546875,
        7.716796875,
        2.185546875,
        8.279296875,
        3.52734375,
        8.279296875,
        3.52734375,
        8.279296875,
        4.833984375,
        8.279296875,
        5.595703125,
        7.734375,
        6.357421875,
        7.189453125,
        6.357421875,
        6.09375,
        6.357421875,
        6.09375,
        6.357421875,
        5.73046875,
        6.1845703125,
        5.419921875,
        6.01171875,
        5.109375,
        5.736328125,
        4.857421875,
        5.4609375,
        4.60546875,
        4.8984375,
        4.294921875,
        4.8984375,
        4.294921875,
        5.572265625,
        3.966796875,
        5.89453125,
        3.6796875,
        6.216796875,
        3.392578125,
        6.3837890625,
        3.0234375,
        6.55078125,
        2.654296875,
        6.55078125,
        2.197265625,
        4.740234375,
        6.0703125,
        4.740234375,
        6.0703125,
        4.740234375,
        6.45703125,
        4.458984375,
        6.720703125,
        4.177734375,
        6.984375,
        3.52734375,
        6.984375,
        3.52734375,
        6.984375,
        2.830078125,
        6.984375,
        2.56640625,
        6.720703125,
        2.302734375,
        6.45703125,
        2.302734375,
        6.10546875,
        2.302734375,
        6.10546875,
        2.302734375,
        5.841796875,
        2.419921875,
        5.66015625,
        2.537109375,
        5.478515625,
        2.8095703125,
        5.2763671875,
        3.08203125,
        5.07421875,
        3.52734375,
        4.8984375,
        3.52734375,
        4.8984375,
        4.212890625,
        5.197265625,
        4.4765625,
        5.484375,
        4.740234375,
        5.771484375,
        4.740234375,
        6.0703125,
        4.8984375,
        2.197265625,
        4.8984375,
        2.197265625,
        4.8984375,
        2.701171875,
        4.5615234375,
        3.03515625,
        4.224609375,
        3.369140625,
        3.52734375,
        3.697265625,
        3.52734375,
        3.697265625,
        2.783203125,
        3.369140625,
        2.466796875,
        3.03515625,
        2.150390625,
        2.701171875,
        2.150390625,
        2.185546875,
        2.150390625,
        2.185546875,
        2.150390625,
        1.728515625,
        2.478515625,
        1.435546875,
        2.806640625,
        1.142578125,
        3.52734375,
        1.142578125,
        3.52734375,
        1.142578125,
        4.248046875,
        1.142578125,
        4.5732421875,
        1.447265625,
        4.8984375,
        1.751953125,
        4.8984375,
        2.197265625
      ],
      bearing: [0.4921875, 0.50390625]
    },
    9: {
      bounds: [0.4921875, -0.169921875, 5.9765625, 8.44921875],
      commands: 'MLQLQLQQLQQLQQLQQLQQLQLZMLQQLQQLQQLQQZ',
      points: [
        0.685546875,
        0.50390625,
        1.60546875,
        1.763671875,
        2.197265625,
        1.248046875,
        3.10546875,
        1.248046875,
        3.10546875,
        1.248046875,
        4.470703125,
        1.248046875,
        4.705078125,
        3.322265625,
        4.705078125,
        3.322265625,
        4.353515625,
        3.08203125,
        3.9873046875,
        2.9208984375,
        3.62109375,
        2.759765625,
        3.10546875,
        2.759765625,
        3.10546875,
        2.759765625,
        1.857421875,
        2.759765625,
        1.1748046875,
        3.462890625,
        0.4921875,
        4.166015625,
        0.4921875,
        5.484375,
        0.4921875,
        5.484375,
        0.4921875,
        6.75,
        1.2744140625,
        7.5146484375,
        2.056640625,
        8.279296875,
        3.345703125,
        8.279296875,
        3.345703125,
        8.279296875,
        4.93359375,
        8.279296875,
        5.701171875,
        7.2890625,
        6.46875,
        6.298828125,
        6.46875,
        4.546875,
        6.46875,
        4.546875,
        6.46875,
        2.28515625,
        5.6103515625,
        1.0576171875,
        4.751953125,
        -0.169921875,
        3.10546875,
        -0.169921875,
        3.10546875,
        -0.169921875,
        1.4765625,
        -0.169921875,
        0.685546875,
        0.50390625,
        0.685546875,
        0.50390625,
        3.421875,
        4.166015625,
        3.421875,
        4.166015625,
        3.87890625,
        4.166015625,
        4.224609375,
        4.3154296875,
        4.5703125,
        4.46484375,
        4.751953125,
        4.60546875,
        4.751953125,
        4.60546875,
        4.751953125,
        5.841796875,
        4.4267578125,
        6.3515625,
        4.1015625,
        6.861328125,
        3.369140625,
        6.861328125,
        3.369140625,
        6.861328125,
        2.794921875,
        6.861328125,
        2.466796875,
        6.5068359375,
        2.138671875,
        6.15234375,
        2.138671875,
        5.51953125,
        2.138671875,
        5.51953125,
        2.138671875,
        4.904296875,
        2.4814453125,
        4.53515625,
        2.82421875,
        4.166015625,
        3.421875,
        4.166015625
      ],
      bearing: [0.4921875, 0.5859375]
    },
    A: {
      bounds: [0.158203125, 0, 7.5234375, 8.109375],
      commands: 'MLLLLLLLLZMLLLZ',
      points: [
        1.798828125,
        0,
        0.158203125,
        0,
        2.841796875,
        8.109375,
        4.9921875,
        8.109375,
        7.681640625,
        0,
        5.98828125,
        0,
        5.44921875,
        1.646484375,
        2.326171875,
        1.646484375,
        1.798828125,
        0,
        3.890625,
        6.4453125,
        2.794921875,
        3.09375,
        4.98046875,
        3.09375,
        3.890625,
        6.4453125
      ],
      bearing: [0.158203125, 0.15234375]
    },
    B: {
      bounds: [0.87890625, 0, 6.2109375, 8.109375],
      commands: 'MLQQLLLLQQLQQLQQZMLQQLLLLQQZMLQQLLLLQQQZ',
      points: [
        7.08984375,
        2.349609375,
        7.08984375,
        2.349609375,
        7.08984375,
        1.130859375,
        6.251953125,
        0.5654296875,
        5.4140625,
        0,
        3.92578125,
        0,
        3.92578125,
        0,
        0.87890625,
        0,
        0.87890625,
        8.109375,
        3.744140625,
        8.109375,
        5.302734375,
        8.109375,
        5.9765625,
        7.6552734375,
        6.650390625,
        7.201171875,
        6.650390625,
        6.216796875,
        6.650390625,
        6.216796875,
        6.650390625,
        5.4609375,
        6.2841796875,
        4.9921875,
        5.91796875,
        4.5234375,
        5.138671875,
        4.365234375,
        5.138671875,
        4.365234375,
        6.158203125,
        4.224609375,
        6.6240234375,
        3.720703125,
        7.08984375,
        3.216796875,
        7.08984375,
        2.349609375,
        4.98046875,
        5.853515625,
        4.98046875,
        5.853515625,
        4.98046875,
        6.31640625,
        4.640625,
        6.4951171875,
        4.30078125,
        6.673828125,
        3.5859375,
        6.673828125,
        3.5859375,
        6.673828125,
        2.53125,
        6.673828125,
        2.53125,
        4.93359375,
        3.5390625,
        4.93359375,
        4.271484375,
        4.93359375,
        4.6259765625,
        5.138671875,
        4.98046875,
        5.34375,
        4.98046875,
        5.853515625,
        5.40234375,
        2.49609375,
        5.40234375,
        2.49609375,
        5.40234375,
        3.041015625,
        5.033203125,
        3.2666015625,
        4.6640625,
        3.4921875,
        3.650390625,
        3.4921875,
        3.650390625,
        3.4921875,
        2.53125,
        3.4921875,
        2.53125,
        1.46484375,
        3.369140625,
        1.46484375,
        4.3359375,
        1.46484375,
        4.7021484375,
        1.55859375,
        5.068359375,
        1.65234375,
        5.2353515625,
        1.875,
        5.40234375,
        2.09765625,
        5.40234375,
        2.49609375
      ],
      bearing: [0.87890625, 0.515625]
    },
    C: {
      bounds: [0.5625, -0.169921875, 6.9140625, 8.44921875],
      commands: 'MLQQLQLQQLQQLLQQQLQQLQQLQQLZ',
      points: [
        6.169921875,
        2.302734375,
        7.4765625,
        1.341796875,
        6.955078125,
        0.5625,
        6.1962890625,
        0.1962890625,
        5.4375,
        -0.169921875,
        4.330078125,
        -0.169921875,
        4.330078125,
        -0.169921875,
        0.5625,
        -0.169921875,
        0.5625,
        4.0546875,
        0.5625,
        4.0546875,
        0.5625,
        6.216796875,
        1.517578125,
        7.248046875,
        2.47265625,
        8.279296875,
        4.271484375,
        8.279296875,
        4.271484375,
        8.279296875,
        5.4609375,
        8.279296875,
        6.2109375,
        7.8779296875,
        6.9609375,
        7.4765625,
        7.353515625,
        6.826171875,
        7.353515625,
        6.826171875,
        6.0703125,
        5.830078125,
        5.7890625,
        6.251953125,
        5.5546875,
        6.439453125,
        5.3203125,
        6.626953125,
        5.021484375,
        6.720703125,
        4.72265625,
        6.814453125,
        4.306640625,
        6.814453125,
        4.306640625,
        6.814453125,
        3.310546875,
        6.814453125,
        2.7890625,
        6.1787109375,
        2.267578125,
        5.54296875,
        2.267578125,
        4.0546875,
        2.267578125,
        4.0546875,
        2.267578125,
        2.666015625,
        2.7568359375,
        1.98046875,
        3.24609375,
        1.294921875,
        4.318359375,
        1.294921875,
        4.318359375,
        1.294921875,
        5.0390625,
        1.294921875,
        5.4404296875,
        1.5703125,
        5.841796875,
        1.845703125,
        6.169921875,
        2.302734375,
        6.169921875,
        2.302734375
      ],
      bearing: [0.5625, 0.333984375]
    },
    D: {
      bounds: [0.802734375, 0, 6.38671875, 8.109375],
      commands: 'MLQQQLLLLQQQZMLQQQLLLLQQQZ',
      points: [
        7.189453125,
        4.0546875,
        7.189453125,
        4.0546875,
        7.189453125,
        2.58984375,
        6.78515625,
        1.69921875,
        6.380859375,
        0.80859375,
        5.56640625,
        0.404296875,
        4.751953125,
        0,
        3.275390625,
        0,
        3.275390625,
        0,
        0.802734375,
        0,
        0.802734375,
        8.109375,
        3.251953125,
        8.109375,
        4.6875,
        8.109375,
        5.5341796875,
        7.693359375,
        6.380859375,
        7.27734375,
        6.78515625,
        6.3955078125,
        7.189453125,
        5.513671875,
        7.189453125,
        4.0546875,
        5.484375,
        4.06640625,
        5.484375,
        4.06640625,
        5.484375,
        5.126953125,
        5.2763671875,
        5.6396484375,
        5.068359375,
        6.15234375,
        4.5703125,
        6.375,
        4.072265625,
        6.59765625,
        3.09375,
        6.59765625,
        3.09375,
        6.59765625,
        2.4609375,
        6.59765625,
        2.4609375,
        1.51171875,
        3.09375,
        1.51171875,
        4.072265625,
        1.51171875,
        4.5673828125,
        1.7373046875,
        5.0625,
        1.962890625,
        5.2734375,
        2.490234375,
        5.484375,
        3.017578125,
        5.484375,
        4.06640625
      ],
      bearing: [0.802734375, 0.50390625]
    },
    E: {
      bounds: [0.87890625, 0, 5.267578125, 8.109375],
      commands: 'MLLLLLLLLLLLLZ',
      points: [
        6.146484375,
        0,
        0.87890625,
        0,
        0.87890625,
        8.109375,
        6.146484375,
        8.109375,
        6.146484375,
        6.650390625,
        2.53125,
        6.650390625,
        2.53125,
        4.921875,
        5.578125,
        4.921875,
        5.578125,
        3.45703125,
        2.53125,
        3.45703125,
        2.53125,
        1.51171875,
        6.146484375,
        1.51171875,
        6.146484375,
        0
      ],
      bearing: [0.87890625, 0.5859375]
    },
    F: {
      bounds: [0.87890625, 0, 5.21484375, 8.109375],
      commands: 'MLLLLLLLLLLZ',
      points: [
        6.09375,
        6.59765625,
        2.53125,
        6.59765625,
        2.53125,
        4.845703125,
        5.51953125,
        4.845703125,
        5.51953125,
        3.38671875,
        2.53125,
        3.38671875,
        2.53125,
        0,
        0.87890625,
        0,
        0.87890625,
        8.109375,
        6.09375,
        8.109375,
        6.09375,
        6.59765625
      ],
      bearing: [0.87890625, 0.375]
    },
    G: {
      bounds: [0.5625, -0.169921875, 6.94921875, 8.44921875],
      commands: 'MLQQLQQLQQLQLLLLLLQQLQQLQLQQLZ',
      points: [
        7.51171875,
        6.826171875,
        6.240234375,
        5.830078125,
        5.9296875,
        6.333984375,
        5.484375,
        6.57421875,
        5.0390625,
        6.814453125,
        4.365234375,
        6.814453125,
        4.365234375,
        6.814453125,
        3.2578125,
        6.814453125,
        2.7626953125,
        6.1025390625,
        2.267578125,
        5.390625,
        2.267578125,
        3.984375,
        2.267578125,
        3.984375,
        2.267578125,
        2.58984375,
        2.7568359375,
        1.9423828125,
        3.24609375,
        1.294921875,
        4.330078125,
        1.294921875,
        4.330078125,
        1.294921875,
        5.150390625,
        1.294921875,
        5.841796875,
        1.634765625,
        5.841796875,
        1.634765625,
        5.841796875,
        2.89453125,
        4.259765625,
        2.89453125,
        4.259765625,
        4.353515625,
        7.5,
        4.353515625,
        7.5,
        0.767578125,
        6.9375,
        0.345703125,
        6.1025390625,
        0.087890625,
        5.267578125,
        -0.169921875,
        4.3828125,
        -0.169921875,
        4.3828125,
        -0.169921875,
        2.484375,
        -0.169921875,
        1.5234375,
        0.8203125,
        0.5625,
        1.810546875,
        0.5625,
        3.984375,
        0.5625,
        3.984375,
        0.5625,
        8.279296875,
        4.341796875,
        8.279296875,
        4.341796875,
        8.279296875,
        5.443359375,
        8.279296875,
        6.263671875,
        7.91015625,
        7.083984375,
        7.541015625,
        7.51171875,
        6.826171875,
        7.51171875,
        6.826171875
      ],
      bearing: [0.5625, 0.779296875]
    },
    H: {
      bounds: [0.87890625, 0, 6.50390625, 8.109375],
      commands: 'MLLLLLLLLLLLLZ',
      points: [
        7.3828125,
        0,
        5.724609375,
        0,
        5.724609375,
        3.4453125,
        2.53125,
        3.4453125,
        2.53125,
        0,
        0.87890625,
        0,
        0.87890625,
        8.109375,
        2.53125,
        8.109375,
        2.53125,
        4.95703125,
        5.724609375,
        4.95703125,
        5.724609375,
        8.109375,
        7.3828125,
        8.109375,
        7.3828125,
        0
      ],
      bearing: [0.87890625, 0.873046875]
    },
    I: {
      bounds: [0.59765625, 0, 3.9140625, 8.109375],
      commands: 'MLLLLLLLLLLLLZ',
      points: [
        4.51171875,
        1.271484375,
        4.51171875,
        0,
        0.59765625,
        0,
        0.59765625,
        1.271484375,
        1.728515625,
        1.271484375,
        1.728515625,
        6.837890625,
        0.59765625,
        6.837890625,
        0.59765625,
        8.109375,
        4.51171875,
        8.109375,
        4.51171875,
        6.837890625,
        3.38671875,
        6.837890625,
        3.38671875,
        1.271484375,
        4.51171875,
        1.271484375
      ],
      bearing: [0.59765625, 0.59765625]
    },
    J: {
      bounds: [0.1171875, -0.181640625, 4.39453125, 8.291015625],
      commands: 'MLQQLQQLLQQLQQQLLLZ',
      points: [
        4.51171875,
        8.109375,
        4.51171875,
        2.208984375,
        4.51171875,
        0.92578125,
        3.8642578125,
        0.3720703125,
        3.216796875,
        -0.181640625,
        1.833984375,
        -0.181640625,
        1.833984375,
        -0.181640625,
        1.53515625,
        -0.181640625,
        1.001953125,
        -0.09375,
        0.46875,
        -0.005859375,
        0.1171875,
        0.134765625,
        0.1171875,
        0.134765625,
        0.62109375,
        1.60546875,
        0.80859375,
        1.505859375,
        1.2216796875,
        1.39453125,
        1.634765625,
        1.283203125,
        1.869140625,
        1.283203125,
        1.869140625,
        1.283203125,
        2.302734375,
        1.283203125,
        2.49609375,
        1.400390625,
        2.689453125,
        1.517578125,
        2.771484375,
        1.810546875,
        2.853515625,
        2.103515625,
        2.853515625,
        2.654296875,
        2.853515625,
        2.654296875,
        2.853515625,
        8.109375,
        4.51171875,
        8.109375
      ],
      bearing: [0.1171875, 0.90234375]
    },
    K: {
      bounds: [0.87890625, 0, 6.451171875, 8.109375],
      commands: 'MLLLLLLLLLLLLZ',
      points: [
        7.330078125,
        0,
        5.267578125,
        0,
        3.0234375,
        3.38671875,
        2.53125,
        2.818359375,
        2.53125,
        0,
        0.87890625,
        0,
        0.87890625,
        8.109375,
        2.53125,
        8.109375,
        2.53125,
        4.9453125,
        5.185546875,
        8.109375,
        7.11328125,
        8.109375,
        4.08984375,
        4.6171875,
        7.330078125,
        0
      ],
      bearing: [0.87890625, 0.169921875]
    },
    L: {
      bounds: [0.87890625, 0, 5.0625, 8.109375],
      commands: 'MLLLLLLZ',
      points: [
        5.94140625,
        0,
        0.87890625,
        0,
        0.87890625,
        8.109375,
        2.53125,
        8.109375,
        2.53125,
        1.51171875,
        5.94140625,
        1.51171875,
        5.94140625,
        0
      ],
      bearing: [0.87890625, 0.140625]
    },
    M: {
      bounds: [0.87890625, 0, 8.015625, 8.109375],
      commands: 'MLLLLLLLLLLLLLZ',
      points: [
        8.89453125,
        0,
        7.294921875,
        0,
        7.294921875,
        5.44921875,
        5.349609375,
        2.0625,
        4.39453125,
        2.0625,
        2.47265625,
        5.44921875,
        2.47265625,
        0,
        0.87890625,
        0,
        0.87890625,
        8.109375,
        2.783203125,
        8.109375,
        4.8984375,
        4.259765625,
        7.03125,
        8.109375,
        8.89453125,
        8.109375,
        8.89453125,
        0
      ],
      bearing: [0.87890625, 0.873046875]
    },
    N: {
      bounds: [0.87890625, 0, 6.515625, 8.109375],
      commands: 'MLLLLLLLLLLZ',
      points: [
        7.39453125,
        0,
        5.44921875,
        0,
        2.49609375,
        5.794921875,
        2.49609375,
        0,
        0.87890625,
        0,
        0.87890625,
        8.109375,
        3.0234375,
        8.109375,
        5.771484375,
        2.642578125,
        5.771484375,
        8.109375,
        7.39453125,
        8.109375,
        7.39453125,
        0
      ],
      bearing: [0.87890625, 0.873046875]
    },
    O: {
      bounds: [0.50390625, -0.169921875, 6.984375, 8.44921875],
      commands: 'MLQQLQQLQQLQQZMLQQLQQLQQLQQZ',
      points: [
        7.48828125,
        4.0546875,
        7.48828125,
        4.0546875,
        7.48828125,
        1.939453125,
        6.5947265625,
        0.884765625,
        5.701171875,
        -0.169921875,
        3.99609375,
        -0.169921875,
        3.99609375,
        -0.169921875,
        2.197265625,
        -0.169921875,
        1.3505859375,
        0.9404296875,
        0.50390625,
        2.05078125,
        0.50390625,
        4.0546875,
        0.50390625,
        4.0546875,
        0.50390625,
        6.0703125,
        1.3505859375,
        7.1748046875,
        2.197265625,
        8.279296875,
        3.99609375,
        8.279296875,
        3.99609375,
        8.279296875,
        5.806640625,
        8.279296875,
        6.6474609375,
        7.1748046875,
        7.48828125,
        6.0703125,
        7.48828125,
        4.0546875,
        5.783203125,
        4.0546875,
        5.783203125,
        4.0546875,
        5.783203125,
        5.49609375,
        5.3759765625,
        6.1552734375,
        4.96875,
        6.814453125,
        3.99609375,
        6.814453125,
        3.99609375,
        6.814453125,
        3.0234375,
        6.814453125,
        2.6162109375,
        6.1552734375,
        2.208984375,
        5.49609375,
        2.208984375,
        4.0546875,
        2.208984375,
        4.0546875,
        2.208984375,
        2.61328125,
        2.6220703125,
        1.9541015625,
        3.03515625,
        1.294921875,
        3.99609375,
        1.294921875,
        3.99609375,
        1.294921875,
        4.96875,
        1.294921875,
        5.3759765625,
        1.9541015625,
        5.783203125,
        2.61328125,
        5.783203125,
        4.0546875
      ],
      bearing: [0.50390625, 0.50390625]
    },
    P: {
      bounds: [0.87890625, 0, 5.923828125, 8.109375],
      commands: 'MLQQLLLLLLQQZMLQQLLLLQQQZ',
      points: [
        6.802734375,
        5.390625,
        6.802734375,
        5.390625,
        6.802734375,
        3.92578125,
        6.1142578125,
        3.216796875,
        5.42578125,
        2.5078125,
        3.87890625,
        2.5078125,
        3.87890625,
        2.5078125,
        2.53125,
        2.5078125,
        2.53125,
        0,
        0.87890625,
        0,
        0.87890625,
        8.109375,
        3.92578125,
        8.109375,
        5.302734375,
        8.109375,
        6.052734375,
        7.4677734375,
        6.802734375,
        6.826171875,
        6.802734375,
        5.390625,
        5.09765625,
        5.37890625,
        5.09765625,
        5.37890625,
        5.09765625,
        6.064453125,
        4.7197265625,
        6.369140625,
        4.341796875,
        6.673828125,
        3.357421875,
        6.673828125,
        3.357421875,
        6.673828125,
        2.53125,
        6.673828125,
        2.53125,
        3.94921875,
        3.205078125,
        3.94921875,
        4.11328125,
        3.94921875,
        4.4619140625,
        4.0751953125,
        4.810546875,
        4.201171875,
        4.9541015625,
        4.5,
        5.09765625,
        4.798828125,
        5.09765625,
        5.37890625
      ],
      bearing: [0.87890625, 0.45703125]
    },
    Q: {
      bounds: [0.50390625, -2.0390625, 7.0078125, 10.318359375],
      commands: 'MLQQLQLQQLQQLQQLQLQQLQQLZMLQQLQQLQQLQQZ',
      points: [
        7.130859375,
        -0.50390625,
        7.51171875,
        -1.833984375,
        7.3125,
        -1.8984375,
        6.8203125,
        -1.96875,
        6.328125,
        -2.0390625,
        5.8828125,
        -2.0390625,
        5.8828125,
        -2.0390625,
        3.544921875,
        -2.0390625,
        3.181640625,
        -0.10546875,
        3.181640625,
        -0.10546875,
        1.93359375,
        0.08203125,
        1.21875,
        1.095703125,
        0.50390625,
        2.109375,
        0.50390625,
        4.0546875,
        0.50390625,
        4.0546875,
        0.50390625,
        6.08203125,
        1.3505859375,
        7.1806640625,
        2.197265625,
        8.279296875,
        4.0078125,
        8.279296875,
        4.0078125,
        8.279296875,
        5.806640625,
        8.279296875,
        6.6474609375,
        7.1748046875,
        7.48828125,
        6.0703125,
        7.48828125,
        4.0546875,
        7.48828125,
        4.0546875,
        7.48828125,
        0.474609375,
        4.98046875,
        -0.08203125,
        4.98046875,
        -0.08203125,
        5.0390625,
        -0.3984375,
        5.232421875,
        -0.5419921875,
        5.42578125,
        -0.685546875,
        5.9296875,
        -0.685546875,
        5.9296875,
        -0.685546875,
        6.193359375,
        -0.685546875,
        6.5419921875,
        -0.6298828125,
        6.890625,
        -0.57421875,
        7.130859375,
        -0.50390625,
        7.130859375,
        -0.50390625,
        5.783203125,
        4.0546875,
        5.783203125,
        4.0546875,
        5.783203125,
        5.49609375,
        5.3759765625,
        6.1552734375,
        4.96875,
        6.814453125,
        4.0078125,
        6.814453125,
        4.0078125,
        6.814453125,
        3.01171875,
        6.814453125,
        2.6103515625,
        6.1552734375,
        2.208984375,
        5.49609375,
        2.208984375,
        4.0546875,
        2.208984375,
        4.0546875,
        2.208984375,
        2.61328125,
        2.6162109375,
        1.9541015625,
        3.0234375,
        1.294921875,
        4.0078125,
        1.294921875,
        4.0078125,
        1.294921875,
        4.9921875,
        1.294921875,
        5.3876953125,
        1.962890625,
        5.783203125,
        2.630859375,
        5.783203125,
        4.0546875
      ],
      bearing: [0.50390625, 0.48046875]
    },
    R: {
      bounds: [0.87890625, 0, 6.451171875, 8.109375],
      commands: 'MLLLLLLLQQLQQLLZMLQQLLLLQQQZ',
      points: [
        7.330078125,
        0,
        5.4375,
        0,
        3.369140625,
        3.0703125,
        2.53125,
        3.0703125,
        2.53125,
        0,
        0.87890625,
        0,
        0.87890625,
        8.109375,
        3.826171875,
        8.109375,
        5.390625,
        8.109375,
        6.1142578125,
        7.546875,
        6.837890625,
        6.984375,
        6.837890625,
        5.701171875,
        6.837890625,
        5.701171875,
        6.837890625,
        4.6640625,
        6.4013671875,
        4.048828125,
        5.96484375,
        3.43359375,
        5.162109375,
        3.263671875,
        5.162109375,
        3.263671875,
        7.330078125,
        0,
        5.162109375,
        5.630859375,
        5.162109375,
        5.630859375,
        5.162109375,
        6.251953125,
        4.8486328125,
        6.462890625,
        4.53515625,
        6.673828125,
        3.814453125,
        6.673828125,
        3.814453125,
        6.673828125,
        2.53125,
        6.673828125,
        2.53125,
        4.51171875,
        3.744140625,
        4.51171875,
        4.30078125,
        4.51171875,
        4.599609375,
        4.6171875,
        4.8984375,
        4.72265625,
        5.0302734375,
        4.9453125,
        5.162109375,
        5.16796875,
        5.162109375,
        5.630859375
      ],
      bearing: [0.87890625, 0.193359375]
    },
    S: {
      bounds: [0.38671875, -0.169921875, 6.322265625, 8.44921875],
      commands: 'MLQQLQQLLQQQLQQLQQQLQQQQLQQLQLLQQLQQLQQLQQQQZ',
      points: [
        6.708984375,
        2.349609375,
        6.708984375,
        2.349609375,
        6.708984375,
        1.130859375,
        5.9091796875,
        0.48046875,
        5.109375,
        -0.169921875,
        3.55078125,
        -0.169921875,
        3.55078125,
        -0.169921875,
        2.47265625,
        -0.169921875,
        1.6787109375,
        0.1875,
        0.884765625,
        0.544921875,
        0.38671875,
        1.341796875,
        0.38671875,
        1.341796875,
        1.658203125,
        2.314453125,
        1.939453125,
        1.916015625,
        2.19140625,
        1.716796875,
        2.443359375,
        1.517578125,
        2.7890625,
        1.40625,
        3.134765625,
        1.294921875,
        3.5859375,
        1.294921875,
        3.5859375,
        1.294921875,
        4.259765625,
        1.294921875,
        4.6376953125,
        1.5263671875,
        5.015625,
        1.7578125,
        5.015625,
        2.232421875,
        5.015625,
        2.232421875,
        5.015625,
        2.501953125,
        4.8837890625,
        2.68359375,
        4.751953125,
        2.865234375,
        4.48828125,
        2.9970703125,
        4.224609375,
        3.12890625,
        3.57421875,
        3.298828125,
        3.57421875,
        3.298828125,
        2.94140625,
        3.46875,
        2.3818359375,
        3.6416015625,
        1.822265625,
        3.814453125,
        1.4150390625,
        4.08984375,
        1.0078125,
        4.365234375,
        0.7734375,
        4.78125,
        0.5390625,
        5.197265625,
        0.5390625,
        5.830078125,
        0.5390625,
        5.830078125,
        0.5390625,
        6.984375,
        1.318359375,
        7.6318359375,
        2.09765625,
        8.279296875,
        3.55078125,
        8.279296875,
        3.55078125,
        8.279296875,
        5.654296875,
        8.279296875,
        6.52734375,
        6.837890625,
        6.52734375,
        6.837890625,
        5.267578125,
        5.853515625,
        4.93359375,
        6.369140625,
        4.517578125,
        6.591796875,
        4.1015625,
        6.814453125,
        3.52734375,
        6.814453125,
        3.52734375,
        6.814453125,
        2.953125,
        6.814453125,
        2.5927734375,
        6.6064453125,
        2.232421875,
        6.3984375,
        2.232421875,
        5.953125,
        2.232421875,
        5.953125,
        2.232421875,
        5.560546875,
        2.607421875,
        5.3525390625,
        2.982421875,
        5.14453125,
        3.9140625,
        4.93359375,
        3.9140625,
        4.93359375,
        4.4296875,
        4.798828125,
        4.93359375,
        4.6435546875,
        5.4375,
        4.48828125,
        5.8330078125,
        4.212890625,
        6.228515625,
        3.9375,
        6.46875,
        3.4921875,
        6.708984375,
        3.046875,
        6.708984375,
        2.349609375
      ],
      bearing: [0.38671875, 0.4921875]
    },
    T: {
      bounds: [0.205078125, 0, 6.64453125, 8.109375],
      commands: 'MLLLLLLLLZ',
      points: [
        6.849609375,
        6.59765625,
        4.353515625,
        6.59765625,
        4.353515625,
        0,
        2.701171875,
        0,
        2.701171875,
        6.59765625,
        0.205078125,
        6.59765625,
        0.205078125,
        8.109375,
        6.849609375,
        8.109375,
        6.849609375,
        6.59765625
      ],
      bearing: [0.205078125, 0.205078125]
    },
    U: {
      bounds: [0.87890625, -0.181640625, 6.66796875, 8.291015625],
      commands: 'MLQQLQQLLLLQQQLQQLLLZ',
      points: [
        7.546875,
        8.109375,
        7.546875,
        3.38671875,
        7.546875,
        1.482421875,
        6.7734375,
        0.650390625,
        6,
        -0.181640625,
        4.212890625,
        -0.181640625,
        4.212890625,
        -0.181640625,
        2.443359375,
        -0.181640625,
        1.6611328125,
        0.6416015625,
        0.87890625,
        1.46484375,
        0.87890625,
        3.38671875,
        0.87890625,
        3.38671875,
        0.87890625,
        8.109375,
        2.53125,
        8.109375,
        2.53125,
        3.50390625,
        2.53125,
        2.677734375,
        2.689453125,
        2.203125,
        2.84765625,
        1.728515625,
        3.193359375,
        1.505859375,
        3.5390625,
        1.283203125,
        4.201171875,
        1.283203125,
        4.201171875,
        1.283203125,
        5.14453125,
        1.283203125,
        5.51953125,
        1.7841796875,
        5.89453125,
        2.28515625,
        5.89453125,
        3.48046875,
        5.89453125,
        3.48046875,
        5.89453125,
        8.109375,
        7.546875,
        8.109375
      ],
      bearing: [0.87890625, 0.87890625]
    },
    V: {
      bounds: [0.158203125, 0, 6.97265625, 8.109375],
      commands: 'MLLLLLLLZ',
      points: [
        7.130859375,
        8.109375,
        4.60546875,
        0,
        2.654296875,
        0,
        0.158203125,
        8.109375,
        1.833984375,
        8.109375,
        3.662109375,
        2.0625,
        5.484375,
        8.109375,
        7.130859375,
        8.109375
      ],
      bearing: [0.158203125, 0.15234375]
    },
    W: {
      bounds: [0.251953125, 0, 10.236328125, 8.109375],
      commands: 'MLLLLLLLLLLLLLZ',
      points: [
        10.48828125,
        8.109375,
        8.390625,
        0,
        6.697265625,
        0,
        5.337890625,
        5.361328125,
        3.97265625,
        0,
        2.302734375,
        0,
        0.251953125,
        8.109375,
        1.8984375,
        8.109375,
        3.193359375,
        2.818359375,
        4.53515625,
        8.109375,
        6.169921875,
        8.109375,
        7.5234375,
        2.783203125,
        8.853515625,
        8.109375,
        10.48828125,
        8.109375
      ],
      bearing: [0.251953125, 0.251953125]
    },
    X: {
      bounds: [0.169921875, 0, 7.1953125, 8.109375],
      commands: 'MLLLLLLLLLLLLZ',
      points: [
        1.9921875,
        0,
        0.169921875,
        0,
        2.8828125,
        4.06640625,
        0.240234375,
        8.109375,
        2.12109375,
        8.109375,
        3.802734375,
        5.37890625,
        5.54296875,
        8.109375,
        7.365234375,
        8.109375,
        4.705078125,
        4.1015625,
        7.353515625,
        0,
        5.49609375,
        0,
        3.755859375,
        2.794921875,
        1.9921875,
        0
      ],
      bearing: [0.169921875, 0.169921875]
    },
    Y: {
      bounds: [0.10546875, 0, 6.744140625, 8.109375],
      commands: 'MLLLLLLLLLZ',
      points: [
        6.849609375,
        8.109375,
        4.306640625,
        3.09375,
        4.306640625,
        0,
        2.642578125,
        0,
        2.642578125,
        3.05859375,
        0.10546875,
        8.109375,
        1.91015625,
        8.109375,
        3.4921875,
        4.716796875,
        5.109375,
        8.109375,
        6.849609375,
        8.109375
      ],
      bearing: [0.10546875, 0.111328125]
    },
    Z: {
      bounds: [0.421875, 0, 5.794921875, 8.109375],
      commands: 'MLLLLLLLLLLZ',
      points: [
        6.216796875,
        0,
        0.421875,
        0,
        0.421875,
        1.39453125,
        4.142578125,
        6.59765625,
        0.59765625,
        6.59765625,
        0.59765625,
        8.109375,
        6.1171875,
        8.109375,
        6.1171875,
        6.779296875,
        2.361328125,
        1.51171875,
        6.216796875,
        1.51171875,
        6.216796875,
        0
      ],
      bearing: [0.421875, 0.50390625]
    },
    a: {
      bounds: [0.4921875, -0.181640625, 5.373046875, 6.50390625],
      commands: 'MLLQLQQLQQQLLLQQLQQLLQQLQQLLZMLLQQLQQLQQLZ',
      points: [
        5.865234375,
        0,
        4.4765625,
        0,
        4.4765625,
        0.638671875,
        3.580078125,
        -0.181640625,
        2.5546875,
        -0.181640625,
        2.5546875,
        -0.181640625,
        1.53515625,
        -0.181640625,
        1.013671875,
        0.3544921875,
        0.4921875,
        0.890625,
        0.4921875,
        1.728515625,
        0.4921875,
        1.728515625,
        0.4921875,
        2.384765625,
        0.7587890625,
        2.8125,
        1.025390625,
        3.240234375,
        1.5498046875,
        3.4833984375,
        2.07421875,
        3.7265625,
        3.05859375,
        3.826171875,
        3.05859375,
        3.826171875,
        4.353515625,
        3.94921875,
        4.353515625,
        4.224609375,
        4.353515625,
        4.740234375,
        4.04296875,
        4.9306640625,
        3.732421875,
        5.12109375,
        3.134765625,
        5.12109375,
        3.134765625,
        5.12109375,
        2.642578125,
        5.12109375,
        2.2880859375,
        4.95703125,
        1.93359375,
        4.79296875,
        1.763671875,
        4.48828125,
        1.763671875,
        4.48828125,
        0.5859375,
        5.244140625,
        0.896484375,
        5.765625,
        1.55859375,
        6.0439453125,
        2.220703125,
        6.322265625,
        3.158203125,
        6.322265625,
        3.158203125,
        6.322265625,
        4.59375,
        6.322265625,
        5.2294921875,
        5.8212890625,
        5.865234375,
        5.3203125,
        5.865234375,
        4.177734375,
        5.865234375,
        4.177734375,
        5.865234375,
        0,
        4.353515625,
        1.681640625,
        4.353515625,
        2.853515625,
        3.5859375,
        2.783203125,
        2.771484375,
        2.712890625,
        2.4111328125,
        2.47265625,
        2.05078125,
        2.232421875,
        2.05078125,
        1.751953125,
        2.05078125,
        1.751953125,
        2.05078125,
        1.330078125,
        2.28515625,
        1.1748046875,
        2.51953125,
        1.01953125,
        2.90625,
        1.01953125,
        2.90625,
        1.01953125,
        3.181640625,
        1.01953125,
        3.5771484375,
        1.1923828125,
        3.97265625,
        1.365234375,
        4.353515625,
        1.681640625,
        4.353515625,
        1.681640625
      ],
      bearing: [0.4921875, 0.80859375]
    },
    b: {
      bounds: [0.849609375, -0.181640625, 5.736328125, 8.90625],
      commands: 'MLQQLQQLLLLLLQLQQZMLQQLQQLLQQLQQZ',
      points: [
        6.5859375,
        3.1171875,
        6.5859375,
        3.1171875,
        6.5859375,
        1.587890625,
        5.9443359375,
        0.703125,
        5.302734375,
        -0.181640625,
        4.11328125,
        -0.181640625,
        4.11328125,
        -0.181640625,
        3.64453125,
        -0.181640625,
        3.0908203125,
        0.0322265625,
        2.537109375,
        0.24609375,
        2.208984375,
        0.57421875,
        2.208984375,
        0.57421875,
        2.00390625,
        0,
        0.849609375,
        0,
        0.849609375,
        8.724609375,
        2.361328125,
        8.724609375,
        2.361328125,
        5.654296875,
        3.193359375,
        6.322265625,
        4.201171875,
        6.322265625,
        4.201171875,
        6.322265625,
        5.4375,
        6.322265625,
        6.01171875,
        5.4697265625,
        6.5859375,
        4.6171875,
        6.5859375,
        3.1171875,
        5.02734375,
        3.09375,
        5.02734375,
        3.09375,
        5.02734375,
        4.04296875,
        4.728515625,
        4.517578125,
        4.4296875,
        4.9921875,
        3.767578125,
        4.9921875,
        3.767578125,
        4.9921875,
        3.3984375,
        4.9921875,
        3.0205078125,
        4.8193359375,
        2.642578125,
        4.646484375,
        2.361328125,
        4.39453125,
        2.361328125,
        4.39453125,
        2.361328125,
        1.705078125,
        2.61328125,
        1.48828125,
        2.9736328125,
        1.3212890625,
        3.333984375,
        1.154296875,
        3.673828125,
        1.154296875,
        3.673828125,
        1.154296875,
        4.32421875,
        1.154296875,
        4.67578125,
        1.6494140625,
        5.02734375,
        2.14453125,
        5.02734375,
        3.09375
      ],
      bearing: [0.849609375, 0.544921875]
    },
    c: {
      bounds: [0.5390625, -0.181640625, 5.390625, 6.50390625],
      commands: 'MLQQLQQLQQLQQLLQQLQQLQQLQQLZ',
      points: [
        4.787109375,
        1.681640625,
        5.9296875,
        0.87890625,
        5.578125,
        0.357421875,
        5.00390625,
        0.087890625,
        4.4296875,
        -0.181640625,
        3.55078125,
        -0.181640625,
        3.55078125,
        -0.181640625,
        2.0625,
        -0.181640625,
        1.30078125,
        0.6298828125,
        0.5390625,
        1.44140625,
        0.5390625,
        3.03515625,
        0.5390625,
        3.03515625,
        0.5390625,
        4.587890625,
        1.27734375,
        5.455078125,
        2.015625,
        6.322265625,
        3.4921875,
        6.322265625,
        3.4921875,
        6.322265625,
        4.283203125,
        6.322265625,
        4.9013671875,
        6.064453125,
        5.51953125,
        5.806640625,
        5.841796875,
        5.267578125,
        5.841796875,
        5.267578125,
        4.716796875,
        4.46484375,
        4.51171875,
        4.740234375,
        4.236328125,
        4.8720703125,
        3.9609375,
        5.00390625,
        3.52734375,
        5.00390625,
        3.52734375,
        5.00390625,
        2.75390625,
        5.00390625,
        2.42578125,
        4.529296875,
        2.09765625,
        4.0546875,
        2.09765625,
        3.05859375,
        2.09765625,
        3.05859375,
        2.09765625,
        2.0625,
        2.4345703125,
        1.6025390625,
        2.771484375,
        1.142578125,
        3.5859375,
        1.142578125,
        3.5859375,
        1.142578125,
        3.9375,
        1.142578125,
        4.23046875,
        1.2421875,
        4.5234375,
        1.341796875,
        4.787109375,
        1.681640625,
        4.787109375,
        1.681640625
      ],
      bearing: [0.5390625, 0.275390625]
    },
    d: {
      bounds: [0.5390625, -0.181640625, 5.736328125, 8.90625],
      commands: 'MLLQQLQQLQQLQQLLLLZMLQQLQQLQQLQQLZ',
      points: [
        6.275390625,
        0,
        4.88671875,
        0,
        4.88671875,
        0.59765625,
        4.46484375,
        0.240234375,
        3.99609375,
        0.029296875,
        3.52734375,
        -0.181640625,
        2.9296875,
        -0.181640625,
        2.9296875,
        -0.181640625,
        1.76953125,
        -0.181640625,
        1.154296875,
        0.65625,
        0.5390625,
        1.494140625,
        0.5390625,
        3.0234375,
        0.5390625,
        3.0234375,
        0.5390625,
        4.587890625,
        1.2158203125,
        5.455078125,
        1.892578125,
        6.322265625,
        3.1171875,
        6.322265625,
        3.1171875,
        6.322265625,
        3.55078125,
        6.322265625,
        4.0078125,
        6.1435546875,
        4.46484375,
        5.96484375,
        4.763671875,
        5.689453125,
        4.763671875,
        5.689453125,
        4.763671875,
        8.724609375,
        6.275390625,
        8.724609375,
        6.275390625,
        0,
        4.763671875,
        1.751953125,
        4.763671875,
        4.44140625,
        4.5234375,
        4.658203125,
        4.1689453125,
        4.8251953125,
        3.814453125,
        4.9921875,
        3.4453125,
        4.9921875,
        3.4453125,
        4.9921875,
        2.8359375,
        4.9921875,
        2.466796875,
        4.4677734375,
        2.09765625,
        3.943359375,
        2.09765625,
        3.046875,
        2.09765625,
        3.046875,
        2.09765625,
        2.162109375,
        2.3994140625,
        1.658203125,
        2.701171875,
        1.154296875,
        3.333984375,
        1.154296875,
        3.333984375,
        1.154296875,
        3.708984375,
        1.154296875,
        4.0986328125,
        1.3271484375,
        4.48828125,
        1.5,
        4.763671875,
        1.751953125,
        4.763671875,
        1.751953125
      ],
      bearing: [0.5390625, 0.85546875]
    },
    e: {
      bounds: [0.5390625, -0.181640625, 5.642578125, 6.50390625],
      commands: 'MLQQLQQLLQQLQQLQLQQLLZMLQLQQQLZ',
      points: [
        6.181640625,
        2.677734375,
        2.09765625,
        2.677734375,
        2.138671875,
        1.857421875,
        2.49609375,
        1.5,
        2.853515625,
        1.142578125,
        3.62109375,
        1.142578125,
        3.62109375,
        1.142578125,
        4.06640625,
        1.142578125,
        4.4033203125,
        1.25390625,
        4.740234375,
        1.365234375,
        4.9921875,
        1.681640625,
        4.9921875,
        1.681640625,
        6.1171875,
        0.87890625,
        5.748046875,
        0.345703125,
        5.1591796875,
        0.08203125,
        4.5703125,
        -0.181640625,
        3.55078125,
        -0.181640625,
        3.55078125,
        -0.181640625,
        2.033203125,
        -0.181640625,
        1.2861328125,
        0.615234375,
        0.5390625,
        1.412109375,
        0.5390625,
        3.0234375,
        0.5390625,
        3.0234375,
        0.5390625,
        6.322265625,
        3.4921875,
        6.322265625,
        3.4921875,
        6.322265625,
        4.8046875,
        6.322265625,
        5.4931640625,
        5.5810546875,
        6.181640625,
        4.83984375,
        6.181640625,
        3.421875,
        6.181640625,
        3.421875,
        6.181640625,
        2.677734375,
        2.138671875,
        3.720703125,
        4.681640625,
        3.720703125,
        4.681640625,
        5.12109375,
        3.45703125,
        5.12109375,
        3.45703125,
        5.12109375,
        3.052734375,
        5.12109375,
        2.794921875,
        4.9833984375,
        2.537109375,
        4.845703125,
        2.3818359375,
        4.5732421875,
        2.2265625,
        4.30078125,
        2.138671875,
        3.720703125,
        2.138671875,
        3.720703125
      ],
      bearing: [0.5390625, 0.515625]
    },
    f: {
      bounds: [0.205078125, 0, 4.177734375, 8.90625],
      commands: 'MLQLQQLLLLLLLLLLLLQQLQLZ',
      points: [
        4.3828125,
        8.759765625,
        4.08984375,
        7.44140625,
        3.66796875,
        7.58203125,
        3.275390625,
        7.58203125,
        3.275390625,
        7.58203125,
        2.830078125,
        7.58203125,
        2.6630859375,
        7.3974609375,
        2.49609375,
        7.212890625,
        2.49609375,
        6.744140625,
        2.49609375,
        6.744140625,
        2.49609375,
        6.146484375,
        3.744140625,
        6.146484375,
        3.744140625,
        4.9453125,
        2.49609375,
        4.9453125,
        2.49609375,
        0,
        0.984375,
        0,
        0.984375,
        4.9453125,
        0.205078125,
        4.9453125,
        0.205078125,
        6.146484375,
        0.984375,
        6.146484375,
        0.984375,
        6.744140625,
        0.984375,
        7.88671875,
        1.5498046875,
        8.396484375,
        2.115234375,
        8.90625,
        3.251953125,
        8.90625,
        3.251953125,
        8.90625,
        3.78515625,
        8.90625,
        4.3828125,
        8.759765625,
        4.3828125,
        8.759765625
      ],
      bearing: [0.205078125, -0.521484375]
    },
    g: {
      bounds: [0.5390625, -2.314453125, 5.736328125, 8.63671875],
      commands: 'MLQQLQLLQLQQLLQLQQLQQQLQQLLLZMLQLQQLQQLQLZ',
      points: [
        6.275390625,
        6.146484375,
        6.275390625,
        0.1171875,
        6.275390625,
        -1.11328125,
        5.51953125,
        -1.7138671875,
        4.763671875,
        -2.314453125,
        3.09375,
        -2.314453125,
        3.09375,
        -2.314453125,
        1.716796875,
        -2.314453125,
        0.685546875,
        -1.787109375,
        0.685546875,
        -1.787109375,
        1.130859375,
        -0.55078125,
        2.0859375,
        -0.99609375,
        3.09375,
        -0.99609375,
        3.09375,
        -0.99609375,
        4.03125,
        -0.99609375,
        4.3974609375,
        -0.7265625,
        4.763671875,
        -0.45703125,
        4.763671875,
        0.181640625,
        4.763671875,
        0.181640625,
        4.763671875,
        0.685546875,
        4.013671875,
        0,
        2.953125,
        0,
        2.953125,
        0,
        1.828125,
        0,
        1.18359375,
        0.80859375,
        0.5390625,
        1.6171875,
        0.5390625,
        3.134765625,
        0.5390625,
        3.134765625,
        0.5390625,
        4.083984375,
        0.8408203125,
        4.8076171875,
        1.142578125,
        5.53125,
        1.7255859375,
        5.9267578125,
        2.30859375,
        6.322265625,
        3.134765625,
        6.322265625,
        3.134765625,
        6.322265625,
        3.62109375,
        6.322265625,
        4.107421875,
        6.1083984375,
        4.59375,
        5.89453125,
        4.921875,
        5.56640625,
        4.921875,
        5.56640625,
        5.12109375,
        6.146484375,
        6.275390625,
        6.146484375,
        4.763671875,
        1.93359375,
        4.763671875,
        4.44140625,
        4.142578125,
        4.9921875,
        3.41015625,
        4.9921875,
        3.41015625,
        4.9921875,
        2.859375,
        4.9921875,
        2.478515625,
        4.48828125,
        2.09765625,
        3.984375,
        2.09765625,
        3.158203125,
        2.09765625,
        3.158203125,
        2.09765625,
        2.220703125,
        2.4345703125,
        1.775390625,
        2.771484375,
        1.330078125,
        3.310546875,
        1.330078125,
        3.310546875,
        1.330078125,
        4.060546875,
        1.330078125,
        4.763671875,
        1.93359375,
        4.763671875,
        1.93359375
      ],
      bearing: [0.5390625, 0.85546875]
    },
    h: {
      bounds: [0.849609375, 0, 5.47265625, 8.724609375],
      commands: 'MLLQQLQLLLLLLQQLQQLLZ',
      points: [
        6.322265625,
        0,
        4.810546875,
        0,
        4.810546875,
        3.38671875,
        4.810546875,
        4.359375,
        4.62890625,
        4.67578125,
        4.447265625,
        4.9921875,
        3.984375,
        4.9921875,
        3.984375,
        4.9921875,
        3.310546875,
        4.9921875,
        2.361328125,
        4.1015625,
        2.361328125,
        4.1015625,
        2.361328125,
        0,
        0.849609375,
        0,
        0.849609375,
        8.724609375,
        2.361328125,
        8.724609375,
        2.361328125,
        5.349609375,
        2.841796875,
        5.830078125,
        3.38671875,
        6.076171875,
        3.931640625,
        6.322265625,
        4.453125,
        6.322265625,
        4.453125,
        6.322265625,
        5.484375,
        6.322265625,
        5.9033203125,
        5.7421875,
        6.322265625,
        5.162109375,
        6.322265625,
        4.1015625,
        6.322265625,
        4.1015625,
        6.322265625,
        0
      ],
      bearing: [0.849609375, 0.80859375]
    },
    i: {
      bounds: [0.767578125, 0, 1.681640625, 8.58984375],
      commands: 'MLQQLQQLQQLQQZMLLLLZ',
      points: [
        2.44921875,
        7.822265625,
        2.44921875,
        7.822265625,
        2.44921875,
        7.39453125,
        2.23828125,
        7.224609375,
        2.02734375,
        7.0546875,
        1.59375,
        7.0546875,
        1.59375,
        7.0546875,
        1.11328125,
        7.0546875,
        0.9404296875,
        7.25390625,
        0.767578125,
        7.453125,
        0.767578125,
        7.822265625,
        0.767578125,
        7.822265625,
        0.767578125,
        8.232421875,
        0.955078125,
        8.4111328125,
        1.142578125,
        8.58984375,
        1.59375,
        8.58984375,
        1.59375,
        8.58984375,
        2.05078125,
        8.58984375,
        2.25,
        8.4169921875,
        2.44921875,
        8.244140625,
        2.44921875,
        7.822265625,
        2.361328125,
        0,
        0.849609375,
        0,
        0.849609375,
        6.146484375,
        2.361328125,
        6.146484375,
        2.361328125,
        0
      ],
      bearing: [0.767578125, 0.767578125]
    },
    j: {
      bounds: [-0.94921875, -2.314453125, 3.48046875, 10.904296875],
      commands: 'MLQQLQQLQQLQQZMLQQLQQLLQLQQLLLZ',
      points: [
        2.53125,
        7.822265625,
        2.53125,
        7.822265625,
        2.53125,
        7.39453125,
        2.3203125,
        7.224609375,
        2.109375,
        7.0546875,
        1.681640625,
        7.0546875,
        1.681640625,
        7.0546875,
        1.201171875,
        7.0546875,
        1.025390625,
        7.25390625,
        0.849609375,
        7.453125,
        0.849609375,
        7.822265625,
        0.849609375,
        7.822265625,
        0.849609375,
        8.232421875,
        1.037109375,
        8.4111328125,
        1.224609375,
        8.58984375,
        1.681640625,
        8.58984375,
        1.681640625,
        8.58984375,
        2.138671875,
        8.58984375,
        2.3349609375,
        8.4169921875,
        2.53125,
        8.244140625,
        2.53125,
        7.822265625,
        2.44921875,
        6.146484375,
        2.44921875,
        -0.263671875,
        2.44921875,
        -1.365234375,
        1.95703125,
        -1.83984375,
        1.46484375,
        -2.314453125,
        0.345703125,
        -2.314453125,
        0.345703125,
        -2.314453125,
        0.09375,
        -2.314453125,
        -0.31640625,
        -2.2587890625,
        -0.7265625,
        -2.203125,
        -0.94921875,
        -2.138671875,
        -0.94921875,
        -2.138671875,
        -0.62109375,
        -0.826171875,
        -0.193359375,
        -0.99609375,
        0.263671875,
        -0.99609375,
        0.263671875,
        -0.99609375,
        0.720703125,
        -0.99609375,
        0.8291015625,
        -0.71484375,
        0.9375,
        -0.43359375,
        0.9375,
        0.216796875,
        0.9375,
        0.216796875,
        0.9375,
        6.146484375,
        2.44921875,
        6.146484375
      ],
      bearing: [-0.94921875, 0.767578125]
    },
    k: {
      bounds: [0.849609375, 0, 5.4609375, 8.724609375],
      commands: 'MLLLLLLLLLLLLZ',
      points: [
        6.310546875,
        0,
        4.59375,
        0,
        2.953125,
        2.54296875,
        2.361328125,
        1.91015625,
        2.361328125,
        0,
        0.849609375,
        0,
        0.849609375,
        8.724609375,
        2.361328125,
        8.724609375,
        2.361328125,
        3.732421875,
        4.4296875,
        6.146484375,
        6.181640625,
        6.146484375,
        3.861328125,
        3.5625,
        6.310546875,
        0
      ],
      bearing: [0.849609375, 0.134765625]
    },
    l: {
      bounds: [0.849609375, 0, 1.51171875, 8.724609375],
      commands: 'MLLLLZ',
      points: [
        2.361328125,
        0,
        0.849609375,
        0,
        0.849609375,
        8.724609375,
        2.361328125,
        8.724609375,
        2.361328125,
        0
      ],
      bearing: [0.849609375, 0.85546875]
    },
    m: {
      bounds: [0.849609375, 0, 8.8359375, 6.322265625],
      commands: 'MLLQQQLQQLLLLQQQLQQLLLLLLQQLQQLQQLQQLLZ',
      points: [
        9.685546875,
        0,
        8.173828125,
        0,
        8.173828125,
        3.62109375,
        8.173828125,
        4.166015625,
        8.109375,
        4.470703125,
        8.044921875,
        4.775390625,
        7.9130859375,
        4.8837890625,
        7.78125,
        4.9921875,
        7.4765625,
        4.9921875,
        7.4765625,
        4.9921875,
        7.130859375,
        4.9921875,
        6.744140625,
        4.734375,
        6.357421875,
        4.4765625,
        6.0234375,
        4.1015625,
        6.0234375,
        4.1015625,
        6.0234375,
        0,
        4.51171875,
        0,
        4.51171875,
        3.62109375,
        4.51171875,
        4.21875,
        4.458984375,
        4.4853515625,
        4.40625,
        4.751953125,
        4.271484375,
        4.8720703125,
        4.13671875,
        4.9921875,
        3.814453125,
        4.9921875,
        3.814453125,
        4.9921875,
        3.533203125,
        4.9921875,
        3.1640625,
        4.7783203125,
        2.794921875,
        4.564453125,
        2.361328125,
        4.1015625,
        2.361328125,
        4.1015625,
        2.361328125,
        0,
        0.849609375,
        0,
        0.849609375,
        6.146484375,
        2.361328125,
        6.146484375,
        2.361328125,
        5.349609375,
        2.783203125,
        5.806640625,
        3.24609375,
        6.064453125,
        3.708984375,
        6.322265625,
        4.271484375,
        6.322265625,
        4.271484375,
        6.322265625,
        5.0390625,
        6.322265625,
        5.4052734375,
        6.05859375,
        5.771484375,
        5.794921875,
        5.90625,
        5.279296875,
        5.90625,
        5.279296875,
        6.43359375,
        5.806640625,
        6.8935546875,
        6.064453125,
        7.353515625,
        6.322265625,
        7.96875,
        6.322265625,
        7.96875,
        6.322265625,
        8.865234375,
        6.322265625,
        9.275390625,
        5.8125,
        9.685546875,
        5.302734375,
        9.685546875,
        4.1015625,
        9.685546875,
        4.1015625,
        9.685546875,
        0
      ],
      bearing: [0.849609375, 0.802734375]
    },
    n: {
      bounds: [0.849609375, 0, 5.47265625, 6.322265625],
      commands: 'MLLQQLQLLLLLLQQLQQLLZ',
      points: [
        6.322265625,
        0,
        4.810546875,
        0,
        4.810546875,
        3.38671875,
        4.810546875,
        4.34765625,
        4.6376953125,
        4.669921875,
        4.46484375,
        4.9921875,
        3.984375,
        4.9921875,
        3.984375,
        4.9921875,
        3.310546875,
        4.9921875,
        2.361328125,
        4.1015625,
        2.361328125,
        4.1015625,
        2.361328125,
        0,
        0.849609375,
        0,
        0.849609375,
        6.146484375,
        2.361328125,
        6.146484375,
        2.361328125,
        5.349609375,
        2.841796875,
        5.830078125,
        3.38671875,
        6.076171875,
        3.931640625,
        6.322265625,
        4.453125,
        6.322265625,
        4.453125,
        6.322265625,
        5.396484375,
        6.322265625,
        5.859375,
        5.806640625,
        6.322265625,
        5.291015625,
        6.322265625,
        4.1015625,
        6.322265625,
        4.1015625,
        6.322265625,
        0
      ],
      bearing: [0.849609375, 0.80859375]
    },
    o: {
      bounds: [0.5390625, -0.181640625, 5.89453125, 6.50390625],
      commands: 'MLQQLQLQQLQQZMLQQLQQLQQLQQZ',
      points: [
        6.43359375,
        3.05859375,
        6.43359375,
        3.05859375,
        6.43359375,
        1.5234375,
        5.724609375,
        0.6708984375,
        5.015625,
        -0.181640625,
        3.4921875,
        -0.181640625,
        3.4921875,
        -0.181640625,
        0.5390625,
        -0.181640625,
        0.5390625,
        3.05859375,
        0.5390625,
        3.05859375,
        0.5390625,
        4.6171875,
        1.248046875,
        5.4697265625,
        1.95703125,
        6.322265625,
        3.4921875,
        6.322265625,
        3.4921875,
        6.322265625,
        5.015625,
        6.322265625,
        5.724609375,
        5.4697265625,
        6.43359375,
        4.6171875,
        6.43359375,
        3.05859375,
        4.869140625,
        3.05859375,
        4.869140625,
        3.05859375,
        4.869140625,
        4.072265625,
        4.552734375,
        4.5380859375,
        4.236328125,
        5.00390625,
        3.4921875,
        5.00390625,
        3.4921875,
        5.00390625,
        2.75390625,
        5.00390625,
        2.42578125,
        4.5263671875,
        2.09765625,
        4.048828125,
        2.09765625,
        3.05859375,
        2.09765625,
        3.05859375,
        2.09765625,
        2.07421875,
        2.4228515625,
        1.6083984375,
        2.748046875,
        1.142578125,
        3.4921875,
        1.142578125,
        3.4921875,
        1.142578125,
        4.224609375,
        1.142578125,
        4.546875,
        1.6025390625,
        4.869140625,
        2.0625,
        4.869140625,
        3.05859375
      ],
      bearing: [0.5390625, 0.5390625]
    },
    p: {
      bounds: [0.849609375, -2.314453125, 5.736328125, 8.63671875],
      commands: 'MLQQQLQLLLLLLQQLQQZMLQQLQQLLQQLQQZ',
      points: [
        6.5859375,
        3.1171875,
        6.5859375,
        3.1171875,
        6.5859375,
        2.126953125,
        6.287109375,
        1.37109375,
        5.98828125,
        0.615234375,
        5.431640625,
        0.216796875,
        4.875,
        -0.181640625,
        4.1015625,
        -0.181640625,
        4.1015625,
        -0.181640625,
        3.08203125,
        -0.181640625,
        2.361328125,
        0.45703125,
        2.361328125,
        0.45703125,
        2.361328125,
        -2.314453125,
        0.849609375,
        -2.314453125,
        0.849609375,
        6.146484375,
        2.244140625,
        6.146484375,
        2.244140625,
        5.54296875,
        2.666015625,
        5.90625,
        3.1318359375,
        6.1142578125,
        3.59765625,
        6.322265625,
        4.201171875,
        6.322265625,
        4.201171875,
        6.322265625,
        5.3671875,
        6.322265625,
        5.9765625,
        5.501953125,
        6.5859375,
        4.681640625,
        6.5859375,
        3.1171875,
        5.02734375,
        3.09375,
        5.02734375,
        3.09375,
        5.02734375,
        3.990234375,
        4.716796875,
        4.4912109375,
        4.40625,
        4.9921875,
        3.791015625,
        4.9921875,
        3.791015625,
        4.9921875,
        3.421875,
        4.9921875,
        3.0322265625,
        4.8193359375,
        2.642578125,
        4.646484375,
        2.361328125,
        4.39453125,
        2.361328125,
        4.39453125,
        2.361328125,
        1.705078125,
        2.6015625,
        1.48828125,
        2.9560546875,
        1.3212890625,
        3.310546875,
        1.154296875,
        3.685546875,
        1.154296875,
        3.685546875,
        1.154296875,
        4.306640625,
        1.154296875,
        4.6669921875,
        1.6845703125,
        5.02734375,
        2.21484375,
        5.02734375,
        3.09375
      ],
      bearing: [0.849609375, 0.544921875]
    },
    q: {
      bounds: [0.5390625, -2.314453125, 5.736328125, 8.63671875],
      commands: 'MLLQLQQLQQLQQLLLLZMLQQLQQLQQLQQLZ',
      points: [
        6.275390625,
        -2.314453125,
        4.763671875,
        -2.314453125,
        4.763671875,
        0.4921875,
        3.9375,
        -0.181640625,
        2.9296875,
        -0.181640625,
        2.9296875,
        -0.181640625,
        1.76953125,
        -0.181640625,
        1.154296875,
        0.638671875,
        0.5390625,
        1.458984375,
        0.5390625,
        3.0234375,
        0.5390625,
        3.0234375,
        0.5390625,
        4.58203125,
        1.20703125,
        5.4521484375,
        1.875,
        6.322265625,
        3.10546875,
        6.322265625,
        3.10546875,
        6.322265625,
        3.662109375,
        6.322265625,
        4.1484375,
        6.087890625,
        4.634765625,
        5.853515625,
        4.921875,
        5.56640625,
        4.921875,
        5.56640625,
        5.12109375,
        6.146484375,
        6.275390625,
        6.146484375,
        6.275390625,
        -2.314453125,
        4.763671875,
        1.751953125,
        4.763671875,
        4.44140625,
        4.48828125,
        4.693359375,
        4.1337890625,
        4.8427734375,
        3.779296875,
        4.9921875,
        3.4453125,
        4.9921875,
        3.4453125,
        4.9921875,
        2.8359375,
        4.9921875,
        2.466796875,
        4.4677734375,
        2.09765625,
        3.943359375,
        2.09765625,
        3.046875,
        2.09765625,
        3.046875,
        2.09765625,
        2.150390625,
        2.390625,
        1.65234375,
        2.68359375,
        1.154296875,
        3.333984375,
        1.154296875,
        3.333984375,
        1.154296875,
        3.708984375,
        1.154296875,
        4.0986328125,
        1.3271484375,
        4.48828125,
        1.5,
        4.763671875,
        1.751953125,
        4.763671875,
        1.751953125
      ],
      bearing: [0.5390625, 0.85546875]
    },
    r: {
      bounds: [0.849609375, 0, 4.0078125, 6.240234375],
      commands: 'MLQLQQLLLLLLQQLQLZ',
      points: [
        4.857421875,
        6.1171875,
        4.55859375,
        4.669921875,
        4.32421875,
        4.787109375,
        3.9375,
        4.787109375,
        3.9375,
        4.787109375,
        3.515625,
        4.787109375,
        3.1376953125,
        4.5849609375,
        2.759765625,
        4.3828125,
        2.361328125,
        3.99609375,
        2.361328125,
        3.99609375,
        2.361328125,
        0,
        0.849609375,
        0,
        0.849609375,
        6.146484375,
        2.361328125,
        6.146484375,
        2.361328125,
        5.267578125,
        2.748046875,
        5.689453125,
        3.193359375,
        5.96484375,
        3.638671875,
        6.240234375,
        4.189453125,
        6.240234375,
        4.189453125,
        6.240234375,
        4.658203125,
        6.240234375,
        4.857421875,
        6.1171875,
        4.857421875,
        6.1171875
      ],
      bearing: [0.849609375, 0.064453125]
    },
    s: {
      bounds: [0.4453125, -0.181640625, 5.09765625, 6.50390625],
      commands: 'MLQQQLQLLQQLQLQQLQQLQQLQQLLQLQQLQQLQQQZ',
      points: [
        5.54296875,
        1.751953125,
        5.54296875,
        1.751953125,
        5.54296875,
        1.142578125,
        5.2353515625,
        0.708984375,
        4.927734375,
        0.275390625,
        4.3623046875,
        0.046875,
        3.796875,
        -0.181640625,
        3.0703125,
        -0.181640625,
        3.0703125,
        -0.181640625,
        1.142578125,
        -0.181640625,
        0.4453125,
        0.890625,
        0.4453125,
        0.890625,
        1.5703125,
        1.681640625,
        1.845703125,
        1.306640625,
        2.2060546875,
        1.1806640625,
        2.56640625,
        1.0546875,
        2.9765625,
        1.0546875,
        2.9765625,
        1.0546875,
        4.0546875,
        1.0546875,
        4.0546875,
        1.681640625,
        4.0546875,
        1.681640625,
        4.0546875,
        1.95703125,
        3.75,
        2.1064453125,
        3.4453125,
        2.255859375,
        2.794921875,
        2.4140625,
        2.794921875,
        2.4140625,
        1.5703125,
        2.68359375,
        1.072265625,
        3.17578125,
        0.57421875,
        3.66796875,
        0.57421875,
        4.453125,
        0.57421875,
        4.453125,
        0.57421875,
        5.267578125,
        1.1982421875,
        5.794921875,
        1.822265625,
        6.322265625,
        3.03515625,
        6.322265625,
        3.03515625,
        6.322265625,
        3.861328125,
        6.322265625,
        4.4912109375,
        6.05859375,
        5.12109375,
        5.794921875,
        5.4609375,
        5.267578125,
        5.4609375,
        5.267578125,
        4.330078125,
        4.46484375,
        3.92578125,
        5.0859375,
        3.01171875,
        5.0859375,
        3.01171875,
        5.0859375,
        2.54296875,
        5.0859375,
        2.302734375,
        4.9248046875,
        2.0625,
        4.763671875,
        2.0625,
        4.51171875,
        2.0625,
        4.51171875,
        2.0625,
        4.271484375,
        2.279296875,
        4.1279296875,
        2.49609375,
        3.984375,
        3.134765625,
        3.826171875,
        3.134765625,
        3.826171875,
        4.18359375,
        3.568359375,
        4.6318359375,
        3.3134765625,
        5.080078125,
        3.05859375,
        5.3115234375,
        2.6806640625,
        5.54296875,
        2.302734375,
        5.54296875,
        1.751953125
      ],
      bearing: [0.4453125, 0.46875]
    },
    t: {
      bounds: [0.181640625, -0.181640625, 4.06640625, 8.0390625],
      commands: 'MLQLQQLLLLLLLLLLLLQQLQLZ',
      points: [
        3.984375,
        1.236328125,
        4.248046875,
        0,
        3.638671875,
        -0.181640625,
        2.96484375,
        -0.181640625,
        2.96484375,
        -0.181640625,
        1.8984375,
        -0.181640625,
        1.4296875,
        0.298828125,
        0.9609375,
        0.779296875,
        0.9609375,
        1.857421875,
        0.9609375,
        1.857421875,
        0.9609375,
        4.9453125,
        0.181640625,
        4.9453125,
        0.181640625,
        6.146484375,
        0.9609375,
        6.146484375,
        0.9609375,
        7.857421875,
        2.47265625,
        7.857421875,
        2.47265625,
        6.146484375,
        3.90234375,
        6.146484375,
        3.90234375,
        4.9453125,
        2.47265625,
        4.9453125,
        2.47265625,
        2.05078125,
        2.47265625,
        1.4765625,
        2.6513671875,
        1.271484375,
        2.830078125,
        1.06640625,
        3.158203125,
        1.06640625,
        3.158203125,
        1.06640625,
        3.57421875,
        1.06640625,
        3.984375,
        1.236328125,
        3.984375,
        1.236328125
      ],
      bearing: [0.181640625, 0.08203125]
    },
    u: {
      bounds: [0.802734375, -0.181640625, 5.47265625, 6.328125],
      commands: 'MLLQQLQQLLLLQQQLQLLLLZ',
      points: [
        6.275390625,
        0,
        4.763671875,
        0,
        4.763671875,
        0.791015625,
        4.365234375,
        0.36328125,
        3.7880859375,
        0.0908203125,
        3.2109375,
        -0.181640625,
        2.677734375,
        -0.181640625,
        2.677734375,
        -0.181640625,
        1.634765625,
        -0.181640625,
        1.21875,
        0.3955078125,
        0.802734375,
        0.97265625,
        0.802734375,
        2.0390625,
        0.802734375,
        2.0390625,
        0.802734375,
        6.146484375,
        2.314453125,
        6.146484375,
        2.314453125,
        2.759765625,
        2.314453125,
        2.109375,
        2.390625,
        1.763671875,
        2.466796875,
        1.41796875,
        2.6396484375,
        1.2861328125,
        2.8125,
        1.154296875,
        3.146484375,
        1.154296875,
        3.146484375,
        1.154296875,
        3.8203125,
        1.154296875,
        4.763671875,
        2.0390625,
        4.763671875,
        2.0390625,
        4.763671875,
        6.146484375,
        6.275390625,
        6.146484375,
        6.275390625,
        0
      ],
      bearing: [0.802734375, 0.85546875]
    },
    v: {
      bounds: [0.158203125, 0, 5.783203125, 6.146484375],
      commands: 'MLLLLLLLZ',
      points: [
        5.94140625,
        6.146484375,
        3.732421875,
        0,
        2.337890625,
        0,
        0.158203125,
        6.146484375,
        1.705078125,
        6.146484375,
        3.0703125,
        2.09765625,
        4.4296875,
        6.146484375,
        5.94140625,
        6.146484375
      ],
      bearing: [0.158203125, 0.15234375]
    },
    w: {
      bounds: [0.158203125, 0, 8.853515625, 6.146484375],
      commands: 'MLLLLLLLLLLLLLZ',
      points: [
        9.01171875,
        6.146484375,
        7.365234375,
        0,
        5.98828125,
        0,
        4.60546875,
        3.9140625,
        3.216796875,
        0,
        1.833984375,
        0,
        0.158203125,
        6.146484375,
        1.728515625,
        6.146484375,
        2.677734375,
        2.185546875,
        4.0546875,
        6.146484375,
        5.197265625,
        6.146484375,
        6.5859375,
        2.220703125,
        7.5,
        6.146484375,
        9.01171875,
        6.146484375
      ],
      bearing: [0.158203125, 0.158203125]
    },
    x: {
      bounds: [0.181640625, 0, 5.96484375, 6.146484375],
      commands: 'MLLLLLLLLLLLLZ',
      points: [
        6.146484375,
        0,
        4.353515625,
        0,
        3.134765625,
        1.95703125,
        1.857421875,
        0,
        0.181640625,
        0,
        2.302734375,
        3.03515625,
        0.216796875,
        6.146484375,
        1.98046875,
        6.146484375,
        3.205078125,
        4.201171875,
        4.46484375,
        6.146484375,
        6.134765625,
        6.146484375,
        4.01953125,
        3.1171875,
        6.146484375,
        0
      ],
      bearing: [0.181640625, 0.17578125]
    },
    y: {
      bounds: [-0.1171875, -2.314453125, 6.322265625, 8.4609375],
      commands: 'MLQLQQLLLLLLLLQQQLQLZ',
      points: [
        -0.1171875,
        -2.138671875,
        0.205078125,
        -0.826171875,
        0.697265625,
        -0.99609375,
        1.08984375,
        -0.99609375,
        1.08984375,
        -0.99609375,
        1.4296875,
        -0.99609375,
        1.6875,
        -0.791015625,
        1.9453125,
        -0.5859375,
        2.220703125,
        0.05859375,
        2.220703125,
        0.05859375,
        2.37890625,
        0.421875,
        0.158203125,
        6.146484375,
        1.728515625,
        6.146484375,
        3.181640625,
        2.220703125,
        4.669921875,
        6.146484375,
        6.205078125,
        6.146484375,
        3.5625,
        -0.421875,
        3.240234375,
        -1.212890625,
        2.935546875,
        -1.59375,
        2.630859375,
        -1.974609375,
        2.2236328125,
        -2.14453125,
        1.81640625,
        -2.314453125,
        1.201171875,
        -2.314453125,
        1.201171875,
        -2.314453125,
        0.533203125,
        -2.314453125,
        -0.1171875,
        -2.138671875,
        -0.1171875,
        -2.138671875
      ],
      bearing: [-0.1171875, 0.15234375]
    },
    z: {
      bounds: [0.333984375, 0, 4.775390625, 6.146484375],
      commands: 'MLLLLLLLLLLZ',
      points: [
        5.109375,
        0,
        0.333984375,
        0,
        0.333984375,
        1.1015625,
        3.205078125,
        4.9453125,
        0.41015625,
        4.9453125,
        0.41015625,
        6.146484375,
        5.015625,
        6.146484375,
        5.015625,
        5.05078125,
        2.138671875,
        1.201171875,
        5.109375,
        1.201171875,
        5.109375,
        0
      ],
      bearing: [0.333984375, 0.33984375]
    },
    '+': {
      bounds: [0.779296875, 0.01171875, 6.802734375, 6.802734375],
      commands: 'MLLLLLLLLLLLLZ',
      points: [
        7.58203125,
        2.806640625,
        4.787109375,
        2.806640625,
        4.787109375,
        0.01171875,
        3.5859375,
        0.01171875,
        3.5859375,
        2.806640625,
        0.779296875,
        2.806640625,
        0.779296875,
        4.0078125,
        3.5859375,
        4.0078125,
        3.5859375,
        6.814453125,
        4.787109375,
        6.814453125,
        4.787109375,
        4.0078125,
        7.58203125,
        4.0078125,
        7.58203125,
        2.806640625
      ],
      bearing: [0.779296875, 0.779296875]
    },
    '-': {
      bounds: [0.48046875, 2.337890625, 3.650390625, 1.48828125],
      commands: 'MLLLLZ',
      points: [
        4.130859375,
        2.337890625,
        0.48046875,
        2.337890625,
        0.48046875,
        3.826171875,
        4.130859375,
        3.826171875,
        4.130859375,
        2.337890625
      ],
      bearing: [0.48046875, 0.474609375]
    },
    ':': {
      bounds: [0.755859375, -0.08203125, 1.91015625, 6.228515625],
      commands: 'MLQQLQQLQQLQQZMLQQLQQLQQLQQZ',
      points: [
        2.666015625,
        5.208984375,
        2.666015625,
        5.208984375,
        2.666015625,
        4.705078125,
        2.4375,
        4.48828125,
        2.208984375,
        4.271484375,
        1.705078125,
        4.271484375,
        1.705078125,
        4.271484375,
        1.154296875,
        4.271484375,
        0.955078125,
        4.51171875,
        0.755859375,
        4.751953125,
        0.755859375,
        5.208984375,
        0.755859375,
        5.208984375,
        0.755859375,
        5.689453125,
        0.966796875,
        5.91796875,
        1.177734375,
        6.146484375,
        1.705078125,
        6.146484375,
        1.705078125,
        6.146484375,
        2.244140625,
        6.146484375,
        2.455078125,
        5.923828125,
        2.666015625,
        5.701171875,
        2.666015625,
        5.208984375,
        2.666015625,
        0.849609375,
        2.666015625,
        0.849609375,
        2.666015625,
        0.345703125,
        2.4375,
        0.1318359375,
        2.208984375,
        -0.08203125,
        1.705078125,
        -0.08203125,
        1.705078125,
        -0.08203125,
        1.154296875,
        -0.08203125,
        0.955078125,
        0.158203125,
        0.755859375,
        0.3984375,
        0.755859375,
        0.849609375,
        0.755859375,
        0.849609375,
        0.755859375,
        1.330078125,
        0.966796875,
        1.55859375,
        1.177734375,
        1.787109375,
        1.705078125,
        1.787109375,
        1.705078125,
        1.787109375,
        2.244140625,
        1.787109375,
        2.455078125,
        1.564453125,
        2.666015625,
        1.341796875,
        2.666015625,
        0.849609375
      ],
      bearing: [0.755859375, 0.755859375]
    },
    '.': {
      bounds: [1.04296875, 0.802734375, 5.162109375, 5.162109375],
      commands: 'MLQQQLQQQLQQQLQQQZ',
      points: [
        3.62109375,
        5.96484375,
        3.62109375,
        5.96484375,
        4.32421875,
        5.96484375,
        4.9013671875,
        5.625,
        5.478515625,
        5.28515625,
        5.841796875,
        4.6962890625,
        6.205078125,
        4.107421875,
        6.205078125,
        3.486328125,
        6.205078125,
        3.486328125,
        6.205078125,
        2.671875,
        5.8623046875,
        2.0888671875,
        5.51953125,
        1.505859375,
        4.939453125,
        1.154296875,
        4.359375,
        0.802734375,
        3.62109375,
        0.802734375,
        3.62109375,
        0.802734375,
        2.89453125,
        0.802734375,
        2.314453125,
        1.1513671875,
        1.734375,
        1.5,
        1.388671875,
        2.0830078125,
        1.04296875,
        2.666015625,
        1.04296875,
        3.486328125,
        1.04296875,
        3.486328125,
        1.04296875,
        4.1015625,
        1.40625,
        4.6904296875,
        1.76953125,
        5.279296875,
        2.3408203125,
        5.6220703125,
        2.912109375,
        5.96484375,
        3.62109375,
        5.96484375
      ],
      bearing: [1.04296875, 1.04296875]
    },
    '/': {
      bounds: [0.90234375, 0, 4.20703125, 9.767578125],
      commands: 'MLQQLLQQLLQQLLLLQQLZ',
      points: [
        0.90234375,
        6.90234375,
        0.90234375,
        7.341796875,
        1.787109375,
        8.162109375,
        2.162109375,
        8.6484375,
        2.537109375,
        9.134765625,
        2.865234375,
        9.767578125,
        2.865234375,
        9.767578125,
        3.134765625,
        9.767578125,
        3.50390625,
        9.05859375,
        3.90234375,
        8.578125,
        4.30078125,
        8.09765625,
        5.109375,
        7.341796875,
        5.109375,
        7.341796875,
        5.109375,
        6.90234375,
        4.72265625,
        7.072265625,
        4.359375,
        7.2802734375,
        3.99609375,
        7.48828125,
        3.515625,
        7.869140625,
        3.515625,
        7.869140625,
        3.515625,
        0,
        2.49609375,
        0,
        2.49609375,
        7.869140625,
        2.0859375,
        7.564453125,
        1.7900390625,
        7.3740234375,
        1.494140625,
        7.18359375,
        0.90234375,
        6.90234375,
        0.90234375,
        6.90234375
      ],
      bearing: [0.90234375, 0.890625]
    },
    '\\': {
      bounds: [0.890625, 0, 4.20703125, 9.767578125],
      commands: 'MLQLQLLQQLLQQLLLLQQLZ',
      points: [
        5.09765625,
        2.865234375,
        5.09765625,
        2.42578125,
        4.306640625,
        1.705078125,
        3.90234375,
        1.189453125,
        3.90234375,
        1.189453125,
        3.50390625,
        0.708984375,
        3.134765625,
        0,
        3.134765625,
        0,
        2.865234375,
        0,
        2.49609375,
        0.708984375,
        2.09765625,
        1.189453125,
        1.69921875,
        1.669921875,
        0.890625,
        2.42578125,
        0.890625,
        2.42578125,
        0.890625,
        2.865234375,
        1.44140625,
        2.6015625,
        1.763671875,
        2.40234375,
        2.0859375,
        2.203125,
        2.484375,
        1.8984375,
        2.484375,
        1.8984375,
        2.484375,
        9.767578125,
        3.50390625,
        9.767578125,
        3.50390625,
        1.8984375,
        3.90234375,
        2.185546875,
        4.20703125,
        2.3876953125,
        4.51171875,
        2.58984375,
        5.09765625,
        2.865234375,
        5.09765625,
        2.865234375
      ],
      bearing: [0.890625, 0.90234375]
    }
  };
  function ve(a, b, c, d) {
    this.ea = a;
    this.aa = b;
    this.wc = c;
    this.da = d;
    this.fa = new md();
    this.ba = new bc(0, 0);
  }
  p = ve.prototype;
  p.cb = function() {
    return ae(this.ea, this.fa);
  };
  p.vb = function() {
    return this.aa;
  };
  p.ra = function() {
    return this.ba;
  };
  p.Jc = function() {
    return this.wc + this.aa.width + this.da;
  };
  p.ad = function() {
    return this.aa.height - (this.ba.y - this.aa.y);
  };
  p.Sd = function() {
    return this.ba.y - this.aa.y;
  };
  p.translate = function(a, b) {
    this.fa.translate(a, b);
    this.aa.x += a;
    this.aa.y += b;
    this.ba.x += a;
    this.ba.y += b;
  };
  function we(a) {
    this.ea = ue;
    var b = (this.ba = a / this.ea.F.bounds[3]),
      c = this.ba,
      d = new md();
    this.da = nd(d, b, 0, 0, c, 0, 0);
    this.aa = a;
  }
  function xe() {
    this.aa = 1;
    this.da = new he(ye(this), U['line-color']);
    this.fa = this.ba = new he(
      ye(this),
      U['edit-color'],
      U['edit-transparency'],
      [ye(this), 2 * ye(this)]
    );
    this.ea = new we(U['node-cap-height'] * this.aa);
  }
  var ze, Ae, Be, Ce, De;
  function Ee(a, b) {
    a.aa = b;
    b = ye(a);
    a.da.ba = b;
    a.ba.ba = b;
    a.ba.aa = [b, 2 * b];
    a.ea = new we(U['node-cap-height'] * a.aa);
  }
  function ye(a) {
    return U['line-width'] * a.aa;
  }
  function Fe(a) {
    return U['line-offset'] * a.aa;
  }
  function Ge(a) {
    return U['stereo-width'] * a.aa;
  }
  function He(a) {
    return U['node-radius'] * a.aa;
  }
  function Ie(a) {
    for (var b in a)
      if ('node-colors' === b) {
        var c = a[b] || {},
          d;
        for (d in c) U[b][d] = a[b][d];
      } else U[b] = a[b];
    Object.keys(U['node-colors']);
    a = U['node-colors'];
    for (var e in a) Je[e] = new ie(a[e]);
    ze = new ie(U['unknown-node-color']);
    Be = new ie(U['edit-color'], U['edit-transparency']);
    Ce = new ie('#ff0000', 0.75);
    De = Be;
    ze = new ie(U['unknown-node-color']);
    Ae = new ie(U['line-color']);
  }
  var U = { 'node-colors': {} },
    Je = {};
  Ie({
    border: 0.15,
    'line-width': 0.1,
    'line-offset': 0.2,
    'line-end-padding': 0.08,
    'stereo-width': 0.25,
    'node-cap-height': 0.42,
    'node-radius': 0.3,
    'methyl-visible': !1,
    'taper-hash': !0,
    'edit-color': '#00ff00',
    'edit-transparency': 0.75,
    'line-color': '#000000',
    'unknown-node-color': '#555555',
    'node-colors': {
      N: '#0000ff',
      O: '#ff0000',
      F: '#ff00ff',
      P: '#ff9900',
      S: '#ff9900',
      Cl: '#00ff00',
      Br: '#CC3333',
      I: '#940094'
    }
  });
  function Ke(a, b, c) {
    this.x = Ia(a) ? a : 0;
    this.y = Ia(b) ? b : 0;
    this.z = Ia(c) ? c : 0;
  }
  Ke.prototype.clone = function() {
    return new Ke(this.x, this.y, this.z);
  };
  Ke.prototype.toString = function() {
    return '(' + this.x + ', ' + this.y + ', ' + this.z + ')';
  };
  function Le(a) {
    O.call(this);
    this.na = a;
    this.va = [];
    this.ba = [];
    this.fa = this.wa = this.qa = !1;
    this.ea = new Ke(0, 0, 0);
  }
  F(Le, O);
  function Me(a) {
    return a.na.aa.indexOf(a);
  }
  p = Le.prototype;
  p.getParent = function() {
    return this.na;
  };
  p.Gb = function(a) {
    this.wa !== a && ((this.wa = a), Ne(this, Oe, this));
  };
  p.bd = function() {
    return this.wa;
  };
  function Pe(a, b) {
    if (a.fa !== b) {
      var c = a.Oa();
      a.fa = b;
      Ne(a, Qe, a, c);
    }
  }
  p.Aa = function(a) {
    this.qa !== a && ((this.qa = a), Ne(this, Re, this));
  };
  p.vc = function() {
    return this.qa;
  };
  p.ya = function(a) {
    this.ba.push(a);
    this.va.push(Se(a, this));
    Ne(this, Qe, this);
  };
  p.hb = function(a) {
    hb(this.ba, a);
    hb(this.va, Se(a, this));
    Ne(this, Qe, this);
  };
  p.Eb = function() {
    return this.ba;
  };
  p.move = function(a, b, c) {
    if (a !== this.ea.x || b !== this.ea.y || (c || 0) !== this.ea.z) {
      var d = this.Oa();
      this.ea.x = a;
      this.ea.y = b;
      this.ea.z = void 0 === c ? 0 : c;
      Ne(this, Te, this, d);
    }
  };
  p.ra = function() {
    return this.ea;
  };
  p.Xb = function(a) {
    if (a.Zc) {
      var b = a.Zc;
      this.move(b.x, b.y, b.z);
    }
    void 0 !== a.Df && Pe(this, a.Df);
  };
  p.Oa = function() {
    return { Zc: this.ea.clone(), Df: this.fa };
  };
  function Ne(a, b, c, d) {
    b = new K(b, c);
    b.vd = d;
    P(a, b);
  }
  var Qe = 'node-definition-changed',
    Re = 'node-selection-changed',
    Oe = 'node-hover-changed',
    Te = 'node-moved';
  function Ue(a, b, c, d) {
    O.call(this);
    this.ba = this.ea = !1;
    this.ta = a;
    this.Bb = b;
    this.da = c;
    this.aa = d || Ve;
    this.Wa(c);
  }
  F(Ue, O);
  p = Ue.prototype;
  p.Fb = function() {
    return this.aa;
  };
  function We(a, b) {
    if (a.aa !== b) {
      var c = a.Oa();
      a.aa = b;
      Xe(a, Ye, a, c);
    }
  }
  p.Ka = function() {
    return this.Bb;
  };
  p.getParent = function() {
    return this.da;
  };
  p.Gb = function(a) {
    a != this.ba && ((this.ba = a), Xe(this, Ze, this));
  };
  p.bd = function() {
    return this.ba;
  };
  p.Aa = function(a) {
    a !== this.ea && ((this.ea = a), Xe(this, $e, this));
  };
  p.vc = function() {
    return this.ea;
  };
  function Se(a, b) {
    if (a.ta === b) return a.Bb;
    if (a.Bb === b) return a.ta;
  }
  p.Oa = function() {
    return { source: this.ta, target: this.Bb, Of: this.aa };
  };
  p.Xb = function(a) {
    var b = a.source,
      c = a.target;
    if (b !== this.ta || c !== this.Bb) {
      var d = this.Oa();
      this.ta = b;
      this.Bb = c;
      Xe(this, Ye, this, d);
    }
    void 0 !== a.Of && We(this, a.Of);
  };
  function Xe(a, b, c, d) {
    b = new K(b, c);
    b.vd = d;
    P(a, b);
  }
  var Ve = 'none',
    $e = 'edge-selection-changed',
    Ze = 'edge-hover-changed',
    Ye = 'edge-definition-changed';
  function af() {
    O.call(this);
    this.ba = [];
    this.aa = [];
  }
  F(af, O);
  function bf(a) {
    for (var b = 0; b < a.aa.length; b++) a.aa[b].Aa(!1);
    for (b = 0; b < a.ba.length; b++) a.ba[b].Aa(!1);
  }
  function cf(a) {
    for (var b = [], c = 0; c < a.aa.length; c++) {
      var d = a.aa[c];
      d.vc() && b.push(d);
    }
    return b;
  }
  p = af.prototype;
  p.Va = function(a) {
    this.aa.push(a);
    P(this, new K(df, a));
  };
  p.bc = function(a) {
    hb(this.aa, a);
    P(this, new K(ef, a));
  };
  p.ya = function(a) {
    this.ba.push(a);
    P(this, new K(ff, a));
  };
  p.hb = function(a) {
    hb(this.ba, a);
    P(this, new K(gf, a));
  };
  p.Eb = function() {
    return this.ba;
  };
  function hf(a, b, c) {
    for (var d = 0; d < a.ba.length; d++) {
      var e = a.ba[d];
      if ((e.ta === b && e.Bb === c) || (e.ta === c && e.Bb === b)) return e;
    }
  }
  p.Ma = function() {
    return 0 === this.ba.length && 0 === this.aa.length;
  };
  var df = 'node-added',
    ef = 'node-removed',
    ff = 'edge-added',
    gf = 'edge-removed';
  function jf(a, b) {
    Le.call(this, b);
    this.Ab = kf;
    lf(this, a);
  }
  F(jf, Le);
  function lf(a, b) {
    if (a.pa !== b) {
      var c = a.Oa();
      a.pa = b;
      a.Ab = kf;
      a.ia = b.sd();
      a.da = 0;
      a.aa = void 0;
      for (b = 0; b < a.ba.length; b++) a.ia -= a.ba[b].Ea / 2;
      mf(a, 0, 0);
      Ne(a, Qe, a, c);
    }
  }
  p = jf.prototype;
  p.ha = function() {
    return this.pa;
  };
  p.reduce = function(a) {
    if (a !== this.da) {
      for (
        var b = this.rc(), c = this.Oa(), d = 0, e = 0;
        e < this.ba.length;
        e++
      )
        d += this.ba[e].Ea / 2;
      this.da = a;
      this.ia = this.pa.sd() - a - d - b;
      Ne(this, Qe, this, c);
    }
  };
  p.Ed = function(a) {
    if (!((this.aa && this.aa.yc === a) || (!this.aa && 0 === a))) {
      var b = this.Oa();
      0 === a ? delete this.aa : (this.aa = this.pa.Rc(a));
      Ne(this, Qe, this, b);
    }
  };
  p.Rc = function() {
    return this.aa;
  };
  p.sd = function() {
    return this.ia;
  };
  p.Uc = function() {
    return this.da;
  };
  p.rc = function() {
    for (var a = 0, b = 0; b < this.ba.length; b++) a += this.ba[b].Ea / 2;
    return this.pa.rc(this.ia + this.da + a);
  };
  p.tc = function(a) {
    var b = this.Oa();
    mf(this, 0, a);
    Ne(this, Qe, this, b);
  };
  function nf(a) {
    for (var b = 0, c = 0; c < a.ba.length; c++) b += a.ba[c].Ea / 2 - 1;
    return b;
  }
  p.ya = function(a) {
    mf(this, a.Ea, 0);
    jf.la.ya.call(this, a);
  };
  p.hb = function(a) {
    mf(this, -a.Ea, 0);
    jf.la.hb.call(this, a);
  };
  function of(a) {
    var b = a.Oa();
    switch (a.Ab) {
      case kf:
        a.Ab = pf;
        mf(a, 0, 0);
        break;
      case pf:
        a.Ab = qf;
        mf(a, 0, 0);
        break;
      case qf:
        a.Ab = rf;
        break;
      case rf:
        (a.Ab = kf), mf(a, 0, 0);
    }
    Ne(a, Qe, a, b);
  }
  p.Xb = function(a) {
    jf.la.Xb.call(this, a);
    a.element && lf(this, a.element);
    void 0 !== a.ga && this.Ed(a.ga);
    if (void 0 !== a.Vf || void 0 !== a.Uf || void 0 !== a.Wb) {
      var b = this.Oa();
      this.da = a.Vf;
      this.ia = a.Uf;
      this.Ab = a.Wb;
      Ne(this, Qe, this, b);
    }
  };
  p.Oa = function() {
    var a = jf.la.Oa.call(this);
    a.element = this.pa;
    a.Wb = this.Ab;
    a.ga = this.aa ? this.aa.yc : 0;
    a.Vf = this.da;
    a.Uf = this.ia;
    return a;
  };
  p.toString = function() {
    return [
      this.pa.Zb,
      void 0 === this.aa ? '' : '-' + this.aa.yc,
      this.ea.toString(),
      0 !== this.rc() ? '[' + this.rc() + ']' : '',
      0 < this.da ? '[H' + this.da + ']' : ''
    ].join('');
  };
  function mf(a, b, c) {
    c = a.ia + a.da - b / 2 - c;
    for (var d = 0; d < a.ba.length; d++) b += a.ba[d].Ea;
    d = sf[a.Ab];
    b = a.pa.zb ? Math.min(8 - b - c, c) - (void 0 === d ? 0 : d) : 0;
    a.da = b;
    a.ia = c - b;
  }
  var kf = 0,
    qf = 1,
    pf = 2,
    rf = 3,
    sf = [0, 2, 1, 2];
  function tf(a, b, c, d, e) {
    Ue.call(this, a, b, d, e);
    if (0 > c) throw uf;
    if (c % 2) throw vf;
    this.Ea = c;
  }
  F(tf, Ue);
  tf.prototype.tc = function(a) {
    if (0 !== a) {
      var b = this.Oa();
      wf(this, -a);
      2 < this.Ea && (this.aa = Ve);
      Xe(this, Ye, this, b);
    }
  };
  function xf(a) {
    var b = a.Oa();
    a.aa === Ve ? (6 === a.Ea ? wf(a, -4) : wf(a, 2)) : (a.aa = Ve);
    Xe(a, Ye, a, b);
  }
  tf.prototype.Oa = function() {
    var a = tf.la.Oa.call(this);
    a.pf = this.Ea;
    return a;
  };
  tf.prototype.Xb = function(a) {
    tf.la.Xb.call(this, a);
    if (a.pf !== this.Ea) {
      var b = this.Oa();
      this.Ea = a.pf;
      Xe(this, Ye, this, b);
    }
  };
  function wf(a, b) {
    a.Ea += b;
    a.ta.tc(b / 2);
    a.Ka().tc(b / 2);
  }
  var uf = 'bond-electron-count-negative',
    vf = 'bond-electron-count-odd';
  function yf(a) {
    this.yc = a;
  }
  function zf(a, b, c) {
    this.Zb = a;
    this.aa = b;
    this.cg = c;
    this.Vc = [];
    this.zb = !1;
    this.oa = -1;
    this.ia = 0;
  }
  p = zf.prototype;
  p.getName = function() {
    return this.aa;
  };
  p.ca = function(a) {
    this.Vc.push(new yf(a));
    this.Vc.sort(function(b, c) {
      return b.yc - c.yc;
    });
  };
  p.Rc = function(a) {
    for (var b = 0; b < this.Vc.length; b++) {
      var c = this.Vc[b];
      if (c.yc === a) return c;
    }
    throw Hf;
  };
  p.rc = function(a) {
    return this.ia - a;
  };
  p.Uc = function() {
    return this.zb ? NaN : 0;
  };
  p.sd = function() {
    return this.ia;
  };
  p.toString = function() {
    for (var a = this.Zb, b = [], c = 0; c < this.Vc.length; c++)
      b.push(this.Vc[c].yc);
    0 !== b.length && (a += '[');
    a += b.join('-');
    0 !== b.length && (a += ']');
    return a;
  };
  var Hf = 'element-isotope-not-found';
  function If() {
    this.aa = {};
  }
  function V(a, b, c, d) {
    c = new zf(b, c, d);
    return (a.aa[b] = c);
  }
  If.prototype.ca = function(a, b) {
    a = this.aa[a];
    if (!a) throw Jf;
    if (a.cg > b) throw Kf;
    a.ca(b);
  };
  If.prototype.ha = function(a) {
    a = this.aa[a];
    if (!a) throw Jf;
    return a;
  };
  function Lf() {
    if (!Mf) {
      Mf = new If();
      var a = Mf;
      var b = V(a, 'H', 'Hydrogen', 1);
      b.ca(1, !0);
      b.ca(2);
      b.ca(3);
      b.ia = 1;
      b.oa = 1;
      b = V(a, 'He', 'Helium', 2);
      b.ca(3);
      b.ca(4, !0);
      b.ia = 2;
      b.oa = 18;
      b = V(a, 'Li', 'Lithium', 3);
      b.ca(6);
      b.ca(7, !0);
      b.ia = 1;
      b.oa = 1;
      b = V(a, 'Be', 'Beryllium', 4);
      b.ca(9);
      b.ia = 2;
      b.oa = 2;
      b = V(a, 'B', 'Boron', 5);
      b.ca(10);
      b.ca(11, !0);
      b.ia = 3;
      b.zb = !0;
      b.oa = 13;
      b = V(a, 'C', 'Carbon', 6);
      b.ca(12, !0);
      b.ca(13);
      b.ia = 4;
      b.zb = !0;
      b.oa = 14;
      b = V(a, 'N', 'Nitrogen', 7);
      b.ca(14, !0);
      b.ca(15);
      b.ia = 5;
      b.zb = !0;
      b.oa = 15;
      b = V(a, 'O', 'Oxygen', 8);
      b.ca(16, !0);
      b.ca(17);
      b.ca(18);
      b.ia = 6;
      b.zb = !0;
      b.oa = 16;
      b = V(a, 'F', 'Fluorine', 9);
      b.ca(19, !0);
      b.ia = 7;
      b.zb = !0;
      b.oa = 17;
      b = V(a, 'Ne', 'Neon', 10);
      b.ca(20, !0);
      b.ca(21);
      b.ca(22);
      b.ia = 8;
      b.oa = 18;
      b = V(a, 'Na', 'Sodium', 11);
      b.ca(23, !0);
      b.ia = 1;
      b.oa = 1;
      b = V(a, 'Mg', 'Magnesium', 12);
      b.ca(24, !0);
      b.ca(25);
      b.ca(26);
      b.ia = 2;
      b.oa = 2;
      b = V(a, 'Al', 'Aluminum', 13);
      b.ca(27, !0);
      b.ia = 3;
      b.oa = 13;
      b = V(a, 'Si', 'Silicon', 14);
      b.ca(28, !0);
      b.ca(29);
      b.ca(30);
      b.ia = 4;
      b.zb = !0;
      b.oa = 14;
      b = V(a, 'P', 'Phosphorous', 15);
      b.ca(31, !0);
      b.ia = 5;
      b.zb = !0;
      b.oa = 15;
      b = V(a, 'S', 'Sulfur', 16);
      b.ca(32, !0);
      b.ca(33);
      b.ca(34);
      b.ca(36);
      b.ia = 6;
      b.zb = !0;
      b.oa = 16;
      b = V(a, 'Cl', 'Chlorine', 17);
      b.ca(35, !0);
      b.ca(37);
      b.ia = 7;
      b.zb = !0;
      b.oa = 17;
      b = V(a, 'Ar', 'Argon', 18);
      b.ca(36);
      b.ca(38);
      b.ca(40, !0);
      b.ia = 8;
      b.oa = 18;
      b = V(a, 'K', 'Potassium', 19);
      b.ca(39, !0);
      b.ca(40);
      b.ca(41);
      b.ia = 1;
      b.oa = 1;
      b = V(a, 'Ca', 'Calcium', 20);
      b.ca(40, !0);
      b.ca(42);
      b.ca(43);
      b.ca(44);
      b.ca(46);
      b.ca(48);
      b.ia = 2;
      b.oa = 2;
      b = V(a, 'Sc', 'Scandium', 21);
      b.ca(45, !0);
      b.ia = 3;
      b.oa = 3;
      b = V(a, 'Ti', 'Titanium', 22);
      b.ca(46);
      b.ca(47);
      b.ca(48, !0);
      b.ca(49);
      b.ca(50);
      b.ia = 4;
      b.oa = 4;
      b = V(a, 'V', 'Vanadium', 23);
      b.ca(50);
      b.ca(51, !0);
      b.ia = 5;
      b.oa = 5;
      b = V(a, 'Cr', 'Chromium', 24);
      b.ca(50);
      b.ca(52, !0);
      b.ca(53);
      b.ca(54);
      b.ia = 6;
      b.oa = 6;
      b = V(a, 'Mn', 'Manganese', 25);
      b.ca(55, !0);
      b.ia = 7;
      b.oa = 7;
      b = V(a, 'Fe', 'Iron', 26);
      b.ca(54);
      b.ca(56, !0);
      b.ca(57);
      b.ca(58);
      b.ia = 8;
      b.oa = 8;
      b = V(a, 'Co', 'Cobalt', 27);
      b.ca(59, !0);
      b.ia = 9;
      b.oa = 9;
      b = V(a, 'Ni', 'Nickel', 28);
      b.ca(58, !0);
      b.ca(60);
      b.ca(61);
      b.ca(62);
      b.ca(64);
      b.ia = 10;
      b.oa = 10;
      b = V(a, 'Cu', 'Copper', 29);
      b.ca(63, !0);
      b.ca(65);
      b.ia = 11;
      b.oa = 11;
      b = V(a, 'Zn', 'Zinc', 30);
      b.ca(64, !0);
      b.ca(66);
      b.ca(67);
      b.ca(68);
      b.ca(70);
      b.ia = 12;
      b.oa = 12;
      b = V(a, 'Ga', 'Gallium', 31);
      b.ca(69, !0);
      b.ca(71);
      b.ia = 3;
      b.oa = 13;
      b = V(a, 'Ge', 'Germanium', 32);
      b.ca(70);
      b.ca(72);
      b.ca(73);
      b.ca(74, !0);
      b.ca(76);
      b.ia = 4;
      b.oa = 14;
      b = V(a, 'As', 'Arsenic', 33);
      b.ca(75, !0);
      b.ia = 5;
      b.oa = 15;
      b = V(a, 'Se', 'Selenium', 34);
      b.ca(74);
      b.ca(76);
      b.ca(77);
      b.ca(78);
      b.ca(80, !0);
      b.ca(82);
      b.ia = 6;
      b.oa = 16;
      b = V(a, 'Br', 'Bromine', 35);
      b.ca(79, !0);
      b.ca(81);
      b.ia = 7;
      b.zb = !0;
      b.oa = 17;
      b = V(a, 'Kr', 'Krypton', 36);
      b.ca(78);
      b.ca(80);
      b.ca(82);
      b.ca(83);
      b.ca(84, !0);
      b.ca(86);
      b.ia = 8;
      b.oa = 18;
      b = V(a, 'Rb', 'Rubidium', 37);
      b.ca(85, !0);
      b.ca(87);
      b.ia = 1;
      b.oa = 1;
      b = V(a, 'Sr', 'Strontium', 38);
      b.ca(84);
      b.ca(86);
      b.ca(87);
      b.ca(88, !0);
      b.ia = 2;
      b.oa = 2;
      b = V(a, 'Y', 'Yttrium', 39);
      b.ca(89, !0);
      b.ia = 3;
      b.oa = 3;
      b = V(a, 'Zr', 'Zirconium', 40);
      b.ca(90, !0);
      b.ca(91);
      b.ca(92);
      b.ca(94);
      b.ca(96);
      b.ia = 4;
      b.oa = 4;
      b = V(a, 'Nb', 'Niobium', 41);
      b.ca(93, !0);
      b.ia = 5;
      b.oa = 5;
      b = V(a, 'Mo', 'Molybdenum', 42);
      b.ca(92);
      b.ca(94);
      b.ca(95);
      b.ca(96);
      b.ca(97);
      b.ca(98, !0);
      b.ca(100);
      b.ia = 6;
      b.oa = 6;
      b = V(a, 'Tc', 'Technetium', 43);
      b.ia = 7;
      b.oa = 7;
      b = V(a, 'Ru', 'Ruthenium', 44);
      b.ca(96);
      b.ca(98);
      b.ca(99);
      b.ca(100);
      b.ca(101);
      b.ca(102, !0);
      b.ca(104);
      b.ia = 8;
      b.oa = 8;
      b = V(a, 'Rh', 'Rhodium', 45);
      b.ca(103, !0);
      b.ia = 9;
      b.oa = 9;
      b = V(a, 'Pd', 'Palladium', 46);
      b.ca(102);
      b.ca(104);
      b.ca(105);
      b.ca(106, !0);
      b.ca(108);
      b.ca(110);
      b.ia = 10;
      b.oa = 10;
      b = V(a, 'Ag', 'Silver', 47);
      b.ca(107, !0);
      b.ca(109);
      b.ia = 11;
      b.oa = 11;
      b = V(a, 'Cd', 'Cadmium', 48);
      b.ca(106);
      b.ca(108);
      b.ca(110);
      b.ca(111);
      b.ca(112);
      b.ca(113);
      b.ca(114, !0);
      b.ca(116);
      b.ia = 12;
      b.oa = 12;
      b = V(a, 'In', 'Indium', 49);
      b.ca(113);
      b.ca(115, !0);
      b.ia = 3;
      b.oa = 13;
      b = V(a, 'Sn', 'Tin', 50);
      b.ca(112);
      b.ca(114);
      b.ca(115);
      b.ca(116);
      b.ca(117);
      b.ca(118);
      b.ca(119);
      b.ca(120, !0);
      b.ca(122);
      b.ca(124);
      b.ia = 4;
      b.zb = !0;
      b.oa = 14;
      b = V(a, 'Sb', 'Antimony', 51);
      b.ca(121, !0);
      b.ca(123);
      b.ia = 5;
      b.oa = 15;
      b = V(a, 'Te', 'Tellurium', 52);
      b.ca(120);
      b.ca(122);
      b.ca(123);
      b.ca(124);
      b.ca(125);
      b.ca(126);
      b.ca(128);
      b.ca(130, !0);
      b.ia = 6;
      b.oa = 16;
      b = V(a, 'I', 'Iodine', 53);
      b.ca(127, !0);
      b.ca(131);
      b.ia = 7;
      b.zb = !0;
      b.oa = 17;
      b = V(a, 'Xe', 'Xenon', 54);
      b.ca(124);
      b.ca(126);
      b.ca(128);
      b.ca(129);
      b.ca(130);
      b.ca(131);
      b.ca(132, !0);
      b.ca(134);
      b.ca(136);
      b.ia = 8;
      b.oa = 18;
      b = V(a, 'Cs', 'Cesium', 55);
      b.ca(133, !0);
      b.ia = 1;
      b.oa = 1;
      b = V(a, 'Ba', 'Barium', 56);
      b.ca(130);
      b.ca(132);
      b.ca(134);
      b.ca(135);
      b.ca(136);
      b.ca(137);
      b.ca(138, !0);
      b.ia = 2;
      b.oa = 2;
      b = V(a, 'La', 'Lanthanum', 57);
      b.ca(138);
      b.ca(139, !0);
      b.ia = 3;
      b = V(a, 'Ce', 'Cerium', 58);
      b.ca(136);
      b.ca(138);
      b.ca(140, !0);
      b.ca(142);
      b.ia = 4;
      b = V(a, 'Pr', 'Praseodymium', 59);
      b.ca(141, !0);
      b.ia = 5;
      b = V(a, 'Nd', 'Neodymium', 60);
      b.ca(142, !0);
      b.ca(143);
      b.ca(144);
      b.ca(145);
      b.ca(146);
      b.ca(148);
      b.ca(150);
      b.ia = 6;
      b = V(a, 'Pm', 'Promethium', 61);
      b.ia = 7;
      b = V(a, 'Sm', 'Samarium', 62);
      b.ca(144);
      b.ca(147);
      b.ca(148);
      b.ca(149);
      b.ca(150);
      b.ca(152, !0);
      b.ca(154);
      b.ia = 8;
      b = V(a, 'Eu', 'Europium', 63);
      b.ca(151);
      b.ca(153, !0);
      b.ia = 9;
      b = V(a, 'Gd', 'Gadolinium', 64);
      b.ca(152);
      b.ca(154);
      b.ca(155);
      b.ca(156);
      b.ca(157);
      b.ca(158, !0);
      b.ca(160);
      b.ia = 10;
      b = V(a, 'Tb', 'Terbium', 65);
      b.ca(159, !0);
      b.ia = 11;
      b = V(a, 'Dy', 'Dysprosium', 66);
      b.ca(156);
      b.ca(158);
      b.ca(160);
      b.ca(161);
      b.ca(162);
      b.ca(163);
      b.ca(164, !0);
      b.ia = 12;
      b = V(a, 'Ho', 'Holmium', 67);
      b.ca(165, !0);
      b.ia = 13;
      b = V(a, 'Er', 'Erbium', 68);
      b.ca(162);
      b.ca(164);
      b.ca(166, !0);
      b.ca(167);
      b.ca(168);
      b.ca(170);
      b.ia = 14;
      b = V(a, 'Tm', 'Thulium', 69);
      b.ca(169, !0);
      b.ia = 15;
      b = V(a, 'Yb', 'Ytterbium', 70);
      b.ca(168);
      b.ca(170);
      b.ca(171);
      b.ca(172);
      b.ca(173);
      b.ca(174, !0);
      b.ca(176);
      b.ia = 16;
      b = V(a, 'Lu', 'Lutetium', 71);
      b.ca(175, !0);
      b.ca(176);
      b.ia = 17;
      b.oa = 3;
      b = V(a, 'Hf', 'Hafnium', 72);
      b.ca(174);
      b.ca(176);
      b.ca(177);
      b.ca(178);
      b.ca(179);
      b.ca(180, !0);
      b.ia = 4;
      b.oa = 4;
      b = V(a, 'Ta', 'Tantalum', 73);
      b.ca(180);
      b.ca(181, !0);
      b.ia = 5;
      b.oa = 5;
      b = V(a, 'W', 'Tungsten', 74);
      b.ca(180);
      b.ca(182);
      b.ca(183);
      b.ca(184, !0);
      b.ca(186);
      b.ia = 6;
      b.oa = 6;
      b = V(a, 'Re', 'Rhenium', 75);
      b.ca(185);
      b.ca(187, !0);
      b.ia = 7;
      b.oa = 7;
      b = V(a, 'Os', 'Osmium', 76);
      b.ca(184);
      b.ca(186);
      b.ca(187);
      b.ca(188);
      b.ca(189);
      b.ca(190);
      b.ca(192, !0);
      b.ia = 8;
      b.oa = 8;
      b = V(a, 'Ir', 'Iridium', 77);
      b.ca(191);
      b.ca(193, !0);
      b.ia = 9;
      b.oa = 9;
      b = V(a, 'Pt', 'Platinum', 78);
      b.ca(190);
      b.ca(192);
      b.ca(194);
      b.ca(195, !0);
      b.ca(196);
      b.ca(198);
      b.ia = 10;
      b.oa = 10;
      b = V(a, 'Au', 'Gold', 79);
      b.ca(197, !0);
      b.ia = 11;
      b.oa = 11;
      b = V(a, 'Hg', 'Mercury', 80);
      b.ca(196);
      b.ca(198);
      b.ca(199);
      b.ca(200);
      b.ca(201);
      b.ca(202, !0);
      b.ca(204);
      b.ia = 12;
      b.oa = 12;
      b = V(a, 'Tl', 'Thalium', 81);
      b.ca(203);
      b.ca(205, !0);
      b.ia = 3;
      b.oa = 13;
      b = V(a, 'Pb', 'Lead', 82);
      b.ca(204);
      b.ca(206);
      b.ca(207);
      b.ca(208, !0);
      b.ia = 4;
      b.oa = 14;
      b = V(a, 'Bi', 'Bismuth', 83);
      b.ca(209, !0);
      b.ia = 5;
      b.oa = 15;
      b = V(a, 'Po', 'Polonium', 84);
      b.ia = 6;
      b.oa = 16;
      b = V(a, 'At', 'Astatine', 85);
      b.ia = 7;
      b.oa = 17;
      b = V(a, 'Rn', 'Radon', 86);
      b.ia = 8;
      b.oa = 18;
      b = V(a, 'Fr', 'Francium', 87);
      b.ia = 1;
      b.oa = 1;
      b = V(a, 'Ra', 'Radium', 88);
      b.ia = 2;
      b.oa = 2;
      b = V(a, 'Ac', 'Actinium', 89);
      b.ia = 3;
      b = V(a, 'Th', 'Thorium', 90);
      b.ca(232, !0);
      b.ia = 4;
      b = V(a, 'Pa', 'Protactinium', 91);
      b.ca(231, !0);
      b.ia = 5;
      b = V(a, 'U', 'Uranium', 92);
      b.ca(234);
      b.ca(235);
      b.ca(238, !0);
      b.ia = 6;
      b = V(a, 'Np', 'Neptunium', 93);
      b.ia = 7;
      b = V(a, 'Pu', 'Plutonium', 94);
      b.ia = 8;
      b = V(a, 'Am', 'Americium', 95);
      b.ia = 9;
      b = V(a, 'Cm', 'Curium', 96);
      b.ia = 10;
      b = V(a, 'Bk', 'Berkelium', 97);
      b.ia = 11;
      b = V(a, 'Cf', 'Californium', 98);
      b.ia = 12;
      b = V(a, 'Es', 'Einsteinium', 99);
      b.ia = 13;
      b = V(a, 'Fm', 'Fermium', 100);
      b.ia = 14;
      b = V(a, 'Md', 'Mendelevium', 101);
      b.ia = 15;
      b = V(a, 'No', 'Nobelium', 102);
      b.ia = 16;
      b = V(a, 'Lr', 'Lawrencium', 103);
      b.ia = 17;
      b = V(a, 'Rf', 'Rutherfordium', 104);
      b.ia = 4;
      b = V(a, 'Db', 'Dubnium', 105);
      b.ia = 5;
      b = V(a, 'Sg', 'Seaborgium', 106);
      b.ia = 6;
      b = V(a, 'Bh', 'Bhorium', 107);
      b.ia = 7;
      b = V(a, 'Hs', 'Hassium', 108);
      b.ia = 8;
      b = V(a, 'Mt', 'Meitnerium', 109);
      b.ia = 9;
      b = V(a, 'Ds', 'Darmstadtium', 110);
      b.ia = 10;
      b = V(a, 'Rg', 'Roentgenium', 111);
      b.ia = 11;
      b = V(a, 'Cn', 'Copernicium', 112);
      b.ia = 12;
    }
    return Mf;
  }
  var Jf = 'atomic-system-no-such-element',
    Kf = 'atomic-system-infeasible-isotope',
    Mf = void 0;
  function Nf() {
    af.call(this);
  }
  F(Nf, af);
  p = Nf.prototype;
  p.jc = function(a, b, c, d) {
    a = Lf().ha(a);
    a = new jf(a);
    a.move(b || 0, c || 0, d);
    this.Va(a);
    return a;
  };
  p.Va = function(a) {
    a.na = this;
    a.Wa(this || null);
    Nf.la.Va.call(this, a);
  };
  p.bc = function(a) {
    if (a.getParent() !== this) throw Of;
    var b = a.Eb(),
      c = [],
      d;
    for (d = 0; d < b.length; d++) c.push(b[d]);
    for (d = 0; d < c.length; d++) this.hb(c[d]);
    a.na = void 0;
    a.Wa(null);
    Nf.la.bc.call(this, a);
  };
  p.Pc = function(a, b, c, d) {
    a = new tf(a, b, c, this, d);
    this.ya(a);
    return a;
  };
  p.ya = function(a) {
    a.da = this;
    a.ta.ya(a);
    a.Ka().ya(a);
    Nf.la.ya.call(this, a);
  };
  p.hb = function(a) {
    a.da = void 0;
    a.ta.hb(a);
    a.Ka().hb(a);
    Nf.la.hb.call(this, a);
  };
  var Of = 'molecule-no-such-atom';
  function Pf() {
    O.call(this);
    this.aa = new Nf();
    this.fa = this.ea = 0;
    this.da = this.ba = void 0;
    this.aa.Wa(this);
  }
  F(Pf, O);
  function Qf(a, b) {
    a.ba !== b &&
      (a.ba && a.ba.Gb(!1),
      a.da && (a.da.Gb(!1), (a.da = void 0)),
      b && b.Gb(!0),
      (a.ba = b));
  }
  function Rf(a, b) {
    a.da !== b &&
      (a.da && a.da.Gb(!1),
      a.ba && (a.ba.Gb(!1), (a.ba = void 0)),
      b && b.Gb(!0),
      (a.da = b));
  }
  function Sf(a) {
    for (var b = ib(a.aa.aa), c = 0; c < b.length; c++)
      b[c].Aa(!1), b[c].Gb(!1), a.aa.bc(b[c]);
  }
  Pf.prototype.Ma = function() {
    return 0 === this.aa.aa.length;
  };
  function Tf(a) {
    a.ea += 1;
    1 === a.ea && Uf(a, Vf, a);
  }
  function Wf(a) {
    if (0 === a.ea) throw Error(Xf);
    --a.ea;
    0 === a.ea && (Uf(a, Yf, a), Uf(a, Zf, a));
  }
  function $f(a, b) {
    var c = b.va.slice(0);
    b.Aa(!1);
    b.Gb(!1);
    a.aa.bc(b);
    for (b = 0; b < c.length; b++) {
      var d = c[b];
      void 0 !== d.getParent() &&
        0 === d.va.length &&
        (d.Aa(!1), d.Gb(!1), a.aa.bc(d));
    }
  }
  Pf.prototype.hb = function(a) {
    var b = a.ta,
      c = a.Ka();
    a.Aa(!1);
    a.Gb(!1);
    this.aa.hb(a);
    void 0 !== b.getParent() &&
      0 === b.va.length &&
      (b.Aa(!1), b.Gb(!1), this.aa.bc(b));
    void 0 !== c.getParent() &&
      0 === c.va.length &&
      (c.Aa(!1), c.Gb(!1), this.aa.bc(c));
  };
  function ag(a, b, c, d, e, m) {
    var q = bg(a, b, e);
    q || (q = a.aa.jc('C', b.x, b.y));
    (b = bg(a, c, e)) || (b = a.aa.jc('C', c.x, c.y));
    (c = hf(a.aa, q, b)) ? d && xf(c) : (c = a.aa.Pc(q, b, 2, m));
    return c;
  }
  Pf.prototype.Zd = function(a, b) {
    for (var c = a.Uc(), d = 0; d < c; d++) {
      var e = Jd(a),
        m = new id(a.ra().x, a.ra().y, a.ra().x + b, a.ra().y);
      vd(m, e);
      e = new jd(m.Ya, m.Za);
      e = this.aa.jc('H', e.x, e.y);
      this.aa.Pc(a, e, 2);
    }
  };
  function bg(a, b, c) {
    c = c || 0;
    a = a.aa.aa;
    for (var d = 0; d < a.length; d++) {
      var e = a[d];
      if (rd(b, e.ra()) < c) return e;
    }
  }
  function Uf(a, b, c) {
    P(a, new K(b, c));
  }
  var Vf = 'document-composite-edit-entered',
    Yf = 'document-composite-edit-exited',
    Zf = 'document-edited',
    Xf = 'document-not-in-composite-edit';
  function cg(a, b, c) {
    this.x = a;
    this.y = b;
    this.aa = c;
  }
  function dg(a) {
    this.aa = [];
    this.da = 0;
    this.ba = new bc(0, 0);
    this.ea = a || 0;
  }
  p = dg.prototype;
  p.ra = function() {
    return this.ba;
  };
  function W(a, b, c, d, e) {
    for (var m = 0; m < b.length; m++) {
      var q;
      var t = c;
      if ((q = t.ea[b[m]])) {
        var z,
          D = t,
          C = q.commands.split(''),
          S = q.points,
          H = new T(),
          Ma = 0;
        for (z = 0; z < C.length; z += 1)
          switch (C[z]) {
            case 'M':
              H.rb(S[Ma++], S[Ma++]);
              break;
            case 'L':
              H.Da(S[Ma++], S[Ma++]);
              break;
            case 'C':
              throw {
                name: 'UnsupportedOperation',
                message: 'Path command C not used.'
              };
            case 'Q':
              var Rd = S[Ma++];
              var Sd = S[Ma++];
              var Bc = S[Ma++];
              var Za = S[Ma++];
              H.lb(Rd, Sd, Bc, Za, Bc, Za);
              break;
            case 'Z':
              H.close();
              break;
            default:
              throw {
                name: 'UnsupportedOperation',
                message: 'Command ' + C[z] + ' not known.'
              };
          }
        H.transform(D.da);
        t = t.da.aa;
        q = new ve(
          H,
          new Md(
            q.bounds[0] * t,
            q.bounds[1] * t,
            q.bounds[2] * t,
            q.bounds[3] * t
          ),
          q.bearing[0] * t,
          q.bearing[1] * t
        );
      } else q = void 0;
      q &&
        (d
          ? ((H = q),
            (t = new md()),
            t.scale(0.6, 0.6),
            (H.ea = ae(H.ea, t)),
            (H.wc *= 0.6),
            (H.da *= 0.6),
            (H.aa.width *= 0.6),
            (H.aa.height *= 0.6),
            (H.aa.x = H.ba.x + H.wc),
            (H.aa.y = H.ba.y - 0.6 * H.aa.y))
          : e &&
            ((H = q),
            (t = c.aa),
            (Za = new md()),
            Za.translate(0, t - 0.6 * H.ad()),
            Za.scale(0.6, 0.6),
            H.ea.transform(Za),
            (H.wc *= 0.6),
            (H.da *= 0.6),
            (H.aa.height *= 0.6),
            (H.aa.y = H.ba.y + t - H.aa.height),
            (H.aa.x = H.ba.x + H.wc),
            (H.aa.width *= 0.6)),
        (H = a),
        (t = new bc(H.ba.x + H.da, H.ba.y)),
        q.translate(-(q.fa.fa - t.x), -(q.fa.na - t.y)),
        H.aa.push(q),
        (H.da += q.Jc()));
    }
  }
  p.cb = function() {
    for (var a = new T(), b = 0; b < this.aa.length; b++)
      Qd(a, this.aa[b].cb());
    return a;
  };
  p.ad = function() {
    for (var a = 0, b = 0; b < this.aa.length; b++)
      a = Math.max(a, this.aa[b].ad());
    return a;
  };
  p.Sd = function() {
    for (var a = 0, b = 0; b < this.aa.length; b++)
      a = Math.max(a, this.aa[b].Sd());
    return a;
  };
  p.translate = function(a, b) {
    for (var c = 0; c < this.aa.length; c++) this.aa[c].translate(a, b);
    this.ba.x += a;
    this.ba.y += b;
  };
  function eg(a, b) {
    if (0 !== a.aa.length) {
      var c = a.aa[0],
        d = a.aa[a.aa.length - 1].vb();
      d = d.x + d.width - c.vb().x;
      a.translate(b.x - a.ba.x - c.wc - 0.5 * d, b.y - a.ba.y - 0.5 * a.ad());
    }
  }
  function fg(a, b) {
    b = b.ra();
    a.translate(b.x - a.ba.x - a.Jc(), b.y - a.ba.y);
  }
  function gg(a, b) {
    var c = b.ra();
    a.translate(c.x - a.ba.x + b.Jc(), c.y - a.ba.y);
  }
  p.Jc = function() {
    for (var a = 0, b = 0; b < this.aa.length; b++) a += this.aa[b].Jc();
    return a;
  };
  function hg(a, b, c) {
    var d = c.vb(),
      e = c.ra();
    a.translate(
      b.x - (e.x + c.wc + 0.5 * d.width),
      b.y - (e.y + 0.5 * (d.y + d.height - e.y))
    );
  }
  function ig(a) {
    this.aa = a;
  }
  function jg(a, b, c, d, e, m, q, t, z) {
    this.da = 0.15 * d.aa;
    this.wa = a;
    this.xa = b;
    this.Ua = c;
    this.aa = d;
    this.Kc = e;
    this.ua = 0 < m ? 'H' : '';
    this.qa = 1 < m ? m.toString() : '';
    this.fa = this.ea = '';
    void 0 !== q &&
      ((this.ea = 1 < Math.abs(q) ? Math.abs(q).toString() : ''),
      q && (this.ea += 0 < q ? '+' : '-'));
    this.na = t ? t.toString() : '';
    z &&
      (z === pf
        ? (this.fa = '.')
        : z === qf
        ? (this.fa = '2.')
        : z === rf && (this.fa = '/\\'));
    this.ba = new T();
  }
  jg.prototype.ra = function() {
    return this.wa;
  };
  jg.prototype.cb = function() {
    return this.ba;
  };
  jg.prototype.xe = function() {
    Td(this.ba);
    a: {
      var a = this.Ua;
      var b = 'node-descriptor-east';
      var c = a.aa.va;
      if (0 === c.length && a.aa.ha) {
        var d = a.aa.ha().oa;
        if (16 === d || 17 === d) {
          b = 'node-descriptor-west';
          break a;
        }
      }
      d = {
        'node-descriptor-north': 0,
        'node-descriptor-south': 0,
        'node-descriptor-east': 0,
        'node-descriptor-west': 0
      };
      for (var e = 0; e < c.length; e++) {
        var m = d,
          q = Dd(a.aa, c[e]),
          t = Math.max(0, Math.sin(q)),
          z = Math.max(0, -Math.sin(q)),
          D = Math.max(0, Math.cos(q));
        q = Math.max(0, -Math.cos(q));
        m['node-descriptor-north'] += t * t;
        m['node-descriptor-south'] += z * z;
        m['node-descriptor-east'] += D * D;
        m['node-descriptor-west'] += q * q;
      }
      a = [
        'node-descriptor-east',
        'node-descriptor-west',
        'node-descriptor-north',
        'node-descriptor-south'
      ];
      for (e = 0; e < a.length; e++) {
        c = a[e];
        m = !0;
        for (t = e + 1; t < a.length; t++)
          if (1e-4 < d[c] - d[a[t]]) {
            m = !1;
            break;
          }
        if (m) {
          b = c;
          break;
        }
      }
    }
    switch (b) {
      case 'node-descriptor-east':
        var C = new dg(this.da);
        W(C, this.xa, this.aa);
        W(C, this.ua, this.aa);
        W(C, this.qa, this.aa, !0);
        W(C, this.ea, this.aa, !1, !0);
        W(C, this.fa, this.aa, !1, !0);
        hg(C, this.wa, C.aa[0]);
        this.na &&
          ((b = new dg(this.da)),
          W(b, this.na, this.aa, !1, !0),
          fg(b, C),
          Qd(this.ba, b.cb()));
        this.nd = (b = C.aa[0]) ? b.vb() : void 0;
        break;
      case 'node-descriptor-west':
        C = new dg(this.da);
        W(C, this.ea, this.aa, !1, !0);
        W(C, this.fa, this.aa, !1, !0);
        W(C, this.ua, this.aa);
        W(C, this.qa, this.aa, !0);
        W(C, this.na, this.aa, !1, !0);
        W(C, this.xa, this.aa);
        hg(C, this.wa, C.aa[C.aa.length - 1]);
        this.nd = (b = C.aa[C.aa.length - 1]) ? b.vb() : void 0;
        break;
      case 'node-descriptor-north':
        C = new dg(this.da);
        W(C, this.xa, this.aa);
        eg(C, this.wa);
        '' !== this.ea &&
          ((b = new dg(this.da)),
          W(b, this.ea, this.aa, !1, !0),
          gg(b, C),
          Qd(this.ba, b.cb()));
        '' !== this.fa &&
          ((b = new dg(this.da)),
          W(b, this.fa, this.aa, !1, !0),
          gg(b, C),
          Qd(this.ba, b.cb()));
        '' !== this.na &&
          ((b = new dg(this.da)),
          W(b, this.na, this.aa, !1, !0),
          fg(b, C),
          Qd(this.ba, b.cb()));
        '' !== this.ua &&
          ((b = new dg(this.da)),
          W(b, this.ua, this.aa),
          W(b, this.qa, this.aa, !0),
          (d = C.ra()),
          b.translate(d.x - b.ba.x, d.y - b.ba.y + (C.ad() + C.Sd()) + b.ea),
          Qd(this.ba, b.cb()));
        this.nd = C.cb().vb();
        break;
      case 'node-descriptor-south':
        (C = new dg(this.da)),
          W(C, this.xa, this.aa),
          eg(C, this.wa),
          '' !== this.na &&
            ((b = new dg(this.da)),
            W(b, this.na, this.aa, !1, !0),
            fg(b, C),
            Qd(this.ba, b.cb())),
          '' !== this.fa &&
            ((b = new dg(this.da)),
            W(b, this.fa, this.aa, !0),
            gg(b, C),
            Qd(this.ba, b.cb())),
          '' !== this.ea &&
            ((b = new dg(this.da)),
            W(b, this.ea, this.aa, !0),
            gg(b, C),
            Qd(this.ba, b.cb())),
          '' !== this.ua &&
            ((b = new dg(this.da)),
            W(b, this.ua, this.aa),
            W(b, this.qa, this.aa, !0),
            (d = C.ra()),
            b.translate(d.x - b.ba.x, d.y - b.ba.y - (b.ad() + b.Sd()) - C.ea),
            Qd(this.ba, b.cb())),
          (this.nd = C.cb().vb());
    }
    Qd(this.ba, C.cb());
    this.Kc &&
      ((C = this.ba.vb()),
      (b = new T()),
      (d = 0.1 * this.aa.aa),
      b.rb(C.x - d, C.y - d),
      b.Da(C.x + C.width + d, C.y - d),
      b.Da(C.x + C.width + d, C.y + C.height + d),
      b.Da(C.x - d, C.y + C.height + d),
      b.close(),
      Qd(this.ba, b));
  };
  function kg(a) {
    this.aa = a;
    this.wa = this.qa = this.na = this.ua = 0;
  }
  function lg(a) {
    if (mg(a) || 3 < a.aa.ta.va.length || 3 < a.aa.Ka().va.length) return ng;
    for (var b = a.aa.ta.va, c = 0; c < b.length; c++) {
      var d = b[c];
      d !== a.aa.Ka() &&
        (0 <= Ed(a.aa, d) ? ((a.da = d), a.ua++) : ((a.ba = d), a.na++));
    }
    b = a.aa.Ka().va;
    for (c = 0; c < b.length; c++)
      (d = b[c]),
        d !== a.aa.ta &&
          (0 <= Ed(a.aa, d) ? ((a.fa = d), a.ua++) : ((a.ea = d), a.na++));
    if (0 === a.ua && 0 === a.na) return ng;
    if (a.ua > a.na) return og;
    if (a.ua < a.na) return pg;
    if ((a.da && !a.ba && !a.fa && a.ea) || (a.ba && !a.da && !a.ea && a.fa))
      return og;
    if ((a.da && a.ba && !a.fa && !a.ea) || (a.fa && a.ea && !a.da && !a.ba))
      return ng;
    if ((c = qg(a)))
      a.qa++,
        4 === c.length && -1 !== c[1].va.indexOf(c[2]) && rg(c) && a.qa++,
        sg(a, c) && a.qa++;
    if ((c = tg(a)))
      a.wa++,
        4 === c.length && -1 !== c[1].va.indexOf(c[2]) && rg(c) && a.wa++,
        sg(a, c) && a.wa++;
    return a.qa >= a.wa ? og : pg;
  }
  function sg(a, b) {
    if (3 !== b.length) return !1;
    if (1 < b[0].sd()) {
      if (((a = hf(a.aa.getParent(), b[1], b[2])), 2 < a.Ea)) return !0;
    } else if (
      1 < b[2].sd() &&
      ((a = hf(a.aa.getParent(), b[0], b[1])), 2 < a.Ea)
    )
      return !0;
    return !1;
  }
  function rg(a) {
    var b = a[0].getParent();
    return 4 !== hf(b, a[0], a[1]).Ea || 4 !== hf(b, a[2], a[3]).Ea ? !1 : !0;
  }
  function qg(a) {
    if (a.da === a.fa) return [a.da];
    if (-1 !== a.da.va.indexOf(a.fa)) return [a.da, a.fa];
    for (var b = a.da.va, c = a.fa.va, d = 0; d < b.length; d++) {
      var e = b[d];
      if (e !== a.aa.ta)
        for (var m = 0; m < c.length; m++) {
          var q = c[m];
          if (q !== a.aa.Ka()) {
            if (e === q) return [a.da, e, a.fa];
            if (-1 !== e.va.indexOf(q)) return [a.da, e, q, a.fa];
          }
        }
    }
  }
  function tg(a) {
    if (a.ba === a.ea) return [a.ba];
    if (-1 !== a.ba.va.indexOf(a.ea)) return [a.ba, a.ea];
    for (var b = a.ba.va, c = a.ea.va, d = 0; d < b.length; d++) {
      var e = b[d];
      if (e !== a.aa.ta)
        for (var m = 0; m < c.length; m++) {
          var q = c[m];
          if (q !== a.aa.Ka()) {
            if (e === q) return [a.ba, e, a.ea];
            if (-1 !== e.va.indexOf(q)) return [a.ba, e, q, a.ea];
          }
        }
    }
  }
  function mg(a) {
    if (4 !== a.aa.Ea) return !1;
    for (var b = a.aa.ta.Eb(), c = 0; c < b.length; c++)
      if (b[c] !== a.aa && 4 === b[c].Ea) return !0;
    b = a.aa.Ka().Eb();
    for (c = 0; c < b.length; c++)
      if (b[c] !== a.aa && 4 === b[c].Ea) return !0;
    return !1;
  }
  var ng = 'edge-descriptor-center',
    og = 'edge-descriptor-top',
    pg = 'edge-descriptor-bottom';
  function ug(a) {
    this.qb = a;
    this.aa = {};
    this.ba = {};
  }
  ug.prototype.Va = function(a) {
    if ('C' === a.ha().Zb)
      if (!0 === U['methyl-visible'] && 1 === a.va.length) var b = !0;
      else {
        if (
          !(b =
            void 0 !== a.Rc() ||
            a.fa ||
            0 !== a.rc() ||
            0 === a.va.length ||
            a.Ab !== kf)
        ) {
          b = a.Uc();
          for (var c = a.Eb(), d = 0; d < c.length; d++) b += c[d].Ea / 2;
          b = 4 !== b;
        }
        if (!b)
          a: if (((b = a.Eb()), 2 !== b.length)) b = !1;
          else {
            for (c = 0; c < b.length; c++)
              if (4 !== b[c].Ea) {
                b = !1;
                break a;
              }
            b = !0;
          }
      }
    else b = !0;
    if (b) {
      b = this.qb.ea;
      c = a.ra();
      d = a.ha().Zb;
      var e = a.Uc(),
        m = new ig(a),
        q = a.rc(),
        t = a.Rc() ? a.Rc().yc : void 0;
      b = new jg(c, d, m, b, a.fa, e, q, t, a.Ab);
      b.xe();
      this.aa[E(a)] = b;
      return b.cb();
    }
  };
  ug.prototype.hb = function(a) {
    delete this.ba[E(a)];
  };
  ug.prototype.ya = function(a) {
    var b = this.aa[E(a.ta)],
      c = this.aa[E(a.Ka())];
    a: switch (a.Ea) {
      case 2:
        b = vg(this, a, b, c);
        break a;
      case 4:
        if ('cis-or-trans' === a.Fb()) {
          var d = wg(a),
            e = d.clone(),
            m = Fe(this.qb);
          xg(this, d, b, c);
          xg(this, e, b, c);
          yd(d, -m / 2);
          yd(e, m / 2);
          b = d.Ia;
          c = d.Ja;
          m = e.Ja;
          d.Ia = e.Ia;
          d.Ja = m;
          e.Ia = b;
          e.Ja = c;
          b = [d, e];
        } else {
          d = new kg(a);
          e = wg(a);
          m = Fe(this.qb);
          switch (lg(d)) {
            case og:
              var q = e.clone();
              xg(this, e, b, c);
              xg(this, q, b, c);
              yd(q, m);
              b || yg(e, q, d.da);
              c || zg(e, q, d.fa);
              break;
            case pg:
              q = e.clone();
              xg(this, e, b, c);
              xg(this, q, b, c);
              yd(q, -m);
              b || yg(e, q, d.ba);
              c || zg(e, q, d.ea);
              break;
            case ng:
              xg(this, e, b, c), (q = e.clone()), yd(e, -m / 2), yd(q, m / 2);
          }
          b = [e, q];
        }
        break a;
      case 6:
        e = wg(a);
        d = Fe(this.qb);
        xg(this, e, b, c);
        b = e.clone();
        c = e.clone();
        e = [e, b, c];
        yd(b, -d);
        yd(c, d);
        b = e;
        break a;
      default:
        b = vg(this, a, b, c);
    }
    return (this.ba[E(a)] = b);
  };
  function Ag(a, b) {
    return new cg(
      $b(b.ta.ra().x, b.Ka().ra().x, 0.5),
      $b(b.ta.ra().y, b.Ka().ra().y, 0.5),
      He(a.qb)
    );
  }
  function Bg(a) {
    var b, c;
    for (c in a.ba) {
      var d = a.ba[c];
      if (void 0 === d.vb) {
        var e = a,
          m = b;
        for (b = 0; b < d.length; b++) {
          var q = d[b];
          m || (m = new $c(q.Ja, q.Ia, q.Ja, q.Ia));
          var t = 0.5 * ye(e.qb);
          m.left = Math.min(m.left, Math.min(q.Ia, q.Ya) - t);
          m.right = Math.max(m.right, Math.max(q.Ia, q.Ya) + t);
          m.top = Math.max(m.top, Math.max(q.Ja, q.Za) + t);
          m.bottom = Math.min(m.bottom, Math.min(q.Ja, q.Za) - t);
        }
        b = m;
      } else
        (e = a),
          (d = d.vb()),
          b || (b = new $c(d.y + d.height, d.x + d.width, d.y, d.x)),
          (e = 0.5 * ye(e.qb)),
          (b.left = Math.min(b.left, d.x - e)),
          (b.right = Math.max(b.right, d.x + d.width + e)),
          (b.top = Math.max(b.top, d.y + d.height + e)),
          (b.bottom = Math.min(b.bottom, d.y - e));
    }
    for (c in a.aa)
      (e = b),
        (d = a.aa[c].cb().vb()),
        e || (e = new $c(d.y + d.height, d.x + d.width, d.y, d.x)),
        (e.left = Math.min(e.left, d.x - 0)),
        (e.right = Math.max(e.right, d.x + d.width + 0)),
        (e.top = Math.max(e.top, d.y + d.height + 0)),
        (e.bottom = Math.min(e.bottom, d.y - 0)),
        (b = e);
    return b;
  }
  function vg(a, b, c, d) {
    switch (b.Fb()) {
      case Ve:
        return (b = wg(b)), xg(a, b, c, d), [b];
      case 'wedge':
        var e = wg(b);
        xg(a, e, c, d);
        d = rd(b.ta.ra(), b.Ka().ra());
        var m = b.ta.ra(),
          q = sd(m.x, m.y, e.Ia, e.Ja);
        c = sd(m.x, m.y, e.Ya, e.Za);
        e = Ge(a.qb);
        a = (0.5 * q * e) / d;
        e = (0.5 * c * e) / d;
        d = new T();
        d.rb(q, a);
        d.Da(c, e);
        d.Da(c, -e);
        d.Da(q, -a);
        d.close();
        a = new md();
        b = Cd(b);
        a.translate(m.x, m.y);
        pd(a, b);
        d.transform(a);
        return d;
      case 'hash':
        q = wg(b);
        xg(a, q, c, d);
        c = rd(b.ta.ra(), b.Ka().ra());
        m = b.ta.ra();
        d = sd(m.x, m.y, q.Ia, q.Ja);
        e = 2 * ye(a.qb);
        var t = sd(m.x, m.y, q.Ya, q.Za);
        q = new T();
        for (a = Ge(a.qb); t >= d; ) {
          var z = ((U['taper-hash'] ? 0.5 * t : a) * a) / c;
          q.rb(t, z);
          q.Da(t, -z);
          t -= e;
        }
        a = new md();
        b = Cd(b);
        a.translate(m.x, m.y);
        pd(a, b);
        q.transform(a);
        return q;
      case 'either':
        m = wg(b);
        xg(a, m, c, d);
        q = sd(m.Ia, m.Ja, m.Ya, m.Za);
        c = 0.2 * Ge(a.qb);
        d = 2 * c;
        e = Math.floor(q / (2 * c));
        t = 0;
        a = new T();
        0 === e && (a.rb(2 * c, 0), a.ke(c, d, 0, 180));
        for (var D = 0; D < e; D++)
          (t += 2 * c),
            (z = D % 2 ? -1 : 1),
            a.rb(t, 0),
            a.ke(c, ((2 * t) / q) * d, 0, 180 * z);
        q = new md();
        b = Cd(b);
        m = new bc(m.Ia, m.Ja);
        q.translate(m.x, m.y);
        pd(q, b);
        a.transform(q);
        return a;
    }
  }
  function xg(a, b, c, d) {
    a = U['line-end-padding'] * a.qb.aa;
    if (c) {
      c = c.nd.clone();
      var e = a || 0;
      c.x -= e;
      c.y -= e;
      c.width += 2 * e;
      c.height += 2 * e;
      if ((c = td(b, c))) (b.Ia = c.x), (b.Ja = c.y);
    }
    d &&
      ((d = d.nd.clone()),
      (a = a || 0),
      (d.x -= a),
      (d.y -= a),
      (d.width += 2 * a),
      (d.height += 2 * a),
      (d = td(b, d))) &&
      ((b.Ya = d.x), (b.Za = d.y));
  }
  function yg(a, b, c) {
    c &&
      ((c = c.ra()),
      (c = new id(a.Ia, a.Ja, c.x, c.y)),
      vd(c, -wd(a, c) / 2),
      (a = ud(b, c))) &&
      ((b.Ia = a.x), (b.Ja = a.y));
  }
  function zg(a, b, c) {
    c &&
      ((c = c.ra()),
      (c = new id(a.Ya, a.Za, c.x, c.y)),
      vd(c, wd(c, new id(a.Ya, a.Za, a.Ia, a.Ja)) / 2),
      (a = ud(b, c))) &&
      ((b.Ya = a.x), (b.Za = a.y));
  }
  function wg(a) {
    var b = a.ta.ra();
    a = a.Ka().ra();
    return new id(b.x, b.y, a.x, a.y);
  }
  var Cg = (function() {
      function a(l, f, g, k) {
        if (0 !== g.length) {
          var h = [],
            n = [];
          h.push(n);
          g = y(g);
          for (var r = g.next(); !r.done; r = g.next())
            (r = r.value), n.length < f ? n.push(r) : ((n = [r]), h.push(n));
          f = y(h);
          for (h = f.next(); !h.done; h = f.next()) {
            n = h.value;
            h = [l, n.length.toString().padStart(3)];
            n = y(n);
            for (g = n.next(); !g.done; g = n.next())
              (r = y(g.value)),
                (g = r.next().value),
                (r = r.next().value),
                h.push(' '),
                h.push(g.toString().padStart(3)),
                h.push(' '),
                h.push(r.toString().padStart(3));
            k.push(h.join(''));
          }
        }
      }
      function b(l, f, g) {
        for (var k = l.sc(6, 9), h = 0; h < k; h++) {
          var n = 10 + 8 * h,
            r = l.sc(n, n + 3);
          n = l.Hd(n + 4, n + 7);
          g(r, f ? parseInt(n) : n);
        }
      }
      function c(l, f) {
        for (var g = {}; 'M  END' !== l.line(); ) {
          if ('C' === l.Hd(0, 3))
            (g.ie = l.Hd(3, 6)),
              b(
                l,
                !1,
                (function(h) {
                  return function(n, r) {
                    f.setProperty(n, h.ie, r);
                  };
                })(g)
              );
          else {
            var k = l.Hd(0, 6);
            k = hl[k];
            void 0 !== k && b(l, !0, k(f));
          }
          l.next();
          g = { ie: g.ie };
        }
      }
      function d(l) {
        function f(u) {
          if (!r) {
            r = !0;
            for (var x = y(k), A = x.next(); !A.done; A = x.next())
              (A = A.value), A !== u && ((A.kb = 0), (A.Wb = 0));
          }
        }
        function g(u) {
          if (1 > u || u > k.length) throw Error('invalid atom id');
          return k[u - 1];
        }
        l = void 0 === l ? m({}) : l;
        var k = [],
          h = [],
          n = !1,
          r = !1,
          w = !1,
          v = 2;
        return {
          jc: function(u) {
            var x = void 0 === u.x ? 0 : u.x,
              A = void 0 === u.y ? 0 : u.y,
              G = void 0 === u.z ? 0 : u.z,
              N = u.Xa,
              ja = void 0 === u.Ef ? 0 : u.Ef,
              qa = void 0 === u.Oe ? 0 : u.Oe;
            u = void 0 === u.$b ? 0 : u.$b;
            var Ph = Dc[N];
            if (void 0 === Ph) throw Error('invalid symbol');
            if (0 > qa || 7 < qa) throw Error('invalid charge type');
            if (-3 > ja || 4 < ja) throw Error('invalid mass difference');
            if (0 > u || 15 < u) throw Error('invalid valence');
            k.push({
              x: x,
              y: A,
              z: G,
              Xa: N,
              $b: u,
              kb: r ? 0 : il[qa],
              ga: 0 === ja || n ? 0 : Ph.ga + ja,
              Wb: r ? 0 : 4 === qa ? 2 : 0,
              me: [],
              zd: {}
            });
            0 !== G && (v = 3);
            return k.length;
          },
          Pc: function(u) {
            var x = u.first,
              A = u.second,
              G = u.type;
            u = void 0 === u.Dc ? 0 : u.Dc;
            var N = g(x),
              ja = g(A);
            if (1 === G) {
              if (2 === u || 3 === u || 5 === u || 6 < u)
                throw Error('invalid bond stereo');
              0 !== u && (w = !0);
            } else if (2 === G) {
              if (1 === u || 2 === u || 3 < u)
                throw Error('invalid bond stereo');
            } else if (3 === G) {
              if (0 !== u) throw Error('invalid bond stereo');
            } else throw Error('invalid bond type');
            if (x === A) throw Error('bond to self');
            h.push({ first: x, second: A, type: G, Dc: u });
            N.me.push({ Zg: A, type: G, Dc: u });
            ja.me.push({ Zg: x, type: G, Dc: u });
          },
          Sf: function(u, x) {
            u = g(u);
            if (-15 > x || 15 < x) throw Error('invalid charge');
            u.kb = x;
            f(u);
          },
          $d: function(u, x) {
            u = g(u);
            if (0 > x || 3 < x) throw Error('invalid radical type');
            u.Wb = x;
            f(u);
          },
          Ed: function(u, x) {
            u = g(u);
            var A = x - Dc[u.Xa].ga;
            if (-18 > A || 12 < A) throw Error('invalid isotope');
            u.ga = x;
            if (!n)
              for (n = !0, x = y(k), A = x.next(); !A.done; A = x.next())
                (A = A.value), A !== u && (A.ga = 0);
          },
          setProperty: function(u, x, A) {
            u = g(u);
            if (3 !== x.length) throw Error('invalid key');
            if (3 < A.length) throw Error('invalid value');
            u.zd[x] = A;
          },
          Fc: function() {
            return k.length;
          },
          le: function() {
            return h.length;
          },
          kd: function(u) {
            u = g(u);
            return {
              x: u.x,
              y: u.y,
              z: u.z,
              Xa: u.Xa,
              $b: u.$b,
              ga: u.ga,
              kb: u.kb,
              Wb: u.Wb
            };
          },
          Me: function(u) {
            if (1 > u || u > h.length) throw Error('invalid bond id');
            return Object.assign({}, h[u - 1]);
          },
          wb: function(u) {
            u = g(u);
            for (var x = 0, A = y(u.me), G = A.next(); !G.done; G = A.next())
              x += G.value.type;
            x += jl[u.Wb];
            if (0 !== u.$b) return 15 === u.$b ? 0 : u.$b - x;
            u = y(e(u.Xa, u.kb));
            for (A = u.next(); !A.done; A = u.next())
              if (((A = A.value), A >= x)) return A - x;
            return 0;
          },
          ai: function(u, x) {
            return g(u).zd[x];
          },
          zd: function(u) {
            u = g(u);
            return Object.assign({}, u.zd);
          },
          wg: function() {
            return w;
          },
          Gg: function() {
            return v;
          },
          ue: function() {
            return l;
          }
        };
      }
      function e(l, f) {
        var g = Dc[l];
        if (void 0 === g) throw Error('unknown element');
        if (0 === g.ka.length) f = 'Al' === l && -1 === f ? [4] : [];
        else {
          a: {
            l = g.ja;
            if (!(0 === f || 20 >= l))
              for (
                var k = l - f, h = y(kl), n = h.next();
                !n.done;
                n = h.next()
              ) {
                var r = y(n.value);
                n = r.next().value;
                r = r.next().value;
                if (l >= n && l <= r && k < n) {
                  l = !0;
                  break a;
                }
              }
            l = !1;
          }
          f = l ? [] : Qh[g.ja - f] || [];
        }
        return f;
      }
      function m(l) {
        var f = Object.assign(
          { Xd: '', ee: '', yd: 'CHEMCORE', timestamp: Date.now(), od: '' },
          l
        );
        if (80 < f.Xd.length) throw Error('molecule name too long');
        if (2 < f.ee.length) throw Error('user initials too long');
        if (8 < f.yd.length) throw Error('program name too long');
        if (80 < f.od.length) throw Error('comment too long');
        return {
          Xd: function() {
            return f.Xd;
          },
          ee: function() {
            return f.ee;
          },
          yd: function() {
            return f.yd;
          },
          timestamp: function() {
            return f.timestamp;
          },
          od: function() {
            return f.od;
          }
        };
      }
      function q(l) {
        function f(h, n, r) {
          if ((void 0 === r ? 0 : r) && n > g[k].length)
            throw new t('end of line', k);
          return g[k].substring(h, n).trim();
        }
        var g = l.split(/\r\n|\n/),
          k = 0;
        return {
          next: function() {
            if (k === g.length - 1) throw new t('end of file', k);
            k++;
          },
          lineNumber: function() {
            return k;
          },
          line: function() {
            return g[k];
          },
          Hd: f,
          sc: function(h, n, r) {
            h = f(h, n, void 0 === r ? !1 : r);
            h = parseInt(h || '0');
            if (isNaN(h)) throw new t('invalid line', k);
            return h;
          },
          $c: function(h, n, r) {
            h = f(h, n, void 0 === r ? !1 : r);
            h = parseFloat(h);
            if (isNaN(h)) throw new t('invalid line', k);
            return h;
          }
        };
      }
      function t(l, f) {
        l = Error.call(this, l + ' at line ' + f);
        this.message = l.message;
        'stack' in l && (this.stack = l.stack);
        this.Qf = f;
      }
      function z(l, f) {
        if (1 === l.order()) return ll([].concat(B(l.za()))[0], f);
        var g = l.za(),
          k = Fb(),
          h = k.Ib();
        g = y(g);
        for (var n = g.next(); !n.done; n = g.next()) {
          n = n.value;
          for (var r = void 0, w = y(n), v = w.next(); !v.done; v = w.next())
            (v = v.value),
              h.fb(v) || k.Va(v),
              void 0 === r || h.Ob(r, v) || k.ya(r, v),
              (r = v);
          h.Ob(r, n[0]) || k.ya(r, n[0]);
        }
        if (h.size() - h.order() + 1 !== l.order()) return Sd(h, f);
        k = y(l.mb());
        for (g = k.next(); !g.done; g = k.next())
          if (
            ((n = y(g.value)),
            (g = n.next().value),
            (n = n.next().value),
            2 < l.weight(g, n).length)
          )
            return Sd(h, f);
        return ml(l, h, f);
      }
      function D(l, f) {
        if (2 !== f.mc(l)) return !1;
        for (var g = y(f.sa(l)), k = g.next(); !k.done; k = g.next())
          if (2 !== f.qf(l, k.value)) return !1;
        return !0;
      }
      function C(l, f) {
        return Rd([].concat(B(l), [f])) === l.length + 1;
      }
      function S(l, f, g) {
        g = Array(g).fill(!1);
        for (var k = 1; k < l.length; k++) g[f.get(l[k - 1]).get(l[k])] = !0;
        g[f.get(l[0]).get(l[l.length - 1])] = !0;
        return g;
      }
      function H(l) {
        for (
          var f = new Map(), g = y(l.za()), k = g.next();
          !k.done;
          k = g.next()
        )
          f.set(k.value, new Map());
        g = 0;
        l = y(l.mb());
        for (k = l.next(); !k.done; k = l.next()) {
          var h = y(k.value);
          k = h.next().value;
          h = h.next().value;
          f.get(k).set(h, g);
          f.get(h).set(k, g);
          g += 1;
        }
        return f;
      }
      function Ma(l, f) {
        var g = [],
          k = l.sort(function(u, x) {
            return u.length - x.length;
          });
        l = [];
        var h = [],
          n = H(f),
          r = 3;
        k = y(k);
        for (var w = k.next(); !w.done; w = k.next()) {
          w = w.value;
          w.length !== r &&
            (l.push.apply(l, B(h)), (r = w.length), (h.length = 0));
          var v = S(w, n, f.size());
          C(l, v) && (g.push(w), C(l.concat(h), v) && h.push(v));
        }
        return g;
      }
      function Rd(l, f, g) {
        f = void 0 === f ? 0 : f;
        g = void 0 === g ? 0 : g;
        if (f === l.length || g === l[f].length) return f;
        for (; !l[f][g]; ) {
          if (g === l[f].length) return f;
          a: {
            var k = f,
              h = g;
            var n = l;
            for (var r = k + 1; r < n.length; r++)
              if (n[r][h]) {
                h = y([n[r], n[k]]);
                n[k] = h.next().value;
                n[r] = h.next().value;
                n = !0;
                break a;
              }
            n = !1;
          }
          if (n) break;
          g++;
        }
        n = f;
        k = g;
        for (r = n + 1; r < l.length; r++)
          if (l[r][k])
            for (h = k; h < l[r].length; h++) l[r][h] = l[n][h] !== l[r][h];
        return Rd(l, f + 1, g + 1);
      }
      function Sd(l, f) {
        return {
          pc: function(g) {
            var k = [].concat(B(l.za())).find(function(n) {
                return g.has(n);
              }),
              h =
                void 0 === k
                  ? void 0
                  : [].concat(B(f.sa(k))).find(function(n) {
                      return g.has(n);
                    });
            nl(l, g, k, h);
            k = y(l.za());
            for (h = k.next(); !h.done; h = k.next())
              (h = h.value), g.ye(h, f.sa(h), 1);
          }
        };
      }
      function Bc(l, f, g, k) {
        f = y(Rh(l, f, g, k));
        l = f.next().value;
        f = f.next().value;
        return Math.sqrt(Math.pow(l, 2) + Math.pow(f, 2));
      }
      function Za(l, f, g, k) {
        var h = { node: void 0, value: Number.NEGATIVE_INFINITY };
        f = y(f);
        for (var n = f.next(); !n.done; n = f.next()) {
          n = n.value;
          var r = Bc(n, l, g, k);
          r > h.value && (h = { node: n, value: r });
        }
        return h;
      }
      function nl(l, f, g, k, h, n, r) {
        r = void 0 === r ? 0.1 : r;
        h = ol(l, void 0 === h ? 1 : h, void 0 === n ? 1 : n);
        l = [].concat(B(l.za()));
        n = l.filter(function(u) {
          return u !== k && u !== g;
        });
        void 0 === g
          ? f.Gc(l)
          : void 0 === k
          ? f.Gc([g].concat(B(n)))
          : f.Gc([g].concat(B(n)), f.orientation(k, g));
        var w = Za(l, n, f, h);
        if (!(w.value <= r))
          for (; w.value > r; ) {
            var v = w;
            w = v.node;
            for (v = v.value; v > r; ) pl(w, l, f, h), (v = Bc(w, l, f, h));
            w = Za(l, n, f, h);
          }
      }
      function pl(l, f, g, k) {
        if (2 > f.length) return [0, 0];
        var h = y(Rh(l, f, g, k)),
          n = h.next().value;
        h = h.next().value;
        var r = 0,
          w = 0,
          v = 0,
          u = y(g.get(l)),
          x = u.next().value;
        u = u.next().value;
        f = y(f);
        for (var A = f.next(); !A.done; A = f.next()) {
          var G = A.value;
          if (G !== l) {
            A = g.Qd(l, G);
            if (0 === A) throw Error('invalid state');
            var N = y(g.get(G)),
              ja = N.next().value;
            N = N.next().value;
            ja = x - ja;
            N = u - N;
            var qa = k.get(l).get(G);
            G = qa.zf;
            qa = qa.k;
            r += qa * (1 - (G * Math.pow(N, 2)) / Math.pow(A, 3));
            w += (qa * G * ja * N) / Math.pow(A, 3);
            v += qa * (1 - (G * Math.pow(ja, 2)) / Math.pow(A, 3));
          }
        }
        v = y([r, w, w, v]);
        k = v.next().value;
        r = v.next().value;
        w = v.next().value;
        v = v.next().value;
        n = -n;
        h = -h;
        x = k * v - r * w;
        if (0 === x) throw Error('invalid state');
        g.translate(l, (n * v - r * h) / x, (k * h - n * w) / x);
      }
      function Rh(l, f, g, k) {
        var h = 0,
          n = 0,
          r = y(g.get(l)),
          w = r.next().value;
        r = r.next().value;
        f = y(f);
        for (var v = f.next(); !v.done; v = f.next()) {
          var u = v.value;
          if (l !== u) {
            v = g.Qd(l, u);
            if (0 === v) throw Error('invalid state');
            var x = y(g.get(u)),
              A = x.next().value;
            x = x.next().value;
            var G = k.get(l).get(u);
            u = G.k;
            G = G.zf;
            A = w - A;
            x = r - x;
            h += u * (A - (G * A) / v);
            n += u * (x - (G * x) / v);
          }
        }
        return [h, n];
      }
      function ol(l, f, g) {
        f = void 0 === f ? 1 : f;
        g = void 0 === g ? 1 : g;
        for (
          var k = new Map(), h = y(l.za()), n = h.next();
          !n.done;
          n = h.next()
        ) {
          n = n.value;
          for (
            var r = new Map(), w = y(l.za()), v = w.next();
            !v.done;
            v = w.next()
          )
            if (((v = v.value), n !== v)) {
              var u = new Map(),
                x = Sh(u, v);
              Xd(n, l, x);
              u = u.get(v);
              if (void 0 === u) throw Error('invalid state');
              u = u.length - 1;
              r.set(v, { d: u, zf: f * u, k: g / Math.pow(u, 2) });
            }
          k.set(n, r);
        }
        return k;
      }
      function ql(l, f) {
        if (2 !== f.mc(l)) throw Error('invalid state');
        return {
          pc: function(g) {
            a: {
              var k = y(f.sa(l));
              for (var h = k.next(); !h.done; h = k.next())
                if (((h = h.value), g.has(h))) {
                  k = h;
                  break a;
                }
              k = void 0;
            }
            h = k;
            if (void 0 === h) {
              h = 0;
              var n = y(f.sa(l));
              for (k = n.next(); !k.done; k = n.next())
                g.offset(l, k.value, h), (h += Math.PI);
            } else {
              n = g.orientation(h, l);
              var r = y(f.sa(l));
              for (k = r.next(); !k.done; k = r.next())
                (k = k.value), k === h || g.has(k) || g.offset(l, k, n);
            }
          }
        };
      }
      function Th(l, f, g, k) {
        l = y(g.sa(l));
        for (g = l.next(); !g.done; g = l.next())
          if (((g = g.value), g !== f && k.has(g))) return g;
      }
      function Yd(l, f, g, k, h) {
        g = y(g.sa(l));
        for (var n = g.next(); !n.done; n = g.next())
          if (((n = n.value), n !== f && !k.has(n))) {
            k.offset(l, n, h);
            break;
          }
      }
      function rl(l, f, g) {
        return {
          pc: function(k) {
            if (!k.has(l) || !k.has(f))
              if (k.has(l)) {
                var h = Th(l, f, g, k);
                h = k.orientation(h, l);
                k.offset(l, f, h);
                Yd(f, l, g, k, h);
              } else
                k.has(f)
                  ? ((h = Th(f, l, g, k)),
                    (h = k.orientation(h, f)),
                    k.offset(f, l, h),
                    Yd(l, f, g, k, h))
                  : (k.offset(l, f, 0),
                    Yd(f, l, g, k, 0),
                    Yd(l, f, g, k, Math.PI));
          }
        };
      }
      function sl(l, f, g) {
        l = y(l.mb());
        for (var k = l.next(); !k.done; k = l.next())
          if (((k = k.value[2]), 2 === k.length)) {
            var h = y(k);
            k = h.next().value;
            h = h.next().value;
            var n = g.orientation(k, h),
              r = [].concat(B(f.sa(k))).filter(function(w) {
                return !g.has(w);
              });
            if (1 === r.length) g.offset(k, r[0], Math.PI + n);
            else if (1 < r.length) throw Error('not implemented');
            k = [].concat(B(f.sa(h))).filter(function(w) {
              return !g.has(w);
            });
            if (1 === k.length) g.offset(h, k[0], n);
            else if (1 < r.length) throw Error('not implemented');
          }
      }
      function tl(l, f, g, k, h) {
        var n = l.find(function(v) {
          return h.has(v);
        });
        if (void 0 === n) h.Gc(l);
        else {
          var r = [].concat(B(g.sa(n)));
          g = r.filter(function(v) {
            return h.has(v) && !l.includes(v);
          });
          if (1 !== g.length) throw Error('invalid state');
          g = h.orientation(g[0], n);
          r = r.filter(function(v) {
            return !h.has(v) && !k.fb(v);
          });
          var w = g - (r.length * Math.PI) / 3 / 2;
          f = f
            .filter(function(v) {
              return v.includes(n);
            })
            .map(function(v) {
              return v[0] === n ? v[1] : v[0];
            });
          0 === f.length
            ? h.Gc(Ec(l, n), w)
            : (h.offset(n, f[0], w),
              (f = Ec(l, f[0])),
              h.rf(f[0], f[1], f.slice(2)));
          f = -(g + Math.PI / 3);
          g = y(r);
          for (r = g.next(); !r.done; r = g.next())
            h.offset(n, r.value, f), (f -= Math.PI / 3);
        }
      }
      function ml(l, f, g) {
        for (
          var k = Uh(f), h = new Map(), n = y(l.za()), r = n.next();
          !r.done;
          r = n.next()
        )
          (r = r.value),
            h.set(
              r,
              r.reduce(function(u, x) {
                return u + k.get(x);
              }, 0)
            );
        var w = Vh(l.za(), function(u) {
            return h.get(u);
          }),
          v = [].concat(B(l.mb())).map(function(u) {
            return u[2];
          });
        return {
          pc: function(u) {
            var x = ul(l, u, h);
            tl(w, v, g, f, u);
            Xd(w, l, x);
            sl(l, g, u);
            x = y(f.za());
            for (var A = x.next(); !A.done; A = x.next())
              (A = A.value), u.ye(A, g.sa(A));
          }
        };
      }
      function ul(l, f, g) {
        var k = new Map();
        return {
          root: function(h) {
            k.set(h, h);
          },
          $a: function(h, n) {
            var r = l.weight(h, n);
            h = k.get(h);
            if (1 === r.length) {
              r = y(r).next().value;
              r = Ec(n, r);
              k.set(n, r);
              n = void 0;
              n = void 0 === n ? 1 : n;
              var w = y(r).next().value;
              w = Ec(h, w);
              0 === h.length % 2
                ? (h = f.orientation(w[w.length / 2], w[0]))
                : ((h = Math.floor(w.length / 2)),
                  (h = f.orientation(w[h], w[h + 1]) - Math.PI / 2));
              f.Gc(r, h, n);
            } else if (2 === r.length) {
              r = vl(h, n);
              k.set(n, r);
              h = r.slice(0, 2);
              for (r = r.slice(2); 0 < r.length && f.has(r[0]); )
                h.push(r.shift());
              for (; 0 < r.length && f.has(r[r.length - 1]); )
                h.unshift(r.pop());
              if (2 === h.length) f.rf(h[0], h[1], r);
              else {
                n = [];
                w = y(h.entries());
                for (var v = w.next(); !v.done; v = w.next()) {
                  var u = y(v.value);
                  v = u.next().value;
                  u = u.next().value;
                  v !== h.length - 1 && n.push(f.Qd(u, h[v + 1]));
                }
                n = wl(n);
                f.dg(h[0], h[h.length - 1], r, n);
              }
            } else throw Error('invalid state');
          },
          abort: function() {
            return !1;
          },
          sa: function(h) {
            return [].concat(B(h)).sort(function(n, r) {
              return 6 === n.length && 6 === r.length
                ? 0
                : 6 === n.length && 6 !== r.length
                ? -1
                : 6 !== n.length && 6 === r.length
                ? 1
                : g.get(r) - g.get(n);
            });
          }
        };
      }
      function Zd(l) {
        l.unshift(l.pop());
        return l;
      }
      function vl(l, f) {
        l = [].concat(B(l));
        f = [].concat(B(f));
        a: {
          for (var g = 0; g < l.length; g++) {
            for (var k = 0; k < f.length; k++) {
              if (l[0] === f[0]) break a;
              Zd(f);
            }
            Zd(l);
          }
          throw Error('can not wind');
        }
        if (l[1] === f[f.length - 1]) return Zd(f);
        if (l[1] === f[1])
          return Zd(
            f
              .slice(1)
              .concat(f.slice(0, 1))
              .reverse()
          );
        if (l[l.length - 1] === f[1]) return f;
        if (l[l.length - 1] === f[f.length - 1])
          return f
            .slice(1)
            .concat(f.slice(0, 1))
            .reverse();
        throw Error('can not wind');
      }
      function wl(l) {
        if (0 === l.length) return 0;
        l.sort(function(g, k) {
          return g - k;
        });
        var f = Math.floor(l.length / 2);
        return 0 === l.length % 2 ? (l[f - 1] + l[f]) / 2 : l[f];
      }
      function Vh(l, f) {
        var g = Number.NEGATIVE_INFINITY;
        l = y(l);
        for (var k = l.next(); !k.done; k = l.next()) {
          k = k.value;
          var h = f(k);
          if (h > g) {
            var n = k;
            g = h;
          }
        }
        return n;
      }
      function xl(l, f) {
        return {
          root: function(g) {
            return f.Va(g);
          },
          $a: function(g, k, h) {
            h || f.Va(k);
            f.ya(g, k, l.weight(g, k));
          },
          abort: function() {
            return !1;
          },
          sa: function(g) {
            return g;
          }
        };
      }
      function yl(l, f) {
        return l.filter(function(g) {
          return f.includes(g);
        });
      }
      function zl(l) {
        for (var f = Fb(), g = y(l), k = g.next(); !k.done; k = g.next()) {
          k = k.value;
          f.Va(k);
          for (var h = y(l), n = h.next(); !n.done; n = h.next()) {
            n = n.value;
            if (k === n) break;
            var r = yl(k, n);
            0 !== r.length && f.ya(k, n, r);
          }
        }
        return f.Ib();
      }
      function Wh(l, f, g, k) {
        var h = 0;
        l = y(l);
        for (var n = l.next(); !n.done; n = l.next()) h += Xh(n.value, f, g, k);
        return h;
      }
      function Xh(l, f, g, k) {
        var h = 0;
        f = y(f);
        for (var n = f.next(); !n.done; n = f.next()) {
          n = n.value;
          var r = g.Qd(l, n);
          h += (k.get(l) * k.get(n)) / Math.pow(r, 2);
        }
        return h;
      }
      function Al(l, f, g, k, h, n) {
        f = y(f);
        for (var r = f.next(); !r.done; r = f.next()) {
          r = r.value;
          for (
            var w = Number.POSITIVE_INFINITY,
              v = void 0,
              u = y(k),
              x = u.next();
            !x.done;
            x = u.next()
          ) {
            x = x.value;
            h.offset(l, r, x);
            var A = Xh(r, g, h, n);
            A < w && ((w = A), (v = x));
          }
          h.offset(l, r, v);
          k.splice(k.indexOf(v), 1);
        }
      }
      function Bl(l, f, g, k, h) {
        var n = k.orientation(l, f),
          r = []
            .concat(B(g.sa(l)))
            .filter(function(x) {
              return x !== f;
            })
            .sort(function(x, A) {
              return h.get(x) - h.get(A);
            }),
          w = [n + Math.PI / 2, n + (5 * Math.PI) / 6, n + (4 * Math.PI) / 3];
        n = [n - Math.PI / 2, n - (5 * Math.PI) / 6, n - (4 * Math.PI) / 3];
        for (var v = 0; v < r.length; v++) k.offset(l, r[v], w[v]);
        v = [].concat(B(g.sa(f))).filter(function(x) {
          return x !== l;
        });
        if (0 === v.length) throw Error('not implemented');
        g = Wh(r, v, k, h);
        for (var u = 0; u < r.length; u++) k.offset(l, r[u], n[u]);
        n = Wh(r, v, k, h);
        if (g < n) for (n = 0; n < r.length; n++) k.offset(l, r[n], w[n]);
      }
      function Cl(l, f, g, k) {
        var h = k.orientation(l, f);
        g = [].concat(B(g.sa(l))).filter(function(r) {
          return r !== f;
        });
        h = [h + Math.PI / 2, h + Math.PI, h + (3 * Math.PI) / 2];
        for (var n = 0; n < g.length; n++) k.offset(l, g[n], h[n]);
      }
      function Dl(l, f, g, k, h) {
        if (
          2 <
          [].concat(B(g.sa(l))).filter(function(n) {
            return 1 === g.mc(n);
          }).length
        )
          Cl(l, f, g, k);
        else if (
          2 >
          []
            .concat(B(g.sa(l)))
            .sort(function(n, r) {
              return h.get(r) - h.get(n);
            })
            .indexOf(f)
        )
          Bl(l, f, g, k, h);
        else throw Error('not implemented');
      }
      function El(l, f, g, k) {
        f = [].concat(B(f.sa(l))).sort(function(r, w) {
          return k.get(r) - k.get(w);
        });
        for (
          var h = [0, Math.PI / 3, (5 * Math.PI) / 6, (3 * Math.PI) / 2], n = 0;
          4 > n;
          n++
        )
          g.offset(l, f[n], h[n]);
      }
      function Fl(l, f, g, k, h) {
        var n = []
          .concat(B(g.sa(l)))
          .filter(function(w) {
            return w !== f;
          })
          .sort(function(w, v) {
            return h.get(w) - h.get(v);
          });
        g = [].concat(B(g.sa(f))).filter(function(w) {
          return w !== l;
        });
        var r = k.orientation(l, f);
        Al(l, n, g, [r + (2 * Math.PI) / 3, r - (2 * Math.PI) / 3], k, h);
      }
      function Gl(l, f) {
        return {
          pc: function(g, k) {
            a: {
              var h = y(f.sa(l));
              for (var n = h.next(); !n.done; n = h.next())
                if (((n = n.value), g.has(n))) {
                  h = n;
                  break a;
                }
              h = void 0;
            }
            if (void 0 === h)
              if (4 > f.mc(l))
                for (k = 0, h = y(f.sa(l)), n = h.next(); !n.done; n = h.next())
                  g.offset(l, n.value, k), (k += (2 * Math.PI) / 3);
              else El(l, f, g, k);
            else 4 > f.mc(l) ? Fl(l, h, f, g, k) : Dl(l, h, f, g, k);
          }
        };
      }
      function Hl(l, f, g, k) {
        var h = void 0,
          n = [];
        l = y(g.sa(l));
        for (g = l.next(); !g.done; g = l.next())
          if (((g = g.value), !f.includes(g)))
            if (k.has(g))
              if (void 0 === h) h = g;
              else throw Error('illegal state');
            else n.push(g);
        return [h, n];
      }
      function ll(l, f) {
        return {
          pc: function(g) {
            var k = l.find(function(w) {
              return g.has(w);
            });
            if (void 0 === k) g.Gc(l);
            else {
              var h = y(Hl(k, l, f, g)),
                n = h.next().value;
              h = h.next().value;
              n = g.orientation(n, k);
              var r = ((f.mc(k) - 3) * Math.PI) / 3;
              r = n - 0.5 * r;
              g.Gc(Ec(l, k), r);
              n = -(n + Math.PI / 3);
              h = y(h);
              for (r = h.next(); !r.done; r = h.next())
                g.offset(k, r.value, n), (n -= Math.PI / 3);
            }
            k = y(l);
            for (h = k.next(); !h.done; h = k.next())
              (h = h.value), g.ye(h, f.sa(h));
          }
        };
      }
      function Ec(l, f) {
        f = l.indexOf(f);
        if (-1 === f) throw Error('non-member first');
        return l.slice(f).concat(l.slice(0, f));
      }
      function Yh(l, f) {
        for (var g = 1; g < l.length; g++) if (l[g] === f[g]) return !1;
        return !0;
      }
      function Il(l) {
        for (
          var f = [], g = new Map(), k = 0, h = y(l.za()), n = h.next();
          !n.done;
          n = h.next()
        )
          g.set(n.value, k++);
        k = y(l.za());
        for (h = k.next(); !h.done; h = k.next()) {
          n = h.value;
          h = new Map();
          var r = Sh(h, void 0, g);
          Xd(n, l, r);
          n = y(h.keys());
          for (r = n.next(); !r.done; r = n.next()) {
            r = r.value;
            for (
              var w = [], v = h.get(r), u = y(h.keys()), x = u.next();
              !x.done;
              x = u.next()
            )
              if (((x = x.value), l.Ob(x, r))) {
                var A = h.get(x);
                A.length + 1 === v.length
                  ? w.push(x)
                  : A.length === v.length &&
                    g.get(x) < g.get(r) &&
                    Yh(A, v) &&
                    f.push(v.concat(A.slice(1).reverse()));
              }
            v = y(w);
            for (u = v.next(); !u.done; u = v.next()) {
              u = u.value;
              x = h.get(u);
              A = y(w);
              for (var G = A.next(); !G.done; G = A.next()) {
                G = G.value;
                if (u === G) break;
                G = h.get(G);
                Yh(x, G) && f.push(x.concat(r, G.slice(1).reverse()));
              }
            }
          }
        }
        return f;
      }
      function Sh(l, f, g) {
        var k = !1,
          h;
        return {
          root: function(n) {
            l.set(n, [n]);
            h = void 0 === g ? void 0 : g.get(n);
          },
          $a: function(n, r, w) {
            if (k) throw Error('edge after abort');
            if ((void 0 === g || (!(g.get(r) > h) && l.has(n))) && !w) {
              n = l.get(n);
              if (void 0 === n) throw Error('unknown source');
              if (void 0 === l.get(r)) l.set(r, n.concat(r));
              else throw Error('invalid state');
              r === f && (k = !0);
            }
          },
          abort: function() {
            return void 0 === f ? !1 : k;
          },
          sa: function(n) {
            return n;
          }
        };
      }
      function Zh(l, f, g, k) {
        return [].concat(B(k.sa(g.sa(l)))).filter(function(h) {
          return h !== f;
        });
      }
      function Xd(l, f, g) {
        var k = [l],
          h = new Map();
        g.root(l);
        h.set(l, Zh(l, void 0, f, g));
        for (l = {}; 0 < k.length; ) {
          l.Oc = k.pop();
          for (var n = y(h.get(l.Oc)), r = n.next(); !r.done; r = n.next()) {
            r = r.value;
            if (g.abort()) return;
            h.has(r)
              ? (h.set(
                  r,
                  h.get(r).filter(
                    (function(w) {
                      return function(v) {
                        return v !== w.Oc;
                      };
                    })(l)
                  )
                ),
                g.$a(l.Oc, r, !0))
              : (g.$a(l.Oc, r, !1), k.unshift(r), h.set(r, Zh(r, l.Oc, f, g)));
          }
          l = { Oc: l.Oc };
        }
      }
      function Uh(l) {
        for (
          var f = new Map(), g = y(l.za()), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var h = k.value;
          f.set(h, l.mc(h));
        }
        for (g = 1; 8 > g; g++) {
          h = 3 * g;
          var n = new Map(f),
            r = y(l.za());
          for (k = r.next(); !k.done; k = r.next()) {
            k = k.value;
            for (
              var w = h * n.get(k), v = y(l.sa(k)), u = v.next();
              !u.done;
              u = v.next()
            )
              w += n.get(u.value);
            f.set(k, w);
          }
        }
        l = 0;
        g = y(f.values());
        for (h = g.next(); !h.done; h = g.next())
          (h = h.value), h > l && (l = h);
        if (0 === l)
          for (l = y(f.keys()), g = l.next(); !g.done; g = l.next())
            f.set(g.value, 1);
        else
          for (h = y(f.keys()), g = h.next(); !g.done; g = h.next())
            (g = g.value), f.set(g, f.get(g) / l);
        return f;
      }
      function jb(l, f) {
        if (!f.fb(l)) throw Error('no such atom');
        return l;
      }
      function Jl(l, f) {
        var g = jb(l, f);
        return void 0 === g.ga
          ? Fc[g.Xa].yf()
          : {
              dh: function() {
                return !1;
              },
              Tg: function() {
                return [g.ga];
              }
            };
      }
      function Kl(l) {
        var f = Af();
        da();
        ha();
        var g = l
          .za()
          [Symbol.iterator]()
          .next();
        !1 === g.done &&
          $h(g.value, l, {
            root: function() {},
            $a: function(k, h) {
              f.fb(k) || f.fb(h) || f.match(k, h);
            },
            abort: function() {
              return !1;
            },
            sa: function(k) {
              return k;
            }
          });
        return f;
      }
      function $h(l, f, g) {
        var k = [l],
          h = new Map([[l, [].concat(B(g.sa(f.sa(l)))).reverse()]]);
        g.root(l);
        for (l = {}; 0 < k.length && !g.abort(); ) {
          var n = k.pop(),
            r = h.get(n);
          if (0 !== r.length) {
            l.Ec = r.pop();
            var w = h.has(l.Ec);
            g.$a(n, l.Ec, w);
            0 < r.length && k.push(n);
            if (!w) {
              r = [];
              w = y(g.sa(f.sa(l.Ec)));
              for (var v = w.next(); !v.done; v = w.next())
                (v = v.value),
                  v !== n &&
                    (h.has(v) &&
                      h.set(
                        v,
                        h.get(v).filter(
                          (function(u) {
                            return function(x) {
                              return x !== u.Ec;
                            };
                          })(l)
                        )
                      ),
                    r.push(v));
              h.set(l.Ec, r.reverse());
              k.push(l.Ec);
            }
          }
          l = { Ec: l.Ec };
        }
      }
      function Ll(l, f) {
        if (0 === l) return 0;
        if (8 < l) return l - 8;
        if (4 <= f) return l % 2;
        f = 4 - f;
        return l > f ? 2 * f - l : l;
      }
      function Ml(l, f, g) {
        f = y(f.sa(l));
        for (var k = f.next(); !k.done; k = f.next())
          if (((k = k.value), !g.Ob(l, k))) return k;
      }
      function Nl(l, f, g) {
        l = y(l.za());
        for (var k = l.next(); !k.done; k = l.next())
          if (((k = k.value), !f.fb(k) && g.fb(k) && g.Jg(k))) return k;
      }
      function ai(l, f) {
        for (
          var g = Ol(), k = Pl(), h = y(f.mb()), n = h.next();
          !n.done;
          n = h.next()
        ) {
          var r = y(n.value);
          n = r.next().value;
          r = r.next().value;
          k.ya(n, r);
        }
        h = y(l.za());
        for (n = h.next(); !n.done; n = h.next())
          (n = n.value), f.fb(n) || g.ag(n);
        for (; void 0 !== (h = Nl(l, k, g)); ) {
          for (; void 0 !== (n = Ml(h, l, k)); ) {
            if (!g.fb(n))
              (r = [].concat(B(f.sa(n)))[0]), g.ya(h, n), g.ya(n, r);
            else if (!g.eh(n)) {
              if (g.root(h) !== g.root(n))
                return [].concat(B(g.path(h)), B(g.path(n).reverse()));
              a: {
                k = g.path(h);
                g = g.path(n);
                for (h = 0; h < Math.max(k.length, g.length); h++) {
                  if (h === k.length) {
                    g = g.slice(h - 1);
                    break a;
                  }
                  if (h === g.length) {
                    g = k.slice(h - 1);
                    break a;
                  }
                  if (k[h] !== g[h]) {
                    g = k.slice(h - 1).concat(g.slice(h).reverse());
                    break a;
                  }
                }
                throw Error('invalid state');
              }
              n = l;
              k = Fb();
              h = k.Ib();
              k.Va(g);
              r = y(n.za());
              for (var w = r.next(); !w.done; w = r.next())
                (w = w.value), g.includes(w) || k.Va(w);
              n = y(n.mb());
              for (r = n.next(); !r.done; r = n.next())
                (w = y(r.value)),
                  (r = w.next().value),
                  (w = w.next().value),
                  g.includes(r)
                    ? g.includes(w) || k.ya(g, w)
                    : g.includes(w)
                    ? k.ya(r, g)
                    : k.ya(r, w);
              k = h;
              n = f;
              h = Af();
              n = y(n.mb());
              for (r = n.next(); !r.done; r = n.next())
                (w = y(r.value)),
                  (r = w.next().value),
                  (w = w.next().value),
                  g.includes(r)
                    ? g.includes(w) || h.match(g, w)
                    : g.includes(w)
                    ? h.match(r, g)
                    : h.match(r, w);
              g = ai(k, h);
              k = f;
              f = Ql();
              h = y(g);
              for (n = h.next(); !n.done; n = h.next())
                (n = n.value),
                  (f = l.fb(n)
                    ? Rl(n, f)
                    : n === g[0]
                    ? Sl(n, l, k, f)
                    : n === g[g.length - 1]
                    ? Tl(n, l, k, f)
                    : Ul(n, l, k, f));
              l = [];
              f.xc(l, void 0);
              return l;
            }
            k.ya(h, n);
          }
          k.Va(h);
        }
        return [];
      }
      function bi(l, f) {
        f = void 0 === f ? Af() : f;
        var g = ai(l, f);
        if (0 < g.length) {
          var k = f;
          if (1 === g.length % 2) throw Error('odd paths not supported');
          for (var h = !0, n = 1; n < g.length; n++)
            h && k.match(g[n - 1], g[n]), (h = !h);
          return bi(l, f);
        }
        return f;
      }
      function Rl(l, f) {
        return {
          input: function() {
            return l;
          },
          xc: function(g) {
            g.unshift(l);
            f.xc(g, l);
          }
        };
      }
      function Ul(l, f, g, k) {
        var h = k.input(l),
          n = l.find(function(r) {
            return f.Ob(h, r);
          });
        if (void 0 === n) throw Error('invalid state');
        return {
          input: function() {},
          xc: function(r, w) {
            var v = l.find(function(x) {
                return f.Ob(w, x);
              }),
              u = ac(l, n, v);
            0 === u.length % 2 && (u = ac(l, v, n).reverse());
            r.unshift.apply(r, B(u));
            k.xc(r, n);
          }
        };
      }
      function Tl(l, f, g, k) {
        var h = l.find(function(v) {
            return !g.fb(v);
          }),
          n = k.input(l);
        if (void 0 === n) throw Error('invalid state');
        var r = l.find(function(v) {
            return f.Ob(v, n);
          }),
          w = ac(l, r, h);
        0 === w.length % 2 && (w = ac(l, h, r).reverse());
        return {
          input: function() {},
          xc: function(v) {
            v.unshift.apply(v, B(w));
            k.xc(v, r);
          }
        };
      }
      function Sl(l, f, g, k) {
        var h = l.find(function(n) {
          return !g.fb(n);
        });
        if (void 0 === h) throw Error('invalid state');
        return {
          input: function() {},
          xc: function(n, r) {
            if (void 0 === r) throw Error('blossom output not found');
            var w = l.find(function(u) {
                return f.Ob(r, u);
              }),
              v = ac(l, h, w);
            0 === v.length % 2 && (v = ac(l, w, h).reverse());
            n.unshift.apply(n, B(v));
            k.xc(n, h);
          }
        };
      }
      function Ql() {
        return { input: function() {}, xc: function() {} };
      }
      function ac(l, f, g) {
        f = l.indexOf(f);
        if (-1 === f) throw Error('no such source');
        l = l.slice(f).concat(l.slice(0, f));
        g = l.indexOf(g);
        if (-1 === g) throw Error('no such target');
        return l.slice(0, g + 1);
      }
      function Pl() {
        var l = new Set(),
          f = new Map();
        return {
          Va: function(g) {
            l.add(g);
          },
          ya: function(g, k) {
            var h = f.get(g);
            void 0 == h && ((h = new Set()), f.set(g, h));
            h.add(k);
            h = f.get(k);
            void 0 === h && ((h = new Set()), f.set(k, h));
            h.add(g);
          },
          fb: function(g) {
            return l.has(g);
          },
          Ob: function(g, k) {
            g = f.get(g);
            return void 0 === g ? !1 : g.has(k);
          }
        };
      }
      function Ol() {
        function l(g) {
          var k = f.get(g);
          if (void 0 === k) throw Error('no such node');
          for (g = [g]; null !== k; ) g.push(k), (k = f.get(k));
          return g.reverse();
        }
        var f = new Map();
        return {
          ag: function(g) {
            if (f.has(g)) throw Error('root must be non-member');
            f.set(g, null);
          },
          ya: function(g, k) {
            if (!f.has(g)) throw Error('parent must be member');
            if (f.has(k)) throw Error('node must be non-member');
            f.set(k, g);
          },
          fb: function(g) {
            return f.has(g);
          },
          Jg: function(g) {
            return 1 === l(g).length % 2;
          },
          eh: function(g) {
            return 0 === l(g).length % 2;
          },
          root: function(g) {
            return l(g)[0];
          },
          path: l
        };
      }
      function ci(l) {
        for (var f = [], g = y(l.keys()), k = g.next(); !k.done; k = g.next()) {
          k = k.value;
          for (var h = y(l.keys()), n = h.next(); !n.done; n = h.next()) {
            n = n.value;
            if (k === n) break;
            l.get(k) === n && f.push([n, k]);
          }
        }
        return f;
      }
      function Af() {
        var l = new Map();
        return {
          mc: function(f) {
            return l.has(f) ? 1 : 0;
          },
          mb: function() {
            return Array.from(ci(l));
          },
          Ob: function(f, g) {
            return l.get(f) === g;
          },
          weight: function() {},
          fb: function(f) {
            return l.has(f);
          },
          Ma: function() {
            return 0 === l.size;
          },
          sa: function(f) {
            f = l.get(f);
            return void 0 === f ? [] : [f];
          },
          za: function() {
            return l.keys();
          },
          order: function() {
            return l.size;
          },
          size: function() {
            return l.size / 2;
          },
          Tf: function() {
            return { za: Array.from(l.keys()), mb: Array.from(ci(l)) };
          },
          match: function(f, g) {
            l.delete(l.get(f));
            l.delete(f);
            l.delete(l.get(g));
            l.delete(g);
            l.set(f, g);
            l.set(g, f);
          },
          mi: function(f, g) {
            l.get(f) === g && (l.delete(f), l.delete(g));
          }
        };
      }
      function $d(l, f) {
        l = f.get(l);
        if (void 0 === l) throw Error('no such node');
        return l;
      }
      function Fb() {
        var l = new Map(),
          f = new Set(),
          g = {
            mc: function(k) {
              return $d(k, l).size;
            },
            mb: function() {
              return f.values();
            },
            Ob: function(k, h) {
              return $d(k, l).has(h);
            },
            fb: function(k) {
              return l.has(k);
            },
            Ma: function() {
              return 0 === l.size;
            },
            sa: function(k) {
              return $d(k, l).keys();
            },
            za: function() {
              return l.keys();
            },
            order: function() {
              return l.size;
            },
            size: function() {
              return f.size;
            },
            Tf: function() {
              return { za: Array.from(l.keys()), mb: Array.from(f) };
            },
            weight: function(k, h) {
              return $d(k, l).get(h);
            }
          };
        return {
          Va: function(k) {
            l.set(k, new Map());
            return k;
          },
          ya: function(k, h, n) {
            var r = l.get(k);
            if (void 0 === r) throw Error('unknown node');
            var w = l.get(h);
            if (void 0 === w) throw Error('unknown node');
            r.set(h, n);
            w.set(k, n);
            f.add([k, h, n]);
          },
          hb: function(k, h) {
            l.get(k).delete(h);
            l.get(h).delete(k);
            for (var n = y(f), r = n.next(); !r.done; r = n.next())
              (r = r.value),
                ((r[0] === k && r[1] === h) || (r[1] === k && r[0] === h)) &&
                  f.delete(r);
          },
          Ib: function() {
            return g;
          }
        };
      }
      function Bf(l, f, g) {
        var k = l.cursor() - 1;
        a: {
          var h = l.Lb();
          if (h.match(Vl)) h = l.pop();
          else if ('%' === h) {
            if ((l.pop(), (h = l.gc(Wl)), void 0 === h))
              throw Error('expected digits at ' + l.cursor());
          } else {
            l = void 0;
            break a;
          }
          l = parseInt(h);
        }
        if (void 0 === l) return !1;
        h = g.pe.get(l);
        if (void 0 === h)
          g.pe.set(l, { node: g.head, $a: g.$a, Qc: g.Qc, cursor: k });
        else {
          var n = g.$a;
          if (!h.Qc)
            if (g.Qc) n = h.$a;
            else if (!f.Ig(h.$a, g.$a))
              throw Error('ring bond mismatch at ' + h.cursor + ',' + k);
          g.ne.ya(g.head, h.node, n);
          g.pe.delete(l);
        }
        return !0;
      }
      function di(l, f, g) {
        l = f.$a(l);
        g.$a = l || f.Qc();
        g.Qc = void 0 === l;
        return void 0 !== l;
      }
      function Cf(l, f, g) {
        l = f.node(l);
        if (void 0 === l) return !1;
        g.ne.Va(l);
        void 0 !== g.head && g.ne.ya(g.head, l, g.$a);
        g.head = l;
        g.$a = void 0;
        g.Qc = !1;
        return !0;
      }
      function Df(l, f, g) {
        if (!Cf(l, f, g)) return !1;
        for (; !l.done(); ) {
          var k = l,
            h = f,
            n = g;
          a: {
            var r = k;
            for (var w = h, v = n; !r.done(); )
              if (di(r, w, v)) {
                var u = r,
                  x = w,
                  A = v;
                if (!Cf(u, x, A) && !Bf(u, x, A))
                  throw Error('node not found at ' + r.cursor());
              } else if (
                ((u = r), (x = w), (A = v), !Cf(u, x, A) && !Bf(u, x, A))
              ) {
                r = !1;
                break a;
              }
            r = !0;
          }
          if (!r)
            if (((r = k.cursor()), '(' === k.Lb())) {
              k.pop();
              if (
                void 0 === n.head ||
                (0 < n.stack.length && n.stack[n.stack.length - 1] === n.head)
              )
                throw Error('unexpected open paren at ' + r);
              n.stack.push(n.head);
              di(k, h, n);
              if (!Df(k, h, n) && !Bf(k, h, n))
                throw Error('empty branch at ' + k.cursor());
              for (; Df(k, h); );
              if (')' === k.Lb()) k.pop();
              else throw Error('branch not closed at ' + k.cursor());
              if (0 === n.stack.length) throw Error('unbalanced close paren');
              n.head = n.stack.pop();
              r = !0;
            } else r = !1;
          if (!r) break;
        }
        return !0;
      }
      function Xl(l) {
        function f() {
          if (g === l.length) throw Error('unexpected end of input');
        }
        var g = 0;
        return {
          cursor: function() {
            return g;
          },
          Lb: function() {
            f();
            return l[g];
          },
          pop: function() {
            f();
            return l[g++];
          },
          done: function() {
            return g === l.length;
          },
          gc: function(k) {
            if (!k.global) throw Error('regex global flag must be set');
            f();
            k.lastIndex = g;
            var h = k.exec(l);
            if (null !== h && h.index === g) return (g = k.lastIndex), h[0];
          }
        };
      }
      for (
        var Yl = /B[r]?|C[l]?|N|O|P|S|F|I/g,
          Zl = /[bcnops]/g,
          $l = /A[cglmrstu]|B[aehikr]?|C[adeflmnorsu]?|D[bsy]|E[rsu]|F[elmr]?|G[ade]|H[efgos]?|I[nr]?|Kr?|L[airuv]|M[cdgnot]|N[abdehiop]?|O[gs]?|P[abdmortu]?|R[abefghnu]|S[bcegimnr]?|T[abcehilms]|U(u[opst])?|V|W|Xe|Yb?|Z[nr]/g,
          am = /as|[bcnop]|se?/g,
          ei = {
            as: 'As',
            b: 'B',
            c: 'C',
            n: 'N',
            o: 'O',
            p: 'P',
            s: 'S',
            se: 'Se'
          },
          bm = /@(@|TH[1-2]|AL[1-2]|SP[1-3]|TB(1[0-9]?|20?)|OH(1[0-9]?|2[0-9]?|30?))?/g,
          fi = /\d{1,3}/g,
          cm = /[-=#$.:\/\\]/g,
          dm = {
            '.': function() {
              return { order: 0, ab: !1, Bc: 0 };
            },
            '-': function() {
              return { order: 1, ab: !1, Bc: 0 };
            },
            '=': function() {
              return { order: 2, ab: !1, Bc: 0 };
            },
            '#': function() {
              return { order: 3, ab: !1, Bc: 0 };
            },
            $: function() {
              return { order: 4, ab: !1, Bc: 0 };
            },
            ':': function() {
              return { order: 1, ab: !0, Bc: 0 };
            },
            '/': function() {
              return { order: 1, ab: !1, Bc: 1 };
            },
            '\\': function() {
              return { order: 1, ab: !1, Bc: -1 };
            }
          },
          Vl = /\d/,
          Wl = /\d\d/g,
          Ef = '* H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og'.split(
            ' '
          ),
          gi = [
            0,
            1,
            18,
            1,
            2,
            13,
            14,
            15,
            16,
            17,
            18,
            1,
            2,
            13,
            14,
            15,
            16,
            17,
            18,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            1,
            2,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            1,
            2,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18
          ],
          hi = [
            0,
            1,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7
          ],
          ii = [
            0,
            1,
            2,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            3,
            4,
            5,
            6,
            7,
            8,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            3,
            4,
            5,
            6,
            7,
            8,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            3,
            4,
            5,
            6,
            7,
            8,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18
          ],
          em = [
            [],
            [1, 2],
            [3, 4],
            [6, 7],
            [9],
            [10, 11],
            [12, 13],
            [14, 15],
            [16, 17, 18],
            [19],
            [20, 21, 22],
            [23],
            [24, 25, 26],
            [27],
            [28, 29, 30],
            [31],
            [32, 33, 34, 36],
            [35, 37],
            [36, 38, 40]
          ],
          fm = [
            void 0,
            1,
            4,
            7,
            9,
            5,
            12,
            7,
            16,
            19,
            20,
            23,
            24,
            26,
            28,
            31,
            32,
            35,
            40
          ],
          Fc = {},
          ra = {},
          ji = y(Ef.entries()),
          Ff = ji.next();
        !Ff.done;
        ra = { ob: ra.ob, he: ra.he }, Ff = ji.next()
      ) {
        var ki = y(Ff.value);
        ra.ob = ki.next().value;
        var gm = ki.next().value;
        ra.he = {
          dh: function() {
            return !0;
          },
          Tg: (function(l) {
            return function() {
              return em[l.ob].values();
            };
          })(ra)
        };
        Fc[gm] = Object.freeze({
          ja: (function(l) {
            return function() {
              return l.ob;
            };
          })(ra),
          Xa: (function(l) {
            return function() {
              return Ef[l.ob];
            };
          })(ra),
          group: (function(l) {
            return function() {
              return gi[l.ob];
            };
          })(ra),
          $h: (function(l) {
            return function() {
              return hi[l.ob];
            };
          })(ra),
          Ae: (function(l) {
            return function() {
              return ii[l.ob];
            };
          })(ra),
          yf: (function(l) {
            return function() {
              return l.he;
            };
          })(ra),
          ki: (function(l) {
            return function() {
              return fm[l.ob];
            };
          })(ra),
          Tf: (function(l) {
            return function() {
              return {
                ja: l.ob,
                Xa: Ef[l.ob],
                group: gi[l.ob],
                $h: hi[l.ob],
                Ae: ii[l.ob]
              };
            };
          })(ra)
        });
      }
      var hm = {
          B: [3],
          C: [4],
          N: [3, 5],
          O: [2],
          P: [3, 5],
          S: [2, 4, 6],
          F: [1],
          Cl: [1],
          Br: [1],
          I: [1],
          At: [1]
        },
        im = function g(f) {
          var k, h, n, r, w, v, u, x, A;
          return Aa(g, function(G) {
            1 == G.aa && ((k = new Set()), (h = y(f.za())), (n = h.next()));
            if (3 != G.aa) {
              if (n.done) {
                G.aa = 0;
                return;
              }
              r = n.value;
              if (k.has(r)) {
                G.aa = 3;
                return;
              }
              w = Fb();
              v = xl(f, w);
              $h(r, f, v);
              u = y(w.Ib().za());
              for (x = u.next(); !x.done; x = u.next()) (A = x.value), k.add(A);
              var N = w.Ib();
              G.aa = 3;
              return { value: N };
            }
            n = h.next();
            G.aa = 2;
          });
        };
      sa(t, Error);
      for (
        var Dc = {
            H: { ja: 1, ga: 1, ka: [1] },
            He: { ja: 2, ga: 4, ka: [0] },
            Li: { ja: 3, ga: 7, ka: [] },
            Be: { ja: 4, ga: 9, ka: [] },
            B: { ja: 5, ga: 11, ka: [3] },
            C: { ja: 6, ga: 12, ka: [4] },
            N: { ja: 7, ga: 14, ka: [3] },
            O: { ja: 8, ga: 16, ka: [2] },
            F: { ja: 9, ga: 19, ka: [1] },
            Ne: { ja: 10, ga: 20, ka: [0] },
            Na: { ja: 11, ga: 23, ka: [] },
            Mg: { ja: 12, ga: 24, ka: [] },
            Al: { ja: 13, ga: 27, ka: [] },
            Si: { ja: 14, ga: 28, ka: [4] },
            P: { ja: 15, ga: 31, ka: [3, 5] },
            S: { ja: 16, ga: 32, ka: [2, 4, 6] },
            Cl: { ja: 17, ga: 35, ka: [1, 3, 5, 7] },
            Ar: { ja: 18, ga: 40, ka: [0] },
            K: { ja: 19, ga: 39, ka: [] },
            Ca: { ja: 20, ga: 40, ka: [] },
            Sc: { ja: 21, ga: 45, ka: [] },
            Ti: { ja: 22, ga: 48, ka: [] },
            V: { ja: 23, ga: 51, ka: [] },
            Cr: { ja: 24, ga: 52, ka: [] },
            Mn: { ja: 25, ga: 55, ka: [] },
            Fe: { ja: 26, ga: 56, ka: [] },
            Co: { ja: 27, ga: 59, ka: [] },
            Ni: { ja: 28, ga: 58, ka: [] },
            Cu: { ja: 29, ga: 63, ka: [] },
            Zn: { ja: 30, ga: 64, ka: [] },
            Ga: { ja: 31, ga: 69, ka: [] },
            Ge: { ja: 32, ga: 74, ka: [] },
            As: { ja: 33, ga: 75, ka: [] },
            Se: { ja: 34, ga: 80, ka: [] },
            Br: { ja: 35, ga: 79, ka: [] },
            Kr: { ja: 36, ga: 84, ka: [] },
            Rb: { ja: 37, ga: 85, ka: [] },
            Sr: { ja: 38, ga: 88, ka: [] },
            Y: { ja: 39, ga: 89, ka: [] },
            Zr: { ja: 40, ga: 90, ka: [] },
            Nb: { ja: 41, ga: 93, ka: [] },
            Mo: { ja: 42, ga: 98, ka: [] },
            Tc: { ja: 43, ga: 98, ka: [] },
            Ru: { ja: 44, ga: 102, ka: [] },
            Rh: { ja: 45, ga: 103, ka: [] },
            Pd: { ja: 46, ga: 106, ka: [] },
            Ag: { ja: 47, ga: 107, ka: [] },
            Cd: { ja: 48, ga: 114, ka: [] },
            In: { ja: 49, ga: 115, ka: [] },
            Sn: { ja: 50, ga: 120, ka: [] },
            Sb: { ja: 51, ga: 121, ka: [] },
            Te: { ja: 52, ga: 130, ka: [] },
            I: { ja: 53, ga: 127, ka: [] },
            Xe: { ja: 54, ga: 132, ka: [] },
            Cs: { ja: 55, ga: 133, ka: [] },
            Ba: { ja: 56, ga: 138, ka: [] },
            La: { ja: 57, ga: 139, ka: [] },
            Ce: { ja: 58, ga: 140, ka: [] },
            Pr: { ja: 59, ga: 141, ka: [] },
            Nd: { ja: 60, ga: 144, ka: [] },
            Pm: { ja: 61, ga: 141, ka: [] },
            Sm: { ja: 62, ga: 152, ka: [] },
            Eu: { ja: 63, ga: 153, ka: [] },
            Gd: { ja: 64, ga: 158, ka: [] },
            Tb: { ja: 65, ga: 159, ka: [] },
            Dy: { ja: 66, ga: 164, ka: [] },
            Ho: { ja: 67, ga: 165, ka: [] },
            Er: { ja: 68, ga: 166, ka: [] },
            Tm: { ja: 69, ga: 169, ka: [] },
            Yb: { ja: 70, ga: 174, ka: [] },
            Lu: { ja: 71, ga: 175, ka: [] },
            Hf: { ja: 72, ga: 180, ka: [] },
            Ta: { ja: 73, ga: 181, ka: [] },
            W: { ja: 74, ga: 184, ka: [] },
            Re: { ja: 75, ga: 187, ka: [] },
            Os: { ja: 76, ga: 192, ka: [] },
            Ir: { ja: 77, ga: 193, ka: [] },
            Pt: { ja: 78, ga: 195, ka: [] },
            Au: { ja: 79, ga: 197, ka: [] },
            Hg: { ja: 80, ga: 202, ka: [] },
            Tl: { ja: 81, ga: 205, ka: [] },
            Pb: { ja: 82, ga: 208, ka: [] },
            Bi: { ja: 83, ga: 209, ka: [] },
            Po: { ja: 84, ga: 209, ka: [] },
            At: { ja: 85, ga: 210, ka: [] },
            Rn: { ja: 86, ga: 222, ka: [] },
            Fr: { ja: 87, ga: 223, ka: [] },
            Ra: { ja: 88, ga: 226, ka: [] },
            Ac: { ja: 89, ga: 227, ka: [] },
            Th: { ja: 90, ga: 232, ka: [] },
            Pa: { ja: 91, ga: 231, ka: [] },
            U: { ja: 92, ga: 238, ka: [] },
            Np: { ja: 93, ga: 237, ka: [] },
            Pu: { ja: 94, ga: 244, ka: [] },
            Am: { ja: 95, ga: 243, ka: [] },
            Cm: { ja: 96, ga: 247, ka: [] },
            Bk: { ja: 97, ga: 247, ka: [] },
            Cf: { ja: 98, ga: 251, ka: [] },
            Es: { ja: 99, ga: 252, ka: [] },
            Fm: { ja: 100, ga: 257, ka: [] },
            Md: { ja: 101, ga: 258, ka: [] },
            No: { ja: 102, ga: 259, ka: [] },
            Lr: { ja: 103, ga: 262, ka: [] },
            Rf: { ja: 104, ga: 263, ka: [] },
            Db: { ja: 105, ga: 268, ka: [] },
            Sg: { ja: 106, ga: 269, ka: [] },
            Bh: { ja: 107, ga: 270, ka: [] },
            Hs: { ja: 108, ga: 269, ka: [] },
            Mt: { ja: 109, ga: 278, ka: [] },
            Ds: { ja: 110, ga: 281, ka: [] },
            Rg: { ja: 111, ga: 282, ka: [] },
            Cn: { ja: 112, ga: 285, ka: [] },
            Nh: { ja: 113, ga: 283, ka: [] },
            Fl: { ja: 114, ga: 289, ka: [] },
            Mc: { ja: 115, ga: 290, ka: [] },
            Lv: { ja: 116, ga: 293, ka: [] },
            Ts: { ja: 117, ga: 294, ka: [] },
            Og: { ja: 118, ga: 294, ka: [] }
          },
          Qh = [],
          li = y(Object.keys(Dc)),
          Gf = li.next();
        !Gf.done;
        Gf = li.next()
      ) {
        var mi = Dc[Gf.value];
        Qh[mi.ja] = mi.ka;
      }
      var kl = [
          [5, 9],
          [13, 17],
          [31, 35],
          [49, 53],
          [81, 85],
          [113, 117]
        ],
        il = [0, 3, 2, 1, 0, -1, -2, -3],
        jl = [0, 2, 1, 2],
        hl = {
          'M  CHG': function(f) {
            return f.Sf;
          },
          'M  RAD': function(f) {
            return f.$d;
          },
          'M  ISO': function(f) {
            return f.Ed;
          }
        };
      return {
        Eg: {
          Dg: function() {
            return {
              node: function(f) {
                a: {
                  var g = f.gc(Yl);
                  var k = !1;
                  if (void 0 === g) {
                    g = f.gc(Zl);
                    if (void 0 === g) {
                      g = !1;
                      break a;
                    }
                    g = ei[g];
                    k = !0;
                  }
                  g = { Xa: g, ab: k };
                }
                if (!g)
                  if ('[' === f.Lb()) {
                    f.pop();
                    g = { Xa: void 0, ab: !1 };
                    k = f.gc(fi);
                    void 0 !== k && (g.ga = parseInt(k));
                    k = f.gc($l);
                    if (void 0 === k) {
                      k = f.gc(am);
                      if (void 0 === k)
                        throw Error('unknown atom symbol at ' + f.cursor());
                      g.ab = !0;
                      k = ei[k];
                    }
                    g.Xa = k;
                    '@' === f.Lb() && (g.Dc = f.gc(bm));
                    'H' !== f.Lb()
                      ? (g.wb = 0)
                      : (f.pop(),
                        (g.wb = f.Lb().match(/\d/) ? parseInt(f.pop()) : 1));
                    k = f.Lb();
                    if ('+' === k || '-' === k) {
                      var h = parseInt(f.pop() + '1');
                      k = f.Lb();
                      if (k.match(/\d/))
                        h =
                          '1' === k
                            ? h * parseInt(f.gc(/\d\d?/g))
                            : h * parseInt(f.pop());
                      else if ('+' === k || '-' === k) {
                        var n = parseInt(k + '1');
                        if (h === n) (h += n), f.pop();
                        else
                          throw Error(
                            'unexpected token ' + k + ' at ' + f.cursor()
                          );
                      }
                      g.kb = h;
                    }
                    if (':' === f.Lb()) {
                      f.pop();
                      k = f.gc(fi);
                      k = void 0 === k ? void 0 : parseInt(k);
                      if (void 0 === k)
                        throw Error('expected digit at ' + f.cursor());
                      g.hi = k;
                    }
                    if (']' === f.Lb()) f.pop();
                    else throw Error('expected ] at ' + f.cursor());
                  } else g = void 0;
                return g;
              },
              $a: function(f) {
                f = dm[f.gc(cm)];
                return void 0 === f ? void 0 : f();
              },
              Qc: function() {
                return { order: 1, ab: !1, Bc: 0 };
              },
              Ig: function(f, g) {
                return f.order === g.order && f.ab === g.ab && f.Bc === g.ji;
              }
            };
          },
          parse: function(f, g, k) {
            f = Xl(f);
            Df(f, g, {
              ne: k,
              $a: void 0,
              head: void 0,
              stack: [],
              pe: new Map()
            });
            if (!f.done())
              throw Error('unexpected token ' + f.Lb() + ' at ' + f.cursor());
          },
          Ug: function(f) {
            var g = f.Ib(),
              k = Fb();
            f = k.Ib();
            for (var h = y(g.za()), n = h.next(); !n.done; n = h.next()) {
              n = n.value;
              var r;
              if ((r = n.ab))
                if (((r = g), !1 === n.ab)) r = !1;
                else {
                  for (
                    var w = void 0 === n.wb ? 0 : n.wb,
                      v = Fc[n.Xa].Ae(),
                      u = y(r.sa(n)),
                      x = u.next();
                    !x.done;
                    x = u.next()
                  )
                    v -= r.weight(n, x.value).order;
                  r = 0 < Ll(v - w, r.mc(n) + w);
                }
              r && k.Va(n);
            }
            g = y(g.mb());
            for (h = g.next(); !h.done; h = g.next())
              (r = y(h.value)),
                (h = r.next().value),
                (n = r.next().value),
                (r = r.next().value),
                f.fb(h) && f.fb(n) && k.ya(h, n, r);
            k = bi(f, Kl(f));
            if (k.order() !== f.order()) throw Error('no perfect matching');
            f = y(f.mb());
            for (g = f.next(); !g.done; g = f.next())
              (n = y(g.value)),
                (g = n.next().value),
                (h = n.next().value),
                (n = n.next().value),
                (n.order = k.Ob(g, h) ? 2 : 1),
                (n.ab = !1),
                (g.ab = !1),
                (h.ab = !1);
          },
          Zd: function(f) {
            f = f.Ib();
            for (var g = y(f.za()), k = g.next(); !k.done; k = g.next())
              if (((k = k.value), void 0 === k.wb)) {
                var h = hm[k.Xa];
                if (void 0 !== h) {
                  for (
                    var n = 0, r = y(f.sa(k)), w = r.next();
                    !w.done;
                    w = r.next()
                  )
                    n += f.weight(k, w.value).order;
                  h = y(h);
                  for (r = h.next(); !r.done; r = h.next())
                    if (((r = r.value), r >= n)) {
                      k.wb = r - n;
                      break;
                    }
                }
              }
          },
          Bg: function(f) {
            return Object.assign({}, f, {
              element: function(g) {
                g = jb(g, f);
                return Fc[g.Xa];
              },
              yf: function(g) {
                return Jl(g, f);
              },
              ii: function(g) {
                var k = jb(g, f),
                  h = Fc[k.Xa].Ae();
                h -= void 0 === k.wb ? 0 : k.wb;
                for (var n = y(f.sa(g)), r = n.next(); !r.done; r = n.next())
                  h -= f.weight(g, r.value).order;
                return (h -= void 0 === k.kb ? 0 : k.kb);
              },
              ni: function(g) {
                g = jb(g, f);
                return void 0 === g.wb ? 0 : g.wb;
              },
              ei: function(g) {
                g = jb(g, f);
                return void 0 === g.kb ? 0 : g.kb;
              },
              $b: function(g) {
                var k = jb(g, f);
                k = void 0 === k.wb ? 0 : k.wb;
                for (var h = y(f.sa(g)), n = h.next(); !n.done; n = h.next())
                  k += f.weight(g, n.value).order;
                return k;
              },
              qf: function(g, k) {
                g = jb(g, f);
                k = jb(k, f);
                k = f.weight(g, k);
                return void 0 === k ? 0 : k.order;
              }
            });
          }
        },
        $g: {
          ci: function(f) {
            f = q(f);
            var g = d();
            f.next();
            f.next();
            f.next();
            var k = [f.sc(0, 3, !0), f.sc(3, 6, !0), f.sc(12, 15)];
            f.next();
            var h = y(k);
            k = h.next().value;
            h = h.next().value;
            for (var n = 0; n < k; n++) {
              try {
                g.jc({
                  x: f.$c(0, 10),
                  y: f.$c(10, 20),
                  z: f.$c(20, 30),
                  Xa: f.Hd(31, 34),
                  Ef: f.$c(34, 36),
                  Oe: f.$c(36, 39),
                  $b: f.$c(48, 51)
                });
              } catch (r) {
                throw new t(r.message, f.lineNumber());
              }
              f.next();
            }
            for (k = 0; k < h; k++) {
              try {
                g.Pc({
                  first: f.sc(0, 3),
                  second: f.sc(3, 6),
                  type: f.sc(6, 9),
                  Dc: f.sc(9, 12)
                });
              } catch (r) {
                throw new t(r.message, f.lineNumber());
              }
              f.next();
            }
            c(f, g);
            if ('M  END' !== f.line())
              throw new t('end of file', f.lineNumber());
            return g;
          },
          bh: function(f) {
            var g = [];
            g.push(f.ue().Xd());
            var k = [],
              h = f.ue();
            k.push(h.ee().padStart(2));
            k.push(h.yd().padStart(8));
            h = new Date(h.timestamp());
            k.push((h.getMonth() + 1).toString().padStart(2, '0'));
            k.push(
              h
                .getDate()
                .toString()
                .padStart(2, '0')
            );
            k.push(
              h
                .getFullYear()
                .toString()
                .slice(2)
            );
            k.push(
              h
                .getHours()
                .toString()
                .padStart(2, '0')
            );
            k.push(
              h
                .getMinutes()
                .toString()
                .padStart(2, '0')
            );
            k.push(f.Gg() + 'D');
            g.push(k.join(''));
            g.push(f.ue().od());
            k = [];
            k.push(
              f
                .Fc()
                .toString()
                .padStart(3)
            );
            k.push(
              f
                .le()
                .toString()
                .padStart(3)
            );
            k.push('  0');
            k.push('  0');
            k.push((f.wg() ? 1 : 0).toString().padStart(3));
            for (h = 0; 5 > h; h++) k.push('  0');
            k.push('999');
            k.push(' V2000');
            g.push(k.join(''));
            for (k = 0; k < f.Fc(); k++) {
              h = [];
              var n = f.kd(k + 1);
              h.push(n.x.toFixed(4).padStart(10));
              h.push(n.y.toFixed(4).padStart(10));
              h.push(n.z.toFixed(4).padStart(10));
              h.push(' ');
              h.push(n.Xa.padEnd(3));
              h.push(' 0');
              h.push('  0');
              h.push('  0');
              h.push('  0');
              h.push('  0');
              h.push(n.$b.toString().padStart(3));
              h.push('  0');
              h.push('  0');
              h.push('  0');
              h.push('  0');
              h.push('  0');
              h.push('  0');
              g.push(h.join(''));
            }
            for (k = 1; k <= f.le(); k++)
              (h = []),
                (n = f.Me(k)),
                h.push(n.first.toString().padStart(3)),
                h.push(n.second.toString().padStart(3)),
                h.push(n.type.toString().padStart(3)),
                h.push(n.Dc.toString().padStart(3)),
                h.push('  0'),
                h.push('  0'),
                h.push('  0'),
                g.push(h.join(''));
            k = [];
            for (h = 1; h <= f.Fc(); h++)
              (n = f.kd(h)), 0 !== n.kb && k.push([h, n.kb]);
            h = [];
            for (n = 1; n <= f.Fc(); n++) {
              var r = f.kd(n);
              0 !== r.ga && h.push([n, r.ga]);
            }
            n = [];
            for (r = 1; r <= f.Fc(); r++) {
              var w = f.kd(r);
              0 !== w.Wb && n.push([r, w.Wb]);
            }
            a('M  CHG', 8, k, g);
            a('M  ISO', 8, h, g);
            a('M  RAD', 8, n, g);
            k = {};
            for (h = 1; h <= f.Fc(); h++)
              for (
                n = f.zd(h), r = y(Object.keys(n)), w = r.next();
                !w.done;
                w = r.next()
              ) {
                w = w.value;
                var v = k[w];
                void 0 === v && ((v = []), (k[w] = v));
                v.push([h, n[w]]);
              }
            f = y(Object.keys(k));
            for (w = f.next(); !w.done; w = f.next())
              (h = w.value), a('C  ' + h, 8, k[h], g);
            g.push('M  END');
            return g.join('\n');
          },
          zg: d,
          Fg: e,
          yg: m
        },
        xe: {
          pc: function(f, g) {
            var k = Ma(Il(f), f),
              h = zl(k);
            k = Fb();
            var n = new Map(),
              r = Uh(f);
            h = y(im(h));
            for (var w = h.next(); !w.done; w = h.next()) {
              var v = w.value;
              w = z(v, f);
              v = y(v.za());
              for (var u = v.next(); !u.done; u = v.next()) {
                u = y(u.value);
                for (var x = u.next(); !x.done; x = u.next()) n.set(x.value, w);
              }
              k.Va(w);
            }
            h = y(f.mb());
            for (w = h.next(); !w.done; w = h.next())
              (v = y(w.value)),
                (w = v.next().value),
                (v = v.next().value),
                3 === f.qf(w, v) &&
                  ((u = rl(w, v, f)), n.set(w, u), n.set(v, u), k.Va(u));
            h = y(f.za());
            for (w = h.next(); !w.done; w = h.next())
              (w = w.value),
                n.has(w) ||
                  ((v = D(w, f) ? ql(w, f) : Gl(w, f)), n.set(w, v), k.Va(v));
            h = y(f.mb());
            for (w = h.next(); !w.done; w = h.next())
              (v = y(w.value)),
                (w = v.next().value),
                (v = v.next().value),
                (w = n.get(w)),
                (v = n.get(v)),
                w !== v && k.ya(w, v);
            f = Vh(f.za(), function(A) {
              return r.get(A);
            });
            Xd(n.get(f), k.Ib(), {
              root: function(A) {
                return A.pc(g, r);
              },
              $a: function(A, G) {
                return G.pc(g, r);
              },
              abort: function() {
                return !1;
              },
              sa: function(A) {
                return A;
              }
            });
          },
          Cg: function() {
            function f(v, u, x) {
              var A = r(v, u),
                G = (2 * Math.PI) / (x.length + 2);
              v = n(v, u);
              v -= G;
              x = y(x);
              for (var N = x.next(); !N.done; N = x.next())
                (N = N.value), g(u, N, v, A), (v -= G), (u = N);
            }
            function g(v, u, x, A) {
              x = void 0 === x ? 0 : x;
              A = void 0 === A ? 1 : A;
              v = h(v);
              k(u, v.x + A * Math.cos(x), v.y + A * Math.sin(x));
            }
            function k(v, u, x) {
              u = void 0 === u ? 0 : u;
              x = void 0 === x ? 0 : x;
              v = h(v);
              v.x = u;
              v.y = x;
            }
            function h(v) {
              var u = w.get(v);
              void 0 === u && ((u = { x: 0, y: 0 }), w.set(v, u));
              return u;
            }
            function n(v, u) {
              var x = h(v);
              v = x.x;
              x = x.y;
              u = h(u);
              return Math.atan2(u.y - x, u.x - v);
            }
            function r(v, u) {
              var x = h(v);
              v = x.x;
              x = x.y;
              u = h(u);
              v = u.x - v;
              u = u.y - x;
              return Math.sqrt(v * v + u * u);
            }
            var w = new Map();
            return {
              get: function(v) {
                v = h(v);
                return [v.x, v.y];
              },
              has: function(v) {
                return w.has(v);
              },
              li: function(v, u) {
                v = h(v);
                u = h(u);
                var x = v.x,
                  A = v.y,
                  G = u.y;
                v.x = u.x;
                v.y = G;
                u.x = x;
                u.y = A;
              },
              Qd: r,
              orientation: n,
              set: k,
              offset: g,
              translate: function(v, u, x) {
                u = void 0 === u ? 0 : u;
                x = void 0 === x ? 0 : x;
                v = h(v);
                v.x += u;
                v.y += x;
              },
              Gc: function(v, u, x) {
                u = void 0 === u ? 0 : u;
                x = void 0 === x ? 1 : x;
                if (w.has(v[1])) f(v[0], v[1], v.slice(2));
                else {
                  var A = (2 * Math.PI) / v.length;
                  u += (Math.PI - A) / 2;
                  var G = v[0];
                  v = y(v);
                  for (var N = v.next(); !N.done; N = v.next())
                    (N = N.value),
                      N !== G && (g(G, N, u, x), (u -= A), (G = N));
                }
              },
              dg: function(v, u, x, A) {
                A = void 0 === A ? 1 : A;
                var G = r(v, u),
                  N = Math.asin(
                    (G -
                      (1 < x.length
                        ? A / Math.tan(Math.PI / (2 * x.length))
                        : 0)) /
                      2 /
                      A
                  );
                G = n(v, u) - Math.PI / 2;
                g(u, x[0], G - N, A);
                u = Math.PI / x.length;
                v = x[0];
                G -= u;
                x = y(x.slice(1));
                for (N = x.next(); !N.done; N = x.next())
                  (N = N.value), g(v, N, G, A), (G -= u), (v = N);
              },
              rf: f,
              ye: function(v, u, x) {
                x = void 0 === x ? 1 : x;
                var A = [],
                  G = 0,
                  N = 0,
                  ja = 0,
                  qa = y(u);
                for (u = qa.next(); !u.done; u = qa.next())
                  (u = u.value),
                    void 0 === w.get(u)
                      ? A.push(u)
                      : ((G += Math.cos(n(v, u))),
                        (N += Math.sin(n(v, u))),
                        ja++);
                if (0 === ja) throw Error('two fixed neighbors required');
                G =
                  Math.atan2(N / ja, G / ja) +
                  Math.PI +
                  (Math.PI / 6) * (A.length - 1);
                A = y(A);
                for (u = A.next(); !u.done; u = A.next())
                  g(v, u.value, G, x), (G -= Math.PI / 3);
              }
            };
          }
        },
        Ib: { xg: Fb }
      };
    })(),
    Dg = Cg.Eg,
    Eg = Cg.xe,
    Fg = Cg.$g,
    Gg = Cg.Ib;
  function Hg(a, b) {
    var c = Dg.Dg(),
      d = Gg.xg(),
      e = d.Ib();
    Dg.parse(a, c, d);
    Dg.Ug(d);
    Dg.Zd(d);
    a = Dg.Bg(e);
    c = Eg.Cg();
    Eg.pc(a, c);
    a = new Map();
    d = y(e.za());
    for (var m = d.next(); !m.done; m = d.next()) {
      m = m.value;
      var q = m.Xa,
        t = y(c.get(m)),
        z = t.next().value,
        D = t.next().value;
      t = t.next().value;
      q = b.jc(q, z, D, t);
      void 0 !== m.kb && q.tc(m.kb);
      a.set(m, q);
    }
    c = y(e.mb());
    for (d = c.next(); !d.done; d = c.next())
      (q = y(d.value)),
        (d = q.next().value),
        (m = q.next().value),
        (q = q.next().value.order),
        b.Pc(a.get(d), a.get(m), 2 * q);
    b = y(e.za());
    for (m = b.next(); !m.done; m = b.next())
      (e = m.value), a.get(e).reduce(e.wb);
  }
  function Ig(a, b) {
    a = Fg.ci(a);
    for (var c = 1; c <= a.Fc(); c++) {
      var d = c,
        e = b,
        m = a.kd(d),
        q = m.ga,
        t = m.kb,
        z = m.Wb;
      e = e.jc(m.Xa, m.x, m.y);
      e.tc(t);
      e.Ed(q);
      switch (z) {
        case 1:
          of(e);
          of(e);
          break;
        case 2:
          of(e);
          break;
        case 3:
          of(e), of(e), of(e);
      }
      '1' === a.ai(d, 'MKA') && Pe(e, !0);
    }
    c = b.aa;
    for (d = 1; d <= a.le(); d++)
      (q = a.Me(d)),
        (t = q.Dc),
        We(b.Pc(c[q.first - 1], c[q.second - 1], 2 * q.type), Jg[t]);
    for (b = 1; b <= a.Fc(); b++) c[b - 1].reduce(a.wb(b));
  }
  var Jg = [Ve, 'wedge', void 0, 'cis-or-trans', 'either', void 0, 'hash'];
  function Kg(a) {
    var b = Fg.yg({ yd: Lg, od: Mg });
    b = Fg.zg(b);
    for (var c = y(a.aa), d = c.next(); !d.done; d = c.next()) {
      d = d.value;
      var e = d.ha().Zb,
        m = d.ra();
      e = b.jc({ Xa: e, x: m.x, y: m.y, z: m.z, $b: Ng(d, e, d.rc()) });
      b.Sf(e, d.rc());
      void 0 !== d.Rc() && b.Ed(e, d.Rc().yc);
      switch (d.Ab) {
        case qf:
          b.$d(e, 1);
          break;
        case pf:
          b.$d(e, 2);
          break;
        case rf:
          b.$d(e, 3);
      }
      d.fa && b.setProperty(e, Og, 1);
    }
    a = y(a.Eb());
    for (c = a.next(); !c.done; c = a.next())
      (c = c.value),
        b.Pc({
          first: Me(c.ta) + 1,
          second: Me(c.Ka()) + 1,
          type: c.Ea / 2,
          Dc: Pg[c.Fb()]
        });
    return Fg.bh(b);
  }
  function Ng(a, b, c) {
    for (var d = a.Uc(), e = y(a.Eb()), m = e.next(); !m.done; m = e.next())
      d += m.value.Ea / 2;
    d += Qg[a.Ab];
    return Fg.Fg(b, c).includes(d) ? 0 : 0 === d ? 15 : d;
  }
  var Rg = {},
    Pg =
      ((Rg[Ve] = 0),
      (Rg.wedge = 1),
      (Rg['cis-or-trans'] = 3),
      (Rg.either = 4),
      (Rg.hash = 6),
      Rg),
    Qg = [0, 2, 1, 2],
    Lg = 'CWRITER',
    Mg = 'Created with ChemWriter - https://chemwriter.com',
    Og = 'MKA';
  function Sg(a) {
    Q.call(this);
    this.ea = new qe(a);
    this.aa = new ke();
    this.ba = new Pf();
    this.qa = new xe();
    this.da = new ug(this.qa);
    R(this, this.ea);
    R(this.ea, this.aa);
  }
  F(Sg, Q);
  p = Sg.prototype;
  p.Sa = function() {
    this.pa = this.Ee.ba('div', { class: 'chemwriter-image' });
  };
  p.sg = function(a) {
    Sf(this.ba);
    pe(this.aa);
    var b = this.da;
    b.aa = {};
    b.ba = {};
    try {
      Hg(a, this.ba.aa);
    } catch (c) {
      throw (Tg(this), c);
    }
    Ug(this);
  };
  p.ic = function(a) {
    Sf(this.ba);
    pe(this.aa);
    var b = this.da;
    b.aa = {};
    b.ba = {};
    try {
      Ig(a, this.ba.aa);
    } catch (c) {
      throw (Tg(this), c);
    }
    Ug(this);
  };
  p.Td = function() {
    return Kg(this.ba.aa);
  };
  p.Ma = function() {
    return this.ba.Ma();
  };
  function Tg(a) {
    var b = new T();
    b.rb(0, 0);
    b.Da(70, 0);
    b.Da(100, 30);
    b.Da(100, 150);
    b.Da(0, 150);
    b.close();
    b.rb(30, 55);
    b.Da(70, 95);
    b.rb(70, 55);
    b.Da(30, 95);
    me(a.aa, b, new he(4, '#ff0000'), void 0);
    var c = b.vb();
    c.x = c.x - 2;
    c.width += 4;
    c.y = c.y - 2;
    c.height += 4;
    b = new T();
    b.rb(70, 0);
    b.Da(100, 30);
    b.Da(70, 30);
    b.close();
    me(a.aa, b, void 0, new ie('#ff0000'));
    se(a.ea, c);
  }
  function Ug(a) {
    var b = a.ba.aa,
      c = qd(b);
    Ee(a.qa, c);
    var d = b.aa;
    for (c = 0; c < d.length; c++) {
      var e = a,
        m = d[c],
        q = e.da.Va(m);
      q && me(e.aa, q, void 0, Je[m.ha().Zb] || ze);
    }
    b = b.Eb();
    for (c = 0; c < b.length; c++)
      if (((d = a), (e = d.da.ya(b[c])), (m = d.qa.da), void 0 === e.length))
        e.close && me(d.aa, e, m, Ae);
      else for (q = 0; q < e.length; q++) le(d.aa, e[q], m);
    (c = Bg(a.da))
      ? ((c = Od(c)),
        se(a.ea, c),
        (a = a.aa),
        (b = new md()),
        b.translate(0, 2 * c.y + c.height),
        b.scale(1, -1),
        oe(a, b))
      : se(a.ea, new Md(0, 0, 100, 100));
  }
  function Vg() {
    this.ba = [];
    this.aa = 0;
  }
  function Wg(a) {
    return void 0 !== a.ba[a.aa - 1];
  }
  function Xg(a) {
    return void 0 !== a.ba[a.aa];
  }
  function Yg(a, b) {
    0 !== a.ba.length &&
      a.aa !== a.ba.length &&
      a.ba.splice(a.aa, a.ba.length - a.aa);
    a.ba.push(b);
    a.aa += 1;
  }
  function Zg() {}
  function $g() {
    this.aa = [];
  }
  F($g, Zg);
  $g.prototype.ub = function() {
    for (var a = 0; a < this.aa.length; a++) this.aa[a].ub();
  };
  $g.prototype.ze = function() {
    for (var a = this.aa.length - 1; 0 <= a; a--) this.aa[a].ze();
  };
  function ah() {
    this.aa = {};
    this.ba = 0;
  }
  ah.prototype.get = function(a) {
    a = 'string' === typeof a ? a : E(a);
    return (a = this.aa[a]) ? a.value : void 0;
  };
  function bh(a, b, c) {
    var d = 'string' === typeof b ? b : E(b);
    d in a.aa || (a.ba += 1);
    a.aa[d] = { key: b, value: c };
  }
  function ch(a, b) {
    b = 'string' === typeof b ? b : E(b);
    a.aa[b] && (delete a.aa[b], --a.ba);
  }
  function dh(a) {
    a.aa = {};
    a.ba = 0;
  }
  ah.prototype.Ma = function() {
    return 0 === this.ba;
  };
  function eh(a) {
    var b = [],
      c;
    for (c in a.aa) b.push(a.aa[c].key);
    return b;
  }
  ah.prototype.clone = function() {
    var a = new ah(),
      b;
    for (b in this.aa) {
      var c = this.aa[b];
      bh(a, c.key, c.value);
    }
    return a;
  };
  function fh() {
    O.call(this);
    this.na = this.fa = !1;
    this.ba = new Vg();
    this.da = new $g();
    this.ea = new ah();
  }
  F(fh, O);
  function gh(a, b) {
    a.aa = b;
    b = a.ba;
    var c = b.ba;
    if (!Oa(c)) for (var d = c.length - 1; 0 <= d; d--) delete c[d];
    c.length = 0;
    b.aa = 0;
    hh(a);
    P(a, ih);
    P(a, jh);
  }
  p = fh.prototype;
  p.jd = function() {
    if (Wg(this.ba)) {
      kh(this);
      Tf(this.aa);
      var a = this.ba;
      a = a.ba[a.aa - 1];
      if (!a) throw Error('No previous command');
      a.ze();
      Wf(this.aa);
      hh(this);
      a = this.ba;
      if (0 < a.aa) --a.aa;
      else throw Error('Can not step back');
    } else throw Error(lh);
    Wg(this.ba) || P(this, ih);
    P(this, mh);
  };
  p.cd = function() {
    if (Xg(this.ba)) {
      var a = this.ba;
      a = a.ba[a.aa];
      if (!a) throw Error('No next command');
      kh(this);
      Tf(this.aa);
      a.ub();
      Wf(this.aa);
      hh(this);
      a = this.ba;
      if (a.aa < a.ba.length) a.aa += 1;
      else throw Error('Can not step forward');
    } else throw Error(nh);
    Xg(this.ba) || P(this, jh);
    P(this, oh);
  };
  function hh(a) {
    L(a.aa, df, a.hf, !1, a);
    L(a.aa, ef, a.lf, !1, a);
    L(a.aa, ff, a.ef, !1, a);
    L(a.aa, gf, a.gf, !1, a);
    L(a.aa, Qe, a.jf, !1, a);
    L(a.aa, Ye, a.ff, !1, a);
    L(a.aa, Te, a.kf, !1, a);
    L(a.aa, Vf, a.cf, !1, a);
    L(a.aa, Yf, a.df, !1, a);
    L(a.aa, 'document-group-move-entered', a.hh, !1, a);
    L(a.aa, 'document-group-move-exited', a.ih, !1, a);
  }
  function kh(a) {
    M(a.aa, df, a.hf, !1, a);
    M(a.aa, ef, a.lf, !1, a);
    M(a.aa, ff, a.ef, !1, a);
    M(a.aa, gf, a.gf, !1, a);
    M(a.aa, Qe, a.jf, !1, a);
    M(a.aa, Ye, a.ff, !1, a);
    M(a.aa, Te, a.kf, !1, a);
    M(a.aa, Vf, a.cf, !1, a);
    M(a.aa, Yf, a.df, !1, a);
  }
  p.cf = function() {
    this.fa = !0;
  };
  p.df = function() {
    this.fa = !1;
    0 < this.da.aa.length &&
      (Yg(this.ba, this.da), (this.da = new $g()), P(this, oh), P(this, jh));
  };
  p.hh = function() {
    this.na = !0;
  };
  p.ih = function() {
    if (!this.ea.Ma()) {
      for (
        var a = this.ea.clone(), b = new ah(), c = eh(a), d = 0;
        d < c.length;
        d++
      ) {
        var e = c[d];
        bh(b, e, e.Oa());
      }
      dh(this.ea);
      ph(
        this,
        function() {
          for (var m = eh(b), q = 0; q < m.length; q++) m[q].Xb(b.get(m[q]));
        },
        function() {
          for (var m = eh(a), q = 0; q < m.length; q++) m[q].Xb(a.get(m[q]));
        }
      );
      P(this, oh);
    }
  };
  p.hf = function(a) {
    var b = a.target;
    ph(
      this,
      function() {
        this.aa.aa.Va(b);
      }.bind(this),
      function() {
        this.aa.aa.bc(b);
      }.bind(this)
    );
  };
  p.lf = function(a) {
    var b = a.target;
    ph(
      this,
      function() {
        this.aa.aa.bc(b);
      }.bind(this),
      function() {
        this.aa.aa.Va(b);
      }.bind(this)
    );
  };
  p.jf = function(a) {
    var b = a.target,
      c = a.vd,
      d = b.Oa();
    ph(
      this,
      function() {
        c && b.Xb(d);
      },
      function() {
        c && b.Xb(c);
      }
    );
  };
  p.kf = function(a) {
    if (this.na) {
      var b = a.target;
      this.ea.get(b) || bh(this.ea, b, a.vd);
    } else {
      b = a.target;
      var c = a.vd,
        d = b.Oa();
      qh(
        this,
        function() {
          b.move(d.Zc.x, d.Zc.y);
        },
        function() {
          b.move(c.Zc.x, c.Zc.y);
        }
      );
    }
  };
  p.ff = function(a) {
    var b = a.target,
      c = a.vd,
      d = b.Oa();
    ph(
      this,
      function() {
        b.Xb(d);
      },
      function() {
        b.Xb(c);
      }
    );
  };
  p.ef = function(a) {
    var b = a.target;
    ph(
      this,
      function() {
        this.aa.aa.ya(b);
      }.bind(this),
      function() {
        this.aa.aa.hb(b);
      }.bind(this)
    );
  };
  p.gf = function(a) {
    var b = a.target;
    ph(
      this,
      function() {
        this.aa.aa.hb(b);
      }.bind(this),
      function() {
        this.aa.aa.ya(b);
      }.bind(this)
    );
  };
  function ph(a, b, c) {
    a.fa ? ((b = rh(b, c)), a.da.aa.push(b)) : sh(a, b, c);
  }
  function qh(a, b, c) {
    sh(a, b, c);
  }
  function sh(a, b, c) {
    b = rh(b, c);
    a.da.aa.push(b);
    Yg(a.ba, a.da);
    a.da = new $g();
  }
  function rh(a, b) {
    var c = new Zg();
    c.ub = a;
    c.ze = b;
    return c;
  }
  var lh = 'Can not undo',
    nh = 'Can not redo',
    oh = 'undo-manager-undo-available',
    ih = 'undo-manager-undo-unavailable',
    mh = 'undo-manager-redo-available',
    jh = 'undo-manager-redo-unavailable';
  function th(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return (Ja(a) && a.match(/\S+/g)) || [];
  }
  function uh(a, b) {
    return a.classList ? a.classList.contains(b) : 0 <= db(th(a), b);
  }
  function vh(a, b) {
    a.classList
      ? a.classList.add(b)
      : uh(a, b) || (a.className += 0 < a.className.length ? ' ' + b : b);
  }
  function wh(a, b) {
    a.classList
      ? a.classList.remove(b)
      : uh(a, b) &&
        (a.className = fb(th(a), function(c) {
          return c != b;
        }).join(' '));
  }
  function xh() {
    Q.call(this);
  }
  F(xh, Q); // crucial for drawing:)
  function yh(a, b) {
    O.call(this);
    this.ba = b || 1;
    this.Vb = new jd(a.x, a.y);
    this.ea = this.Vb.clone();
    this.ea.x -= this.ba;
    this.da = [];
    this.aa = [];
  }
  F(yh, O);
  yh.prototype.qc = function() {
    return this.ea;
  };
  yh.prototype.Dd = function(a, b) {
    var c = zd(this.Vb, a);
    if (b) b = c;
    else if (0 < this.da.length) {
      b = 0;
      a = zd(this.Vb, a);
      c = Math.abs(this.da[0] - a);
      for (var d = 1; d < this.da.length; d++) {
        var e = Math.abs(this.da[d] - a);
        e < c && ((c = e), (b = d));
      }
      b = this.da[b];
    } else b = c;
    zh(this, b);
    P(this, new K(Ah));
  };
  function Bh(a, b) {
    a.da = [];
    for (var c = (2 * Math.PI) / 12, d = 0; 12 > d; d++)
      a.da.push(Ad(b + d * c));
    zh(a, b);
  }
  yh.prototype.na = function() {};
  function zh(a, b) {
    b -= zd(a.Vb, a.qc());
    var c = a.ea;
    var d = a.Vb;
    d = ld(kd(c.clone(), d), b).add(d);
    c.x = d.x;
    c.y = d.y;
    a.na(b);
  }
  var Ah = 'rotator-coordinates-changed';
  function Ch() {
    O.call(this);
  }
  F(Ch, O);
  function Dh(a, b) {
    function c() {
      q = (d = b.ha()) ? d.clientWidth : 0;
      t = d ? d.clientHeight : 0;
      (q === e && t === m) || P(a, Eh);
      e = q;
      m = t;
      b.ud || window.requestAnimationFrame(c);
    }
    var d = b.ha(),
      e = d ? d.clientWidth : 0,
      m = d ? d.clientHeight : 0,
      q = e,
      t = m;
    window.requestAnimationFrame(c);
  }
  var Eh = 'dom-tracker-element-resized';
  function Fh(a, b) {
    Q.call(this);
    this.yb = a;
    this.ba = new md();
    this.Je = new Ch();
    this.xa = void 0;
    this.ae = {};
    this.Ub = {};
    this.ge = {};
    this.gd = {};
    this.Lc = {};
    this.zc = {};
    this.Ie = {};
    this.nc = {};
    this.De = new qe(b);
    this.da = new ke();
    this.ea = new ke();
    this.aa = new ke();
    this.Ua = new ke();
    this.qa = new ke();
    R(this.da, this.ea);
    R(this.da, this.aa);
    R(this.da, this.Ua);
    R(this.da, this.qa);
    R(this.De, this.da);
    R(this, this.De);
    L(this.Je, Eh, this.rg, !1, this);
    Dh(this.Je, this);
  }
  F(Fh, Q);
  p = Fh.prototype;
  p.Sa = function() {
    this.pa = J('div', { class: 'chemwriter-document-view' });
  };
  p.qd = function(a, b) {
    if ((a = a.Va(b))) {
      var c = Je[b.ha().Zb] || ze;
      a = me(this.ea, a, void 0, c);
      this.ae[E(b)] = a;
    }
  };
  p.de = function(a, b) {
    var c = this.ae[E(b)];
    c && this.ea.ha().removeChild(c);
    delete a.aa[E(b)];
    delete this.ae[E(b)];
  };
  p.Bd = function(a, b) {
    this.de(a, b);
    this.qd(a, b);
  };
  function Gh(a, b) {
    var c = b.x + a.ha().getBoundingClientRect().left;
    b = b.y + a.ha().getBoundingClientRect().top;
    c = (c = document.elementFromPoint(c, b)) ? E(c) : void 0;
    return a.Lc[c];
  }
  function Hh(a, b) {
    var c = b.x + a.ha().getBoundingClientRect().left;
    b = b.y + a.ha().getBoundingClientRect().top;
    c = (c = document.elementFromPoint(c, b)) ? E(c) : void 0;
    return a.Ie[c];
  }
  p.pd = function(a, b) {
    a = a.ya(b);
    var c = this.yb.da,
      d = [];
    if (void 0 === a.length) {
      if (a.close) {
        var e = me(this.ea, a, c, Ae);
        d.push(e);
      }
    } else
      for (var m = 0; m < a.length; m++) (e = le(this.ea, a[m], c)), d.push(e);
    this.Ub[E(b)] = d;
  };
  p.ce = function(a, b) {
    for (var c = this.Ub[E(b)], d = 0; d < c.length; d++)
      this.ea.ha().removeChild(c[d]);
    a.hb(b);
    delete this.Ub[E(b)];
  };
  p.Ad = function(a, b) {
    this.ce(a, b);
    this.pd(a, b);
  };
  function Ih(a, b, c) {
    for (var d = [], e = c.aa, m = 0; m < e.length; m++) {
      var q = e[m];
      d.push(new cg(q.x, q.y, He(b.qb)));
    }
    b = [];
    q = De;
    for (e = 0; e < d.length; e++) (m = ne(a.aa, d[e], q)), b.push(m);
    d = [];
    e = c.aa;
    for (m = 1; m < e.length; m++) {
      q = e[m - 1];
      var t = e[m];
      q = new id(q.x, q.y, t.x, t.y);
      d.push(q);
    }
    2 < e.length &&
      ((q = e[e.length - 1]),
      (e = e[0]),
      (q = new id(q.x, q.y, e.x, e.y)),
      d.push(q));
    q = a.yb.fa;
    for (e = 0; e < d.length; e++) (m = le(a.aa, d[e], q)), b.push(m);
    a.ge[E(c)] = b;
  }
  function Jh(a, b) {
    for (var c = a.ge[E(b)], d = 0; d < c.length; d++)
      a.aa.ha().removeChild(c[d]);
    delete a.ge[E(b)];
  }
  function Kh(a, b) {
    var c = me(a.Ua, b.aa, a.yb.ba, je);
    a.gd[E(b)] = c;
  }
  function Lh(a, b) {
    var c = a.gd[E(b)];
    c && (a.Ua.ha().removeChild(c), delete a.gd[E(b)]);
  }
  function Mh(a, b) {
    var c;
    b ? (c = Od(b)) : (c = new Md(0, 0, 10, 10));
    var d = ye(a.yb);
    c.x -= d;
    c.y -= d;
    c.width += 2 * d;
    c.height += 2 * d;
    d = a.ha().clientWidth;
    var e = a.ha().clientHeight;
    0 === d || 0 === e
      ? (a.xa = b || new $c(10, 10, 0, 0))
      : ((b = Ld(c, new Md(0, 0, d, e))),
        b.translate(-c.x, c.y + c.height),
        b.scale(1, -1),
        (a.ba = b),
        oe(a.da, a.ba));
  }
  function Nh(a, b) {
    a = a.ba;
    var c = a.aa * a.ea - a.ba * a.da;
    a = new md(
      a.ea / c,
      -a.da / c,
      -a.ba / c,
      a.aa / c,
      (a.ba * a.na - a.ea * a.fa) / c,
      (a.da * a.fa - a.aa * a.na) / c
    );
    b = [b.x, b.y];
    a.transform(b, 0, b, 0, 1);
    return new bc(b[0], b[1]);
  }
  p.translate = function(a) {
    this.ba.translate(a.x, a.y);
    oe(this.da, this.ba);
  };
  function Oh(a, b, c) {
    b = b.clone();
    b.x *= 1 - c;
    b.y *= 1 - c;
    a.ba.translate(b.x, b.y);
    a.ba.scale(c, c);
    oe(a.da, a.ba);
  }
  p.rg = function() {
    var a = this.ha().clientWidth,
      b = this.ha().clientHeight;
    se(this.De, new Md(0, 0, a, b));
    this.xa && ((a = this.xa), (this.xa = void 0), Mh(this, a));
  };
  function ni() {
    O.call(this);
    this.aa = new T();
  }
  F(ni, O);
  ni.prototype.cb = function() {
    return this.aa;
  };
  ni.prototype.Ma = function() {
    return this.aa.Ma();
  };
  function oi(a, b) {
    a.aa.Ma() ? a.aa.rb(b.x, b.y) : a.aa.Da(b.x, b.y);
    P(a, new K(pi, a));
  }
  function qi(a, b) {
    var c = b.x,
      d = b.y,
      e = !1,
      m = 0,
      q = 0,
      t = 0,
      z = 0,
      D = 0;
    Ud(
      a.aa,
      Va(function(C, S) {
        if (!e) {
          switch (C) {
            case 1:
              if (z !== q || D !== t) m += ri(z, D, q, t, c, d);
              q = z = S[0];
              t = D = S[1];
              break;
            case 2:
              for (C = 0; C < S.length; C += 2)
                (m += ri(z, D, S[C], S[C + 1], c, d)),
                  (z = S[C]),
                  (D = S[C + 1]);
          }
          if (D !== t || z !== q) (m += ri(z, D, q, t, c, d)), (z = q), (D = t);
          c === z && d === D && ((m = 0), (D = t), (e = !0));
        }
      }, a)
    );
    D !== t && (m += ri(z, D, q, t, c, d));
    return m;
  }
  function ri(a, b, c, d, e, m) {
    return (e < a && e < c) ||
      (e > a && e > c) ||
      (m > b && m > d) ||
      a === c ||
      (!(m < b && m < d) && ((d - b) * (e - a)) / (c - a) <= m - b)
      ? 0
      : e === a
      ? a < c
        ? 0
        : -1
      : e === c
      ? a < c
        ? 1
        : 0
      : a < c
      ? 1
      : -1;
  }
  var pi = 'lasso-coordinate-added';
  function si() {
    this.ba = new ah();
    this.aa = new ah();
  }
  p = si.prototype;
  p.qd = function(a) {
    bh(this.ba, a, ti);
  };
  p.Bd = function(a) {
    this.ba.get(a) || bh(this.ba, a, ui);
  };
  p.de = function(a) {
    this.ba.get(a) === ti ? ch(this.ba, a) : bh(this.ba, a, vi);
  };
  p.pd = function(a) {
    bh(this.aa, a, ti);
  };
  p.Ad = function(a) {
    this.aa.get(a) || bh(this.aa, a, ui);
  };
  p.ce = function(a) {
    this.aa.get(a) === ti ? ch(this.aa, a) : bh(this.aa, a, vi);
  };
  function wi(a) {
    dh(a.ba);
    dh(a.aa);
  }
  function xi(a, b, c) {
    for (var d = eh(a.ba), e = 0; e < d.length; e++) {
      var m = d[e];
      switch (a.ba.get(m)) {
        case ti:
          var q = b,
            t = c,
            z = m;
          q.qd(t, z);
          m = q;
          q = z;
          t = ne(m.qa, new cg(q.ra().x, q.ra().y, He(t.qb)), je);
          m.Lc[E(t)] = q;
          m.zc[E(q)] = t;
          break;
        case ui:
          t = b;
          t.Bd(c, m);
          q = t.zc[E(m)];
          t = m.ra();
          m = q;
          q = t.y;
          m.setAttribute('cx', t.x);
          m.setAttribute('cy', q);
          break;
        case vi:
          (t = b),
            t.de(c, m),
            (q = t.zc[E(m)]),
            t.qa.ha().removeChild(q),
            delete t.Lc[E(q)],
            delete t.zc[E(m)];
      }
    }
  }
  function yi(a, b, c) {
    for (var d = eh(a.aa), e = 0; e < d.length; e++) {
      var m = d[e];
      switch (a.aa.get(m)) {
        case ti:
          var q = b,
            t = c,
            z = m;
          q.pd(t, z);
          m = q;
          q = z;
          t = ne(m.qa, Ag(t, q), je);
          m.Ie[E(t)] = q;
          m.nc[E(q)] = t;
          break;
        case ui:
          t = b;
          q = c;
          z = m;
          t.Ad(q, z);
          m = q;
          q = z;
          t = t.nc[E(q)];
          m = Ag(m, q);
          q = m.y;
          t.setAttribute('cx', m.x);
          t.setAttribute('cy', q);
          break;
        case vi:
          (t = b),
            (q = m),
            t.ce(c, q),
            (m = t),
            (t = q),
            (q = m.nc[E(t)]),
            m.qa.ha().removeChild(q),
            delete m.nc[E(t)];
      }
    }
  }
  var ti = 'redraw-buffer-command-draw',
    vi = 'redraw-buffer-command-undraw',
    ui = 'redraw-buffer-command-redraw';
  function X() {
    O.call(this);
    this.wa = zi.je;
    this.ea = 1;
  }
  F(X, O);
  p = X.prototype;
  p.getName = function() {
    return 'unknown';
  };
  p.Qa = function() {
    return 'Unknown';
  };
  p.Xc = function(a) {
    this.ea = a;
  };
  p.re = function() {
    return this.wa;
  };
  p.hd = function(a) {
    this.wa !== a && ((this.wa = a), P(this, Ai));
  };
  p.fc = function() {};
  p.Kb = function() {};
  p.Ic = function() {};
  p.dc = function() {};
  p.Hc = function(a) {
    this.ba = a;
  };
  p.md = function() {
    delete this.ba;
  };
  p.uc = function() {
    return !1;
  };
  p.ib = function() {};
  p.gb = function() {};
  p.xd = function() {};
  p.Wc = function() {};
  p.cc = function() {};
  p.Cb = function() {};
  p.rd = function() {};
  p.ac = function() {};
  p.kc = function() {};
  p.tb = function() {};
  p.Rd = function() {};
  p.sb = function() {};
  function Bi(a) {
    Tf(a.ba);
  }
  function Ci(a) {
    Wf(a.ba);
  }
  function Di(a) {
    return a.ba ? a.ba.aa : void 0;
  }
  var zi = { je: 'chemwriter-default-cursor', Ke: 'chemwriter-move-cursor' },
    Ai = 'tool-cursor-changed';
  function Ei() {
    this.ba = -1;
  }
  function Fi() {
    this.ba = 64;
    this.aa = [];
    this.fa = [];
    this.ua = [];
    this.ea = [];
    this.ea[0] = 128;
    for (var a = 1; a < this.ba; ++a) this.ea[a] = 0;
    this.aa[0] = 1732584193;
    this.aa[1] = 4023233417;
    this.aa[2] = 2562383102;
    this.aa[3] = 271733878;
    this.aa[4] = 3285377520;
    this.na = this.da = 0;
  }
  F(Fi, Ei);
  function Gi(a, b, c) {
    c || (c = 0);
    var d = a.ua;
    if (Ja(b))
      for (var e = 0; 16 > e; e++)
        (d[e] =
          (b.charCodeAt(c) << 24) |
          (b.charCodeAt(c + 1) << 16) |
          (b.charCodeAt(c + 2) << 8) |
          b.charCodeAt(c + 3)),
          (c += 4);
    else
      for (e = 0; 16 > e; e++)
        (d[e] = (b[c] << 24) | (b[c + 1] << 16) | (b[c + 2] << 8) | b[c + 3]),
          (c += 4);
    for (e = 16; 80 > e; e++) {
      var m = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
      d[e] = ((m << 1) | (m >>> 31)) & 4294967295;
    }
    b = a.aa[0];
    c = a.aa[1];
    var q = a.aa[2],
      t = a.aa[3],
      z = a.aa[4];
    for (e = 0; 80 > e; e++) {
      if (40 > e)
        if (20 > e) {
          m = t ^ (c & (q ^ t));
          var D = 1518500249;
        } else (m = c ^ q ^ t), (D = 1859775393);
      else
        60 > e
          ? ((m = (c & q) | (t & (c | q))), (D = 2400959708))
          : ((m = c ^ q ^ t), (D = 3395469782));
      m = (((b << 5) | (b >>> 27)) + m + z + D + d[e]) & 4294967295;
      z = t;
      t = q;
      q = ((c << 30) | (c >>> 2)) & 4294967295;
      c = b;
      b = m;
    }
    a.aa[0] = (a.aa[0] + b) & 4294967295;
    a.aa[1] = (a.aa[1] + c) & 4294967295;
    a.aa[2] = (a.aa[2] + q) & 4294967295;
    a.aa[3] = (a.aa[3] + t) & 4294967295;
    a.aa[4] = (a.aa[4] + z) & 4294967295;
  }
  function Hi(a, b, c) {
    if (null != b) {
      Ia(c) || (c = b.length);
      for (var d = c - a.ba, e = 0, m = a.fa, q = a.da; e < c; ) {
        if (0 == q) for (; e <= d; ) Gi(a, b, e), (e += a.ba);
        if (Ja(b))
          for (; e < c; ) {
            if (((m[q] = b.charCodeAt(e)), ++q, ++e, q == a.ba)) {
              Gi(a, m);
              q = 0;
              break;
            }
          }
        else
          for (; e < c; )
            if (((m[q] = b[e]), ++q, ++e, q == a.ba)) {
              Gi(a, m);
              q = 0;
              break;
            }
      }
      a.da = q;
      a.na += c;
    }
  }
  function Ii(a) {
    for (var b = a.join('\n'), c = '', d = 4, e = 0; 10 > e; e++)
      (d += 7 * e), (c += '0123456789abcdef'.charAt(d % 16));
    a = c + Ji(a[4] || '');
    return Ji(b + a);
  }
  function Ji(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      255 < e && ((b[c++] = e & 255), (e >>= 8));
      b[c++] = e;
    }
    a = new Fi();
    Hi(a, b);
    b = [];
    d = 8 * a.na;
    56 > a.da ? Hi(a, a.ea, 56 - a.da) : Hi(a, a.ea, a.ba - (a.da - 56));
    for (c = a.ba - 1; 56 <= c; c--) (a.fa[c] = d & 255), (d /= 256);
    Gi(a, a.fa);
    for (c = d = 0; 5 > c; c++)
      for (e = 24; 0 <= e; e -= 8) (b[d] = (a.aa[c] >> e) & 255), ++d;
    a = [];
    for (c = 0; c < b.length; c++)
      (a[2 * c] = '0123456789abcdef'.charAt((b[c] >> 4) & 15)),
        (a[2 * c + 1] = '0123456789abcdef'.charAt(b[c] & 15));
    return a.join('');
  }
  var Ki = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function Li(a) {
    O.call(this);
    this.ba = a;
    this.aa = { status: void 0, body: void 0 };
  }
  F(Li, O);
  function Mi(a) {
    var b = a.ba.match(Ki)[3],
      c = window.location.href.match(Ki)[3];
    b && b !== c && 'undefined' !== typeof XDomainRequest ? Ni(a) : Oi(a);
  }
  function Oi(a) {
    var b = new XMLHttpRequest();
    b.onreadystatechange = function() {
      4 === b.readyState &&
        ((this.aa.status = b.status),
        (this.aa.body = b.responseText),
        P(this, Pi));
    }.bind(a);
    b.open('GET', a.ba, !0);
    b.send();
  }
  function Ni(a) {
    var b = new XDomainRequest();
    b.timeout = 9999;
    b.open('GET', a.ba);
    b.onerror = function() {
      this.aa.status = 400;
      delete this.aa.body;
      P(this, Pi);
    }.bind(a);
    b.onprogress = function() {
      P(this, Qi);
    }.bind(a);
    b.ontimeout = function() {
      this.aa.status = 400;
      delete this.aa.body;
      P(this, Pi);
    }.bind(a);
    b.onload = function() {
      this.aa.status = 200;
      this.aa.body = b.responseText;
      P(this, Pi);
    }.bind(a);
    b.send();
  }
  var Pi = 'request-ready',
    Qi = 'request-progress';
  function Ri() {
    O.call(this);
    this.aa = {};
    this.da = void 0;
    this.ea = this.ba = !1;
  }
  F(Ri, O);
  Ri.prototype.fa = function(a) {
    this.da = a || '';
    this.ea = !0;
    a = a.split('\n');
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      '#' !== c[0] &&
        ((c = c.split(':')), 2 === c.length && (this.aa[c[0]] = c[1].trim()));
    }
    if (
      this.da &&
      ((a = this.da.split('\n')),
      1 !== a.length &&
        ((b = a.pop().split(':')[1]),
        void 0 !== b &&
          ((b = b.trim()),
          b === Ii(a) &&
            ((a = this.aa['Deployment Expires']),
            !(a && Date.parse(a) < Date.parse(new Date()))))))
    )
      switch (this.aa['License Type']) {
        case 'website':
          this.ba =
            window.location.hostname === Si(this) ||
            window.location.hostname === [Sc, Si(this)].join('.');
          break;
        case 'wildcard':
          (a = window.location.hostname.split('.').reverse()),
            (this.ba = a[1] + '.' + a[0] === Si(this));
      }
    P(this, re);
  };
  Ri.prototype.td = function() {
    return this.ba;
  };
  function Si(a) {
    return a.aa['Licensed Host'];
  }
  var re = 'molfile-loaded';
  function Ti(a) {
    Q.call(this);
    this.Jb = a;
    this.Ua = new xe();
    this.xa = new ug(this.Ua);
    this.ba = new Fh(this.Ua, a);
    this.aa = new Pf();
    this.da = new Y();
    this.qa = new fh();
    this.ea = new si();
    gh(this.qa, this.aa);
    this.da.Hc(this.aa);
    this.qa.Wa(this);
    this.aa.Wa(this);
    R(this, this.ba);
  }
  F(Ti, Q);
  p = Ti.prototype;
  p.Fa = function() {
    Ti.la.Fa.call(this);
    this.Jb.ea
      ? this.Jb.td() || fd(this, new xh(), 0)
      : Hc(this.Jb, re, this.th, !1, this);
    Ui(this);
    L(this.da, Ai, this.Oh, !1, this);
  };
  p.Sa = function() {
    this.pa = J('div', { class: 'chemwriter-canvas ' + zi.je });
  };
  function Vi(a, b) {
    a.aa.Wa(null);
    a.da.md();
    wi(a.ea);
    qc(a.aa);
    delete a.aa;
    var c = a.ba;
    pe(c.ea);
    pe(c.aa);
    pe(c.Ua);
    pe(c.qa);
    c.xa = void 0;
    c.ae = {};
    c.Ub = {};
    c.ge = {};
    c.gd = {};
    c.Lc = {};
    c.zc = {};
    c.Ie = {};
    c.nc = {};
    var d = new md();
    c.ba = d;
    oe(c.da, c.ba);
    c = a.xa;
    c.aa = {};
    c.ba = {};
    a.aa = b;
    Ui(a);
    a.da.Hc(b);
    gh(a.qa, b);
    c = qd(a.aa.aa);
    Ee(a.Ua, c);
    a.da.Xc(c);
    d = a.aa.aa;
    var e = d.aa;
    for (c = 0; c < e.length; c++) a.ea.qd(e[c]);
    d = d.Eb();
    for (c = 0; c < d.length; c++) a.ea.pd(d[c]);
    c = a.ea;
    d = a.ba;
    e = a.xa;
    xi(c, d, e);
    yi(c, d, e);
    wi(c);
    a.ed();
    b.Wa(a);
    P(a, new K(Zf, b));
  }
  function Wi(a, b) {
    bf(a.aa.aa);
    Xi(a.da, b);
  }
  p.jd = function() {
    Wg(this.qa.ba) && this.qa.jd();
  };
  p.cd = function() {
    Xg(this.qa.ba) && this.qa.cd();
  };
  p.ed = function() {
    Mh(this.ba, Bg(this.xa));
  };
  p.translate = function(a) {
    a = a.clone();
    var b = this.ba.ba.aa;
    a.x /= b;
    a.y /= -b;
    this.ba.translate(a);
  };
  p.Ma = function() {
    return this.aa.Ma();
  };
  p.Ha = function(a) {
    this.da.Ha(a);
  };
  function Ui(a) {
    L(a.aa, df, a.jg, !1, a);
    L(a.aa, ef, a.mg, !1, a);
    L(a.aa, ff, a.gg, !1, a);
    L(a.aa, gf, a.ig, !1, a);
    L(a.aa, 'document-lasso-added', a.ph, !1, a);
    L(a.aa, 'document-lasso-removed', a.rh, !1, a);
    L(a.aa, Re, a.Eh, !1, a);
    L(a.aa, Oe, a.Dh, !1, a);
    L(a.aa, Te, a.lg, !1, a);
    L(a.aa, Qe, a.kg, !1, a);
    L(a.aa, $e, a.kh, !1, a);
    L(a.aa, Ze, a.jh, !1, a);
    L(a.aa, Ye, a.hg, !1, a);
    L(a.aa, 'document-rotator-added', a.Gh, !1, a);
    L(a.aa, 'document-rotator-removed', a.Ih, !1, a);
    L(a.aa, Ah, a.Hh, !1, a);
    L(a.aa, pi, a.qh, !1, a);
    L(a.aa, Vf, a.eg, !1, a);
    L(a.aa, Yf, a.fg, !1, a);
  }
  p.th = function(a) {
    a.target.td() || fd(this, new xh(), 0);
  };
  p.eg = function() {};
  p.Oh = function(a) {
    a = a.target;
    for (var b in zi) {
      var c = zi[b];
      wh(this.ha(), c);
    }
    vh(this.ha(), a.re());
  };
  p.fg = function() {
    var a = this.ea,
      b = this.ba,
      c = this.xa;
    xi(a, b, c);
    yi(a, b, c);
    wi(a);
  };
  p.jg = function(a) {
    this.ea.qd(a.target);
  };
  p.lg = function(a) {
    this.ea.Bd(a.target);
    for (var b = a.target.Eb(), c = 0; c < b.length; c++) {
      var d = b[c],
        e = Se(d, a.target);
      this.ea.Ad(d);
      this.ea.Bd(e);
    }
  };
  p.mg = function(a) {
    a.target === this.aa.ba && Qf(this.aa, void 0);
    this.ea.de(a.target);
  };
  p.kg = function(a) {
    a = a.target;
    this.ea.Bd(a);
    a = a.Eb();
    for (var b = 0; b < a.length; b++) this.ea.Ad(a[b]);
  };
  p.Eh = function(a) {
    var b = a.target;
    b.vc() || b.bd()
      ? ((a = this.da.uc()), (b = this.ba.zc[E(b)]), Xc(b, a ? Ce : Be))
      : ((a = this.ba.zc[E(b)]), Xc(a, je));
  };
  p.Dh = function(a) {
    var b = a.target;
    b.bd() || b.vc()
      ? ((a = this.da.uc()), (b = this.ba.zc[E(b)]), Xc(b, a ? Ce : Be))
      : ((a = this.ba.zc[E(b)]), Xc(a, je));
  };
  p.kh = function(a) {
    var b = a.target;
    b.vc() || b.bd()
      ? ((a = this.da.uc()), (b = this.ba.nc[E(b)]), Xc(b, a ? Ce : Be))
      : ((a = this.ba.nc[E(b)]), Xc(a, je));
  };
  p.jh = function(a) {
    var b = a.target;
    b.bd() || b.vc()
      ? ((a = this.da.uc()), (b = this.ba.nc[E(b)]), Xc(b, a ? Ce : Be))
      : ((a = this.ba.nc[E(b)]), Xc(a, je));
  };
  p.hg = function(a) {
    this.ea.Ad(a.target);
  };
  p.gg = function(a) {
    this.ea.pd(a.target);
  };
  p.ig = function(a) {
    a.target === this.aa.da && Rf(this.aa, void 0);
    this.ea.ce(a.target);
  };
  p.Gh = function(a) {
    Ih(this.ba, this.xa, a.target);
  };
  p.Ih = function(a) {
    Jh(this.ba, a.target);
  };
  p.Hh = function(a) {
    var b = this.ba,
      c = this.xa;
    a = a.target;
    Jh(b, a);
    Ih(b, c, a);
  };
  p.ph = function(a) {
    Kh(this.ba, a.target);
  };
  p.rh = function(a) {
    Lh(this.ba, a.target);
  };
  p.qh = function(a) {
    var b = this.ba;
    a = a.target;
    Lh(b, a);
    Kh(b, a);
  };
  function Yi(a, b, c, d, e, m) {
    if (Nb && !Wb('525')) return !0;
    if (Ob && e) return Zi(a);
    if (e && !d) return !1;
    if (!Mb) {
      Ka(b) && (b = $i(b));
      var q = 17 == b || 18 == b || (Ob && 91 == b);
      if (((!c || Ob) && q) || (Ob && 16 == b && (d || m))) return !1;
    }
    if ((Nb || Lb) && d && c)
      switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
          return !1;
      }
    if (Kb && d && b == a) return !1;
    switch (a) {
      case 13:
        return Mb ? (m || e ? !1 : !(c && d)) : !0;
      case 27:
        return !(Nb || Lb || Mb);
    }
    return Mb && (d || e || m) ? !1 : Zi(a);
  }
  function Zi(a) {
    if (
      (48 <= a && 57 >= a) ||
      (96 <= a && 106 >= a) ||
      (65 <= a && 90 >= a) ||
      ((Nb || Lb) && 0 == a)
    )
      return !0;
    switch (a) {
      case 32:
      case 43:
      case 63:
      case 64:
      case 107:
      case 109:
      case 110:
      case 111:
      case 186:
      case 59:
      case 189:
      case 187:
      case 61:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
      case 219:
      case 220:
      case 221:
      case 163:
        return !0;
      case 173:
        return Mb;
      default:
        return !1;
    }
  }
  function $i(a) {
    if (Mb) a = aj(a);
    else if (Ob && Nb)
      switch (a) {
        case 93:
          a = 91;
      }
    return a;
  }
  function aj(a) {
    switch (a) {
      case 61:
        return 187;
      case 59:
        return 186;
      case 173:
        return 189;
      case 224:
        return 91;
      case 0:
        return 224;
      default:
        return a;
    }
  }
  function bj(a, b) {
    O.call(this);
    a && cj(this, a, b);
  }
  F(bj, O);
  p = bj.prototype;
  p.pa = null;
  p.Vd = null;
  p.we = null;
  p.Wd = null;
  p.xb = -1;
  p.ec = -1;
  p.te = !1;
  var dj = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45
    },
    ej = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      'U+007F': 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45
    },
    fj = !Nb || Wb('525'),
    gj = Ob && Mb;
  p = bj.prototype;
  p.Lg = function(a) {
    if (Nb || Lb)
      if (
        (17 == this.xb && !a.ctrlKey) ||
        (18 == this.xb && !a.altKey) ||
        (Ob && 91 == this.xb && !a.metaKey)
      )
        this.ec = this.xb = -1;
    -1 == this.xb &&
      (a.ctrlKey && 17 != a.keyCode
        ? (this.xb = 17)
        : a.altKey && 18 != a.keyCode
        ? (this.xb = 18)
        : a.metaKey && 91 != a.keyCode && (this.xb = 91));
    fj && !Yi(a.keyCode, this.xb, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
      ? this.handleEvent(a)
      : ((this.ec = $i(a.keyCode)), gj && (this.te = a.altKey));
  };
  p.Ng = function(a) {
    this.ec = this.xb = -1;
    this.te = a.altKey;
  };
  p.handleEvent = function(a) {
    var b = a.oc,
      c = b.altKey;
    if (Kb && 'keypress' == a.type) {
      var d = this.ec;
      var e = 13 != d && 27 != d ? b.keyCode : 0;
    } else
      (Nb || Lb) && 'keypress' == a.type
        ? ((d = this.ec),
          (e = 0 <= b.charCode && 63232 > b.charCode && Zi(d) ? b.charCode : 0))
        : Jb && !Nb
        ? ((d = this.ec), (e = Zi(d) ? b.keyCode : 0))
        : ('keypress' == a.type
            ? (gj && (c = this.te),
              b.keyCode == b.charCode
                ? 32 > b.keyCode
                  ? ((d = b.keyCode), (e = 0))
                  : ((d = this.ec), (e = b.charCode))
                : ((d = b.keyCode || this.ec), (e = b.charCode || 0)))
            : ((d = b.keyCode || this.ec), (e = b.charCode || 0)),
          Ob && 63 == e && 224 == d && (d = 191));
    var m = (d = $i(d));
    d
      ? 63232 <= d && d in dj
        ? (m = dj[d])
        : 25 == d && a.shiftKey && (m = 9)
      : b.keyIdentifier && b.keyIdentifier in ej && (m = ej[b.keyIdentifier]);
    (Mb &&
      fj &&
      'keypress' == a.type &&
      !Yi(m, this.xb, a.shiftKey, a.ctrlKey, c, a.metaKey)) ||
      ((a = m == this.xb),
      (this.xb = m),
      (b = new hj(m, e, a, b)),
      (b.altKey = c),
      P(this, b));
  };
  p.ha = function() {
    return this.pa;
  };
  function cj(a, b, c) {
    a.Wd && ij(a);
    a.pa = b;
    a.Vd = L(a.pa, 'keypress', a, c);
    a.we = L(a.pa, 'keydown', a.Lg, c, a);
    a.Wd = L(a.pa, 'keyup', a.Ng, c, a);
  }
  function ij(a) {
    a.Vd &&
      (Oc(a.Vd),
      Oc(a.we),
      Oc(a.Wd),
      (a.Vd = null),
      (a.we = null),
      (a.Wd = null));
    a.pa = null;
    a.xb = -1;
    a.ec = -1;
  }
  p.Mb = function() {
    bj.la.Mb.call(this);
    ij(this);
  };
  function hj(a, b, c, d) {
    rc.call(this, d);
    this.type = 'key';
    this.keyCode = a;
    this.repeat = c;
  }
  F(hj, rc);
  var jj = {
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    19: 'pause',
    20: 'caps-lock',
    27: 'esc',
    32: 'space',
    33: 'pg-up',
    34: 'pg-down',
    35: 'end',
    36: 'home',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    45: 'insert',
    46: 'delete',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    59: 'semicolon',
    61: 'equals',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z',
    93: 'context',
    96: 'num-0',
    97: 'num-1',
    98: 'num-2',
    99: 'num-3',
    100: 'num-4',
    101: 'num-5',
    102: 'num-6',
    103: 'num-7',
    104: 'num-8',
    105: 'num-9',
    106: 'num-multiply',
    107: 'num-plus',
    109: 'num-minus',
    110: 'num-period',
    111: 'num-division',
    112: 'f1',
    113: 'f2',
    114: 'f3',
    115: 'f4',
    116: 'f5',
    117: 'f6',
    118: 'f7',
    119: 'f8',
    120: 'f9',
    121: 'f10',
    122: 'f11',
    123: 'f12',
    186: 'semicolon',
    187: 'equals',
    189: 'dash',
    188: ',',
    190: '.',
    191: '/',
    192: '`',
    219: 'open-square-bracket',
    220: '\\',
    221: 'close-square-bracket',
    222: 'single-quote',
    224: 'win'
  };
  function kj(a, b, c, d, e, m, q, t, z) {
    this.aa = a;
    this.fa = b;
    this.wa = c;
    this.da = d;
    this.ea = e;
    this.na = m;
    this.qa = q;
    this.ua = t;
    this.ba = z;
  }
  kj.prototype.Ka = function() {
    return this.qa;
  };
  function lj(a) {
    var b = a.oc;
    b =
      (b =
        b &&
        'composed' in b &&
        b &&
        'composedPath' in b &&
        b.composed &&
        b.composedPath()) && 0 < b.length
        ? b[0]
        : a.target;
    return mj(
      nj(
        oj(
          pj(
            new qj()
              .keyCode(a.keyCode || 0)
              .key(a.key || '')
              .shiftKey(!!a.shiftKey)
              .altKey(!!a.altKey)
              .ctrlKey(!!a.ctrlKey)
              .metaKey(!!a.metaKey)
              .target(a.target),
            b
          ),
          function() {
            return a.preventDefault();
          }
        ),
        function() {
          return a.stopPropagation();
        }
      )
    );
  }
  function qj() {
    this.da = null;
    this.ea = '';
    this.xa = this.na = this.ua = this.qa = this.fa = this.ba = this.aa = this.wa = null;
  }
  p = qj.prototype;
  p.keyCode = function(a) {
    this.da = a;
    return this;
  };
  p.key = function(a) {
    this.ea = a;
    return this;
  };
  p.shiftKey = function(a) {
    this.wa = a;
    return this;
  };
  p.altKey = function(a) {
    this.aa = a;
    return this;
  };
  p.ctrlKey = function(a) {
    this.ba = a;
    return this;
  };
  p.metaKey = function(a) {
    this.fa = a;
    return this;
  };
  p.target = function(a) {
    this.qa = a;
    return this;
  };
  function pj(a, b) {
    a.ua = b;
    return a;
  }
  function oj(a, b) {
    a.na = b;
    return a;
  }
  function nj(a, b) {
    a.xa = b;
    return a;
  }
  function mj(a) {
    return new kj(a.da, a.ea, a.wa, a.aa, a.ba, a.fa, a.qa, a.ua, a.na);
  }
  function rj(a) {
    O.call(this);
    this.ba = this.da = {};
    this.fa = 0;
    this.wa = Cb(sj);
    this.qa = Cb(tj);
    this.na = null;
    this.aa = a;
    L(this.aa, 'keydown', this.sf, void 0, this);
    L(this.aa, 'synthetic-keydown', this.uf, void 0, this);
    Pb &&
      (L(this.aa, 'keypress', this.wf, void 0, this),
      L(this.aa, 'synthetic-keypress', this.xf, void 0, this));
    L(this.aa, 'keyup', this.tf, void 0, this);
    L(this.aa, 'synthetic-keyup', this.vf, void 0, this);
  }
  var uj;
  F(rj, O);
  function vj(a) {
    this.aa = a || null;
    this.next = a ? null : {};
  }
  var sj = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
    tj = 'color date datetime datetime-local email month number password search tel text time url week'.split(
      ' '
    );
  p = rj.prototype;
  p.Nf = function(a, b) {
    wj(this.da, xj(arguments), a);
  };
  function xj(a) {
    if (Ja(a[1]))
      a = gb(yj(a[1]), function(d) {
        return zj(d.key || '', d.keyCode, d.ah);
      });
    else {
      var b = a,
        c = 1;
      Oa(a[1]) && ((b = a[1]), (c = 0));
      for (a = []; c < b.length; c += 2) a.push(zj('', b[c], b[c + 1]));
    }
    return a;
  }
  p.Mb = function() {
    rj.la.Mb.call(this);
    this.da = {};
    M(this.aa, 'keydown', this.sf, !1, this);
    M(this.aa, 'synthetic-keydown', this.uf, !1, this);
    Pb &&
      (M(this.aa, 'keypress', this.wf, !1, this),
      M(this.aa, 'synthetic-keypress', this.xf, !1, this));
    M(this.aa, 'keyup', this.tf, !1, this);
    M(this.aa, 'synthetic-keyup', this.vf, !1, this);
    this.aa = null;
  };
  function yj(a) {
    a = a
      .replace(/[ +]*\+[ +]*/g, '+')
      .replace(/[ ]+/g, ' ')
      .toLowerCase();
    a = a.split(' ');
    for (var b = [], c, d = 0; (c = a[d]); d++) {
      var e = c.split('+'),
        m = null,
        q = null;
      c = 0;
      for (var t, z = 0; (t = e[z]); z++) {
        switch (t) {
          case 'shift':
            c |= 1;
            continue;
          case 'ctrl':
            c |= 2;
            continue;
          case 'alt':
            c |= 4;
            continue;
          case 'meta':
            c |= 8;
            continue;
        }
        null === q || bb('At most one non-modifier key can be in a stroke.');
        e = void 0;
        m = t;
        if (!uj) {
          q = {};
          for (e in jj) q[jj[e]] = $i(parseInt(e, 10));
          uj = q;
        }
        q = uj[m];
        m = t;
        break;
      }
      b.push({ key: m, keyCode: q, ah: c });
    }
    return b;
  }
  p.tf = function(a) {
    a = lj(a);
    Mb && Aj(this, a);
    Pb && !this.ea && Bj(a) && Cj(this, a, !0);
  };
  p.vf = function(a) {
    a = a.da();
    Mb && Aj(this, a);
    Pb && !this.ea && Bj(a) && Cj(this, a, !0);
  };
  function Aj(a, b) {
    32 == a.na && 32 == b.aa && (0, b.ba)();
    a.na = null;
  }
  function Bj(a) {
    return Pb && a.ea && a.da;
  }
  p.wf = function(a) {
    a = lj(a);
    32 < a.aa && Bj(a) && (this.ea = !0);
  };
  p.xf = function(a) {
    a = a.da();
    32 < a.aa && Bj(a) && (this.ea = !0);
  };
  function wj(a, b, c) {
    var d = b.shift();
    eb(d, function(e) {
      if ((e = a[e]) && (0 == b.length || e.aa))
        throw Error('Keyboard shortcut conflicts with existing shortcut');
    });
    b.length
      ? eb(d, function(e) {
          e = e.toString();
          var m = new vj();
          e = e in a ? a[e] : (a[e] = m);
          wj(e.next, b.slice(0), c);
        })
      : eb(d, function(e) {
          a[e] = new vj(c);
        });
  }
  function Dj(a, b) {
    for (var c = 0; c < b.length; c++) {
      var d = a[b[c]];
      if (d) return d;
    }
  }
  function zj(a, b, c) {
    c = c || 0;
    b = ['c_' + b + '_' + c];
    '' != a && b.push('n_' + a + '_' + c);
    return b;
  }
  p.sf = function(a) {
    Cj(this, lj(a));
  };
  p.uf = function(a) {
    Cj(this, a.da());
  };
  function Cj(a, b, c) {
    a: {
      var d = b.aa;
      if ('' != b.fa) {
        var e = b.fa;
        if ('Control' == e || 'Shift' == e || 'Meta' == e || 'AltGraph' == e) {
          d = !1;
          break a;
        }
      } else if (16 == d || 17 == d || 18 == d) {
        d = !1;
        break a;
      }
      e = b.ua;
      var m =
          'TEXTAREA' == e.tagName ||
          'INPUT' == e.tagName ||
          'BUTTON' == e.tagName ||
          'SELECT' == e.tagName,
        q =
          !m &&
          (e.isContentEditable ||
            (e.ownerDocument && 'on' == e.ownerDocument.designMode));
      d =
        (!m && !q) || a.wa[d]
          ? !0
          : q
          ? !1
          : b.da || b.ea || b.na
          ? !0
          : 'INPUT' == e.tagName && a.qa[e.type]
          ? 13 == d
          : 'INPUT' == e.tagName || 'BUTTON' == e.tagName
          ? 32 != d
          : !1;
    }
    d &&
      (!c && Bj(b)
        ? (a.ea = !1)
        : ((c = $i(b.aa)),
          (d = zj(
            b.fa,
            c,
            (b.wa ? 1 : 0) | (b.ea ? 2 : 0) | (b.da ? 4 : 0) | (b.na ? 8 : 0)
          )),
          (e = Dj(a.ba, d)) && (e = !(1500 <= Wa() - a.fa)),
          e || ((a.ba = a.da), (a.fa = Wa())),
          (e = Dj(a.ba, d)) && e.next && ((a.ba = e.next), (a.fa = Wa())),
          e &&
            (e.next
              ? (0, b.ba)()
              : ((a.ba = a.da),
                (a.fa = Wa()),
                (0, b.ba)(),
                (d = e.aa),
                (e = P(a, new Ej('shortcut', d, b.Ka()))),
                (e &= P(a, new Ej('shortcut_' + d, d, b.Ka()))) || (0, b.ba)(),
                Mb && (a.na = c)))));
  }
  function Ej(a, b, c) {
    K.call(this, a, c);
    this.identifier = b;
  }
  F(Ej, K);
  function Fj() {}
  p = Fj.prototype;
  p.Yc = function(a) {
    this.ma = a;
  };
  p.Qe = function(a) {
    var b = Gh(this.ma.ba, a),
      c = b ? void 0 : Hh(this.ma.ba, a);
    b
      ? this.ma.da.ib(b)
      : c
      ? this.ma.da.cc(c)
      : this.ma.da.ac(Nh(this.ma.ba, a));
    this.ea = b;
    this.fa = c;
  };
  p.Ue = function(a, b) {
    var c = Gh(this.ma.ba, a),
      d = c ? void 0 : Hh(this.ma.ba, a);
    this.ea && this.ea === c
      ? this.ma.da.Rd(Nh(this.ma.ba, a), b)
      : (this.ea ? this.ma.da.Wc(this.ea) : this.fa && this.ma.da.rd(this.fa),
        delete this.ea,
        delete this.fa,
        c ? this.ma.da.xd(c) : d || Nh(this.ma.ba, a),
        this.ma.da.tb(Nh(this.ma.ba, a), b),
        (this.ea = c),
        (this.fa = d));
  };
  p.Ve = function(a) {
    var b = Gh(this.ma.ba, a),
      c = b ? void 0 : Hh(this.ma.ba, a);
    b
      ? this.ma.da.gb(b)
      : c
      ? this.ma.da.Cb(c)
      : this.ma.da.kc(Nh(this.ma.ba, a));
    this.ea = b;
    this.fa = c;
  };
  p.Pe = function(a) {
    this.ma.translate(a);
  };
  p.We = function(a, b) {
    var c = this.ma;
    a = Nh(c.ba, a);
    Oh(c.ba, a, b);
  };
  function Gj(a, b) {
    O.call(this);
    a = this.pa = a;
    a = Qa(a) && 1 == a.nodeType ? this.pa : this.pa ? this.pa.body : null;
    var c;
    if ((c = !!a)) {
      a: {
        c = 9 == a.nodeType ? a : a.ownerDocument || a.document;
        if (
          c.defaultView &&
          c.defaultView.getComputedStyle &&
          (c = c.defaultView.getComputedStyle(a, null))
        ) {
          c = c.direction || c.getPropertyValue('direction') || '';
          break a;
        }
        c = '';
      }
      c =
        'rtl' ==
        (c ||
          (a.currentStyle ? a.currentStyle.direction : null) ||
          (a.style && a.style.direction));
    }
    this.ea = c;
    this.aa = L(this.pa, Mb ? 'DOMMouseScroll' : 'mousewheel', this, b);
  }
  F(Gj, O);
  Gj.prototype.handleEvent = function(a) {
    var b = 0,
      c = 0,
      d = a.oc;
    'mousewheel' == d.type
      ? ((a = Hj(-d.wheelDelta)),
        Ia(d.wheelDeltaX)
          ? ((b = Hj(-d.wheelDeltaX)), (c = Hj(-d.wheelDeltaY)))
          : (c = a))
      : ((a = d.detail),
        100 < a ? (a = 3) : -100 > a && (a = -3),
        Ia(d.axis) && d.axis === d.HORIZONTAL_AXIS ? (b = a) : (c = a));
    Ka(this.ba) && (b = Math.min(Math.max(b, -this.ba), this.ba));
    Ka(this.da) && (c = Math.min(Math.max(c, -this.da), this.da));
    this.ea && (b = -b);
    b = new Ij(a, d, b, c);
    P(this, b);
  };
  function Hj(a) {
    return Nb && (Ob || Qb) && 0 != a % 40 ? a : a / 40;
  }
  Gj.prototype.Mb = function() {
    Gj.la.Mb.call(this);
    Oc(this.aa);
    this.aa = null;
  };
  function Ij(a, b, c, d) {
    rc.call(this, b);
    this.type = 'mousewheel';
    this.detail = a;
    this.deltaX = c;
    this.deltaY = d;
  }
  F(Ij, rc);
  function Jj() {
    this.aa = !1;
    this.ba = void 0;
  }
  p = Jj.prototype;
  p.Ff = function() {};
  p.Ye = function() {};
  p.Ze = function() {};
  p.If = function() {};
  p.Gf = function() {};
  p.ng = function(a) {
    0 === a.button &&
      (a.preventDefault(), (this.aa = !0), this.ua(Kj(this, a)));
  };
  p.vh = function(a) {
    a.preventDefault();
    var b = Kj(this, a);
    a.shiftKey && !this.aa
      ? (this.ba &&
          ((a = b.clone()), (a.x -= this.ba.x), (a.y -= this.ba.y), this.Ye(a)),
        (this.ba = b))
      : (this.aa ? this.na(b, a.shiftKey) : this.Ff(b), (this.ba = void 0));
  };
  p.pg = function(a) {
    this.aa && ((this.aa = !1), this.ea(Kj(this, a)), a.preventDefault());
  };
  p.zh = function(a) {
    this.aa && ((this.aa = !1), this.ea(Kj(this, a)));
  };
  p.yh = function(a) {
    this.If(a);
  };
  p.og = function(a) {
    for (
      var b = a.toElement || a.relatedTarget;
      b && b.parentNode && b.parentNode !== window;

    ) {
      if (b.parentNode === this.da.ha() || b === this.da.ha())
        return b.preventDefault && b.preventDefault(), !1;
      b = b.parentNode;
    }
    this.Gf(a);
  };
  p.Ah = function(a) {
    a.preventDefault();
    a.stopPropagation();
    this.Ze(Kj(this, a.oc), 0 < a.deltaY ? 0.95 : 1.05);
  };
  p.Ch = function(a) {
    a.preventDefault();
  };
  function Kj(a, b) {
    var c =
      b.pageX - a.da.ha().getBoundingClientRect().left - window.pageXOffset;
    a = b.pageY - a.da.ha().getBoundingClientRect().top - window.pageYOffset;
    return new bc(c, a);
  }
  function Lj(a, b, c) {
    this.fa = b;
    this.ba = c / (2 * Math.sin(Math.PI / b));
    yh.call(this, a, this.ba);
    for (a = 0; a < this.fa; a++)
      (b = (2 * a * Math.PI) / this.fa),
        this.aa.push(
          new jd(
            this.qc().x + this.ba * Math.cos(b),
            this.qc().y + this.ba * Math.sin(b)
          )
        );
  }
  F(Lj, yh);
  Lj.prototype.na = function(a) {
    for (var b = 1; b < this.aa.length; b++) {
      var c = this.aa[b];
      var d = this.Vb;
      var e = a;
      d = ld(kd(c.clone(), d), e).add(d);
      c.x = d.x;
      c.y = d.y;
    }
  };
  function Mj(a) {
    X.call(this);
    this.da = a;
  }
  F(Mj, X);
  p = Mj.prototype;
  p.getName = function() {
    return Nj[this.da].toLowerCase();
  };
  p.Qa = function() {
    return Nj[this.da];
  };
  p.fc = function(a) {
    Qf(this.ba, a);
  };
  p.Kb = function() {
    Qf(this.ba, void 0);
  };
  p.Ic = function(a) {
    Rf(this.ba, a);
  };
  p.dc = function() {
    Rf(this.ba, void 0);
  };
  p.ib = function(a) {
    Mj.la.ib.call(this, a);
    var b = Gd(a);
    Oj(this, a.ra(), b);
  };
  p.gb = function(a) {
    Mj.la.gb.call(this, a);
    Pj(this);
  };
  p.cc = function(a) {
    Mj.la.cc.call(this, a);
    for (
      var b = Cd(a), c = [], d = a.ta.va, e = a.Bb.va, m = 0;
      m < d.length;
      m++
    ) {
      var q = d[m];
      q !== a.ta && q !== a.Bb && c.push(q);
    }
    for (m = 0; m < e.length; m++)
      (q = e[m]), q !== a.ta && q !== a.Bb && c.push(q);
    for (e = d = 0; e < c.length; e++) d += Ed(a, c[e]);
    Oj(
      this,
      a.ta.ra(),
      Ad(b + (((this.da - 2) * Math.PI) / (2 * this.da)) * (0 <= d ? -1 : 1))
    );
    this.fa = a;
  };
  p.Cb = function(a) {
    Mj.la.Cb.call(this, a);
    Pj(this);
  };
  p.ac = function(a) {
    Mj.la.ac.call(this, a);
    Oj(this, a, Math.PI / 6);
  };
  p.kc = function(a) {
    Mj.la.kc.call(this, a);
    Pj(this);
  };
  p.tb = function(a, b) {
    Mj.la.tb.call(this, a);
    if (this.aa)
      if (this.fa) {
        if (((b = Fd(this.fa, this.aa.qc())), b !== Fd(this.fa, a))) {
          a = Ad(
            Cd(this.fa) +
              (((this.da - 2) * Math.PI) / (2 * this.da)) * (0 <= b ? -1 : 1)
          );
          b = this.fa.ta.ra();
          var c = this.ba,
            d = this.aa;
          d.Wa(null);
          Uf(c, 'document-rotator-removed', d);
          Oj(this, b, a);
        }
      } else this.aa.Dd(a, b);
  };
  p.sb = function() {
    Mj.la.sb.call(this);
    if (this.aa) {
      var a = this.ba,
        b = this.aa;
      b.Wa(null);
      Uf(a, 'document-rotator-removed', b);
    }
    delete this.aa;
    delete this.fa;
  };
  p.nf = function() {};
  function Pj(a) {
    if (a.aa) {
      var b = a.aa.aa;
      Bi(a);
      for (var c = a.ba, d = 0.3 * a.ea, e = [], m, q = 1; q < b.length; q++)
        (m = ag(c, b[q - 1], b[q], !1, d)), e.push(m);
      m = ag(c, b[b.length - 1], b[0], !1, d);
      e.push(m);
      a.nf(e);
      Ci(a);
    }
    a.sb();
  }
  function Oj(a, b, c) {
    b = new Lj(b, a.da, a.ea);
    Bh(b, c);
    c = a.ba;
    b.Wa(c);
    Uf(c, 'document-rotator-added', b);
    a.aa = b;
  }
  var Nj = {
    3: 'Cyclopropane',
    4: 'Cyclobutane',
    5: 'Cyclopentane',
    6: 'Cyclohexane',
    7: 'Cycloheptane',
    8: 'Cyclooctane'
  };
  function Qj() {
    Mj.call(this, 6);
  }
  F(Qj, Mj);
  Qj.prototype.nf = function(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (2 !== c.Ea) var d = !1;
      else {
        d = c.ta;
        var e = c.Ka();
        d = d.Uc() && !nf(d) && e.Uc() && !nf(e);
      }
      d && (xf(c), b++);
    }
  };
  Qj.prototype.getName = function() {
    return 'benzene';
  };
  Qj.prototype.Qa = function() {
    return 'Benzene';
  };
  function Rj() {
    this.da = new Jj();
    this.ua = new bj();
    this.aa = this.ba = this.na = void 0;
  }
  F(Rj, Fj);
  p = Rj.prototype;
  p.Yc = function(a) {
    Rj.la.Yc.call(this, a);
    this.ma = a;
    this.da.ua = this.Fh.bind(this);
    this.da.na = this.Ue.bind(this);
    this.da.ea = this.Ve.bind(this);
    this.da.Ff = this.uh.bind(this);
    this.da.If = this.xh.bind(this);
    this.da.Gf = this.wh.bind(this);
    this.da.Ze = this.We.bind(this);
    this.da.Ye = this.Pe.bind(this);
    var b = this.da,
      c = a.ba;
    b.da = c;
    b.fa = new Gj(c.ha());
    c.ha().addEventListener('mousedown', b.ng.bind(b), !0);
    c.ha().addEventListener('mousemove', b.vh.bind(b), !0);
    c.ha().addEventListener('mouseup', b.pg.bind(b), !0);
    c.ha().addEventListener('mouseover', b.yh.bind(b), !0);
    c.ha().addEventListener('mouseout', b.og.bind(b), !0);
    window.addEventListener('mouseup', b.zh.bind(b), !0);
    c.ha().addEventListener('MozMousePixelScroll', b.Ch.bind(b), !0);
    L(b.fa, 'mousewheel', b.Ah, !1, b);
    cj(this.ua, a.ha());
    this.na = new rj(a.getParent().ha());
    this.na.Nf('undo', Ob ? 'meta+z' : 'ctrl+z');
    this.na.Nf('redo', Ob ? 'shift+meta+z' : 'ctrl+y');
    L(this.ua, 'key', this.nh, !1, this);
    L(this.na, 'shortcut', this.oh, !1, this);
  };
  function Sj(a) {
    if (void 0 !== a.ba || void 0 !== a.aa)
      a.ba ? a.ma.da.Kb(a.ba) : a.aa && a.ma.da.dc(a.aa),
        (a.ba = void 0),
        (a.aa = void 0);
  }
  p.xh = function() {
    var a = this.ma.ha();
    a.setAttribute('tabindex', 1e3);
    a.focus();
  };
  p.wh = function() {
    Sj(this);
    var a = this.ma.ha();
    a.removeAttribute('tabindex');
    a.blur();
  };
  p.uh = function(a) {
    var b = Gh(this.ma.ba, a);
    a = b ? void 0 : Hh(this.ma.ba, a);
    b
      ? this.ba !== b &&
        (this.ba ? this.ma.da.Kb(this.ba) : this.aa && this.ma.da.dc(this.aa),
        this.ma.da.fc(b),
        (this.ba = b),
        (this.aa = void 0))
      : a
      ? this.aa !== a &&
        (this.ba ? this.ma.da.Kb(this.ba) : this.aa && this.ma.da.dc(this.aa),
        this.ma.da.Ic(a),
        (this.ba = void 0),
        (this.aa = a))
      : Sj(this);
  };
  p.Fh = function(a) {
    Sj(this);
    this.Qe(a);
  };
  p.nh = function(a) {
    if (!a.ctrlKey && !a.metaKey) {
      switch (a.keyCode) {
        case 81:
          Tj(this, 1);
          break;
        case 87:
          Tj(this, -1);
          break;
        case 72:
          Uj(this, 'H');
          break;
        case 66:
          Uj(this, 'B');
          break;
        case 67:
          Uj(this, 'C');
          break;
        case 78:
          Uj(this, 'N');
          break;
        case 79:
          Uj(this, 'O');
          break;
        case 70:
          Uj(this, 'F');
          break;
        case 76:
          Uj(this, 'Cl');
          break;
        case 82:
          Uj(this, 'Br');
          break;
        case 73:
          Uj(this, 'I');
          break;
        case 80:
          Uj(this, 'P');
          break;
        case 90:
          Uj(this, 'Si');
          break;
        case 83:
          Uj(this, 'S');
          break;
        case 84:
          Uj(this, 'Sn');
          break;
        case 46:
          Vj(this);
          break;
        case 8:
          Vj(this);
          break;
        case 65:
          var b = this.ma.aa.ba;
          if (b) {
            var c = new Qj();
            c.Xc(this.ma.Ua.aa);
            c.Hc(this.ma.aa);
            Tf(this.ma.aa);
            c.ib(b);
            c.gb(b);
            Wf(this.ma.aa);
          } else {
            b = this.ma.aa.aa;
            c = [];
            for (var d = 0; d < b.ba.length; d++) {
              var e = b.ba[d];
              e.bd() && c.push(e);
            }
            if ((b = c[0]))
              (c = new Qj()),
                c.Xc(this.ma.Ua.aa),
                c.Hc(this.ma.aa),
                Tf(this.ma.aa),
                c.cc(b),
                c.Cb(b),
                Wf(this.ma.aa);
          }
          break;
        default:
          return;
      }
      a.preventDefault();
    }
  };
  function Uj(a, b) {
    var c = a.ma.aa.ba;
    c && ((b = Lf().ha(b)), Tf(a.ma.aa), lf(c, b), Wf(a.ma.aa));
  }
  function Tj(a, b) {
    var c = a.ma.aa.ba;
    c && (Tf(a.ma.aa), c.tc(b), Wf(a.ma.aa));
  }
  function Vj(a) {
    Tf(a.ma.aa);
    var b = a.ma.aa;
    b.ba ? $f(b, b.ba) : b.da && b.hb(b.da);
    b = a.ma.aa;
    for (var c = cf(b.aa), d = 0; d < c.length; d++) {
      var e = c[d];
      void 0 !== e.getParent() && $f(b, e);
    }
    Wf(a.ma.aa);
  }
  p.oh = function(a) {
    switch (a.identifier) {
      case 'undo':
        this.ma.jd();
        break;
      case 'redo':
        this.ma.cd();
    }
  };
  function Wj() {
    O.call(this);
    this.aa = Xj;
    this.ba = this.pa = void 0;
    this.ea = this.da = 1;
  }
  F(Wj, O);
  p = Wj.prototype;
  p.Kf = function() {};
  p.Lf = function() {};
  p.Jf = function() {};
  p.oe = function() {};
  p.qg = function() {};
  p.$e = function() {};
  p.af = function() {};
  p.Uh = function(a) {
    switch (a.touches.length) {
      case 1:
        if ('http://www.w3.org/2000/svg' === a.target.namespaceURI)
          switch ((a.preventDefault(), this.aa)) {
            case Xj:
              (this.aa = Yj), this.Lf(Zj(this, a));
          }
        break;
      case 2:
        a: {
          void 0 === a.scale &&
            ((this.ea = sd(
              a.touches[0].clientX,
              a.touches[0].clientY,
              a.touches[1].clientX,
              a.touches[1].clientY
            )),
            (a.scale = 1));
          switch (this.aa) {
            case Xj:
              var b = ak(this, a);
              this.ba = b.clone();
              this.da = 1;
              this.aa = bk;
              break;
            case Yj:
              b = ak(this, a);
              this.ba = b.clone();
              this.da = 1;
              this.aa = bk;
              this.oe();
              break;
            default:
              break a;
          }
          a.preventDefault();
        }
    }
  };
  p.Sh = function(a) {
    switch (a.touches.length) {
      case 1:
        switch (this.aa) {
          case Yj:
            this.Kf(Zj(this, a));
        }
        break;
      case 2:
        switch (
          (void 0 === a.scale &&
            (a.scale =
              sd(
                a.touches[0].clientX,
                a.touches[0].clientY,
                a.touches[1].clientX,
                a.touches[1].clientY
              ) / this.ea),
          this.aa)
        ) {
          case bk:
            var b = a.scale / this.da;
            this.$e(ck(this, a));
            this.af(ak(this, a), b);
            this.ba = ak(this, a);
            this.da = a.scale;
        }
    }
  };
  p.Qh = function(a) {
    switch (this.aa) {
      case Yj:
        this.Jf(dk(this, a));
        this.aa = Xj;
        break;
      case bk:
        (this.aa = Xj), (this.ba = void 0);
    }
  };
  p.Ph = function() {
    this.aa = Xj;
    this.ba = void 0;
    this.ea = this.da = 1;
    this.oe();
  };
  function dk(a, b) {
    var c = b.changedTouches[0];
    b = c.pageX - a.pa.getBoundingClientRect().left - window.pageXOffset;
    a = c.pageY - a.pa.getBoundingClientRect().top - window.pageYOffset;
    return new bc(b, a);
  }
  function Zj(a, b) {
    var c = b.touches[0];
    b = c.pageX - a.pa.getBoundingClientRect().left - window.pageXOffset;
    a = c.pageY - a.pa.getBoundingClientRect().top - window.pageYOffset;
    return new bc(b, a);
  }
  function ak(a, b) {
    var c = b.touches[0];
    b = b.touches[1];
    a = a.pa.getBoundingClientRect();
    var d = window.pageXOffset,
      e = window.pageYOffset;
    return new bc(
      $b(c.pageX - a.left - d, b.pageX - a.left - d, 0.5),
      $b(c.pageY - a.top - e, b.pageY - a.top - e, 0.5)
    );
  }
  function ck(a, b) {
    if (!a.ba) return new bc(0, 0);
    b = ak(a, b);
    b.x -= a.ba.x;
    b.y -= a.ba.y;
    return b;
  }
  var Xj = 'touchscreen-state-waiting',
    Yj = 'touchscreen-state-touching',
    bk = 'touchscreen-state-pinching';
  function ek() {
    this.aa = new Wj();
  }
  F(ek, Fj);
  ek.prototype.Yc = function(a) {
    ek.la.Yc.call(this, a);
    this.aa.Lf = this.Qe.bind(this);
    this.aa.Kf = this.Ue.bind(this);
    this.aa.Jf = this.Ve.bind(this);
    this.aa.oe = this.da.bind(this);
    this.aa.qg = this.ba.bind(this);
    this.aa.$e = this.Pe.bind(this);
    this.aa.af = this.We.bind(this);
    var b = this.aa;
    a = a.ha();
    a.addEventListener('touchstart', b.Uh.bind(b), !0);
    a.addEventListener('touchmove', b.Sh.bind(b), !0);
    a.addEventListener('touchend', b.Qh.bind(b), !0);
    a.addEventListener('touchcancel', b.Ph.bind(b), !0);
    b.pa = a;
  };
  ek.prototype.da = function() {
    this.ma.da.sb();
  };
  ek.prototype.ba = function(a, b, c) {
    var d = this.ma;
    b = Nh(d.ba, b);
    Oh(d.ba, b, c);
    this.ma.translate(a);
  };
  function Y() {
    X.call(this);
    this.da = [];
  }
  F(Y, X);
  p = Y.prototype;
  p.getName = function() {
    return this.aa ? this.aa.getName() : Y.la.getName.call(this);
  };
  p.Qa = function() {
    return this.aa ? this.aa.Qa() : Y.la.Qa.call(this);
  };
  p.fc = function(a) {
    this.aa ? this.aa.fc(a) : Y.la.fc.call(this, a);
  };
  p.Kb = function(a) {
    this.aa ? this.aa.Kb(a) : Y.la.Kb.call(this, a);
  };
  p.Ic = function(a) {
    this.aa ? this.aa.Ic(a) : Y.la.Ic.call(this, a);
  };
  p.dc = function(a) {
    this.aa ? this.aa.dc(a) : Y.la.dc.call(this, a);
  };
  p.re = function() {
    return this.aa ? this.aa.getName() : Y.la.re.call(this);
  };
  p.hd = function(a) {
    this.aa ? this.aa.hd(a) : Y.la.hd.call(this, a);
  };
  p.Xc = function(a) {
    Y.la.Xc.call(this, a);
    this.aa && this.aa.Xc(a);
  };
  p.Ha = function(a) {
    this.da.push(a);
    a.Wa(this);
  };
  function Xi(a, b) {
    a: {
      for (var c = 0; c < a.da.length; c++) {
        var d = a.da[c];
        if (d.getName() === b) {
          b = d;
          break a;
        }
      }
      b = void 0;
    }
    if (!b) throw Error(fk);
    a.aa && a.aa.md();
    a.ba && b.Hc(a.ba);
    b.Xc(a.ea);
    a.aa = b;
  }
  p.Hc = function(a) {
    Y.la.Hc.call(this, a);
    this.aa && this.aa.Hc(a);
  };
  p.md = function() {
    Y.la.md.call(this);
    this.aa && this.aa.md();
  };
  p.uc = function() {
    return this.aa ? this.aa.uc() : Y.la.uc.call(this);
  };
  p.ib = function(a) {
    this.aa && this.aa.ib(a);
  };
  p.gb = function(a) {
    this.aa && this.aa.gb(a);
  };
  p.xd = function(a) {
    this.aa && this.aa.xd(a);
  };
  p.Wc = function(a) {
    this.aa && this.aa.Wc(a);
  };
  p.cc = function(a) {
    this.aa && this.aa.cc(a);
  };
  p.Cb = function(a) {
    this.aa && this.aa.Cb(a);
  };
  p.rd = function(a) {
    this.aa && this.aa.rd(a);
  };
  p.ac = function(a) {
    this.aa && this.aa.ac(a);
  };
  p.kc = function(a) {
    this.aa && this.aa.kc(a);
  };
  p.tb = function(a, b) {
    this.aa && this.aa.tb(a, b);
  };
  p.Rd = function(a, b) {
    this.aa && this.aa.Rd(a, b);
  };
  p.sb = function() {
    this.aa && this.aa.sb();
  };
  var fk = 'toolbox-no-such-tool';
  function gk() {
    X.call(this);
    this.aa = new ni();
  }
  F(gk, X);
  p = gk.prototype;
  p.Cb = function(a) {
    gk.la.Cb.call(this, a);
    !this.aa.Ma() && this.lc();
  };
  p.gb = function(a) {
    gk.la.gb.call(this, a);
    !this.aa.Ma() && this.lc();
  };
  p.ac = function(a) {
    gk.la.ac.call(this, a);
    Td(this.aa.aa);
    bf(Di(this));
    oi(this.aa, a);
    a = this.ba;
    var b = this.aa;
    b.Wa(a);
    Uf(a, 'document-lasso-added', b);
  };
  p.kc = function(a) {
    gk.la.kc.call(this, a);
    this.lc();
  };
  p.tb = function(a) {
    gk.la.tb.call(this, a);
    if (!this.aa.Ma()) {
      oi(this.aa, a);
      a = this.ba.aa.aa;
      for (var b = 0; b < a.length; b++)
        0 !== (qi(this.aa, a[b].ra()) & 1) ? a[b].Aa(!0) : a[b].Aa(!1);
    }
  };
  p.sb = function() {
    gk.la.sb.call(this);
    var a = this.ba,
      b = this.aa;
    b.Wa(null);
    Uf(a, 'document-lasso-removed', b);
    bf(Di(this));
    Td(this.aa.aa);
  };
  p.lc = function() {
    var a = this.ba,
      b = this.aa;
    b.Wa(null);
    Uf(a, 'document-lasso-removed', b);
    Td(this.aa.aa);
  };
  function hk() {
    gk.call(this);
    this.da = void 0;
  }
  F(hk, gk);
  p = hk.prototype;
  p.getName = function() {
    return 'move';
  };
  p.Qa = function() {
    return 'Move one or more atoms';
  };
  p.fc = function(a) {
    Qf(this.ba, a);
    a.vc() && this.hd(zi.Ke);
  };
  p.Kb = function() {
    Qf(this.ba, void 0);
    this.hd(zi.je);
  };
  p.ib = function(a) {
    hk.la.ib.call(this, a);
    a.vc() || (bf(Di(this)), a.Aa(!0));
    var b = this.ba;
    b.fa += 1;
    1 === b.fa && Uf(b, 'document-group-move-entered', b);
    this.hd(zi.Ke);
    this.da = a;
  };
  p.gb = function(a) {
    hk.la.gb.call(this, a);
    this.da = void 0;
    a = this.ba;
    if (0 === a.fa) throw Error('document-not-in-group-move');
    --a.fa;
    0 === a.fa && Uf(a, 'document-group-move-exited', a);
  };
  p.Rd = function(a, b) {
    this.tb(a, b);
  };
  p.tb = function(a) {
    if (this.da) {
      var b = a.x - this.da.ra().x;
      a = a.y - this.da.ra().y;
      var c = Di(this).aa;
      Bi(this);
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        if (e.vc()) {
          var m = e.ra();
          e.move(m.x + b, m.y + a);
        }
      }
      Ci(this);
    } else hk.la.tb.call(this, a);
  };
  p.lc = function() {
    hk.la.lc.call(this);
    this.da = void 0;
  };
  function ik() {
    gk.call(this);
    this.da = this.fa = void 0;
  }
  F(ik, gk);
  p = ik.prototype;
  p.Qa = function() {
    return 'Delete atoms and bonds';
  };
  p.getName = function() {
    return 'delete';
  };
  p.uc = function() {
    return !0;
  };
  p.fc = function(a) {
    Qf(this.ba, a);
  };
  p.Ic = function(a) {
    Rf(this.ba, a);
  };
  p.Kb = function() {
    Qf(this.ba, void 0);
  };
  p.dc = function() {
    Rf(this.ba, void 0);
  };
  p.ib = function(a) {
    ik.la.ib.call(this, a);
    a.Aa(!0);
    this.fa = a;
  };
  p.gb = function(a) {
    ik.la.gb.call(this, a);
    a === this.fa && (Bi(this), a.Aa(!1), $f(this.ba, a), Ci(this));
    this.fa = void 0;
  };
  p.Wc = function(a) {
    a.Aa(!1);
    this.fa = void 0;
  };
  p.cc = function(a) {
    a.Aa(!0);
    this.da = a;
  };
  p.rd = function(a) {
    a.Aa(!1);
    this.da = void 0;
  };
  p.Cb = function(a) {
    ik.la.Cb.call(this, a);
    a === this.da && (Bi(this), this.ba.hb(a), Ci(this));
    this.da = void 0;
  };
  p.tb = function(a) {
    this.fa || this.da || ik.la.tb.call(this, a);
  };
  p.sb = function() {
    ik.la.sb.call(this);
    bf(Di(this));
    this.da = this.fa = void 0;
  };
  p.lc = function() {
    if (this.aa.Ma()) bf(Di(this));
    else {
      Bi(this);
      for (var a = cf(Di(this)), b = 0; b < a.length; b++) {
        var c = a[b];
        c.Aa(!1);
        Di(this).bc(c);
      }
      Ci(this);
    }
    this.fa = this.da = void 0;
    ik.la.lc.call(this);
  };
  function jk() {
    gk.call(this);
    this.fa = void 0;
  }
  F(jk, gk);
  p = jk.prototype;
  p.Qa = function() {
    return 'Saturate atoms';
  };
  p.getName = function() {
    return 'saturate';
  };
  p.uc = function() {
    return !1;
  };
  p.fc = function(a) {
    Qf(this.ba, a);
  };
  p.Kb = function() {
    Qf(this.ba, void 0);
  };
  p.ib = function(a) {
    jk.la.ib.call(this, a);
    a.Aa(!0);
    this.fa = a;
  };
  p.gb = function(a) {
    jk.la.gb.call(this, a);
    a === this.fa && (Bi(this), a.Aa(!1), this.ba.Zd(a, this.ea), Ci(this));
    this.fa = void 0;
  };
  p.sb = function() {
    jk.la.sb.call(this);
    bf(Di(this));
    this.da = this.fa = void 0;
  };
  p.lc = function() {
    if (this.aa.Ma()) bf(Di(this));
    else {
      Bi(this);
      for (var a = cf(Di(this)), b = 0; b < a.length; b++) {
        var c = a[b];
        c.Aa(!1);
        this.ba.Zd(c, this.ea);
      }
      Ci(this);
    }
    this.fa = void 0;
    jk.la.lc.call(this);
  };
  function kk(a, b) {
    yh.call(this, a, b);
    this.aa.push(this.Vb);
    this.aa.push(this.qc());
    this.ba = b || 1;
    this.fa = void 0;
  }
  F(kk, yh);
  kk.prototype.Dd = function(a, b) {
    this.fa || kk.la.Dd.call(this, a, b);
  };
  function lk(a, b) {
    a.fa = a.qc().clone();
    a.ea.x = b.x;
    a.ea.y = b.y;
    P(a, new K(Ah));
  }
  function mk(a, b) {
    if (!a.fa) throw Error(nk);
    a.fa = void 0;
    var c = a.qc(),
      d = a.Vb,
      e = d.x - b.x;
    d = d.y - b.y;
    e = a.ba / Math.sqrt(e * e + d * d);
    c.x = $b(a.Vb.x, b.x, e);
    c.y = $b(a.Vb.y, b.y, e);
    a.Dd(b);
  }
  var nk = 'line-rotator-can-not-unclamp';
  function ok() {
    X.call(this);
    this.fa = this.da = this.qa = void 0;
    this.na = !1;
  }
  F(ok, X);
  p = ok.prototype;
  p.getName = function() {
    return 'single-bond';
  };
  p.Qa = function() {
    return 'Single Bond';
  };
  p.fc = function(a) {
    Qf(this.ba, a);
  };
  p.Kb = function() {
    Qf(this.ba, void 0);
  };
  p.Ic = function(a) {
    Rf(this.ba, a);
  };
  p.dc = function() {
    Rf(this.ba, void 0);
  };
  p.Fb = function() {
    return Ve;
  };
  p.ib = function(a) {
    ok.la.ib.call(this, a);
    var b = Jd(a);
    pk(this, a.ra(), b);
    this.qa = a;
  };
  p.gb = function(a) {
    ok.la.gb.call(this, a);
    qk(this);
  };
  p.xd = function(a) {
    ok.la.xd.call(this, a);
    a !== this.qa && this.aa && (lk(this.aa, a.ra()), (this.fa = a));
  };
  p.Wc = function(a) {
    ok.la.Wc.call(this, a);
    this.fa && this.fa === a && mk(this.aa, a.ra());
  };
  p.cc = function(a) {
    ok.la.cc.call(this, a);
    a.Aa(!0);
    this.da = a;
  };
  p.Cb = function(a) {
    ok.la.Cb.call(this, a);
    qk(this);
  };
  p.ac = function(a) {
    ok.la.ac.call(this, a);
    pk(this, a, Math.PI / 6);
  };
  p.kc = function(a) {
    ok.la.kc.call(this, a);
    qk(this);
  };
  p.tb = function(a, b) {
    ok.la.tb.call(this, a, b);
    b
      ? (lk(this.aa, a), (this.na = !0))
      : (this.na && ((this.na = !1), mk(this.aa, a), delete this.fa),
        this.aa && this.aa.Dd(a, b));
  };
  p.sb = function() {
    if (this.aa) {
      var a = this.ba,
        b = this.aa;
      b.Wa(null);
      Uf(a, 'document-rotator-removed', b);
    }
    this.fa = this.qa = this.aa = void 0;
    this.na = !1;
    bf(this.ba.aa);
  };
  function qk(a) {
    a.aa &&
      (Bi(a), ag(a.ba, a.aa.Vb, a.aa.qc(), !0, 0.3 * a.ea, a.Fb()), Ci(a));
    if (a.da) {
      a.da.Aa(!1);
      Bi(a);
      if (a.Fb() === Ve) xf(a.da);
      else if (a.da.Fb() === a.Fb()) {
        var b = a.da,
          c = b.ta,
          d = b.Bb,
          e = b.Oa();
        b.ta = d;
        b.Bb = c;
        Xe(b, Ye, b, e);
      } else We(a.da, a.Fb());
      Ci(a);
      a.da = void 0;
    }
    a.sb();
  }
  function pk(a, b, c) {
    b = new kk(b, a.ea);
    Bh(b, c);
    c = a.ba;
    b.Wa(c);
    Uf(c, 'document-rotator-added', b);
    a.aa = b;
  }
  function rk() {
    ok.call(this);
  }
  F(rk, ok);
  rk.prototype.getName = function() {
    return 'wedge-bond';
  };
  rk.prototype.Qa = function() {
    return 'Wedge Bond';
  };
  rk.prototype.Fb = function() {
    return 'wedge';
  };
  function sk() {
    ok.call(this);
  }
  F(sk, ok);
  sk.prototype.getName = function() {
    return 'hash-bond';
  };
  sk.prototype.Qa = function() {
    return 'Hash Bond';
  };
  sk.prototype.Fb = function() {
    return 'hash';
  };
  function tk() {
    ok.call(this);
  }
  F(tk, ok);
  tk.prototype.getName = function() {
    return 'wavy-bond';
  };
  tk.prototype.Qa = function() {
    return 'Wavy Bond';
  };
  tk.prototype.Fb = function() {
    return 'either';
  };
  function uk() {
    X.call(this);
  }
  F(uk, X);
  p = uk.prototype;
  p.ub = function() {};
  p.Ic = function(a) {
    Rf(this.ba, a);
  };
  p.dc = function() {
    Rf(this.ba, void 0);
  };
  p.cc = function(a) {
    a.Aa(!0);
    this.aa = a;
  };
  p.Cb = function(a) {
    this.aa === a && (this.ub(a), a.Aa(!1), delete this.aa);
  };
  p.rd = function(a) {
    this.aa === a && a.Aa(!1);
    delete this.aa;
  };
  function vk() {
    X.call(this);
  }
  F(vk, uk);
  vk.prototype.ub = function(a) {
    Bi(this);
    'cis-or-trans' === a.Fb()
      ? We(a, Ve)
      : (a.tc(a.Ea - 4), We(a, 'cis-or-trans'));
    Ci(this);
  };
  vk.prototype.getName = function() {
    return 'crossed-bond';
  };
  vk.prototype.Qa = function() {
    return 'Cis or Trans Double Bond';
  };
  function wk() {
    X.call(this);
  }
  F(wk, X);
  p = wk.prototype;
  p.ub = function() {};
  p.fc = function(a) {
    Qf(this.ba, a);
  };
  p.Kb = function() {
    Qf(this.ba, void 0);
  };
  p.ib = function(a) {
    a.Aa(!0);
    this.aa = a;
  };
  p.gb = function(a) {
    this.aa === a && (this.ub(a), a.Aa(!1));
    delete this.aa;
  };
  p.Wc = function(a) {
    this.aa === a && a.Aa(!1);
  };
  function xk() {
    X.call(this);
  }
  F(xk, wk);
  xk.prototype.getName = function() {
    return 'increase-charge';
  };
  xk.prototype.Qa = function() {
    return 'Increase charge';
  };
  xk.prototype.ub = function(a) {
    Bi(this);
    a.tc(1);
    Ci(this);
  };
  function yk() {
    X.call(this);
  }
  F(yk, wk);
  yk.prototype.getName = function() {
    return 'decrease-charge';
  };
  yk.prototype.Qa = function() {
    return 'Decrease charge';
  };
  yk.prototype.ub = function(a) {
    Bi(this);
    a.tc(-1);
    Ci(this);
  };
  function zk() {
    X.call(this);
  }
  F(zk, wk);
  zk.prototype.getName = function() {
    return 'increase-radical';
  };
  zk.prototype.Qa = function() {
    return 'Increase radical';
  };
  zk.prototype.ub = function(a) {
    Bi(this);
    of(a);
    Ci(this);
  };
  function Ak() {
    X.call(this);
  }
  F(Ak, wk);
  Ak.prototype.getName = function() {
    return 'next-isotope';
  };
  Ak.prototype.Qa = function() {
    return 'Set isotope to next available';
  };
  Ak.prototype.ub = function(a) {
    Bi(this);
    var b = a.pa.Vc;
    if (b.length) {
      var c = a.Oa();
      if (a.aa) {
        var d = db(b, a.aa);
        d === b.length - 1 ? delete a.aa : (d++, (a.aa = b[d]));
      } else a.aa = b[0];
      Ne(a, Qe, a, c);
    }
    Ci(this);
  };
  function Bk() {
    X.call(this);
  }
  F(Bk, wk);
  Bk.prototype.getName = function() {
    return 'mark-atom';
  };
  Bk.prototype.Qa = function() {
    return 'Mark/unmark atom';
  };
  Bk.prototype.ub = function(a) {
    Bi(this);
    Pe(a, !a.fa);
    Ci(this);
  };
  function Ck() {}
  function Dk(a, b) {
    Ek(
      b,
      'undo',
      'Undo [' + (Ob ? '\u2318Z' : 'Ctrl-Z') + ']',
      function(c) {
        c.jd();
      },
      Fk
    );
    Ek(
      b,
      'redo',
      'Redo [' + (Ob ? '\u21e7\u2318Z' : 'Ctrl-Y') + ']',
      function(c) {
        c.cd();
      },
      Gk
    );
    Ek(
      b,
      'new-document',
      'New Document',
      function(c) {
        c = c.ma;
        Tf(c.aa);
        Sf(c.aa);
        Wf(c.aa);
      },
      Hk
    );
    Ek(b, 'edit-document', 'Copy & Paste', function(c) {
      c.mf.Od();
    });
    Ek(
      b,
      'reset-view',
      'Zoom to Fit',
      function(c) {
        c.ed();
      },
      Ik
    );
    Ek(
      b,
      'full-screen',
      a.aa ? 'Exit Full Screen' : 'Full Screen',
      function(c) {
        var d = c.ha().parentNode,
          e = document.querySelector('body');
        c.fd
          ? (d.setAttribute('style', c.fd.parent),
            d.classList.remove('chemwriter-fullscreen'),
            c.fd.body
              ? e.setAttribute('style', c.fd.body)
              : e.removeAttribute('style'),
            (c.fd = void 0))
          : ((c.fd = {
              parent: d.getAttribute('style'),
              body: e.getAttribute('style')
            }),
            d.removeAttribute('style'),
            d.classList.add('chemwriter-fullscreen'),
            e.setAttribute('style', 'position: fixed; overflow: hidden'));
        c.ma.ed();
      },
      Jk
    );
    // Ek(b, 'about', 'About ChemWriter', function(c) {
    //   c.Le.Od();
    // });
  }
  var Kk = Db(),
    Lk =
      I('Safari') &&
      !(
        Db() ||
        I('Coast') ||
        I('Opera') ||
        I('Edge') ||
        I('Firefox') ||
        I('FxiOS') ||
        I('Silk') ||
        I('Android')
      ) &&
      !((I('iPhone') && !I('iPod') && !I('iPad')) || I('iPad') || I('iPod'));
  function Mk() {
    Q.call(this);
  }
  F(Mk, Q);
  Mk.prototype.Od = function() {
    Ob && (Lk || Kk)
      ? vh(this.ha(), 'chemwriter-show-no-transition')
      : vh(this.ha(), 'chemwriter-show');
  };
  Mk.prototype.ld = function() {
    Ob && (Lk || Kk)
      ? wh(this.ha(), 'chemwriter-show-no-transition')
      : wh(this.ha(), 'chemwriter-show');
  };
  Mk.prototype.Sa = function() {
    this.pa = J('div', {
      class:
        Ob && (Lk || Kk)
          ? 'chemwriter-overlay-no-transition'
          : 'chemwriter-overlay'
    });
  };
  function Nk(a) {
    Q.call(this);
    this.aa = a;
  }
  F(Nk, Q);
  Nk.prototype.Sa = function() {
    this.pa = J('div', { class: this.aa });
  };
  function Ok(a, b) {
    a.ha().appendChild(b);
  }
  function Pk() {
    Q.call(this);
  }
  F(Pk, Q);
  Pk.prototype.Sa = function() {
    this.pa = J('ul', { class: 'chemwriter-button-row' });
  };
  function Qk(a) {
    Q.call(this);
    this.Lc = a || '#000000';
    this.ba = new Pk();
    this.da = new Nk('chemwriter-content');
    R(this, this.da);
    R(this, this.ba);
  }
  F(Qk, Mk);
  Qk.prototype.Sa = function() {
    Qk.la.Sa.call(this);
    this.Ua = J('div', {
      class: 'chemwriter-dialog',
      style: 'background-color:' + this.Lc + ';'
    });
    this.ha().appendChild(this.Ua);
  };
  Qk.prototype.qe = function() {
    return this.Ua;
  };
  function Rk(a) {
    Q.call(this);
    this.da = a;
    this.aa = !0;
  }
  F(Rk, Q);
  Rk.prototype.Sa = function() {
    this.pa = J('li', { class: 'chemwriter-text-button' }, this.da);
  };
  Rk.prototype.Fa = function() {
    Rk.la.Fa.call(this);
    Sk(this);
    L(this.ha(), 'touchend', this.ba, !1, this);
    L(this.ha(), 'click', this.ba, !1, this);
  };
  Rk.prototype.ba = function(a) {
    a.preventDefault();
    a.stopPropagation();
    this.aa && P(this, Tk);
  };
  Rk.prototype.hc = function(a) {
    this.aa !== a && ((this.aa = a), Sk(this));
  };
  function Sk(a) {
    a.Qb &&
      (a.aa
        ? (wh(a.ha(), 'chemwriter-button-disabled'),
          vh(a.ha(), 'chemwriter-button-enabled'))
        : (wh(a.ha(), 'chemwriter-button-enabled'),
          vh(a.ha(), 'chemwriter-button-disabled')));
  }
  var Tk = 'text-button-pressed';
  function Uk() {
    Q.call(this);
    this.aa = this.ba = void 0;
  }
  F(Uk, Q);
  Uk.prototype.Sa = function() {
    var a = J('div', { class: 'chemwriter-code-editor' }),
      b = J('textarea', {
        class: 'chemwriter-code-editor-front',
        spellcheck: !1,
        wrap: 'off'
      }),
      c = J('textarea', {
        class: 'chemwriter-code-editor-back',
        spellcheck: !1,
        wrap: 'off'
      });
    b.addEventListener(
      'scroll',
      function() {
        c.scrollTop = b.scrollTop;
        c.scrollLeft = b.scrollLeft;
      },
      !1
    );
    a.appendChild(c);
    a.appendChild(b);
    this.pa = a;
    this.ba = b;
    this.aa = c;
  };
  Uk.prototype.td = function() {
    return '' === this.aa.value;
  };
  function Vk(a, b) {
    a.ba.value = b;
    a.aa.value = '';
  }
  function Wk(a, b) {
    var c = a.ba.value.split(/[\n|\r\n]/);
    c[b] = c[b].replace(/[^\n|\r\n]/g, String.fromCharCode(9608));
    if ('' === c[b])
      for (var d = 0; 80 > d; d++) c[b] += String.fromCharCode(9608);
    a.aa.value = c.join('\n');
    a.aa.scrollTop = a.ba.scrollTop;
  }
  function Xk(a) {
    a.ba.select();
    a.ba.scrollTop = 0;
    a.aa.scrollTop = 0;
  }
  function Yk(a) {
    Q.call(this);
    this.da = '';
    this.ea = new Nk('chemwriter-left-panel');
    this.qa = new Nk('chemwriter-right-panel');
    this.aa = new Uk();
    this.ba = new Sg(a);
    R(this.ea, this.aa);
    R(this.qa, this.ba);
    R(this, this.ea);
    R(this, this.qa);
  }
  F(Yk, Q);
  Yk.prototype.Sa = function() {
    this.pa = J('div', { class: 'chemwriter-clipboard' });
  };
  Yk.prototype.Fa = function() {
    Yk.la.Fa.call(this);
  };
  function Zk(a, b) {
    Vk(a.aa, b);
    try {
      a.ba.ic(b), (a.aa.aa.value = '');
    } catch (c) {
      Wk(a.aa, c.Qf);
    }
    setTimeout(
      function() {
        Xk(this.aa);
      }.bind(a),
      1
    );
  }
  function $k(a, b) {
    Qk.call(this);
    this.gd = a;
    this.yb = void 0;
    this.ea = new Rk('Use Molecule');
    this.Ub = new Rk('Select All');
    this.xa = new Rk('Clear');
    this.qa = new Rk('Cancel');
    this.aa = new Yk(b);
    R(this.ba, this.ea);
    R(this.ba, this.Ub);
    R(this.ba, this.xa);
    R(this.ba, this.qa);
    R(this.da, this.aa);
  }
  F($k, Qk);
  p = $k.prototype;
  p.Fa = function() {
    $k.la.Fa.call(this);
    L(this.ea, Tk, this.Zh, !1, this);
    L(this.Ub, Tk, this.Jh, !1, this);
    L(this.xa, Tk, this.gh, !1, this);
    L(this.qa, Tk, this.fh, !1, this);
  };
  p.Od = function() {
    $k.la.Od.call(this);
    Zk(this.aa, this.getParent().Td());
    this.yb = setInterval(this.mh.bind(this), 100);
  };
  p.ld = function() {
    $k.la.ld.call(this);
    clearInterval(this.yb);
  };
  p.mh = function() {
    var a = this.aa,
      b = a.aa.ba.value;
    if (a.da !== b) {
      a.da = b;
      try {
        a.ba.ic(b), (a.aa.aa.value = '');
      } catch (c) {
        Wk(a.aa, c.Qf);
      }
    }
    this.ea.hc(this.aa.aa.td());
  };
  p.Zh = function() {
    this.gd.ic(this.aa.aa.ba.value);
    this.ld();
  };
  p.Jh = function() {
    Xk(this.aa.aa);
  };
  p.gh = function() {
    Zk(this.aa, '');
  };
  p.fh = function() {
    this.ld();
  };
  function al() {
    Qk.call(this);
    this.xa = new Rk('Done');
    this.aa = new Nk('chemwriter-about-panel');
    this.ea = new Nk('chemwriter-documentation-panel');
    R(this.ba, this.xa);
    R(this.da, this.aa);
    R(this.da, this.ea);
  }
  F(al, Qk);
//   al.prototype.Fa = function() {
//     al.la.Fa.call(this);
//     var a = J('div', { class: 'chemwriter-logo' }),
//       b = J('div', { class: 'chemwriter-product-name' }),
//       c = J('div', { class: 'chemwriter-rev' }, 'Version: 3.9.3'),
//       d = J('div', { class: 'chemwriter-rev' }, 'Commit: 7532092b'),
//       e = J(
//         'div',
//         { class: 'chemwriter-authors' },
//         'Authors: Richard Apodaca; Robert Apodaca; Orion Jankowski; Zachary Catlin'
//       ),
//       m = J('div', { class: 'chemwriter-copyright' });
//     b.innerHTML = 'ChemWriter<span class="chemwriter-super">&reg;</span>';
//     m.innerHTML =
//       '&copy; 2007-2019 <a href="http://metamolecular.com" target="_blank">Metamolecular, LLC';
//     Ok(this.aa, a);
//     Ok(this.aa, b);
//     Ok(this.aa, c);
//     Ok(this.aa, d);
//     Ok(this.aa, e);
//     Ok(this.aa, m);
//     a = J('ul', { class: 'chemwriter-list' });
//     b = J('li', { class: 'chemwriter-list-item' });
//     c = J('li', { class: 'chemwriter-list-item' });
//     d = J('li', { class: 'chemwriter-list-item' });
//     b.innerHTML =
//       '<a href="http://chemwriter.com/user-guide/" target="_blank">User Guide</a>';
//     c.innerHTML =
//       '<a href="http://chemwriter.com/developer-guide/" target="_blank">Developer Guide</a>';
//     d.innerHTML =
//       '<a href="http://chemwriter.com/support?subject=chemwriter-about-dialog" target="_blank">Questions & Comments</a>';
//     a.appendChild(b);
//     a.appendChild(c);
//     a.appendChild(d);
//     Ok(this.ea, a);
//     L(this, Tk, this.qa, !1, this);
//   };
  al.prototype.qa = function() {
    this.ld();
  };
  function bl(a) {
    Q.call(this);
    this.Lc = a;
    this.ea = [];
  }
  F(bl, Q);
  bl.prototype.Sa = function() {
    switch (this.Lc) {
      case cl:
        var a = 'chemwriter-palette-left';
        break;
      case dl:
        a = 'chemwriter-palette-bottom';
        break;
      case el:
        a = 'chemwriter-palette-right';
        break;
      case fl:
        a = 'chemwriter-palette-bottom-right';
        break;
      case gl:
        a = 'chemwriter-palette-float';
        break;
      case jm:
        a = 'chemwriter-palette-box';
    }
    this.pa = J('div', { class: a + ' chemwriter-palette ' });
  };
  function km(a, b) {
    a.ea.push(b);
    R(a, b);
  }
  function lm(a, b) {
    for (var c = 0; c < a.ea.length; c++) {
      var d = a.ea[c];
      if (d.getName() === b) {
        mm(d, !0);
        break;
      }
    }
  }
  var cl = 'palette-left',
    el = 'palette-right',
    dl = 'palette-bottom',
    fl = 'palette-bottom-right',
    gl = 'palette-float',
    jm = 'palette-box';
  function nm() {
    Q.call(this);
    this.aa = new bl(gl);
    this.ba = [];
    R(this, this.aa);
  }
  F(nm, Q);
  function om(a, b) {
    0 === a.ba.length && mm(b, !0);
    km(a.aa, b);
    a.ba.push(b);
  }
  nm.prototype.Sa = function() {
    this.pa = J('div', { class: 'chemwriter-dynamic-palette' });
  };
  nm.prototype.Fa = function() {
    nm.la.Fa.call(this);
    L(this.ha(), 'touchend', this.da, !1, this);
    L(this.ha(), 'click', this.da, !1, this);
  };
  nm.prototype.da = function() {
    wh(this.ha(), 'chemwriter-appear');
  };
  function pm(a) {
    Q.call(this);
    this.aa = a;
  }
  F(pm, Q);
  pm.prototype.Sa = function() {
    this.pa = J('div', { class: this.aa });
  };
  function qm(a) {
    Q.call(this);
    this.ba = a;
    this.aa = void 0;
  }
  F(qm, Q);
  qm.prototype.Fa = function() {
    qm.la.Fa.call(this);
    this.ha().value = this.Id;
    this.ha() && (this.aa.value = this.Id);
    L(this.ha(), 'change', this.da, !1, this);
  };
  qm.prototype.Sa = function() {
    var a = J('div', { class: 'chemwriter-select' });
    this.aa = J('select', {});
    for (var b = 0; b < this.ba.length; b += 2) {
      var c = this.ba[b + 1],
        d = J('option', { value: this.ba[b] });
      d.textContent = c;
      this.aa.appendChild(d);
    }
    a.appendChild(this.aa);
    this.pa = a;
  };
  qm.prototype.da = function() {
    this.Id = this.aa.value;
    P(this, rm);
  };
  var rm = 'select-selected';
  function sm(a) {
    Q.call(this);
    this.aa = new tm('button', 'tooltip', !1, '', !1);
    var b = Lf();
    b = Object.keys(b.aa);
    var c = [];
    b.sort(mb);
    for (var d = 0; d < b.length; d++) {
      var e = b[d];
      c.push(e);
      c.push(e);
    }
    this.da = new qm(c);
    this.ba = void 0;
    R(this, this.aa);
    R(this, this.da);
    um(a, this.aa);
  }
  F(sm, Q);
  sm.prototype.Sa = function() {
    this.pa = J('div', { class: 'chemwriter-element-select' });
  };
  sm.prototype.Fa = function() {
    sm.la.Fa.call(this);
    L(this.da, rm, this.ea, !1, this);
  };
  function vm(a, b) {
    var c = a.aa,
      d = b.Zb;
    c.ha() && (c.ha().textContent = d);
    c.da = d;
    wm(a.aa, b.getName());
    c = a.da;
    c.Id = b.Zb;
    c.ha() && (c.aa.value = c.Id);
    a.ba = b;
  }
  sm.prototype.ea = function(a) {
    a = a.target.Id;
    a = Lf().ha(a);
    vm(this, a);
    mm(this.aa, !0);
  };
  function xm(a) {
    bl.call(this, dl);
    this.Ub = a;
    this.da = void 0;
    this.xa = {};
    this.qa = new pm('chemwriter-palette-box');
    this.ba = new pm('chemwriter-flex-box');
    this.yb = new pm('chemwriter-stiff-box');
    this.aa = new sm(a);
    this.Ua = new Ch();
    R(this.qa, this.ba);
    R(this.qa, this.yb);
    R(this.yb, this.aa);
    R(this, this.qa);
    L(this.Ua, Eh, this.vg, !1, this);
    Dh(this.Ua, this);
  }
  F(xm, bl);
  p = xm.prototype;
  p.Fa = function() {
    xm.la.Fa.call(this);
    L(this.ba, ym, this.sh, !1, this);
    L(this.aa, rm, this.Lh, !1, this);
    L(this.aa, ym, this.Kh, !1, this);
  };
  function zm(a, b) {
    var c = a.aa.ba;
    if (c) {
      var d = new tm('button', c.getName(), !1, c.Zb, !1);
      R(a.ba, d);
      um(a.Ub, d);
      a.xa[E(d)] = c;
    }
    vm(a.aa, b);
  }
  p.vg = function() {
    for (
      var a = hd(this.ba).reverse(),
        b = Number.POSITIVE_INFINITY,
        c = !1,
        d = 0;
      d < a.length;
      d++
    ) {
      var e = gd(this.ba, a[d]),
        m = e.ha().getBoundingClientRect().top;
      e.fe ? ((c = !0), (b = m)) : c && m < b && ((b = m), mm(e, !0));
    }
  };
  p.sh = function(a) {
    this.da = this.xa[E(a.target)];
    P(this, Am);
  };
  p.Lh = function() {
    this.da = this.aa.ba;
    P(this, Am);
  };
  p.Kh = function() {
    this.da = this.aa.ba;
    P(this, Am);
  };
  var Am = 'element-selected';
  function Bm() {
    X.call(this);
    this.pa = void 0;
  }
  F(Bm, wk);
  Bm.prototype.getName = function() {
    return 'element';
  };
  Bm.prototype.Qa = function() {
    return this.pa ? this.pa.getName() : '';
  };
  Bm.prototype.ac = function(a) {
    Bi(this);
    a = this.ba.aa.jc(this.pa.Zb, a.x, a.y);
    Ci(this);
    this.ib(a);
  };
  Bm.prototype.ub = function() {
    Bi(this);
    lf(this.aa, this.pa);
    Ci(this);
  };
  function Cm() {
    Q.call(this);
  }
  F(Cm, Q);
  Cm.prototype.Sa = function() {
    this.pa = J('div', { class: 'chemwriter-icon' });
  };
  function tm(a, b, c, d, e) {
    Q.call(this);
    this.fe = !1;
    this.ba = !0;
    this.aa = void 0;
    this.Ua = c || !1;
    this.da = d || void 0;
    this.xa = e || !1;
    this.qa = void 0;
    Dm(this, a);
    wm(this, b);
    d || ((this.qa = new Cm()), R(this, this.qa));
  }
  F(tm, Q);
  p = tm.prototype;
  p.Sa = function() {
    var a = J('div', {
      class: Em(this) + ' chemwriter-button',
      title: this.yb
    });
    this.Ua &&
      a.appendChild(J('div', { class: 'chemwriter-detail-disclosure' }));
    this.da && (a.textContent = this.da);
    this.pa = a;
  };
  p.Fa = function() {
    tm.la.Fa.call(this);
    this.ba ? (Fm(this), vh(this.ha(), Gm)) : vh(this.ha(), Hm);
  };
  p.hc = function(a) {
    this.ba !== a &&
      (this.ha() &&
        (a
          ? (vh(this.ha(), Gm), wh(this.ha(), Hm), Fm(this))
          : (wh(this.ha(), Gm),
            vh(this.ha(), Hm),
            wh(this.ha(), Im),
            M(this.ha(), 'touchstart', this.Kd, !1, this),
            M(this.ha(), 'touchend', this.Ld, !1, this),
            M(this.ha(), 'mousedown', this.Kd, !1, this),
            M(this.ha(), 'mouseup', this.Ld, !1, this),
            M(this.ha(), 'mouseout', this.bf, !1, this))),
      (this.ba = a),
      (this.fe = !1));
  };
  function mm(a, b) {
    if (a.fe !== b && a.ba) {
      if (a.ha()) {
        var c = a.ha(),
          d = Im;
        uh(c, d) ? wh(c, d) : vh(c, d);
      }
      b && P(a, ym);
      a.fe = b;
    }
  }
  function Dm(a, b) {
    a.ha() && wh(a.ha(), Em(a));
    a.ea = b;
    a.ha() && vh(a.ha(), Em(a));
  }
  p.getName = function() {
    return this.ea;
  };
  function wm(a, b) {
    a.yb = b;
    a.ha() && (a.ha().title = b);
  }
  function Fm(a) {
    L(a.ha(), 'touchstart', a.Kd, !1, a);
    L(a.ha(), 'touchend', a.Ld, !1, a);
    L(a.ha(), 'mousedown', a.Kd, !1, a);
    L(a.ha(), 'mouseup', a.Ld, !1, a);
    L(a.ha(), 'mouseout', a.bf, !1, a);
  }
  p.Kd = function(a) {
    a.preventDefault();
    this.ba && (this.aa = window.setTimeout(this.Mh.bind(this), 200));
  };
  p.Ld = function(a) {
    a.preventDefault();
    this.aa && (mm(this, !0), this.xa && mm(this, !1));
    Jm(this);
  };
  p.bf = function(a) {
    a.preventDefault();
    Jm(this);
  };
  p.Mh = function() {
    mm(this, !0);
    P(this, Km);
    this.aa = void 0;
  };
  function Jm(a) {
    a.aa && (window.clearTimeout(a.aa), (a.aa = void 0));
  }
  function Em(a) {
    return 'chemwriter-button-' + a.ea;
  }
  var ym = 'button-pressed',
    Km = 'button-held',
    Im = 'chemwriter-button-pressed',
    Gm = 'chemwriter-button-enabled',
    Hm = 'chemwriter-button-disabled';
  function Lm() {
    O.call(this);
    this.aa = [];
  }
  F(Lm, O);
  function um(a, b) {
    a.aa.push(b);
    L(b, ym, a.ba, !1, a);
  }
  Lm.prototype.ba = function(a) {
    a = a.target;
    for (var b = 0; b < this.aa.length; b++) {
      var c = this.aa[b];
      c !== a && mm(c, !1);
    }
  };
  function Mm(a) {
    Q.call(this);
    this.ma = new Ti(a);
    this.ea = new Lm();
    this.da = new bl(cl);
    this.aa = new xm(this.ea);
    this.Ua = new bl(el);
    this.xa = new bl(fl);
    this.Le = new al();
    this.mf = new $k(this, a);
    this.Ub = new ek();
    this.yb = new Rj();
    this.qa = new Bm();
    this.ba = {};
    R(this, this.da);
    R(this, this.aa);
    R(this, this.Ua);
    R(this, this.xa);
    R(this, this.ma);
    R(this, this.mf);
    R(this, this.Le);
    this.ma.Ha(this.qa);
    this.Jb = a;
    this.fd = void 0;
  }
  F(Mm, Q);
  p = Mm.prototype;
  p.Sa = function() {
    this.pa = J('div', { class: 'chemwriter-editor' });
  };
  p.Fa = function() {
    Mm.la.Fa.call(this);
    this.Ub.Yc(this.ma);
    this.yb.Yc(this.ma);
    this.ma.ed();
    L(this, oh, this.Xh, !0, this);
    L(this, ih, this.Yh, !0, this);
    L(this, mh, this.Vh, !0, this);
    L(this, jh, this.Wh, !0, this);
    L(this, Yf, this.tg, !1, this);
    L(this.aa, Am, this.lh, !1, this);
  };
  p.jd = function() {
    this.ma.jd();
  };
  p.cd = function() {
    this.ma.cd();
  };
  p.ed = function() {
    this.ma.ed();
  };
  p.ic = function(a) {
    var b = new Pf();
    Ig(a, b.aa);
    Vi(this.ma, b);
    Nm(this);
  };
  p.ug = function(a) {
    var b = new Pf();
    Hg(a, b.aa);
    Vi(this.ma, b);
    Nm(this);
  };
  p.Td = function() {
    return Kg(this.ma.aa.aa);
  };
  p.Ma = function() {
    return this.ma.Ma();
  };
  p.Ha = function(a) {
    var b = new tm(a.getName(), a.Qa());
    L(
      b,
      ym,
      function() {
        Wi(this.ma, a.getName());
      },
      !1,
      this
    );
    km(this.da, b);
    um(this.ea, b);
    this.ma.Ha(a);
  };
  function Om(a, b) {
    for (
      var c = b.da[0],
        d = new tm(c.getName(), c.Qa(), !0),
        e = new nm(),
        m = new Lm(),
        q = b.da,
        t = 0;
      t < q.length;
      t++
    ) {
      var z = q[t],
        D = Pm(a, z, d, b);
      om(e, D);
      um(m, D);
      a.ma.Ha(z);
    }
    R(a, e);
    km(a.da, d);
    um(a.ea, d);
    L(
      d,
      ym,
      function() {
        Wi(this.ma, b.aa.getName());
      },
      !1,
      a
    );
    L(
      d,
      Km,
      function() {
        var C = d.ha().offsetTop;
        vh(e.ha(), 'chemwriter-appear');
        e.aa.ha().style.top = C - 4 + 'px';
      },
      !1,
      a
    );
    Xi(b, c.getName());
  }
  p.bg = function(a) {
    var b = Lf();
    zm(this.aa, b.ha(a));
  };
  function Ek(a, b, c, d, e) {
    b = new tm(b, c, !1, void 0, !0);
    L(
      b,
      ym,
      function() {
        d(this);
      },
      !1,
      a
    );
    if (e)
      switch (((a.ba[e] = b), e)) {
        case Fk:
          b.hc(!1);
          break;
        case Gk:
          b.hc(!1);
      }
    e === Jk ? km(a.xa, b) : km(a.Ua, b);
  }
  function Pm(a, b, c, d) {
    var e = new tm(b.getName(), b.Qa());
    L(
      e,
      ym,
      function() {
        Dm(c, b.getName());
        wm(c, b.Qa());
        Xi(d, b.getName());
        Wi(this.ma, b.getName());
      },
      !1,
      a
    );
    a.ma.Ha(b);
    return e;
  }
  p.lh = function() {
    this.qa.pa = this.aa.da;
    var a = this.qa.getName();
    Wi(this.ma, a);
    lm(this.da, a);
  };
  p.Xh = function() {
    var a = this.ba[Fk];
    a && a.hc(!0);
  };
  p.Yh = function() {
    var a = this.ba[Fk];
    a && a.hc(!1);
  };
  p.Vh = function() {
    var a = this.ba[Gk];
    a && a.hc(!0);
  };
  p.Wh = function() {
    var a = this.ba[Gk];
    a && a.hc(!1);
  };
  p.tg = function() {
    Nm(this);
  };
  function Nm(a) {
    var b = a.ba[Hk];
    b && b.hc(!a.ma.aa.Ma());
    (b = a.ba[Ik]) && b.hc(!a.ma.aa.Ma());
  }
  var Fk = 'chemwriter-editor-role-undo',
    Gk = 'chemwriter-editor-role-redo',
    Ik = 'chemwriter-editor-reset-view',
    Hk = 'chemwriter-editor-role-new-document',
    Jk = 'chemwriter-editor-role-fullscreen';
  var Z = {},
    Qm = {},
    Rm = [],
    Sm = !1;
  Z.ready = function(a) {
    Sm ? a() : Rm.push(a);
  };
  Z.Fd = function() {
    for (var a = 0; a < Rm.length; a++) Rm[a]();
    Sm = !0;
  };
  Z.refresh = function() {
    Z.Wg();
    Z.Vg();
  };
  Z.ve = function() {
    Z.Xg();
    Z.Yg();
    Z.refresh();
    Z.Fd();
  };
  Z.Yg = function() {
    var a = document.querySelector('script[data-chemwriter-style]');
    if (a) {
      try {
        var b = JSON.parse(a.textContent);
      } catch (c) {
        throw Error('Error parsing stylesheet: ' + a.textContent);
      }
      Ie(b);
    }
  };
  Z.Wg = function() {
    Z.Bf(document);
    for (
      var a = document.querySelectorAll('iframe'), b = 0;
      b < a.length;
      b++
    ) {
      try {
        var c = a[b].contentWindow.document;
      } catch (d) {}
      c && Z.Bf(c);
    }
  };
  Z.Bf = function(a) {
    a = a.querySelectorAll('div[data-chemwriter-ui="image"]');
    for (var b = 0; b < a.length; b++) Z.$f(a[b]);
  };
  Z.Vg = function() {
    Z.Af(document);
    for (
      var a = document.querySelectorAll('iframe'), b = 0;
      b < a.length;
      b++
    ) {
      try {
        var c = a[b].contentWindow.document;
      } catch (d) {}
      c && Z.Af(c);
    }
  };
  Z.Af = function(a) {
    a = a.querySelectorAll('div[data-chemwriter-ui="editor"]');
    for (var b = 0; b < a.length; b++) Z.Zf(a[b]);
  };
  Z.Zf = function(a) {
    var b = Uc(a),
      c = new Mm(Z.Jb),
      d = new Ck(),
      e = new Y(),
      m = new hk(),
      q = new ik(),
      t = new jk();
    e.Ha(m);
    e.Ha(q);
    e.Ha(t);
    Om(c, e);
    e = new Y();
    e.Ha(new ok());
    e.Ha(new rk());
    e.Ha(new sk());
    e.Ha(new tk());
    e.Ha(new vk());
    Om(c, e);
    c.Ha(new Qj());
    c.Ha(new Mj(6));
    c.Ha(new Mj(5));
    e = new Y();
    e.Ha(new Mj(3));
    e.Ha(new Mj(4));
    e.Ha(new Mj(7));
    e.Ha(new Mj(8));
    Om(c, e);
    e = new Y();
    e.Ha(new xk());
    e.Ha(new yk());
    e.Ha(new zk());
    e.Ha(new Ak());
    e.Ha(new Bk());
    Om(c, e);
    Wi(c.ma, 'single-bond');
    lm(c.da, 'single-bond');
    e = Lf();
    m = e.ha('C');
    zm(c.aa, m);
    m = e.ha('N');
    zm(c.aa, m);
    m = e.ha('O');
    zm(c.aa, m);
    m = e.ha('S');
    zm(c.aa, m);
    m = e.ha('F');
    zm(c.aa, m);
    m = e.ha('Cl');
    zm(c.aa, m);
    m = e.ha('Br');
    zm(c.aa, m);
    m = e.ha('I');
    zm(c.aa, m);
    m = e.ha('H');
    zm(c.aa, m);
    e = e.ha('Si');
    zm(c.aa, e);
    Dk(d, c);
    (d = a.parentNode) && d.replaceChild(b, a);
    cd(c, b);
    Z.Mf(c, a);
  };
  Z.$f = function(a) {
    var b = Uc(a),
      c = new Sg(Z.Jb),
      d = a.parentNode;
    d && d.replaceChild(b, a);
    cd(c, b);
    Z.Mf(c, a);
  };
  Z.Mf = function(a, b) {
    var c = b.getAttribute('data-chemwriter-data') || '',
      d = b.getAttribute('id');
    if (c)
      (c = c.replace(Tc, '\n')),
        setTimeout(function() {
          Z.ic(a, c, d);
        }, 1);
    else {
      var e = b.getAttribute('data-chemwriter-src');
      if (e) {
        var m = new Li(e);
        Hc(
          m,
          Pi,
          function() {
            var q = m.aa;
            200 === q.status
              ? Z.ic(a, q.body, d)
              : Z.error({ message: 'Error reading file at URL: ' + e, id: d });
          },
          !1
        );
        Mi(m);
      }
    }
    d && (Qm[d] = a);
  };
  Z.ic = function(a, b, c) {
    try {
      a.ic(b);
    } catch (d) {
      Z.error({ message: 'Error reading inline file: ' + d.message, id: c });
    }
  };
  Z.error = function(a) {
    window.console && window.console.error(JSON.stringify(a));
  };
  Z.Xg = function() {
    var a = Z.Jb,
      b = document.querySelector('script[data-chemwriter-license]');
    b
      ? ((b = b.getAttribute('data-chemwriter-license')), Z.bi(b, a.fa.bind(a)))
      : a.fa('');
  };
  Z.bi = function(a, b) {
    if (a) {
      var c = new Li(a);
      Hc(
        c,
        Pi,
        function() {
          200 === c.aa.status ? b(c.aa.body) : b('');
        },
        !1
      );
      Mi(c);
    } else b('');
  };
  Z.Jb = new Ri();
  window.addEventListener
    ? window.addEventListener(
        'load',
        function() {
          Z.ve();
        },
        !1
      )
    : window.attachEvent('onload', function() {
        for (
          var a = document.getElementsByTagName('div'), b = 0;
          b < a.length;
          b++
        ) {
          var c = a[b];
          if (c.getAttribute('data-chemwriter-ui')) {
            var d = document.createElement('div');
            d.setAttribute('id', c.getAttribute('id'));
            d.setAttribute(
              'style',
              'width:' +
                c.getAttribute('data-chemwriter-width') +
                'px;height:' +
                c.getAttribute('data-chemwriter-height') +
                'px;'
            );
            d.setAttribute('class', 'chemwriter-fallback-content');
            c.parentNode.replaceChild(d, c);
          }
        }
      });
  Xa('chemwriter.System', Z);
  Z.ready = Z.ready;
  Xa('chemwriter.components', Qm);
  Xa('chemwriter.refresh', Z.refresh);
  Mm.prototype.getMolfile = Mm.prototype.Td;
  Mm.prototype.setMolfile = Mm.prototype.ic;
  Mm.prototype.setSMILES = Mm.prototype.ug;
  Sg.prototype.setSMILES = Sg.prototype.sg;
  Mm.prototype.addEventListener = Mm.prototype.Xf;
  Mm.prototype.isEmpty = Mm.prototype.Ma;
  Mm.prototype.addToolForElementSymbol = Mm.prototype.bg;
  Sg.prototype.getMolfile = Sg.prototype.Td;
  Sg.prototype.setMolfile = Sg.prototype.ic;
  Sg.prototype.isEmpty = Sg.prototype.Ma;
  Xa('chemwriter.signature.getSignature', Ii);
}.call(this));
