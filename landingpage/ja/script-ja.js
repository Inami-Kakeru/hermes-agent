// =========================================================================
// Hermes Agent Landing Page — Japanese Terminal Demo Override
// =========================================================================

// Override the demo sequence with Japanese content after the main script loads
document.addEventListener("DOMContentLoaded", () => {
  // The main script already initializes the terminal demo,
  // but we need to replace the demo sequence with Japanese text.
  // We stop the existing demo and start a new one.

  const terminalEl = document.getElementById("terminal-demo");
  if (!terminalEl) return;

  const CURSOR_JA = '<span class="terminal-cursor">█</span>';

  const demoSequenceJa = [
    { type: "prompt", text: "❯ " },
    {
      type: "type",
      text: "GRPOトレーニングの最新アプローチを調査して要約を書いて",
      delay: 40,
    },
    { type: "pause", ms: 600 },
    {
      type: "output",
      lines: [
        "",
        '<span class="t-dim">  web_search "GRPO reinforcement learning 2026"       1.2s</span>',
      ],
    },
    { type: "pause", ms: 400 },
    {
      type: "output",
      lines: [
        '<span class="t-dim">  web_extract arxiv.org/abs/2402.03300                3.1s</span>',
      ],
    },
    { type: "pause", ms: 400 },
    {
      type: "output",
      lines: [
        '<span class="t-dim">  web_search "GRPO vs PPO ablation results"           0.9s</span>',
      ],
    },
    { type: "pause", ms: 400 },
    {
      type: "output",
      lines: [
        '<span class="t-dim">  web_extract huggingface.co/blog/grpo                2.8s</span>',
      ],
    },
    { type: "pause", ms: 400 },
    {
      type: "output",
      lines: [
        '<span class="t-dim">  write_file ~/research/grpo-summary.md               0.1s</span>',
      ],
    },
    { type: "pause", ms: 500 },
    {
      type: "output",
      lines: [
        "",
        '<span class="t-text">完了！以下の内容をまとめました：</span>',
        "",
        '<span class="t-text">  <span class="t-green">✓</span> GRPOのグループ相対アドバンテージ（批評モデル不要）</span>',
        '<span class="t-text">  <span class="t-green">✓</span> 推論ベンチマークでのPPO/DPOとの比較</span>',
        '<span class="t-text">  <span class="t-green">✓</span> AxolotlとTRLでの実装メモ</span>',
        "",
        '<span class="t-text">保存先：</span> <span class="t-accent">~/research/grpo-summary.md</span>',
      ],
    },
    { type: "pause", ms: 2500 },

    { type: "clear" },
    { type: "prompt", text: "❯ " },
    {
      type: "type",
      text: "NousResearch/hermes-agent#42 のPRをレビューして問題を修正して",
      delay: 35,
    },
    { type: "pause", ms: 600 },
    {
      type: "output",
      lines: [
        "",
        '<span class="t-dim">  delegate_task "PR #42の変更をレビュー"                 2.1s</span>',
      ],
    },
    { type: "pause", ms: 500 },
    {
      type: "output",
      lines: [
        '<span class="t-dim">  git diff main..pr-42                                 0.4s</span>',
      ],
    },
    { type: "pause", ms: 400 },
    {
      type: "output",
      lines: [
        '<span class="t-dim">  patch tools/registry.py                              0.1s</span>',
      ],
    },
    { type: "pause", ms: 400 },
    {
      type: "output",
      lines: [
        '<span class="t-dim">  python -m pytest tests/ -x                           3.2s</span>',
      ],
    },
    { type: "pause", ms: 400 },
    {
      type: "output",
      lines: [
        '<span class="t-dim">  git commit -m "fix: 空のツールスキーマを処理"          0.3s</span>',
      ],
    },
    { type: "pause", ms: 500 },
    {
      type: "output",
      lines: [
        "",
        '<span class="t-text">PRに2つの問題を発見し、両方修正しました：</span>',
        "",
        '<span class="t-text">  <span class="t-green">✓</span> registry.pyの空ツールスキーマクラッシュ — ガードを追加</span>',
        '<span class="t-text">  <span class="t-green">✓</span> delegate_tool.pyのエラーハンドリング不足 — try/exceptを追加</span>',
        "",
        '<span class="t-text">テスト通過。修正をコミットしてPRブランチにプッシュしました。</span>',
        '<span class="t-text">このPRレビューパターンの</span> <span class="t-accent">スキル</span> <span class="t-text">も保存しました。</span>',
      ],
    },
    { type: "pause", ms: 2500 },

    { type: "clear" },
    { type: "prompt", text: "❯ " },
    {
      type: "type",
      text: "あのDockerネットワークの問題、どう解決したっけ？",
      delay: 45,
    },
    { type: "pause", ms: 500 },
    {
      type: "output",
      lines: [
        "",
        '<span class="t-dim">  session_search "Dockerネットワーク"                   1.4s</span>',
      ],
    },
    { type: "pause", ms: 500 },
    {
      type: "output",
      lines: [
        "",
        '<span class="t-text">見つけました — 2月12日のセッションから：</span>',
        "",
        '<span class="t-text">composeファイルがデフォルトのブリッジネットワークを使用して</span>',
        '<span class="t-text">いたため、コンテナ同士が通信できませんでした。カスタム</span>',
        '<span class="t-text">ネットワークに</span> <span class="t-accent">driver: overlay</span> <span class="t-text">で切り替え、明示的な</span>',
        '<span class="t-text">エイリアスを追加し、フォールバックとして</span> <span class="t-accent">dns: 8.8.8.8</span> <span class="t-text">を設定しました。</span>',
        "",
        '<span class="t-text">修正は</span> <span class="t-accent">docker-compose.prod.yml</span> <span class="t-text">にコミットされています。</span>',
      ],
    },
    { type: "pause", ms: 3000 },
  ];

  // Replace the terminal demo with Japanese version
  // Stop any existing demo by clearing the container
  terminalEl.innerHTML = "";

  class TerminalDemoJa {
    constructor(container) {
      this.container = container;
      this.running = false;
      this.content = "";
    }

    async start() {
      if (this.running) return;
      this.running = true;

      while (this.running) {
        for (const step of demoSequenceJa) {
          if (!this.running) return;
          await this.execute(step);
        }
        this.clear();
        await this.sleep(1000);
      }
    }

    stop() {
      this.running = false;
    }

    async execute(step) {
      switch (step.type) {
        case "prompt":
          this.append('<span class="t-prompt">' + step.text + "</span>");
          break;
        case "type":
          for (const char of step.text) {
            if (!this.running) return;
            this.append('<span class="t-cmd">' + char + "</span>");
            await this.sleep(step.delay || 30);
          }
          break;
        case "output":
          for (const line of step.lines) {
            if (!this.running) return;
            this.append("\n" + line);
            await this.sleep(50);
          }
          break;
        case "pause":
          await this.sleep(step.ms);
          break;
        case "clear":
          this.clear();
          break;
      }
    }

    append(html) {
      this.content += html;
      this.render();
    }

    render() {
      this.container.innerHTML = this.content + CURSOR_JA;
      this.container.scrollTop = this.container.scrollHeight;
    }

    clear() {
      this.content = "";
      this.container.innerHTML = "";
    }

    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  }

  const demoJa = new TerminalDemoJa(terminalEl);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          demoJa.start();
        } else {
          demoJa.stop();
        }
      });
    },
    { threshold: 0.3 },
  );

  observer.observe(document.querySelector(".terminal-window"));
});
