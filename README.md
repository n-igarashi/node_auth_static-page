# StaticPage for nodeApp(Heroku)

> Herokuに静的ページをベーシック認証付きでアップするときのテンプレ＆メモ


## USAGE
``` bash
# distに静的ページをいれてから・・・

# herokuにログイン
$ heroku login

# git
$ git init && git add . && git commit -m "comment"

# heroku create app
$ heroku create <app-name>

# push
$ git push heroku master
```

### Basic Auth
`auth.js` にIDとPASSを記述
``` javascript:auth.js
const admins = {
  'BASIC_AUTH_ID': { password: 'BASIC_AUTH_PASS' },
};
```

公開するルートディレクトリを `server.js` に記述
``` javascript:server.js
app.use(express.static('dir_name'));
```
