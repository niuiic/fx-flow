import{_ as t,o as a,c as e,V as s}from"./chunks/framework.5a3bb230.js";const b=JSON.parse('{"title":"Function: always()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_strict/functions/function.always.md","filePath":"api/pipe_strict/functions/function.always.md","lastUpdated":null}'),o={name:"api/pipe_strict/functions/function.always.md"},r=s('<h1 id="function-always" tabindex="-1">Function: always() <a class="header-anchor" href="#function-always" aria-label="Permalink to &quot;Function: always()&quot;">​</a></h1><blockquote><p><strong>always</strong>&lt;<code>A</code>&gt;(<code>args</code>): (...<code>args</code>) =&gt; <code>A</code></p></blockquote><p>Return a function that returns the given value.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">always</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">))) </span><span style="color:#676E95;font-style:italic;">// [1, 2, 3, 4]</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/pipe/strict/always.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(...<code>args</code>): <code>A</code></p></blockquote><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;">...<code>args</code></td><td style="text-align:left;"><code>unknown</code>[]</td></tr></tbody></table><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>A</code></p></blockquote><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/3a3a964/src/pipe/strict/always.ts#L11" target="_blank" rel="noreferrer">src/pipe/strict/always.ts:11</a></p>',14),l=[r];function n(c,p,i,d,h,u){return a(),e("div",null,l)}const f=t(o,[["render",n]]);export{b as __pageData,f as default};
