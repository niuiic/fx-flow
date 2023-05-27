import{_ as a,o as e,c as t,O as s}from"./chunks/framework.7fc6a857.js";const h=JSON.parse('{"title":"Function: toArray()","description":"","frontmatter":{},"headers":[],"relativePath":"api/module.strict/functions/function.toArray.md","filePath":"api/module.strict/functions/function.toArray.md"}'),o={name:"api/module.strict/functions/function.toArray.md"},n=s(`<h1 id="function-toarray" tabindex="-1">Function: toArray() <a class="header-anchor" href="#function-toarray" aria-label="Permalink to &quot;Function: toArray()&quot;">​</a></h1><blockquote><p><strong>toArray</strong>&lt;<code>A</code>&gt;(<code>iterable</code>): <a href="./../module.internal_/type-aliases/type-alias.ArrayReturnType.html"><code>ArrayReturnType</code></a>&lt; <code>A</code> &gt;</p></blockquote><p>Convert iterable/asyncIterable to an array.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">pipe</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">((a) </span><span style="color:#89DDFF;">=&amp;</span><span style="color:#A6ACCD;">gt; a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">((a) </span><span style="color:#89DDFF;">=&amp;</span><span style="color:#A6ACCD;">gt; a </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  toArray</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// [12, 14]</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/functions/strict/toArray.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../module.internal_/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../module.internal_/type-aliases/type-alias.ArrayReturnType.html"><code>ArrayReturnType</code></a>&lt; <code>A</code> &gt;</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/579bd0a/src/functions/strict/toArray.ts#L28" target="_blank" rel="noreferrer">src/functions/strict/toArray.ts:28</a></p>`,14),r=[n];function l(p,c,i,y,d,A){return e(),t("div",null,r)}const u=a(o,[["render",l]]);export{h as __pageData,u as default};