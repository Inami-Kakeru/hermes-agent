---
sidebar_position: 3.5
title: "メッセージングゲートウェイ（日本語）"
description: "Telegram、Discord、Slack、WhatsApp、LINEからHermesとチャット"
---

# メッセージングゲートウェイ（日本語）

Telegram、Discord、Slack、WhatsApp、Signal、Email、Home Assistantなどからチャットできます。ゲートウェイは単一のバックグラウンドプロセスで、設定したすべてのプラットフォームに接続します。

> **注意:** 完全な英語版は [Messaging Gateway](./messaging/index.md) をご覧ください。

## セットアップ

```bash
# 対話式セットアップウィザード
hermes gateway setup

# ゲートウェイを起動
hermes gateway

# systemdサービスとしてインストール（Linux）
hermes gateway install
```

## プラットフォーム比較

| プラットフォーム | 音声 | 画像 | ファイル | スレッド | タイピング | ストリーミング |
|---------------|:----:|:----:|:------:|:------:|:--------:|:----------:|
| Telegram | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Discord | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Slack | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| WhatsApp | — | ✅ | ✅ | — | ✅ | ✅ |
| Signal | — | ✅ | ✅ | — | ✅ | ✅ |
| Email | — | ✅ | ✅ | ✅ | — | — |
| Matrix | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| DingTalk | — | — | — | — | ✅ | ✅ |
| Feishu/Lark | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| WeCom | ✅ | ✅ | ✅ | — | ✅ | ✅ |
| QQ | ✅ | ✅ | ✅ | — | ✅ | — |

## Telegram セットアップ

最も一般的なプラットフォームとして、Telegramの設定を紹介します。

### 1. BotFatherでボットを作成

1. Telegramで [@BotFather](https://t.me/BotFather) を検索
2. `/newbot` コマンドを送信
3. ボット名を入力（例：`My Hermes Agent`）
4. ユーザー名を入力（例：`my_hermes_bot`）
5. **APIトークン**が表示されます — コピーしてください

### 2. トークンを設定

```bash
hermes config set TELEGRAM_BOT_TOKEN "123456:ABC-xxx"
```

または `~/.hermes/.env` に直接追加：

```
TELEGRAM_BOT_TOKEN=123456:ABC-xxx
```

### 3. 許可ユーザーを設定

```yaml
# ~/.hermes/config.yaml
gateway:
  platforms:
    telegram:
      enabled: true
      allowed_users:
        - your_telegram_username
```

### 4. ゲートウェイを起動

```bash
hermes gateway
```

Telegramのボットにメッセージを送ると、Hermesが応答します！

## Discord セットアップ

### 1. Discordアプリケーションを作成

1. [Discord Developer Portal](https://discord.com/developers/applications) にアクセス
2. "New Application" をクリック
3. "Bot" セクションでトークンを取得
4. "Privileged Gateway Intents" で Message Content Intent を有効化

### 2. トークンを設定

```bash
hermes config set DISCORD_BOT_TOKEN "MTIz..."
```

### 3. ボットをサーバーに招待

Developer Portalの "OAuth2" → "URL Generator" で以下の権限を選択：
- `bot`
- `Send Messages`
- `Read Message History`

生成されたURLでボットを招待します。

## ゲートウェイコマンド（チャット内）

| コマンド | 説明 |
|---------|------|
| `/new` | 新しい会話を開始 |
| `/model` | モデルを変更 |
| `/status` | 現在のステータスを表示 |
| `/stop` | 現在の処理を中断 |
| `/skills` | スキル一覧を表示 |
| `/compress` | コンテキストを圧縮 |
| `/usage` | 使用量を表示 |

## スケジュールタスク

ゲートウェイ経由で自動タスクを実行できます：

```
❯ 毎朝9時にHacker Newsのトップ記事をTelegramに送って
```

```
❯ 毎週月曜日にGitHubリポジトリのPRをまとめてDiscordに投稿して
```

エージェントが自動でcronジョブを設定し、指定したプラットフォームに結果を配信します。

## systemdサービス

ゲートウェイをシステムサービスとして設定すると、サーバー再起動後も自動で起動します：

```bash
# サービスとしてインストール
hermes gateway install

# サービスの管理
sudo systemctl status hermes-gateway
sudo systemctl restart hermes-gateway
sudo journalctl -u hermes-gateway -f  # ログを表示
```

## 次のステップ

- **[Telegram詳細ガイド（英語）](./messaging/telegram.md)** — フォーラムトピック、プロキシ設定など
- **[Discord詳細ガイド（英語）](./messaging/discord.md)** — ボイスチャンネル、スラッシュコマンドなど
- **[Cronスケジューリング（英語）](./features/cron.md)** — 自動タスクの詳細設定
- **[日本語ランディングページ](https://hermes-agent.org/ja/)** — 概要を日本語で確認
