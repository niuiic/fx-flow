import{_ as e,c as a,o as t,a4 as r}from"./chunks/framework.CGUKru78.js";const y=JSON.parse('{"title":"Function: toTry()","description":"","frontmatter":{},"headers":[],"relativePath":"api/flow/functions/toTry.md","filePath":"api/flow/functions/toTry.md","lastUpdated":null}'),s={name:"api/flow/functions/toTry.md"},o=r(`<p><a href="./../../modules.html">fx-flow</a> / <a href="./../">flow</a> / toTry</p><h1 id="function-totry" tabindex="-1">Function: toTry() <a class="header-anchor" href="#function-totry" aria-label="Permalink to &quot;Function: toTry()&quot;">​</a></h1><blockquote><p><strong>toTry</strong>&lt;<code>A</code>&gt;(<code>fn</code>): (...<code>args</code>) =&gt; <a href="./../-internal-/type-aliases/TryDoResult.html"><code>TryDoResult</code></a>&lt;<a href="./../-internal-/type-aliases/ReturnType.html"><code>ReturnType</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><p>Convert <code>fn</code> to <code>(...args) =&gt; tryDo(() =&gt; fn(...args))</code></p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>• <strong>A</strong> extends <a href="./../../types/type-aliases/AnyFunction.html"><code>AnyFunction</code></a></p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><p>• <strong>fn</strong>: <code>A</code></p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Function</code></p><blockquote><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• ...<strong>args</strong>: <a href="./../-internal-/type-aliases/Parameters.html"><code>Parameters</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../-internal-/type-aliases/TryDoResult.html"><code>TryDoResult</code></a>&lt;<a href="./../-internal-/type-aliases/ReturnType.html"><code>ReturnType</code></a>&lt;<code>A</code>&gt;&gt;</p></blockquote><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toTry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj.a.b)() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// get a failure Result</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/toTry.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/fbceb745a53f3aa7c9d0ca36c47c247cc9c6fd0e/packages/core/src/flow/toTry.ts#L15" target="_blank" rel="noreferrer">packages/core/src/flow/toTry.ts:15</a></p>`,16),n=[o];function i(l,c,p,h,d,u){return t(),a("div",null,n)}const k=e(s,[["render",i]]);export{y as __pageData,k as default};
