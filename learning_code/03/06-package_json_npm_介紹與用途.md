
# package.json

建議每一個項目都要有一個 `package.json` 文件
(包 的描述文件, 就像產品的說明書依樣)
給人踏實的感覺

文件可以通過 `npm init` 的方式自動生成出來

其中最重要的是 `package.json 的 dependencies` 選項
如此項目給別人時, 其他人只要使用 `npm install` 即可把所需依賴的項目下載下來

為此, 執行`npm install` 都建議加上 `--save`


# npm  (npmjs.com)

* npm --version
* npm install --global npm // 自行升級版本

* npm init

- npm init -y 可以跳過導引, 快速生成 package.json

* npm install

- 一次性的把dependencies 選項中的依賴項目全部安裝
- npm i

* npm install 包名

- 只下載
- 也可以輸入 npm i 包名

* npm install --save 包名

- 下載並且保存依賴項(package.json 文件中的 dependencies 選項)
- 也可以輸入 npm i -S 包名

* npm unintall 包名

- 只刪除, 如果有依賴項還是會保存
- npm un 包名

* npm uninstall --save 包名

- 刪除, 同時也刪除依賴項目
- npm un -S 包名

* npm help

- 查看幫助

* npm 命令 --help

- 查看指定命令的使用幫助
- 例如忘了 uninstall 命令的簡寫 or option, 可輸入 `npm uninstall --help` 來查看只用的幫助




