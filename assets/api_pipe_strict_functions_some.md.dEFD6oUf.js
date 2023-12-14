import{_ as e,o as a,c as s,R as t}from"./chunks/framework.YqPgmvU8.js";const m=JSON.parse('{"title":"Function: some()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/strict/functions/some.md","filePath":"api/pipe/strict/functions/some.md","lastUpdated":null}'),r={name:"api/pipe/strict/functions/some.md"},i=t(`<p><a href="./../../../modules.html">fx-flow</a> / <a href="./../">pipe/strict</a> / some</p><h1 id="function-some" tabindex="-1">Function: some() <a class="header-anchor" href="#function-some" aria-label="Permalink to &quot;Function: some()&quot;">​</a></h1><h2 id="some-fn" tabindex="-1">some(fn) <a class="header-anchor" href="#some-fn" aria-label="Permalink to &quot;some(fn)&quot;">​</a></h2><blockquote><p><strong>some</strong>&lt;<code>A</code>&gt;(<code>fn</code>): (<code>iterable</code>) =&gt; <a href="./../../../types/type-aliases/IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt;<code>A</code>, <code>boolean</code>&gt;</p></blockquote><p>Returns true if any of the values in Iterable/AsyncIterable pass the <code>fn</code> truth test.</p><h3 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong> extends <a href="./../../../types/type-aliases/UniversalIterable.html"><code>UniversalIterable</code></a></p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>fn</strong>: (<code>args</code>) =&gt; <code>A</code> extends <a href="./../../../types/-internal-/interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;<code>unknown</code>&gt; ? <code>unknown</code> : <code>unknown</code></p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Function</code></p><blockquote><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>iterable</strong>: <code>A</code></p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../../types/type-aliases/IterableReturnValue.html"><code>IterableReturnValue</code></a>&lt;<code>A</code>, <code>boolean</code>&gt;</p></blockquote><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">some</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">some</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/some.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/28ef58d/packages/core/src/pipe/strict/some.ts#L23" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/some.ts:23</a></p><h2 id="some-fn-iterable" tabindex="-1">some(fn, iterable) <a class="header-anchor" href="#some-fn-iterable" aria-label="Permalink to &quot;some(fn, iterable)&quot;">​</a></h2><blockquote><p><strong>some</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>iterable</code>): <code>false</code></p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong> extends readonly []</p><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>fn</strong>: (<code>args</code>) =&gt; <code>boolean</code></p><p>• <strong>iterable</strong>: <code>A</code></p><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>false</code></p><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/28ef58d/packages/core/src/pipe/strict/some.ts#L27" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/some.ts:27</a></p><h2 id="some-fn-iterable-1" tabindex="-1">some(fn, iterable) <a class="header-anchor" href="#some-fn-iterable-1" aria-label="Permalink to &quot;some(fn, iterable)&quot;">​</a></h2><blockquote><p><strong>some</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>iterable</code>): <code>boolean</code></p></blockquote><h3 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>fn</strong>: (<code>args</code>) =&gt; <code>unknown</code></p><p>• <strong>iterable</strong>: <a href="./../../../types/-internal-/interfaces/Iterable.html"><code>Iterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>boolean</code></p><h3 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/28ef58d/packages/core/src/pipe/strict/some.ts#L29" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/some.ts:29</a></p><h2 id="some-fn-iterable-2" tabindex="-1">some(fn, iterable) <a class="header-anchor" href="#some-fn-iterable-2" aria-label="Permalink to &quot;some(fn, iterable)&quot;">​</a></h2><blockquote><p><strong>some</strong>&lt;<code>A</code>&gt;(<code>fn</code>, <code>iterable</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></blockquote><h3 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong></p><h3 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>fn</strong>: (<code>args</code>) =&gt; <code>unknown</code></p><p>• <strong>iterable</strong>: <a href="./../../../types/-internal-/interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;<code>A</code>&gt;</p><h3 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h3 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/28ef58d/packages/core/src/pipe/strict/some.ts#L30" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/some.ts:30</a></p>`,50),o=[i];function n(l,h,p,c,d,k){return a(),s("div",null,o)}const g=e(r,[["render",n]]);export{m as __pageData,g as default};
