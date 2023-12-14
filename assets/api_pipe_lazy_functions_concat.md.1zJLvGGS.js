import{_ as e,o as a,c as t,R as s}from"./chunks/framework.YqPgmvU8.js";const g=JSON.parse('{"title":"Function: concat()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/lazy/functions/concat.md","filePath":"api/pipe/lazy/functions/concat.md","lastUpdated":null}'),i={name:"api/pipe/lazy/functions/concat.md"},r=s(`<p><a href="./../../../modules.html">fx-flow</a> / <a href="./../">pipe/lazy</a> / concat</p><h1 id="function-concat" tabindex="-1">Function: concat() <a class="header-anchor" href="#function-concat" aria-label="Permalink to &quot;Function: concat()&quot;">​</a></h1><h2 id="concat-iterable1-iterable2" tabindex="-1">concat(iterable1, iterable2) <a class="header-anchor" href="#concat-iterable1-iterable2" aria-label="Permalink to &quot;concat(iterable1, iterable2)&quot;">​</a></h2><blockquote><p><strong>concat</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>iterable1</code>, <code>iterable2</code>): <a href="./../../../types/type-aliases/ConcatReturnValue.html"><code>ConcatReturnValue</code></a>&lt;<code>A</code>, <code>B</code>&gt;</p></blockquote><p>Return the result of concatenating the given iterable.</p><h3 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong> extends <a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a></p><p>• <strong>B</strong> extends <a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a></p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>iterable1</strong>: <code>A</code></p><p>• <strong>iterable2</strong>: <code>B</code></p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/type-aliases/ConcatReturnValue.html"><code>ConcatReturnValue</code></a>&lt;<code>A</code>, <code>B</code>&gt;</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> iter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// {done:false, value: 1}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// {done:false, value: 2}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// {done:false, value: 3}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// {done:false, value: 4}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// {done:true, value: undefined}</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/lazy/concat.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/28ef58d/packages/core/src/pipe/lazy/concat.ts#L62" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/concat.ts:62</a></p><h2 id="concat-iterable1" tabindex="-1">concat(iterable1) <a class="header-anchor" href="#concat-iterable1" aria-label="Permalink to &quot;concat(iterable1)&quot;">​</a></h2><blockquote><p><strong>concat</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>iterable1</code>): (<code>iterable2</code>) =&gt; <a href="./../../../types/type-aliases/ConcatReturnValue.html"><code>ConcatReturnValue</code></a>&lt;<code>A</code>, <code>B</code>&gt;</p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong> extends <a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a></p><p>• <strong>B</strong> extends <a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a></p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>iterable1</strong>: <code>A</code></p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Function</code></p><blockquote><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>iterable2</strong>: <code>B</code></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../../types/type-aliases/ConcatReturnValue.html"><code>ConcatReturnValue</code></a>&lt;<code>A</code>, <code>B</code>&gt;</p></blockquote><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/28ef58d/packages/core/src/pipe/lazy/concat.ts#L67" target="_blank" rel="noreferrer">packages/core/src/pipe/lazy/concat.ts:67</a></p>`,30),n=[r];function l(o,c,h,p,d,k){return a(),t("div",null,n)}const b=e(i,[["render",l]]);export{g as __pageData,b as default};
