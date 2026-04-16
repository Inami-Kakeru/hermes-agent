# Hermes Agent へのコントリビューション

Hermes Agent へのコントリビューションに興味を持っていただきありがとうございます！

> **注意:** 詳細な英語版ガイドは [CONTRIBUTING.md](CONTRIBUTING.md) をご覧ください。こちらは概要の日本語訳です。

---

## コントリビューションの優先順位

以下の順で重視しています：

1. **バグ修正** — クラッシュ、誤動作、データ損失。常に最優先。
2. **クロスプラットフォーム互換性** — Windows、macOS、異なるLinuxディストロ、ターミナルエミュレータ。
3. **セキュリティ強化** — シェルインジェクション、プロンプトインジェクション、パストラバーサル、権限昇格。
4. **パフォーマンスと堅牢性** — リトライロジック、エラーハンドリング、グレースフルデグラデーション。
5. **新しいスキル** — ただし広く有用なもののみ。
6. **新しいツール** — 稀にしか必要ありません。ほとんどの機能はスキルとして実装すべきです。
7. **ドキュメント** — 修正、明確化、新しい例。

---

## スキルとツールの判断基準

### スキルにすべきケース：
- 指示 + シェルコマンド + 既存ツールで表現できる機能
- 外部CLIやAPIをラップし、`terminal` や `web_extract` 経由で呼び出せる
- カスタムPython統合やAPIキー管理が不要
- 例：arXiv検索、Gitワークフロー、Docker管理、PDF処理

### ツールにすべきケース：
- APIキー、認証フロー、マルチコンポーネント設定のエンドツーエンド統合が必要
- 毎回正確に実行する必要があるカスタム処理ロジック
- バイナリデータ、ストリーミング、リアルタイムイベントの処理
- 例：ブラウザ自動化、TTS、ビジョン分析

---

## 開発環境セットアップ

### 前提条件

| 要件 | 備考 |
|------|------|
| **Git** | `--recurse-submodules` サポート付き |
| **Python 3.11+** | uvが未インストールの場合は自動インストール |
| **uv** | 高速Pythonパッケージマネージャー ([インストール](https://docs.astral.sh/uv/)) |

### クイックスタート

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

## PR プロセス

1. フォークしてフィーチャーブランチを作成
2. 変更をコミット（明確なコミットメッセージで）
3. テストを追加・通過させる
4. PRを作成 — テンプレートに従う
5. レビューを待つ

### コミットメッセージ形式

```
type(scope): 短い説明

# 例:
fix(gateway): WhatsApp受信時のクラッシュを修正
feat(skills): arXiv検索スキルを追加
docs(readme): インストール手順を更新
```

タイプ: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`

---

## コミュニティ

- 💬 [Discord](https://discord.gg/NousResearch) — `#hermes-agent` チャンネル
- 🐛 [Issues](https://github.com/NousResearch/hermes-agent/issues) — バグ報告・機能リクエスト
- 💡 [Discussions](https://github.com/NousResearch/hermes-agent/discussions) — 質問・アイデア

ご不明な点があれば、お気軽にDiscordで質問してください！
