---
title: "代理工具大全"
author: "404"
pubDatetime: 2026-06-05T00:00:00+08:00
modDatetime: 2026-07-26T14:05:41.657Z
description: "整理常见代理工具的功能、适用场景、优缺点和使用建议，帮助新手快速选择合适的软件。"
category: "科学上网"
tags: ["代理工具","推荐"]
featured: true
draft: false
ogImage: "./proxy-toolbox.assets/cover.webp"
---
> 更新：2026/06/05 后续更新路由器方案

<span id="37668a6e-96af-814b-abe4-db36b30b9b83"></span>

## 代理工具怎么选？
- 我就手机或者电脑随便看看，需求不大➡️直接看下面对应设备的代理工具选择
- 一进家门就像肉身翻墙，我不怕麻烦➡️直接看下面路由器

---


<span id="37668a6e-96af-815a-86e2-f9fcb0770711"></span>

## 🌐网络代理工具
> *点开 github 链接 不知道怎么下载&不知道下载哪个 请自行问 AI 解决.*

<span id="37668a6e-96af-81c7-a517-d77c102fe184"></span>

### 移动端
🍎 iOS / iPadOS / tvOS 苹果

- <span>[**Shadowrocket**](https://apps.apple.com/app/shadowrocket/id932747118)</span> `$2.99` 俗称小火箭，新手优先，便宜，教程多，用户多，最经典、最强大的规则-based 代理客户端。
- <span>[**Stash**](https://apps.apple.com/app/stash-rule-based-proxy/id1596063349)</span> `$5.99`支持  Clash 配置习惯，需要精细分流、解锁流媒体、广告拦截、MITM 调试的用户。
- <span>[**Loon**](https://apps.apple.com/app/loon/id1373567447)</span> `$7.99` 脚本党 / 插件党 和需要深度自定义（MITM、JS 修改请求、复杂分流）的用户。网络调试、抓包、广告拦截、重度规则用户。
- <span>[**Quantumult X**](https://apps.apple.com/app/quantumult-x/id1443988620)</span>  `$9.99` 简称 圈X，适用于规则党 / 脚本党 / 调试用户（MITM、重写、HTTP Analyzer 很强）。机场订阅用户中，需要精细分流、抓包测试、广告拦截或自定义 DNS 的人。
- <span>[**Surge**](https://apps.apple.com/app/surge-5/id1442620678)</span>  `$49.99/一年更新`  你把许可证绑定到你的iCloud账户，还可以免费升级到6台设备。最专业、最强大的网络工具型代理客户端，专业开发者 / 重度调试用户（MITM、抓包、复杂脚本、精细规则）。追求极致性能和自定义能力的“土豪”用户。
🤖 Android 安卓

- <span>[**Exclave**](https://github.com/dyhkwong/Exclave)</span> 基于基于v2ray核心，协议更新非常非常积极，自建党首选。
- <span>[**FlClash**](https://github.com/chen08209/FlClash)</span> 基于 Clash Meta 内核，轻量简洁，界面清楚，更新积极，仓库有中文 README，社区教程也较多。
- <span>[**Clash Meta for Android**](https://github.com/MetaCubeX/ClashMetaForAndroid)</span>[ ](https://github.com/MetaCubeX/ClashMetaForAndroid)是目前最主流的 Clash Meta（mihomo）内核 Android 图形客户端，是 Clash for Android 的社区维护分支，协议支持全面。
- <span>[**v2rayNG**](https://github.com/2dust/v2rayNG)</span> 老牌 Android 客户端，是 Android 上最经典、用户基数最大的 V2Ray / Xray 客户端，适合自建节点和单节点用户。
- <span>[**Sing-box for Android**](https://sing-box.sagernet.org/zh/clients/android/)</span>[ ](https://sing-box.sagernet.org/zh/clients/android/) 很强，但配置门槛高，高性能、低延迟（尤其是 Hysteria 2 / QUIC 类协议）的用户，喜欢统一配置格式（sing-box JSON），跨平台（有 Apple/Windows 等对应客户端）体验一致的人，需要现代路由、DNS 优化、NAT 穿越等高级功能的机场测试用户。

<span id="37668a6e-96af-81ae-a70a-fd11a45f3844"></span>

### 电脑端
🍎 macOS

- <span>[**FlClash**](https://github.com/chen08209/FlClash)</span> 体验与 Windows/Android 高度一致，UI 简洁。跨平台，适合多设备追求一致体验。
- <span>[**Clash Verge Rev**](https://github.com/clash-verge-rev/clash-verge-rev)</span> 现代简洁 UI，操作更友好，用户超多，资源占用低。
- <span>[**Singbox for Mac**](https://sing-box.sagernet.org/zh/clients/apple/)</span> 配置统一，TUN 性能好、轻量。学习成本稍高。
- <span>[**Surge for Mac**](https://nssurge.com/)</span> `$49.99/一年更新` 如果你计划用 Mac 做家庭软路由，Surge 是顶级选择
- <span>[**Stash Mac**](https://stash.ws/macos/pricing/)</span> `£12.00/一年 £48.00/终身`** **一句话 clash 生态在 Apple 设备上的优化版。
🪟 Windows

- <span>[**FlClash**](https://github.com/chen08209/FlClash)</span>  win 端专属IPC 优化、服务模式、TUN 稳定性迭代，跨平台一致性更好。
- <span>[**Clash Verge Rev**](https://github.com/clash-verge-rev/clash-verge-rev/)</span> 用户多，桌面体验成熟，适合 Clash 配置用户。
- <span>[**V2rayN**](https://github.com/2dust/v2rayN/releases/latest)</span> 老牌 Windows 客户端，界面较老派，稳定简洁易用可靠，协议支持广，分流规则弱，适合自建节点和单节点用户。
- <span>[**Sparkle**](https://github.com/xishang0128/mihomo-party)</span> 是 Mihomo Party / Clash Party 的 fork/分支，体积较大、资源占用高。Sub-Store 集成更好。
- <span>[**GUI.for.SingBox**](https://github.com/GUI-for-Cores/GUI.for.SingBox)</span> 启动快、功耗友好，适合长期运行，配置本身较复杂。
🐧 Linux  没用过不评价

- <span>[**FlClash**](https://github.com/chen08209/FlClash)</span><span>** **</span>
- <span>[**Clash Verge Rev**](https://github.com/clash-verge-rev/clash-verge-rev/)</span><span>** **</span>
- <span>[**V2rayN**](https://github.com/2dust/v2rayN/)</span><span>**  **</span>
- <span>[**Singbox for Linux**](https://sing-box.sagernet.org/zh/)</span>

<span id="37668a6e-96af-8147-a78e-fcbda558b568"></span>

## 🛜路由器
新手不建议第一步就上路由器。

- 华硕路由器 + [官改 / 梅林固件](https://www.asusgo.com/firmware)  <br><span>[**fancyss**](https://github.com/hq450/fancyss)</span>** **专为 ASUS 华硕路由器开发

---


<span id="37668a6e-96af-81c5-be6b-d93ac31e7fbc"></span>

## 🔁订阅转换
- [https://sub-web.wcc.best](https://sub-web.wcc.best/)
- [https://amyconvert.com](https://amyconvert.com/) 
- [https://scripthub.vercel.app](https://scripthub.vercel.app/) 
- [https://sub.dler.io](https://sub.dler.io/)

---


<span id="37668a6e-96af-81ea-a3b0-f92811125271"></span>

## 🧠最简单的选择

| 设备 / 场景 | 先看这个 |
| --- | --- |
| Android 普通机场订阅 | FlClash |
| Android 自建节点 | v2rayNG |
| iPhone / iPad 新手 | Shadowrocket |
| iPhone / iPad 进阶分流 | Stash / Quantumult X |
| Windows 普通用户 | FlClash / Clash Verge Rev |
| Windows 自建节点 | V2rayN |
| macOS 普通用户 | FlClash / Clash Verge Rev |
| macOS 重度用户 | Surge for Mac / Stash Mac |
| Linux 桌面 | FlClash / Clash Verge Rev |
| 全屋代理 | 华硕路由器 + 官改 / 梅林固件 +fancyss** ** |


---
