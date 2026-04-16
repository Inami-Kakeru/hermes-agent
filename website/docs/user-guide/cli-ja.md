---
sidebar_position: 1.5
title: "CLIインターフェース（日本語）"
description: "Hermes AgentのターミナルインターフェースのJapaneseガイド"
---

# CLIインターフェース（日本語）

Hermes AgentのCLIは完全なターミナルユーザーインターフェース（TUI）です。マルチライン編集、スラッシュコマンドの補完、会話履歴、割り込み、ストリーミングツール出力に対応しています。

> **注意:** 完全な英語版は [CLI Interface](./cli.md) をご覧ください。

## CLIの起動

```bash
# 対話セッション開始（デフォルト）
hermes

# シングルクエリモード（非対話）
hermes chat -q "Hello"

# 特定のモデルを指定
hermes chat --model "anthropic/claude-sonnet-4"

# 特定のプロバイダーを使用
hermes chat --provider nous        # Nous Portalを使用
hermes chat --provider openrouter  # OpenRouterを強制

# 前のセッションを再開
hermes --continue             # 最新のCLIセッションを再開 (-c)
hermes --resume <session_id>  # 特定のセッションをIDで再開 (-r)

# スキルをプリロードして開始
hermes -s hermes-agent-dev,github-auth
```

## キーバインド

| キー | アクション |
|------|-----------|
| `Enter` | メッセージを送信 |
| `Alt+Enter` / `Ctrl+J` | 改行（マルチライン入力） |
| `Ctrl+C` | エージェントを中断（2秒以内にダブルプレスで強制終了） |
| `Ctrl+D` | 終了 |
| `Tab` | オートサジェストの受入 / スラッシュコマンドの補完 |
| `Ctrl+V` | テキスト貼り付け（クリップボード画像も対応） |
| `Alt+V` | クリップボードから画像を貼り付け |

## スラッシュコマンド

`/`を入力するとオートコンプリートドロップダウンが表示されます。

### 主要コマンド

| コマンド | 説明 |
|---------|------|
| `/help` | すべてのコマンドを表示 |
| `/model [provider:model]` | モデルを切替 |
| `/tools` | 利用可能なツールを一覧 |
| `/skills` | スキル一覧を表示 |
| `/new` / `/reset` | 新しい会話を開始 |
| `/save [filename]` | 会話をファイルに保存 |

### 会話管理

| コマンド | 説明 |
|---------|------|
| `/undo` | 最後の1ターン（あなた+エージェント）を取消 |
| `/retry` | エージェントの最後の応答を再生成 |
| `/compress` | コンテキストを圧縮してトークンを節約 |
| `/usage` | トークン使用量とコストを表示 |
| `/insights [--days N]` | セッション統計を表示 |

### パーソナリティ

```
/personality pirate      # 海賊風パーソナリティ
/personality formal      # フォーマル
/personality creative    # クリエイティブ
/personality reset       # デフォルトに戻す
```

## ステータスバー

入力エリアの上に常時表示されるステータスバー：

```
 ⚕ claude-sonnet-4 │ 12.4K/200K │ [██████░░░░] 6% │ $0.06 │ 15m
```

| 要素 | 説明 |
|------|------|
| モデル名 | 現在のモデル |
| トークン数 | 使用コンテキストトークン / 最大ウィンドウ |
| コンテキストバー | 使用率のビジュアル表示 |
| コスト | 推定セッションコスト |
| 時間 | 経過セッション時間 |

**コンテキストカラー:**
- 🟢 緑 (< 50%): 余裕あり
- 🟡 黄 (50-80%): やや増加
- 🟠 橙 (80-95%): 限界に近い
- 🔴 赤 (≥ 95%): オーバーフロー間近 — `/compress`を検討

## エージェントの中断

エージェントの処理中に新しいメッセージを入力して`Enter`を押すだけで中断できます。エージェントは現在の作業を停止し、あなたの新しいメッセージに応答します。

`Ctrl+C`でも中断できますが、2秒以内に2回押すとHermesが完全に終了します。

## セッション管理

```bash
hermes --continue        # 最新のセッションを再開
hermes -c                # 短縮形
hermes --resume abc123   # 特定のセッションを再開
hermes sessions          # すべてのセッションを一覧
```

## 次のステップ

- **[Configuration（英語）](./configuration.md)** — 設定のカスタマイズ
- **[Messaging Gateway（英語）](./messaging/index.md)** — Telegramなどのプラットフォーム接続
- **[Tools（英語）](./features/tools.md)** — ツールとツールセット
