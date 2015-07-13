# cuckoo

![Ghost Support](https://img.shields.io/badge/ghost-powered-brightgreen.svg)
![License MIT](https://img.shields.io/github/license/mashape/apistatus.svg)

A ghost theme with minimalist and responsive design. Design(Demo) for https://blog.swift.how

## Key Points
- [x] Disqus Comment Support 💬
- [x] Favicon and Apple Touch Icon Setting 📲
- [x] Highlight Code 💅
- [x] Friendly to Mobile 📱
- [x] Latest Google Analytics Code Support 📈

## How to Install or Use
You should already set up a [ghost blog](https://ghost.org/). If you are not prepared yet, please refer to the official [installation page](http://support.ghost.org/installation/).

When you get ready, just clone the repo to a folder under your blog's theme folder: `content/themes/`. Restart ghost and you can find the `Cuckoo` in the blog setting panel.

## How to Modify or Develop
### Sass
Now, we use sass for writing css simply, so you should have sass compiler installed.  
Check if sass already installed.
```
sass -v
> Sass 3.4.13 (Selective Steve)
```

### Gulp
Now, we use [gulp](http://gulpjs.com/) tool, make css file concat and compress. Running below code at project root path.
```
sudo npm install
```
This command will install all dependencies, then run:
```
sudo gulp
```
This command will running default task in `Gulpfile.js`. The task will watch all your `*.scss` file, and parse `cuckoo.scss` file when any change saved. You can read `Gulpfile.js` for more detail info.

### CSS Color Reference
- [NIPPON COLORS - 日本の伝統色](http://nipponcolors.com/)
- [randomColor.js](http://llllll.li/randomColor/)

## Any Bugs
Wake me up, even I am sleeping deeply.
- Add an [issue](https://github.com/SwiftHow/cuckoo/issues)
- Make a pull request (Appreciated)
