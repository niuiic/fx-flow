import{_ as e,c as t,o as a,a3 as o}from"./chunks/framework.B_D3VkG0.js";const f=JSON.parse('{"title":"Type alias: PipeReturnValue&lt;T&gt;","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/type-aliases/PipeReturnValue.md","filePath":"api/types/type-aliases/PipeReturnValue.md","lastUpdated":null}'),r={name:"api/types/type-aliases/PipeReturnValue.md"},s=o('<p><a href="./../../modules.html">fx-flow v0.7.0</a> / <a href="./../">types</a> / PipeReturnValue</p><h1 id="type-alias-pipereturnvalue-lt-t-gt" tabindex="-1">Type alias: PipeReturnValue&lt;T&gt; <a class="header-anchor" href="#type-alias-pipereturnvalue-lt-t-gt" aria-label="Permalink to &quot;Type alias: PipeReturnValue&amp;lt;T&amp;gt;&quot;">​</a></h1><blockquote><p><strong>PipeReturnValue</strong>&lt;<code>T</code>&gt;: <code>T</code> <em>extends</em> [infer First, infer Second, <code>...(infer Rest)</code>] ? <code>First</code> <em>extends</em> <code>Promise</code>&lt;<code>unknown</code>&gt; | <a href="./../../pipe/strict/interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;<code>unknown</code>&gt; ? <a href="./FixedPromise.html"><code>FixedPromise</code></a>&lt;<a href="./Tail.html"><code>Tail</code></a>&lt;<code>T</code>&gt;&gt; : <a href="./PipeReturnValue.html"><code>PipeReturnValue</code></a>&lt;[<code>Second</code>, <code>...Rest</code>]&gt; : <code>T</code>[<code>0</code>]</p></blockquote><p>T = [...Rest, Last], any one of Rest is async ? FixedPromise&lt;Last&gt; : Last</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>• <strong>T</strong> <em>extends</em> <code>unknown</code>[]</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/types/pipe.ts#L5" target="_blank" rel="noreferrer">packages/core/src/types/pipe.ts:5</a></p>',8),c=[s];function l(i,p,n,d,u,h){return a(),t("div",null,c)}const _=e(r,[["render",l]]);export{f as __pageData,_ as default};