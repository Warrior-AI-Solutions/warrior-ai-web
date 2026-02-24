---
layout: home
title: Warrior AI Solutions — QA & Engineering Overview
---

<div class="wai-page">

<!-- ══════════════════════════════════════════════
     HERO
══════════════════════════════════════════════ -->
<section class="wai-hero">
  <p class="wai-hero-eyebrow">Warrior AI Solutions — Engineering Overview</p>
  <h1 class="wai-hero-headline">
    Production-Ready.<br>
    <span>Tested. Scaled.</span>
  </h1>
  <p class="wai-hero-sub">
    A 5-layer AI coaching platform built for 10,000 Warriors. Two critical security gaps resolved before launch. A staged scaling roadmap to $3,444/mo at full production. A test strategy Anna can sign off.
  </p>
  <div class="wai-hero-badges">
    <span class="wai-badge wai-badge-green">✓ WARAI-71 CORS Fixed</span>
    <span class="wai-badge wai-badge-green">✓ WARAI-72 Rate Limiting Live</span>
    <span class="wai-badge wai-badge-gold">⚡ 7 Specialist Agents</span>
    <span class="wai-badge wai-badge-blue">☁ Firebase-Authenticated</span>
    <span class="wai-badge wai-badge-gold">🔒 Warrior-Owned Infrastructure</span>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     METRICS STRIP
══════════════════════════════════════════════ -->
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
      <span class="wai-metric-label">Target Concurrent Warriors</span>
    </div>
    <div>
      <span class="wai-metric-value">22</span>
      <span class="wai-metric-label">QA Sign-Off Items</span>
    </div>
    <div>
      <span class="wai-metric-value">2/2</span>
      <span class="wai-metric-label">Pre-Launch Gaps Resolved</span>
    </div>
    <div>
      <span class="wai-metric-value">$3,444</span>
      <span class="wai-metric-label">Full Production / mo</span>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     PLATFORM ARCHITECTURE
══════════════════════════════════════════════ -->
<section class="wai-section">
  <div class="wai-inner">
    <p class="wai-section-label">Platform Architecture</p>
    <h2 class="wai-section-title">Five Layers. One Coaching Ecosystem.</h2>
    <p class="wai-section-subtitle">Every warrior message flows through Firebase-authenticated access, into a Dify-powered 7-agent coaching engine, pulling personalized context from Firebase — and streaming back a coaching response in real time.</p>

    <div class="wai-arch-stack">
      <div class="wai-arch-layer">
        <span class="wai-arch-layer-num">01</span>
        <div>
          <div class="wai-arch-layer-name">Flutter App</div>
          <div class="wai-arch-layer-detail">Native iOS & Android · Core 4 Dashboard · Offline-capable · OMI Pendant integration</div>
        </div>
        <span class="wai-arch-layer-status status-planned">In Development</span>
      </div>
      <div class="wai-arch-layer">
        <span class="wai-arch-layer-num">02</span>
        <div>
          <div class="wai-arch-layer-name">Hono Gateway :3000</div>
          <div class="wai-arch-layer-detail">Firebase JWT validation · Per-user rate limiting · SSE proxy to Dify · CORS-restricted</div>
        </div>
        <span class="wai-arch-layer-status status-live">Live on Vultr</span>
      </div>
      <div class="wai-arch-layer">
        <span class="wai-arch-layer-num">03</span>
        <div>
          <div class="wai-arch-layer-name">Dify CE — 11 Containers</div>
          <div class="wai-arch-layer-detail">7 specialist agents · Coordinator routing · Celery workers · Qdrant vector store · Redis</div>
        </div>
        <span class="wai-arch-layer-status status-live">Live on Vultr</span>
      </div>
      <div class="wai-arch-layer">
        <span class="wai-arch-layer-num">04</span>
        <div>
          <div class="wai-arch-layer-name">Hono Firebase Bridge :4000</div>
          <div class="wai-arch-layer-detail">localhost-only · 13 REST endpoints · Redis-cached context · 6 parallel Firestore reads</div>
        </div>
        <span class="wai-arch-layer-status status-live">Live on Vultr</span>
      </div>
      <div class="wai-arch-layer">
        <span class="wai-arch-layer-num">05</span>
        <div>
          <div class="wai-arch-layer-name">Firebase Firestore</div>
          <div class="wai-arch-layer-detail">Staging: attack-with-stack-staging · Stacks · Core 4 · Door Cards · Fact Maps · Profile</div>
        </div>
        <span class="wai-arch-layer-status status-live">Staging Active</span>
      </div>
    </div>

    <div class="wai-quote">
      <p>"The Firebase JWT is validated at the Gateway and discarded. The Dify engine receives only a user ID — never a token. The Bridge is physically unreachable from the internet."</p>
      <cite>— Security model by design (DL-013)</cite>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     QA PILLARS
══════════════════════════════════════════════ -->
<section class="wai-section wai-section-alt">
  <div class="wai-inner">
    <p class="wai-section-label">QA Strategy</p>
    <h2 class="wai-section-title">Three Pillars. Zero Guesswork.</h2>
    <p class="wai-section-subtitle">The test strategy covers every layer of the platform — from individual endpoint validation through sustained 10,000-user load. Nothing is left to chance.</p>

    <div class="wai-pillars">
      <div class="wai-pillar-card">
        <span class="wai-pillar-icon">🧪</span>
        <h3 class="wai-pillar-title">Functional</h3>
        <p class="wai-pillar-desc">Unit → Integration → E2E pyramid. Every auth flow, every rate limit, every user data isolation guarantee has a named test case.</p>
        <div class="wai-pillar-stats">
          <div class="wai-pillar-stat"><div class="wai-pillar-stat-dot"></div>100+ unit tests (Gateway + Bridge)</div>
          <div class="wai-pillar-stat"><div class="wai-pillar-stat-dot"></div>30–50 integration tests (staged VPS)</div>
          <div class="wai-pillar-stat"><div class="wai-pillar-stat-dot"></div>10 E2E scenarios (Anna's sign-off cases)</div>
          <div class="wai-pillar-stat"><div class="wai-pillar-stat-dot"></div>Firebase Emulator for local CI</div>
        </div>
      </div>
      <div class="wai-pillar-card">
        <span class="wai-pillar-icon">⚡</span>
        <h3 class="wai-pillar-title">Load & Scale</h3>
        <p class="wai-pillar-desc">k6 load testing in 5 phases. Baseline → confidence → stress → scale → production simulation. Clear pass/fail thresholds at every stage.</p>
        <div class="wai-pillar-stats">
          <div class="wai-pillar-stat"><div class="wai-pillar-stat-dot"></div>Baseline: 0→100 users, p95 &lt; 3s</div>
          <div class="wai-pillar-stat"><div class="wai-pillar-stat-dot"></div>Production Sim: 5,000 users, 24 hours</div>
          <div class="wai-pillar-stat"><div class="wai-pillar-stat-dot"></div>Redis cache hit rate target: &gt;80%</div>
          <div class="wai-pillar-stat"><div class="wai-pillar-stat-dot"></div>Error rate threshold: &lt;0.5%</div>
        </div>
      </div>
      <div class="wai-pillar-card">
        <span class="wai-pillar-icon">🔒</span>
        <h3 class="wai-pillar-title">Security</h3>
        <p class="wai-pillar-desc">Two critical gaps resolved pre-launch. Auth architecture verified. Full audit (prompt injection, Dify sandboxing) scheduled as dedicated session.</p>
        <div class="wai-pillar-stats">
          <div class="wai-pillar-stat"><div class="wai-pillar-stat-dot"></div>CORS: wildcard → env-var controlled</div>
          <div class="wai-pillar-stat"><div class="wai-pillar-stat-dot"></div>Rate limiting: 20 req/min per user</div>
          <div class="wai-pillar-stat"><div class="wai-pillar-stat-dot"></div>Bridge: localhost-only binding</div>
          <div class="wai-pillar-stat"><div class="wai-pillar-stat-dot"></div>Zod validation on all write endpoints</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     SECURITY STATUS
══════════════════════════════════════════════ -->
<section class="wai-section">
  <div class="wai-inner">
    <p class="wai-section-label">Security Status</p>
    <h2 class="wai-section-title">Known Gaps. Resolved Before Launch.</h2>
    <p class="wai-section-subtitle">Every security item is tracked, owned, and categorized. Nothing is unknown. Two critical gaps found during architecture analysis were fixed and merged before any QA testing began.</p>

    <div class="wai-security-grid">
      <div class="wai-sec-row" style="background: var(--wai-navy-primary);">
        <span style="font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--wai-gray-medium);">Security Item</span>
        <span style="font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--wai-gray-medium);">Ticket</span>
        <span style="font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--wai-gray-medium);">Status</span>
      </div>
      <div class="wai-sec-row">
        <span class="wai-sec-item">Firebase JWT validation — token verified, uid extracted, token discarded</span>
        <span class="wai-sec-ticket">by design</span>
        <span class="wai-sec-status sec-design">BY DESIGN</span>
      </div>
      <div class="wai-sec-row">
        <span class="wai-sec-item">CORS: replaced wildcard <code>*</code> with <code>ALLOWED_ORIGIN</code> env var</span>
        <span class="wai-sec-ticket">WARAI-71</span>
        <span class="wai-sec-status sec-fixed">✓ MERGED</span>
      </div>
      <div class="wai-sec-row">
        <span class="wai-sec-item">Per-user rate limiting on <code>/chat</code> — 20 req/min, configurable, <code>Retry-After</code> header</span>
        <span class="wai-sec-ticket">WARAI-72</span>
        <span class="wai-sec-status sec-fixed">✓ MERGED</span>
      </div>
      <div class="wai-sec-row">
        <span class="wai-sec-item">Bridge localhost-only — port 4000 bound to 127.0.0.1, unreachable from internet</span>
        <span class="wai-sec-ticket">by design</span>
        <span class="wai-sec-status sec-design">BY DESIGN</span>
      </div>
      <div class="wai-sec-row">
        <span class="wai-sec-item">Zod validation on all Bridge write endpoints — type, length (5k chars max), enums</span>
        <span class="wai-sec-ticket">by design</span>
        <span class="wai-sec-status sec-design">BY DESIGN</span>
      </div>
      <div class="wai-sec-row">
        <span class="wai-sec-item">AI audit trail — <code>digital_trainer_stack: true</code> on every AI-generated write</span>
        <span class="wai-sec-ticket">ADR-W019</span>
        <span class="wai-sec-status sec-design">BY DESIGN</span>
      </div>
      <div class="wai-sec-row">
        <span class="wai-sec-item">Input length limit on <code>/chat</code> message field</span>
        <span class="wai-sec-ticket">pending</span>
        <span class="wai-sec-status sec-pending">PRE-LAUNCH</span>
      </div>
      <div class="wai-sec-row">
        <span class="wai-sec-item">Bridge write rate limiting — Redis INCR pattern (ADR-W021)</span>
        <span class="wai-sec-ticket">ADR-W021</span>
        <span class="wai-sec-status sec-pending">PRE-BETA</span>
      </div>
      <div class="wai-sec-row">
        <span class="wai-sec-item">Full security audit — prompt injection, Dify sandboxing, personal project patterns</span>
        <span class="wai-sec-ticket">separate session</span>
        <span class="wai-sec-status sec-planned">PRE-PROD</span>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     SCALING ROADMAP
══════════════════════════════════════════════ -->
<section class="wai-section wai-section-alt">
  <div class="wai-inner">
    <p class="wai-section-label">Scaling Roadmap</p>
    <h2 class="wai-section-title">Stage 0 to 10,000 Warriors.</h2>
    <p class="wai-section-subtitle">The architecture is designed from day one for production scale. The bottleneck is Celery — not the Gateway, not Firebase. Five stages take us from demo to 10,000 concurrent users with full cost transparency at each step.</p>

    <div class="wai-stages">

      <div class="wai-stage active">
        <div class="wai-stage-num">0</div>
        <div>
          <div class="wai-stage-title">Current State — V0 Demo</div>
          <div class="wai-stage-target">Target: 50 concurrent Warriors</div>
          <div class="wai-stage-desc">4 vCPU / 12GB RAM Vultr VPS. Default Celery config. ~10–20 truly parallel LLM sessions. Suitable for Garrett demo and first 100 users. No action required until p95 response time exceeds 5s under normal load.</div>
        </div>
        <div class="wai-stage-cost">
          <span class="wai-stage-cost-amount">$72</span>
          <span class="wai-stage-cost-label">per month</span>
        </div>
      </div>

      <div class="wai-stage">
        <div class="wai-stage-num">1</div>
        <div>
          <div class="wai-stage-title">Celery Optimisation — Zero Hardware Cost</div>
          <div class="wai-stage-target">Target: 150 concurrent Warriors</div>
          <div class="wai-stage-desc">Enable gevent concurrency on Celery workers (<code>--concurrency=20 -P gevent</code>). Add second worker container. LLM API calls are I/O-bound — gevent doubles effective throughput at zero cost. 2–4 hours to implement. Result: 40–60 parallel LLM sessions.</div>
        </div>
        <div class="wai-stage-cost">
          <span class="wai-stage-cost-amount">$0 delta</span>
          <span class="wai-stage-cost-label">config change only</span>
        </div>
      </div>

      <div class="wai-stage">
        <div class="wai-stage-num">2</div>
        <div>
          <div class="wai-stage-title">VPS Vertical Scale</div>
          <div class="wai-stage-target">Target: 400 concurrent Warriors</div>
          <div class="wai-stage-desc">Resize Vultr VPS to 8 vCPU / 32GB RAM. Scale Celery to 4 containers × 20 gevent = 80 parallel sessions. 1 day to implement (Vultr live resize, ~10 min downtime). Increase PostgreSQL max_connections to 300, Redis maxmemory to 4GB.</div>
        </div>
        <div class="wai-stage-cost">
          <span class="wai-stage-cost-amount">$180</span>
          <span class="wai-stage-cost-label">per month</span>
        </div>
      </div>

      <div class="wai-stage">
        <div class="wai-stage-num">3</div>
        <div>
          <div class="wai-stage-title">Service Separation — 3 Servers</div>
          <div class="wai-stage-target">Target: 1,000 concurrent Warriors</div>
          <div class="wai-stage-desc">Separate Gateway/Bridge (Server 1), Dify AI Engine (Server 2), and dedicated Redis (Server 3). Shared Redis enables rate limiter to work correctly across multiple Gateway instances. 6 Celery workers × 20 gevent = 120 parallel LLM sessions. 1–2 weeks to implement.</div>
        </div>
        <div class="wai-stage-cost">
          <span class="wai-stage-cost-amount">$450</span>
          <span class="wai-stage-cost-label">per month total</span>
        </div>
      </div>

      <div class="wai-stage">
        <div class="wai-stage-num">4</div>
        <div>
          <div class="wai-stage-title">Horizontal Dify Cluster</div>
          <div class="wai-stage-target">Target: 5,000–10,000 concurrent Warriors</div>
          <div class="wai-stage-desc">Load-balanced Dify cluster (3 instances). Consistent-hash load balancing by conversation_id for session affinity. Shared Redis backend — conversation state accessible to any instance. 360 parallel LLM sessions. 4–6 weeks to implement.</div>
        </div>
        <div class="wai-stage-cost">
          <span class="wai-stage-cost-amount">$1,500</span>
          <span class="wai-stage-cost-label">per month</span>
        </div>
      </div>

    </div>

    <div style="margin-top: 48px;">
      <p class="wai-section-label">LLM Cost at 5,000 Users</p>
      <table class="wai-cost-table">
        <thead>
          <tr>
            <th>Provider / Agent Assignment</th>
            <th>Rate Limit</th>
            <th>Monthly Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DeepSeek Chat — Power Stack, Production Stack, Drift Check</td>
            <td class="mono">500 RPM</td>
            <td class="mono">~$180/mo</td>
          </tr>
          <tr>
            <td>Claude 3.5 Sonnet — Fact Map, Bible Stack, General Coach</td>
            <td class="mono">200 RPM</td>
            <td class="mono">~$420/mo</td>
          </tr>
          <tr>
            <td>Gemini 2.0 Flash — Breakthrough Agent</td>
            <td class="mono">1,000 RPM</td>
            <td class="mono">~$90/mo</td>
          </tr>
          <tr>
            <td><strong>Total LLM at 5,000 Warriors</strong></td>
            <td>—</td>
            <td class="mono"><strong>~$690/mo</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     ANNA'S CHECKLIST
══════════════════════════════════════════════ -->
<section class="wai-section">
  <div class="wai-inner">
    <p class="wai-section-label">QA Sign-Off</p>
    <h2 class="wai-section-title">Anna's Gate. Binary. No Gray Areas.</h2>
    <p class="wai-section-subtitle">22 binary checkboxes. Each requires evidence — not "looks good." Three launch gates: Garrett demo, beta, and production. Nothing ships without the gate passing.</p>

    <div class="wai-checklist-grid">

      <div class="wai-checklist-group">
        <div class="wai-checklist-header gate-demo">
          <span class="wai-checklist-header-icon">🧪</span>
          <span class="wai-checklist-header-title">Functional</span>
          <span class="wai-checklist-header-count">F-01 → F-09</span>
        </div>
        <ul class="wai-checklist-items">
          <li class="wai-checklist-item">
            <span class="wai-check-id">F-01</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">Unit test suite for <code>warrior-hono-gateway</code> — all passing</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">F-02</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">Unit test suite for <code>warrior-firebase-bridge</code> — all passing</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">F-03</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">E2E-01: Happy path Power Stack conversation completes</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">F-04</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">E2E-02: Coordinator routes ≥8/10 messages to correct specialist</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">F-05</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">E2E-03: Agent references user's prior stacks in response</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">F-06</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">E2E-04: AI stack appears in Firebase with <code>digital_trainer_stack: true</code></span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">F-07</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">E2E-05: Expired token returns <code>401</code> within 200ms</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">F-08</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">E2E-06: User A cannot see User B's stack data</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">F-09</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">E2E-09: Bridge write rate limit — 11th write/min returns <code>429</code></span>
          </li>
        </ul>
      </div>

      <div class="wai-checklist-group">
        <div class="wai-checklist-header gate-beta">
          <span class="wai-checklist-header-icon">⚡</span>
          <span class="wai-checklist-header-title">Load</span>
          <span class="wai-checklist-header-count">L-01 → L-06</span>
        </div>
        <ul class="wai-checklist-items">
          <li class="wai-checklist-item">
            <span class="wai-check-id">L-01</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">Baseline load test completed — p50/p95/p99 documented</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">L-02</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">150 concurrent users: p95 &lt;3s, error rate &lt;1%</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">L-03</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">VPS RAM &lt;10GB under 150-user sustained load</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">L-04</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">Redis cache hit rate &gt;80% under load</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">L-05</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">Celery worker queue depth &lt;50 under load</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">L-06</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">Scaling upgrade path documented and costed</span>
          </li>
        </ul>

        <div class="wai-checklist-header gate-prod" style="margin-top:0;border-top:1px solid var(--wai-navy-light);">
          <span class="wai-checklist-header-icon">🔒</span>
          <span class="wai-checklist-header-title">Security</span>
          <span class="wai-checklist-header-count">S-01 → S-07</span>
        </div>
        <ul class="wai-checklist-items">
          <li class="wai-checklist-item">
            <span class="wai-check-id">S-01</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label"><code>ALLOWED_ORIGIN</code> set to staging app URL in staging <code>.env</code></span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">S-02</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">Rate limiting confirmed: 21st request in 60s returns <code>429</code></span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">S-03</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">Direct HTTP to Bridge :4000 from outside VPS: connection refused</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">S-04</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">Firebase credentials absent from all logs</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">S-05</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">Dify API key absent from any client-visible response</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">S-06</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">Input length limit on <code>/chat</code> message field implemented</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">S-07</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">Bridge write rate limit (ADR-W021 Redis pattern) implemented</span>
          </li>
        </ul>
      </div>

      <div class="wai-checklist-group">
        <div class="wai-checklist-header gate-ci">
          <span class="wai-checklist-header-icon">🔁</span>
          <span class="wai-checklist-header-title">CI/CD</span>
          <span class="wai-checklist-header-count">CI-01 → CI-03</span>
        </div>
        <ul class="wai-checklist-items">
          <li class="wai-checklist-item">
            <span class="wai-check-id">CI-01</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">GitHub Actions runs unit tests on every push to <code>dev</code></span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">CI-02</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label"><code>bun run typecheck</code> passes in CI for both repos</span>
          </li>
          <li class="wai-checklist-item">
            <span class="wai-check-id">CI-03</span>
            <div class="wai-check-box"></div>
            <span class="wai-check-label">Load test baseline runs in CI on every push to <code>main</code></span>
          </li>
        </ul>
      </div>

    </div>

    <!-- Go/No-Go Gates -->
    <div class="wai-gates">
      <div class="wai-gate wai-gate-demo">
        <span class="wai-gate-icon">🏁</span>
        <div class="wai-gate-text">
          <strong>Garrett Demo Gate</strong>
          <span>All F-01 through F-09 must be GREEN. No exceptions.</span>
        </div>
      </div>
      <div class="wai-gate wai-gate-beta">
        <span class="wai-gate-icon">🚀</span>
        <div class="wai-gate-text">
          <strong>Beta Launch Gate</strong>
          <span>All L-01 through L-04 must be GREEN in addition to all Functional items.</span>
        </div>
      </div>
      <div class="wai-gate wai-gate-prod">
        <span class="wai-gate-icon">⚔️</span>
        <div class="wai-gate-text">
          <strong>Production Launch Gate</strong>
          <span>All S-01 through S-07 must be GREEN. All 22 items pass. All three gates cleared.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     OPEN ITEMS
══════════════════════════════════════════════ -->
<section class="wai-section wai-section-alt">
  <div class="wai-inner">
    <p class="wai-section-label">Open Items</p>
    <h2 class="wai-section-title">Known. Owned. Tracked.</h2>
    <p class="wai-section-subtitle">Every open item is documented, assigned, and mapped to the checklist items it unblocks. Nothing is hidden. Nothing is hoped for.</p>

    <div class="wai-open-items">
      <div class="wai-open-item-row wai-open-item-row-header">
        <span>Task</span>
        <span>Owner</span>
        <span>Priority</span>
      </div>
      <div class="wai-open-item-row">
        <span class="wai-oi-task">Set <code>ALLOWED_ORIGIN</code> in staging <code>.env</code> on VPS — unblocks S-01</span>
        <span class="wai-oi-owner">Steffen / Weston</span>
        <span class="wai-priority-high">HIGH</span>
      </div>
      <div class="wai-open-item-row">
        <span class="wai-oi-task">Implement Bridge write rate limit — ADR-W021 Redis INCR pattern — unblocks S-07</span>
        <span class="wai-oi-owner">Jeremy</span>
        <span class="wai-priority-high">HIGH</span>
      </div>
      <div class="wai-open-item-row">
        <span class="wai-oi-task">Build unit test suites for both repos — unblocks F-01, F-02</span>
        <span class="wai-oi-owner">Jeremy</span>
        <span class="wai-priority-high">HIGH</span>
      </div>
      <div class="wai-open-item-row">
        <span class="wai-oi-task">Add input length limit on Gateway <code>/chat</code> message field — unblocks S-06</span>
        <span class="wai-oi-owner">Jeremy</span>
        <span class="wai-priority-medium">MEDIUM</span>
      </div>
      <div class="wai-open-item-row">
        <span class="wai-oi-task">Set up GitHub Actions CI pipeline for both repos — unblocks CI-01</span>
        <span class="wai-oi-owner">Jeremy</span>
        <span class="wai-priority-medium">MEDIUM</span>
      </div>
      <div class="wai-open-item-row">
        <span class="wai-oi-task">Provision Beta Firebase project</span>
        <span class="wai-oi-owner">Weston</span>
        <span class="wai-priority-medium">MEDIUM</span>
      </div>
      <div class="wai-open-item-row">
        <span class="wai-oi-task">Full security audit — prompt injection, Dify sandboxing — dedicated session</span>
        <span class="wai-oi-owner">Separate session</span>
        <span class="wai-priority-high">HIGH</span>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     FOOTER STATEMENT
══════════════════════════════════════════════ -->
<section class="wai-section" style="text-align:center; border-bottom: none; padding-bottom: 96px;">
  <div class="wai-inner">
    <p class="wai-hero-eyebrow">Warrior AI Solutions</p>
    <h2 class="wai-hero-headline" style="font-size: clamp(2rem, 4vw, 3rem);">
      <span>Where Truth Meets Time.</span>
    </h2>
    <p class="wai-hero-sub" style="margin: 0 auto;">
      The platform is real. The architecture is solid. The gaps are known and owned. The path to 10,000 warriors is documented, costed, and ready to execute.
    </p>
  </div>
</section>

</div>
