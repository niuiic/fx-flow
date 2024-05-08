import{_ as e,c as a,o as r,a4 as t}from"./chunks/framework.CGUKru78.js";const m=JSON.parse('{"title":"Function: errThenEnd()","description":"","frontmatter":{},"headers":[],"relativePath":"api/flow/functions/errThenEnd.md","filePath":"api/flow/functions/errThenEnd.md","lastUpdated":null}'),s={name:"api/flow/functions/errThenEnd.md"},o=t('<p><a href="./../../modules.html">fx-flow</a> / <a href="./../">flow</a> / errThenEnd</p><h1 id="function-errthenend" tabindex="-1">Function: errThenEnd() <a class="header-anchor" href="#function-errthenend" aria-label="Permalink to &quot;Function: errThenEnd()&quot;">​</a></h1><h2 id="errthenend-fn-result-modifier" tabindex="-1">errThenEnd(fn, result, modifier) <a class="header-anchor" href="#errthenend-fn-result-modifier" aria-label="Permalink to &quot;errThenEnd(fn, result, modifier)&quot;">​</a></h2><blockquote><p><strong>errThenEnd</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>result</code>, <code>modifier</code>): <a href="./../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><p>Call <code>fn</code> if <code>result</code> is failure, then exit flow.</p><h3 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>fn</strong>: (<code>err</code>) =&gt; <code>Promise</code>&lt;<code>unknown</code>&gt;</p><p>• <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><p>• <strong>modifier</strong>: <a href="./../../types/type-aliases/Modifier.html"><code>Modifier</code></a></p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;&gt;</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> userInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> flow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ok</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(filePath), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">andThen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(readFileToStr), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">errThenEnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(notify), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">andThen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(calcLineCount))).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unwrapOr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/errThenEnd.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/fbceb745a53f3aa7c9d0ca36c47c247cc9c6fd0e/packages/core/src/flow/errThenEnd.ts#L16" target="_blank" rel="noreferrer">packages/core/src/flow/errThenEnd.ts:16</a></p><h2 id="errthenend-fn" tabindex="-1">errThenEnd(fn) <a class="header-anchor" href="#errthenend-fn" aria-label="Permalink to &quot;errThenEnd(fn)&quot;">​</a></h2><blockquote><p><strong>errThenEnd</strong>&lt;<code>A</code>&gt;(<code>fn</code>): (<code>result</code>, <code>modifier</code>) =&gt; <a href="./../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>fn</strong>: (<code>err</code>) =&gt; <code>Promise</code>&lt;<code>unknown</code>&gt;</p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Function</code></p><blockquote><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><p>• <strong>modifier</strong>: <a href="./../../types/type-aliases/Modifier.html"><code>Modifier</code></a></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/fbceb745a53f3aa7c9d0ca36c47c247cc9c6fd0e/packages/core/src/flow/errThenEnd.ts#L21" target="_blank" rel="noreferrer">packages/core/src/flow/errThenEnd.ts:21</a></p><h2 id="errthenend-fn-result-modifier-1" tabindex="-1">errThenEnd(fn, result, modifier) <a class="header-anchor" href="#errthenend-fn-result-modifier-1" aria-label="Permalink to &quot;errThenEnd(fn, result, modifier)&quot;">​</a></h2><blockquote><p><strong>errThenEnd</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>result</code>, <code>modifier</code>): <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>fn</strong>: (<code>err</code>) =&gt; <code>unknown</code></p><p>• <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><p>• <strong>modifier</strong>: <a href="./../../types/type-aliases/Modifier.html"><code>Modifier</code></a></p><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h3 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/fbceb745a53f3aa7c9d0ca36c47c247cc9c6fd0e/packages/core/src/flow/errThenEnd.ts#L24" target="_blank" rel="noreferrer">packages/core/src/flow/errThenEnd.ts:24</a></p><h2 id="errthenend-fn-1" tabindex="-1">errThenEnd(fn) <a class="header-anchor" href="#errthenend-fn-1" aria-label="Permalink to &quot;errThenEnd(fn)&quot;">​</a></h2><blockquote><p><strong>errThenEnd</strong>&lt;<code>A</code>&gt;(<code>fn</code>): (<code>result</code>, <code>modifier</code>) =&gt; <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><h3 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>fn</strong>: (<code>err</code>) =&gt; <code>unknown</code></p><h3 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Function</code></p><blockquote><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><p>• <strong>modifier</strong>: <a href="./../../types/type-aliases/Modifier.html"><code>Modifier</code></a></p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/fbceb745a53f3aa7c9d0ca36c47c247cc9c6fd0e/packages/core/src/flow/errThenEnd.ts#L25" target="_blank" rel="noreferrer">packages/core/src/flow/errThenEnd.ts:25</a></p>',52),n=[o];function i(c,l,d,h,p,u){return r(),a("div",null,n)}const k=e(s,[["render",i]]);export{m as __pageData,k as default};
