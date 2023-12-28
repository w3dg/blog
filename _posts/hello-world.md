---
title: "Hello World!"
excerpt: "Hello world! First Blog Post on this self made website! Let's dive a bit into how I put it together and why."
coverImage: "/assets/blog/hello-world/hello-world.jpg"
date: "2023-12-09T17:04:43+05:30"
author:
  name: Debopam Gupta
  picture: "/assets/blog/authors/dg.jpeg"
ogImage:
  url: "/assets/blog/hello-world/hello-world.jpg"
---

## Hello world!

> “Be willing to be a beginner every single morning.”

I hope that I use this place to document some of my life. Maybe _once a month_ or so. Or maybe even _once a year_, who knows. I am not very good anyways with this routine thingy anyways. Actually I am not good at doing anything routinely or I cannot keep my enthusiasm for a long time and it dies off much sooner than expected. We'll see what happens to this!

## If you are wondering how this blog is made...

It is powered by <a href="https://nextjs.org" data-link _target="blank">NextJS</a>. Yes some people I know will be like, _"NO! Not another bulk load of JS in my face! You **dont need all that** for a blog, you stupid!"_

Yes, you are absolutely correct. This could be just plain HTML and a touch of CSS but I already was in my Web Dev journey and I was learning NextJS so I started modifying the <a href="https://vercel.com/templates/next.js/blog-starter-kit" data-link _target="blank">blog-starter</a> from NextJS.

<!-- <img data-content-image src="/assets/blog"/> -->

For the more tech-savvy people who like the nitty gritty technical details, it uses <code class="inline-code">remark</code> and some more processors from the <code class="inline-code">remark</code> family and some _neat little additions_ to its <a href="https://en.wikipedia.org/wiki/Abstract_syntax_tree" data-link>Abstract Syntax Tree (AST)</a> parsing logic to keep certain attributes that would otherwise be stripped out in sanitization process before putting it on the page. I say _neat little additions_ but i almost couldn't figure how to keep certain attributes and tore my hair out. The sheer will and patience for a compsci degree guided me to come back later and now i am jumping with joy.

(Why sanitize when I am the only one writing the blog? Because always, aLwAyS, ALWAYS, _ALWAYS_, **ALWAYS**, **_ALWAYS_** _sanitize_ user input)

And since my friends try to think I am some **programming god** ( _which i absolutely am not_ ) and you probably are here to see some fancy technical life-changing code that you layman friends cannot understand, here's <code class="inline-code">Hello World</code>. IN MANY DIFFERENT LANGUAGES. ( look at comments )

```js
// JavaScript, TypeScript because web stuff
const helloWorld = () => console.log("Hello World!");
helloWorld();
```

```html
<!-- HTML is not a programming language :p -->
<pre> hello world! </pre>
```

```c
// Bow down to C.
int main() {
  printf("Hello World!");
  return 0;
}
```

```java
// yeah yeah i know, 3 billion devices run Java and so does mine
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello World!");
  }
}
```

```py
# Python is definitely a snake
print("Hello world")
```

```bash
# Here's some shell
echo "Hello world!"
```

Well! That's it let us see how often i update this thing

### References

- `remark` : <a href="https://github.com/remarkjs/remark" data-link>https://github.com/remarkjs/remark</a>
- NextJS : <a href="https://nextjs.org" data-link>https://nextjs.org</a>
- TailwindCSS : <a href="https://tailwindcss.com/" data-link>https://tailwindcss.com/</a>
