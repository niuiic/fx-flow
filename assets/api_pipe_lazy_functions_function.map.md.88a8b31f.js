import{_ as e,o as t,c as a,X as r}from"./chunks/framework.6e839c56.js";const b=JSON.parse('{"title":"Function: map","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_lazy/functions/function.map.md","filePath":"api/pipe_lazy/functions/function.map.md","lastUpdated":null}'),l={name:"api/pipe_lazy/functions/function.map.md"},o=r(`<h1 id="function-map" tabindex="-1">Function: map <a class="header-anchor" href="#function-map" aria-label="Permalink to &quot;Function: map&quot;">​</a></h1><blockquote><p><strong>map</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>, <code>iterable</code>): <a href="./../../types/internal_/interfaces/interface.IterableIterator.html"><code>IterableIterator</code></a>&lt; <code>R</code> &gt;</p></blockquote><p>Returns Iterable/AsyncIterable of values mapped by <code>fn</code>.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>args</code>) =&gt; <code>R</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../types/internal_/interfaces/interface.Iterable.html"><code>Iterable</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/internal_/interfaces/interface.IterableIterator.html"><code>IterableIterator</code></a>&lt; <code>R</code> &gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">pipe</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> toArray</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [11, 12, 13, 14]</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/pipe/lazy/map.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="defined-in" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/818aedf/src/pipe/lazy/map.ts#L69" target="_blank" rel="noreferrer">src/pipe/lazy/map.ts:69</a></p><blockquote><p><strong>map</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>, <code>iterable</code>): <a href="./../../types/internal_/interfaces/interface.AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt; <a href="./../../types/internal_/type-aliases/type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>R</code> &gt; &gt;</p></blockquote><h2 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>args</code>) =&gt; <code>R</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../types/internal_/interfaces/interface.AsyncIterable.html"><code>AsyncIterable</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/internal_/interfaces/interface.AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt; <a href="./../../types/internal_/type-aliases/type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>R</code> &gt; &gt;</p><h2 id="defined-in-1" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/818aedf/src/pipe/lazy/map.ts#L70" target="_blank" rel="noreferrer">src/pipe/lazy/map.ts:70</a></p><blockquote><p><strong>map</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>): (<code>iterable</code>) =&gt; <a href="./../../types/type-aliases/type-alias.IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</p></blockquote><h2 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>args</code>) =&gt; <code>R</code></td></tr></tbody></table><h2 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>iterable</code>): <a href="./../../types/type-aliases/type-alias.IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</p></blockquote><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/type-aliases/type-alias.IteratorReturnValue.html"><code>IteratorReturnValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</p></blockquote><h2 id="defined-in-2" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/818aedf/src/pipe/lazy/map.ts#L71" target="_blank" rel="noreferrer">src/pipe/lazy/map.ts:71</a></p><hr><p>Generated using <a href="https://typedoc.org/" target="_blank" rel="noreferrer">TypeDoc</a> and <a href="https://www.npmjs.com/package/typedoc-plugin-markdown" target="_blank" rel="noreferrer">typedoc-plugin-markdown</a></p>`,34),s=[o];function n(d,c,p,i,h,y){return t(),a("div",null,s)}const m=e(l,[["render",n]]);export{b as __pageData,m as default};
