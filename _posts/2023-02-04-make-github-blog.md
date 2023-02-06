---
layout: post
title:  "githubブログ5分で作る方法"
categories: [github-blog]
tags: github github-blog
---

* content
{:toc}

開発すると記録したい時があります。例えば)厄介なエラー対応、サーバー設定、備忘録等。  
その時どうしても`ブログ`があればと思うのではないでしょうか？  
この記事はgithub`ブログ`を簡単に5分で作る方法を紹介します。  




※この`ブログ`もこの記事により、作成したものでございます。  

![githubブログの例](/images/posts/make-github-blog/image1.PNG)
このような`ブログ`ネットで見たことありますよね？

## githubブログのメリット
①ホスティング、ドメインが一切必要ありません。そのため、費用は無料です。  
※個人で`ブログ`を作る場合はサーバー等を用意する必要があるため、費用がかかってしまいます。  
②時間の節約が可能です。この記事通りに作ればただ、5分くらいで作れます。  
③`ブログ`に投稿すると、githubレポジトリに草が増える（自分はこのメリットが好きです。）  
④テンプレートがたくさんあるので好きなテンプレートを選べます。

## ブログ作成
それでは、早速ブログを作りましょう。必要な`材料`は以下になります。
+ **githubのアカウント**

### 好みのブログのテンプレートを選ぶ 
[こちら](https://github.com/topics/jekyll-theme)で`テンプレート一`覧を見れます。

![テンプレート](/images/posts/make-github-blog/image2.PNG)  
今回はこちらを選びました。  
※自分が好きな`テンプレート一`を選んでも構わないですが、テンプレートによっては次の設定方法でできないケースもあります。その場合にはそのテンプレートの設定方法に従ってください。  
※こちらのブログは[このテンプレート一](https://gaohaoyang.github.io)で作られました。

### テンプレートをforkする
`Fork`については簡単に独立にクーロンすると考えればよいです。  
ブログの場合はcloneではなく`fork`でよいです。  
※Forkについて知りたい方は[forkとcloneの違い](https://qiita.com/morioka1206/items/6f777c060b88f4a7f3ce)

![Fork](/images/posts/make-github-blog/image3.PNG)  
`Fork`ボタンを押下します。

![Forkフォーム作成](/images/posts/make-github-blog/image4.PNG)  
`Fork`します。  
!!必ず赤字みたいに**自分のID**.github.ioにしてください。!!

### URLの設定を変更する
今回はURL設定を変更します。   

![レポジトリ](/images/posts/make-github-blog/image5.PNG)  
Forkが正常に完了したら、自分のレポジトリにForkしたレポジトリが見えるはずです。   
そのレポジトリをクリックしてレポジトリに入ります。


![_config.yml](/images/posts/make-github-blog/image6.PNG)  
`_config.yml`のファイルに入ります。  
設定を変える必要があります。


![ファイルを変更](/images/posts/make-github-blog/image7.PNG)  
ファイルを変更クリックします。


![url変更](/images/posts/make-github-blog/image8.PNG)  
"https:// + 赤字のところ"を入力します。


![ファイルの更新](/images/posts/make-github-blog/image9.PNG)  
ファイルの更新を行います。内容はなんでもよいです。

### ブログ作成完了
しばらく2分くらい待ってから、上記入力したURLをブラウザで入力します、

![完成](/images/posts/make-github-blog/image10.PNG) 
これでブログ作成完了しました。

## 次回
次回はgithubブログに投稿する方法を紹介します。