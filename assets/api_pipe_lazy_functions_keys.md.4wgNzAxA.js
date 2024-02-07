import{_ as e,c as a,o as t,R as s}from"./chunks/framework.YlTiAyro.js";const y=JSON.parse('{"title":"Function: keys()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/lazy/functions/keys.md","filePath":"api/pipe/lazy/functions/keys.md","lastUpdated":null}'),r={name:"api/pipe/lazy/functions/keys.md"},o=s(`<p><a href="./../../../modules.html">fx-flow</a> / <a href="./../">pipe/lazy</a> / keys</p><h1 id="function-keys" tabindex="-1">Function: keys() <a class="header-anchor" href="#function-keys" aria-label="Permalink to &quot;Function: keys()&quot;">​</a></h1><blockquote><p><strong>keys</strong>&lt;<code>A</code>&gt;(<code>args</code>): <a href="./../-internal-/interfaces/Generator.html"><code>Generator</code></a>&lt;<a href="./../-internal-/type-aliases/Extract.html"><code>Extract</code></a>&lt;keyof <code>A</code>, <code>string</code>&gt;, <code>void</code>, <code>unknown</code>&gt;</p></blockquote><p>Returns an iterator of the own enumerable property names of object.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>• <strong>A</strong> extends <a href="./../../../types/-internal-/type-aliases/Record.html"><code>Record</code></a>&lt;<code>string</code>, <code>unknown</code>&gt;</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><p>• <strong>args</strong>: <code>A</code></p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../-internal-/interfaces/Generator.html"><code>Generator</code></a>&lt;<a href="./../-internal-/type-aliases/Extract.html"><code>Extract</code></a>&lt;keyof <code>A</code>, <code>string</code>&gt;, <code>void</code>, <code>unknown</code>&gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/keys.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/4d72eff/packages/core/src/pipe/lazy/keys.ts#L14" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/keys.ts:14</a></p>`,15),i=[o];function n(c,l,p,h,d,k){return t(),a("div",null,i)}const f=e(r,[["render",n]]);export{y as __pageData,f as default};
