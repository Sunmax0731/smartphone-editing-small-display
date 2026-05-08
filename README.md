# smartphone-editing-small-display

スマホ編集・小型端末表示 の closed alpha prototype。Androidで入力したテキスト、画像、チェック項目をM5StackやPi掲示板へ送る。

## Status

- Version: 0.1.0-alpha.1
- Rank: 60 / P3 / Score 52
- Domain: IoT
- Public target: GitHub Release / 自宅LAN
- Manual testing: not run by Codex

## Included

- LAN simulator, mock device, CLI, and web dashboard
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.
