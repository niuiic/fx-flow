import{_ as s,o as a,c as e,Q as l}from"./chunks/framework.1baa841b.js";const f=JSON.parse('{"title":"Function: isNull()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/strict/functions/isNull.md","filePath":"api/pipe/strict/functions/isNull.md","lastUpdated":null}'),n={name:"api/pipe/strict/functions/isNull.md"},t=l(`<p><a href="./../../../modules.html">fx-flow</a> / <a href="./../">pipe/strict</a> / isNull</p><h1 id="function-isnull" tabindex="-1">Function: isNull() <a class="header-anchor" href="#function-isnull" aria-label="Permalink to &quot;Function: isNull()&quot;">​</a></h1><blockquote><p><strong>isNull</strong>&lt;<code>A</code>&gt;(<code>args</code>): <code>args is Include&lt;A, null&gt;</code></p></blockquote><p>Check whether <code>args</code> is null.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>▪ <strong>A</strong></p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><p>▪ <strong>args</strong>: <code>A</code></p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>args is Include&lt;A, null&gt;</code></p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]); </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]); </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// true</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/isNull.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/pipe/strict/isNull.ts#L15" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/isNull.ts:15</a></p>`,15),o=[t];function r(p,c,i,u,d,h){return a(),e("div",null,o)}const E=s(n,[["render",r]]);export{f as __pageData,E as default};
