import{_ as e,c as t,o as a,R as o}from"./chunks/framework.YlTiAyro.js";const _=JSON.parse('{"title":"Type alias: PipeReturnValue<T>","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/type-aliases/PipeReturnValue.md","filePath":"api/types/type-aliases/PipeReturnValue.md","lastUpdated":null}'),r={name:"api/types/type-aliases/PipeReturnValue.md"},s=o('<p><a href="./../../modules.html">fx-flow</a> / <a href="./../">types</a> / PipeReturnValue</p><h1 id="type-alias-pipereturnvalue-t" tabindex="-1">Type alias: PipeReturnValue&lt;T&gt; <a class="header-anchor" href="#type-alias-pipereturnvalue-t" aria-label="Permalink to &quot;Type alias: PipeReturnValue\\&lt;T\\&gt;&quot;">​</a></h1><blockquote><p><strong>PipeReturnValue</strong>&lt;<code>T</code>&gt;: <code>T</code> extends [infer First, infer Second, <code>...(infer Rest)</code>] ? <code>First</code> extends <code>Promise</code>&lt;<code>unknown</code>&gt; | <a href="./../../pipe/strict/-internal-/interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;<code>unknown</code>&gt; ? <a href="./FixedPromise.html"><code>FixedPromise</code></a>&lt;<a href="./Tail.html"><code>Tail</code></a>&lt;<code>T</code>&gt;&gt; : <a href="./PipeReturnValue.html"><code>PipeReturnValue</code></a>&lt;[<code>Second</code>, <code>...Rest</code>]&gt; : <code>T</code>[<code>0</code>]</p></blockquote><p>T = [...Rest, Last], any one of Rest is async ? FixedPromise&lt;Last&gt; : Last</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>• <strong>T</strong> extends <code>unknown</code>[]</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/4d72eff/packages/core/src/types/pipe.ts#L5" target="_blank" rel="noreferrer">packages/core/src/types/pipe.ts:5</a></p>',8),c=[s];function i(n,l,p,d,u,h){return a(),t("div",null,c)}const m=e(r,[["render",i]]);export{_ as __pageData,m as default};
