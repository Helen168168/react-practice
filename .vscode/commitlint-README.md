# installation step

## First step
pnpm install lint-staged husky

## second step
pnpm install @commitlint/cli @commitlint/config-conventional

## third step
{
  "scripts": {
      "prepare": "husky install"
  }
}
npm install安装完项目依赖后会执行 husky install命令。

## forth step
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' 
在.husky文件里生成文档来规范我们的commit message信息

npx husky add .husky/pre-commit "npm run lint"
在.husky文件里生成文档来规范执行git commit命令时会先触发pre-commit这个脚本
注意：​​npm run lint​​​ 命令根据你自己项目中script脚本而定，​​eslint --ext .js,.vue src​​在lint脚本中

## fifth step
根目录生产.commitlint.js文档并设置如下配置
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-case': [0, 'never'],
        'type-enum': [2, 'always', ['build', // 构建
            'ci', //ci
            'chore', // 改变构建流程或增加依赖库，工具等
            'docs', // 仅仅修改文档，比如README
            'feat', // 新增feature
            'fix', // 修复bug
            'perf', // 优化相关，比如提升性能、体验
            'refactor', // 代码重构，没有增加新功能或修复bug
            'revert', //回滚到上一个版本
            'style', // 仅仅修改了空格、缩进、等，不改变代码逻辑
            'test' // 测试用例，包括单元测试集成测试等

        ]]
    }
}