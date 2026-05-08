# 要件定義

- Repo: `smartphone-editing-small-display`
- Domain: IoT
- Rank: 60 / P3 / Score 52
- Idea No: 13
- アイデア名: スマホ編集・小型端末表示
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 背景
Androidで入力したテキスト、画像、チェック項目をM5StackやPi掲示板へ送る。

## 課題
小型端末だけでは入力や編集が難しい。

## closed alpha要件
- LAN simulator, mock device, CLI, and web dashboardとして実機や本番外部サービスなしで代表フローを確認できる。
- `samples/representative-suite.json`で4代表シナリオを自動検証する。
- MVPだけで止めず、UI/UX、責務分割、運用、配布準備まで整備する。
- 手動テスト未実施を明記し、QCDS最高評価はS-に制限する。
