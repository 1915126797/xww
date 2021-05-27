/*
家电星推官
活动入口：京东app-搜索“家电星推官”
活动日期：2021-05-27 至 2021-06-18

脚本目前只做日常任务，默认不开卡
脚本助力走纯云端助力，无本地助力，每次随机取2组助力码

更新地址：https://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_star.js
============Quantumultx===============
[task_local]
#家电星推官
40 9-18/3 * 5,6 * https://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_star.js, tag=家电星推官,  enabled=true
================Loon==============
[Script]
cron "40 9-18/3 * 5,6 *" script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_star.js,tag=家电星推官
===============Surge=================
家电星推官 = type=cron,cronexp="40 9-18/3 * 5,6 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_star.js
============小火箭=========
家电星推官 = type=cron,script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_star.js, cronexpr="40 9-18/3 * 5,6 *", timeout=3600, enable=true
*/
const $ = new Env("家电星推官");
const jdCookieNode = $.isNode() ? require('./jdCo
