---
layout: post
title:  "[ソート]挿入ソートとはわかりやすく"
author: bittap
categories: アルゴリズム
tags: アルゴリズム
---

* content
{:toc}

挿入ソートは難しくないアルゴリズムです。





##### 毎回引っかかったところ
いつも`挿入シート`と`選択ソート`こんがらがった。

## ポイント

+ `未整列要素`を`整列済み配列`の位置に**挿入**するソート方法

## 挿入ソートの流れ
①`未整列要素`を取り出す。

②`整列済み配列`と比較して適切な位置にその要素を交換する。

③①と②を全データ分繰り返し、`整列済み配列`に全データを**挿入**したら処理完了

※ `未整列要素`と`整列済み配列`という概念が初めてだとこの内容がピンとこないと思います。ソートに慣れていない方は下の「挿入ソートの図」を理解してから読んでください。

## 挿入ソートの図
目標

| |
| :-: |
| 10 50 30 20 40 -> 10 20 30 40 50にソートする |

①1回目

![img-description](/assets/img/posts/insert-sort/1.PNG)

②2回目

![img-description](/assets/img/posts/insert-sort/2.PNG)

③3回目

![img-description](/assets/img/posts/insert-sort/3.PNG)

④4回目

![img-description](/assets/img/posts/insert-sort/4.PNG)

⑤5回目

![img-description](/assets/img/posts/insert-sort/5.PNG)

## 挿入ソートの特徴
