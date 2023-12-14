import{_ as e,o as a,c as t,R as r}from"./chunks/framework.YqPgmvU8.js";const b=JSON.parse('{"title":"Function: add()","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/strict/functions/add.md","filePath":"api/pipe/strict/functions/add.md","lastUpdated":null}'),o={name:"api/pipe/strict/functions/add.md"},s=r('<p><a href="./../../../modules.html">fx-flow</a> / <a href="./../">pipe/strict</a> / add</p><h1 id="function-add" tabindex="-1">Function: add() <a class="header-anchor" href="#function-add" aria-label="Permalink to &quot;Function: add()&quot;">​</a></h1><h2 id="add-a-b" tabindex="-1">add(a, b) <a class="header-anchor" href="#add-a-b" aria-label="Permalink to &quot;add(a, b)&quot;">​</a></h2><blockquote><p><strong>add</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>a</code>, <code>b</code>): <a href="./../../../types/-internal-/type-aliases/AddReturnValue.html"><code>AddReturnValue</code></a>&lt;<a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>number</code>&gt;, <code>A</code>, <code>B</code>&gt;</p></blockquote><p>Retures the sum of <code>a</code> and <code>b</code></p><h3 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong> extends <a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>number</code>&gt;</p><p>• <strong>B</strong> extends <a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>number</code>&gt;</p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>a</strong>: <code>A</code></p><p>• <strong>b</strong>: <code>B</code></p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/-internal-/type-aliases/AddReturnValue.html"><code>AddReturnValue</code></a>&lt;<a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>number</code>&gt;, <code>A</code>, <code>B</code>&gt;</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/pipe/strict/add.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/28ef58d/packages/core/src/pipe/strict/add.ts#L39" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/add.ts:39</a></p><h2 id="add-a" tabindex="-1">add(a) <a class="header-anchor" href="#add-a" aria-label="Permalink to &quot;add(a)&quot;">​</a></h2><blockquote><p><strong>add</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>a</code>): (<code>b</code>) =&gt; <a href="./../../../types/-internal-/type-aliases/AddReturnValue.html"><code>AddReturnValue</code></a>&lt;<a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>number</code>&gt;, <code>A</code>, <code>B</code>&gt;</p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong> extends <a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>number</code>&gt;</p><p>• <strong>B</strong> extends <a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>number</code>&gt;</p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>a</strong>: <code>A</code></p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Function</code></p><blockquote><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>b</strong>: <code>B</code></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../../types/-internal-/type-aliases/AddReturnValue.html"><code>AddReturnValue</code></a>&lt;<a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>number</code>&gt;, <code>A</code>, <code>B</code>&gt;</p></blockquote><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/28ef58d/packages/core/src/pipe/strict/add.ts#L43" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/add.ts:43</a></p><h2 id="add-a-b-1" tabindex="-1">add(a, b) <a class="header-anchor" href="#add-a-b-1" aria-label="Permalink to &quot;add(a, b)&quot;">​</a></h2><blockquote><p><strong>add</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>a</code>, <code>b</code>): <a href="./../../../types/-internal-/type-aliases/AddReturnValue.html"><code>AddReturnValue</code></a>&lt;<a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>string</code>&gt;, <code>A</code>, <code>B</code>&gt;</p></blockquote><h3 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong> extends <a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>string</code>&gt;</p><p>• <strong>B</strong> extends <a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>string</code>&gt;</p><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>a</strong>: <code>A</code></p><p>• <strong>b</strong>: <code>B</code></p><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../../../types/-internal-/type-aliases/AddReturnValue.html"><code>AddReturnValue</code></a>&lt;<a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>string</code>&gt;, <code>A</code>, <code>B</code>&gt;</p><h3 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/28ef58d/packages/core/src/pipe/strict/add.ts#L47" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/add.ts:47</a></p><h2 id="add-a-1" tabindex="-1">add(a) <a class="header-anchor" href="#add-a-1" aria-label="Permalink to &quot;add(a)&quot;">​</a></h2><blockquote><p><strong>add</strong>&lt;<code>A</code>, <code>B</code>&gt;(<code>a</code>): (<code>b</code>) =&gt; <a href="./../../../types/-internal-/type-aliases/AddReturnValue.html"><code>AddReturnValue</code></a>&lt;<a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>string</code>&gt;, <code>A</code>, <code>B</code>&gt;</p></blockquote><h3 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>• <strong>A</strong> extends <a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>string</code>&gt;</p><p>• <strong>B</strong> extends <a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>string</code>&gt;</p><h3 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>a</strong>: <code>A</code></p><h3 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Function</code></p><blockquote><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>b</strong>: <code>B</code></p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../../types/-internal-/type-aliases/AddReturnValue.html"><code>AddReturnValue</code></a>&lt;<a href="./../../../types/type-aliases/MaybePromise.html"><code>MaybePromise</code></a>&lt;<code>string</code>&gt;, <code>A</code>, <code>B</code>&gt;</p></blockquote><h3 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/28ef58d/packages/core/src/pipe/strict/add.ts#L51" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/add.ts:51</a></p>',54),d=[s];function c(i,l,n,p,h,u){return a(),t("div",null,d)}const g=e(o,[["render",c]]);export{b as __pageData,g as default};
