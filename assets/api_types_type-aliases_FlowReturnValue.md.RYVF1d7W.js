import{_ as e,o as t,c as o,R as a}from"./chunks/framework.YqPgmvU8.js";const m=JSON.parse('{"title":"Type alias: FlowReturnValue<T, Depth0>","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/type-aliases/FlowReturnValue.md","filePath":"api/types/type-aliases/FlowReturnValue.md","lastUpdated":null}'),r={name:"api/types/type-aliases/FlowReturnValue.md"},c=a('<p><a href="./../../modules.html">fx-flow</a> / <a href="./../">types</a> / FlowReturnValue</p><h1 id="type-alias-flowreturnvalue-t-depth0" tabindex="-1">Type alias: FlowReturnValue&lt;T, Depth0&gt; <a class="header-anchor" href="#type-alias-flowreturnvalue-t-depth0" aria-label="Permalink to &quot;Type alias: FlowReturnValue\\&lt;T, Depth0\\&gt;&quot;">​</a></h1><blockquote><p><strong>FlowReturnValue</strong>&lt;<code>T</code>, <code>Depth0</code>&gt;: <code>T</code> extends [infer First, infer Second, <code>...(infer Rest)</code>] ? [<code>Promise</code>&lt;<code>never</code>&gt;] extends [<code>First</code>] ? [<code>First</code>] extends [<code>Promise</code>&lt;<code>any</code>&gt;] ? <code>Depth0</code> extends <code>true</code> ? <a href="./FixedPromise.html"><code>FixedPromise</code></a>&lt;<a href="./Tail.html"><code>Tail</code></a>&lt;<code>T</code>&gt;&gt; : <a href="./MaybePromise.html"><code>MaybePromise</code></a>&lt;<a href="./Tail.html"><code>Tail</code></a>&lt;<code>T</code>&gt;&gt; : <a href="./MaybePromise.html"><code>MaybePromise</code></a>&lt;<a href="./Tail.html"><code>Tail</code></a>&lt;<code>T</code>&gt;&gt; : <a href="./FlowReturnValue.html"><code>FlowReturnValue</code></a>&lt;[<code>Second</code>, <code>...Rest</code>], <code>false</code>&gt; : <code>T</code>[<code>0</code>]</p></blockquote><p>T = [...Rest, Last], any one of Rest is Promise ? MaybePromise&lt;Last&gt; : Last</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>• <strong>T</strong> extends <code>unknown</code>[]</p><p>• <strong>Depth0</strong> = <code>true</code></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/28ef58d/packages/core/src/types/flow.ts#L15" target="_blank" rel="noreferrer">packages/core/src/types/flow.ts:15</a></p>',9),l=[c];function d(s,n,i,p,u,h){return t(),o("div",null,l)}const T=e(r,[["render",d]]);export{m as __pageData,T as default};
