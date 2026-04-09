/**
 * Procedural ambient music using Web Audio API.
 * A-minor drone with slow pad breathing + occasional high note plucks.
 * No audio file needed — generated in the browser.
 */

class AmbientPlayer {
  constructor() {
    this.ctx      = null;
    this.master   = null;
    this.nodes    = [];
    this.playing  = false;
    this._timer   = null;
  }

  play() {
    if (this.playing) return;
    this.ctx    = new (window.AudioContext || window.webkitAudioContext)();
    this.master = this.ctx.createGain();
    this.master.gain.setValueAtTime(0, this.ctx.currentTime);
    this.master.gain.linearRampToValueAtTime(0.45, this.ctx.currentTime + 2.5);
    this.master.connect(this.ctx.destination);

    this._drone();
    this._pads();
    this._noise();
    this._pluck();    // kicks off recurring pluck schedule
    this.playing = true;
  }

  stop() {
    if (!this.playing || !this.ctx) return;
    clearTimeout(this._timer);
    this.master.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.8);
    setTimeout(() => {
      try { this.ctx.close(); } catch(_) {}
      this.ctx    = null;
      this.master = null;
      this.nodes  = [];
      this.playing = false;
    }, 2000);
  }

  toggle() {
    this.playing ? this.stop() : this.play();
    return !this.playing; // returns the NEW state (false = just stopped, true = just started)
  }

  // ── Sub-bass drone A1 = 55 Hz ──────────────────────────────────────────
  _drone() {
    const osc  = this.ctx.createOscillator();
    const filt = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 55;
    filt.type = 'lowpass';
    filt.frequency.value = 190;
    gain.gain.value = 0.3;
    osc.connect(filt); filt.connect(gain); gain.connect(this.master);
    osc.start();
    this.nodes.push(osc);
  }

  // ── Pad chords — A-minor: A2 C3 E3 A3 ────────────────────────────────
  _pads() {
    const freqs = [110, 130.81, 164.81, 220];
    freqs.forEach((freq, i) => {
      const osc  = this.ctx.createOscillator();
      const lfo  = this.ctx.createOscillator();
      const lfoG = this.ctx.createGain();
      const filt = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.value = freq;

      // Slow breath modulation
      lfo.type = 'sine';
      lfo.frequency.value = 0.07 + i * 0.022;
      lfoG.gain.value = 0.45;
      lfo.connect(lfoG);
      lfoG.connect(osc.frequency);
      lfo.start();

      filt.type = 'lowpass';
      filt.frequency.value = 650 + i * 140;
      gain.gain.value = 0.065;

      osc.connect(filt); filt.connect(gain); gain.connect(this.master);
      osc.start();
      this.nodes.push(osc, lfo);
    });
  }

  // ── Very quiet filtered noise — distant city traffic ──────────────────
  _noise() {
    const bufSize  = this.ctx.sampleRate * 2;
    const buffer   = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
    const data     = buffer.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;

    const src  = this.ctx.createBufferSource();
    const filt = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    src.buffer = buffer;
    src.loop   = true;
    filt.type  = 'bandpass';
    filt.frequency.value = 320;
    filt.Q.value = 0.4;
    gain.gain.value = 0.025;
    src.connect(filt); filt.connect(gain); gain.connect(this.master);
    src.start();
    this.nodes.push(src);
  }

  // ── Occasional high note plucks — A-minor pentatonic ──────────────────
  _pluck() {
    if (!this.playing || !this.ctx) return;
    const scale = [220, 261.63, 329.63, 440, 523.25, 659.25, 880];
    const freq  = scale[Math.floor(Math.random() * scale.length)];

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
    gain.gain.linearRampToValueAtTime(0.038, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 3.2);

    osc.connect(filt); filt.connect(gain); gain.connect(this.master);
    osc.start(t);
    osc.stop(t + 3.3);

    const nextIn = 2800 + Math.random() * 5200;
    this._timer = setTimeout(() => this._pluck(), nextIn);
  }
}

export const ambientPlayer = new AmbientPlayer();
