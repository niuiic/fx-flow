import{_ as e,o as t,c as a,O as r}from"./chunks/framework.571309da.js";const f=JSON.parse('{"title":"Function: max()","description":"","frontmatter":{},"headers":[],"relativePath":"api/functions_strict/functions/function.max.md","filePath":"api/functions_strict/functions/function.max.md"}'),s={name:"api/functions_strict/functions/function.max.md"},o=r('<h1 id="function-max" tabindex="-1">Function: max() <a class="header-anchor" href="#function-max" aria-label="Permalink to &quot;Function: max()&quot;">​</a></h1><blockquote><p><strong>max</strong>&lt;<code>A</code>&gt;(<code>iterator</code>): <a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code> &gt;</p></blockquote><p>Return the largest item of the iterable/asyncIterable</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">max</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">])) </span><span style="color:#676E95;font-style:italic;">// 3</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/functions/strict/max.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/internal_/interfaces/interface.Iterable.html"><code>Iterable</code></a>&lt; <code>number</code> &gt; | <a href="./../../types/internal_/interfaces/interface.AsyncIterable.html"><code>AsyncIterable</code></a>&lt; <code>number</code> &gt;</td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>iterator</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <code>A</code> &gt;</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/e7e314e/src/functions/strict/max.ts#L40" target="_blank" rel="noreferrer">src/functions/strict/max.ts:40</a></p>',14),n=[o];function l(c,i,p,d,h,u){return t(),a("div",null,n)}const b=e(s,[["render",l]]);export{f as __pageData,b as default};