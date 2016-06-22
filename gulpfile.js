var gulp           = require( 'gulp' );
var sass           = require( 'gulp-sass' );
var svgSpriteSheet = require( 'gulp-svg-spritesheet' );

gulp.task( 'svgSprite', function () {

  var SVGSize = 128; // 個別の SVG アイコン作成時に統一した高さ。(今回は 128 px)

  return gulp.src( [ './v3/make_svg_sprite/svg/*.svg' ] )
  .pipe( svgSpriteSheet( {
    // SCSSテンプレートの中で利用する値
    cssPathSvg: './v3/img/svg_sprite.svg',
    // ガター（スプライト同士の余白）
    padding: 10,
    pixelBase: SVGSize,
    // スプライトの配置設定
    positioning: 'packed',
    // 用意したSCSSテンプレート
    templateSrc: './v3/make_svg_sprite/_template.scss',
    // テンプレートから生成されるSCSSファイル
    templateDest: './v3/css/scss/_svg_sprite.scss',
    units: 'em'
  } ) )
  .pipe( gulp.dest( './v3/img/svg_sprite.svg' ) );

} );

// gulp.task('default', ['svgSprite']);
