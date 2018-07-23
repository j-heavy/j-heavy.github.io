---
title: Минификация кода на Jekyll
layout: post
date: 9 july 2018
cover_url: /assets/asuna.jpg
cover_position: center
permalink: minifycodeonjekyll
---

Минификация кода — неотъемлемая часть оптимизации клиентской стороны веб-сайта. Благодаря шаблону __compress.html__ это можно сделать в пару кликов.

# Установка
Переходим на <a href="https://github.com/penibelst/jekyll-compress-html/releases/latest" target="_blank">github</a>, откуда скачиваем последнюю версию. Из скачанного zip-архива берём нужный нам файл — __compress.html__ (*site* -> *_layouts*). Добавляем файл к себе на сайт в папку *_layouts*. 

Добавляем этот шаблон к уже существующим на сайте: 
![](/assets/jekyllminify.png)

При следующем билде JS/CSS/HTML будет минифицирован. Настройка происходит в конфиге. Документация по настройке — <a href="http://jch.penibelst.de" target="_blank">jch.penibelst.de</a>

