## icon SVG のテスト

### 注意点

- アイコン用のSVGファイルは、すべて高さを揃える

### 出力

`npm run build`

分からなくなったらとりあえず `npm run` すればコマンドが見れる。

### ファイル構造

出力前
```
┗/v3/
　┣/make_svg_sprite/
　┃┣/svg/
　┃┗_template.scss
```

出力後
```
┗/v3/
　┣/make_svg_sprite/
　┃┣/svg/
　┃┗_template.scss
　┣/css/
　┃┗_svg_sprite.scss
　┗/img/
　　┗svg_sprite.svg
```

パスは後で調整するものとして仮
