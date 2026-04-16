<p align="center">
  <img src="assets/banner.png" alt="Hermes Agent" width="100%">
</p>

# Hermes Agent ☤

<p align="center">
  <a href="https://hermes-agent.org/docs/"><img src="https://img.shields.io/badge/Docs-hermes--agent.org-FFD700?style=for-the-badge" alt="ドキュメント"></a>
  <a href="https://discord.gg/NousResearch"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://github.com/NousResearch/hermes-agent/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="ライセンス: MIT"></a>
  <a href="https://nousresearch.com"><img src="https://img.shields.io/badge/Built%20by-Nous%20Research-blueviolet?style=for-the-badge" alt="Built by Nous Research"></a>
</p>

<p align="center">
  <a href="README.md">English</a> | <b>日本語</b>
</p>

**[Nous Research](https://nousresearch.com)が開発した自己改善型AIエージェント。** 組み込みの学習ループを持つ唯一のエージェントです。経験からスキルを作成し、使用中に改善し、知識を永続化するよう自ら促し、過去の会話を検索し、セッションを跨いであなたへの理解を深めていきます。$5のVPS、GPUクラスター、アイドル時はほぼ無料のサーバーレスインフラで動作可能。ノートPCに縛られません — クラウドVM上で作業しながら、Telegramから話しかけることもできます。

任意のモデルを使用可能 — [Nous Portal](https://portal.nousresearch.com)、[OpenRouter](https://openrouter.ai)（200以上のモデル）、[Xiaomi MiMo](https://platform.xiaomimimo.com)、[z.ai/GLM](https://z.ai)、[Kimi/Moonshot](https://platform.moonshot.ai)、[MiniMax](https://www.minimax.io)、[Hugging Face](https://huggingface.co)、OpenAI、または独自のエンドポイント。`hermes model`で切り替え可能 — コード変更不要、ロックインなし。

<table>
<tr><td><b>本格的なターミナルインターフェース</b></td><td>マルチライン編集、スラッシュコマンド補完、会話履歴、割り込みリダイレクト、ストリーミングツール出力を備えた完全なTUI。</td></tr>
<tr><td><b>あなたのいる場所に</b></td><td>Telegram、Discord、Slack、WhatsApp、Signal、CLIを単一のゲートウェイプロセスから。音声メモの文字起こし、クロスプラットフォームでの会話継続。</td></tr>
<tr><td><b>閉じた学習ループ</b></td><td>定期的な促しによるエージェントキュレーションメモリ。複雑なタスク後の自律的スキル作成。使用中にスキルが自己改善。LLM要約付きFTS5セッション検索でセッション間の想起。<a href="https://github.com/plastic-labs/honcho">Honcho</a>弁証法的ユーザーモデリング。<a href="https://agentskills.io">agentskills.io</a>オープンスタンダード互換。</td></tr>
<tr><td><b>スケジュール自動化</b></td><td>あらゆるプラットフォームへの配信が可能な組み込みcronスケジューラー。日次レポート、夜間バックアップ、週次監査 — すべて自然言語で無人実行。</td></tr>
<tr><td><b>委譲と並列処理</b></td><td>並列ワークストリーム用の分離されたサブエージェントを生成。ツールをRPC経由で呼び出すPythonスクリプトで、マルチステップパイプラインをコンテキストコストゼロのターンに圧縮。</td></tr>
<tr><td><b>どこでも実行</b></td><td>6つのターミナルバックエンド — ローカル、Docker、SSH、Daytona、Singularity、Modal。DaytonaとModalはサーバーレス永続化を提供 — アイドル時にハイバネーションし、オンデマンドで起動、セッション間のコストはほぼゼロ。</td></tr>
<tr><td><b>研究対応</b></td><td>バッチトラジェクトリ生成、Atropos RL環境、次世代ツール呼び出しモデルの訓練のためのトラジェクトリ圧縮。</td></tr>
</table>

---

## クイックインストール

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

Linux、macOS、WSL2、Android（Termux経由）で動作します。インストーラーがプラットフォーム固有のセットアップを処理します。

> **Android / Termux:** テスト済みの手動パスは[Termuxガイド](https://hermes-agent.org/docs/getting-started/termux)に記載されています。
>
> **Windows:** ネイティブWindowsはサポートされていません。[WSL2](https://learn.microsoft.com/ja-jp/windows/wsl/install)をインストールして上記のコマンドを実行してください。

インストール後：

```bash
source ~/.bashrc    # シェルを再読み込み（または: source ~/.zshrc）
hermes              # チャット開始！
```

---

## はじめ方

```bash
hermes              # 対話型CLI — 会話を開始
hermes model        # LLMプロバイダーとモデルを選択
hermes tools        # 有効にするツールを設定
hermes config set   # 個別の設定値を変更
hermes gateway      # メッセージングゲートウェイを起動（Telegram、Discordなど）
hermes setup        # フルセットアップウィザードを実行（すべてを一括設定）
hermes update       # 最新バージョンにアップデート
hermes doctor       # 問題を診断
```

📖 **[完全なドキュメント →](https://hermes-agent.org/docs/)**（英語）

## CLI vs メッセージング クイックリファレンス

Hermesには2つのエントリポイントがあります：`hermes`でターミナルUIを起動するか、ゲートウェイを実行してTelegram、Discord、Slack、WhatsApp、Signal、またはEmailから話しかけます。

| アクション | CLI | メッセージングプラットフォーム |
|---------|-----|---------------------|
| チャット開始 | `hermes` | `hermes gateway setup` + `hermes gateway start`を実行後、ボットにメッセージを送信 |
| 新しい会話を開始 | `/new` または `/reset` | `/new` または `/reset` |
| モデルを変更 | `/model [provider:model]` | `/model [provider:model]` |
| パーソナリティを設定 | `/personality [name]` | `/personality [name]` |
| リトライ/取り消し | `/retry`, `/undo` | `/retry`, `/undo` |
| コンテキスト圧縮/使用量確認 | `/compress`, `/usage`, `/insights [--days N]` | `/compress`, `/usage`, `/insights [days]` |
| スキル閲覧 | `/skills` または `/<skill-name>` | `/skills` または `/<skill-name>` |
| 現在の作業を中断 | `Ctrl+C` または新しいメッセージを送信 | `/stop` または新しいメッセージを送信 |

---

## ドキュメント

すべてのドキュメントは **[hermes-agent.org/docs](https://hermes-agent.org/docs/)** にあります（英語）：

| セクション | 内容 |
|---------|------|
| [クイックスタート](https://hermes-agent.org/docs/getting-started/quickstart) | インストール → セットアップ → 最初の会話を2分で |
| [CLI使い方](https://hermes-agent.org/docs/user-guide/cli) | コマンド、キーバインド、パーソナリティ、セッション |
| [設定](https://hermes-agent.org/docs/user-guide/configuration) | 設定ファイル、プロバイダー、モデル、全オプション |
| [メッセージングゲートウェイ](https://hermes-agent.org/docs/user-guide/messaging) | Telegram、Discord、Slack、WhatsApp、Signal、Home Assistant |
| [セキュリティ](https://hermes-agent.org/docs/user-guide/security) | コマンド承認、DMペアリング、コンテナ分離 |
| [ツールとツールセット](https://hermes-agent.org/docs/user-guide/features/tools) | 40以上のツール、ツールセットシステム、ターミナルバックエンド |
| [スキルシステム](https://hermes-agent.org/docs/user-guide/features/skills) | 手続き的メモリ、Skills Hub、スキル作成 |
| [メモリ](https://hermes-agent.org/docs/user-guide/features/memory) | 永続メモリ、ユーザープロファイル、ベストプラクティス |
| [MCP統合](https://hermes-agent.org/docs/user-guide/features/mcp) | 拡張機能のためのMCPサーバー接続 |
| [Cronスケジューリング](https://hermes-agent.org/docs/user-guide/features/cron) | プラットフォーム配信付きスケジュールタスク |
| [アーキテクチャ](https://hermes-agent.org/docs/developer-guide/architecture) | プロジェクト構造、エージェントループ、主要クラス |

---

## コントリビューション

コントリビューションを歓迎します！開発セットアップ、コードスタイル、PRプロセスについては[コントリビューションガイド](https://hermes-agent.org/docs/developer-guide/contributing)（英語）をご覧ください。

コントリビューター向けクイックスタート：

```bash
git clone https://github.com/NousResearch/hermes-agent.git
cd hermes-agent
curl -LsSf https://astral.sh/uv/install.sh | sh
uv venv venv --python 3.11
source venv/bin/activate
uv pip install -e ".[all,dev]"
python -m pytest tests/ -q
```

---

## コミュニティ

- 💬 [Discord](https://discord.gg/NousResearch)
- 📚 [Skills Hub](https://agentskills.io)
- 🐛 [Issues](https://github.com/NousResearch/hermes-agent/issues)
- 💡 [Discussions](https://github.com/NousResearch/hermes-agent/discussions)

---

## ライセンス

MIT — [LICENSE](LICENSE)を参照。

[Nous Research](https://nousresearch.com)製。
