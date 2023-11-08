import{_ as e,o as a,c as o,Q as t}from"./chunks/framework.1baa841b.js";const g=JSON.parse('{"title":"Function: ifThen()","description":"","frontmatter":{},"headers":[],"relativePath":"api/flow/functions/ifThen.md","filePath":"api/flow/functions/ifThen.md","lastUpdated":null}'),s={name:"api/flow/functions/ifThen.md"},r=t(`<p><a href="./../../modules.html">fx-flow</a> / <a href="./../">flow</a> / ifThen</p><h1 id="function-ifthen" tabindex="-1">Function: ifThen() <a class="header-anchor" href="#function-ifthen" aria-label="Permalink to &quot;Function: ifThen()&quot;">​</a></h1><h2 id="ifthen-guard-fn-result" tabindex="-1">ifThen(guard, fn, result) <a class="header-anchor" href="#ifthen-guard-fn-result" aria-label="Permalink to &quot;ifThen(guard, fn, result)&quot;">​</a></h2><blockquote><p><strong>ifThen</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>guard</code>, <code>fn</code>, <code>result</code>): <a href="./../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><p>Call <code>fn</code> if <code>result</code> is success and <code>condition</code> is satisfied.</p><h3 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><p>▪ <strong>B</strong></p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>guard</strong>: (<code>data</code>) =&gt; <code>data is B</code></p><p>▪ <strong>fn</strong>: (<code>data</code>) =&gt; <code>Promise</code>&lt;<code>unknown</code>&gt;</p><p>▪ <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;&gt;</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">userInfo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ifThen</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">userId</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> userId </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, queryUserInfo, </span><span style="color:#B392F0;">ok</span><span style="color:#E1E4E8;">(userId))).</span><span style="color:#B392F0;">unwrap</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">// with flow</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">userInfo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">flow</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">ok</span><span style="color:#E1E4E8;">(userId), </span><span style="color:#B392F0;">andThen</span><span style="color:#E1E4E8;">(queryUserInfo), </span><span style="color:#B392F0;">ifThen</span><span style="color:#E1E4E8;">(isNotAdmin, printUserInfo), </span><span style="color:#B392F0;">errThen</span><span style="color:#E1E4E8;">(notify))).</span><span style="color:#B392F0;">unwrapOr</span><span style="color:#E1E4E8;">(defaultUserInfo)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">userInfo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ifThen</span><span style="color:#24292E;">((</span><span style="color:#E36209;">userId</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> userId </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, queryUserInfo, </span><span style="color:#6F42C1;">ok</span><span style="color:#24292E;">(userId))).</span><span style="color:#6F42C1;">unwrap</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">// with flow</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">userInfo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">flow</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">ok</span><span style="color:#24292E;">(userId), </span><span style="color:#6F42C1;">andThen</span><span style="color:#24292E;">(queryUserInfo), </span><span style="color:#6F42C1;">ifThen</span><span style="color:#24292E;">(isNotAdmin, printUserInfo), </span><span style="color:#6F42C1;">errThen</span><span style="color:#24292E;">(notify))).</span><span style="color:#6F42C1;">unwrapOr</span><span style="color:#24292E;">(defaultUserInfo)</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/ifThen.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/flow/ifThen.ts#L20" target="_blank" rel="noreferrer">packages/core/src/flow/ifThen.ts:20</a></p><h2 id="ifthen-guard-fn-result-1" tabindex="-1">ifThen(guard, fn, result) <a class="header-anchor" href="#ifthen-guard-fn-result-1" aria-label="Permalink to &quot;ifThen(guard, fn, result)&quot;">​</a></h2><blockquote><p><strong>ifThen</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>guard</code>, <code>fn</code>, <code>result</code>): <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><p>▪ <strong>B</strong></p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>guard</strong>: (<code>data</code>) =&gt; <code>data is B</code></p><p>▪ <strong>fn</strong>: (<code>data</code>) =&gt; <code>unknown</code></p><p>▪ <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/flow/ifThen.ts#L25" target="_blank" rel="noreferrer">packages/core/src/flow/ifThen.ts:25</a></p><h2 id="ifthen-guard-fn-result-2" tabindex="-1">ifThen(guard, fn, result) <a class="header-anchor" href="#ifthen-guard-fn-result-2" aria-label="Permalink to &quot;ifThen(guard, fn, result)&quot;">​</a></h2><blockquote><p><strong>ifThen</strong>&lt;<code>A</code>&gt;(<code>guard</code>, <code>fn</code>, <code>result</code>): <a href="./../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><h3 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>guard</strong>: (<code>data</code>) =&gt; <code>boolean</code></p><p>▪ <strong>fn</strong>: (<code>data</code>) =&gt; <code>Promise</code>&lt;<code>unknown</code>&gt;</p><p>▪ <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;&gt;</p><h3 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/flow/ifThen.ts#L26" target="_blank" rel="noreferrer">packages/core/src/flow/ifThen.ts:26</a></p><h2 id="ifthen-guard-fn-result-3" tabindex="-1">ifThen(guard, fn, result) <a class="header-anchor" href="#ifthen-guard-fn-result-3" aria-label="Permalink to &quot;ifThen(guard, fn, result)&quot;">​</a></h2><blockquote><p><strong>ifThen</strong>&lt;<code>A</code>&gt;(<code>guard</code>, <code>fn</code>, <code>result</code>): <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>guard</strong>: (<code>data</code>) =&gt; <code>boolean</code></p><p>▪ <strong>fn</strong>: (<code>data</code>) =&gt; <code>unknown</code></p><p>▪ <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h3 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/flow/ifThen.ts#L31" target="_blank" rel="noreferrer">packages/core/src/flow/ifThen.ts:31</a></p><h2 id="ifthen-guard-fn" tabindex="-1">ifThen(guard, fn) <a class="header-anchor" href="#ifthen-guard-fn" aria-label="Permalink to &quot;ifThen(guard, fn)&quot;">​</a></h2><blockquote><p><strong>ifThen</strong>&lt;<code>A</code>, <code>B</code>, <code>R</code>&gt;(<code>guard</code>, <code>fn</code>): (<code>result</code>) =&gt; <a href="./../../types/&lt;internal&gt;/type-aliases/IfThenReturnValue.html"><code>IfThenReturnValue</code></a>&lt;<code>A</code>, <code>R</code>&gt;</p></blockquote><h3 id="type-parameters-4" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-4" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><p>▪ <strong>B</strong></p><p>▪ <strong>R</strong></p><h3 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>guard</strong>: (<code>data</code>) =&gt; <code>data is B</code></p><p>▪ <strong>fn</strong>: (<code>data</code>) =&gt; <code>R</code></p><h3 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>function</code></p><blockquote><blockquote><p>(<code>result</code>): <a href="./../../types/&lt;internal&gt;/type-aliases/IfThenReturnValue.html"><code>IfThenReturnValue</code></a>&lt;<code>A</code>, <code>R</code>&gt;</p></blockquote><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>▪ <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../types/&lt;internal&gt;/type-aliases/IfThenReturnValue.html"><code>IfThenReturnValue</code></a>&lt;<code>A</code>, <code>R</code>&gt;</p></blockquote><h3 id="source-4" tabindex="-1">Source <a class="header-anchor" href="#source-4" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/flow/ifThen.ts#L32" target="_blank" rel="noreferrer">packages/core/src/flow/ifThen.ts:32</a></p><h2 id="ifthen-guard-fn-1" tabindex="-1">ifThen(guard, fn) <a class="header-anchor" href="#ifthen-guard-fn-1" aria-label="Permalink to &quot;ifThen(guard, fn)&quot;">​</a></h2><blockquote><p><strong>ifThen</strong>&lt;<code>A</code>, <code>R</code>&gt;(<code>guard</code>, <code>fn</code>): (<code>result</code>) =&gt; <a href="./../../types/&lt;internal&gt;/type-aliases/IfThenReturnValue.html"><code>IfThenReturnValue</code></a>&lt;<code>A</code>, <code>R</code>&gt;</p></blockquote><h3 id="type-parameters-5" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-5" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><p>▪ <strong>R</strong></p><h3 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>guard</strong>: (<code>data</code>) =&gt; <code>boolean</code></p><p>▪ <strong>fn</strong>: (<code>data</code>) =&gt; <code>R</code></p><h3 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>function</code></p><blockquote><blockquote><p>(<code>result</code>): <a href="./../../types/&lt;internal&gt;/type-aliases/IfThenReturnValue.html"><code>IfThenReturnValue</code></a>&lt;<code>A</code>, <code>R</code>&gt;</p></blockquote><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>▪ <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../types/&lt;internal&gt;/type-aliases/IfThenReturnValue.html"><code>IfThenReturnValue</code></a>&lt;<code>A</code>, <code>R</code>&gt;</p></blockquote><h3 id="source-5" tabindex="-1">Source <a class="header-anchor" href="#source-5" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/flow/ifThen.ts#L36" target="_blank" rel="noreferrer">packages/core/src/flow/ifThen.ts:36</a></p>`,83),n=[r];function l(c,p,d,h,u,i){return a(),o("div",null,n)}const m=e(s,[["render",l]]);export{g as __pageData,m as default};
