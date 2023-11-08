import{_ as a,o as e,c as s,Q as o}from"./chunks/framework.1baa841b.js";const m=JSON.parse('{"title":"Function: always()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/strict/functions/always.md","filePath":"api/pipe/strict/functions/always.md","lastUpdated":null}'),t={name:"api/pipe/strict/functions/always.md"},r=o('<p><a href="./../../../modules.html">fx-flow</a> / <a href="./../">pipe/strict</a> / always</p><h1 id="function-always" tabindex="-1">Function: always() <a class="header-anchor" href="#function-always" aria-label="Permalink to &quot;Function: always()&quot;">​</a></h1><blockquote><p><strong>always</strong>&lt;<code>A</code>&gt;(<code>args</code>): (...<code>args</code>) =&gt; <code>A</code></p></blockquote><p>Return a function that returns the given value.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>▪ <strong>A</strong></p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><p>▪ <strong>args</strong>: <code>A</code></p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>function</code></p><blockquote><blockquote><p>(...<code>args</code>): <code>A</code></p></blockquote><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ ...<strong>args</strong>: <code>unknown</code>[]</p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>A</code></p></blockquote><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">], </span><span style="color:#B392F0;">always</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">))) </span><span style="color:#6A737D;">// [1, 2, 3, 4]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">], </span><span style="color:#6F42C1;">always</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">))) </span><span style="color:#6A737D;">// [1, 2, 3, 4]</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/always.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/5140770/packages/core/src/pipe/strict/always.ts#L11" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/always.ts:11</a></p>',16),n=[r];function l(p,c,i,d,u,h){return e(),s("div",null,n)}const E=a(t,[["render",l]]);export{m as __pageData,E as default};