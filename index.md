---
layout: default
title: Home
description: "System-level performance engineer — bridging silicon limits, firmware control, and real workloads."
permalink: /
---

<section class="hero">
  <div class="hero__grid">
    <div class="panel hero__main" data-reveal>
      <div class="kicker"><span class="spark"></span> Fast to scan · Deep when needed</div>
      <h1>System-level Performance Engineer</h1>
      <p class="subhead">
        I work across silicon limits, firmware control, and real workloads to deliver predictable performance per watt.
      </p>
      <div class="pills">
        <span class="pill">Post-silicon performance tuning</span>
        <span class="pill">DVFS / thermal mitigation</span>
        <span class="pill">MCUPM / firmware control</span>
        <span class="pill">SoC integration mindset</span>
      </div>
    </div>

    <div class="panel hero__side" data-reveal>
      <div class="side__card">
        <p class="side__title">Quick entry points</p>
        <p class="side__text">Choose what you care about. Each page is focused and short.</p>
        <div class="side__links">
          <a class="btn btn--primary" href="{{ '/domain/performance' | relative_url }}">Performance</a>
          <a class="btn" href="{{ '/domain/system' | relative_url }}">System</a>
          <a class="btn" href="{{ '/domain/architecture' | relative_url }}">Architecture</a>
        </div>
      </div>

      <div class="side__card">
        <p class="side__title">Contact</p>
        <p class="side__text muted">
          Add your email / LinkedIn here.
        </p>
        <div class="side__links">
          <a class="btn" href="#" title="Replace with your LinkedIn URL">LinkedIn</a>
          <a class="btn" href="#" title="Replace with your GitHub URL">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="section__title">Three focused domains</div>

  <div class="cards">
    <a class="card" href="{{ '/domain/performance' | relative_url }}" data-reveal>
      <div class="glow"></div>
      <span class="card__tag">Performance & Power</span>
      <div class="card__h">Performance & Power Optimization</div>
      <p class="card__p">Turning thermal and power constraints into predictable performance.</p>
      <ul class="card__bullets">
        <li>Post-silicon tuning on flagship SoCs</li>
        <li>DVFS / thermal / workload-aware control</li>
        <li>Root-cause analysis across CPU/GPU/thermal</li>
      </ul>
    </a>

    <a class="card" href="{{ '/domain/system' | relative_url }}" data-reveal>
      <div class="glow"></div>
      <span class="card__tag">System Integration</span>
      <div class="card__h">System Integration & Control</div>
      <p class="card__p">Making complex SoCs behave as one system.</p>
      <ul class="card__bullets">
        <li>MCUPM / firmware-based control loops</li>
        <li>CPU ↔ GPU ↔ Modem coordination</li>
        <li>Power domain & interconnect awareness</li>
      </ul>
    </a>

    <a class="card" href="{{ '/domain/architecture' | relative_url }}" data-reveal>
      <div class="glow"></div>
      <span class="card__tag">Architecture</span>
      <div class="card__h">Architecture & Modeling</div>
      <p class="card__p">Reasoning about performance before silicon exists.</p>
      <ul class="card__bullets">
        <li>Cache / memory behavior modeling</li>
        <li>Trade-off driven thinking</li>
        <li>Benchmarks & micro-profiling</li>
      </ul>
    </a>
  </div>
</section>

<section class="section">
  <div class="grid2">
    <div class="block" data-reveal>
      <div class="section__title">Personal signature</div>
      <div class="prose">
        <p><strong>How I think:</strong> I focus on system behavior, not isolated components. I care about why performance breaks, and I build control strategies that stay stable under real constraints.</p>
        <p><a href="{{ '/about' | relative_url }}">Read the short intro →</a></p>
      </div>
    </div>
    <div class="block" data-reveal>
      <div class="section__title">Keep it focused</div>
      <div class="prose">
        <p>This site is intentionally small: 3 domains + 1 about page. Each page is built to be scanned in <strong>under 60 seconds</strong>.</p>
        <p class="muted">You can add audio/video later without changing any code — just drop files into <code>assets/</code> and edit Markdown.</p>
      </div>
    </div>
  </div>
</section>
