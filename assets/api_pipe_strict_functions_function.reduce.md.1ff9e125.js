import{_ as e,o as t,c as a,X as r}from"./chunks/framework.6e839c56.js";const b=JSON.parse('{"title":"Function: reduce","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_strict/functions/function.reduce.md","filePath":"api/pipe_strict/functions/function.reduce.md","lastUpdated":null}'),l={name:"api/pipe_strict/functions/function.reduce.md"},o=r('<h1 id="function-reduce" tabindex="-1">Function: reduce <a class="header-anchor" href="#function-reduce" aria-label="Permalink to &quot;Function: reduce&quot;">​</a></h1><blockquote><p><strong>reduce</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>iterable</code>): <code>undefined</code></p></blockquote><p>&#39;reduce&#39; boils down a list of values into a single value.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <em>readonly</em> []</td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;"><a href="./../../types/type-aliases/type-alias.AnyFunction.html"><code>AnyFunction</code></a></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>undefined</code></p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">reduce</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">])) </span><span style="color:#676E95;font-style:italic;">// 10</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/pipe/strict/reduce.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="defined-in" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/pipe/strict/reduce.ts#L47" target="_blank" rel="noreferrer">src/pipe/strict/reduce.ts:47</a></p><blockquote><p><strong>reduce</strong>&lt;<code>A</code>, <code>R</code>&gt;( <code>fn</code>, <code>initialRes</code>, <code>iterable</code>): <code>R</code></p></blockquote><h2 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <em>readonly</em> []</td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;"><a href="./../../types/type-aliases/type-alias.AnyFunction.html"><code>AnyFunction</code></a></td></tr><tr><td style="text-align:left;"><code>initialRes</code></td><td style="text-align:left;"><code>R</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>R</code></p><h2 id="defined-in-1" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/pipe/strict/reduce.ts#L48" target="_blank" rel="noreferrer">src/pipe/strict/reduce.ts:48</a></p><blockquote><p><strong>reduce</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>iterable</code>): <a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code> &gt;</p></blockquote><h2 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td></tr></tbody></table><h2 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>prevRes</code>, <code>args</code>) =&gt; <a href="./../../types/internal_/type-aliases/type-alias.FnReturenValue.html"><code>FnReturenValue</code></a>&lt; <code>A</code>, <code>A</code> &gt;</td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code> &gt;</p><h2 id="defined-in-2" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/pipe/strict/reduce.ts#L51" target="_blank" rel="noreferrer">src/pipe/strict/reduce.ts:51</a></p><blockquote><p><strong>reduce</strong>&lt;<code>A</code>&gt;(<code>fn</code>): (<code>iterable</code>) =&gt; <a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code> &gt;</p></blockquote><h2 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td></tr></tbody></table><h2 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>prevRes</code>, <code>args</code>) =&gt; <a href="./../../types/internal_/type-aliases/type-alias.FnReturenValue.html"><code>FnReturenValue</code></a>&lt; <code>A</code>, <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>iterable</code>): <a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code> &gt;</p></blockquote><h3 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h3 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code> &gt;</p></blockquote><h2 id="defined-in-3" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/pipe/strict/reduce.ts#L55" target="_blank" rel="noreferrer">src/pipe/strict/reduce.ts:55</a></p><blockquote><p><strong>reduce</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>, <code>iterable</code>): <a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</p></blockquote><h2 id="type-parameters-4" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-4" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>prevRes</code>, <code>args</code>) =&gt; <a href="./../../types/internal_/type-aliases/type-alias.FnReturenValue.html"><code>FnReturenValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</p><h2 id="defined-in-4" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/pipe/strict/reduce.ts#L60" target="_blank" rel="noreferrer">src/pipe/strict/reduce.ts:60</a></p><blockquote><p><strong>reduce</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>): (<code>iterable</code>) =&gt; <a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</p></blockquote><h2 id="type-parameters-5" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-5" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>prevRes</code>, <code>args</code>) =&gt; <a href="./../../types/internal_/type-aliases/type-alias.FnReturenValue.html"><code>FnReturenValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</td></tr></tbody></table><h2 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>iterable</code>): <a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</p></blockquote><h3 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h3 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</p></blockquote><h2 id="defined-in-5" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/pipe/strict/reduce.ts#L64" target="_blank" rel="noreferrer">src/pipe/strict/reduce.ts:64</a></p><blockquote><p><strong>reduce</strong>&lt;<code>A</code>, <code>R</code>&gt;( <code>fn</code>, <code>initialRes</code>, <code>iterable</code>): <a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</p></blockquote><h2 id="type-parameters-6" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-6" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>prevRes</code>, <code>args</code>) =&gt; <a href="./../../types/internal_/type-aliases/type-alias.FnReturenValue.html"><code>FnReturenValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</td></tr><tr><td style="text-align:left;"><code>initialRes</code></td><td style="text-align:left;"><code>R</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</p><h2 id="defined-in-6" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/pipe/strict/reduce.ts#L69" target="_blank" rel="noreferrer">src/pipe/strict/reduce.ts:69</a></p><blockquote><p><strong>reduce</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>, <code>initialRes</code>): (<code>iterable</code>) =&gt; <a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</p></blockquote><h2 id="type-parameters-7" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-7" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>prevRes</code>, <code>args</code>) =&gt; <a href="./../../types/internal_/type-aliases/type-alias.FnReturenValue.html"><code>FnReturenValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</td></tr><tr><td style="text-align:left;"><code>initialRes</code></td><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>iterable</code>): <a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</p></blockquote><h3 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h3 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code>, <code>R</code> &gt;</p></blockquote><h2 id="defined-in-7" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/pipe/strict/reduce.ts#L74" target="_blank" rel="noreferrer">src/pipe/strict/reduce.ts:74</a></p><hr><p>Generated using <a href="https://typedoc.org/" target="_blank" rel="noreferrer">TypeDoc</a> and <a href="https://www.npmjs.com/package/typedoc-plugin-markdown" target="_blank" rel="noreferrer">typedoc-plugin-markdown</a></p>',79),d=[o];function s(n,c,i,p,h,u){return t(),a("div",null,d)}const f=e(l,[["render",s]]);export{b as __pageData,f as default};