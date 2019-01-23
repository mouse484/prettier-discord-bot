module.exports = {
    parser: "babel",//パーサーの指定(api利用時必要)
    printWidth: 80, //80で折返し
    tabWidth: 4, //4のが少し見やすい
    useTabs: false, //Tabではなく空白を使う
    semi: true, //セミコロンを付ける
    singleQuote: false, //クオートの強制はしない
    trailingComma: "es5", //配列など必要なところにコンマをつける
    bracketSpacing: true, //{}に空白を作る{}=>{ }
    arrowParens: "always", //(x)=>を分かりやすいために()必須にする
};
