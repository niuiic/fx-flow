import{_ as e,o as a,c as t,Q as r}from"./chunks/framework.1baa841b.js";const y=JSON.parse('{"title":"Function: map()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/lazy/functions/map.md","filePath":"api/pipe/lazy/functions/map.md","lastUpdated":null}'),s={name:"api/pipe/lazy/functions/map.md"},o=r(`<p><a href="./../../../modules.html">fx-flow</a> / <a href="./../">pipe/lazy</a> / map</p><h1 id="function-map" tabindex="-1">Function: map() <a class="header-anchor" href="#function-map" aria-label="Permalink to &quot;Function: map()&quot;">​</a></h1><h2 id="map-fn-iterable" tabindex="-1">map(fn, iterable) <a class="header-anchor" href="#map-fn-iterable" aria-label="Permalink to &quot;map(fn, iterable)&quot;">​</a></h2><blockquote><p><strong>map</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>, <code>iterable</code>): <a href="./../../../types/&lt;internal&gt;/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>R</code>&gt;</p></blockquote><p>Returns Iterable/AsyncIterable of values mapped by <code>fn</code>.</p><h3 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><p>▪ <strong>R</strong></p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>fn</strong>: (<code>args</code>) =&gt; <code>R</code></p><p>▪ <strong>iterable</strong>: <a href="./../../../types/&lt;internal&gt;/interfaces/Iterable.html"><code>Iterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/&lt;internal&gt;/interfaces/IterableIterator.html"><code>IterableIterator</code></a>&lt;<code>R</code>&gt;</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;"> toArray,</span></span>
<span class="line"><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// [11, 12, 13, 14]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pipe</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;"> toArray,</span></span>
<span class="line"><span style="color:#24292E;">); </span><span style="color:#6A737D;">// [11, 12, 13, 14]</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/map.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/pipe/lazy/map.ts#L69" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/map.ts:69</a></p><h2 id="map-fn-iterable-1" tabindex="-1">map(fn, iterable) <a class="header-anchor" href="#map-fn-iterable-1" aria-label="Permalink to &quot;map(fn, iterable)&quot;">​</a></h2><blockquote><p><strong>map</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>, <code>iterable</code>): <a href="./../../../types/&lt;internal&gt;/interfaces/AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt;<a href="./../../../types/&lt;internal&gt;/type-aliases/Awaited.html"><code>Awaited</code></a>&lt;<code>R</code>&gt;&gt;</p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><p>▪ <strong>R</strong></p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>fn</strong>: (<code>args</code>) =&gt; <code>R</code></p><p>▪ <strong>iterable</strong>: <a href="./../../../types/&lt;internal&gt;/interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/&lt;internal&gt;/interfaces/AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt;<a href="./../../../types/&lt;internal&gt;/type-aliases/Awaited.html"><code>Awaited</code></a>&lt;<code>R</code>&gt;&gt;</p><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/pipe/lazy/map.ts#L70" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/map.ts:70</a></p><h2 id="map-fn" tabindex="-1">map(fn) <a class="header-anchor" href="#map-fn" aria-label="Permalink to &quot;map(fn)&quot;">​</a></h2><blockquote><p><strong>map</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>): (<code>iterable</code>) =&gt; <a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<code>A</code>, <code>R</code>&gt;</p></blockquote><h3 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong> extends <a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a></p><p>▪ <strong>R</strong></p><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>fn</strong>: (<code>args</code>) =&gt; <code>R</code></p><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>function</code></p><blockquote><blockquote><p>(<code>iterable</code>): <a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<code>A</code>, <code>R</code>&gt;</p></blockquote><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>▪ <strong>iterable</strong>: <code>A</code></p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../../types/type-aliases/IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt;<code>A</code>, <code>R</code>&gt;</p></blockquote><h3 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/pipe/lazy/map.ts#L71" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/map.ts:71</a></p>`,42),n=[o];function l(p,c,i,d,h,u){return a(),t("div",null,n)}const b=e(s,[["render",l]]);export{y as __pageData,b as default};
