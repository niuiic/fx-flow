import{_ as e,o as a,c as o,Q as t}from"./chunks/framework.1baa841b.js";const f=JSON.parse('{"title":"Function: log()","description":"","frontmatter":{},"headers":[],"relativePath":"api/flow/functions/log.md","filePath":"api/flow/functions/log.md","lastUpdated":null}'),s={name:"api/flow/functions/log.md"},r=t('<p><a href="./../../modules.html">fx-flow</a> / <a href="./../">flow</a> / log</p><h1 id="function-log" tabindex="-1">Function: log() <a class="header-anchor" href="#function-log" aria-label="Permalink to &quot;Function: log()&quot;">​</a></h1><h2 id="log-method-result-modifier" tabindex="-1">log(method, result, modifier) <a class="header-anchor" href="#log-method-result-modifier" aria-label="Permalink to &quot;log(method, result, modifier)&quot;">​</a></h2><blockquote><p><strong>log</strong>&lt;<code>A</code>&gt;(<code>method</code>, <code>result</code>, <code>modifier</code>): <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p></blockquote><p>Output result of each step in flow.</p><h3 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>method</strong>: <a href="./../../types/&lt;internal&gt;/type-aliases/Method.html"><code>Method</code></a></p><p>▪ <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><p>▪ <strong>modifier</strong>: <a href="./../../types/type-aliases/Modifier.html"><code>Modifier</code></a></p><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">flow</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">ok</span><span style="color:#E1E4E8;">(filePath), </span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;INFO&#39;</span><span style="color:#E1E4E8;">), </span><span style="color:#B392F0;">andThen</span><span style="color:#E1E4E8;">(readFileToStr), </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;file should exists&#39;</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">flow</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">ok</span><span style="color:#24292E;">(filePath), </span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;INFO&#39;</span><span style="color:#24292E;">), </span><span style="color:#6F42C1;">andThen</span><span style="color:#24292E;">(readFileToStr), </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;file should exists&#39;</span><span style="color:#24292E;">))</span></span></code></pre></div><p><a href="https://github.com/niuiic/fx-flow/blob/main/packages/test/src/flow/log.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/flow/log.ts#L17" target="_blank" rel="noreferrer">packages/core/src/flow/log.ts:17</a></p><h2 id="log-method" tabindex="-1">log(method) <a class="header-anchor" href="#log-method" aria-label="Permalink to &quot;log(method)&quot;">​</a></h2><blockquote><p><strong>log</strong>&lt;<code>A</code>&gt;(<code>method</code>): (<code>result</code>, <code>modifier</code>) =&gt; <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h3><p>▪ <strong>A</strong></p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>▪ <strong>method</strong>: <a href="./../../types/&lt;internal&gt;/type-aliases/Method.html"><code>Method</code></a></p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>function</code></p><blockquote><blockquote><p>(<code>result</code>, <code>modifier</code>): <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p></blockquote><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>▪ <strong>result</strong>: <a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p><p>▪ <strong>modifier</strong>: <a href="./../../types/type-aliases/Modifier.html"><code>Modifier</code></a></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../classes/Result.html"><code>Result</code></a>&lt;<code>A</code>&gt;</p></blockquote><h3 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h3><p><a href="https://github.com/niuiic/fx-flow/blob/0a739c4/packages/core/src/flow/log.ts#L18" target="_blank" rel="noreferrer">packages/core/src/flow/log.ts:18</a></p>',29),l=[r];function c(n,p,d,i,h,u){return a(),o("div",null,l)}const g=e(s,[["render",c]]);export{f as __pageData,g as default};
