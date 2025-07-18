# GreenSpark Solutions - 静的コーポレートサイト

中小製造業向けの省エネ・環境コンサルティング会社「GreenSpark Solutions」の公式ウェブサイトです。

## 技術スタック

- **フロントエンド**: Next.js 14 (App Router)
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **コンテンツ管理**: Markdown + JSON
- **フォーム**: Formspree
- **デプロイ**: Vercel

## 特徴

- 📱 レスポンシブデザイン
- 🎨 GreenSpark ブランドカラー (#2AA876, #F4D35E)
- 🌏 日本語対応 (Noto Sans JP)
- 📝 Markdown ベースのコンテンツ管理
- 📧 Formspree を使用したお問い合わせフォーム
- ⚡ 完全静的生成 (SSG)

## サイトマップ

- `/` - ホーム
- `/company/mission` - ミッション
- `/company/team` - チーム
- `/service/consulting` - コンサルティング
- `/service/audit` - 省エネ診断
- `/cases` - 導入事例
- `/contact` - お問い合わせ

## 開発環境セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

http://localhost:3000 でサイトを確認できます。

## コンテンツ更新

### Markdown ファイルの編集
`content/` フォルダ内の Markdown ファイルを編集することで、コンテンツを更新できます。

```
content/
├── company/
│   ├── mission.md
│   └── team.json
├── service/
│   ├── consulting.md
│   └── audit.md
└── cases/
    ├── 2025-07-greenfactory.md
    ├── 2025-06-smartparts.md
    └── 2025-05-ecotech.md
```

### Front Matter 例
```markdown
---
title: "ページタイトル"
date: "2025-01-01"
excerpt: "概要文"
tags: ["タグ1", "タグ2"]
---

# コンテンツ本文
```

## デプロイ

### Vercel へのデプロイ
1. GitHub リポジトリに push
2. Vercel にリポジトリを接続
3. 自動デプロイが開始されます

### 環境変数（必要に応じて）
- `NEXT_PUBLIC_FORMSPREE_ID`: Formspree のフォーム ID

## Formspree セットアップ

1. [Formspree](https://formspree.io/) でアカウント作成
2. 新しいフォームを作成
3. フォーム ID を取得
4. `app/contact/page.tsx` の `YOUR_FORM_ID` を実際の ID に置き換え

## ビルド & テスト

```bash
# ビルド
npm run build

# リント
npm run lint

# 型チェック
npx tsc --noEmit
```

## プロジェクト構造

```
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   ├── company/           # 会社案内ページ
│   ├── service/           # サービスページ
│   ├── cases/             # 導入事例ページ
│   └── contact/           # お問い合わせページ
├── components/            # React コンポーネント
│   └── Navigation.tsx     # ナビゲーション
├── content/              # コンテンツファイル
├── lib/                  # ユーティリティ関数
│   └── markdown.ts       # Markdown 処理
├── public/               # 静的ファイル
└── vercel.json          # Vercel 設定
```

## カスタマイズ

### カラーの変更
`app/globals.css` で CSS カスタムプロパティを編集:

```css
:root {
  --greenspark-green: #2AA876;
  --greenspark-yellow: #F4D35E;
}
```

### フォントの変更
`app/layout.tsx` で Google Fonts を変更:

```tsx
import { Noto_Sans_JP } from "next/font/google";
```

## ライセンス

MIT License

## サポート

このプロジェクトに関するご質問は、Issues でお気軽にお問い合わせください。
