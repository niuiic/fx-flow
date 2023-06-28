import{_ as e,o as t,c as a,O as r}from"./chunks/framework.571309da.js";const y=JSON.parse('{"title":"Function: each()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_strict/functions/function.each.md","filePath":"api/pipe_strict/functions/function.each.md"}'),l={name:"api/pipe_strict/functions/function.each.md"},o=r('<h1 id="function-each" tabindex="-1">Function: each() <a class="header-anchor" href="#function-each" aria-label="Permalink to &quot;Function: each()&quot;">​</a></h1><blockquote><p><strong>each</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>, <code>iterable</code>): <code>void</code></p></blockquote><p>Iterates over Iterable/AsyncIterable, applying each in turn to <code>fn</code>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">each</span><span style="color:#A6ACCD;">(console</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">log</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]) </span><span style="color:#676E95;font-style:italic;">// log 1, 2, 3</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/pipe/strict/each.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>R</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>args</code>) =&gt; <code>R</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../types/internal_/interfaces/interface.Iterable.html"><code>Iterable</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>void</code></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/d2d01b8/src/pipe/strict/each.ts#L29" target="_blank" rel="noreferrer">src/pipe/strict/each.ts:29</a></p><blockquote><p><strong>each</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>, <code>iterable</code>): <code>Promise</code>&lt; <code>void</code> &gt;</p></blockquote><h2 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>R</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>args</code>) =&gt; <code>R</code></td></tr><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../types/internal_/interfaces/interface.AsyncIterable.html"><code>AsyncIterable</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Promise</code>&lt; <code>void</code> &gt;</p><h2 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/d2d01b8/src/pipe/strict/each.ts#L31" target="_blank" rel="noreferrer">src/pipe/strict/each.ts:31</a></p><blockquote><p><strong>each</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>): (<code>iterable</code>) =&gt; <a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a>&lt; <code>A</code> &gt;, <code>void</code> &gt;</p></blockquote><h2 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>R</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h2 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>args</code>) =&gt; <code>R</code></td></tr></tbody></table><h2 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>iterable</code>): <a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a>&lt; <code>A</code> &gt;, <code>void</code> &gt;</p></blockquote><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>iterable</code></td><td style="text-align:left;"><a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/type-aliases/type-alias.IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt; <a href="./../../types/type-aliases/type-alias.UniversalIterable.html"><code>UniversalIterable</code></a>&lt; <code>A</code> &gt;, <code>void</code> &gt;</p></blockquote><h2 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/d2d01b8/src/pipe/strict/each.ts#L33" target="_blank" rel="noreferrer">src/pipe/strict/each.ts:33</a></p>',32),s=[o];function c(d,n,i,h,p,b){return t(),a("div",null,s)}const f=e(l,[["render",c]]);export{y as __pageData,f as default};
