# テスト計画

- Repo: `smartphone-editing-small-display`
- Domain: IoT
- Rank: 60 / P3 / Score 52
- Idea No: 13
- アイデア名: スマホ編集・小型端末表示
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\IoT\smartphone-editing-small-display`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/smartphone-editing-small-display-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
