import{_ as e,c as t,o as a,a3 as r}from"./chunks/framework.B_D3VkG0.js";const h=JSON.parse('{"title":"Type alias: LastReturnValue&lt;T&gt;","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/strict/type-aliases/LastReturnValue.md","filePath":"api/pipe/strict/type-aliases/LastReturnValue.md","lastUpdated":null}'),o={name:"api/pipe/strict/type-aliases/LastReturnValue.md"},s=r('<p><a href="./../../../modules.html">fx-flow v0.7.0</a> / <a href="./../">pipe/strict</a> / LastReturnValue</p><h1 id="type-alias-lastreturnvalue-lt-t-gt" tabindex="-1">Type alias: LastReturnValue&lt;T&gt; <a class="header-anchor" href="#type-alias-lastreturnvalue-lt-t-gt" aria-label="Permalink to &quot;Type alias: LastReturnValue&amp;lt;T&amp;gt;&quot;">​</a></h1><blockquote><p><strong>LastReturnValue</strong>&lt;<code>T</code>&gt;: <code>T</code> <em>extends</em> readonly [<code>any</code>, infer Last] ? <code>Last</code> : <code>T</code> <em>extends</em> readonly <code>never</code>[] ? <code>undefined</code> : <code>T</code> <em>extends</em> <a href="./../interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;infer U&gt; ? <a href="./../../../types/type-aliases/FixedPromise.html"><code>FixedPromise</code></a>&lt;<code>U</code> | <code>undefined</code>&gt; : <code>T</code> <em>extends</em> <a href="./../interfaces/Iterable.html"><code>Iterable</code></a>&lt;infer U&gt; ? <code>U</code> | <code>undefined</code> : <code>never</code></p></blockquote><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>• <strong>T</strong></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/e26154efbd7f76d9bcefeae7bec1cceb69f9ef37/packages/core/src/pipe/strict/last.ts#L7" target="_blank" rel="noreferrer">packages/core/src/pipe/strict/last.ts:7</a></p>',7),c=[s];function d(l,n,i,p,u,f){return a(),t("div",null,c)}const _=e(o,[["render",d]]);export{h as __pageData,_ as default};