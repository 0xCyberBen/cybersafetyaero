// Shared light/dark theme for all CyberBen pages. Persists in localStorage, syncs across tabs.
(function () {
  if (window.CBTheme) return;
  var KEY = 'cb-theme';
  // Dark overrides for light-default pages
  var DARK = {
    '--bg': '#12171e', '--bg-nav': 'rgba(18,23,30,.88)', '--surface': '#181e26', '--surface-2': '#1d242d',
    '--line-strong': '#2c333d', '--line': '#29303a', '--line-soft': '#222932', '--ruler': '#3d4653',
    '--ink': '#eef1f5', '--ink-2': '#c9ced6', '--body': '#a9b0bb', '--muted': '#949ba6', '--faint': '#8b929d',
    '--accent': '#7aa2ff', '--btn': '#eef1f5', '--btn-ink': '#11161d',
    // Lifecycle flight-profile panel
    '--fp-bg': '#11161d', '--fp-border': '#20262f', '--fp-grid': 'rgba(255,255,255,.04)', '--fp-fill': 'rgba(39,198,255,.18)', '--fp-g20l': 'rgba(255,210,63,.20)', '--fp-b12l': 'rgba(111,155,255,.12)', '--fp-b40l': 'rgba(111,155,255,.40)', '--fp-c50': 'rgba(39,198,255,.5)', '--fp-dash': '#e7f6ff', '--fp-b30': 'rgba(111,155,255,.30)', '--fp-c30': 'rgba(39,198,255,.30)', '--fp-g30': 'rgba(255,210,63,.30)', '--fp-g85': 'rgba(255,210,63,.85)', '--fp-b4': 'rgba(111,155,255,.4)', '--fp-b8': 'rgba(111,155,255,.8)', '--fp-b3': 'rgba(111,155,255,.3)', '--fp-c4': 'rgba(39,198,255,.4)', '--fp-c8': 'rgba(39,198,255,.8)', '--fp-c3': 'rgba(39,198,255,.3)', '--fp-g4': 'rgba(255,210,63,.4)', '--fp-g9': 'rgba(255,210,63,.9)', '--fp-g35': 'rgba(255,210,63,.35)', '--fp-c9': 'rgba(39,198,255,.9)', '--fp-b7': 'rgba(111,155,255,.7)', '--fp-c7': 'rgba(39,198,255,.7)', '--fp-g8': 'rgba(255,210,63,.8)', '--fp-chip': 'rgba(17,22,29,.72)', '--fp-blue': '#6f9bff', '--fp-cyan': '#27c6ff', '--fp-gold': '#ffd23f', '--fp-chip-b': '#aebfe8', '--fp-chip-c': '#bdeaff', '--fp-chip-g': '#ffe38a', '--fp-ax1': '#7b88a8', '--fp-ax2': '#8a95b0', '--fp-body': '#9aa1ae', '--fp-ink': '#fff', '--fp-node': '#11161d'
  };
  // Light overrides for dark-default pages (Contact)
  var LIGHT = {
    '--k-bg': '#f3f4f0', '--k-nav': 'rgba(243,244,240,.92)', '--k-surface': '#fff', '--k-panel': '#fff', '--k-field': '#f7f8f4',
    '--k-line': '#d7d8d0', '--k-line-strong': '#d2d3ca', '--k-ruler': '#b4b6ab',
    '--k-ink': '#11161d', '--k-body': '#4b5159', '--k-muted': '#5b606a', '--k-faint': '#5f6773', '--k-accent': '#1d4ed8'
  };
  var subs = [];
  // No saved choice? Follow the device setting (same behaviour as cyberben.ai).
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function stored() { try { var v = localStorage.getItem(KEY); return v === 'dark' || v === 'light' ? v : null; } catch (e) { return null; } }
  function read() { return stored() || (mq && mq.matches ? 'dark' : 'light'); }
  var current = read();
  function apply(t) {
    var r = document.documentElement, d = t === 'dark', k;
    for (k in DARK) d ? r.style.setProperty(k, DARK[k]) : r.style.removeProperty(k);
    for (k in LIGHT) d ? r.style.removeProperty(k) : r.style.setProperty(k, LIGHT[k]);
    r.style.colorScheme = d ? 'dark' : 'light';
    r.setAttribute('data-theme', t);
  }
  function emit() {
    subs.slice().forEach(function (fn) { try { fn(current); } catch (e) {} });
    try { window.dispatchEvent(new CustomEvent('cb-theme', { detail: current })); } catch (e) {}
  }
  function set(t) {
    t = t === 'dark' ? 'dark' : 'light';
    try { localStorage.setItem(KEY, t); } catch (e) {}
    if (t === current) return;
    current = t; apply(t); emit();
  }
  function resync() { var t = read(); if (t !== current) { current = t; apply(t); emit(); } }
  window.addEventListener('storage', function (e) { if (e.key === KEY) resync(); });
  if (mq) { var onSys = function () { if (!stored()) resync(); }; mq.addEventListener ? mq.addEventListener('change', onSys) : mq.addListener && mq.addListener(onSys); }
  window.addEventListener('pageshow', resync);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) resync(); });
  apply(current);
  window.CBTheme = {
    get: function () { return current; },
    set: set,
    toggle: function () { set(current === 'dark' ? 'light' : 'dark'); },
    subscribe: function (fn) { subs.push(fn); return function () { subs = subs.filter(function (f) { return f !== fn; }); }; }
  };
  emit();
})();
