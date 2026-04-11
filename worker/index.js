/**
 * Cloudflare Worker — AI image generation proxy
 * Hides the HuggingFace token from the browser.
 *
 * Environment variable required (set as a Secret in Cloudflare dashboard):
 *   HF_TOKEN  →  your HuggingFace API token (hf_...)
 */

const MODEL = 'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: CORS });
    }

    let prompt;
    try {
      ({ prompt } = await request.json());
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400, headers: { ...CORS, 'Content-Type': 'application/json' },
      });
    }

    if (!prompt) {
      return new Response(JSON.stringify({ error: 'prompt required' }), {
        status: 400, headers: { ...CORS, 'Content-Type': 'application/json' },
      });
    }

    const hfRes = await fetch(MODEL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.HF_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: prompt }),
    });

    if (!hfRes.ok) {
      const msg = await hfRes.text();
      return new Response(JSON.stringify({ error: msg }), {
        status: hfRes.status, headers: { ...CORS, 'Content-Type': 'application/json' },
      });
    }

    // Forward the binary image straight through — no base64 overhead
    const imageBuffer = await hfRes.arrayBuffer();
    return new Response(imageBuffer, {
      headers: {
        ...CORS,
        'Content-Type': hfRes.headers.get('Content-Type') || 'image/jpeg',
        'Cache-Control': 'no-store',
      },
    });
  },
};
