<template>
  <div class="wai-page">

    <!-- HERO -->
    <section class="wai-hero">
      <p class="wai-hero-eyebrow">Warrior AI — Security Documentation</p>
      <h1 class="wai-hero-headline">
        42-Item Security Audit.<br>
        <span>Three Specialist Reports.</span>
      </h1>
      <p class="wai-hero-sub">
        Full security analysis of the Vultr VPS / Hono Gateway / Dify CE 1.13.0 / Firebase stack. Three specialist reports covering LLM &amp; Prompt Injection, Network &amp; Infrastructure, and Data &amp; Authentication. 42 Anna's Gate checklist items. Two ADRs proposed.
      </p>
      <div class="wai-hero-badges">
        <span class="wai-badge wai-badge-green">✓ WARAI-71 CORS Fixed</span>
        <span class="wai-badge wai-badge-green">✓ WARAI-72 Rate Limiting Live</span>
        <span class="wai-badge wai-badge-green">✓ 8 HIGH findings resolved</span>
        <span class="wai-badge wai-badge-green">✓ ADR-W026 Implemented</span>
        <span class="wai-badge wai-badge-green">✓ ADR-W027 Implemented</span>
      </div>
    </section>

    <!-- METRICS STRIP -->
    <section class="wai-metrics">
      <div class="wai-metrics-inner">
        <div>
          <span class="wai-metric-value">3</span>
          <span class="wai-metric-label">Specialist Reports</span>
        </div>
        <div>
          <span class="wai-metric-value">42</span>
          <span class="wai-metric-label">Anna's Gate Items</span>
        </div>
        <div>
          <span class="wai-metric-value">2</span>
          <span class="wai-metric-label">Critical Findings</span>
        </div>
        <div>
          <span class="wai-metric-value wai-metric-green">8/8</span>
          <span class="wai-metric-label">High Findings Resolved</span>
        </div>
        <div>
          <span class="wai-metric-value">9</span>
          <span class="wai-metric-label">JIRA Tickets (WARAI-74–82)</span>
        </div>
        <div>
          <span class="wai-metric-value">2/2</span>
          <span class="wai-metric-label">Pre-Launch Gaps Resolved</span>
        </div>
      </div>
    </section>

    <!-- SECTION 1: REPORTS INDEX -->
    <section class="wai-section">
      <h2 class="wai-section-title">Three Specialist Reports</h2>
      <div class="wai-report-grid">
        <div class="wai-report-card">
          <div class="wai-report-header">
            <span class="wai-report-section">A</span>
            <h3>LLM &amp; Prompt Injection</h3>
          </div>
          <p>Prompt injection attack paths at Gateway, agent nodes, and Variable Assigner. RAG poisoning via Qdrant write access. Cross-tenant write risk via LLM-influenced user_id. 15 checklist items (A-01 – A-15).</p>
          <div class="wai-report-items">
            <span class="wai-tag-item">Injection blocklist</span>
            <span class="wai-tag-item">Identity anchors</span>
            <span class="wai-tag-item">Code Node gates</span>
            <span class="wai-tag-item">RAG poisoning</span>
            <span class="wai-tag-item">Cross-tenant write</span>
          </div>
          <div class="wai-report-count">15 checklist items: A-01 – A-15</div>
        </div>

        <div class="wai-report-card">
          <div class="wai-report-header">
            <span class="wai-report-section">B</span>
            <h3>Network &amp; Infrastructure</h3>
          </div>
          <p>WARAI-69 resolution: nginx reverse proxy + 127.0.0.1 binding (Option C recommended). Qdrant API key implementation. Docker network segmentation from flat network to 5 named trust tiers. SSRF/Bridge reachability analysis. 12 checklist items (B-01 – B-12).</p>
          <div class="wai-report-items">
            <span class="wai-tag-item">nginx reverse proxy</span>
            <span class="wai-tag-item">Qdrant API key</span>
            <span class="wai-tag-item">Docker segmentation</span>
            <span class="wai-tag-item">SSRF blocklist</span>
            <span class="wai-tag-item">Cloudflare Tunnel</span>
          </div>
          <div class="wai-report-count">12 checklist items: B-01 – B-12</div>
        </div>

        <div class="wai-report-card">
          <div class="wai-report-header">
            <span class="wai-report-section">C</span>
            <h3>Data &amp; Authentication</h3>
          </div>
          <p>Firebase Admin SDK bypass risk model. user_id trust chain integrity gap (Gateway → Dify → Bridge). JWT attack surface (5 scenarios). Firebase service account secret management. PII classification: Power Stacks / Door Cards / Bible Stacks = GDPR Article 9 special category data. 15 checklist items (C-01 – C-15).</p>
          <div class="wai-report-items">
            <span class="wai-tag-item">Admin SDK bypass</span>
            <span class="wai-tag-item">HMAC signing</span>
            <span class="wai-tag-item">JWT attack paths</span>
            <span class="wai-tag-item">GDPR Article 9</span>
            <span class="wai-tag-item">Secret rotation</span>
          </div>
          <div class="wai-report-count">15 checklist items: C-01 – C-15</div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: CRITICAL FINDINGS -->
    <section class="wai-section wai-section-alt">
      <h2 class="wai-section-title">Critical Findings Summary</h2>
      <p class="wai-section-sub">10 findings from the three-report audit. Two resolved at launch. Eight require implementation before production go-live.</p>
      <img
        src="/images/warrior-ai-security-radar.webp"
        alt="Security Radar — findings mapped by severity"
        class="wai-section-image"
      />
      <div class="wai-table-wrap">
        <table class="wai-table">
          <thead><tr><th>ID</th><th>Finding</th><th>Severity</th><th>Section</th><th>JIRA</th></tr></thead>
          <tbody>
            <tr>
              <td><code>F-01</code></td>
              <td>Bridge trusts user_id from Dify LLM output without re-verification</td>
              <td><span class="wai-badge wai-badge-crit">CRITICAL</span></td>
              <td>C.1, C.2</td>
              <td>WARAI-74</td>
            </tr>
            <tr>
              <td><code>F-02</code></td>
              <td>Gateway binds 0.0.0.0:3000 — firewall-only defence</td>
              <td><span class="wai-badge wai-badge-high">HIGH</span></td>
              <td>B.1</td>
              <td>WARAI-69</td>
            </tr>
            <tr>
              <td><code>F-03</code></td>
              <td>Qdrant has no API key — any container can read/write vector corpus</td>
              <td><span class="wai-badge wai-badge-high">HIGH</span></td>
              <td>B.2</td>
              <td>WARAI-76</td>
            </tr>
            <tr>
              <td><code>F-04</code></td>
              <td>verifyIdToken() missing checkRevoked: true — 1h replay window</td>
              <td><span class="wai-badge wai-badge-high">HIGH</span></td>
              <td>C.7</td>
              <td>WARAI-75</td>
            </tr>
            <tr>
              <td><code>F-05</code></td>
              <td>Docker network is flat — sandbox can reach database</td>
              <td><span class="wai-badge wai-badge-high">HIGH</span></td>
              <td>B.3</td>
              <td>WARAI-77</td>
            </tr>
            <tr>
              <td><code>F-06</code></td>
              <td>Injection pattern blocklist absent at Gateway</td>
              <td><span class="wai-badge wai-badge-high">HIGH</span></td>
              <td>A.1</td>
              <td>WARAI-78</td>
            </tr>
            <tr>
              <td><code>F-07</code></td>
              <td>No identity anchor in agent system prompts</td>
              <td><span class="wai-badge wai-badge-high">HIGH</span></td>
              <td>A.6</td>
              <td>WARAI-79</td>
            </tr>
            <tr>
              <td><code>F-08</code></td>
              <td>.env file permissions unverified — may be 644</td>
              <td><span class="wai-badge wai-badge-high">HIGH</span></td>
              <td>C.4</td>
              <td>WARAI-80</td>
            </tr>
            <tr>
              <td><code>F-09</code></td>
              <td>SSRF proxy blocklist may not cover Docker bridge gateway IP</td>
              <td><span class="wai-badge wai-badge-crit">CRITICAL</span></td>
              <td>B.4</td>
              <td>WARAI-81</td>
            </tr>
            <tr>
              <td><code>F-10</code></td>
              <td>Stack content (Power Stacks, Door Cards) unencrypted at rest</td>
              <td><span class="wai-badge wai-badge-high">HIGH</span></td>
              <td>C.6</td>
              <td>WARAI-82 <em>[ESCALATE]</em></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION 3: ADRS -->
    <section class="wai-section">
      <h2 class="wai-section-title">Architectural Decision Records</h2>
      <div class="wai-adr-grid">
        <div class="wai-adr-card">
          <div class="wai-adr-id">ADR-W026</div>
          <h3>HMAC-SHA256 Signed user_id Envelope</h3>
          <p>Restores cryptographic provenance through the Gateway→Dify→Bridge trust chain. The Gateway mints a short-lived HMAC-signed token containing the verified user_id. The Bridge verifies the HMAC before trusting any user_id from Dify conversation variables — preventing both direct Bridge exploitation and prompt injection-driven user_id substitution.</p>
          <div class="wai-adr-meta">
            <span>Resolves: WARAI-74, S-15, C-04</span>
            <span class="wai-badge wai-badge-green">✓ Status: Implemented</span>
          </div>
        </div>
        <div class="wai-adr-card">
          <div class="wai-adr-id">ADR-W027</div>
          <h3>Docker Network Segmentation by Trust Tier</h3>
          <p>Replaces the current flat Docker network with 5 named trust tiers. The dify-sandbox container (untrusted AI execution) is isolated from dify-db and dify-redis. The Bridge is isolated from Dify/LLM containers. Gateway and Bridge communicate only on a dedicated gateway-network. Plugin daemon is fully isolated on plugin-isolated.</p>
          <div class="wai-adr-meta">
            <span>Resolves: WARAI-77, S-10, S-20, B-03, B-04, C-07</span>
            <span class="wai-badge wai-badge-green">✓ Status: Implemented</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: JIRA TICKETS -->
    <section class="wai-section wai-section-alt">
      <h2 class="wai-section-title">JIRA Tickets — WARAI-74 through WARAI-82</h2>
      <div class="wai-table-wrap">
        <table class="wai-table">
          <thead><tr><th>Ticket</th><th>Summary</th><th>Severity</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>WARAI-74</td><td>HMAC user_id signing (ADR-W026)</td><td><span class="wai-badge wai-badge-high">HIGH</span></td><td><span class="wai-badge wai-badge-green">✓ Fertig</span></td></tr>
            <tr><td>WARAI-75</td><td>checkRevoked: true on verifyIdToken</td><td><span class="wai-badge wai-badge-high">HIGH</span></td><td><span class="wai-badge wai-badge-green">✓ Fertig</span></td></tr>
            <tr><td>WARAI-76</td><td>Qdrant API key</td><td><span class="wai-badge wai-badge-high">HIGH</span></td><td><span class="wai-badge wai-badge-green">✓ Fertig</span></td></tr>
            <tr><td>WARAI-77</td><td>Docker network segmentation (ADR-W027)</td><td><span class="wai-badge wai-badge-high">HIGH</span></td><td><span class="wai-badge wai-badge-green">✓ Fertig</span></td></tr>
            <tr><td>WARAI-78</td><td>Injection pattern blocklist at Gateway</td><td><span class="wai-badge wai-badge-high">HIGH</span></td><td><span class="wai-badge wai-badge-green">✓ Fertig</span></td></tr>
            <tr><td>WARAI-79</td><td>Identity anchor in all agent system prompts</td><td><span class="wai-badge wai-badge-high">HIGH</span></td><td><span class="wai-badge wai-badge-green">✓ Fertig</span></td></tr>
            <tr><td>WARAI-80</td><td>.env permissions 600 + git history scan</td><td><span class="wai-badge wai-badge-high">HIGH</span></td><td><span class="wai-badge wai-badge-green">✓ Fertig</span></td></tr>
            <tr><td>WARAI-81</td><td>Firestore Security Rules audit</td><td><span class="wai-badge wai-badge-high">HIGH</span></td><td><span class="wai-badge wai-badge-green">✓ Fertig</span></td></tr>
            <tr><td>WARAI-82</td><td>Code Node pre-write validation gate</td><td><span class="wai-badge wai-badge-high">HIGH</span></td><td><span class="wai-badge wai-badge-gold">Backlog</span></td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION 5: MASTER CHECKLIST -->
    <section class="wai-section">
      <h2 class="wai-section-title">Anna's Gate — Master Security Checklist (42 Items)</h2>
      <p class="wai-section-sub">All S-01–S-20 must be GREEN before production launch. Full per-section checklists (A-01–A-15, B-01–B-12, C-01–C-15) are in the three source reports.</p>

      <h3 class="wai-subsection-title">Section A — LLM &amp; Prompt Injection (Key Items)</h3>
      <div class="wai-checklist">
        <div class="wai-check-item wai-check-done"><span class="wai-check-id">A-01</span>Injection pattern blocklist active at Gateway before Dify handoff</div>
        <div class="wai-check-item wai-check-done"><span class="wai-check-id">A-06</span>Identity anchor + security boundary present in all 7 agent system prompts</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">A-09</span>Pre-write Code Node validation gate implemented in Dify</div>
        <div class="wai-check-item wai-check-done"><span class="wai-check-id">A-12</span>Qdrant collection write access restricted (API key + network isolation)</div>
      </div>

      <h3 class="wai-subsection-title">Section B — Network &amp; Infrastructure (Key Items)</h3>
      <div class="wai-checklist">
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">B-01</span>warrior-hono-gateway binds to 127.0.0.1:3000 — not 0.0.0.0:3000</div>
        <div class="wai-check-item wai-check-done"><span class="wai-check-id">B-02</span>Qdrant API key set and enforced</div>
        <div class="wai-check-item wai-check-done"><span class="wai-check-id">B-03</span>dify-sandbox in bridge mode, not host mode</div>
        <div class="wai-check-item wai-check-done"><span class="wai-check-id">B-04</span>dify-sandbox cannot reach dify-db or dify-redis</div>
        <div class="wai-check-item wai-check-open"><span class="wai-check-id">B-07</span>SSH restricted — not open to 0.0.0.0/0</div>
      </div>

      <h3 class="wai-subsection-title">Section C — Data &amp; Authentication (Key Items)</h3>
      <div class="wai-checklist">
        <div class="wai-check-item wai-check-done"><span class="wai-check-id">C-01</span>.env file permissions 600</div>
        <div class="wai-check-item wai-check-done"><span class="wai-check-id">C-03</span>Gateway uses verifyIdToken(token, checkRevoked: true)</div>
        <div class="wai-check-item wai-check-done"><span class="wai-check-id">C-04</span>Bridge write path uses HMAC-signed user token — not bare Dify variable</div>
        <div class="wai-check-item wai-check-done"><span class="wai-check-id">C-06</span>Firestore Security Rules enforce request.auth.uid == userId</div>
        <div class="wai-check-item wai-check-done"><span class="wai-check-id">C-07</span>Bridge container isolated from Dify/LLM containers</div>
      </div>
    </section>

    <!-- SECTION 6: REASSESSMENT TRIGGERS -->
    <section class="wai-section wai-section-alt">
      <h2 class="wai-section-title">Reassessment Triggers</h2>
      <p class="wai-section-sub">Re-run security analysis upon any of the following events:</p>
      <div class="wai-trigger-list">
        <div class="wai-trigger">Bridge HMAC signing implementation (ADR-W026)</div>
        <div class="wai-trigger">Redis migration (replace in-memory rate limiting)</div>
        <div class="wai-trigger">Any Dify CE version upgrade</div>
        <div class="wai-trigger">Addition of OMI backend sidecar</div>
        <div class="wai-trigger">Plugin Marketplace enablement</div>
        <div class="wai-trigger">Any change to Firebase IAM roles or service accounts</div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="wai-footer">
      <p>Warrior AI Solutions · Security Documentation · Last updated 2026-02-24</p>
      <p>See also: <a href="/qa">QA Strategy</a> · <a href="/architecture">Architecture Overview</a></p>
    </footer>

  </div>
</template>

<style scoped>
.wai-report-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}
.wai-report-card {
  background: var(--wai-surface);
  border: 1px solid var(--wai-border);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.wai-report-header { display: flex; align-items: center; gap: 0.75rem; }
.wai-report-section {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  background: rgba(212,175,55,0.2);
  color: var(--wai-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.1rem;
}
.wai-report-card h3 { margin: 0; font-size: 1rem; color: var(--wai-gold); }
.wai-report-card p { margin: 0; color: var(--wai-text-muted); font-size: 0.85rem; line-height: 1.55; flex: 1; }
.wai-report-items { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.wai-tag-item {
  font-size: 0.75rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--wai-border);
  border-radius: 4px;
  padding: 0.15rem 0.5rem;
  color: var(--vp-c-text-2);
}
.wai-report-count {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--wai-gold);
  opacity: 0.8;
}

.wai-badge-crit { background: rgba(239,68,68,0.2); color: #f87171; border-color: rgba(239,68,68,0.4); font-weight: 700; }
.wai-badge-high { background: rgba(245,158,11,0.15); color: #fbbf24; border-color: rgba(245,158,11,0.3); }

.wai-adr-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; }
.wai-adr-card {
  background: var(--wai-surface);
  border: 1px solid var(--wai-border);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.wai-adr-id {
  font-size: 0.78rem;
  font-weight: 700;
  font-family: var(--vp-font-family-mono);
  background: rgba(212,175,55,0.15);
  color: var(--wai-gold);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  width: fit-content;
}
.wai-adr-card h3 { margin: 0; font-size: 1rem; color: var(--wai-gold); }
.wai-adr-card p { margin: 0; color: var(--wai-text-muted); font-size: 0.85rem; line-height: 1.55; flex: 1; }
.wai-adr-meta { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; font-size: 0.8rem; color: var(--vp-c-text-3); }

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
  background: rgba(34,197,94,0.08);
  border-color: rgba(34,197,94,0.3);
  color: var(--vp-c-text-1);
}
.wai-check-done .wai-check-id {
  background: rgba(34,197,94,0.2);
  color: #4ade80;
}
.wai-check-done::before {
  content: "✓ ";
  color: #4ade80;
  font-weight: 700;
}
.wai-metric-green {
  color: #4ade80;
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

.wai-trigger-list { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem; }
.wai-trigger {
  padding: 0.6rem 1rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--wai-border);
  border-radius: 8px;
  font-size: 0.88rem;
  color: var(--wai-text-muted);
}
.wai-trigger::before { content: "↺  "; color: var(--wai-gold); font-weight: 700; }
</style>
