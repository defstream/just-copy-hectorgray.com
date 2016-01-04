# hectorgray.com
This is the website for http:/www.hectorgray.com, updates to master are automatically deployed to www.hectorgray.com. Pull requests are welcome ( Even if you are not Hector Gray :).


# Installation
If you wish to use this for your own site, don't go throw the trouble of just scraping & pasting. Just install and update the index.html, then deploy to your own hosting provider.

```shell
$ npm install just-copy-hectorgray.com <FolderToInstallToWebsite>
```

# Development Scripts
Before running any development scripts, be sure to first install the dev modules.

```shell
$ npm install just-copy-hectorgray.com --save --dev
```

#### Build Website
This will generate the html that you can publish to your hosting provider in the ./build folder.

```shell
$ npm run build
```

```
#### Build Documentation
Outputs code documentation files to the `./doc/api` folder.

```shell
$ npm run doc
```

#### Static Analysis
Outputs static analysis files to the `./doc/analysis` folder.

```shell
$ npm run analyze
```

#### Test + Coverage
Outputs code coverage files to the `./doc/coverage` folder.

```shell
$ npm run test
```

**CURRENT COVERAGE REPORT**

![codecov.io](https://codecov.io/github/defstream/just-copy-hectorgray.com/branch.svg?branch=master)

### Discuss
Chat channel:    <a href="https://gitter.im/defstream/just-copy-hectorgray.com"><img src="https://img.shields.io/gitter/room/defstream/just-copy-hectorgray.com.svg" alt="Chat"></a>

Questions or comments can also be posted on the work.flow Github issues page.

### Maintainers
Hector Gray (Twitter: <a href="https://twitter.com/defstream">@defstream</a>)

### Contribute
Pull Requests welcome. Please make sure all tests pass:

```shell
$ npm test
```

Please submit <a href="https://github.com/defstream/just-copy-hectorgray.com/issues">Github issues</a> for any feature enhancements, bugs or documentation problems.

### License
MIT
