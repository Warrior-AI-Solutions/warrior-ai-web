<template>
  <div class="wai-page">

    <!-- SPRINT OUTPUT LABEL -->
    <div class="sprint-output-label">
      <span class="sprint-output-icon">⚡</span>
      <span class="sprint-output-text">Sprint Output: <strong>Engineering Session</strong> — Active Ticket Backlog &amp; Sprint Plan</span>
    </div>

    <!-- HERO -->
    <section class="wai-hero">
      <p class="wai-hero-eyebrow">Warrior AI Solutions — Jira Tracker</p>
      <h1 class="wai-hero-headline">
        Every Ticket.<br>
        <span>Every Status. One View.</span>
      </h1>
      <p class="wai-hero-sub">
        Complete Jira ticket reference for the WARAI project. All backend sprints, Flutter milestones, security tasks, and cross-cutting issues — with direct links to the Atlassian board.
      </p>
      <div class="wai-hero-badges">
        <span class="wai-badge wai-badge-green">✓ Backend: 5 Sprints Done</span>
        <span class="wai-badge wai-badge-green">✓ Flutter: M1 · M2 · M3 · M4 · M5 · M10 Done</span>
        <span class="wai-badge wai-badge-gold">⚡ M6 Active — Door &amp; Proof System</span>
        <span class="wai-badge wai-badge-blue">Board: wakeupwarrior.atlassian.net</span>
      </div>
    </section>

    <!-- QUICK LEGEND -->
    <section class="jira-legend-strip">
      <div class="jira-legend-inner">
        <div class="jira-legend-item">
          <span class="jira-status-pill jira-pill-done">Fertig</span>
          <span>Done / Merged</span>
        </div>
        <div class="jira-legend-item">
          <span class="jira-status-pill jira-pill-active">Ready for AI</span>
          <span>Active — coding now</span>
        </div>
        <div class="jira-legend-item">
          <span class="jira-status-pill jira-pill-next">In Progress</span>
          <span>Next up</span>
        </div>
        <div class="jira-legend-item">
          <span class="jira-status-pill jira-pill-backlog">Backlog</span>
          <span>Planned, not started</span>
        </div>
      </div>
    </section>

    <!-- ── FLUTTER MILESTONES ── -->
    <section class="wai-section">
      <div class="wai-inner">
        <p class="wai-section-label">SP1 — Flutter App</p>
        <h2 class="wai-section-title">Flutter Milestones (M1–M10)</h2>
        <p class="wai-section-subtitle">Ten feature milestones from design system to brotherhood feed. M1–M2–M3–M4–M5–M10 done. M6 Door &amp; Proof System active. V0 gate in sight.</p>

        <div class="jira-table-wrap">
          <table class="jira-table">
            <thead>
              <tr>
                <th>Ticket</th>
                <th>Milestone</th>
                <th>Description</th>
                <th>Est.</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="jira-row-done">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-87" target="_blank" class="jira-ticket-link">WARAI-87</a></td>
                <td><span class="jira-milestone jira-m-done">M1</span> Design System</td>
                <td>17 color constants, typography scale, spacing tokens, WarriorTheme.dark()</td>
                <td>~2–3 days</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
              <tr class="jira-row-done">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-88" target="_blank" class="jira-ticket-link">WARAI-88</a></td>
                <td><span class="jira-milestone jira-m-done">M2</span> Navigation Shell</td>
                <td>4-tab Warrior shell (Home · Community · The Game · Profile), OMI 5-tab replaced</td>
                <td>~2 days</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
              <tr class="jira-row-done">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-89" target="_blank" class="jira-ticket-link">WARAI-89</a></td>
                <td><span class="jira-milestone jira-m-done">M3</span> Onboarding Flow</td>
                <td>Welcome/Pledge → Speech Profile → Hardware Pairing → Fact Map Assessment (4 steps)</td>
                <td>~3–4 days</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
              <tr class="jira-row-done">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-90" target="_blank" class="jira-ticket-link">WARAI-90</a></td>
                <td><span class="jira-milestone jira-m-done">M4</span> Daily Command Center</td>
                <td>STACK NOW button, Completion Ratio, 4 Hit Cards, Domino Door card + Due List widget</td>
                <td>~3–4 days</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
              <tr class="jira-row-done">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-91" target="_blank" class="jira-ticket-link">WARAI-91</a></td>
                <td><span class="jira-milestone jira-m-done">M5</span> Voice Coaching Session</td>
                <td>OMI waveform + live transcript, SSE streaming to Dify agents, 10 emotional states, 95%+ audio capture</td>
                <td>~4–5 days</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
              <tr class="jira-row-active">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-92" target="_blank" class="jira-ticket-link">WARAI-92</a></td>
                <td><span class="jira-milestone jira-m-active">M6</span> Door &amp; Proof System</td>
                <td>Door creation (5 required fields), 4 proof types, Firebase Storage upload, binary green/red truth state <strong class="jira-v0-flag">← V0 HERE</strong></td>
                <td>~3–4 days</td>
                <td><span class="jira-status-pill jira-pill-active">In Build</span></td>
              </tr>
              <tr class="jira-row-v1">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-93" target="_blank" class="jira-ticket-link">WARAI-93</a></td>
                <td><span class="jira-milestone jira-m-v1">M7</span> Morning Planning</td>
                <td>Select exactly 4 Hits/day (number 4 is sacred), Hot List, no bypass</td>
                <td>~2–3 days</td>
                <td><span class="jira-status-pill jira-pill-backlog">Backlog</span></td>
              </tr>
              <tr class="jira-row-v1">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-94" target="_blank" class="jira-ticket-link">WARAI-94</a></td>
                <td><span class="jira-milestone jira-m-v1">M8</span> The Game &amp; Fact Map</td>
                <td>Session history timeline, OMI Memories tab restyled as Warrior Fact Map + Impossible Game stub</td>
                <td>~2–3 days</td>
                <td><span class="jira-status-pill jira-pill-backlog">Backlog</span></td>
              </tr>
              <tr class="jira-row-v1">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-95" target="_blank" class="jira-ticket-link">WARAI-95</a></td>
                <td><span class="jira-milestone jira-m-v1">M9</span> Brotherhood Feed</td>
                <td>Proof-verified wins only, no aspirational content, fist bump + fire reactions, accountability feed</td>
                <td>~2–3 days</td>
                <td><span class="jira-status-pill jira-pill-backlog">Backlog</span></td>
              </tr>
              <tr class="jira-row-done">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-96" target="_blank" class="jira-ticket-link">WARAI-96</a></td>
                <td><span class="jira-milestone jira-m-done">M10</span> API Integration Layer</td>
                <td>WarriorApiClient interface, HonoGatewayClient :3000 + FirebaseBridgeClient :4000, ProofUploadClient, mock toggles</td>
                <td>~2–3 days</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ── V0 ALPHA GATE ── -->
    <section class="wai-section wai-section-alt">
      <div class="wai-inner">
        <p class="wai-section-label">Alpha Gate</p>
        <h2 class="wai-section-title">V0 Prototype Criteria</h2>
        <p class="wai-section-subtitle">The gate that defines when V0 ships. All four metrics must pass before alpha release.</p>

        <div class="jira-v0-card">
          <div class="jira-v0-header">
            <span class="jira-v0-icon">🏁</span>
            <div>
              <div class="jira-v0-ticket-title">WARAI-98 — V0 Alpha Gate</div>
              <a href="https://wakeupwarrior.atlassian.net/browse/WARAI-98" target="_blank" class="jira-v0-link">wakeupwarrior.atlassian.net/browse/WARAI-98 ↗</a>
            </div>
            <span class="jira-status-pill jira-pill-active">Ready for AI</span>
          </div>
          <div class="jira-v0-metrics">
            <div class="jira-v0-metric">
              <div class="jira-v0-metric-val">5</div>
              <div class="jira-v0-metric-label">Minimum alpha users</div>
            </div>
            <div class="jira-v0-metric">
              <div class="jira-v0-metric-val">&lt;3s</div>
              <div class="jira-v0-metric-label">Cold start time</div>
            </div>
            <div class="jira-v0-metric">
              <div class="jira-v0-metric-val">80%</div>
              <div class="jira-v0-metric-label">Session completion rate</div>
            </div>
            <div class="jira-v0-metric">
              <div class="jira-v0-metric-val">95%</div>
              <div class="jira-v0-metric-label">Audio capture success</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── BACKEND SPRINTS ── -->
    <section class="wai-section">
      <div class="wai-inner">
        <p class="wai-section-label">Backend Infrastructure</p>
        <h2 class="wai-section-title">Backend Sprint Tickets (SP0–SEC)</h2>
        <p class="wai-section-subtitle">All five backend sprint packages — 100% complete. The infrastructure is live and battle-tested on Vultr.</p>

        <div class="jira-table-wrap">
          <table class="jira-table">
            <thead>
              <tr>
                <th>Sprint</th>
                <th>Focus</th>
                <th>Key Deliverables</th>
                <th>Est.</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="jira-row-done">
                <td><span class="jira-sprint-tag jira-sp-done">SP0</span></td>
                <td>VPS + Dify Stack</td>
                <td>Vultr VPS, Dify Docker Stack (11 containers), Twingate, Qdrant vector DB, Redis auth</td>
                <td>~2 days</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
              <tr class="jira-row-done">
                <td><span class="jira-sprint-tag jira-sp-done">SP2</span></td>
                <td>Firebase Bridge</td>
                <td>13 REST endpoints (Zod schemas), Firebase Admin SDK, HMAC-signed user_id envelope (ADR-W026), localhost-only deploy</td>
                <td>~2 days</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
              <tr class="jira-row-done">
                <td><span class="jira-sprint-tag jira-sp-done">SP3</span></td>
                <td>Dify AI Agents</td>
                <td>Warrior Chatflow: Coordinator + 4 Stack Agents (Power · Production · Bible · Fact Map), 6 Knowledge Bases</td>
                <td>~2 days</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
              <tr class="jira-row-done">
                <td><span class="jira-sprint-tag jira-sp-done">SP5</span></td>
                <td>Hono Gateway</td>
                <td>warrior-hono-gateway (Bun/Hono), Firebase JWT validation, CORS, rate limiting (30 req/min), Zod validation, nginx proxy</td>
                <td>~3 days</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
              <tr class="jira-row-done">
                <td><span class="jira-sprint-tag jira-sp-done">SEC</span></td>
                <td>Security Hardening</td>
                <td>3-tier Docker network, Qdrant API key auth, .env hardened (chmod 600), Firestore rules, injection blocklist, all 7 agent prompts hardened</td>
                <td>~2 days</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ── SECURITY & CROSS-CUTTING ── -->
    <section class="wai-section wai-section-alt">
      <div class="wai-inner">
        <p class="wai-section-label">Security &amp; Cross-Cutting</p>
        <h2 class="wai-section-title">Security Audit + Cross-Cutting Tickets</h2>
        <p class="wai-section-subtitle">Security hardening tickets and cross-cutting concerns that span both backend and Flutter tracks.</p>

        <div class="jira-table-wrap">
          <table class="jira-table">
            <thead>
              <tr>
                <th>Ticket</th>
                <th>Category</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="jira-row-done">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-97" target="_blank" class="jira-ticket-link">WARAI-97</a></td>
                <td><span class="jira-cat-tag jira-cat-cross">Cross-Cutting</span></td>
                <td>Cross-cutting verification: package rename omi→warrior_ai validation, 2762 import checks, 461 files</td>
                <td><span class="jira-status-pill jira-pill-next">In Progress</span></td>
              </tr>
              <tr class="jira-row-done">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-100" target="_blank" class="jira-ticket-link">WARAI-100</a></td>
                <td><span class="jira-cat-tag jira-cat-sec">Security</span></td>
                <td>Docker 3-tier network segmentation (public / internal / data layers)</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
              <tr class="jira-row-done">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-101" target="_blank" class="jira-ticket-link">WARAI-101</a></td>
                <td><span class="jira-cat-tag jira-cat-sec">Security</span></td>
                <td>Qdrant API key authentication enabled (was open, now keyed)</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
              <tr class="jira-row-done">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-102" target="_blank" class="jira-ticket-link">WARAI-102</a></td>
                <td><span class="jira-cat-tag jira-cat-sec">Security</span></td>
                <td>.env permissions hardened to 600, git history scanned for secrets (TruffleHog)</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
              <tr class="jira-row-done">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-103" target="_blank" class="jira-ticket-link">WARAI-103</a></td>
                <td><span class="jira-cat-tag jira-cat-sec">Security</span></td>
                <td>Firestore security rules audited — all rules scoped to request.auth.uid</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
              <tr class="jira-row-done">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-105" target="_blank" class="jira-ticket-link">WARAI-105</a></td>
                <td><span class="jira-cat-tag jira-cat-cross">Cross-Cutting</span></td>
                <td>Package rename: omi → warrior_ai across 461 files, 2762 import statements updated</td>
                <td><span class="jira-status-pill jira-pill-done">Fertig</span></td>
              </tr>
              <tr class="jira-row-next">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-114" target="_blank" class="jira-ticket-link">WARAI-114</a></td>
                <td><span class="jira-cat-tag jira-cat-bug">Bug</span></td>
                <td>OMI inherited bugs: voice recorder context leak, Timer.periodic race condition, Stripe await race, sensitive print() log</td>
                <td><span class="jira-status-pill jira-pill-active">Ready for AI</span></td>
              </tr>
              <tr class="jira-row-next">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-119" target="_blank" class="jira-ticket-link">WARAI-119</a></td>
                <td><span class="jira-cat-tag jira-cat-cross">M6 Prereq</span></td>
                <td>Close SessionPhase state machine — endSession() must transition to completed (M6 door hook)</td>
                <td><span class="jira-status-pill jira-pill-active">Ready for AI</span></td>
              </tr>
              <tr class="jira-row-next">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-120" target="_blank" class="jira-ticket-link">WARAI-120</a></td>
                <td><span class="jira-cat-tag jira-cat-bug">Production Blocker</span></td>
                <td>Wire real Firebase UID into startSession() — replace 'demo-user' placeholder (security + data integrity)</td>
                <td><span class="jira-status-pill jira-pill-active">Ready for AI</span></td>
              </tr>
              <tr class="jira-row-next">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-121" target="_blank" class="jira-ticket-link">WARAI-121</a></td>
                <td><span class="jira-cat-tag jira-cat-cross">M6 Prereq</span></td>
                <td>Configure Firebase Storage bucket for proof photo uploads with 30-day auto-delete lifecycle rule</td>
                <td><span class="jira-status-pill jira-pill-active">Ready for AI</span></td>
              </tr>
              <tr class="jira-row-next">
                <td><a href="https://wakeupwarrior.atlassian.net/browse/WARAI-122" target="_blank" class="jira-ticket-link">WARAI-122</a></td>
                <td><span class="jira-cat-tag jira-cat-bug">Bug</span></td>
                <td>Language dialog appears before sign-in on token expiry — race condition in getUserPrimaryLanguage()</td>
                <td><span class="jira-status-pill jira-pill-active">Ready for AI</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ── BOARD LINK ── -->
    <section class="wai-section">
      <div class="wai-inner">
        <p class="wai-section-label">Atlassian</p>
        <h2 class="wai-section-title">View the Live Board.</h2>
        <p class="wai-section-subtitle">All tickets, comments, sub-tasks, and real-time status updates live on the Jira board.</p>

        <div class="jira-board-cta">
          <a href="https://wakeupwarrior.atlassian.net/jira/software/projects/WARAI/boards" target="_blank" class="jira-board-btn">
            Open WARAI Board ↗
          </a>
          <a href="https://wakeupwarrior.atlassian.net/jira/software/projects/WARAI/list" target="_blank" class="jira-board-btn jira-board-btn-outline">
            Open Backlog List ↗
          </a>
        </div>

        <div class="jira-links-grid">
          <a href="/progress" class="jira-link-card">
            <span class="jira-link-icon">📊</span>
            <div class="jira-link-title">Build Progress</div>
            <div class="jira-link-desc">Visual timeline of all sprints and milestones with status badges</div>
          </a>
          <a href="/architecture" class="jira-link-card">
            <span class="jira-link-icon">🏛</span>
            <div class="jira-link-title">Architecture</div>
            <div class="jira-link-desc">Full 5-layer system design, data flow, and ADR decisions</div>
          </a>
          <a href="/security" class="jira-link-card">
            <span class="jira-link-icon">🔒</span>
            <div class="jira-link-title">Security</div>
            <div class="jira-link-desc">42-item audit, all 8 HIGH findings resolved, network diagram</div>
          </a>
          <a href="/qa" class="jira-link-card">
            <span class="jira-link-icon">🧪</span>
            <div class="jira-link-title">QA Strategy</div>
            <div class="jira-link-desc">Test pyramid, load test thresholds, Anna's sign-off criteria</div>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// No reactive data needed — static Jira snapshot
</script>

<style scoped>
/* ── Legend Strip ── */
.jira-legend-strip {
  background: var(--wai-navy-primary);
  border-top: 1px solid var(--wai-navy-light);
  border-bottom: 1px solid var(--wai-navy-light);
  padding: 1rem 0;
}

.jira-legend-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.jira-legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: #9CA3AF;
}

/* ── Status Pills ── */
.jira-status-pill {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  padding: 0.18rem 0.65rem;
  border-radius: 20px;
  white-space: nowrap;
}

.jira-pill-done    { background: rgba(5, 150, 105, 0.2);  color: #059669; border: 1px solid rgba(5,150,105,0.4); }
.jira-pill-active  { background: rgba(200, 168, 78, 0.2); color: #C8A84E; border: 1px solid rgba(200,168,78,0.4); }
.jira-pill-next    { background: rgba(59, 130, 246, 0.15); color: #3B82F6; border: 1px solid rgba(59,130,246,0.3); }
.jira-pill-backlog { background: rgba(55, 65, 81, 0.4);   color: #6B7280; border: 1px solid #374151; }

/* ── Tables ── */
.jira-table-wrap {
  overflow-x: auto;
  margin-top: 2rem;
  border-radius: 10px;
  border: 1px solid var(--wai-navy-light);
}

.jira-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.84rem;
}

.jira-table thead tr {
  background: var(--wai-navy-primary);
  border-bottom: 1px solid var(--wai-navy-light);
}

.jira-table th {
  padding: 0.85rem 1rem;
  text-align: left;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6B7280;
  white-space: nowrap;
}

.jira-table td {
  padding: 0.85rem 1rem;
  border-bottom: 1px solid rgba(27, 42, 74, 0.6);
  vertical-align: top;
  color: #9CA3AF;
  line-height: 1.5;
}

.jira-row-done   td { background: rgba(5, 150, 105, 0.03); }
.jira-row-active td { background: rgba(200, 168, 78, 0.05); }
.jira-row-next   td { background: rgba(27, 42, 74, 0.3); }
.jira-row-v1     td { background: rgba(27, 42, 74, 0.2); opacity: 0.75; }

.jira-table tr:last-child td { border-bottom: none; }

.jira-ticket-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  font-weight: 600;
  color: #C8A84E;
  text-decoration: none;
  white-space: nowrap;
}
.jira-ticket-link:hover { text-decoration: underline; }

/* ── Milestone Tags ── */
.jira-milestone {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.1rem 0.45rem;
  border-radius: 4px;
  margin-right: 0.35rem;
  letter-spacing: 0.06em;
}

.jira-m-done   { background: rgba(5,150,105,0.15);  color: #059669; border: 1px solid #059669; }
.jira-m-active { background: rgba(200,168,78,0.15); color: #C8A84E; border: 1px solid #C8A84E; }
.jira-m-next   { background: rgba(59,130,246,0.1);  color: #3B82F6; border: 1px solid #3B82F6; }
.jira-m-v1     { background: rgba(55,65,81,0.4);    color: #6B7280; border: 1px solid #374151; }

/* ── Sprint Tags ── */
.jira-sprint-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
}

.jira-sp-done { background: rgba(5,150,105,0.15); color: #059669; border: 1px solid #059669; }

/* ── Category Tags ── */
.jira-cat-tag {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.12rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
}

.jira-cat-sec   { background: rgba(239,68,68,0.12);  color: #EF4444; border: 1px solid rgba(239,68,68,0.3); }
.jira-cat-cross { background: rgba(139,92,246,0.12); color: #8B5CF6; border: 1px solid rgba(139,92,246,0.3); }
.jira-cat-bug   { background: rgba(245,158,11,0.12); color: #F59E0B; border: 1px solid rgba(245,158,11,0.3); }

/* ── V0 flag ── */
.jira-v0-flag {
  color: #C8A84E;
  font-size: 0.75rem;
}

/* ── V0 Card ── */
.jira-v0-card {
  background: var(--wai-navy-primary);
  border: 1px solid #C8A84E;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
}

.jira-v0-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.jira-v0-icon { font-size: 2rem; }

.jira-v0-ticket-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #F5F0E8;
}

.jira-v0-link {
  font-size: 0.78rem;
  color: #C8A84E;
  text-decoration: none;
  display: block;
  margin-top: 0.2rem;
}
.jira-v0-link:hover { text-decoration: underline; }

.jira-v0-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.jira-v0-metric {
  background: rgba(200, 168, 78, 0.07);
  border: 1px solid rgba(200, 168, 78, 0.2);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  text-align: center;
}

.jira-v0-metric-val {
  font-size: 1.8rem;
  font-weight: 700;
  color: #C8A84E;
  line-height: 1.2;
}

.jira-v0-metric-label {
  font-size: 0.75rem;
  color: #6B7280;
  margin-top: 0.25rem;
}

/* ── Board CTA ── */
.jira-board-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.jira-board-btn {
  display: inline-block;
  background: #C8A84E;
  color: #0A1628;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: background 0.2s;
}

.jira-board-btn:hover { background: #D4B96A; }

.jira-board-btn-outline {
  background: transparent;
  border: 1px solid #C8A84E;
  color: #C8A84E;
}

.jira-board-btn-outline:hover {
  background: rgba(200, 168, 78, 0.1);
}

/* ── Links Grid ── */
.jira-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.jira-link-card {
  display: block;
  background: var(--wai-navy-primary);
  border: 1px solid var(--wai-navy-light);
  border-radius: 10px;
  padding: 1.5rem 1.25rem;
  text-decoration: none;
  transition: border-color 0.2s, transform 0.2s;
}

.jira-link-card:hover {
  border-color: #C8A84E;
  transform: translateY(-2px);
}

.jira-link-icon {
  font-size: 1.8rem;
  display: block;
  margin-bottom: 0.6rem;
}

.jira-link-title {
  font-size: 1rem;
  font-weight: 700;
  color: #F5F0E8;
  margin-bottom: 0.4rem;
}

.jira-link-desc {
  font-size: 0.8rem;
  color: #6B7280;
  line-height: 1.5;
}
</style>
