# Cocos Service Pack

![logo](/docs/static/img/logo2.png)

> 该项目当前为内部预览版，还在完善中，还未适配原生平台（cocos2d-x、jsb-adapter）

这是一个对 Cocos Creator 引擎进行特性增强、修复与优化的**开源非官方服务包（Service Pack）**。

该项目尽量以最符合原始架构设计的方式为引擎加入新的特性、修复已知问题以及优化性能。

正因为如此，大部分项目使用这个服务包就像升级引擎版本一样简单。

<br>

> 项目的起源
> 
>2021 年 2 月，Cocos 发布 Cocos Creator 3.0，并在 3.x 发布之后不会再继续开发 2.x 版本的新特性，所有维护工作也会在 2023 年完全停止。
>
>但是 2.x 在一些方面还并不完善，所以这个非官方的引擎“魔改”合集的开源项目应运而生。
>
>相似的事情发生在 2014 年 4 月，官方停止了对 Windows XP 的维护，之后 Harkaz 发布了一个非官方服务包 Service Pack 4 (SP4)。
>
>受到 Windows XP 命名的启发，这个非官方的引擎“魔改”合集取名为 Service Pack。
>
>Service Pack 暂时只适配 Cocos Creator 2.x 版本，Cocos Creator 3.x 正在蒸蒸日上，其引擎架构还在不断地迭代（不稳定），若对其进行修改，之后的维护工作会非常大。

<br>

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [重要特性](#重要特性)
- [功能演示](#功能演示)
- [使用方法](#使用方法)
- [更新日志](#更新日志)
  - [Service Pack v1.0.0](#service-pack-v100)
- [贡献指南](#贡献指南)
- [常见问题](#常见问题)
  - [为什么要直接修改引擎？](#为什么要直接修改引擎)

<!-- /code_chunk_output -->

## 重要特性

- **支持多纹理渲染**（多纹理材质、多纹理合批）
- **支持高 DPI 文本渲染**（Label、RichText 组件）
- **重构动态合图**（支持自动多纹理合批、优化算法、复用废弃空间等特性）
- **重构 Label 组件的 CHAR 缓存模式**（支持自动多纹理合批、多图集、复用废弃空间等特性）
- **Spine 组件支持与其它组件合批、合入动态图集与 SpriteFrame 换装**

> 服务包对引擎的所有改动都是开源的，并且每个改动都会附上一篇原理说明的文档，当你发现问题时请进行反馈，或者直接默默地帅气地提交一个 PR，帮助我们一起完善这个项目。

## 功能演示

[Web Desktop 演示项目](https://smallmain.github.io/cocos-service-pack/demo/web-desktop/index.html)

[Web Mobile 演示项目](https://smallmain.github.io/cocos-service-pack/demo/web-mobile/index.html)

## 使用方法

服务包通过自定义引擎的方式来修改引擎代码，你可以：

- 通过我们发布的引擎扩展一键安装
- 下载源码包，使用里面的 Git Patch 文件进行安装

具体教程可以参考 [安装指南](https://smallmain.github.io/cocos-service-pack/docs/installation-guide/installation-intro)。

## 更新日志

### Service Pack v1.0.0

- **[新特性] 支持多纹理渲染**
- **[新特性] 重构动态图集，支持多个新特性**
- **[新特性] 重构 cc.Label 的 Char 缓存模式，支持多个新特性**
- **[新特性] 支持高 DPI 文本渲染**
- **[新特性] Spine 组件支持参与动态图集、与其它组件合批、使用 SpriteFrame 换装**
- [新特性] cc.Label、cc.RichText、cc.Sprite、cc.MotionStreak、Spine 组件支持使用多纹理材质，并支持自动切换材质机制
- [新特性] cc.RichText 支持使用自定义材质
- [修复] 直接修改 Effect 的属性不回导致其变体的 hash 值刷新
- [修复] CHAR 缓存模式 hash 计算可能会有重复的问题
- [调整] 默认禁用 Label 原生 TTF 渲染器

所有更新日志请移步 [此处](https://smallmain.github.io/cocos-service-pack/docs/update-log)。

## 贡献指南

非常欢迎你能和我们一起来完善这个项目，所有的一切都通过 Github 进行：

- 如果你有问题或者好的想法，请建立 `Issues` 或进入 `Discussions` 。
- 如果你有新的代码提交，请建立 `Pull requests`。

原则上允许对引擎的任何增强与修改，但是**任何修改都必须兼容引擎原有的特性，不允许删除引擎原有的特性**，并且请认真思考代码设计。

## 常见问题

### 为什么要直接修改引擎？

直接修改引擎可能是大部分人认为的下下策，比如我们常听到的一些声音：

- 通过 “修改对象的原型” 等一些编程技巧做成一个插件脚本
- 没接触过自定义引擎，不知道该怎么用，感觉很可怕
- 我已经修改过引擎的某些部分了，不能直接安装

以上问题我们都思考过，

首先，现在引擎的 2.x 版本已经停止了更新（仅做一些维护工作），也就是说修改引擎不会遇到在官方新版本发布后需要用大量时间去适配的情况。

其次，即使服务包中的所有改动都能做成一个插件脚本，但是无法兼容原生平台，并且一般都需要大量拷贝代码，包体会增大，可维护性可能会大幅降低。

最后，我们希望它接近 “原生” 的使用体验，就像引擎本来就有的功能一样，对于没有接触过自定义引擎的人，我们提供的引擎扩展可以一键安装。

对于已经修改过引擎的人，由于服务包提供的是 Git Patch，所以可以让你在已有修改的基础上轻松应用上服务包的改动，甚至你可以只应用你想要的特性。

### Cocos Creator 报 Error: Can not parse this input:undefined 错误

没有找到服务包的内置资源，请记得安装配套的引擎扩展。

---
**最后的最后，希望这个项目能帮助到你的学习或工作，enjoy！**
