import{_ as e,o as t,c as a,O as s}from"./chunks/framework.571309da.js";const y=JSON.parse('{"title":"Function: isUndefined()","description":"","frontmatter":{},"headers":[],"relativePath":"api/functions_strict/functions/function.isUndefined.md","filePath":"api/functions_strict/functions/function.isUndefined.md"}'),n={name:"api/functions_strict/functions/function.isUndefined.md"},o=s(`<h1 id="function-isundefined" tabindex="-1">Function: isUndefined() <a class="header-anchor" href="#function-isundefined" aria-label="Permalink to &quot;Function: isUndefined()&quot;">​</a></h1><blockquote><p><strong>isUndefined</strong>&lt;<code>A</code>&gt;(<code>args</code>): <code>args is Include&lt;A, undefined&gt;</code></p></blockquote><p>Check whether <code>args</code> is undefined.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">isArray</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#82AAFF;">isArray</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#82AAFF;">isArray</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/functions/strict/isUndefined.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>args is Include&lt;A, undefined&gt;</code></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/0c25e4c/src/functions/strict/isUndefined.ts#L15" target="_blank" rel="noreferrer">src/functions/strict/isUndefined.ts:15</a></p>`,14),r=[o];function l(i,c,d,p,f,u){return t(),a("div",null,r)}const m=e(n,[["render",l]]);export{y as __pageData,m as default};
