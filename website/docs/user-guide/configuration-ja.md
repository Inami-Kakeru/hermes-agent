---
sidebar_position: 2.5
title: "設定ガイド（日本語）"
description: "Hermes Agentの設定 — config.yaml、プロバイダー、モデル、APIキー"
---

# 設定ガイド（日本語）

すべての設定は `~/.hermes/` ディレクトリに格納されます。

> **注意:** 完全な英語版は [Configuration](./configuration.md) をご覧ください。

## ディレクトリ構成

```text
~/.hermes/
├── config.yaml     # 設定（モデル、ターミナル、TTS、圧縮など）
├── .env            # APIキーとシークレット
├── auth.json       # OAuthプロバイダー認証情報（Nous Portalなど）
├── SOUL.md         # エージェントのアイデンティティ（システムプロンプトのスロット#1）
├── memories/       # 永続メモリ（MEMORY.md, USER.md）
├── skills/         # エージェント作成スキル
├── cron/           # スケジュールジョブ
├── sessions/       # ゲートウェイセッション
└── logs/           # ログ（シークレットは自動リダクション）
```

## 設定の管理

```bash
hermes config              # 現在の設定を表示
hermes config edit         # エディタでconfig.yamlを開く
hermes config set KEY VAL  # 特定の値を設定
hermes config check        # 欠落オプションをチェック（アップデート後）
hermes config migrate      # 対話式に欠落オプションを追加

# 例:
hermes config set model anthropic/claude-opus-4
hermes config set terminal.backend docker
hermes config set OPENROUTER_API_KEY sk-or-...  # .envに保存
```

:::tip
`hermes config set`は値を自動的に正しいファイルにルーティングします — APIキーは`.env`に、それ以外は`config.yaml`に保存されます。
:::

## 設定の優先順位

設定は以下の順序で解決されます（最高優先度順）：

1. **CLIの引数** — 例: `hermes chat --model anthropic/claude-sonnet-4`
2. **`~/.hermes/config.yaml`** — 非シークレット設定のメインファイル
3. **`~/.hermes/.env`** — 環境変数のフォールバック; シークレット（APIキー等）は**必須**
4. **組み込みデフォルト** — 何も設定されていない場合のハードコードされたデフォルト

:::info ルール
シークレット（APIキー、ボットトークン、パスワード）は`.env`に。それ以外（モデル、ターミナルバックエンド、圧縮設定等）は`config.yaml`に。
:::

## 主要設定項目

### モデル設定

```yaml
# config.yaml
model: "anthropic/claude-sonnet-4"
```

```bash
# コマンドで変更
hermes model
```

### ターミナルバックエンド

```yaml
# config.yaml
terminal:
  backend: local        # local, docker, ssh, modal, daytona, singularity
  timeout: 120          # コマンドタイムアウト（秒）
```

サンドボックス化のため、本番環境では`docker`の使用を推奨：

```bash
hermes config set terminal.backend docker
```

### コマンド承認

```yaml
# config.yaml
approvals:
  mode: "on"            # on（デフォルト）, auto, off
  auto_approve_delay: 3 # autoモードの遅延（秒）
```

- `on`: 危険なコマンドの前にユーザー確認を要求
- `auto`: 設定した遅延後に自動承認
- `off`: ゲート完全無効化（非推奨）

### メモリ設定

```yaml
# config.yaml
memory:
  enabled: true
  provider: "markdown"  # markdown（デフォルト）、honcho
```

### コンテキスト圧縮

```yaml
# config.yaml
compression:
  enabled: true
  threshold: 0.7        # コンテキストの70%使用で圧縮開始
```

## APIキーの設定

APIキーは`~/.hermes/.env`に保存します：

```bash
# .envファイルに直接
OPENROUTER_API_KEY=sk-or-xxxx
ANTHROPIC_API_KEY=sk-ant-xxxx
TELEGRAM_BOT_TOKEN=123456:ABC-xxx

# またはコマンドで
hermes config set OPENROUTER_API_KEY sk-or-xxxx
```

:::caution
APIキーは**絶対に** `config.yaml`やバージョン管理にコミットしないでください。必ず`.env`に保管してください。
:::

## SOUL.md — エージェントのパーソナリティ

`~/.hermes/SOUL.md`でエージェントのアイデンティティを定義できます：

```markdown
# Soul

あなたは私の個人開発アシスタントです。
日本語で応答してください。
簡潔で技術的な回答を心がけてください。
```

## ゲートウェイ設定

メッセージングプラットフォーム接続：

```bash
hermes gateway setup    # 対話式セットアップ
```

```yaml
# config.yaml
gateway:
  platforms:
    telegram:
      enabled: true
    discord:
      enabled: true
```

## 次のステップ

- **[CLI Guide（日本語）](./cli-ja.md)** — CLIの使い方
- **[Tools（英語）](./features/tools.md)** — ツールとツールセット
- **[Environment Variables（英語）](../reference/environment-variables.md)** — 完全な環境変数リファレンス
