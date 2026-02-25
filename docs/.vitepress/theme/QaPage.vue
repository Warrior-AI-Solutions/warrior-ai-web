<template>
  <div class="wai-page">

    <!-- SPRINT OUTPUT LABEL -->
    <div class="sprint-output-label">
      <span class="sprint-output-icon">⚡</span>
      <span class="sprint-output-text">Sprint Output: <strong>QA &amp; Security Session</strong> — Test Strategy &amp; Launch Gates</span>
    </div>

    <!-- HERO -->
    <section class="wai-hero">
      <p class="wai-hero-eyebrow">Warrior AI — QA Strategy</p>
      <h1 class="wai-hero-headline">
        Test Strategy.<br>
        <span>Sign-Off Ready.</span>
      </h1>
      <p class="wai-hero-sub">
        Full QA coverage from unit tests through 10,000-user load simulation. Every item Anna needs to sign off — functional, load, security, and CI/CD gates — documented with pass criteria and current status.
      </p>
      <div class="wai-hero-badges">
        <span class="wai-badge wai-badge-green">✓ WARAI-71 CORS Fixed</span>
        <span class="wai-badge wai-badge-green">✓ WARAI-72 Rate Limiting Live</span>
        <span class="wai-badge wai-badge-gold">42 Security Checklist Items</span>
        <span class="wai-badge wai-badge-blue">22 Anna's Gate Items</span>
      </div>
    </section>

    <!-- SUMMARY STRIP -->
    <section class="wai-metrics">
      <div class="wai-metrics-inner">
        <div>
          <span class="wai-metric-value">3</span>
          <span class="wai-metric-label">Test Environments</span>
        </div>
        <div>
          <span class="wai-metric-value">100+</span>
          <span class="wai-metric-label">Unit Tests (planned)</span>
        </div>
        <div>
          <span class="wai-metric-value">10</span>
          <span class="wai-metric-label">E2E Scenarios</span>
        </div>
        <div>
          <span class="wai-metric-value">5</span>
          <span class="wai-metric-label">Load Test Phases</span>
        </div>
        <div>
          <span class="wai-metric-value">p95 &lt; 3s</span>
          <span class="wai-metric-label">Response Threshold</span>
        </div>
        <div>
          <span class="wai-metric-value">22</span>
          <span class="wai-metric-label">Sign-Off Checklist Items</span>
        </div>
      </div>
    </section>

    <!-- SECTION 1: PILLARS -->
    <section class="wai-section">
      <h2 class="wai-section-title">Three QA Pillars</h2>
      <div class="wai-pillar-grid">
        <div class="wai-pillar">
          <div class="wai-pillar-icon">✅</div>
          <h3>Functional</h3>
          <p>Every endpoint works correctly, auth is solid, user data is isolated per Warrior.</p>
          <div class="wai-pillar-status wai-status-yellow">Manually verified — automated suite to build</div>
        </div>
        <div class="wai-pillar">
          <div class="wai-pillar-icon">⚡</div>
          <h3>Load &amp; Scale</h3>
          <p>System stays operational at 5,000–10,000 concurrent Warriors with sub-3s p95 response times.</p>
          <div class="wai-pillar-status wai-status-yellow">Architecture designed — staged scaling plan documented</div>
        </div>
        <div class="wai-pillar">
          <div class="wai-pillar-icon">🔒</div>
          <h3>Security</h3>
          <p>Malicious users cannot break, extract, or corrupt Warrior data across any attack surface.</p>
          <div class="wai-pillar-status wai-status-green">Two critical gaps resolved — full audit documented</div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: ENVIRONMENTS -->
    <section class="wai-section wai-section-alt">
      <h2 class="wai-section-title">Test Environments</h2>
      <p class="wai-section-sub">All QA work uses Staging only. No test ever runs against the Production Firebase project.</p>
      <div class="wai-table-wrap">
        <table class="wai-table">
          <thead>
            <tr><th>Environment</th><th>Firebase Project</th><th>Purpose</th><th>Access</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="wai-badge wai-badge-blue">Staging</span></td>
              <td><code>attack-with-stack-staging</code></td>
              <td>All QA, load testing, integration testing</td>
              <td>Steffen, Weston, QA</td>
            </tr>
            <tr>
              <td><span class="wai-badge wai-badge-gold">Beta</span></td>
              <td>TBD</td>
              <td>Pre-production validation with invited Warriors</td>
              <td>Weston to provision</td>
            </tr>
            <tr>
              <td><span class="wai-badge wai-badge-green">Production</span></td>
              <td>TBD</td>
              <td>Live system for 3,000+ Warriors</td>
              <td>Post-launch only</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION 3: TEST PYRAMID -->
    <section class="wai-section">
      <h2 class="wai-section-title">Testing Pyramid</h2>
      <img
        src="/images/warrior-ai-test-pyramid.webp"
        alt="QA Testing Pyramid — Unit, Integration, E2E"
        class="wai-section-image"
      />
      <div class="wai-pyramid-wrap">
        <div class="wai-pyramid">
          <div class="wai-pyramid-tier wai-tier-top">
            <span class="wai-tier-label">E2E Tests</span>
            <span class="wai-tier-count">5–10 scenarios</span>
            <span class="wai-tier-desc">Full conversation: Flutter → Gateway → Dify → Bridge → Firebase</span>
          </div>
          <div class="wai-pyramid-tier wai-tier-mid">
            <span class="wai-tier-label">Integration Tests</span>
            <span class="wai-tier-count">30–50 tests</span>
            <span class="wai-tier-desc">Gateway ↔ Dify, Dify ↔ Bridge, Bridge ↔ Firestore</span>
          </div>
          <div class="wai-pyramid-tier wai-tier-base">
            <span class="wai-tier-label">Unit Tests</span>
            <span class="wai-tier-count">100+ tests</span>
            <span class="wai-tier-desc">Auth middleware, Zod schemas, route handlers</span>
          </div>
        </div>
      </div>

      <h3 class="wai-subsection-title">Unit Tests — Gateway</h3>
      <div class="wai-table-wrap">
        <table class="wai-table">
          <thead><tr><th>File</th><th>Test</th><th>Expected</th></tr></thead>
          <tbody>
            <tr><td rowspan="5"><code>firebase-auth.test.ts</code></td><td>Valid Firebase ID token</td><td><code>200</code> — userId in context</td></tr>
            <tr><td>Missing Authorization header</td><td><code>401</code> — Unauthorized</td></tr>
            <tr><td>Malformed bearer token</td><td><code>401</code> — Unauthorized</td></tr>
            <tr><td>Expired token</td><td><code>401</code> — Unauthorized</td></tr>
            <tr><td>Token for User A used by User B</td><td><code>401</code> — invalid signature</td></tr>
            <tr><td rowspan="4"><code>rate-limit.test.ts</code></td><td>20 requests in 60s</td><td>All <code>200</code></td></tr>
            <tr><td>21st request in window</td><td><code>429</code> with Retry-After header</td></tr>
            <tr><td>Two users, each at 20 req</td><td>Both <code>200</code> — per-user limits</td></tr>
            <tr><td>/health — any request count</td><td>Always <code>200</code> — not rate limited</td></tr>
            <tr><td rowspan="3"><code>chat.test.ts</code></td><td>Valid auth + message → Dify mock</td><td><code>200</code> SSE stream</td></tr>
            <tr><td>Missing/empty message field</td><td><code>400</code> — Bad Request</td></tr>
            <tr><td>Dify returns 5xx</td><td><code>502</code> — Upstream Error</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="wai-subsection-title">Unit Tests — Firebase Bridge</h3>
      <div class="wai-table-wrap">
        <table class="wai-table">
          <thead><tr><th>Test</th><th>Expected</th></tr></thead>
          <tbody>
            <tr><td>Stack content at 5,000 chars</td><td>Passes validation</td></tr>
            <tr><td>Stack content at 5,001 chars</td><td>Rejected — content too long</td></tr>
            <tr><td>Stack type not in allowed enum</td><td>Rejected — invalid enum</td></tr>
            <tr><td>Missing required fields</td><td>Rejected — missing field error</td></tr>
            <tr><td><code>digital_trainer_stack</code> flag on create</td><td>Always set to <code>true</code></td></tr>
            <tr><td>GET /stacks/:userId — known user</td><td><code>200</code> with array</td></tr>
            <tr><td>POST /stacks/:userId — valid payload</td><td><code>201</code> — <code>digital_trainer_stack: true</code></td></tr>
            <tr><td>PATCH /stacks/:userId/:stackId — non-existent</td><td><code>404</code></td></tr>
            <tr><td>GET /context/:userId — cold Redis</td><td>Response &lt; 300ms</td></tr>
            <tr><td>GET /context/:userId — warm Redis</td><td>Response &lt; 10ms</td></tr>
            <tr><td>PUT /core4/:userId/:date — 6 of 8 toggles true</td><td>score = 75.0</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION 4: E2E SCENARIOS -->
    <section class="wai-section wai-section-alt">
      <h2 class="wai-section-title">Anna's 10 E2E Test Scenarios</h2>
      <p class="wai-section-sub">These are the scenarios that represent a passing QA sign-off. Each requires a real staging session.</p>
      <div class="wai-table-wrap">
        <table class="wai-table">
          <thead><tr><th>#</th><th>Scenario</th><th>Pass Signal</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="wai-badge wai-badge-blue">E2E-01</span></td>
              <td>Power Stack conversation (happy path)</td>
              <td>SSE streams within 3s; agent correctly identified; prior stacks referenced</td>
            </tr>
            <tr>
              <td><span class="wai-badge wai-badge-blue">E2E-02</span></td>
              <td>Coordinator routing accuracy</td>
              <td>≥ 8/10 messages routed to correct specialist (80% threshold)</td>
            </tr>
            <tr>
              <td><span class="wai-badge wai-badge-blue">E2E-03</span></td>
              <td>Firebase personalization</td>
              <td>Agent's response references user's prior stack content</td>
            </tr>
            <tr>
              <td><span class="wai-badge wai-badge-blue">E2E-04</span></td>
              <td>Stack write and verification</td>
              <td>New stack in staging Firestore with <code>digital_trainer_stack: true</code></td>
            </tr>
            <tr>
              <td><span class="wai-badge wai-badge-blue">E2E-05</span></td>
              <td>Auth rejection</td>
              <td><code>401</code> within 200ms; no Dify call made</td>
            </tr>
            <tr>
              <td><span class="wai-badge wai-badge-blue">E2E-06</span></td>
              <td>User data isolation</td>
              <td>User A and User B see only their own data — zero cross-contamination</td>
            </tr>
            <tr>
              <td><span class="wai-badge wai-badge-blue">E2E-07</span></td>
              <td>Rate limit enforcement</td>
              <td>21st request returns <code>429</code> with <code>Retry-After</code></td>
            </tr>
            <tr>
              <td><span class="wai-badge wai-badge-blue">E2E-08</span></td>
              <td>Core4 score calculation</td>
              <td>PUT Core4 with 6/8 true → score = 75.0 in Firestore</td>
            </tr>
            <tr>
              <td><span class="wai-badge wai-badge-blue">E2E-09</span></td>
              <td>Bridge write rate limit</td>
              <td>11th write/minute returns <code>429</code> from Bridge</td>
            </tr>
            <tr>
              <td><span class="wai-badge wai-badge-blue">E2E-10</span></td>
              <td>Full voice conversation</td>
              <td>Audio plays within 5s; no transcription gaps</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION 5: LOAD TESTING -->
    <section class="wai-section">
      <h2 class="wai-section-title">Load Testing Plan</h2>
      <p class="wai-section-sub">Tool: k6. SSE-native, TypeScript-friendly, clean dashboards, CI-ready.</p>

      <h3 class="wai-subsection-title">Phase Schedule</h3>
      <div class="wai-table-wrap">
        <table class="wai-table">
          <thead><tr><th>Phase</th><th>Users</th><th>Duration</th><th>Goal</th><th>Trigger</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Baseline</strong></td>
              <td>0 → 100</td>
              <td>1 hour</td>
              <td>Find current ceiling</td>
              <td>Now (before Garrett demo)</td>
            </tr>
            <tr>
              <td><strong>Confidence</strong></td>
              <td>0 → 200</td>
              <td>2 hours</td>
              <td>Confirm 200-user stability</td>
              <td>After baseline passes</td>
            </tr>
            <tr>
              <td><strong>Stress</strong></td>
              <td>0 → 500</td>
              <td>4 hours</td>
              <td>Find the failure mode</td>
              <td>Pre-beta launch</td>
            </tr>
            <tr>
              <td><strong>Scale</strong></td>
              <td>0 → 2,000</td>
              <td>8 hours</td>
              <td>Validate Step 1 upgrade</td>
              <td>After VPS upgrade</td>
            </tr>
            <tr>
              <td><strong>Production Sim</strong></td>
              <td>0 → 5,000</td>
              <td>24 hours</td>
              <td>Validate Stage 2 architecture</td>
              <td>Pre-production launch</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="wai-subsection-title">Metrics Thresholds</h3>
      <div class="wai-table-wrap">
        <table class="wai-table">
          <thead><tr><th>Metric</th><th class="wai-green">Green</th><th class="wai-yellow">Yellow</th><th class="wai-red">Red</th></tr></thead>
          <tbody>
            <tr><td>p95 response time</td><td class="wai-green">&lt; 3s</td><td class="wai-yellow">3–8s</td><td class="wai-red">&gt; 8s</td></tr>
            <tr><td>Error rate</td><td class="wai-green">&lt; 0.5%</td><td class="wai-yellow">0.5–2%</td><td class="wai-red">&gt; 2%</td></tr>
            <tr><td>VPS RAM</td><td class="wai-green">&lt; 9GB</td><td class="wai-yellow">9–11GB</td><td class="wai-red">&gt; 11GB</td></tr>
            <tr><td>VPS CPU</td><td class="wai-green">&lt; 70%</td><td class="wai-yellow">70–85%</td><td class="wai-red">&gt; 85%</td></tr>
            <tr><td>Dify worker queue depth</td><td class="wai-green">&lt; 10</td><td class="wai-yellow">10–50</td><td class="wai-red">&gt; 50</td></tr>
            <tr><td>Redis cache hit rate</td><td class="wai-green">&gt; 80%</td><td class="wai-yellow">60–80%</td><td class="wai-red">&lt; 60%</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION 6: ANNA'S GATE CHECKLIST -->
    <section class="wai-section wai-section-alt">
      <h2 class="wai-section-title">Anna's Gate — Full Sign-Off Checklist</h2>
      <p class="wai-section-sub">All items require evidence, not just "looks good". All F-01–F-09 must be GREEN before the Garrett demo. All S-01–S-20 before production launch.</p>

      <h3 class="wai-subsection-title">7.1 Functional Readiness</h3>
      <div class="wai-checklist">
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">F-01</span>Unit test suite exists for warrior-hono-gateway — all passing</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">F-02</span>Unit test suite exists for warrior-firebase-bridge — all passing</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">F-03</span>E2E-01: Happy path Power Stack conversation completes successfully</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">F-04</span>E2E-02: Coordinator routes ≥ 8/10 test messages to correct specialist</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">F-05</span>E2E-03: Agent references user's prior stacks in response</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">F-06</span>E2E-04: AI-created stack appears in Firebase with <code>digital_trainer_stack: true</code></div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">F-07</span>E2E-05: Expired token returns <code>401</code> within 200ms</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">F-08</span>E2E-06: User A cannot see User B's stack data</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">F-09</span>E2E-09: Bridge write rate limit (<code>429</code> on 11th write/minute) confirmed</div>
      </div>

      <h3 class="wai-subsection-title">7.2 Load Readiness</h3>
      <div class="wai-checklist">
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">L-01</span>Baseline load test completed — results documented with p50/p95/p99</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">L-02</span>150 concurrent users: p95 response &lt; 3s, error rate &lt; 1%</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">L-03</span>VPS RAM &lt; 10GB under 150-user sustained load</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">L-04</span>Redis cache hit rate &gt; 80% under load</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">L-05</span>Celery worker queue depth &lt; 50 under load</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">L-06</span>Scaling upgrade path documented and costed</div>
      </div>

      <h3 class="wai-subsection-title">7.3 Security Readiness — Minimum Pre-Launch</h3>
      <p class="wai-section-sub">Full security analysis in <a href="/security">Security Documentation</a>. Items below are the minimum gate. S-01–S-20 all required before production launch.</p>
      <div class="wai-checklist">
        <div class="wai-check-item wai-check-done"><span class="wai-check-id wai-check-id-done">S-01</span>ALLOWED_ORIGIN set in staging .env <em>(WARAI-71 — merged)</em></div>
        <div class="wai-check-item wai-check-done"><span class="wai-check-id wai-check-id-done">S-02</span>Rate limiting confirmed: 21st request returns 429 <em>(WARAI-72 — merged)</em></div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-03</span>Direct HTTP to Bridge port 4000 from outside VPS: connection refused</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-04</span>Firebase service account credentials absent from all logs</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-05</span>Dify API key absent from any client-visible response</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-06</span>Input length limit on /chat message field implemented</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-07</span>Bridge write rate limit (ADR-W021 Redis pattern) implemented</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-08</span>warrior-hono-gateway binds to 127.0.0.1:3000 + nginx reverse proxy <em>(WARAI-69)</em></div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-09</span>Qdrant API key set, enforced, .env permissions verified at 600</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-10</span>dify-sandbox on bridge mode; cannot reach dify-db or dify-redis</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-11</span>SSRF proxy blocklist covers Docker bridge gateway IP range</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-12</span>SSH port 22 restricted to Twingate egress IPs — not open to 0.0.0.0/0</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-13</span>Firebase .env permissions at 600; git history scanned clean</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-14</span>Gateway calls verifyIdToken with checkRevoked: true</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-15</span>Bridge write path uses HMAC-signed user token — not bare Dify user_id <em>(ADR-W026)</em></div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-16</span>Firestore Security Rules: request.auth.uid == userId enforced</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-17</span>Injection pattern blocklist active at Gateway before Dify handoff</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-18</span>Identity anchor + security boundary in all 7 agent system prompts</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-19</span>Pre-write Code Node validation gate in Dify (user_id from system variable only)</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">S-20</span>Bridge Docker container isolated from dify-sandbox and Dify LLM containers <em>(ADR-W027)</em></div>
      </div>

      <h3 class="wai-subsection-title">7.4 CI/CD Readiness</h3>
      <div class="wai-checklist">
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">CI-01</span>GitHub Actions workflow runs unit tests on every push to dev</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">CI-02</span>bun run typecheck passes in CI for both gateway and bridge repos</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">CI-03</span>Load test baseline runs as scheduled nightly job or on release-candidate tags — not on every push to main</div>
      </div>
    </section>

    <!-- SECTION 7: OPEN ITEMS -->
    <section class="wai-section">
      <h2 class="wai-section-title">Open Items</h2>
      <div class="wai-table-wrap">
        <table class="wai-table">
          <thead><tr><th>Item</th><th>Owner</th><th>Priority</th><th>Blocks</th></tr></thead>
          <tbody>
            <tr>
              <td>Set ALLOWED_ORIGIN in staging .env</td>
              <td>Steffen / Weston</td>
              <td><span class="wai-badge wai-badge-red">HIGH</span></td>
              <td>S-01</td>
            </tr>
            <tr>
              <td>Implement Bridge write rate limit (ADR-W021 Redis)</td>
              <td>Jeremy</td>
              <td><span class="wai-badge wai-badge-red">HIGH</span></td>
              <td>S-07</td>
            </tr>
            <tr>
              <td>Add input length limit on Gateway /chat message</td>
              <td>Jeremy</td>
              <td><span class="wai-badge wai-badge-gold">MEDIUM</span></td>
              <td>S-06</td>
            </tr>
            <tr>
              <td>Build unit test suite for both repos</td>
              <td>Jeremy</td>
              <td><span class="wai-badge wai-badge-red">HIGH</span></td>
              <td>F-01, F-02</td>
            </tr>
            <tr>
              <td>Set up GitHub Actions CI pipeline</td>
              <td>Jeremy</td>
              <td><span class="wai-badge wai-badge-gold">MEDIUM</span></td>
              <td>CI-01</td>
            </tr>
            <tr>
              <td>Provision Beta Firebase project</td>
              <td>Weston</td>
              <td><span class="wai-badge wai-badge-gold">MEDIUM</span></td>
              <td>Beta launch</td>
            </tr>
            <tr>
              <td>Full security audit — prompt injection, Dify sandboxing</td>
              <td>Separate session</td>
              <td><span class="wai-badge wai-badge-red">HIGH</span></td>
              <td>Production</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="wai-footer">
      <p>Warrior AI Solutions · QA Strategy · Last updated 2026-02-24</p>
      <p>See also: <a href="/architecture">Architecture Overview</a> · <a href="/security">Security Documentation</a></p>
    </footer>

  </div>
</template>

<style scoped>
/* Reuse base page styles already in custom.css */
.wai-pillar-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}
.wai-pillar {
  background: var(--wai-surface);
  border: 1px solid var(--wai-border);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.wai-pillar h3 {
  margin: 0;
  font-size: 1.1rem;
  color: var(--wai-gold);
}
.wai-pillar p {
  margin: 0;
  color: var(--wai-text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}
.wai-pillar-icon { font-size: 1.8rem; }
.wai-pillar-status {
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  margin-top: 0.5rem;
  font-weight: 600;
}
.wai-status-green { background: rgba(16,185,129,0.15); color: #34d399; }
.wai-status-yellow { background: rgba(245,158,11,0.15); color: #fbbf24; }

.wai-pyramid-wrap { display: flex; justify-content: center; margin: 2rem 0; }
.wai-pyramid { display: flex; flex-direction: column; gap: 0; width: 100%; max-width: 680px; }
.wai-pyramid-tier {
  padding: 1.2rem 1.5rem;
  border: 1px solid var(--wai-border);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.25rem;
}
.wai-tier-top { border-radius: 12px 12px 0 0; background: rgba(212,175,55,0.1); border-color: var(--wai-gold); }
.wai-tier-mid { background: rgba(59,130,246,0.08); }
.wai-tier-base { border-radius: 0 0 12px 12px; background: rgba(16,185,129,0.08); }
.wai-tier-label { font-weight: 700; color: var(--wai-gold); font-size: 1rem; }
.wai-tier-count { font-weight: 600; font-size: 0.85rem; color: var(--wai-text-muted); }
.wai-tier-desc { font-size: 0.85rem; color: var(--wai-text-muted); }

.wai-subsection-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--wai-gold);
  margin: 2rem 0 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--wai-border);
}

.wai-checklist { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.75rem; }
.wai-check-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  font-size: 0.88rem;
  line-height: 1.5;
  border: 1px solid transparent;
}
.wai-check-open {
  background: rgba(255,255,255,0.03);
  border-color: var(--wai-border);
  color: var(--wai-text-muted);
}
.wai-check-done {
  background: rgba(16,185,129,0.08);
  border-color: rgba(16,185,129,0.3);
  color: #a7f3d0;
  text-decoration: line-through;
  text-decoration-color: rgba(16,185,129,0.4);
}
.wai-check-id {
  flex-shrink: 0;
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(212,175,55,0.15);
  color: var(--wai-gold);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
}
.wai-check-id-done {
  background: rgba(16,185,129,0.2);
  color: #34d399;
}

.wai-green { color: #34d399; }
.wai-yellow { color: #fbbf24; }
.wai-red { color: #f87171; }
.wai-badge-red { background: rgba(239,68,68,0.15); color: #f87171; border-color: rgba(239,68,68,0.3); }
</style>
