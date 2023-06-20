import{_ as e,o as t,c as a,O as r}from"./chunks/framework.ecf7cd05.js";const _=JSON.parse('{"title":"Type alias: PipeReturnValue<T>","description":"","frontmatter":{},"headers":[],"relativePath":"api/strict/internal_/type-aliases/type-alias.PipeReturnValue.md","filePath":"api/strict/internal_/type-aliases/type-alias.PipeReturnValue.md"}'),o={name:"api/strict/internal_/type-aliases/type-alias.PipeReturnValue.md"},i=r('<h1 id="type-alias-pipereturnvalue-t" tabindex="-1">Type alias: PipeReturnValue<code>&lt;T&gt;</code> <a class="header-anchor" href="#type-alias-pipereturnvalue-t" aria-label="Permalink to &quot;Type alias: PipeReturnValue`&lt;T&gt;`&quot;">​</a></h1><blockquote><p><strong>PipeReturnValue</strong>: &lt;<code>T</code>&gt; <code>T</code> <em>extends</em> [infer First, infer Second, <code>...(infer Rest)</code>] ? <code>First</code> <em>extends</em> <code>Promise</code>&lt; <code>unknown</code> &gt; | <a href="./../interfaces/interface.AsyncIterable.html"><code>AsyncIterable</code></a>&lt; <code>unknown</code> &gt; ? <a href="./type-alias.FixedPromise.html"><code>FixedPromise</code></a>&lt; <a href="./type-alias.Tail.html"><code>Tail</code></a>&lt; <code>T</code> &gt; &gt; : <a href="./type-alias.PipeReturnValue.html"><code>PipeReturnValue</code></a>&lt; [<code>Second</code>, <code>...Rest</code>] &gt; : <code>T</code>[<code>0</code>]</p></blockquote><p>T = [...Rest, Last], any one of Rest is async ? FixedPromise&lt;Last&gt; : Last</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code> <em>extends</em> <code>unknown</code>[]</td></tr></tbody></table><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/a95b5a4/src/types/pipe.ts#L4" target="_blank" rel="noreferrer">src/types/pipe.ts:4</a></p>',7),s=[i];function c(l,n,d,p,u,h){return t(),a("div",null,s)}const y=e(o,[["render",c]]);export{_ as __pageData,y as default};
