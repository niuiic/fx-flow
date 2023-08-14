import{_ as e,o as t,c as a,X as s}from"./chunks/framework.6e839c56.js";const f=JSON.parse('{"title":"Function: always","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_strict/functions/function.always.md","filePath":"api/pipe_strict/functions/function.always.md","lastUpdated":null}'),r={name:"api/pipe_strict/functions/function.always.md"},o=s('<h1 id="function-always" tabindex="-1">Function: always <a class="header-anchor" href="#function-always" aria-label="Permalink to &quot;Function: always&quot;">​</a></h1><blockquote><p><strong>always</strong>&lt;<code>A</code>&gt;(<code>args</code>): (...<code>args</code>) =&gt; <code>A</code></p></blockquote><p>Return a function that returns the given value.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(...<code>args</code>): <code>A</code></p></blockquote><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;">...<code>args</code></td><td style="text-align:left;"><code>unknown</code>[]</td></tr></tbody></table><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>A</code></p></blockquote><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">always</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">))) </span><span style="color:#676E95;font-style:italic;">// [1, 2, 3, 4]</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/pipe/strict/always.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="defined-in" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/818aedf/src/pipe/strict/always.ts#L11" target="_blank" rel="noreferrer">src/pipe/strict/always.ts:11</a></p><hr><p>Generated using <a href="https://typedoc.org/" target="_blank" rel="noreferrer">TypeDoc</a> and <a href="https://www.npmjs.com/package/typedoc-plugin-markdown" target="_blank" rel="noreferrer">typedoc-plugin-markdown</a></p>',16),l=[o];function n(p,c,i,d,h,y){return t(),a("div",null,l)}const b=e(r,[["render",n]]);export{f as __pageData,b as default};
