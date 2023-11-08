import{_ as e,o as a,c as t,Q as s}from"./chunks/framework.1baa841b.js";const b=JSON.parse('{"title":"Function: append()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/lazy/functions/append.md","filePath":"api/pipe/lazy/functions/append.md","lastUpdated":null}'),r={name:"api/pipe/lazy/functions/append.md"},o=s(`<p><a href="./../../../modules.html">fx-flow</a> / <a href="./../">pipe/lazy</a> / append</p><h1 id="function-append" tabindex="-1">Function: append() <a class="header-anchor" href="#function-append" aria-label="Permalink to &quot;Function: append()&quot;">​</a></h1><h2 id="append-args" tabindex="-1">append(args) <a class="header-anchor" href="#append-args" aria-label="Permalink to &quot;append(args)&quot;">​</a></h2><blockquote><p><strong>append</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>args</code>): (<code>iterable</code>) =&gt; <a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<code>B</code>, <a href="./../../../types/&lt;internal&gt;/type-aliases/Awaited.html"><code>Awaited</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><p>Return Iterable/AsyncIterable containing the contents of the given iterable, followed by the given element.</p><h3 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><p>▪ <strong>B</strong> extends <a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a>&lt;<a href="./../../../types/&lt;internal&gt;/type-aliases/Awaited.html"><code>Awaited</code></a>&lt;<code>A</code>&gt;&gt;</p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>args</strong>: <code>A</code></p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>function</code></p><blockquote><blockquote><p>(<code>iterable</code>): <a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<code>B</code>, <a href="./../../../types/&lt;internal&gt;/type-aliases/Awaited.html"><code>Awaited</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>▪ <strong>iterable</strong>: <code>B</code></p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<code>B</code>, <a href="./../../../types/&lt;internal&gt;/type-aliases/Awaited.html"><code>Awaited</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">iter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">iter.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// {done: false, value: 1}</span></span>
<span class="line"><span style="color:#E1E4E8;">iter.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// {done: false, value: 2}</span></span>
<span class="line"><span style="color:#E1E4E8;">iter.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// {done: false, value: 3}</span></span>
<span class="line"><span style="color:#E1E4E8;">iter.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// {done: false, value: 4}</span></span>
<span class="line"><span style="color:#E1E4E8;">iter.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// {done: true, value: undefined}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">iter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">iter.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// {done: false, value: 1}</span></span>
<span class="line"><span style="color:#24292E;">iter.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// {done: false, value: 2}</span></span>
<span class="line"><span style="color:#24292E;">iter.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// {done: false, value: 3}</span></span>
<span class="line"><span style="color:#24292E;">iter.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// {done: false, value: 4}</span></span>
<span class="line"><span style="color:#24292E;">iter.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// {done: true, value: undefined}</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/append.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/pipe/lazy/append.ts#L68" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/append.ts:68</a></p><h2 id="append-args-iterable" tabindex="-1">append(args, iterable) <a class="header-anchor" href="#append-args-iterable" aria-label="Permalink to &quot;append(args, iterable)&quot;">​</a></h2><blockquote><p><strong>append</strong>&lt;<code>A</code>&gt;(<code>args</code>, <code>iterable</code>): <a href="./../../../types/&lt;internal&gt;/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>args</strong>: <code>A</code></p><p>▪ <strong>iterable</strong>: <a href="./../../../types/&lt;internal&gt;/interfaces/Iterable.html"><code>Iterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/&lt;internal&gt;/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>A</code>&gt;</p><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/pipe/lazy/append.ts#L71" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/append.ts:71</a></p><h2 id="append-args-iterable-1" tabindex="-1">append(args, iterable) <a class="header-anchor" href="#append-args-iterable-1" aria-label="Permalink to &quot;append(args, iterable)&quot;">​</a></h2><blockquote><p><strong>append</strong>&lt;<code>A</code>&gt;(<code>args</code>, <code>iterable</code>): <a href="./../../../types/&lt;internal&gt;/interfaces/AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>args</strong>: <code>A</code></p><p>▪ <strong>iterable</strong>: <a href="./../../../types/&lt;internal&gt;/interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/&lt;internal&gt;/interfaces/AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt;<code>A</code>&gt;</p><h3 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/pipe/lazy/append.ts#L72" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/append.ts:72</a></p>`,40),n=[o];function l(p,c,d,i,h,u){return a(),t("div",null,n)}const g=e(r,[["render",l]]);export{b as __pageData,g as default};
