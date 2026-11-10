/* Jennifer Phonics — 1-minute bonus games */
const PhonicsGames = (() => {
  const GAME_SECONDS = 60;
  const $ = s => document.querySelector(s);
  const stage = $("#gameStage"), area = $("#gameArea"), scoreEl = $("#gameScore"), timeEl = $("#gameTime"),
    timeBar = $("#gameTimeBar"), nameEl = $("#gameName"), goalEl = $("#gameGoal"), over = $("#gameOver");

  let run = null; // {id, ctx, score, left, timers:[], cleanups:[], live}

  const list = [
    { id: "whack", icon: "🔨", name: "Whack-a-Mole", desc: "Bonk only the moles with words that follow the rule.", start: whack },
    { id: "balloon", icon: "🎈", name: "Balloon Shooter", desc: "Shoot the balloons with words that follow the rule.", start: balloons },
    { id: "memory", icon: "🎴", name: "Memory Match", desc: "Flip cards to match each picture with its word.", start: memory },
    { id: "ttt", icon: "⭕", name: "Tic-Tac-Toe", desc: "Pick the right spelling to claim a square. Play the computer or a friend.", start: tictactoe },
    { id: "sling", icon: "🐦", name: "Angry Bird Sling", desc: "Pull back the slingshot and hit the pig with a rule word.", start: sling },
    { id: "pac", icon: "🟡", name: "Phonics Muncher", desc: "Pac-Man style: eat the rule words, avoid the ghost!", start: pac },
    { id: "reversi", icon: "⚫", name: "Reversi 黑白棋", desc: "Spell right to place a disc and flip your rival's discs. Computer or a friend.", start: reversi },
    { id: "highcard", icon: "🃏", name: "High Card 猜大小", desc: "Watch the cards shuffle, then pick the one with the biggest number.", start: highcard },
    { id: "sort", icon: "🧺", name: "Sound Sort", desc: "Sort each word into the right basket by its sound or rule.", start: sort },
    { id: "bingo", icon: "🎯", name: "Listening Bingo", desc: "Listen to the word, tap it, and make a line for BINGO.", start: bingo },
    { id: "c4", icon: "🔴", name: "Connect Four 四子連線", desc: "Spell right to drop a disc. Get 4 in a row! Computer or a friend.", start: connect4 }
  ];

  /* ---------- framework ---------- */
  function play(id, ctx, onDone, allowReplay) {
    const g = list.find(x => x.id === id) || list[0];
    stop();
    stage.hidden = false; over.hidden = true; area.innerHTML = "";
    document.body.style.overflow = "hidden";
    run = { id: g.id, ctx, score: 0, left: GAME_SECONDS, timers: [], cleanups: [], live: true, onDone, allowReplay };
    nameEl.textContent = `${g.icon} ${g.name}`;
    goalEl.textContent = `Find: ${ctx.rule.title}`;
    setScore(0); tick();
    every(1000, () => { run.left--; tick(); if (run.left <= 0) finish(); });
    if (!ctx.targets.length) { area.innerHTML = `<p>No words for this rule.</p>`; return; }
    g.start(area, api());
  }
  function tick() { timeEl.textContent = run.left; timeBar.style.width = (run.left / GAME_SECONDS * 100) + "%"; }
  function setScore(s) { run.score = Math.max(0, s); scoreEl.textContent = run.score; }
  function every(ms, fn) { const t = setInterval(() => run && run.live && fn(), ms); run.timers.push(t); return t; }
  function after(ms, fn) { const t = setTimeout(() => run && run.live && fn(), ms); run.timers.push(t); return t; }
  function stop() {
    if (!run) return;
    run.live = false;
    run.timers.forEach(t => { clearInterval(t); clearTimeout(t); });
    run.cleanups.forEach(f => { try { f(); } catch {} });
    run.timers = []; run.cleanups = [];
  }
  function finish() {
    if (!run || !run.live) return;
    stop();
    $("#gameOverTitle").textContent = "⏰ Time's up!";
    $("#gameOverText").innerHTML = `Your score: <b style="font-size:28px">${run.score}</b> ${"⭐".repeat(Math.min(5, Math.ceil(run.score / 3)))}`;
    $("#gameAgain").hidden = !run.allowReplay;
    over.hidden = false;
  }
  function close() {
    const done = run && run.onDone;
    stop(); run = null;
    stage.hidden = true; area.innerHTML = ""; document.body.style.overflow = "";
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    if (done) done();
  }
  $("#gameClose").addEventListener("click", close);
  $("#gameBack").addEventListener("click", close);
  $("#gameAgain").addEventListener("click", () => { const r = run; play(r.id, r.ctx, r.onDone, r.allowReplay); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !stage.hidden) close(); });

  function api() {
    return {
      ctx: run.ctx,
      every, after,
      cleanup: f => run.cleanups.push(f),
      live: () => run && run.live,
      add(n, x, y) {
        setScore(run.score + n);
        run.ctx.beep(n > 0 ? "good" : "bad");
        if (x !== undefined) floatText(n > 0 ? `+${n}` : `${n}`, x, y, n > 0 ? "#39d98a" : "#ff5a5a");
      },
      goal: t => { goalEl.textContent = t; },
      /* random word: ~55% from rule, rest distractors */
      word(pTarget = 0.55) {
        const c = run.ctx, isT = !c.distractors.length || Math.random() < pTarget;
        const it = c.pick(isT ? c.targets : c.distractors);
        return { ...it, ok: isT };
      }
    };
  }
  function floatText(t, x, y, color) {
    const d = document.createElement("div");
    d.className = "float-score"; d.textContent = t; d.style.color = color;
    const r = area.getBoundingClientRect();
    d.style.left = (x - r.left) + "px"; d.style.top = (y - r.top) + "px";
    area.appendChild(d); setTimeout(() => d.remove(), 800);
  }
  const ruleGoal = c => `Hit words with: ${c.rule.title}`;

  /* ---------- 1. Whack-a-Mole ---------- */
  function whack(el, g) {
    g.goal(ruleGoal(g.ctx));
    el.innerHTML = `<div class="whack">${Array.from({ length: 9 }, () => `<div class="hole"><button class="mole"><span class="face">🐹</span><span class="label"></span></button></div>`).join("")}</div>`;
    const moles = [...el.querySelectorAll(".mole")];
    const busy = new Set();
    function pop() {
      const free = moles.filter(m => !busy.has(m)); if (!free.length) return;
      const m = g.ctx.pick(free), w = g.word();
      busy.add(m); m.dataset.ok = w.ok ? "1" : ""; m.dataset.word = w.word; m.dataset.hit = "";
      m.querySelector(".label").textContent = w.word; m.className = "mole up";
      g.after(1500 + Math.random() * 600, () => { m.className = "mole"; g.after(220, () => busy.delete(m)); });
    }
    g.every(650, () => { if (busy.size < 4) pop(); });
    pop();
    el.addEventListener("pointerdown", e => {
      const m = e.target.closest(".mole"); if (!m || !m.classList.contains("up") || m.dataset.hit) return;
      m.dataset.hit = "1";
      const ok = !!m.dataset.ok;
      m.classList.add(ok ? "hit" : "miss"); m.querySelector(".face").textContent = ok ? "😵" : "😜";
      g.add(ok ? 1 : -1, e.clientX, e.clientY);
      if (ok) g.ctx.speak(m.dataset.word, 1);
      g.after(300, () => { m.className = "mole"; g.after(220, () => { busy.delete(m); m.querySelector(".face").textContent = "🐹"; }); });
    });
  }

  /* ---------- 2. Balloon Shooter ---------- */
  function balloons(el, g) {
    g.goal(`Shoot words with: ${g.ctx.rule.title}`);
    el.innerHTML = `<div class="sky"><div class="cannon">🔫</div></div>`;
    const sky = el.querySelector(".sky"), cannon = sky.querySelector(".cannon");
    cannon.textContent = "🏹";
    const colors = ["#ff5a5f", "#2f6fde", "#1f9d57", "#9b51e0", "#ff9f1c", "#e83e8c", "#00a6a6"];
    const live = new Set();
    function spawn() {
      const w = g.word(0.5), b = document.createElement("button");
      b.className = "balloon"; b.textContent = w.word; b.dataset.ok = w.ok ? "1" : ""; b.dataset.word = w.word;
      b.style.background = g.ctx.pick(colors);
      const W = sky.clientWidth, bw = W < 600 ? 92 : 112;
      b.style.left = (10 + Math.random() * (W - bw - 20)) + "px";
      const speed = 45 + Math.random() * 35; // px per second
      const o = { b, y: -140, speed, sway: Math.random() * 6.28 };
      b.style.bottom = o.y + "px";
      sky.appendChild(b); live.add(o);
    }
    let last = performance.now(), raf;
    function loop(t) {
      if (!g.live()) return;
      const dt = Math.min(.05, (t - last) / 1000); last = t;
      const H = sky.clientHeight;
      for (const o of live) {
        o.y += o.speed * dt; o.sway += dt * 2;
        o.b.style.bottom = o.y + "px"; o.b.style.transform = `translateX(${Math.sin(o.sway) * 10}px)`;
        if (o.y > H + 20) { o.b.remove(); live.delete(o); }
      }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    g.cleanup(() => cancelAnimationFrame(raf));
    g.every(900, spawn); spawn();
    sky.addEventListener("pointerdown", e => {
      const b = e.target.closest(".balloon");
      const r = sky.getBoundingClientRect();
      const tx = e.clientX - r.left, ty = e.clientY - r.top;
      const ang = Math.atan2(ty - (r.height - 40), tx - r.width / 2) * 180 / Math.PI + 90;
      cannon.style.transform = `rotate(${Math.max(-70, Math.min(70, ang))}deg)`;
      const dart = document.createElement("div");
      dart.className = "dart"; dart.style.left = (r.width / 2) + "px"; dart.style.top = (r.height - 50) + "px";
      sky.appendChild(dart);
      requestAnimationFrame(() => { dart.style.left = tx + "px"; dart.style.top = ty + "px"; });
      setTimeout(() => dart.remove(), 220);
      if (!b || b.classList.contains("popped")) return;
      g.after(170, () => {
        b.classList.add("popped");
        const ok = !!b.dataset.ok;
        g.add(ok ? 1 : -1, e.clientX, e.clientY);
        if (ok) g.ctx.speak(b.dataset.word, 1);
        for (const o of live) if (o.b === b) live.delete(o);
        setTimeout(() => b.remove(), 260);
      });
    });
  }

  /* ---------- 3. Memory Match ---------- */
  function memory(el, g) {
    g.goal("Match each picture with its word");
    function deal() {
      const n = Math.min(6, g.ctx.targets.length);
      const set = g.ctx.shuffle(g.ctx.targets).slice(0, n);
      const cards = g.ctx.shuffle(set.flatMap((it, k) => [{ k, face: it.pic, emoji: true, word: it.word }, { k, face: it.word, emoji: false, word: it.word }]));
      el.innerHTML = `<div class="memory">${cards.map((c, i) => `<button class="mcard" data-i="${i}"><div class="inner"><div class="face-b">❓</div><div class="face-f ${c.emoji ? "emoji" : ""}">${g.ctx.esc(c.face)}</div></div></button>`).join("")}</div>`;
      let open = [], lock = false, left = n;
      el.querySelector(".memory").addEventListener("click", e => {
        const b = e.target.closest(".mcard"); if (!b || lock || b.classList.contains("flip") || b.classList.contains("done")) return;
        const c = cards[+b.dataset.i];
        b.classList.add("flip"); open.push({ b, c });
        if (!c.emoji) g.ctx.speak(c.word, 1);
        if (open.length < 2) return;
        const [a, d] = open; open = [];
        if (a.c.k === d.c.k) {
          a.b.classList.add("done"); d.b.classList.add("done");
          const r = d.b.getBoundingClientRect(); g.add(1, r.left + r.width / 2, r.top);
          g.ctx.speak(a.c.word, 1);
          if (--left === 0) g.after(700, deal);
        } else {
          lock = true;
          g.after(800, () => { a.b.classList.remove("flip"); d.b.classList.remove("flip"); lock = false; });
        }
      });
    }
    deal();
  }

  /* ---------- 4. Tic-Tac-Toe ---------- */
  function tictactoe(el, g) {
    g.goal("Choose the right spelling to claim a square!");
    let mode = "cpu", board, cells, turn, wins = { X: 0, O: 0 }, busy = false;
    el.innerHTML = `<div class="ttt-wrap">
      <div class="ttt-mode"><button data-m="cpu" class="active">🧑 vs 🤖 Computer</button><button data-m="pvp">🧑 vs 🧑 2 Players</button></div>
      <div class="ttt-status" id="tttStatus"></div>
      <div class="ttt" id="ttt"></div>
      <div class="ttt-ask" id="tttAsk"></div>
    </div>`;
    const status = el.querySelector("#tttStatus"), grid = el.querySelector("#ttt"), ask = el.querySelector("#tttAsk");
    el.querySelector(".ttt-mode").onclick = e => {
      const b = e.target.closest("button"); if (!b) return;
      mode = b.dataset.m; wins = { X: 0, O: 0 };
      [...b.parentNode.children].forEach(x => x.classList.toggle("active", x === b));
      newBoard();
    };
    const LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const winner = b => { for (const [a, c, d] of LINES) if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a]; return b.every(Boolean) ? "draw" : null; };
    function newBoard() {
      board = Array(9).fill(null); turn = "X"; busy = false; ask.innerHTML = "";
      const pool = g.ctx.shuffle(g.ctx.targets);
      cells = Array.from({ length: 9 }, (_, i) => pool[i % pool.length]);
      draw(); say();
    }
    function draw() {
      grid.innerHTML = board.map((v, i) => `<button data-i="${i}" class="${v || ""}">${v ? (v === "X" ? "❌" : "⭕") : cells[i].pic}</button>`).join("");
    }
    function say() {
      const who = mode === "cpu" ? (turn === "X" ? "Your turn (❌)" : "Computer is thinking… (⭕)") : `Player ${turn === "X" ? "1 ❌" : "2 ⭕"}: your turn`;
      status.textContent = `${who}   ·   ❌ ${wins.X} – ${wins.O} ⭕`;
    }
    grid.onclick = e => {
      const b = e.target.closest("button"); if (!b || busy) return;
      const i = +b.dataset.i; if (board[i] || (mode === "cpu" && turn === "O")) return;
      const it = cells[i];
      g.ctx.speak(it.word, .9);
      const others = g.ctx.shuffle(g.ctx.targets.filter(t => t.word !== it.word)).slice(0, 2).map(t => t.word);
      const opts = g.ctx.shuffle([it.word, ...others]);
      ask.innerHTML = `<span style="align-self:center">${it.pic} is…</span>` + opts.map(o => `<button data-w="${g.ctx.esc(o)}">${g.ctx.esc(o)}</button>`).join("");
      ask.onclick = ev => {
        const c = ev.target.closest("button"); if (!c) return;
        ask.innerHTML = ""; ask.onclick = null;
        if (c.dataset.w === it.word) { board[i] = turn; g.ctx.beep("good"); }
        else { g.ctx.beep("bad"); status.textContent = `Oops! It was “${it.word}”. Turn lost.`; }
        endTurn();
      };
    };
    function endTurn() {
      draw();
      const w = winner(board);
      if (w) {
        busy = true;
        if (w === "draw") status.textContent = "🤝 Draw!";
        else {
          wins[w]++;
          status.textContent = mode === "cpu" ? (w === "X" ? "🎉 You win!" : "🤖 Computer wins!") : `🎉 Player ${w === "X" ? "1 ❌" : "2 ⭕"} wins!`;
          if (w === "X" || mode === "pvp") { const r = grid.getBoundingClientRect(); g.add(w === "X" ? 3 : 0, r.left + r.width / 2, r.top); }
        }
        g.after(1400, newBoard); return;
      }
      turn = turn === "X" ? "O" : "X"; say();
      if (mode === "cpu" && turn === "O") { busy = true; g.after(700, cpuMove); }
    }
    function cpuMove() {
      const empty = board.map((v, i) => v ? null : i).filter(v => v !== null);
      const tryWin = s => empty.find(i => { const b = [...board]; b[i] = s; return winner(b) === s; });
      let m;
      if (Math.random() < 0.25) m = g.ctx.pick(empty);
      else m = tryWin("O") ?? tryWin("X") ?? (board[4] ? null : 4) ?? g.ctx.pick(empty.filter(i => [0, 2, 6, 8].includes(i))) ?? g.ctx.pick(empty);
      if (m === undefined || m === null || board[m]) m = g.ctx.pick(empty);
      board[m] = "O"; busy = false; g.ctx.beep("tap");
      endTurn();
    }
    newBoard();
  }

  /* ---------- 5. Angry Bird Sling ---------- */
  function sling(el, g) {
    g.goal(`Hit the pig with: ${g.ctx.rule.title}`);
    const W = 1000, H = 560, AX = 170, AY = 390, GRAV = 900;
    el.innerHTML = `<canvas width="${W}" height="${H}"></canvas>`;
    const cv = el.querySelector("canvas"), c = cv.getContext("2d");
    const fit = () => { const r = el.getBoundingClientRect(); const s = Math.min(r.width / W, r.height / H); cv.style.width = W * s + "px"; cv.style.height = H * s + "px"; };
    fit(); window.addEventListener("resize", fit); g.cleanup(() => window.removeEventListener("resize", fit));
    let bird = { x: AX, y: AY, vx: 0, vy: 0, state: "ready" }, drag = false, targets = [], effects = [];
    const slots = [{ x: 560, y: 470 }, { x: 720, y: 330 }, { x: 880, y: 470 }, { x: 680, y: 170 }, { x: 880, y: 240 }];
    function makeTargets() {
      const pos = g.ctx.shuffle(slots).slice(0, 3);
      targets = pos.map((p, i) => ({ ...p, ...g.word(i === 0 ? 1 : 0.35), alive: true }));
      targets = g.ctx.shuffle(targets);
    }
    function respawn(t) {
      const used = targets.filter(x => x !== t).map(x => x.x + "," + x.y);
      const p = g.ctx.pick(slots.filter(s => !used.includes(s.x + "," + s.y)));
      const needOk = !targets.some(x => x !== t && x.ok);
      Object.assign(t, p, g.word(needOk ? 1 : 0.45), { alive: true });
    }
    makeTargets();
    const pt = e => { const r = cv.getBoundingClientRect(); return { x: (e.clientX - r.left) * W / r.width, y: (e.clientY - r.top) * H / r.height }; };
    cv.addEventListener("pointerdown", e => { const p = pt(e); if (bird.state === "ready" && Math.hypot(p.x - AX, p.y - AY) < 90) { drag = true; cv.setPointerCapture(e.pointerId); } });
    cv.addEventListener("pointermove", e => {
      if (!drag) return; const p = pt(e);
      let dx = p.x - AX, dy = p.y - AY; const d = Math.hypot(dx, dy), max = 130;
      if (d > max) { dx *= max / d; dy *= max / d; }
      bird.x = AX + dx; bird.y = AY + dy;
    });
    cv.addEventListener("pointerup", () => {
      if (!drag) return; drag = false;
      const dx = AX - bird.x, dy = AY - bird.y;
      if (Math.hypot(dx, dy) < 15) { bird.x = AX; bird.y = AY; return; }
      bird.vx = dx * 7.2; bird.vy = dy * 7.2; bird.state = "fly"; g.ctx.beep("tap");
    });
    let last = performance.now(), raf;
    function step(t) {
      if (!g.live()) return;
      const dt = Math.min(.033, (t - last) / 1000); last = t;
      if (bird.state === "fly") {
        bird.vy += GRAV * dt; bird.x += bird.vx * dt; bird.y += bird.vy * dt;
        for (const tg of targets) {
          if (!tg.alive) continue;
          if (Math.abs(bird.x - tg.x) < 78 && bird.y > tg.y - 80 && bird.y < tg.y + 34) {
            tg.alive = false; bird.state = "reset";
            const r = cv.getBoundingClientRect();
            g.add(tg.ok ? 1 : -1, r.left + tg.x * r.width / W, r.top + (tg.y - 60) * r.height / H);
            effects.push({ x: tg.x, y: tg.y - 30, t: 0, ok: tg.ok });
            if (tg.ok) g.ctx.speak(tg.word, 1);
            g.after(500, () => respawn(tg));
          }
        }
        if (bird.x > W + 60 || bird.y > H + 60 || bird.x < -60) bird.state = "reset";
      }
      if (bird.state === "reset") { bird = { x: AX, y: AY, vx: 0, vy: 0, state: "ready" }; }
      effects.forEach(f => f.t += dt); effects = effects.filter(f => f.t < .6);
      draw(); raf = requestAnimationFrame(step);
    }
    function draw() {
      const sky = c.createLinearGradient(0, 0, 0, H); sky.addColorStop(0, "#7ec8ff"); sky.addColorStop(1, "#e3f5ff");
      c.fillStyle = sky; c.fillRect(0, 0, W, H);
      c.fillStyle = "#6cc04a"; c.fillRect(0, H - 50, W, 50);
      // targets on platforms
      for (const tg of targets) {
        c.fillStyle = "#8b5a2b"; c.fillRect(tg.x - 80, tg.y + 34, 160, 14);
        if (!tg.alive) continue;
        c.font = "54px 'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif"; c.textAlign = "center"; c.textBaseline = "alphabetic";
        c.fillText("🐷", tg.x, tg.y - 34);
        c.fillStyle = "#fff"; c.strokeStyle = "#5b3a1e"; c.lineWidth = 4;
        roundRect(tg.x - 76, tg.y - 26, 152, 58, 12); c.fill(); c.stroke();
        c.fillStyle = "#23262f"; c.font = `bold ${tg.word.length > 9 ? 22 : 28}px Andika, sans-serif`; c.textBaseline = "middle";
        c.fillText(tg.word, tg.x, tg.y + 3);
      }
      for (const f of effects) { c.globalAlpha = 1 - f.t / .6; c.font = `${50 + f.t * 80}px sans-serif`; c.textAlign = "center"; c.fillText(f.ok ? "💥" : "💨", f.x, f.y); c.globalAlpha = 1; }
      // slingshot
      c.strokeStyle = "#6b3e1d"; c.lineWidth = 16; c.lineCap = "round";
      c.beginPath(); c.moveTo(AX, H - 50); c.lineTo(AX, AY + 40); c.lineTo(AX - 26, AY - 20); c.moveTo(AX, AY + 40); c.lineTo(AX + 26, AY - 20); c.stroke();
      if (bird.state === "ready") {
        c.strokeStyle = "#3a1f0d"; c.lineWidth = 6;
        c.beginPath(); c.moveTo(AX - 26, AY - 20); c.lineTo(bird.x, bird.y); c.lineTo(AX + 26, AY - 20); c.stroke();
        if (drag) { // trajectory preview
          let x = bird.x, y = bird.y, vx = (AX - bird.x) * 7.2, vy = (AY - bird.y) * 7.2;
          c.fillStyle = "rgba(255,255,255,.85)";
          for (let i = 0; i < 18; i++) { const s = .045; vy += GRAV * s; x += vx * s; y += vy * s; c.beginPath(); c.arc(x, y, 4, 0, 7); c.fill(); }
        }
      }
      c.font = "52px 'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif"; c.textAlign = "center"; c.textBaseline = "middle";
      c.fillText("🐦", bird.x, bird.y);
      if (bird.state === "ready" && !drag) { c.fillStyle = "#23262f"; c.font = "bold 20px Andika, sans-serif"; c.fillText("Pull back & let go!", AX, AY - 80); }
    }
    function roundRect(x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
    raf = requestAnimationFrame(step); g.cleanup(() => cancelAnimationFrame(raf));
  }

  /* ---------- 6. Phonics Muncher (Pac-Man style) ---------- */
  function pac(el, g) {
    g.goal(`Eat words with: ${g.ctx.rule.title} · avoid 👻`);
    const MAP = [
      "#############",
      "#.....#.....#",
      "#.###.#.###.#",
      "#...........#",
      "#.#.##.##.#.#",
      "#.#.......#.#",
      "#.##.#.#.##.#",
      "#...........#",
      "#############"
    ];
    const C = 72, COLS = MAP[0].length, ROWS = MAP.length, W = COLS * C, H = ROWS * C;
    el.innerHTML = `<canvas width="${W}" height="${H}"></canvas>
      <div class="dpad"><span></span><button data-d="0,-1">▲</button><span></span><button data-d="-1,0">◀</button><span></span><button data-d="1,0">▶</button><span></span><button data-d="0,1">▼</button><span></span></div>`;
    const cv = el.querySelector("canvas"), c = cv.getContext("2d");
    const fit = () => { const r = el.getBoundingClientRect(); const s = Math.min(r.width / W, (r.height - 10) / H); cv.style.width = W * s + "px"; cv.style.height = H * s + "px"; };
    fit(); window.addEventListener("resize", fit); g.cleanup(() => window.removeEventListener("resize", fit));
    const open = (x, y) => MAP[y] && MAP[y][x] === ".";
    const cellsOpen = []; MAP.forEach((row, y) => [...row].forEach((ch, x) => { if (ch === ".") cellsOpen.push({ x, y }); }));
    const short = arr => arr.filter(w => w.word.length <= 9);
    const tg = short(g.ctx.targets).length ? short(g.ctx.targets) : g.ctx.targets;
    const ds = short(g.ctx.distractors);
    const P = { x: 1, y: 1, px: 1, py: 1, dir: [1, 0], want: [1, 0], t: 0, safe: 0 };
    const ghosts = [{ x: 11, y: 7, px: 11, py: 7, t: 0, color: "#ff5a5f" }, { x: 11, y: 1, px: 11, py: 1, t: 0, color: "#a97bff" }];
    let words = [];
    function placeWord(ok) {
      const taken = new Set(words.map(w => w.x + "," + w.y).concat([P.x + "," + P.y]));
      const spots = cellsOpen.filter(s => !taken.has(s.x + "," + s.y) && Math.abs(s.x - P.x) + Math.abs(s.y - P.y) > 2);
      const s = g.ctx.pick(spots), it = ok || !ds.length ? g.ctx.pick(tg) : g.ctx.pick(ds);
      words.push({ ...s, word: it.word, ok: ok || !ds.length });
    }
    [true, true, true, false, false, false].forEach(placeWord);
    const setDir = d => { P.want = d; };
    const keys = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0], w: [0, -1], s: [0, 1], a: [-1, 0], d: [1, 0] };
    const onKey = e => { const d = keys[e.key]; if (d) { setDir(d); e.preventDefault(); } };
    window.addEventListener("keydown", onKey); g.cleanup(() => window.removeEventListener("keydown", onKey));
    el.querySelector(".dpad").addEventListener("pointerdown", e => { const b = e.target.closest("button"); if (b) setDir(b.dataset.d.split(",").map(Number)); });
    let sw = null;
    cv.addEventListener("pointerdown", e => { sw = { x: e.clientX, y: e.clientY }; });
    cv.addEventListener("pointerup", e => { if (!sw) return; const dx = e.clientX - sw.x, dy = e.clientY - sw.y; if (Math.max(Math.abs(dx), Math.abs(dy)) > 20) setDir(Math.abs(dx) > Math.abs(dy) ? [Math.sign(dx), 0] : [0, Math.sign(dy)]); sw = null; });

    const STEP = .17, GSTEP = .34;
    function moveP() {
      P.px = P.x; P.py = P.y;
      if (open(P.x + P.want[0], P.y + P.want[1])) P.dir = P.want;
      if (open(P.x + P.dir[0], P.y + P.dir[1])) { P.x += P.dir[0]; P.y += P.dir[1]; }
      const hit = words.findIndex(w => w.x === P.x && w.y === P.y);
      if (hit >= 0) {
        const w = words[hit]; words.splice(hit, 1);
        const r = cv.getBoundingClientRect();
        g.add(w.ok ? 1 : -1, r.left + (w.x + .5) * C * r.width / W, r.top + w.y * C * r.height / H);
        if (w.ok) g.ctx.speak(w.word, 1);
        placeWord(w.ok || !words.some(x => x.ok));
      }
    }
    function moveG(gh) {
      gh.px = gh.x; gh.py = gh.y;
      const opts = [[1, 0], [-1, 0], [0, 1], [0, -1]].filter(([dx, dy]) => open(gh.x + dx, gh.y + dy));
      const back = opts.filter(([dx, dy]) => !(gh.x + dx === gh.lx && gh.y + dy === gh.ly));
      const pool = back.length ? back : opts;
      let d;
      if (Math.random() < .55) d = pool.sort((a, b) => (Math.abs(gh.x + a[0] - P.x) + Math.abs(gh.y + a[1] - P.y)) - (Math.abs(gh.x + b[0] - P.x) + Math.abs(gh.y + b[1] - P.y)))[0];
      else d = g.ctx.pick(pool);
      gh.lx = gh.x; gh.ly = gh.y; gh.x += d[0]; gh.y += d[1];
    }
    function caught() {
      if (P.safe > 0) return;
      for (const gh of ghosts) if (gh.x === P.x && gh.y === P.y) {
        const r = cv.getBoundingClientRect();
        g.add(-1, r.left + (P.x + .5) * C * r.width / W, r.top + P.y * C * r.height / H);
        P.x = P.px = 1; P.y = P.py = 1; P.safe = 1.5; return;
      }
    }
    let last = performance.now(), raf, mouth = 0;
    function frame(t) {
      if (!g.live()) return;
      const dt = Math.min(.05, (t - last) / 1000); last = t; mouth += dt * 10; P.safe = Math.max(0, P.safe - dt);
      P.t += dt; if (P.t >= STEP) { P.t -= STEP; moveP(); caught(); }
      for (const gh of ghosts) { gh.t += dt; if (gh.t >= GSTEP) { gh.t -= GSTEP; moveG(gh); caught(); } }
      draw(); raf = requestAnimationFrame(frame);
    }
    const lerp = (a, b, k) => a + (b - a) * Math.min(1, k);
    function draw() {
      c.fillStyle = "#0b1030"; c.fillRect(0, 0, W, H);
      MAP.forEach((row, y) => [...row].forEach((ch, x) => {
        if (ch === "#") { c.fillStyle = "#2338a8"; c.fillRect(x * C + 4, y * C + 4, C - 8, C - 8); }
        else { c.fillStyle = "#ffd9a8"; c.beginPath(); c.arc(x * C + C / 2, y * C + C / 2, 3, 0, 7); c.fill(); }
      }));
      for (const w of words) {
        const cx = w.x * C + C / 2, cy = w.y * C + C / 2;
        c.font = `bold ${w.word.length > 6 ? 17 : 21}px Andika, sans-serif`;
        const tw = Math.max(C - 12, c.measureText(w.word).width + 14);
        c.fillStyle = "#fff"; c.beginPath(); c.roundRect ? c.roundRect(cx - tw / 2, cy - 17, tw, 34, 10) : c.rect(cx - tw / 2, cy - 17, tw, 34); c.fill();
        c.fillStyle = "#23262f"; c.textAlign = "center"; c.textBaseline = "middle"; c.fillText(w.word, cx, cy + 1);
      }
      const k = P.t / STEP, px = lerp(P.px, P.x, k) * C + C / 2, py = lerp(P.py, P.y, k) * C + C / 2;
      const ang = Math.atan2(P.dir[1], P.dir[0]), m = .25 + Math.abs(Math.sin(mouth)) * .3;
      c.globalAlpha = P.safe > 0 && Math.floor(P.safe * 8) % 2 ? .35 : 1;
      c.fillStyle = "#ffd23f"; c.beginPath(); c.moveTo(px, py); c.arc(px, py, C * .36, ang + m, ang + Math.PI * 2 - m); c.closePath(); c.fill();
      c.globalAlpha = 1;
      for (const gh of ghosts) {
        const gk = gh.t / GSTEP, gx = lerp(gh.px, gh.x, gk) * C + C / 2, gy = lerp(gh.py, gh.y, gk) * C + C / 2, r = C * .34;
        c.fillStyle = gh.color; c.beginPath(); c.arc(gx, gy - 4, r, Math.PI, 0); c.lineTo(gx + r, gy + r);
        for (let i = 0; i < 4; i++) c.lineTo(gx + r - (i + .5) * r / 2, gy + r - (i % 2 ? 0 : 8));
        c.lineTo(gx - r, gy + r); c.closePath(); c.fill();
        c.fillStyle = "#fff"; c.beginPath(); c.arc(gx - 9, gy - 6, 7, 0, 7); c.arc(gx + 9, gy - 6, 7, 0, 7); c.fill();
        c.fillStyle = "#123"; c.beginPath(); c.arc(gx - 8, gy - 5, 3, 0, 7); c.arc(gx + 10, gy - 5, 3, 0, 7); c.fill();
      }
    }
    raf = requestAnimationFrame(frame); g.cleanup(() => cancelAnimationFrame(raf));
  }

  /* ---------- shared: spelling question ---------- */
  function askSpelling(askEl, g, it, cb) {
    g.ctx.speak(it.word, .9);
    const others = g.ctx.shuffle(g.ctx.targets.filter(t => t.word !== it.word)).slice(0, 2).map(t => t.word);
    const opts = g.ctx.shuffle([it.word, ...others]);
    askEl.innerHTML = `<span style="align-self:center;font-size:30px">${it.pic}</span>` + opts.map(o => `<button data-w="${g.ctx.esc(o)}">${g.ctx.esc(o)}</button>`).join("");
    askEl.onclick = ev => {
      const c = ev.target.closest("button"); if (!c) return;
      askEl.innerHTML = ""; askEl.onclick = null;
      const ok = c.dataset.w === it.word;
      g.ctx.beep(ok ? "good" : "bad");
      cb(ok);
    };
  }
  function modeBar(el, onChange) {
    el.innerHTML = `<button data-m="cpu" class="active">🧑 vs 🤖 Computer</button><button data-m="pvp">🧑 vs 🧑 2 Players</button>`;
    el.onclick = e => {
      const b = e.target.closest("button"); if (!b) return;
      [...el.children].forEach(x => x.classList.toggle("active", x === b));
      onChange(b.dataset.m);
    };
  }

  /* ---------- 7. Reversi 黑白棋 ---------- */
  function reversi(el, g) {
    g.goal("Answer right to place your disc. Flip the most!");
    const N = 6;
    el.innerHTML = `<div class="ttt-wrap"><div class="ttt-mode"></div><div class="ttt-status"></div><div class="rev"></div><div class="ttt-ask"></div></div>`;
    const status = el.querySelector(".ttt-status"), grid = el.querySelector(".rev"), ask = el.querySelector(".ttt-ask");
    let mode = "cpu", b, turn, busy;
    modeBar(el.querySelector(".ttt-mode"), m => { mode = m; reset(); });
    const DIRS = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];
    const flips = (x, y, p, board = b) => {
      if (board[y][x]) return [];
      const o = p === "B" ? "W" : "B", out = [];
      for (const [dx, dy] of DIRS) {
        const line = []; let i = x + dx, j = y + dy;
        while (i >= 0 && j >= 0 && i < N && j < N && board[j][i] === o) { line.push([i, j]); i += dx; j += dy; }
        if (line.length && i >= 0 && j >= 0 && i < N && j < N && board[j][i] === p) out.push(...line);
      }
      return out;
    };
    const moves = p => { const m = []; for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { const f = flips(x, y, p); if (f.length) m.push({ x, y, f }); } return m; };
    const count = p => b.flat().filter(v => v === p).length;
    function reset() {
      b = Array.from({ length: N }, () => Array(N).fill(null));
      b[2][2] = b[3][3] = "W"; b[2][3] = b[3][2] = "B";
      turn = "B"; busy = false; ask.innerHTML = ""; draw(); say();
    }
    function draw() {
      const legal = new Set(((mode === "cpu" && turn === "W") || busy ? [] : moves(turn)).map(m => m.x + "," + m.y));
      grid.innerHTML = b.map((row, y) => row.map((v, x) => `<button data-x="${x}" data-y="${y}" class="${legal.has(x + "," + y) ? "legal" : ""}">${v ? `<i class="disc ${v}"></i>` : ""}</button>`).join("")).join("");
    }
    function say(msg) {
      const who = mode === "cpu" ? (turn === "B" ? "Your turn ⚫" : "Computer ⚪ thinking…") : `Player ${turn === "B" ? "1 ⚫" : "2 ⚪"}`;
      status.textContent = `${msg ? msg + " · " : ""}${who}   ·   ⚫ ${count("B")} – ${count("W")} ⚪`;
    }
    grid.onclick = e => {
      const c = e.target.closest("button"); if (!c || busy || (mode === "cpu" && turn === "W")) return;
      const x = +c.dataset.x, y = +c.dataset.y, f = flips(x, y, turn); if (!f.length) return;
      busy = true; draw();
      askSpelling(ask, g, g.ctx.pick(g.ctx.targets), ok => {
        busy = false;
        if (ok) place(x, y, f); else { say("Oops, turn lost"); next(); }
      });
    };
    function place(x, y, f) {
      b[y][x] = turn; f.forEach(([i, j]) => b[j][i] = turn);
      if (turn === "B" || mode === "pvp") { const r = grid.getBoundingClientRect(); if (turn === "B") g.add(1, r.left + r.width / 2, r.top); }
      next();
    }
    function next() {
      const other = turn === "B" ? "W" : "B";
      if (moves(other).length) turn = other;
      else if (!moves(turn).length) return end();
      draw(); say();
      if (mode === "cpu" && turn === "W") { busy = true; g.after(700, cpu); }
    }
    function cpu() {
      busy = false;
      const ms = moves("W"); if (!ms.length) return next();
      const corner = ms.find(m => (m.x === 0 || m.x === N - 1) && (m.y === 0 || m.y === N - 1));
      const m = corner || (Math.random() < .3 ? g.ctx.pick(ms) : ms.sort((a, c) => c.f.length - a.f.length)[0]);
      place(m.x, m.y, m.f);
    }
    function end() {
      const B = count("B"), W = count("W"); busy = true; draw();
      status.textContent = B === W ? "🤝 Draw!" : mode === "cpu" ? (B > W ? `🎉 You win! ${B}–${W}` : `🤖 Computer wins ${W}–${B}`) : `🎉 ${B > W ? "Player 1 ⚫" : "Player 2 ⚪"} wins!`;
      if (B > W) { const r = grid.getBoundingClientRect(); g.add(3, r.left + r.width / 2, r.top); }
      g.after(2000, reset);
    }
    reset();
  }

  /* ---------- 8. High Card 洗牌猜大小 ---------- */
  function highcard(el, g) {
    g.goal("Remember the biggest number, watch the shuffle, pick it!");
    el.innerHTML = `<div class="hc-wrap"><div class="ttt-status" id="hcStatus"></div><div class="hc-table"></div><button id="hcGo" class="primary">▶ Deal</button></div>`;
    const table = el.querySelector(".hc-table"), status = el.querySelector("#hcStatus"), go = el.querySelector("#hcGo");
    let round = 0, cards = [], phase = "idle";
    const slotX = (i, n) => `calc(${(i + .5) * 100 / n}% - 70px)`;
    function deal() {
      round++; phase = "show"; go.hidden = true;
      const n = round < 3 ? 3 : 4;
      const nums = g.ctx.shuffle(Array.from({ length: 99 }, (_, i) => i + 1)).slice(0, n);
      const words = g.ctx.shuffle(g.ctx.targets).slice(0, n);
      table.innerHTML = "";
      cards = nums.map((num, i) => {
        const d = document.createElement("button");
        d.className = "hc-card up";
        d.innerHTML = `<div class="hc-front"><b>${num}</b><span>${g.ctx.esc(words[i % words.length].word)}</span></div><div class="hc-back">🂠</div>`;
        d.style.left = slotX(i, n); table.appendChild(d);
        return { d, num, word: words[i % words.length].word, pos: i };
      });
      status.textContent = "👀 Remember the biggest number!";
      g.after(2200, () => { cards.forEach(c => c.d.classList.remove("up")); status.textContent = "🔀 Shuffling…"; g.after(500, () => shuffleCards(4 + round, Math.max(220, 520 - round * 40))); });
    }
    function shuffleCards(times, ms) {
      if (times <= 0) { phase = "pick"; status.textContent = "👉 Which card has the biggest number?"; return; }
      const n = cards.length, a = Math.floor(Math.random() * n); let c = Math.floor(Math.random() * (n - 1)); if (c >= a) c++;
      const A = cards.find(k => k.pos === a), C = cards.find(k => k.pos === c);
      A.pos = c; C.pos = a;
      [A, C].forEach(k => { k.d.style.transitionDuration = ms + "ms"; k.d.style.left = slotX(k.pos, n); });
      A.d.style.transform = "translateY(-30px)"; C.d.style.transform = "translateY(30px)";
      g.after(ms, () => { A.d.style.transform = C.d.style.transform = ""; shuffleCards(times - 1, ms); });
    }
    table.onclick = e => {
      const d = e.target.closest(".hc-card"); if (!d || phase !== "pick") return;
      phase = "done";
      const pickC = cards.find(k => k.d === d), best = cards.reduce((m, k) => k.num > m.num ? k : m);
      cards.forEach(k => k.d.classList.add("up"));
      best.d.classList.add("best");
      const ok = pickC === best, r = d.getBoundingClientRect();
      g.add(ok ? 1 : 0, r.left + r.width / 2, r.top);
      if (!ok) g.ctx.beep("bad");
      status.innerHTML = ok ? `🎉 Yes! ${best.num} is the biggest. Read it: <b>${g.ctx.esc(best.word)}</b>` : `Oh no! The biggest was ${best.num} (<b>${g.ctx.esc(best.word)}</b>)`;
      g.ctx.speak(best.word, .9);
      g.after(2000, deal);
    };
    go.onclick = deal;
    status.textContent = "Each card has a number and a word.";
  }

  /* ---------- 9. Sound Sort ---------- */
  function sort(el, g) {
    const c = g.ctx;
    let left, right, deck;
    if (c.sounds && c.sounds.length >= 2) {
      const [a, b] = c.sounds;
      left = { label: a.label, items: a.items }; right = { label: b.label, items: b.items };
      g.goal("Which sound? Sort each word!");
    } else {
      left = { label: `✔ ${c.rule.title}`, items: c.targets }; right = { label: "✘ Not this rule", items: c.distractors };
      g.goal(`Does it follow ${c.rule.title}?`);
    }
    el.innerHTML = `<div class="sort-wrap">
      <button class="basket" data-side="L"><span>🧺</span>${c.esc(left.label)}<small>← key</small></button>
      <div class="sort-mid"><div class="sort-word" id="sw"></div><button id="swHear" class="ghost">🔊</button><div class="ttt-status" id="sst"></div></div>
      <button class="basket" data-side="R"><span>🧺</span>${c.esc(right.label)}<small>→ key</small></button></div>`;
    const sw = el.querySelector("#sw"), st = el.querySelector("#sst");
    let cur, lock = false;
    function nextWord() {
      const side = Math.random() < .5 || !right.items.length ? "L" : "R";
      const it = c.pick(side === "L" ? left.items : right.items);
      cur = { ...it, side }; lock = false;
      sw.textContent = it.word; sw.className = "sort-word drop";
    }
    function choose(side) {
      if (lock || !cur) return; lock = true;
      const ok = side === cur.side, r = sw.getBoundingClientRect();
      g.add(ok ? 1 : -1, r.left + r.width / 2, r.top);
      sw.className = "sort-word " + (ok ? "fly" + side : "shake");
      st.textContent = ok ? "✅" : `❌ “${cur.word}” → ${cur.side === "L" ? left.label : right.label}`;
      if (ok) c.speak(cur.word, 1);
      g.after(ok ? 450 : 1300, () => { st.textContent = ""; nextWord(); });
    }
    el.querySelectorAll(".basket").forEach(b => b.onclick = () => choose(b.dataset.side));
    el.querySelector("#swHear").onclick = () => cur && c.speak(cur.word);
    const onKey = e => { if (e.key === "ArrowLeft") choose("L"); if (e.key === "ArrowRight") choose("R"); };
    window.addEventListener("keydown", onKey); g.cleanup(() => window.removeEventListener("keydown", onKey));
    nextWord();
  }

  /* ---------- 10. Listening Bingo ---------- */
  function bingo(el, g) {
    g.goal("Listen and tap the word. Get a line for BINGO!");
    el.innerHTML = `<div class="bingo-wrap"><div class="button-row"><button id="bgHear" class="big-hear">🔊 Hear again</button></div><div class="ttt-status" id="bgSt"></div><div class="bingo"></div></div>`;
    const grid = el.querySelector(".bingo"), st = el.querySelector("#bgSt");
    let words, marked, called, lines;
    const LINES = [];
    for (let i = 0; i < 4; i++) { LINES.push([0,1,2,3].map(j => i * 4 + j)); LINES.push([0,1,2,3].map(j => j * 4 + i)); }
    LINES.push([0,5,10,15], [3,6,9,12]);
    function newCard() {
      const pool = g.ctx.shuffle(g.ctx.targets).slice(0, 16);
      const extra = g.ctx.shuffle(g.ctx.distractors).slice(0, 16 - pool.length);
      words = g.ctx.shuffle([...pool, ...extra]).map(x => x.word);
      marked = Array(16).fill(false); lines = new Set();
      grid.innerHTML = words.map((w, i) => `<button data-i="${i}">${g.ctx.esc(w)}</button>`).join("");
      callNext();
    }
    function callNext() {
      const left = words.map((w, i) => marked[i] ? null : i).filter(i => i !== null);
      if (!left.length) return g.after(800, newCard);
      called = g.ctx.pick(left); st.textContent = "🎧 Listen…";
      g.after(300, () => g.ctx.speak(words[called], .8));
    }
    el.querySelector("#bgHear").onclick = () => g.ctx.speak(words[called], .7);
    grid.onclick = e => {
      const b = e.target.closest("button"); if (!b) return;
      const i = +b.dataset.i; if (marked[i]) return;
      if (i !== called) { g.ctx.beep("bad"); b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake"); st.textContent = "Not that one — listen again!"; return; }
      marked[i] = true; b.classList.add("on");
      const r = b.getBoundingClientRect(); g.add(1, r.left + r.width / 2, r.top);
      LINES.forEach((L, k) => { if (!lines.has(k) && L.every(j => marked[j])) { lines.add(k); L.forEach(j => grid.children[j].classList.add("line")); st.textContent = "🎉 BINGO! +3"; g.add(3, r.left, r.top - 30); } });
      if (lines.size >= 3) { g.after(1200, newCard); return; }
      g.after(600, callNext);
    };
    newCard();
  }

  /* ---------- 11. Connect Four 四子連線 ---------- */
  function connect4(el, g) {
    g.goal("Answer right to drop your disc. Get 4 in a row!");
    const R = 6, C = 7;
    el.innerHTML = `<div class="ttt-wrap"><div class="ttt-mode"></div><div class="ttt-status"></div><div class="c4"></div><div class="ttt-ask"></div></div>`;
    const status = el.querySelector(".ttt-status"), grid = el.querySelector(".c4"), ask = el.querySelector(".ttt-ask");
    let mode = "cpu", b, turn, busy, wins = { R: 0, Y: 0 };
    modeBar(el.querySelector(".ttt-mode"), m => { mode = m; wins = { R: 0, Y: 0 }; reset(); });
    const drop = (board, col) => { for (let r = R - 1; r >= 0; r--) if (!board[r][col]) return r; return -1; };
    function winner(board) {
      for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
        const p = board[r][c]; if (!p) continue;
        for (const [dr, dc] of [[0,1],[1,0],[1,1],[1,-1]]) {
          let k = 1; while (k < 4) { const rr = r + dr * k, cc = c + dc * k; if (rr < 0 || rr >= R || cc < 0 || cc >= C || board[rr][cc] !== p) break; k++; }
          if (k === 4) return p;
        }
      }
      return board[0].every(Boolean) ? "draw" : null;
    }
    function reset() { b = Array.from({ length: R }, () => Array(C).fill(null)); turn = "R"; busy = false; ask.innerHTML = ""; draw(); say(); }
    function draw() { grid.innerHTML = b.map((row, r) => row.map((v, c) => `<button data-c="${c}"><i class="disc ${v || ""}"></i></button>`).join("")).join(""); }
    function say(msg) {
      const who = mode === "cpu" ? (turn === "R" ? "Your turn 🔴" : "Computer 🟡 thinking…") : `Player ${turn === "R" ? "1 🔴" : "2 🟡"}`;
      status.textContent = `${msg ? msg + " · " : ""}${who}   ·   🔴 ${wins.R} – ${wins.Y} 🟡`;
    }
    grid.onclick = e => {
      const btn = e.target.closest("button"); if (!btn || busy || (mode === "cpu" && turn === "Y")) return;
      const col = +btn.dataset.c; if (drop(b, col) < 0) return;
      busy = true;
      askSpelling(ask, g, g.ctx.pick(g.ctx.targets), ok => { busy = false; if (ok) place(col); else { say("Oops, turn lost"); swap(); } });
    };
    function place(col) {
      b[drop(b, col)][col] = turn; draw();
      const w = winner(b);
      if (w) {
        busy = true;
        if (w === "draw") say("🤝 Draw!");
        else { wins[w]++; status.textContent = mode === "cpu" ? (w === "R" ? "🎉 You win!" : "🤖 Computer wins!") : `🎉 Player ${w === "R" ? "1 🔴" : "2 🟡"} wins!`;
          if (w === "R") { const r = grid.getBoundingClientRect(); g.add(3, r.left + r.width / 2, r.top); } }
        g.after(1600, reset); return;
      }
      swap();
    }
    function swap() {
      turn = turn === "R" ? "Y" : "R"; say();
      if (mode === "cpu" && turn === "Y") { busy = true; g.after(650, cpu); }
    }
    function cpu() {
      busy = false;
      const cols = [...Array(C).keys()].filter(c => drop(b, c) >= 0);
      const tryP = p => cols.find(c => { const t = b.map(r => [...r]); t[drop(t, c)][c] = p; return winner(t) === p; });
      let m = Math.random() < .2 ? undefined : (tryP("Y") ?? tryP("R"));
      if (m === undefined) m = g.ctx.pick(cols.sort((a, c) => Math.abs(a - 3) - Math.abs(c - 3)).slice(0, 4));
      place(m);
    }
    reset();
  }

  return { list, play, close };
})();
