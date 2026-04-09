/**
 * Procedural ambient music — one distinct sound per city.
 * Each city has its own scale, drone note, pad timbre, and pluck speed.
 * Uses Web Audio API only — no audio files needed.
 */

// ─── City music profiles ──────────────────────────────────────────────────────
// All frequencies in Hz.  Scales are A-minor, D-minor, E-pentatonic, etc.
// Tuned to feel tonally distinct while staying atmospheric.
const PROFILES = {
  berlin: {
    // A minor — heavy industrial drone
    drone: 55, droneGain: 0.32,
    pads:  [110, 130.81, 164.81, 196],   // Am + G
    scale: [220, 261.63, 293.66, 329.63, 392, 440],
    padType: 'sawtooth', padGain: 0.042,
    filterHz: 520, lfoRate: 0.065,
    noiseHz: 260, noiseGain: 0.032,
    pluckMin: 3200, pluckMax: 7500,
    masterGain: 0.45,
  },
  paris: {
    // D minor — dark romance, softer sine pads
    drone: 73.42, droneGain: 0.28,
    pads:  [146.83, 174.61, 220, 261.63],  // Dm7
    scale: [293.66, 349.23, 392, 440, 523.25, 587.33],
    padType: 'sine', padGain: 0.072,
    filterHz: 900, lfoRate: 0.05,
    noiseHz: 350, noiseGain: 0.018,
    pluckMin: 2200, pluckMax: 5800,
    masterGain: 0.42,
  },
  tokyo: {
    // E major pentatonic — bright electronic
    drone: 82.41, droneGain: 0.24,
    pads:  [164.81, 207.65, 246.94, 329.63],  // E G# B E
    scale: [329.63, 369.99, 415.30, 493.88, 554.37, 659.25],  // E pent. major
    padType: 'triangle', padGain: 0.058,
    filterHz: 1300, lfoRate: 0.13,
    noiseHz: 520, noiseGain: 0.014,
    pluckMin: 1400, pluckMax: 3800,
    masterGain: 0.40,
  },
  london: {
    // C minor — gritty, slow, bass-heavy
    drone: 65.41, droneGain: 0.35,
    pads:  [130.81, 155.56, 196, 233.08],  // Cm7
    scale: [261.63, 311.13, 349.23, 392, 466.16, 523.25],
    padType: 'triangle', padGain: 0.052,
    filterHz: 480, lfoRate: 0.055,
    noiseHz: 200, noiseGain: 0.038,
    pluckMin: 4500, pluckMax: 9500,
    masterGain: 0.48,
  },
  newyork: {
    // Bb major 7 — jazz-influenced, brighter
    drone: 58.27, droneGain: 0.26,
    pads:  [116.54, 146.83, 174.61, 220],  // Bbmaj7
    scale: [233.08, 261.63, 293.66, 349.23, 392, 440],
    padType: 'sine', padGain: 0.068,
    filterHz: 1050, lfoRate: 0.09,
    noiseHz: 420, noiseGain: 0.022,
    pluckMin: 1800, pluckMax: 4800,
    masterGain: 0.42,
  },
  cairo: {
    // Hijaz scale from D (D Eb F# G A Bb C) — Middle Eastern
    drone: 73.42, droneGain: 0.30,
    pads:  [146.83, 155.56, 185.00, 220],   // D Eb F# A
    scale: [293.66, 311.13, 369.99, 392, 440, 466.16, 523.25],
    padType: 'triangle', padGain: 0.062,
    filterHz: 780, lfoRate: 0.082,
    noiseHz: 340, noiseGain: 0.025,
    pluckMin: 1700, pluckMax: 4400,
    masterGain: 0.44,
  },
  mumbai: {
    // Bhairavi from C (C Db Eb F G Ab Bb) — all flat
    drone: 98.00, droneGain: 0.28,
    pads:  [196, 233.08, 293.66, 349.23],   // Gm7
    scale: [261.63, 277.18, 311.13, 349.23, 392, 415.30, 466.16],
    padType: 'sine', padGain: 0.075,
    filterHz: 870, lfoRate: 0.10,
    noiseHz: 390, noiseGain: 0.020,
    pluckMin: 1600, pluckMax: 4200,
    masterGain: 0.43,
  },
  beirut: {
    // Phrygian dominant from E (E F G# A B C D) — Mediterranean
    drone: 82.41, droneGain: 0.29,
    pads:  [164.81, 174.61, 207.65, 246.94],  // E F G# B
    scale: [329.63, 349.23, 415.30, 440, 493.88, 523.25, 587.33],
    padType: 'triangle', padGain: 0.064,
    filterHz: 820, lfoRate: 0.076,
    noiseHz: 310, noiseGain: 0.023,
    pluckMin: 2000, pluckMax: 5400,
    masterGain: 0.44,
  },
};

// ─── Player ───────────────────────────────────────────────────────────────────
class AmbientPlayer {
  constructor() {
    this.ctx      = null;
    this.master   = null;
    this.nodes    = [];
    this.playing  = false;
    this.cityKey  = null;
    this._timer   = null;
  }

  play(cityKey = 'berlin') {
    if (this.playing) return;
    this._startCity(cityKey);
  }

  stop() {
    if (!this.playing || !this.ctx) return;
    clearTimeout(this._timer);
    const { ctx, master } = this;
    master.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.8);
    this.playing = false;
    this.cityKey = null;
    setTimeout(() => {
      try { ctx.close(); } catch (_) {}
      if (this.ctx === ctx) { this.ctx = null; this.master = null; this.nodes = []; }
    }, 2000);
  }

  /** Call when city changes while music is already playing — crossfades. */
  setCity(cityKey) {
    if (!this.playing) return;
    if (this.cityKey === cityKey) return;
    // Fade out old, then start new city
    clearTimeout(this._timer);
    const oldCtx    = this.ctx;
    const oldMaster = this.master;
    oldMaster.gain.linearRampToValueAtTime(0, oldCtx.currentTime + 1.2);
    this.playing = false;
    this.cityKey = null;
    setTimeout(() => {
      try { oldCtx.close(); } catch (_) {}
      if (this.ctx === oldCtx) { this.ctx = null; this.master = null; this.nodes = []; }
      this._startCity(cityKey);
    }, 1350);
  }

  // ── Internal ────────────────────────────────────────────────────────────────
  _startCity(cityKey) {
    const p = PROFILES[cityKey] || PROFILES.berlin;
    this.cityKey = cityKey;
    this.ctx     = new (window.AudioContext || window.webkitAudioContext)();
    this.master  = this.ctx.createGain();
    this.master.gain.setValueAtTime(0, this.ctx.currentTime);
    this.master.gain.linearRampToValueAtTime(p.masterGain, this.ctx.currentTime + 2.6);
    this.master.connect(this.ctx.destination);
    this.nodes   = [];
    this.playing = true;

    this._drone(p);
    this._pads(p);
    this._noise(p);
    this._pluck(p);
  }

  _drone(p) {
    const osc  = this.ctx.createOscillator();
    const filt = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = p.drone;
    filt.type = 'lowpass';
    filt.frequency.value = p.drone * 3.5;
    gain.gain.value = p.droneGain;
    osc.connect(filt); filt.connect(gain); gain.connect(this.master);
    osc.start();
    this.nodes.push(osc);
  }

  _pads(p) {
    p.pads.forEach((freq, i) => {
      const osc  = this.ctx.createOscillator();
      const lfo  = this.ctx.createOscillator();
      const lfoG = this.ctx.createGain();
      const filt = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = p.padType;
      osc.frequency.value = freq;

      lfo.type = 'sine';
      lfo.frequency.value = p.lfoRate + i * 0.021;
      lfoG.gain.value = 0.42;
      lfo.connect(lfoG); lfoG.connect(osc.frequency);
      lfo.start();

      filt.type = 'lowpass';
      filt.frequency.value = p.filterHz + i * 120;
      gain.gain.value = p.padGain;

      osc.connect(filt); filt.connect(gain); gain.connect(this.master);
      osc.start();
      this.nodes.push(osc, lfo);
    });
  }

  _noise(p) {
    const bufSize = this.ctx.sampleRate * 2;
    const buffer  = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
    const data    = buffer.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
    const src  = this.ctx.createBufferSource();
    const filt = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    src.buffer = buffer;
    src.loop   = true;
    filt.type  = 'bandpass';
    filt.frequency.value = p.noiseHz;
    filt.Q.value = 0.5;
    gain.gain.value = p.noiseGain;
    src.connect(filt); filt.connect(gain); gain.connect(this.master);
    src.start();
    this.nodes.push(src);
  }

  _pluck(p) {
    if (!this.playing || !this.ctx) return;
    const freq = p.scale[Math.floor(Math.random() * p.scale.length)];
    const osc  = this.ctx.createOscillator();
    const filt = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    filt.type = 'bandpass';
    filt.frequency.value = freq;
    filt.Q.value = 2.5;
    const t = this.ctx.currentTime;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.036, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 3.0);
    osc.connect(filt); filt.connect(gain); gain.connect(this.master);
    osc.start(t); osc.stop(t + 3.1);
    const delay = p.pluckMin + Math.random() * (p.pluckMax - p.pluckMin);
    this._timer = setTimeout(() => this._pluck(p), delay);
  }
}

export const ambientPlayer = new AmbientPlayer();
