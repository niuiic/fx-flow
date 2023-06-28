import{_ as e,o as t,c as a,O as s}from"./chunks/framework.571309da.js";const f=JSON.parse('{"title":"Function: isNil()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_strict/functions/function.isNil.md","filePath":"api/pipe_strict/functions/function.isNil.md"}'),l={name:"api/pipe_strict/functions/function.isNil.md"},n=s(`<h1 id="function-isnil" tabindex="-1">Function: isNil() <a class="header-anchor" href="#function-isnil" aria-label="Permalink to &quot;Function: isNil()&quot;">​</a></h1><blockquote><p><strong>isNil</strong>&lt;<code>A</code>&gt;(<code>args</code>): <code>args is Include&lt;A, boolean&gt;</code></p></blockquote><p>Check whether <code>args</code> is null or undefined.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">isArray</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#82AAFF;">isArray</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#82AAFF;">isArray</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/functions/strict/isNil.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>args is Include&lt;A, boolean&gt;</code></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/96600d5/src/pipe/strict/isNil.ts#L17" target="_blank" rel="noreferrer">src/pipe/strict/isNil.ts:17</a></p>`,14),o=[n];function r(i,c,p,d,h,u){return t(),a("div",null,o)}const m=e(l,[["render",r]]);export{f as __pageData,m as default};