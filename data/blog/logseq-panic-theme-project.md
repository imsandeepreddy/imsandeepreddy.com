---
title: Logseq Panic Theme
date: "2021-01-02"
tags: ["project", "dev", "css"]
draft: true
summary: "A dark theme for Logseq, inspired by Panics palette and Bear notes panic mode theme."
author: "default"
images: ["/static/img/projects/logseq-project-thumbnail.png"]
---

## Description

This theme uses basic `CSS`, `Mulish` font family and hosted on `JSdelivr`.

[Github repo link](https://github.com/kirso/logseq-panic-theme)

## How I worked on this project

I created this theme to adjust the cosmetics of Logseq to my liking and as I always loved panic mode theme in Bear notes app, I implemented the same color scheme in it.

## How to navigate this project

- `custom.css` - where most of the .
- Environmental variables - it was the first time I tried to implement `.env.local` so that the API keys are not exposed publicly and used `${process.env.API_KEY}`.
- `SearchResults.js` - takes the results of the API response and renders them via `map()` method as well as passes various props such as title, link and snippets of results with Tailwind styling.
- Hero Icons library - is used to visualize various options in the `HeaderOptions.js`

## Why it is built this way

## What else would I do
