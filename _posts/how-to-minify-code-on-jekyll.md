---
title: Минификация кода на Jekyll
layout: post
date: 9 july 2018
cover_url: /assets/asuna.jpg
cover_position: center
---
Минификация кода — неотъемлемая часть оптимизации клиентской стороны веб-сайта. Благодаря шаблону __compress.html__ это можно сделать в пару кликов.

# Установка
Переходим на [guthub](https://github.com/penibelst/jekyll-compress-html/releases/latest), откуда скачиваем последнюю версию. Из скачанного zip-архива берём нужный нам файл — __compress.html__ (*site* -> *_layouts*). Добавляем файл к себе на сайт в папку *_layouts*. 

Добавляем этот шаблон к уже существующим на сайте: 
![](/assets/jekyllminify.png)

При следующем билде JS/CSS/HTML будет минифицирован. Настройка происходит в конфиге. Документация по настройке — [jch.penibelst.de](http://jch.penibelst.de)

