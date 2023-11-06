import{_ as e,o as t,c as a,Q as s}from"./chunks/framework.ed6abfc6.js";const f=JSON.parse('{"title":"Function: into","description":"","frontmatter":{},"headers":[],"relativePath":"api/flow/functions/function.into.md","filePath":"api/flow/functions/function.into.md","lastUpdated":null}'),o={name:"api/flow/functions/function.into.md"},n=s(`<h1 id="function-into" tabindex="-1">Function: into <a class="header-anchor" href="#function-into" aria-label="Permalink to &quot;Function: into&quot;">​</a></h1><blockquote><p><strong>into</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>, <code>result</code>): <a href="./../../types/internal_/type-aliases/type-alias.ReturnValue.html"><code>ReturnValue</code></a>&lt; <code>R</code> &gt;</p></blockquote><p>Convert data of <code>result</code>.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>data</code>) =&gt; <code>R</code></td></tr><tr><td style="text-align:left;"><code>result</code></td><td style="text-align:left;"><a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="./../../types/internal_/type-aliases/type-alias.ReturnValue.html"><code>ReturnValue</code></a>&lt; <code>R</code> &gt;</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">userInfo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ifThen</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> userId </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, queryUserInfo, </span><span style="color:#B392F0;">into</span><span style="color:#E1E4E8;">(injectUserId, </span><span style="color:#B392F0;">ok</span><span style="color:#E1E4E8;">()))).</span><span style="color:#B392F0;">unwrap</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">// with flow</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">userInfo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">flow</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">ok</span><span style="color:#E1E4E8;">(userId), </span><span style="color:#B392F0;">into</span><span style="color:#E1E4E8;">(injectUserName), </span><span style="color:#B392F0;">andThen</span><span style="color:#E1E4E8;">(queryUserInfo), </span><span style="color:#B392F0;">ifThen</span><span style="color:#E1E4E8;">(isNotAdmin, printUserInfo), </span><span style="color:#B392F0;">errThen</span><span style="color:#E1E4E8;">(notify))).</span><span style="color:#B392F0;">unwrapOr</span><span style="color:#E1E4E8;">(defaultUserInfo)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">userInfo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ifThen</span><span style="color:#24292E;">((</span><span style="color:#E36209;">userId</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> userId </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, queryUserInfo, </span><span style="color:#6F42C1;">into</span><span style="color:#24292E;">(injectUserId, </span><span style="color:#6F42C1;">ok</span><span style="color:#24292E;">()))).</span><span style="color:#6F42C1;">unwrap</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">// with flow</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">userInfo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">flow</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">ok</span><span style="color:#24292E;">(userId), </span><span style="color:#6F42C1;">into</span><span style="color:#24292E;">(injectUserName), </span><span style="color:#6F42C1;">andThen</span><span style="color:#24292E;">(queryUserInfo), </span><span style="color:#6F42C1;">ifThen</span><span style="color:#24292E;">(isNotAdmin, printUserInfo), </span><span style="color:#6F42C1;">errThen</span><span style="color:#24292E;">(notify))).</span><span style="color:#6F42C1;">unwrapOr</span><span style="color:#24292E;">(defaultUserInfo)</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/into.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="defined-in" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/c968531/packages/core/src/flow/into.ts#L20" target="_blank" rel="noreferrer">packages/core/src/flow/into.ts:20</a></p><blockquote><p><strong>into</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>fn</code>): (<code>result</code>) =&gt; <a href="./../../types/internal_/type-aliases/type-alias.ReturnValue.html"><code>ReturnValue</code></a>&lt; <code>R</code> &gt;</p></blockquote><h2 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>A</code></td></tr><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h2 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>data</code>) =&gt; <code>R</code></td></tr></tbody></table><h2 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><blockquote><blockquote><p>(<code>result</code>): <a href="./../../types/internal_/type-aliases/type-alias.ReturnValue.html"><code>ReturnValue</code></a>&lt; <code>R</code> &gt;</p></blockquote><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>result</code></td><td style="text-align:left;"><a href="./../classes/class.Result.html"><code>Result</code></a>&lt; <code>A</code> &gt;</td></tr></tbody></table><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/internal_/type-aliases/type-alias.ReturnValue.html"><code>ReturnValue</code></a>&lt; <code>R</code> &gt;</p></blockquote><h2 id="defined-in-1" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/c968531/packages/core/src/flow/into.ts#L21" target="_blank" rel="noreferrer">packages/core/src/flow/into.ts:21</a></p>`,23),l=[n];function r(p,c,d,i,y,h){return t(),a("div",null,l)}const E=e(o,[["render",r]]);export{f as __pageData,E as default};
