import{_ as e,o as t,c as a,O as s}from"./chunks/framework.571309da.js";const f=JSON.parse('{"title":"Function: expect()","description":"","frontmatter":{},"headers":[],"relativePath":"api/flow/functions/function.expect.md","filePath":"api/flow/functions/function.expect.md"}'),l={name:"api/flow/functions/function.expect.md"},o=s(`<h1 id="function-expect" tabindex="-1">Function: expect() <a class="header-anchor" href="#function-expect" aria-label="Permalink to &quot;Function: expect()&quot;">​</a></h1><blockquote><p><strong>expect</strong>&lt;<code>T</code>&gt;(<code>err</code>, <code>result</code>): <a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p></blockquote><p>Throw error with <code>err</code> if <code>result</code> is failure</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> userInfo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">error occurs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">err</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// throw an error</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// with flow</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">flow</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">ok</span><span style="color:#A6ACCD;">(filePath)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">andThen</span><span style="color:#A6ACCD;">(readFileToStr)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file should exists</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unwrap</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/flow/expect.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>err</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>result</code></td><td style="text-align:left;"><a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/ec63168/src/flow/expect.ts#L15" target="_blank" rel="noreferrer">src/flow/expect.ts:15</a></p><blockquote><p><strong>expect</strong>&lt;<code>T</code>&gt;(<code>err</code>): (<code>result</code>) =&gt; <a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p></blockquote><h2 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>err</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>result</code>): <a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p></blockquote><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>result</code></td><td style="text-align:left;"><a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</td></tr></tbody></table><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p></blockquote><h2 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/ec63168/src/flow/expect.ts#L16" target="_blank" rel="noreferrer">src/flow/expect.ts:16</a></p>`,23),r=[o];function c(n,p,d,i,h,u){return t(),a("div",null,r)}const b=e(l,[["render",c]]);export{f as __pageData,b as default};
