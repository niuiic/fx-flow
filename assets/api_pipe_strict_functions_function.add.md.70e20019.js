import{_ as e,o as t,c as a,Q as r}from"./chunks/framework.ed6abfc6.js";const b=JSON.parse('{"title":"Function: add","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe_strict/functions/function.add.md","filePath":"api/pipe_strict/functions/function.add.md","lastUpdated":null}'),o={name:"api/pipe_strict/functions/function.add.md"},d=r('<h1 id="function-add" tabindex="-1">Function: add <a class="header-anchor" href="#function-add" aria-label="Permalink to &quot;Function: add&quot;">​</a></h1><blockquote><p><strong>add</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>a</code>, <code>b</code>): <a href="./../../types/internal_/type-aliases/type-alias.AddReturnValue.html"><code>AddReturnValue</code></a>&lt; <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>number</code> &gt;, <code>A</code>, <code>B</code> &gt;</p></blockquote><p>Retures the sum of <code>a</code> and <code>b</code></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>number</code> &gt;</td></tr><tr><td style="text-align:left;"><code>B</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>number</code> &gt;</td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>a</code></td><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>b</code></td><td style="text-align:left;"><code>B</code></td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/internal_/type-aliases/type-alias.AddReturnValue.html"><code>AddReturnValue</code></a>&lt; <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>number</code> &gt;, <code>A</code>, <code>B</code> &gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// 3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// 3</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/add.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="defined-in" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/c968531/packages/core/src/pipe/strict/add.ts#L39" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/add.ts:39</a></p><blockquote><p><strong>add</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>a</code>): (<code>b</code>) =&gt; <a href="./../../types/internal_/type-aliases/type-alias.AddReturnValue.html"><code>AddReturnValue</code></a>&lt; <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>number</code> &gt;, <code>A</code>, <code>B</code> &gt;</p></blockquote><h2 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>number</code> &gt;</td></tr><tr><td style="text-align:left;"><code>B</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>number</code> &gt;</td></tr></tbody></table><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>a</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>b</code>): <a href="./../../types/internal_/type-aliases/type-alias.AddReturnValue.html"><code>AddReturnValue</code></a>&lt; <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>number</code> &gt;, <code>A</code>, <code>B</code> &gt;</p></blockquote><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>b</code></td><td style="text-align:left;"><code>B</code></td></tr></tbody></table><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/internal_/type-aliases/type-alias.AddReturnValue.html"><code>AddReturnValue</code></a>&lt; <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>number</code> &gt;, <code>A</code>, <code>B</code> &gt;</p></blockquote><h2 id="defined-in-1" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/c968531/packages/core/src/pipe/strict/add.ts#L43" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/add.ts:43</a></p><blockquote><p><strong>add</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>a</code>, <code>b</code>): <a href="./../../types/internal_/type-aliases/type-alias.AddReturnValue.html"><code>AddReturnValue</code></a>&lt; <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>string</code> &gt;, <code>A</code>, <code>B</code> &gt;</p></blockquote><h2 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>string</code> &gt;</td></tr><tr><td style="text-align:left;"><code>B</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>string</code> &gt;</td></tr></tbody></table><h2 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>a</code></td><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>b</code></td><td style="text-align:left;"><code>B</code></td></tr></tbody></table><h2 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/internal_/type-aliases/type-alias.AddReturnValue.html"><code>AddReturnValue</code></a>&lt; <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>string</code> &gt;, <code>A</code>, <code>B</code> &gt;</p><h2 id="defined-in-2" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/c968531/packages/core/src/pipe/strict/add.ts#L47" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/add.ts:47</a></p><blockquote><p><strong>add</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>a</code>): (<code>b</code>) =&gt; <a href="./../../types/internal_/type-aliases/type-alias.AddReturnValue.html"><code>AddReturnValue</code></a>&lt; <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>string</code> &gt;, <code>A</code>, <code>B</code> &gt;</p></blockquote><h2 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>string</code> &gt;</td></tr><tr><td style="text-align:left;"><code>B</code> <em>extends</em> <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>string</code> &gt;</td></tr></tbody></table><h2 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>a</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>b</code>): <a href="./../../types/internal_/type-aliases/type-alias.AddReturnValue.html"><code>AddReturnValue</code></a>&lt; <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>string</code> &gt;, <code>A</code>, <code>B</code> &gt;</p></blockquote><h3 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>b</code></td><td style="text-align:left;"><code>B</code></td></tr></tbody></table><h3 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/internal_/type-aliases/type-alias.AddReturnValue.html"><code>AddReturnValue</code></a>&lt; <a href="./../../types/type-aliases/type-alias.MaybePromise.html"><code>MaybePromise</code></a>&lt; <code>string</code> &gt;, <code>A</code>, <code>B</code> &gt;</p></blockquote><h2 id="defined-in-3" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/c968531/packages/core/src/pipe/strict/add.ts#L51" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/add.ts:51</a></p>',41),l=[d];function s(c,i,n,p,h,y){return t(),a("div",null,l)}const u=e(o,[["render",s]]);export{b as __pageData,u as default};
