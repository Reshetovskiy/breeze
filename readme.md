# gulp web-west
Сборка gulp

## Установка

```
npm i gulp gulp-autoprefixer gulp-bower gulp-connect gulp-cssmin gulp-filter gulp-imagemin gulp-sass gulp-livereload gulp-include gulp-uglify gulp.spritesmith gulp-svg-sprite gulp-svgmin gulp-cheerio gulp-replace gulp-plumber imagemin-pngquant opn rimraf -g

npm link gulp gulp-autoprefixer gulp-bower gulp-connect gulp-cssmin gulp-filter gulp-imagemin gulp-sass gulp-livereload gulp-include gulp-uglify gulp.spritesmith gulp-svg-sprite gulp-svgmin gulp-cheerio gulp-replace gulp-plumber imagemin-pngquant opn rimraf
```

## Команды

```
gulp build 
gulp build:watch
gulp server - run build + livereload
```
## Bower
Установщик bower нужно запускать из корня, устанавливаться пакеты будут в `bower_components`, а компелироваться в `buildpath + "/vendor"`

## Структура проекта
```
src/fonts - шрифты
src/img/work - все картинки кроме иконок для спрайтов, будет скомпелировано в `buildpath + "/img"`
src/img/icons - все картинки иконок для спрайтов, будет скомпелировано в `src/work/icons.png` + `src/less/partials/icons.less`
src/sass - стили, скомпелируется в `buildpath + "/css"`
src/js - скрипты, скомпелируется в `buildpath + "/js"`
pages - html файлы, скомпелируются файлы из корня `src` в корень `buildpath`
```