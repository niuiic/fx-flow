import{_ as e,c as t,o as a,R as s}from"./chunks/framework.YlTiAyro.js";const m=JSON.parse('{"title":"Type alias: ResultReturnValue<T>","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/type-aliases/ResultReturnValue.md","filePath":"api/types/type-aliases/ResultReturnValue.md","lastUpdated":null}'),l={name:"api/types/type-aliases/ResultReturnValue.md"},o=s('<p><a href="./../../modules.html">fx-flow</a> / <a href="./../">types</a> / ResultReturnValue</p><h1 id="type-alias-resultreturnvalue-t" tabindex="-1">Type alias: ResultReturnValue&lt;T&gt; <a class="header-anchor" href="#type-alias-resultreturnvalue-t" aria-label="Permalink to &quot;Type alias: ResultReturnValue\\&lt;T\\&gt;&quot;">​</a></h1><blockquote><p><strong>ResultReturnValue</strong>&lt;<code>T</code>&gt;: [<code>T</code>] extends [<code>Promise</code>&lt;<a href="./../../flow/classes/Result.html"><code>Result</code></a>&lt;<code>Promise</code>&lt;infer R&gt;&gt;&gt;] ? <a href="./MaybePromise.html"><code>MaybePromise</code></a>&lt;<a href="./../../flow/classes/Result.html"><code>Result</code></a>&lt;<a href="./../../pipe/strict/-internal-/type-aliases/Awaited.html"><code>Awaited</code></a>&lt;<code>R</code>&gt;&gt;&gt; : [<code>T</code>] extends [<code>Promise</code>&lt;<a href="./../../flow/classes/Result.html"><code>Result</code></a>&lt;infer R&gt;&gt;] ? <a href="./MaybePromise.html"><code>MaybePromise</code></a>&lt;<a href="./../../flow/classes/Result.html"><code>Result</code></a>&lt;<code>R</code>&gt;&gt; : [<code>T</code>] extends [<a href="./../../flow/classes/Result.html"><code>Result</code></a>&lt;<code>Promise</code>&lt;infer R&gt;&gt;] ? <a href="./MaybePromise.html"><code>MaybePromise</code></a>&lt;<a href="./../../flow/classes/Result.html"><code>Result</code></a>&lt;<a href="./../../pipe/strict/-internal-/type-aliases/Awaited.html"><code>Awaited</code></a>&lt;<code>R</code>&gt;&gt;&gt; : <code>T</code></p></blockquote><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>• <strong>T</strong> extends <a href="./MaybePromise.html"><code>MaybePromise</code></a>&lt;<a href="./../../flow/classes/Result.html"><code>Result</code></a>&lt;<code>unknown</code>&gt;&gt;</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/4d72eff/packages/core/src/types/result.ts#L4" target="_blank" rel="noreferrer">packages/core/src/types/result.ts:4</a></p>',7),r=[o];function c(d,u,i,n,p,h){return a(),t("div",null,r)}const R=e(l,[["render",c]]);export{m as __pageData,R as default};
