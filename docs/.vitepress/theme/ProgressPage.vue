<template>
  <div class="wai-page">

    <!-- HERO -->
    <section class="wai-hero">
      <p class="wai-hero-eyebrow">Warrior AI Solutions — Build Progress</p>
      <h1 class="wai-hero-headline">
        From Zero to Prototype.<br>
        <span>Here's Where We Stand.</span>
      </h1>
      <p class="wai-hero-sub">
        A complete picture of every sprint, every milestone, and every line of infrastructure built to bring the Warrior Flutter App to life. Backend done. App in build. Prototype in sight.
      </p>
      <div class="wai-hero-badges">
        <span class="wai-badge wai-badge-green">✓ Backend 100% Live</span>
        <span class="wai-badge wai-badge-green">✓ M1 · M2 · M10 Merged</span>
        <span class="wai-badge wai-badge-gold">⚡ M3 + M4 Coding Now</span>
        <span class="wai-badge wai-badge-blue">🎯 V0 Prototype: ~7 Days Out</span>
      </div>
    </section>

    <!-- OVERALL STATUS STRIP -->
    <section class="wai-metrics">
      <div class="wai-metrics-inner">
        <div>
          <span class="wai-metric-value wai-metric-gold">11</span>
          <span class="wai-metric-label">Backend Days Completed</span>
        </div>
        <div>
          <span class="wai-metric-value">3</span>
          <span class="wai-metric-label">Flutter Milestones Merged</span>
        </div>
        <div>
          <span class="wai-metric-value wai-metric-gold">2</span>
          <span class="wai-metric-label">Milestones Active Now</span>
        </div>
        <div>
          <span class="wai-metric-value">~7</span>
          <span class="wai-metric-label">Days to V0 Prototype</span>
        </div>
        <div>
          <span class="wai-metric-value">10</span>
          <span class="wai-metric-label">Flutter Milestones Total</span>
        </div>
        <div>
          <span class="wai-metric-value wai-metric-green">5</span>
          <span class="wai-metric-label">Backend Sprints Done</span>
        </div>
      </div>
    </section>

    <!-- MASTER OVERVIEW TABLE -->
    <section class="wai-section">
      <div class="wai-inner">
        <p class="wai-section-label">Master Overview</p>
        <h2 class="wai-section-title">Everything Built. One View.</h2>
        <p class="wai-section-subtitle">Two parallel tracks: Backend infrastructure (already live and battle-tested) and the Flutter app (milestones shipping week by week). Both tracks converge at V0.</p>

        <div class="prog-master-grid">
          <!-- Backend Column -->
          <div class="prog-track">
            <div class="prog-track-header prog-track-header-infra">
              <span class="prog-track-icon">🏗</span>
              <div>
                <div class="prog-track-title">Backend &amp; Infrastructure</div>
                <div class="prog-track-sub">Vultr VPS · Dify · Hono Gateway · Firebase Bridge · Security</div>
              </div>
              <span class="prog-status-pill prog-pill-done">ALL DONE ✅</span>
            </div>

            <div class="prog-sprint-row prog-done">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag">SP0</span>
                <span class="prog-sprint-name">VPS + Dify Stack</span>
                <span class="prog-sprint-days">~2 days</span>
                <span class="prog-status-dot prog-dot-green">✓</span>
              </div>
              <ul class="prog-sprint-items">
                <li>Vultr VPS provisioned &amp; configured</li>
                <li>Dify Docker Stack (11 containers) deployed</li>
                <li>Twingate connector for zero-trust access</li>
                <li>Qdrant vector DB persistent</li>
                <li>Redis auth + Docker 502 bugs resolved</li>
              </ul>
            </div>

            <div class="prog-sprint-row prog-done">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag">SP3</span>
                <span class="prog-sprint-name">Dify AI Agents + Knowledge Bases</span>
                <span class="prog-sprint-days">~2 days</span>
                <span class="prog-status-dot prog-dot-green">✓</span>
              </div>
              <ul class="prog-sprint-items">
                <li>Warrior Chatflow: Coordinator + 4 Stack Agents</li>
                <li>Agents: Power Stack · Production · Bible · Fact Map</li>
                <li>6 Knowledge Bases built and wired to agents</li>
                <li>Power Stack Agent v1 live and field-tested</li>
              </ul>
            </div>

            <div class="prog-sprint-row prog-done">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag">SP2</span>
                <span class="prog-sprint-name">Firebase Bridge</span>
                <span class="prog-sprint-days">~2 days</span>
                <span class="prog-status-dot prog-dot-green">✓</span>
              </div>
              <ul class="prog-sprint-items">
                <li>13 REST endpoints spec'd with Zod schemas</li>
                <li>Firebase Admin SDK service account configured</li>
                <li>Bridge deployed as Docker service on Vultr</li>
                <li>HMAC-signed user_id envelope (ADR-W026)</li>
                <li>localhost-only — unreachable from internet by design</li>
              </ul>
            </div>

            <div class="prog-sprint-row prog-done">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag">SP5</span>
                <span class="prog-sprint-name">Hono Gateway</span>
                <span class="prog-sprint-days">~3 days</span>
                <span class="prog-status-dot prog-dot-green">✓</span>
              </div>
              <ul class="prog-sprint-items">
                <li>warrior-hono-gateway repo created, Bun/Hono scaffold</li>
                <li>Firebase JWT validation (checkRevoked: true)</li>
                <li>CORS locked to <code>ALLOWED_ORIGIN</code> env var</li>
                <li>Rate limiting: 30 req/min per user</li>
                <li>Zod input validation + full test suite</li>
                <li>nginx reverse proxy deployed + configured</li>
              </ul>
            </div>

            <div class="prog-sprint-row prog-done">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag">SEC</span>
                <span class="prog-sprint-name">Security Hardening</span>
                <span class="prog-sprint-days">~2 days</span>
                <span class="prog-status-dot prog-dot-green">✓</span>
              </div>
              <ul class="prog-sprint-items">
                <li>Docker 3-tier network segmentation (public/internal/data)</li>
                <li>Qdrant API key authentication enabled</li>
                <li>.env permissions hardened to 600, git history scanned</li>
                <li>Firestore security rules audited (request.auth.uid scoping)</li>
                <li>Injection blocklist at Gateway before Dify handoff</li>
                <li>Agent system prompts hardened (all 7 agents)</li>
              </ul>
            </div>

            <div class="prog-total-bar">
              <span>Backend Total</span>
              <span class="prog-total-days">~11 days of work</span>
              <span class="prog-total-note">(delivered in ~5 real days, parallel sessions)</span>
            </div>
          </div>

          <!-- Flutter Column -->
          <div class="prog-track">
            <div class="prog-track-header prog-track-header-flutter">
              <span class="prog-track-icon">📱</span>
              <div>
                <div class="prog-track-title">Flutter App (SP1)</div>
                <div class="prog-track-sub">OMI fork · Warrior UI · 10 Feature Milestones · V0 Target</div>
              </div>
              <span class="prog-status-pill prog-pill-active">IN BUILD 🔄</span>
            </div>

            <!-- DONE -->
            <div class="prog-sprint-row prog-done">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag prog-tag-m1">M1</span>
                <span class="prog-sprint-name">Design System Foundation</span>
                <span class="prog-sprint-days">~2-3 days</span>
                <span class="prog-status-dot prog-dot-green">✓</span>
              </div>
              <ul class="prog-sprint-items">
                <li>17 Warrior color constants (Deep Navy, Primary Gold, Core 4)</li>
                <li>Typography scale, spacing tokens, dark-mode-only theme</li>
                <li>WarriorTheme.dark() applied to app root</li>
                <li>JIRA: <a href="https://wakeupwarrior.atlassian.net/browse/WARAI-87" target="_blank" class="prog-jira-link">WARAI-87</a></li>
              </ul>
            </div>

            <div class="prog-sprint-row prog-done">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag prog-tag-m1">M10</span>
                <span class="prog-sprint-name">API Integration Layer</span>
                <span class="prog-sprint-days">~2-3 days</span>
                <span class="prog-status-dot prog-dot-green">✓</span>
              </div>
              <ul class="prog-sprint-items">
                <li>WarriorApiClient abstract interface (all endpoints)</li>
                <li>HonoGatewayClient :3000 + FirebaseBridgeClient :4000</li>
                <li>ProofUploadClient (Cloudflare R2 multipart)</li>
                <li>Per-endpoint mock toggle for dev-without-backend</li>
                <li>JIRA: <a href="https://wakeupwarrior.atlassian.net/browse/WARAI-96" target="_blank" class="prog-jira-link">WARAI-96</a></li>
              </ul>
            </div>

            <div class="prog-sprint-row prog-done">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag prog-tag-m1">M2</span>
                <span class="prog-sprint-name">Navigation Shell &amp; App Chrome</span>
                <span class="prog-sprint-days">~2 days</span>
                <span class="prog-status-dot prog-dot-green">✓</span>
              </div>
              <ul class="prog-sprint-items">
                <li>4-tab shell: Home · Community · The Game · Profile</li>
                <li>OMI 5-tab replaced — Warrior routes active</li>
                <li>Tab colors: Active Gold #C8A84E / Inactive Gray</li>
                <li>JIRA: <a href="https://wakeupwarrior.atlassian.net/browse/WARAI-88" target="_blank" class="prog-jira-link">WARAI-88</a></li>
              </ul>
            </div>

            <!-- ACTIVE -->
            <div class="prog-sprint-row prog-active">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag prog-tag-active">M3</span>
                <span class="prog-sprint-name">Onboarding Flow</span>
                <span class="prog-sprint-days">~3-4 days</span>
                <span class="prog-status-dot prog-dot-gold">⚡</span>
              </div>
              <ul class="prog-sprint-items">
                <li>Step 1: Welcome &amp; Pledge screen (Firebase write on accept)</li>
                <li>Step 2: Speech Profile (OMI component, reused not rewritten)</li>
                <li>Step 3: Hardware Pairing (OMI DevKit 2 only)</li>
                <li>Step 4: Fact Map Assessment (Core 4 calibration)</li>
                <li>JIRA: <a href="https://wakeupwarrior.atlassian.net/browse/WARAI-89" target="_blank" class="prog-jira-link">WARAI-89</a></li>
              </ul>
            </div>

            <div class="prog-sprint-row prog-active">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag prog-tag-active">M4</span>
                <span class="prog-sprint-name">Daily Command Center</span>
                <span class="prog-sprint-days">~3-4 days</span>
                <span class="prog-status-dot prog-dot-gold">⚡</span>
              </div>
              <ul class="prog-sprint-items">
                <li>STACK NOW button — pulsing Gold CTA, launches coaching session</li>
                <li>Completion Ratio widget — "X/4 Completed" live update</li>
                <li>4 Hit Cards (Body · Mind · Soul · Business)</li>
                <li>Domino Door card + Due List widget</li>
                <li>JIRA: <a href="https://wakeupwarrior.atlassian.net/browse/WARAI-90" target="_blank" class="prog-jira-link">WARAI-90</a></li>
              </ul>
            </div>

            <!-- NEXT — V0 critical path -->
            <div class="prog-sprint-row prog-next">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag prog-tag-next">M5</span>
                <span class="prog-sprint-name">Active Stack Session (Voice Coaching)</span>
                <span class="prog-sprint-days">~4-5 days</span>
                <span class="prog-status-dot prog-dot-gray">→</span>
              </div>
              <ul class="prog-sprint-items">
                <li>OMI waveform + live transcript (reused, not rewritten)</li>
                <li>SSE streaming from Hono Gateway → Dify agents</li>
                <li>10 Emotional States · 4 Stack Types</li>
                <li>Audio capture 95%+ success rate target</li>
                <li>JIRA: <a href="https://wakeupwarrior.atlassian.net/browse/WARAI-91" target="_blank" class="prog-jira-link">WARAI-91</a></li>
              </ul>
            </div>

            <div class="prog-sprint-row prog-next">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag prog-tag-next">M6</span>
                <span class="prog-sprint-name">Door &amp; Proof System</span>
                <span class="prog-sprint-days">~3-4 days</span>
                <span class="prog-status-dot prog-dot-gray">→</span>
              </div>
              <ul class="prog-sprint-items">
                <li>Door creation — 5 required fields, no skip button</li>
                <li>Proof types: Photo · Screenshot · Voice Memo · Self-Attest</li>
                <li>Proof upload to Cloudflare R2</li>
                <li>Green = proof captured · Red = no proof (binary truth)</li>
                <li>JIRA: <a href="https://wakeupwarrior.atlassian.net/browse/WARAI-92" target="_blank" class="prog-jira-link">WARAI-92</a> <strong class="prog-v0-flag">← V0 COMPLETE HERE</strong></li>
              </ul>
            </div>

            <div class="prog-v0-gate">
              <div class="prog-v0-gate-inner">
                <span class="prog-v0-icon">🏁</span>
                <div>
                  <div class="prog-v0-title">V0 Alpha Prototype Gate</div>
                  <div class="prog-v0-sub">5 users · cold start &lt;3s · 80% session rate · 95% audio capture</div>
                </div>
                <a href="https://wakeupwarrior.atlassian.net/browse/WARAI-98" target="_blank" class="prog-jira-btn">WARAI-98</a>
              </div>
            </div>

            <!-- POST V0 -->
            <div class="prog-v1-label">POST-V0 — V1 Features</div>

            <div class="prog-sprint-row prog-v1">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag prog-tag-v1">M7</span>
                <span class="prog-sprint-name">Morning Planning / Hot List</span>
                <span class="prog-sprint-days">~2-3 days</span>
              </div>
              <p class="prog-sprint-summary">Select exactly 4 Hits per day. The number 4 is sacred in Warrior methodology. Max 4 — no bypass.</p>
            </div>

            <div class="prog-sprint-row prog-v1">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag prog-tag-v1">M8</span>
                <span class="prog-sprint-name">The Game &amp; Fact Map Timeline</span>
                <span class="prog-sprint-days">~2-3 days</span>
              </div>
              <p class="prog-sprint-summary">Chronological session history. OMI "Memories" tab restyled as Warrior Fact Map + Impossible Game stub.</p>
            </div>

            <div class="prog-sprint-row prog-v1">
              <div class="prog-sprint-head">
                <span class="prog-sprint-tag prog-tag-v1">M9</span>
                <span class="prog-sprint-name">Brotherhood Community Feed</span>
                <span class="prog-sprint-days">~2-3 days</span>
              </div>
              <p class="prog-sprint-summary">Proof-verified wins only. No aspirational content. Fist bump + fire reactions. Brotherhood accountability feed.</p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- WHAT THESE MEAN — GLOSSARY -->
    <section class="wai-section wai-section-alt">
      <div class="wai-inner">
        <p class="wai-section-label">Glossary</p>
        <h2 class="wai-section-title">What Do SP and M Mean?</h2>
        <p class="wai-section-subtitle">Every project label decoded — so the whole team speaks the same language.</p>

        <div class="prog-glossary-grid">
          <div class="prog-glossary-card">
            <div class="prog-glossary-tag">SP#</div>
            <div class="prog-glossary-title">Sprint Package</div>
            <p class="prog-glossary-desc">A backend or infrastructure sprint. SP0 = first day of work. SP2 = Firebase Bridge. SP3 = AI Agents. SP5 = Hono Gateway. SEC = Security hardening. All SPs are <strong>already complete</strong> — the backend is live.</p>
          </div>
          <div class="prog-glossary-card">
            <div class="prog-glossary-tag">M#</div>
            <div class="prog-glossary-title">Milestone</div>
            <p class="prog-glossary-desc">A Flutter app feature milestone. M1 = visual identity. M2 = navigation. M3 = onboarding. M4 = home screen. M5 = voice coaching. M6 = door/proof system. Each M produces merged, tested code.</p>
          </div>
          <div class="prog-glossary-card">
            <div class="prog-glossary-tag">V0</div>
            <div class="prog-glossary-title">Version Zero (Alpha Prototype)</div>
            <p class="prog-glossary-desc">The minimum working prototype: a real Warrior can onboard, run a Stack session with AI voice coaching, create a Door, and capture Proof. Everything after V0 (M7–M9) is enhancement, not core loop.</p>
          </div>
          <div class="prog-glossary-card">
            <div class="prog-glossary-tag">OMI</div>
            <div class="prog-glossary-title">OMI — the Foundation</div>
            <p class="prog-glossary-desc">The Warrior app is built on a fork of the OMI open-source AI wearable app. OMI handles Bluetooth hardware, audio capture, and speech-to-text. Warrior adds the coaching layer, UI, and methodology on top.</p>
          </div>
          <div class="prog-glossary-card">
            <div class="prog-glossary-tag">Gateway</div>
            <div class="prog-glossary-title">Hono Gateway :3000</div>
            <p class="prog-glossary-desc">The secure front door to the AI coaching engine. The Flutter app talks to the Gateway. The Gateway validates every user's Firebase token, applies rate limits, then routes the request to the Dify AI agents.</p>
          </div>
          <div class="prog-glossary-card">
            <div class="prog-glossary-tag">Bridge</div>
            <div class="prog-glossary-title">Firebase Bridge :4000</div>
            <p class="prog-glossary-desc">A private internal service (never exposed to the internet) that reads a Warrior's personal data from Firebase — Stacks, Core 4 scores, Doors — and feeds it to the AI agents as context for personalized coaching.</p>
          </div>
          <div class="prog-glossary-card">
            <div class="prog-glossary-tag">Dify</div>
            <div class="prog-glossary-title">Dify — AI Agent Engine</div>
            <p class="prog-glossary-desc">The brain. An open-source AI orchestration platform running 11 containers on the Vultr server. Contains the Warrior Chatflow: a Coordinator agent that routes each user message to 1 of 4 specialist coaching agents.</p>
          </div>
          <div class="prog-glossary-card">
            <div class="prog-glossary-tag">Core 4</div>
            <div class="prog-glossary-title">Core 4 Domains</div>
            <p class="prog-glossary-desc">The four areas every Warrior tracks: <span class="prog-core4-body">Body</span> · <span class="prog-core4-being">Being</span> · <span class="prog-core4-balance">Balance</span> · <span class="prog-core4-business">Business</span>. Every Stack session, Hit card, and coaching agent maps to one of these domains.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ARCHITECTURE REMINDER -->
    <section class="wai-section">
      <div class="wai-inner">
        <p class="wai-section-label">How It All Fits Together</p>
        <h2 class="wai-section-title">The Full Stack. In One View.</h2>

        <div class="prog-arch-flow">
          <div class="prog-arch-box prog-arch-flutter">
            <div class="prog-arch-box-label">Flutter App</div>
            <div class="prog-arch-box-sub">iOS &amp; Android · M1–M10</div>
            <div class="prog-arch-box-status prog-status-building">Building</div>
          </div>
          <div class="prog-arch-arrow">↓<br><span>Firebase Auth Token</span></div>
          <div class="prog-arch-box prog-arch-gateway">
            <div class="prog-arch-box-label">Hono Gateway :3000</div>
            <div class="prog-arch-box-sub">Rate limit · CORS · JWT verify · SSE proxy</div>
            <div class="prog-arch-box-status prog-status-live">Live on Vultr</div>
          </div>
          <div class="prog-arch-arrow">↓<br><span>Validated user_id (HMAC signed)</span></div>
          <div class="prog-arch-box prog-arch-dify">
            <div class="prog-arch-box-label">Dify AI Engine</div>
            <div class="prog-arch-box-sub">Coordinator + 4 Specialist Agents · 6 Knowledge Bases</div>
            <div class="prog-arch-box-status prog-status-live">Live on Vultr</div>
          </div>
          <div class="prog-arch-arrow-split">
            <div class="prog-arch-arrow-left">← reads context →</div>
          </div>
          <div class="prog-arch-row">
            <div class="prog-arch-box prog-arch-bridge">
              <div class="prog-arch-box-label">Firebase Bridge :4000</div>
              <div class="prog-arch-box-sub">13 endpoints · User context · Session history</div>
              <div class="prog-arch-box-status prog-status-live">Live · localhost only</div>
            </div>
            <div class="prog-arch-box prog-arch-firebase">
              <div class="prog-arch-box-label">Firebase Firestore</div>
              <div class="prog-arch-box-sub">Stacks · Doors · Core 4 scores · Profile</div>
              <div class="prog-arch-box-status prog-status-live">Staging Active</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LINKS -->
    <section class="wai-section wai-section-alt">
      <div class="wai-inner">
        <p class="wai-section-label">Resources</p>
        <h2 class="wai-section-title">Go Deeper.</h2>
        <div class="prog-links-grid">
          <a href="/architecture" class="prog-link-card">
            <span class="prog-link-icon">🏛</span>
            <div class="prog-link-title">Architecture</div>
            <div class="prog-link-desc">Full 5-layer system design, data flow, and ADR decisions</div>
          </a>
          <a href="/security" class="prog-link-card">
            <span class="prog-link-icon">🔒</span>
            <div class="prog-link-title">Security</div>
            <div class="prog-link-desc">42-item audit, all 8 HIGH findings resolved, network diagram</div>
          </a>
          <a href="/qa" class="prog-link-card">
            <span class="prog-link-icon">🧪</span>
            <div class="prog-link-title">QA Strategy</div>
            <div class="prog-link-desc">Test pyramid, load test thresholds, Anna's sign-off criteria</div>
          </a>
          <a href="/jira" class="prog-link-card">
            <span class="prog-link-icon">🎫</span>
            <div class="prog-link-title">Jira Tickets</div>
            <div class="prog-link-desc">Every ticket, every milestone, direct links to the board</div>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// No reactive data needed — static progress snapshot
</script>

<style scoped>
/* ── Track Grid ── */
.prog-master-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2.5rem;
}

@media (max-width: 960px) {
  .prog-master-grid { grid-template-columns: 1fr; }
}

.prog-track {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.prog-track-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: 10px;
  margin-bottom: 0.25rem;
}

.prog-track-header-infra {
  background: linear-gradient(135deg, #0A1628 0%, #1B2A4A 100%);
  border: 1px solid #059669;
}

.prog-track-header-flutter {
  background: linear-gradient(135deg, #0A1628 0%, #1B2A4A 100%);
  border: 1px solid #C8A84E;
}

.prog-track-icon { font-size: 2rem; }

.prog-track-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #F5F0E8;
}

.prog-track-sub {
  font-size: 0.78rem;
  color: #6B7280;
  margin-top: 0.2rem;
}

.prog-status-pill {
  margin-left: auto;
  flex-shrink: 0;
  padding: 0.3rem 0.85rem;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.prog-pill-done { background: #059669; color: #fff; }
.prog-pill-active { background: #C8A84E; color: #0A1628; }

/* ── Sprint Rows ── */
.prog-sprint-row {
  border-radius: 8px;
  padding: 1rem 1.25rem;
  border-left: 3px solid transparent;
}

.prog-done {
  background: rgba(27, 42, 74, 0.5);
  border-left-color: #059669;
}

.prog-active {
  background: rgba(200, 168, 78, 0.08);
  border-left-color: #C8A84E;
}

.prog-next {
  background: rgba(27, 42, 74, 0.3);
  border-left-color: #374151;
}

.prog-v1 {
  background: rgba(27, 42, 74, 0.2);
  border-left-color: #374151;
  opacity: 0.7;
}

.prog-sprint-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}

.prog-sprint-tag {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.15rem 0.55rem;
  border-radius: 4px;
  background: #1B2A4A;
  color: #9CA3AF;
  border: 1px solid #374151;
}

.prog-tag-m1 {
  background: rgba(5, 150, 105, 0.15);
  color: #059669;
  border-color: #059669;
}

.prog-tag-active {
  background: rgba(200, 168, 78, 0.15);
  color: #C8A84E;
  border-color: #C8A84E;
}

.prog-tag-next {
  background: rgba(59, 130, 246, 0.1);
  color: #3B82F6;
  border-color: #3B82F6;
}

.prog-tag-v1 {
  background: rgba(55, 65, 81, 0.5);
  color: #6B7280;
  border-color: #374151;
}

.prog-sprint-name {
  font-size: 0.92rem;
  font-weight: 600;
  color: #F5F0E8;
}

.prog-sprint-days {
  font-size: 0.75rem;
  color: #6B7280;
  margin-left: auto;
}

.prog-status-dot {
  font-size: 0.85rem;
}

.prog-dot-green { color: #059669; }
.prog-dot-gold  { color: #C8A84E; }
.prog-dot-gray  { color: #374151; }

.prog-sprint-items {
  margin: 0;
  padding-left: 1.2rem;
  list-style: disc;
}

.prog-sprint-items li {
  font-size: 0.82rem;
  color: #9CA3AF;
  margin-bottom: 0.2rem;
  line-height: 1.5;
}

.prog-sprint-summary {
  font-size: 0.82rem;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
}

.prog-jira-link {
  color: #C8A84E;
  font-size: 0.75rem;
  text-decoration: none;
  font-weight: 600;
}
.prog-jira-link:hover { text-decoration: underline; }

.prog-v0-flag {
  color: #C8A84E;
  font-size: 0.75rem;
  margin-left: 0.4rem;
}

/* ── V0 Gate ── */
.prog-v0-gate {
  border: 1px solid #C8A84E;
  border-radius: 10px;
  background: rgba(200, 168, 78, 0.06);
  padding: 1rem 1.25rem;
  margin-top: 0.25rem;
}

.prog-v0-gate-inner {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.prog-v0-icon { font-size: 1.8rem; }

.prog-v0-title {
  font-size: 1rem;
  font-weight: 700;
  color: #C8A84E;
}

.prog-v0-sub {
  font-size: 0.78rem;
  color: #9CA3AF;
  margin-top: 0.1rem;
}

.prog-jira-btn {
  margin-left: auto;
  background: #C8A84E;
  color: #0A1628;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.85rem;
  border-radius: 6px;
  text-decoration: none;
  letter-spacing: 0.06em;
}
.prog-jira-btn:hover { background: #D4B96A; }

/* ── V1 label ── */
.prog-v1-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #374151;
  padding: 0.5rem 0 0.25rem;
  border-top: 1px solid #1B2A4A;
  margin-top: 0.5rem;
}

/* ── Total bar ── */
.prog-total-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: rgba(5, 150, 105, 0.08);
  border: 1px solid rgba(5, 150, 105, 0.3);
  border-radius: 8px;
  font-size: 0.82rem;
}

.prog-total-days {
  font-weight: 700;
  color: #059669;
}

.prog-total-note {
  color: #6B7280;
  font-size: 0.75rem;
}

/* ── Glossary ── */
.prog-glossary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
}

.prog-glossary-card {
  background: var(--wai-navy-primary);
  border: 1px solid var(--wai-navy-light);
  border-radius: 10px;
  padding: 1.25rem;
}

.prog-glossary-tag {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #C8A84E;
  border: 1px solid #C8A84E;
  padding: 0.15rem 0.55rem;
  border-radius: 4px;
  margin-bottom: 0.6rem;
}

.prog-glossary-title {
  font-size: 1rem;
  font-weight: 700;
  color: #F5F0E8;
  margin-bottom: 0.5rem;
}

.prog-glossary-desc {
  font-size: 0.83rem;
  color: #9CA3AF;
  line-height: 1.6;
  margin: 0;
}

.prog-core4-body     { color: #3B82F6; font-weight: 600; }
.prog-core4-being    { color: #8B5CF6; font-weight: 600; }
.prog-core4-balance  { color: #10B981; font-weight: 600; }
.prog-core4-business { color: #F59E0B; font-weight: 600; }

/* ── Architecture Flow ── */
.prog-arch-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-top: 2rem;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}

.prog-arch-box {
  width: 100%;
  border-radius: 10px;
  padding: 1.1rem 1.5rem;
  border: 1px solid #1B2A4A;
}

.prog-arch-flutter  { border-color: #C8A84E; background: rgba(200,168,78,0.06); }
.prog-arch-gateway  { border-color: #059669; background: rgba(5,150,105,0.06); }
.prog-arch-dify     { border-color: #3B82F6; background: rgba(59,130,246,0.06); }
.prog-arch-bridge   { border-color: #8B5CF6; background: rgba(139,92,246,0.06); }
.prog-arch-firebase { border-color: #F59E0B; background: rgba(245,158,11,0.06); }

.prog-arch-box-label {
  font-size: 1rem;
  font-weight: 700;
  color: #F5F0E8;
}

.prog-arch-box-sub {
  font-size: 0.78rem;
  color: #6B7280;
  margin-top: 0.2rem;
}

.prog-arch-box-status {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.15rem 0.6rem;
  border-radius: 4px;
}

.prog-status-live     { background: rgba(5,150,105,0.2); color: #059669; }
.prog-status-building { background: rgba(200,168,78,0.2); color: #C8A84E; }

.prog-arch-arrow {
  text-align: center;
  padding: 0.5rem 0;
  color: #374151;
  font-size: 0.8rem;
  line-height: 1.4;
}

.prog-arch-arrow span {
  font-size: 0.7rem;
  color: #6B7280;
}

.prog-arch-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
}

.prog-arch-arrow-split {
  text-align: center;
  padding: 0.5rem 0;
  width: 100%;
  color: #374151;
  font-size: 0.75rem;
}

/* ── Links Grid ── */
.prog-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
}

.prog-link-card {
  display: block;
  background: var(--wai-navy-primary);
  border: 1px solid var(--wai-navy-light);
  border-radius: 10px;
  padding: 1.5rem 1.25rem;
  text-decoration: none;
  transition: border-color 0.2s, transform 0.2s;
}

.prog-link-card:hover {
  border-color: #C8A84E;
  transform: translateY(-2px);
}

.prog-link-icon {
  font-size: 1.8rem;
  display: block;
  margin-bottom: 0.6rem;
}

.prog-link-title {
  font-size: 1rem;
  font-weight: 700;
  color: #F5F0E8;
  margin-bottom: 0.4rem;
}

.prog-link-desc {
  font-size: 0.8rem;
  color: #6B7280;
  line-height: 1.5;
}

code {
  background: rgba(27, 42, 74, 0.8);
  padding: 0.1em 0.4em;
  border-radius: 3px;
  font-size: 0.85em;
  color: #C8A84E;
}
</style>
