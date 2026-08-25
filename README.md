# Keyboard Sheet Generator

キーボード展示の横に置く A6 横（148mm × 105mm）の紹介シートを、ブラウザで作成・印刷する静的Webアプリです。

## 主な機能

- Blank / ながれキーの2テンプレート
- 入力内容のリアルタイムプレビューと自由記入欄の自動縮小
- 複数シートの追加、編集、複製、削除
- A6単体印刷、A4 4面付け印刷、カットガイド、手書き用空欄シート
- `localStorage` によるブラウザ内保存

入力内容は外部へ送信されません。ビルドやサーバーは不要で、`index.html` をChrome / Edge / Firefoxで開いて利用できます。

## GitHub Pages

このリポジトリをGitHubへpushし、Settings → Pagesで公開元にリポジトリのブランチとルート（`/`）を選択してください。

## 構成と拡張

画面は `index.html`、通常表示は `css/app.css`、印刷は `css/print.css`、保存・印刷・画面処理は `js/` に分離しています。テンプレート差分は `template-blank` / `template-nagare` クラスと、`js/app.js`・`js/print.js` のテンプレート値で管理しています。新しいイベント版を追加する場合は、テンプレート選択肢、テンプレートクラスのCSS、フッターやロゴ表示をこの2つのJSファイルに追加してください。ロゴ素材は `assets/` 配下に置けます。
