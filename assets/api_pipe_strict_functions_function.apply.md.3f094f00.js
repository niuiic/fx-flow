import{_ as e,o as t,c as a,Q as r}from"./chunks/framework.ed6abfc6.js";const u=JSON.parse('{"title":"Function: apply","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_strict/functions/function.apply.md","filePath":"api/pipe_strict/functions/function.apply.md","lastUpdated":null}'),o={name:"api/pipe_strict/functions/function.apply.md"},s=r('<h1 id="function-apply" tabindex="-1">Function: apply <a class="header-anchor" href="#function-apply" aria-label="Permalink to &quot;Function: apply&quot;">​</a></h1><blockquote><p><strong>apply</strong>&lt;<code>A</code>, <code>P</code>&gt;(<code>fn</code>, <code>args</code>): <a href="./../../types/internal_/type-aliases/type-alias.ReturnType.html"><code>ReturnType</code></a>&lt; <em>typeof</em> <code>fn</code> &gt;</p></blockquote><p>Apply function <code>fn</code> to the arguments list <code>args</code>.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.AnyFunction.html"><code>AnyFunction</code></a></td></tr><tr><td style="text-align:left;"><code>P</code> <em>extends</em> <code>any</code>[]</td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>P</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/internal_/type-aliases/type-alias.ReturnType.html"><code>ReturnType</code></a>&lt; <em>typeof</em> <code>fn</code> &gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(Math.max, [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]); </span><span style="color:#6A737D;">// 5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(Math.max, [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]); </span><span style="color:#6A737D;">// 5</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/apply.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="defined-in" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/113c98b/packages/core/src/pipe/strict/apply.ts#L13" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/apply.ts:13</a></p><blockquote><p><strong>apply</strong>&lt;<code>A</code>, <code>P</code>&gt;(<code>fn</code>): (<code>args</code>) =&gt; <a href="./../../types/internal_/type-aliases/type-alias.ReturnType.html"><code>ReturnType</code></a>&lt; <em>typeof</em> <code>fn</code> &gt;</p></blockquote><h2 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.AnyFunction.html"><code>AnyFunction</code></a></td></tr><tr><td style="text-align:left;"><code>P</code> <em>extends</em> <code>any</code>[]</td></tr></tbody></table><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>args</code>): <a href="./../../types/internal_/type-aliases/type-alias.ReturnType.html"><code>ReturnType</code></a>&lt; <em>typeof</em> <code>fn</code> &gt;</p></blockquote><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;"><code>P</code></td></tr></tbody></table><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/internal_/type-aliases/type-alias.ReturnType.html"><code>ReturnType</code></a>&lt; <em>typeof</em> <code>fn</code> &gt;</p></blockquote><h2 id="defined-in-1" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/113c98b/packages/core/src/pipe/strict/apply.ts#L15" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/apply.ts:15</a></p>',23),l=[s];function n(p,c,d,i,y,h){return t(),a("div",null,l)}const m=e(o,[["render",n]]);export{u as __pageData,m as default};