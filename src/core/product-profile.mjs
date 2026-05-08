export const productProfile = {
  "repo": "smartphone-editing-small-display",
  "title": "スマホ編集・小型端末表示",
  "domain": "IoT",
  "version": "0.1.0-alpha.1",
  "rank": 60,
  "tier": "P3",
  "score": 52,
  "publicTarget": "GitHub Release / 自宅LAN",
  "overview": "Androidで入力したテキスト、画像、チェック項目をM5StackやPi掲示板へ送る。",
  "problem": "小型端末だけでは入力や編集が難しい。",
  "differentiation": "スマホを編集、M5Stackや電子ペーパーを表示と確認に分担する。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/simulator",
    "src/device-adapter",
    "src/host-adapter"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "実機なしで検証できるようsample telemetry、mock device、dry-run CLI、Web dashboardに閉じる。",
    "家庭LAN公開時は認証、端末allowlist、危険操作の二段階確認、ログ、復旧手順を必須にする。",
    "カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存は読み取り、匿名サンプル、dry-runを既定にする。"
  ]
};
