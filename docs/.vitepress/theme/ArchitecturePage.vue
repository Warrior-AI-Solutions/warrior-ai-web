<template>
  <div class="wai-page">

    <!-- SPRINT OUTPUT LABEL -->
    <div class="sprint-output-label">
      <span class="sprint-output-icon">⚡</span>
      <span class="sprint-output-text">Sprint Output: <strong>Technical Leadership Session</strong> — Architecture Decisions &amp; Stack Design</span>
    </div>

    <!-- HERO -->
    <section class="wai-hero">
      <p class="wai-hero-eyebrow">Warrior AI — Platform Architecture</p>
      <h1 class="wai-hero-headline">
        5-Layer Platform.<br>
        <span>Designed to Scale.</span>
      </h1>
      <p class="wai-hero-sub">
        A Firebase-authenticated gateway routes Warrior coaching sessions through 7 specialist Dify agents, backed by a Redis-cached Firebase Bridge and Qdrant vector store. Built for 50 users today, engineered for 10,000 at $3,444/mo.
      </p>
      <div class="wai-hero-badges">
        <span class="wai-badge wai-badge-blue">Hono Gateway</span>
        <span class="wai-badge wai-badge-gold">7 Dify Agents</span>
        <span class="wai-badge wai-badge-green">Firebase Auth</span>
        <span class="wai-badge wai-badge-blue">Redis Cache</span>
        <span class="wai-badge wai-badge-gold">Cloudflare Tunnel</span>
      </div>
    </section>

    <!-- METRICS STRIP -->
    <section class="wai-metrics">
      <div class="wai-metrics-inner">
        <div>
          <span class="wai-metric-value">5</span>
          <span class="wai-metric-label">Architecture Layers</span>
        </div>
        <div>
          <span class="wai-metric-value">7</span>
          <span class="wai-metric-label">Specialist AI Agents</span>
        </div>
        <div>
          <span class="wai-metric-value">10,000</span>
          <span class="wai-metric-label">Target Concurrent Users</span>
        </div>
        <div>
          <span class="wai-metric-value">3–17s</span>
          <span class="wai-metric-label">Request Lifetime</span>
        </div>
        <div>
          <span class="wai-metric-value">80%+</span>
          <span class="wai-metric-label">Redis Cache Target</span>
        </div>
        <div>
          <span class="wai-metric-value">$3,444</span>
          <span class="wai-metric-label">Full Production / mo</span>
        </div>
      </div>
    </section>

    <!-- SECTION 1: REQUEST FLOW -->
    <section class="wai-section">
      <h2 class="wai-section-title">Full Request Flow</h2>
      <p class="wai-section-sub">One coaching session, end to end. Total request lifetime: 3–17 seconds.</p>
      <img
        src="/images/warrior-ai-request-lifecycle.webp"
        alt="Request Lifecycle — Flutter to Firebase, end to end"
        class="wai-section-image"
      />
      <div class="wai-flow">
        <div class="wai-flow-step">
          <div class="wai-flow-icon">📱</div>
          <div class="wai-flow-content">
            <strong>Flutter App</strong>
            <span>Warrior sends message. Stateless. Scales infinitely.</span>
          </div>
          <div class="wai-flow-time">—</div>
        </div>
        <div class="wai-flow-arrow">↓</div>
        <div class="wai-flow-step">
          <div class="wai-flow-icon">🔒</div>
          <div class="wai-flow-content">
            <strong>Firebase Auth</strong>
            <span>RSA-signed JWT verified. uid extracted. Token discarded.</span>
          </div>
          <div class="wai-flow-time">50ms</div>
        </div>
        <div class="wai-flow-arrow">↓</div>
        <div class="wai-flow-step">
          <div class="wai-flow-icon">⚡</div>
          <div class="wai-flow-content">
            <strong>Hono Gateway</strong>
            <span>Bun runtime. CORS enforced. Rate limit checked (20 req/min/user). Dify handoff.</span>
          </div>
          <div class="wai-flow-time">50ms</div>
        </div>
        <div class="wai-flow-arrow">↓</div>
        <div class="wai-flow-step">
          <div class="wai-flow-icon">🧠</div>
          <div class="wai-flow-content">
            <strong>Dify Context Loader</strong>
            <span>Calls Firebase Bridge for Warrior history. Redis cache: 5ms hit / 200ms miss.</span>
          </div>
          <div class="wai-flow-time">5–200ms</div>
        </div>
        <div class="wai-flow-arrow">↓</div>
        <div class="wai-flow-step">
          <div class="wai-flow-icon">🎯</div>
          <div class="wai-flow-content">
            <strong>Dify Coordinator Agent</strong>
            <span>Routes to one of 7 specialist agents based on message intent. 80%+ routing accuracy.</span>
          </div>
          <div class="wai-flow-time">500ms</div>
        </div>
        <div class="wai-flow-arrow">↓</div>
        <div class="wai-flow-step">
          <div class="wai-flow-icon">🤖</div>
          <div class="wai-flow-content">
            <strong>Specialist Agent + LLM</strong>
            <span>Qdrant RAG context fetched. LLM generates streaming coaching response.</span>
          </div>
          <div class="wai-flow-time wai-bottleneck">2,000–15,000ms ⚠️ bottleneck</div>
        </div>
        <div class="wai-flow-arrow">↓</div>
        <div class="wai-flow-step">
          <div class="wai-flow-icon">📡</div>
          <div class="wai-flow-content">
            <strong>SSE Stream → Flutter</strong>
            <span>Tokens streamed back through Gateway to the Warrior's app in real time.</span>
          </div>
          <div class="wai-flow-time">ongoing</div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: 5 LAYERS -->
    <section class="wai-section wai-section-alt">
      <h2 class="wai-section-title">5-Layer Architecture</h2>
      <div class="wai-arch-layers">
        <div class="wai-arch-layer">
          <div class="wai-arch-num">1</div>
          <div class="wai-arch-layer-content">
            <h3>Flutter Mobile App</h3>
            <p>Client layer. Warrior-facing interface. Firebase Auth SDK handles token lifecycle. Sends authenticated HTTP requests with Bearer token. Receives SSE stream.</p>
            <div class="wai-arch-tech">
              <span class="wai-tech-tag">Flutter</span>
              <span class="wai-tech-tag">Firebase Auth SDK</span>
              <span class="wai-tech-tag">SSE Client</span>
            </div>
          </div>
          <div class="wai-arch-scale wai-scale-green">✓ Scales infinitely</div>
        </div>

        <div class="wai-arch-layer">
          <div class="wai-arch-num">2</div>
          <div class="wai-arch-layer-content">
            <h3>Hono Gateway</h3>
            <p>Authentication and routing layer. Validates Firebase JWT, enforces CORS (WARAI-71), applies per-user rate limiting (WARAI-72), and forwards to Dify. Bun runtime handles 10,000+ concurrent HTTP connections natively — not a bottleneck.</p>
            <div class="wai-arch-tech">
              <span class="wai-tech-tag">Hono</span>
              <span class="wai-tech-tag">Bun</span>
              <span class="wai-tech-tag">firebase-admin</span>
              <span class="wai-tech-tag">TypeScript</span>
            </div>
          </div>
          <div class="wai-arch-scale wai-scale-green">✓ Not a bottleneck</div>
        </div>

        <div class="wai-arch-layer">
          <div class="wai-arch-num">3</div>
          <div class="wai-arch-layer-content">
            <h3>Dify CE — AI Coaching Engine</h3>
            <p>Core AI layer. 11 containers: API server, Celery workers, nginx, PostgreSQL, Redis, Qdrant. Routes messages through Coordinator → 7 Specialist Agents. Celery workers are the primary scaling bottleneck — each LLM call occupies one worker for 2–15 seconds.</p>
            <div class="wai-arch-tech">
              <span class="wai-tech-tag">Dify CE 1.13.0</span>
              <span class="wai-tech-tag">Celery</span>
              <span class="wai-tech-tag">PostgreSQL</span>
              <span class="wai-tech-tag">Redis</span>
              <span class="wai-tech-tag">Qdrant</span>
            </div>
          </div>
          <div class="wai-arch-scale wai-scale-red">⚠ Primary bottleneck</div>
        </div>

        <div class="wai-arch-layer">
          <div class="wai-arch-num">4</div>
          <div class="wai-arch-layer-content">
            <h3>Firebase Bridge</h3>
            <p>Firestore access layer. Exposes REST endpoints for reading/writing Warrior data. Redis-cached context snapshots (6 parallel reads, 80%+ hit rate, 5ms cache / 200ms cold). Zod schema validation on all writes. Not a bottleneck.</p>
            <div class="wai-arch-tech">
              <span class="wai-tech-tag">Hono</span>
              <span class="wai-tech-tag">Bun</span>
              <span class="wai-tech-tag">firebase-admin</span>
              <span class="wai-tech-tag">Redis</span>
              <span class="wai-tech-tag">Zod</span>
            </div>
          </div>
          <div class="wai-arch-scale wai-scale-green">✓ Not a bottleneck</div>
        </div>

        <div class="wai-arch-layer">
          <div class="wai-arch-num">5</div>
          <div class="wai-arch-layer-content">
            <h3>Firebase Firestore</h3>
            <p>Persistent data layer. Stores Power Stacks, Door Cards, Bible Stacks, Core4 scores, and Warrior context. Google-managed infrastructure, auto-scales. At 10,000 users: ~$220/mo read cost. Not a bottleneck.</p>
            <div class="wai-arch-tech">
              <span class="wai-tech-tag">Google Firestore</span>
              <span class="wai-tech-tag">Firebase</span>
              <span class="wai-tech-tag">GDPR Article 9 data</span>
            </div>
          </div>
          <div class="wai-arch-scale wai-scale-green">✓ Auto-scales</div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: 7 SPECIALIST AGENTS -->
    <section class="wai-section">
      <h2 class="wai-section-title">7 Specialist Agents</h2>
      <p class="wai-section-sub">The Coordinator routes each Warrior message to the right specialist. 80% routing accuracy target (≥8/10 messages). LLM providers distributed across OpenRouter to manage rate limits.</p>
      <img
        src="/images/warrior-ai-agent-constellation.webp"
        alt="7 Specialist Agents — Coordinator constellation"
        class="wai-section-image"
      />
      <div class="wai-agents-grid">
        <div class="wai-agent-card">
          <div class="wai-agent-icon">🎯</div>
          <h3>Coordinator</h3>
          <p>Routes messages to specialist agents. Orchestrator — not user-facing.</p>
          <span class="wai-tech-tag">Gemini 2.0 Flash</span>
        </div>
        <div class="wai-agent-card">
          <div class="wai-agent-icon">💪</div>
          <h3>Power Stack Agent</h3>
          <p>Body domain. Core4 performance, physical training, energy management.</p>
          <span class="wai-tech-tag">DeepSeek Chat</span>
        </div>
        <div class="wai-agent-card">
          <div class="wai-agent-icon">🗺️</div>
          <h3>Fact Map Agent</h3>
          <p>Being domain. Mental models, clarity, identity mapping.</p>
          <span class="wai-tech-tag">Claude 3.5 Sonnet</span>
        </div>
        <div class="wai-agent-card">
          <div class="wai-agent-icon">📖</div>
          <h3>Bible Stack Agent</h3>
          <p>Being domain. Faith integration, spiritual clarity, scriptural application.</p>
          <span class="wai-tech-tag">Claude 3.5 Sonnet</span>
        </div>
        <div class="wai-agent-card">
          <div class="wai-agent-icon">🚪</div>
          <h3>Door Card Agent</h3>
          <p>Balance domain. Relationship frameworks, partnership, family leadership.</p>
          <span class="wai-tech-tag">DeepSeek Chat</span>
        </div>
        <div class="wai-agent-card">
          <div class="wai-agent-icon">💥</div>
          <h3>Breakthrough Agent</h3>
          <p>Business domain. Decision-making, business vision, production breakthroughs.</p>
          <span class="wai-tech-tag">Gemini 2.0 Flash</span>
        </div>
        <div class="wai-agent-card">
          <div class="wai-agent-icon">📉</div>
          <h3>Drift Agent</h3>
          <p>Recognizes drift patterns. Redirects Warriors back to core commitments.</p>
          <span class="wai-tech-tag">DeepSeek Chat</span>
        </div>
        <div class="wai-agent-card">
          <div class="wai-agent-icon">💬</div>
          <h3>General Agent</h3>
          <p>Fallback for unclassified messages. Maintains conversation continuity.</p>
          <span class="wai-tech-tag">Claude 3.5 Sonnet</span>
        </div>
      </div>
    </section>

    <!-- SECTION 4: INFRASTRUCTURE -->
    <section class="wai-section wai-section-alt">
      <h2 class="wai-section-title">Infrastructure &amp; Security Perimeter</h2>
      <div class="wai-infra-grid">
        <div class="wai-infra-block">
          <h3>🖥️ VPS — Vultr</h3>
          <ul>
            <li>Ubuntu 24.04 LTS</li>
            <li>4 vCPU / 12GB RAM / $72/mo (V0)</li>
            <li>Docker Compose stack</li>
            <li>All ports closed except via Tunnel</li>
          </ul>
        </div>
        <div class="wai-infra-block">
          <h3>☁️ Cloudflare Tunnel</h3>
          <ul>
            <li>Sole ingress path for user-facing traffic</li>
            <li>Cloudflare WAF → Tunnel → nginx → Gateway</li>
            <li>TLS terminated at Cloudflare edge</li>
            <li>DDoS protection at global scale</li>
          </ul>
        </div>
        <div class="wai-infra-block">
          <h3>🔐 Twingate Zero-Trust</h3>
          <ul>
            <li>Developer + admin access layer</li>
            <li>No VPN passwords — identity-based</li>
            <li>Staging VPS, Dify admin, SSH access</li>
            <li>Not for user-facing traffic (see WARAI-69)</li>
          </ul>
        </div>
        <div class="wai-infra-block">
          <h3>🐳 Docker Network Isolation</h3>
          <ul>
            <li>Bridge: gateway-network (Gateway + Bridge only)</li>
            <li>Bridge: dify-internal (Dify + Bridge only)</li>
            <li>Isolated: sandbox-isolated (dify-sandbox)</li>
            <li>Isolated: plugin-isolated (plugin daemon)</li>
          </ul>
        </div>
      </div>

      <h3 class="wai-subsection-title">Security Hardening Status</h3>
      <div class="wai-table-wrap">
        <table class="wai-table">
          <thead><tr><th>Item</th><th>Status</th><th>Notes</th></tr></thead>
          <tbody>
            <tr>
              <td>Firebase JWT validation</td>
              <td><span class="wai-badge wai-badge-green">✓ Live</span></td>
              <td>firebase-auth.ts — token verified, uid extracted, token discarded</td>
            </tr>
            <tr>
              <td>CORS origin restriction</td>
              <td><span class="wai-badge wai-badge-green">✓ Fixed (WARAI-71)</span></td>
              <td>ALLOWED_ORIGIN env var — must be set in staging/production</td>
            </tr>
            <tr>
              <td>Per-user rate limiting (Gateway)</td>
              <td><span class="wai-badge wai-badge-green">✓ Fixed (WARAI-72)</span></td>
              <td>20 req/min, configurable, Retry-After header on 429</td>
            </tr>
            <tr>
              <td>Bridge localhost-only binding</td>
              <td><span class="wai-badge wai-badge-green">✓ By design</span></td>
              <td>Port 4000 bound to 127.0.0.1 — unreachable from internet</td>
            </tr>
            <tr>
              <td>Zod validation on Bridge writes</td>
              <td><span class="wai-badge wai-badge-green">✓ Live</span></td>
              <td>Field types, 5,000 char max, allowed enums</td>
            </tr>
            <tr>
              <td>AI audit trail</td>
              <td><span class="wai-badge wai-badge-green">✓ Live</span></td>
              <td>digital_trainer_stack: true on every AI write</td>
            </tr>
            <tr>
              <td>nginx reverse proxy (WARAI-69)</td>
              <td><span class="wai-badge wai-badge-gold">📋 Pending</span></td>
              <td>Gateway must bind 127.0.0.1 + nginx in front</td>
            </tr>
            <tr>
              <td>Bridge write rate limit (ADR-W021)</td>
              <td><span class="wai-badge wai-badge-gold">📋 Pending</span></td>
              <td>Redis INCR pattern, to implement before beta</td>
            </tr>
            <tr>
              <td>HMAC-signed user_id (ADR-W026)</td>
              <td><span class="wai-badge wai-badge-gold">📋 Proposed</span></td>
              <td>Restores cryptographic trust through Gateway→Dify→Bridge chain</td>
            </tr>
            <tr>
              <td>Docker network segmentation (ADR-W027)</td>
              <td><span class="wai-badge wai-badge-gold">📋 Proposed</span></td>
              <td>5 named trust tiers — replaces flat network</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION 5: SCALING ROADMAP -->
    <section class="wai-section">
      <h2 class="wai-section-title">Scaling Roadmap: V0 → 10,000 Warriors</h2>
      <p class="wai-section-sub">The primary bottleneck is Dify's Celery worker pool — each LLM call occupies a worker for 2–15 seconds. Every scaling stage targets this bottleneck.</p>

      <div class="wai-stages">
        <div class="wai-stage wai-stage-current">
          <div class="wai-stage-header">
            <span class="wai-stage-label">Stage 0 — Current</span>
            <span class="wai-stage-users">50 concurrent Warriors</span>
          </div>
          <div class="wai-stage-body">
            <div class="wai-stage-detail"><strong>VPS:</strong> 4 vCPU / 12GB / $72/mo</div>
            <div class="wai-stage-detail"><strong>Celery:</strong> Default config (1–2 workers)</div>
            <div class="wai-stage-detail"><strong>Parallel sessions:</strong> ~10–20</div>
            <div class="wai-stage-detail"><strong>Action:</strong> None — suitable for demo and first 100 users</div>
          </div>
        </div>

        <div class="wai-stage">
          <div class="wai-stage-header">
            <span class="wai-stage-label">Stage 1 — Celery Optimisation</span>
            <span class="wai-stage-users">150 concurrent Warriors</span>
          </div>
          <div class="wai-stage-body">
            <div class="wai-stage-detail"><strong>Cost delta:</strong> $0 (config change only)</div>
            <div class="wai-stage-detail"><strong>Time:</strong> 2–4 hours</div>
            <div class="wai-stage-detail"><strong>Change:</strong> 2 workers × 20 gevent concurrency = 40 parallel LLM sessions</div>
            <div class="wai-stage-detail"><strong>Trigger:</strong> p95 &gt; 5s under normal load</div>
          </div>
        </div>

        <div class="wai-stage">
          <div class="wai-stage-header">
            <span class="wai-stage-label">Stage 2 — VPS Vertical Scale</span>
            <span class="wai-stage-users">400 concurrent Warriors</span>
          </div>
          <div class="wai-stage-body">
            <div class="wai-stage-detail"><strong>VPS:</strong> 8 vCPU / 32GB / $180/mo (+$108/mo)</div>
            <div class="wai-stage-detail"><strong>Time:</strong> 1 day (Vultr resize, ~10 min downtime)</div>
            <div class="wai-stage-detail"><strong>Change:</strong> 4 workers × 20 gevent = 80 parallel sessions</div>
          </div>
        </div>

        <div class="wai-stage">
          <div class="wai-stage-header">
            <span class="wai-stage-label">Stage 3 — Service Separation</span>
            <span class="wai-stage-users">1,000 concurrent Warriors</span>
          </div>
          <div class="wai-stage-body">
            <div class="wai-stage-detail"><strong>Infrastructure:</strong> 3 servers / ~$450/mo total</div>
            <div class="wai-stage-detail"><strong>Time:</strong> 1–2 weeks</div>
            <div class="wai-stage-detail"><strong>Servers:</strong> Gateway ($72) · Dify AI Engine ($180) · Dedicated Redis ($48)</div>
            <div class="wai-stage-detail"><strong>Change:</strong> 6 workers × 20 gevent = 120 parallel sessions</div>
          </div>
        </div>

        <div class="wai-stage">
          <div class="wai-stage-header">
            <span class="wai-stage-label">Stage 4 — Horizontal Dify Scale</span>
            <span class="wai-stage-users">5,000–10,000 Warriors</span>
          </div>
          <div class="wai-stage-body">
            <div class="wai-stage-detail"><strong>Infrastructure:</strong> Load-balanced Dify cluster / ~$1,500/mo</div>
            <div class="wai-stage-detail"><strong>Time:</strong> 4–6 weeks</div>
            <div class="wai-stage-detail"><strong>Change:</strong> 3 Dify instances × 120 sessions = 360 parallel LLM sessions</div>
            <div class="wai-stage-detail"><strong>Key:</strong> Shared Redis for session affinity across instances</div>
          </div>
        </div>
      </div>

      <h3 class="wai-subsection-title">Full Production Cost at 10,000 Users</h3>
      <div class="wai-table-wrap">
        <table class="wai-table">
          <thead><tr><th>Component</th><th>Monthly Cost</th></tr></thead>
          <tbody>
            <tr><td>Dify cluster (5 × $180)</td><td>$900</td></tr>
            <tr><td>Gateway / Bridge servers (2 × $72)</td><td>$144</td></tr>
            <tr><td>Redis cluster</td><td>$150</td></tr>
            <tr><td>PostgreSQL (managed)</td><td>$200</td></tr>
            <tr><td>LLM providers (OpenRouter)</td><td>~$1,380</td></tr>
            <tr><td>Firebase Firestore reads</td><td>~$220</td></tr>
            <tr><td>Deepgram STT</td><td>~$400</td></tr>
            <tr><td>Load balancer / CDN</td><td>$50</td></tr>
            <tr class="wai-row-total"><td><strong>Total</strong></td><td><strong>~$3,444/mo</strong></td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="wai-footer">
      <p>Warrior AI Solutions · Platform Architecture · Last updated 2026-02-24</p>
      <p>See also: <a href="/qa">QA Strategy</a> · <a href="/security">Security Documentation</a></p>
    </footer>

  </div>
</template>

<style scoped>
.wai-flow {
  max-width: 720px;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
}
.wai-flow-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--wai-surface);
  border: 1px solid var(--wai-border);
  border-radius: 10px;
  padding: 0.9rem 1.2rem;
}
.wai-flow-icon { font-size: 1.4rem; flex-shrink: 0; }
.wai-flow-content {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  flex: 1;
}
.wai-flow-content strong { font-size: 0.95rem; color: var(--wai-gold); }
.wai-flow-content span { font-size: 0.82rem; color: var(--wai-text-muted); }
.wai-flow-time {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  white-space: nowrap;
  font-family: var(--vp-font-family-mono);
}
.wai-bottleneck { color: #f87171 !important; }
.wai-flow-arrow {
  text-align: center;
  color: var(--wai-border);
  font-size: 1.2rem;
  padding: 0.15rem 0;
}

.wai-arch-layers { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
.wai-arch-layer {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  background: var(--wai-surface);
  border: 1px solid var(--wai-border);
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
}
.wai-arch-num {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--wai-gold);
  color: #0A1628;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
}
.wai-arch-layer-content { flex: 1; }
.wai-arch-layer-content h3 { margin: 0 0 0.4rem; font-size: 1rem; color: var(--wai-gold); }
.wai-arch-layer-content p { margin: 0 0 0.6rem; color: var(--wai-text-muted); font-size: 0.88rem; line-height: 1.5; }
.wai-arch-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.wai-arch-scale {
  flex-shrink: 0;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  white-space: nowrap;
  align-self: flex-start;
}
.wai-scale-green { background: rgba(16,185,129,0.15); color: #34d399; }
.wai-scale-red { background: rgba(239,68,68,0.15); color: #f87171; }

.wai-agents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}
.wai-agent-card {
  background: var(--wai-surface);
  border: 1px solid var(--wai-border);
  border-radius: 10px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.wai-agent-icon { font-size: 1.6rem; }
.wai-agent-card h3 { margin: 0; font-size: 0.95rem; color: var(--wai-gold); }
.wai-agent-card p { margin: 0; font-size: 0.82rem; color: var(--wai-text-muted); line-height: 1.45; flex: 1; }

.wai-infra-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.2rem;
  margin-top: 1.5rem;
}
.wai-infra-block {
  background: var(--wai-surface);
  border: 1px solid var(--wai-border);
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
}
.wai-infra-block h3 { margin: 0 0 0.75rem; font-size: 0.95rem; color: var(--wai-gold); }
.wai-infra-block ul { margin: 0; padding-left: 1.2rem; }
.wai-infra-block li { font-size: 0.85rem; color: var(--wai-text-muted); line-height: 1.7; }

.wai-subsection-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--wai-gold);
  margin: 2rem 0 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--wai-border);
}

.wai-stages { display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0; }
.wai-stage {
  background: var(--wai-surface);
  border: 1px solid var(--wai-border);
  border-radius: 12px;
  overflow: hidden;
}
.wai-stage-current { border-color: var(--wai-gold); }
.wai-stage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.2rem;
  background: rgba(212,175,55,0.07);
  border-bottom: 1px solid var(--wai-border);
  flex-wrap: wrap;
  gap: 0.5rem;
}
.wai-stage-current .wai-stage-header { background: rgba(212,175,55,0.15); }
.wai-stage-label { font-weight: 700; color: var(--wai-gold); font-size: 0.95rem; }
.wai-stage-users { font-size: 0.85rem; color: var(--vp-c-text-2); font-weight: 600; }
.wai-stage-body { padding: 0.8rem 1.2rem; display: flex; flex-wrap: wrap; gap: 0.5rem; }
.wai-stage-detail { font-size: 0.85rem; color: var(--wai-text-muted); flex-basis: calc(50% - 0.25rem); min-width: 200px; }
@media (max-width: 600px) { .wai-stage-detail { flex-basis: 100%; } }

.wai-row-total td { font-size: 1rem; color: var(--wai-gold); border-top: 2px solid var(--wai-border); }
</style>
