---
sidebar_position: 1.5
title: "クイックスタート（日本語）"
description: "Hermes Agentとの最初の会話 — インストールからチャットまで2分"
---

# クイックスタート（日本語）

このガイドでは、Hermes Agentのインストール、プロバイダーの設定、最初の会話までを説明します。

> **注意:** 完全な英語版は [Quickstart](./quickstart.md) をご覧ください。

## 1. Hermes Agentをインストール

ワンラインインストーラーを実行：

```bash
# Linux / macOS / WSL2 / Android (Termux)
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

:::tip Windowsユーザー
まず[WSL2](https://learn.microsoft.com/ja-jp/windows/wsl/install)をインストールし、WSL2ターミナル内で上記のコマンドを実行してください。
:::

完了したらシェルを再読み込み：

```bash
source ~/.bashrc   # または source ~/.zshrc
```

## 2. プロバイダーを設定

インストーラーがLLMプロバイダーを自動設定します。後から変更するには：

```bash
hermes model       # LLMプロバイダーとモデルを選択
hermes tools       # 有効にするツールを設定
hermes setup       # またはすべてを一括設定
```

主なプロバイダー：

| プロバイダー | 説明 | 設定方法 |
|------------|------|---------|
| **Nous Portal** | サブスクリプション型、設定不要 | `hermes model`でOAuthログイン |
| **OpenRouter** | 200以上のモデルへのルーティング | APIキーを入力 |
| **Anthropic** | Claude モデルに直接アクセス | APIキーまたはClaude Code認証 |
| **DeepSeek** | DeepSeek APIへの直接アクセス | `DEEPSEEK_API_KEY`を設定 |
| **カスタム** | VLLM、Ollama等のOpenAI互換API | ベースURLとAPIキーを設定 |

:::caution 最低コンテキスト: 64Kトークン
Hermes Agentは最低**64,000トークン**のコンテキストを持つモデルが必要です。ローカルモデルを使用する場合は、コンテキストサイズを64K以上に設定してください。
:::

## 3. チャット開始

```bash
hermes
```

これだけです！モデル名、利用可能なツール、スキルが表示されます。メッセージを入力してEnterを押してください。

```
❯ 何を手伝ってくれますか？
```

## 4. 主要機能を試す

### ターミナルを使わせる

```
❯ ディスク使用量を確認して、最も大きい5つのディレクトリを表示して。
```

### スラッシュコマンド

`/`を入力するとオートコンプリートが表示されます：

| コマンド | 機能 |
|---------|------|
| `/help` | すべてのコマンドを表示 |
| `/tools` | 利用可能なツールを一覧 |
| `/model` | モデルを対話的に切替 |
| `/personality pirate` | パーソナリティを試す |
| `/save` | 会話を保存 |

### マルチライン入力

`Alt+Enter`または`Ctrl+J`で改行を追加。コードの貼り付けや詳細なプロンプトに便利です。

### エージェントの中断

エージェントの処理中に新しいメッセージを入力してEnterを押すと、現在のタスクを中断して新しい指示に切り替わります。`Ctrl+C`も使えます。

### セッションの再開

```bash
hermes --continue    # 最新のセッションを再開
hermes -c            # 短縮形
```

## 5. さらに探索

### メッセージングプラットフォームを接続

Telegram、Discord、Slack、WhatsApp、Signalからチャット：

```bash
hermes gateway setup    # 対話式プラットフォーム設定
```

### スケジュール自動タスク

```
❯ 毎朝9時にHacker Newsのニュースをチェックして要約をTelegramに送って。
```

### スキルの検索とインストール

```bash
hermes skills search kubernetes
hermes skills install openai/skills/k8s
```

---

## クイックリファレンス

| コマンド | 説明 |
|---------|------|
| `hermes` | チャット開始 |
| `hermes model` | LLMプロバイダーとモデルを選択 |
| `hermes setup` | フルセットアップウィザード |
| `hermes doctor` | 問題を診断 |
| `hermes update` | 最新バージョンに更新 |
| `hermes gateway` | メッセージングゲートウェイ起動 |
| `hermes --continue` | 最後のセッションを再開 |

## 次のステップ

- **[CLI Guide](../user-guide/cli.md)** — ターミナルインターフェースをマスター（英語）
- **[Configuration](../user-guide/configuration.md)** — セットアップをカスタマイズ（英語）
- **[Messaging Gateway](../user-guide/messaging/index.md)** — プラットフォーム接続（英語）
- **[日本語ランディングページ](https://hermes-agent.org/ja/)** — 概要を日本語で確認
