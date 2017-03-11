# egghead 学习总结

## converge
使用 after 、 branch function 减少 参数的使用

## fromPairs
抽象 reduce 构造对象的函数

## project
取数组中对应的属性

## lensProp
指定属性，与 view, set, over 配置，对指定属性执行查看、设置、自定设置

``` javascript
const xLens = R.lensProp('x')

R.view(xLens, {x: 1}) // 1
R.set(xLens, 2, {x: 1}) // 2
R.over(xLens, x => 3 * x, {x: 1}) // 3
```

## cond
多分支条件逻辑，等同于 `if else...`，类似的还有双分支 `ifElse` 和单分支的 `when`

