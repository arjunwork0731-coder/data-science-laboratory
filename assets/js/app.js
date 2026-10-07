/**
 * Main Application Logic & Single Page Router
 * Mohan Babu University - Data Science Laboratory (22DS102006)
 * Student: K ARJUN REDDY (24102A030073)
 */

(function () {
  "use strict";

  // Quick DOM helpers
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

  const PREVIEW_SECONDS = 10;

  // Icons SVG dictionary
  const ICONS = {
    search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    play: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    pause: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`,
    plus: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    arrowLeft: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
    arrowRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    copy: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
    check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    youtube: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    github: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    terminal: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    book: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`
  };

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Syntax highlighter for Python snippets
  function highlightPython(code) {
    const raw = String(code || "");
    const lines = raw.split("\n");
    return lines.map((line) => {
      // Comments
      if (/^\s*#/.test(line)) {
        return `<span class="tok-com">${escapeHtml(line)}</span>`;
      }
      let escaped = escapeHtml(line);
      // Strings
      escaped = escaped.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="tok-str">$&</span>');
      // Keywords
      escaped = escaped.replace(/\b(import|from|as|def|return|class|if|else|elif|for|while|in|with|try|except|True|False|None)\b/g, '<span class="tok-kw">$1</span>');
      // Functions / Methods
      escaped = escaped.replace(/\b([a-zA-Z_]\w*)(?=\()/g, '<span class="tok-fn">$1</span>');
      // Numbers
      escaped = escaped.replace(/\b(\d+(\.\d+)?)\b/g, '<span class="tok-num">$1</span>');
      return escaped;
    }).join("\n");
  }

  // Toast notification
  function showToast(message) {
    let toast = $("#siteToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "siteToast";
      toast.className = "toast-notice";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `${ICONS.check} <span>${escapeHtml(message)}</span>`;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2800);
  }

  // Copy to clipboard
  async function copyToClipboard(text, btnElement) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      showToast("Code copied to clipboard!");
      if (btnElement) {
        const oldHtml = btnElement.innerHTML;
        btnElement.innerHTML = `${ICONS.check} Copied!`;
        setTimeout(() => { btnElement.innerHTML = oldHtml; }, 1800);
      }
    } catch (err) {
      showToast("Unable to copy automatically - please copy manually.");
    }
  }

  /* -------------------------------------------------------------------------
     HOVER-TO-PLAY PREVIEW VIDEO MECHANISM
     - Does NOT automatically play
     - On mouseover: Starts playing preview (~10 seconds)
     - On mouseleave: Pauses and resets to 0:00
     ------------------------------------------------------------------------- */
  function wireHoverPreview(container) {
    if (!container) return;
    const video = container.querySelector("video");
    const canvas = container.querySelector("canvas");
    let intervalTimer = null;
    let canvasAnimationId = null;

    if (video) {
      video.muted = true;

      container.addEventListener("mouseenter", function () {
        clearInterval(intervalTimer);
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(function () {
            // Muted autoplay allowed
            video.muted = true;
            video.play().catch(() => {});
          });
        }

        // Loop the 10-second preview window
        intervalTimer = setInterval(function () {
          if (video.currentTime >= PREVIEW_SECONDS || video.ended) {
            video.currentTime = 0;
            video.play().catch(() => {});
          }
        }, 200);
      });

      container.addEventListener("mouseleave", function () {
        clearInterval(intervalTimer);
        video.pause();
        video.currentTime = 0;
      });

      video.addEventListener("error", function () {
        // If MP4 file is pending, switch seamlessly to canvas simulator
        if (canvas) {
          video.style.display = "none";
          canvas.style.display = "block";
        }
      });
    }

    // Canvas Simulator for video preview when MP4 is pending
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let frame = 0;
      let isHovered = false;
      let previewTime = 0;

      function drawPoster() {
        ctx.fillStyle = "#040915";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Tech grid lines
        ctx.strokeStyle = "rgba(0, 242, 254, 0.08)";
        ctx.lineWidth = 1;
        for (let x = 0; x < canvas.width; x += 40) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += 40) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        // Simulated Code Streams
        ctx.font = "14px 'JetBrains Mono', Consolas, monospace";
        ctx.fillStyle = isHovered ? "rgba(0, 242, 254, 0.85)" : "rgba(148, 169, 201, 0.4)";
        const lines = [
          "import pandas as pd",
          "import numpy as np",
          "df = pd.DataFrame(data)",
          "print(df.describe())",
          "plt.show()"
        ];
        lines.forEach((l, i) => {
          ctx.fillText(l, 30, 60 + i * 26);
        });

        // Center badge
        ctx.fillStyle = isHovered ? "rgba(0, 242, 254, 0.25)" : "rgba(255, 255, 255, 0.06)";
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 42, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = isHovered ? "#00f2fe" : "rgba(255, 255, 255, 0.2)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Play Triangle
        ctx.fillStyle = isHovered ? "#00f2fe" : "#ffffff";
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - 10, canvas.height / 2 - 16);
        ctx.lineTo(canvas.width / 2 + 18, canvas.height / 2);
        ctx.lineTo(canvas.width / 2 - 10, canvas.height / 2 + 16);
        ctx.closePath();
        ctx.fill();

        // Footer progress & timer
        ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
        ctx.fillRect(0, canvas.height - 38, canvas.width, 38);

        ctx.fillStyle = "#ffffff";
        ctx.font = "12px sans-serif";
        const timeSec = (previewTime % PREVIEW_SECONDS).toFixed(1);
        ctx.fillText(`Preview Video: 00:${timeSec.padStart(4, "0")} / 00:10.0`, 20, canvas.height - 14);

        if (isHovered) {
          ctx.fillStyle = "#00f2fe";
          const progressW = (canvas.width * (previewTime % PREVIEW_SECONDS)) / PREVIEW_SECONDS;
          ctx.fillRect(0, canvas.height - 4, progressW, 4);
        }
      }

      drawPoster();

      function animate() {
        if (isHovered) {
          frame++;
          previewTime += 0.035;
          drawPoster();
          canvasAnimationId = requestAnimationFrame(animate);
        }
      }

      container.addEventListener("mouseenter", function () {
        isHovered = true;
        previewTime = 0;
        cancelAnimationFrame(canvasAnimationId);
        animate();
      });

      container.addEventListener("mouseleave", function () {
        isHovered = false;
        cancelAnimationFrame(canvasAnimationId);
        previewTime = 0;
        drawPoster();
      });
    }
  }

  /* -------------------------------------------------------------------------
     PAGE 1: MAIN DATA SCIENCE LABORATORY PAGE
     ------------------------------------------------------------------------- */
  function renderPage1(root) {
    const studentPhotoHtml = student.photo
      ? `<img class="id-card__photo" src="${escapeHtml(student.photo)}" alt="Student Photo">`
      : `<img class="id-card__photo" src="assets/img/student-photo.jpg" alt="Student Avatar">`;

    // Autocomplete list items
    const experimentItems = experiments.map(exp => `
      <div class="exp-card" data-exp-id="${exp.id}">
        <div class="exp-card__num">Experiment ${exp.id}</div>
        <div class="exp-card__title">${escapeHtml(exp.name)}</div>
        <div class="exp-card__tagline">${escapeHtml(exp.tagline)}</div>
        <div class="exp-card__footer">
          <span class="exp-card__sections-count">${exp.sections.length} Practical Sections (${exp.sections.map(s => s.letter).join(", ")})</span>
          <span class="exp-card__action-btn">Open Preview ${ICONS.arrowRight}</span>
        </div>
      </div>
    `).join("");

    root.innerHTML = `
      <div class="p1-hero">
        <!-- Main University Section (Center Box) -->
        <section class="uni-main-card" aria-label="University Laboratory Header">
          <div class="uni-main-card__top">
            <div class="uni-main-card__logo-wrap">
              <img class="uni-main-card__logo" src="${escapeHtml(university.logo)}" alt="MBU Logo">
            </div>
            <div class="uni-main-card__branding">
              <h1 class="uni-main-card__uni-name">${escapeHtml(university.name)}</h1>
              <h2 class="uni-main-card__lab-name">${escapeHtml(laboratory.name)}</h2>
            </div>
          </div>

          <div class="uni-main-card__subject-box">
            <span>Subject Code:</span>
            <strong class="uni-main-card__subject-code">${escapeHtml(labMeta.subjectCode)}</strong>
          </div>

          <!-- Search Box with Live Autocomplete -->
          <div class="search-wrapper">
            <div class="search-input-group">
              <span class="search-icon">${ICONS.search}</span>
              <input 
                type="text" 
                id="experimentSearchInput" 
                class="search-input" 
                placeholder="Search Experiments..." 
                autocomplete="off"
                aria-label="Search Experiments"
              >
            </div>
            <div id="searchSuggestionsBox" class="search-suggestions"></div>
          </div>
        </section>

        <!-- Right Side: Student ID Card -->
        <aside class="student-id-card" aria-label="Student ID Card">
          <div class="id-card__header-strip">
            <img class="id-card__strip-logo" src="${escapeHtml(university.logo)}" alt="MBU">
            <span class="id-card__strip-text">MBU Student Identity Card</span>
          </div>

          <div class="id-card__photo-container">
            <div class="id-card__photo-frame">
              ${studentPhotoHtml}
            </div>
            <span class="id-card__photo-tag">${escapeHtml(student.role)}</span>
          </div>

          <!-- Fields in EXACT Requested Order -->
          <div class="id-card__fields-list">
            <div class="id-field-row">
              <span class="id-field-label">Name:</span>
              <span class="id-field-val">${escapeHtml(student.name)}</span>
            </div>
            <div class="id-field-row">
              <span class="id-field-label">ID Number:</span>
              <span class="id-field-val highlight">${escapeHtml(student.idNumber)}</span>
            </div>
            <div class="id-field-row">
              <span class="id-field-label">Section:</span>
              <span class="id-field-val">${escapeHtml(student.section)}</span>
            </div>
            <div class="id-field-row">
              <span class="id-field-label">Faculty:</span>
              <span class="id-field-val">${escapeHtml(student.faculty)}</span>
            </div>
            <div class="id-field-row">
              <span class="id-field-label">Profession:</span>
              <span class="id-field-val">${escapeHtml(student.profession)}</span>
            </div>
          </div>

          <div class="id-card__footer">
            <span>${escapeHtml(labMeta.department)}</span>
            <span>${escapeHtml(labMeta.academicYear)}</span>
          </div>
        </aside>
      </div>

      <!-- Experiments Section Header with "+ ADD" Button -->
      <section class="experiments-section" aria-label="Laboratory Experiments">
        <div class="section-header-bar">
          <h2 class="section-header-bar__title">
            <span>Experiments:</span>
          </h2>
          <button id="addExperimentBtn" class="add-experiment-btn" type="button" title="Open Next Experiment Preview">
            ${ICONS.plus} + ADD
          </button>
        </div>

        <!-- Catalogue Cards -->
        <div id="experimentsGrid" class="experiments-grid">
          ${experimentItems}
        </div>
      </section>
    `;

    // Wire "+ ADD" button -> Opens Page 2 (Experiment Preview)
    $("#addExperimentBtn").addEventListener("click", () => {
      // By default open the next experiment (or experiment 1)
      window.location.hash = "#/preview/1";
    });

    // Wire experiment cards
    $$(".exp-card", root).forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-exp-id");
        window.location.hash = `#/preview/${id}`;
      });
    });

    // Wire Search & Autocomplete
    const searchInput = $("#experimentSearchInput");
    const suggestionsBox = $("#searchSuggestionsBox");
    const cardsGrid = $("#experimentsGrid");

    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      
      if (!query) {
        suggestionsBox.classList.remove("active");
        suggestionsBox.innerHTML = "";
        // Show all cards
        $$(".exp-card", cardsGrid).forEach(c => c.style.display = "");
        return;
      }

      // Filter experiments
      const matches = experiments.filter(exp => {
        return exp.name.toLowerCase().includes(query) ||
               exp.tagline.toLowerCase().includes(query) ||
               `experiment ${exp.id}`.includes(query) ||
               exp.sections.some(s => s.title.toLowerCase().includes(query) || s.code.toLowerCase().includes(query));
      });

      // Filter cards on page
      $$(".exp-card", cardsGrid).forEach(card => {
        const expId = parseInt(card.getAttribute("data-exp-id"), 10);
        const match = matches.some(m => m.id === expId);
        card.style.display = match ? "" : "none";
      });

      // Show autocomplete suggestions dropdown
      if (matches.length > 0) {
        suggestionsBox.innerHTML = matches.map(m => `
          <div class="suggestion-item" data-id="${m.id}">
            <span class="suggestion-title">Experiment ${m.id} &mdash; ${escapeHtml(m.name)}</span>
            <span class="suggestion-badge">${m.sections.length} parts</span>
          </div>
        `).join("");
        suggestionsBox.classList.add("active");

        $$(".suggestion-item", suggestionsBox).forEach(item => {
          item.addEventListener("click", () => {
            const expId = item.getAttribute("data-id");
            window.location.hash = `#/preview/${expId}`;
          });
        });
      } else {
        suggestionsBox.innerHTML = `<div class="suggestion-item"><span class="suggestion-title">No matching experiments found for "${escapeHtml(query)}"</span></div>`;
        suggestionsBox.classList.add("active");
      }
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-wrapper")) {
        suggestionsBox.classList.remove("active");
      }
    });
  }

  /* -------------------------------------------------------------------------
     PAGE 2: EXPERIMENT CARD / PREVIEW
     - Left: 10s preview video (hover-to-play)
     - Right: Experiment Name
     - Below: "Overview" clickable button
     ------------------------------------------------------------------------- */
  function renderPage2(root, expId) {
    const experiment = experiments.find(e => e.id === Number(expId)) || experiments[0];

    root.innerHTML = `
      <div class="p2-preview-page">
        <!-- Back Navigation & Breadcrumb -->
        <div class="back-nav-bar">
          <a class="back-btn" href="#/" title="Return to Main Lab">${ICONS.arrowLeft} Back to Main Page</a>
          <div class="breadcrumb-trail">
            Home / Experiments / <span>Experiment ${experiment.id} Preview</span>
          </div>
        </div>

        <div class="p2-card">
          <div class="p2-card__content">
            <!-- LEFT SIDE: 10-Second Preview Video (Hover to Play) -->
            <div class="media-container" id="previewMediaBox" data-preview-box>
              <video 
                class="media-video" 
                src="${escapeHtml(experiment.previewVideo)}" 
                preload="metadata" 
                playsinline 
                muted
              ></video>
              <canvas class="media-canvas-poster" width="640" height="360" style="display:none;"></canvas>
              
              <div class="poster-canvas-overlay">
                <div class="poster-top-bar">
                  <span class="preview-badge"><span class="pulse-dot"></span> 10s PREVIEW</span>
                  <span class="hover-hint-chip">Hover to play</span>
                </div>
                <div class="poster-center-play">
                  ${ICONS.play}
                </div>
                <div class="poster-bottom-bar">
                  <span>Experiment ${experiment.id} Preview</span>
                  <span>00:10</span>
                </div>
              </div>
            </div>

            <!-- RIGHT SIDE: Experiment Name -->
            <div class="p2-right-details">
              <span class="p2-exp-label">Experiment ${experiment.id}</span>
              <h2 class="p2-exp-name">${escapeHtml(experiment.name)}</h2>
              <p class="p2-exp-summary-brief">${escapeHtml(experiment.tagline)}</p>
            </div>
          </div>

          <!-- BELOW BOTH: "Overview" Clickable Button -->
          <div class="overview-action-row">
            <button id="goToOverviewBtn" class="overview-btn" type="button">
              <span>Overview</span>
              ${ICONS.arrowRight}
            </button>
          </div>
        </div>
      </div>
    `;

    // Wire Hover-to-Play Video
    wireHoverPreview($("#previewMediaBox"));

    // Wire Clickable "Overview" Button -> Opens Page 3
    $("#goToOverviewBtn").addEventListener("click", () => {
      window.location.hash = `#/overview/${experiment.id}`;
    });
  }

  /* -------------------------------------------------------------------------
     PAGE 3: EXPERIMENT OVERVIEW / DETAILS
     - Left: SAME preview video (hover-to-play)
     - Right: Experiment Name + Dynamic sections: A, B, C, D...
     - Below: YouTube video on left, YouTube Link, GitHub Link, Summary of Experiment
     ------------------------------------------------------------------------- */
  function renderPage3(root, expId) {
    const experiment = experiments.find(e => e.id === Number(expId)) || experiments[0];

    // Dynamic section buttons (A, B, C, D, E, F...)
    const sectionsButtons = experiment.sections.map(sec => `
      <button class="section-letter-btn" data-sec-id="${sec.id}" type="button" title="${escapeHtml(sec.title)}">
        <span class="section-letter-char">${escapeHtml(sec.letter)}</span>
        <span class="section-letter-sub">Part ${escapeHtml(sec.letter)}</span>
      </button>
    `).join("");

    root.innerHTML = `
      <div class="p3-details-page">
        <!-- Back Navigation & Breadcrumbs -->
        <div class="back-nav-bar">
          <a class="back-btn" href="#/preview/${experiment.id}">${ICONS.arrowLeft} Back to Preview</a>
          <div class="breadcrumb-trail">
            Home / Experiments / Experiment ${experiment.id} / <span>Overview &amp; Details</span>
          </div>
        </div>

        <!-- TOP GRID: Left Preview Video + Right Experiment Name & Dynamic Sections -->
        <div class="p3-top-grid">
          <!-- LEFT SIDE: Same Experiment Preview Video -->
          <div class="media-container" id="detailsPreviewMediaBox" data-preview-box>
            <video 
              class="media-video" 
              src="${escapeHtml(experiment.previewVideo)}" 
              preload="metadata" 
              playsinline 
              muted
            ></video>
            <canvas class="media-canvas-poster" width="640" height="360" style="display:none;"></canvas>

            <div class="poster-canvas-overlay">
              <div class="poster-top-bar">
                <span class="preview-badge"><span class="pulse-dot"></span> 10s PREVIEW</span>
                <span class="hover-hint-chip">Hover to play</span>
              </div>
              <div class="poster-center-play">
                ${ICONS.play}
              </div>
              <div class="poster-bottom-bar">
                <span>Experiment ${experiment.id} Overview Video</span>
                <span>00:10</span>
              </div>
            </div>
          </div>

          <!-- RIGHT SIDE: Experiment Name + Dynamic Sections A, B, C, D... -->
          <div class="p3-sections-container">
            <h2 class="p3-exp-name">${escapeHtml(experiment.name)}</h2>
            <div class="p3-sections-heading">Click an Experiment Section to open:</div>
            <div class="sections-letter-grid">
              ${sectionsButtons}
            </div>
          </div>
        </div>

        <!-- BELOW THE EXPERIMENT SECTIONS: YouTube Video, Links, Summary -->
        <div class="p3-bottom-section">
          <!-- LEFT SIDE: YouTube Video Section -->
          <div class="youtube-section-wrap">
            <div class="youtube-embed-box">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0" 
                title="YouTube Video for ${escapeHtml(experiment.name)}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <!-- RIGHT SIDE: YouTube Link, GitHub Link, Summary -->
          <div class="p3-links-summary-box">
            <div class="meta-link-row">
              <span class="meta-link-label">${ICONS.youtube} YouTube Link</span>
              <a class="meta-link-anchor" href="${escapeHtml(experiment.youtubeLink)}" target="_blank" rel="noopener noreferrer">
                ${escapeHtml(experiment.youtubeLink || "https://www.youtube.com/watch?v=dQw4w9WgXcQ")}
              </a>
            </div>

            <div class="meta-link-row">
              <span class="meta-link-label">${ICONS.github} GitHub Link</span>
              <a class="meta-link-anchor" href="${escapeHtml(experiment.githubLink)}" target="_blank" rel="noopener noreferrer">
                ${escapeHtml(experiment.githubLink || "https://github.com/karjunreddy/data-science-lab-mbu")}
              </a>
            </div>

            <div class="meta-link-row">
              <div class="summary-heading">${ICONS.book} Summary of Experiment</div>
              <p class="summary-text">${escapeHtml(experiment.summary)}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Wire Hover Preview
    wireHoverPreview($("#detailsPreviewMediaBox"));

    // Wire Dynamic Section Buttons -> Opens Page 4
    $$(".section-letter-btn", root).forEach(btn => {
      btn.addEventListener("click", () => {
        const secId = btn.getAttribute("data-sec-id");
        window.location.hash = `#/section/${experiment.id}/${secId}`;
      });
    });
  }

  /* -------------------------------------------------------------------------
     PAGE 4: INDIVIDUAL EXPERIMENT SECTION (VIDEO + CODE WITH LIVE RUNNER)
     - Header: "Experiment [NUMBER]" and "[SECTION LETTER]"
     - Left: Section video player
     - Below: "Code" section with independent vertical scrolling, line numbers,
              copy button, and interactive Run Code engine!
     ------------------------------------------------------------------------- */
  function renderPage4(root, expId, secId) {
    const experiment = experiments.find(e => e.id === Number(expId)) || experiments[0];
    const section = experiment.sections.find(s => s.id === secId) || experiment.sections[0];
    const sectionKey = `${experiment.id}-${section.id}`;

    const rawCode = section.code.trim();
    const lines = rawCode.split("\n");

    const codeRows = lines.map((line, idx) => `
      <div class="code-row">
        <span class="code-line-num">${idx + 1}</span>
        <span class="code-line-content">${highlightPython(line) || "&nbsp;"}</span>
      </div>
    `).join("");

    root.innerHTML = `
      <div class="p4-section-page">
        <!-- Back Navigation & Breadcrumbs -->
        <div class="back-nav-bar">
          <a class="back-btn" href="#/overview/${experiment.id}">${ICONS.arrowLeft} Back to Overview</a>
          <div class="breadcrumb-trail">
            Home / Experiment ${experiment.id} / <span>Part ${escapeHtml(section.letter)}</span>
          </div>
        </div>

        <!-- Section Top Header Bar -->
        <div class="p4-header-card">
          <div class="p4-title-group">
            <span class="p4-exp-num">Experiment ${experiment.id}</span>
            <span class="p4-sec-letter">${escapeHtml(section.letter)}</span>
            <span class="p4-sec-title">${escapeHtml(section.title)}</span>
          </div>
        </div>

        <div class="p4-main-layout">
          <!-- LEFT / CENTER: Video for this particular section -->
          <div class="p4-video-box">
            <video 
              controls 
              playsinline 
              preload="metadata" 
              src="${escapeHtml(section.video)}"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <!-- BELOW: Code Section with Independent Vertical Scrolling -->
          <div class="code-section-container">
            <div class="code-toolbar">
              <div class="code-toolbar__left">
                <div class="window-dots">
                  <span class="d1"></span><span class="d2"></span><span class="d3"></span>
                </div>
                <span class="code-title">Code: experiment_${experiment.id}_${escapeHtml(section.id)}.py</span>
              </div>
              <div class="code-toolbar__actions">
                <button id="copyCodeBtn" class="action-btn action-btn--copy" type="button" title="Copy Python Source">
                  ${ICONS.copy} Copy Code
                </button>
                <button id="runCodeBtn" class="action-btn action-btn--run" type="button" title="Run in Live Python Environment">
                  ${ICONS.play} Run Code
                </button>
              </div>
            </div>

            <!-- INDEPENDENT VERTICALLY SCROLLABLE CODE BOX (Webpage does not move!) -->
            <div class="code-scroll-viewport" id="independentCodeBox">
              <div class="code-table">
                ${codeRows}
              </div>
            </div>

            <!-- Live Terminal Output Area -->
            <div class="terminal-output-container">
              <div class="terminal-header">
                <div class="terminal-status">
                  ${ICONS.terminal} <span>Console Output</span>
                </div>
                <span id="runnerEngineStatus">Engine Ready</span>
              </div>
              <pre class="terminal-output-box" id="terminalOutputBox">Click "▶ Run Code" above to execute this Python experiment script live in your browser.</pre>
            </div>
          </div>
        </div>
      </div>
    `;

    // Video error fallback handling
    const secVideo = $("video", root);
    if (secVideo) {
      secVideo.addEventListener("error", () => {
        const videoBox = $(".p4-video-box", root);
        if (videoBox && !videoBox.querySelector(".video-ph-overlay")) {
          const ph = document.createElement("div");
          ph.className = "video-ph-overlay";
          ph.innerHTML = `
            <div class="ph-content">
              <div class="poster-center-play">${ICONS.play}</div>
              <h4>Screen Recording: Part ${escapeHtml(section.letter)}</h4>
              <p>${escapeHtml(section.title)}</p>
              <code>${escapeHtml(section.video)}</code>
              <span class="preview-badge"><span class="pulse-dot"></span> Ready for video file</span>
            </div>
          `;
          videoBox.appendChild(ph);
        }
      });
    }

    // Wire Copy Code Button
    const copyBtn = $("#copyCodeBtn");
    copyBtn.addEventListener("click", () => {
      copyToClipboard(rawCode, copyBtn);
    });

    // Wire Run Code Button
    const runBtn = $("#runCodeBtn");
    const termOutput = $("#terminalOutputBox");
    const engineStatus = $("#runnerEngineStatus");

    runBtn.addEventListener("click", async () => {
      runBtn.disabled = true;
      runBtn.innerHTML = `Running...`;
      termOutput.textContent = `>>> Executing Python script... Please wait.\n`;

      try {
        const result = await CodeRunner.run(rawCode, sectionKey);
        engineStatus.textContent = `${result.engine} (${result.duration})`;
        termOutput.textContent = result.stdout;
        if (result.stderr) {
          termOutput.textContent += `\n[STDERR]:\n${result.stderr}`;
        }
      } catch (err) {
        termOutput.textContent = `Error executing code: ${err.message}`;
      } finally {
        runBtn.disabled = false;
        runBtn.innerHTML = `${ICONS.play} Run Code`;
      }
    });
  }

  /* -------------------------------------------------------------------------
     COURSE MODULES (1 TO 5) VIEW & THEORY EXPLORER
     ------------------------------------------------------------------------- */
  function renderModulesPage(root, activeModId = 1) {
    const activeModule = courseModules.find(m => m.id === Number(activeModId)) || courseModules[0];

    const tabsHtml = courseModules.map(m => `
      <button class="module-tab-btn ${m.id === activeModule.id ? 'active' : ''}" data-mod-id="${m.id}" type="button">
        ${escapeHtml(m.number)}: ${escapeHtml(m.badge)}
      </button>
    `).join("");

    const topicsHtml = activeModule.topics.map(t => `
      <div class="topic-item">
        <h3 class="topic-title">${escapeHtml(t.heading)}</h3>
        <p class="topic-body">${escapeHtml(t.content)}</p>
        <ul class="topic-bullets">
          ${t.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join("")}
        </ul>
      </div>
    `).join("");

    root.innerHTML = `
      <div class="modules-page">
        <!-- Hero Bar -->
        <div class="modules-hero-bar">
          <div class="modules-hero-title">
            <h2>Course Modules &amp; Theory (22DS102006)</h2>
            <p>Comprehensive syllabus topics, foundational concepts, and mathematical formulas.</p>
          </div>
          <div class="module-tabs-nav">
            ${tabsHtml}
          </div>
        </div>

        <!-- Selected Module View -->
        <div class="module-card">
          <div class="module-header">
            <div>
              <span class="module-badge">${escapeHtml(activeModule.badge)}</span>
              <h1 class="module-main-title">${escapeHtml(activeModule.number)}: ${escapeHtml(activeModule.title)}</h1>
            </div>
          </div>

          <div class="module-summary-box">
            ${escapeHtml(activeModule.summary)}
          </div>

          <div class="module-topics-grid">
            ${topicsHtml}
          </div>
        </div>
      </div>
    `;

    // Wire Module Tabs
    $$(".module-tab-btn", root).forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-mod-id");
        window.location.hash = `#/modules/${id}`;
      });
    });
  }

  /* -------------------------------------------------------------------------
     CODE LAB SCRATCHPAD (Arbitrary In-Browser Python Execution)
     ------------------------------------------------------------------------- */
  function renderCodeLabPage(root) {
    const defaultSnippet = `import pandas as pd
import numpy as np

# Create sample dataset
data = {
    "Student": ["Arjun", "Kavya", "Harsha", "Sneha"],
    "Lab_Score": [98, 92, 85, 90],
    "Grade": ["A+", "A", "B+", "A"]
}

df = pd.DataFrame(data)
print("Data Science Laboratory - Live Code Lab")
print(df)
print("\\nMean Score:", df["Lab_Score"].mean())
`;

    root.innerHTML = `
      <div class="codelab-page">
        <div class="section-header-bar">
          <h2 class="section-header-bar__title">Interactive Code Lab</h2>
          <button id="runScratchpadBtn" class="action-btn action-btn--run" type="button">
            ${ICONS.play} Run Script
          </button>
        </div>

        <textarea id="scratchpadInput" class="codelab-editor-box" spellcheck="false">${defaultSnippet}</textarea>

        <div class="terminal-output-container" style="border-radius: var(--radius-lg);">
          <div class="terminal-header">
            <div class="terminal-status">${ICONS.terminal} <span>Console Output</span></div>
            <span id="scratchEngineStatus">Python 3.12 Engine</span>
          </div>
          <pre class="terminal-output-box" id="scratchOutputBox">Click "Run Script" to execute arbitrary Python code in real time.</pre>
        </div>
      </div>
    `;

    const runBtn = $("#runScratchpadBtn");
    const ta = $("#scratchpadInput");
    const outBox = $("#scratchOutputBox");
    const engStatus = $("#scratchEngineStatus");

    runBtn.addEventListener("click", async () => {
      runBtn.disabled = true;
      runBtn.innerHTML = `Running...`;
      outBox.textContent = `>>> Executing script in sandbox...\n`;

      try {
        const res = await CodeRunner.run(ta.value, "scratchpad");
        engStatus.textContent = `${res.engine} (${res.duration})`;
        outBox.textContent = res.stdout;
      } catch (e) {
        outBox.textContent = `Error: ${e.message}`;
      } finally {
        runBtn.disabled = false;
        runBtn.innerHTML = `${ICONS.play} Run Script`;
      }
    });
  }

  /* -------------------------------------------------------------------------
     ROUTER & VIEW DISPATCHER
     ------------------------------------------------------------------------- */
  function router() {
    const hash = window.location.hash || "#/";
    const view = $("#mainAppView");
    if (!view) return;

    // Update active nav button
    $$(".nav-item").forEach(item => {
      const target = item.getAttribute("href");
      if (target === "#/" && (hash === "#/" || hash === "")) {
        item.classList.add("active");
      } else if (target !== "#/" && hash.startsWith(target)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // 1. Page 1: Main University & Lab Page
    if (hash === "#/" || hash === "") {
      renderPage1(view);
    }
    // 2. Page 2: Experiment Preview Card (#/preview/:id)
    else if (hash.startsWith("#/preview/")) {
      const parts = hash.split("/");
      const expId = parts[2] || 1;
      renderPage2(view, expId);
    }
    // 3. Page 3: Experiment Overview & Details (#/overview/:id)
    else if (hash.startsWith("#/overview/")) {
      const parts = hash.split("/");
      const expId = parts[2] || 1;
      renderPage3(view, expId);
    }
    // 4. Page 4: Individual Experiment Section (#/section/:id/:sec)
    else if (hash.startsWith("#/section/")) {
      const parts = hash.split("/");
      const expId = parts[2] || 1;
      const secId = parts[3] || "a";
      renderPage4(view, expId, secId);
    }
    // Course Modules Theory Explorer (#/modules or #/modules/:id)
    else if (hash.startsWith("#/modules")) {
      const parts = hash.split("/");
      const modId = parts[2] || 1;
      renderModulesPage(view, modId);
    }
    // Code Lab Scratchpad (#/codelab)
    else if (hash === "#/codelab") {
      renderCodeLabPage(view);
    }
    // Fallback to Page 1
    else {
      renderPage1(view);
    }

    // Scroll smoothly to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("hashchange", router);
  window.addEventListener("DOMContentLoaded", router);
})();
