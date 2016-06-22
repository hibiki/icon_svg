## icon SVG のテスト

### 注意点

- アイコン用のSVGファイルは、すべて高さを揃える

### 出力

/v3/make_svg_sprite/ ディレクトリで作業する。
※/v3/ 直下ではないので注意。

```
npm install
npm run build
```

`npm install` は最初の 1 回だけで OK 。
分からなくなったらとりあえず `npm run` すればコマンドが見れる。

### ファイル構造

出力前
```
┗/v3/
　┣/make_svg_sprite/
　┃　┣gulpfile.js
　┃　┣package.json
　┃　┗_template.scss　…スプライトSCSS用のテンプレート
　┣/img/
　┃　┗/svg/
　┃　　　┗/icon/　…ここにアイコンSVGを入れる
```

出力後
```
┗/v3/
　┣/make_svg_sprite/
　┃　┗…省略…
　┣/img/
　┃　┗/svg/
　┃　　　┣/icon/
　┃　　　┗svg_sprite.svg　…出力されるスプライト用SVG
　┗/css/
　　　┗/scss/
　　　　　┗_svg_sprite.scss　…出力されるスプライト用SCSS
```
