import{_ as e,c as a,o as t,a3 as r}from"./chunks/framework.B_D3VkG0.js";const k=JSON.parse('{"title":"Function: inject()","description":"","frontmatter":{},"headers":[],"relativePath":"api/flow/functions/inject.md","filePath":"api/flow/functions/inject.md","lastUpdated":null}'),s={name:"api/flow/functions/inject.md"},o=r(`<p><a href="./../../modules.html">fx-flow v0.7.0</a> / <a href="./../">flow</a> / inject</p><h1 id="function-inject" tabindex="-1">Function: inject() <a class="header-anchor" href="#function-inject" aria-label="Permalink to &quot;Function: inject()&quot;">​</a></h1><h2 id="inject-fn-result" tabindex="-1">inject(fn, result) <a class="header-anchor" href="#inject-fn-result" aria-label="Permalink to &quot;inject(fn, result)&quot;">​</a></h2><blockquote><p><strong>inject</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>result</code>): <code>Promise</code>&lt;<a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><p>Inject a function to the progress without side effect.</p><h3 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>fn</strong></p><p>• <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Promise</code>&lt;<a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;&gt;</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// with flow</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> userInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> flow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ok</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(userId), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">inject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(doSometingElse), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">andThen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(queryUserInfo), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">errThen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(notify))).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unwrapOr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(defaultUserInfo)</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/inject.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/flow/inject.ts#L17" target="_blank" rel="noreferrer">packages/core/src/flow/inject.ts:17</a></p><h2 id="inject-fn" tabindex="-1">inject(fn) <a class="header-anchor" href="#inject-fn" aria-label="Permalink to &quot;inject(fn)&quot;">​</a></h2><blockquote><p><strong>inject</strong>&lt;<code>A</code>&gt;(<code>fn</code>): (<code>result</code>) =&gt; <code>Promise</code>&lt;<a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>fn</strong></p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Function</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;&gt;</p><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/flow/inject.ts#L21" target="_blank" rel="noreferrer">packages/core/src/flow/inject.ts:21</a></p><h2 id="inject-fn-result-1" tabindex="-1">inject(fn, result) <a class="header-anchor" href="#inject-fn-result-1" aria-label="Permalink to &quot;inject(fn, result)&quot;">​</a></h2><blockquote><p><strong>inject</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>result</code>): <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>fn</strong></p><p>• <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h3 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/flow/inject.ts#L24" target="_blank" rel="noreferrer">packages/core/src/flow/inject.ts:24</a></p><h2 id="inject-fn-1" tabindex="-1">inject(fn) <a class="header-anchor" href="#inject-fn-1" aria-label="Permalink to &quot;inject(fn)&quot;">​</a></h2><blockquote><p><strong>inject</strong>&lt;<code>A</code>&gt;(<code>fn</code>): (<code>result</code>) =&gt; <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><h3 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>fn</strong></p><h3 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Function</code></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h3 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/flow/inject.ts#L28" target="_blank" rel="noreferrer">packages/core/src/flow/inject.ts:28</a></p>`,56),n=[o];function c(i,l,h,d,p,u){return t(),a("div",null,n)}const m=e(s,[["render",c]]);export{k as __pageData,m as default};