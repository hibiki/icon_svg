var gulp           = require( 'gulp' );
var sass           = require( 'gulp-sass' );
var svgSpriteSheet = require( 'gulp-svg-spritesheet' );

gulp.task( 'svgSprite', function () {

  var SVGSize = 128; // 個別の SVG アイコン作成時に統一した高さ。(今回は 128 px)

  return gulp.src( [ './src/SVGSprite/*.svg' ] )
  .pipe( svgSpriteSheet( {
    // SCSSテンプレートの中で利用する値
    cssPathSvg: '../SVGSprite.svg',
    // ガター（スプライト同士の余白）
    padding: 10,
    pixelBase: SVGSize,
    // スプライトの配置設定
    positioning: 'packed',
    // 用意したSCSSテンプレート
    templateSrc: './src/SVGSprite/_template.scss',
    // テンプレートから生成されるSCSSファイル
    templateDest: './src/scss/_SVGSprite.scss',
    units: 'em'
  } ) )
  .pipe( gulp.dest( './build/SVGSprite.svg' ) );

} );
