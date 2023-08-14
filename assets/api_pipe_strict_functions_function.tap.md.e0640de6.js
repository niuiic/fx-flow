import{_ as e,o as t,c as a,X as s}from"./chunks/framework.6e839c56.js";const f=JSON.parse('{"title":"Function: tap","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_strict/functions/function.tap.md","filePath":"api/pipe_strict/functions/function.tap.md","lastUpdated":null}'),o={name:"api/pipe_strict/functions/function.tap.md"},l=s(`<h1 id="function-tap" tabindex="-1">Function: tap <a class="header-anchor" href="#function-tap" aria-label="Permalink to &quot;Function: tap&quot;">​</a></h1><blockquote><p><strong>tap</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>, <code>args</code>): <code>A</code> <em>extends</em> <code>Promise</code>&lt; <code>unknown</code> &gt; ? <a href="./../../types/type-aliases/type-alias.FixedPromise.html"><code>FixedPromise</code></a>&lt; <code>A</code> &gt; : <code>A</code></p></blockquote><p>Invokes an interceptor and return the original value.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>args</code>) =&gt; <code>R</code></td></tr><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>A</code> <em>extends</em> <code>Promise</code>&lt; <code>unknown</code> &gt; ? <a href="./../../types/type-aliases/type-alias.FixedPromise.html"><code>FixedPromise</code></a>&lt; <code>A</code> &gt; : <code>A</code></p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">tap</span><span style="color:#A6ACCD;">(console</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">log</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// log {a: &#39;a&#39;}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// res = {a: &#39;a&#39;}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">tap</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">v</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// res2 = {a: &#39;b&#39;}</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/pipe/strict/tap.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="defined-in" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/818aedf/src/pipe/strict/tap.ts#L18" target="_blank" rel="noreferrer">src/pipe/strict/tap.ts:18</a></p><blockquote><p><strong>tap</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>): (<code>args</code>) =&gt; <code>A</code> <em>extends</em> <code>Promise</code>&lt; <code>unknown</code> &gt; ? <a href="./../../types/type-aliases/type-alias.FixedPromise.html"><code>FixedPromise</code></a>&lt; <code>A</code> &gt; : <code>A</code></p></blockquote><h2 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>args</code>) =&gt; <code>R</code></td></tr></tbody></table><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>args</code>): <code>A</code> <em>extends</em> <code>Promise</code>&lt; <code>unknown</code> &gt; ? <a href="./../../types/type-aliases/type-alias.FixedPromise.html"><code>FixedPromise</code></a>&lt; <code>A</code> &gt; : <code>A</code></p></blockquote><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>A</code> <em>extends</em> <code>Promise</code>&lt; <code>unknown</code> &gt; ? <a href="./../../types/type-aliases/type-alias.FixedPromise.html"><code>FixedPromise</code></a>&lt; <code>A</code> &gt; : <code>A</code></p></blockquote><h2 id="defined-in-1" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/818aedf/src/pipe/strict/tap.ts#L20" target="_blank" rel="noreferrer">src/pipe/strict/tap.ts:20</a></p><hr><p>Generated using <a href="https://typedoc.org/" target="_blank" rel="noreferrer">TypeDoc</a> and <a href="https://www.npmjs.com/package/typedoc-plugin-markdown" target="_blank" rel="noreferrer">typedoc-plugin-markdown</a></p>`,25),n=[l];function r(c,p,d,i,y,h){return t(),a("div",null,n)}const u=e(o,[["render",r]]);export{f as __pageData,u as default};
