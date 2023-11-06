import{_ as e,o as t,c as a,Q as s}from"./chunks/framework.ed6abfc6.js";const u=JSON.parse('{"title":"Function: append","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_lazy/functions/function.append.md","filePath":"api/pipe_lazy/functions/function.append.md","lastUpdated":null}'),l={name:"api/pipe_lazy/functions/function.append.md"},n=s(`<h1 id="function-append" tabindex="-1">Function: append <a class="header-anchor" href="#function-append" aria-label="Permalink to &quot;Function: append&quot;">​</a></h1><blockquote><p><strong>append</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>args</code>): (<code>iterable</code>) =&gt; <a href="./../../types/type-aliases/type-alias.IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt; <code>B</code>, <a href="./../../types/internal_/type-aliases/type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>A</code> &gt; &gt;</p></blockquote><p>Return Iterable/AsyncIterable containing the contents of the given iterable, followed by the given element.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>B</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a>&lt; <a href="./../../types/internal_/type-aliases/type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>A</code> &gt; &gt;</td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>iterable</code>): <a href="./../../types/type-aliases/type-alias.IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt; <code>B</code>, <a href="./../../types/internal_/type-aliases/type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>A</code> &gt; &gt;</p></blockquote><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><code>B</code></td></tr></tbody></table><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/type-aliases/type-alias.IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt; <code>B</code>, <a href="./../../types/internal_/type-aliases/type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>A</code> &gt; &gt;</p></blockquote><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">iter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">iter.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// {done: false, value: 1}</span></span>
<span class="line"><span style="color:#E1E4E8;">iter.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// {done: false, value: 2}</span></span>
<span class="line"><span style="color:#E1E4E8;">iter.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// {done: false, value: 3}</span></span>
<span class="line"><span style="color:#E1E4E8;">iter.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// {done: false, value: 4}</span></span>
<span class="line"><span style="color:#E1E4E8;">iter.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// {done: true, value: undefined}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">iter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">iter.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// {done: false, value: 1}</span></span>
<span class="line"><span style="color:#24292E;">iter.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// {done: false, value: 2}</span></span>
<span class="line"><span style="color:#24292E;">iter.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// {done: false, value: 3}</span></span>
<span class="line"><span style="color:#24292E;">iter.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// {done: false, value: 4}</span></span>
<span class="line"><span style="color:#24292E;">iter.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// {done: true, value: undefined}</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/append.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="defined-in" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/c968531/packages/core/src/pipe/lazy/append.ts#L68" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/append.ts:68</a></p><blockquote><p><strong>append</strong>&lt;<code>A</code>&gt;(<code>args</code>, <code>iterable</code>): <a href="./../../types/internal_/interfaces/interface.IterableIterator.html"><code>IterableIterator</code></a>&lt; <code>A</code> &gt;</p></blockquote><h2 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../types/internal_/interfaces/interface.Iterable.html"><code>Iterable</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/internal_/interfaces/interface.IterableIterator.html"><code>IterableIterator</code></a>&lt; <code>A</code> &gt;</p><h2 id="defined-in-1" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/c968531/packages/core/src/pipe/lazy/append.ts#L71" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/append.ts:71</a></p><blockquote><p><strong>append</strong>&lt;<code>A</code>&gt;(<code>args</code>, <code>iterable</code>): <a href="./../../types/internal_/interfaces/interface.AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt; <code>A</code> &gt;</p></blockquote><h2 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../types/internal_/interfaces/interface.AsyncIterable.html"><code>AsyncIterable</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/internal_/interfaces/interface.AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt; <code>A</code> &gt;</p><h2 id="defined-in-2" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/c968531/packages/core/src/pipe/lazy/append.ts#L72" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/append.ts:72</a></p>`,32),r=[n];function o(p,c,d,i,y,h){return t(),a("div",null,r)}const b=e(l,[["render",o]]);export{u as __pageData,b as default};
