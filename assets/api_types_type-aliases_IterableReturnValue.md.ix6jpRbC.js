import{_ as e,c as a,o as t,a4 as r}from"./chunks/framework.CGUKru78.js";const f=JSON.parse('{"title":"Type alias: IterableReturnValueT, R","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/type-aliases/IterableReturnValue.md","filePath":"api/types/type-aliases/IterableReturnValue.md","lastUpdated":null}'),l={name:"api/types/type-aliases/IterableReturnValue.md"},o=r('<p><a href="./../../modules.html">fx-flow</a> / <a href="./../">types</a> / IterableReturnValue</p><h1 id="type-alias-iterablereturnvaluet-r" tabindex="-1">Type alias: IterableReturnValue&lt;T, R&gt; <a class="header-anchor" href="#type-alias-iterablereturnvaluet-r" aria-label="Permalink to &quot;Type alias: IterableReturnValue\\&lt;T, R\\&gt;&quot;">​</a></h1><blockquote><p><strong>IterableReturnValue</strong>&lt;<code>T</code>, <code>R</code>&gt;: <code>T</code> extends <a href="./../../pipe/strict/-internal-/interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;<code>unknown</code>&gt; ? <a href="./FixedPromise.html"><code>FixedPromise</code></a>&lt;<code>R</code>&gt; : <code>T</code> extends <a href="./../../pipe/strict/-internal-/interfaces/Iterable.html"><code>Iterable</code></a>&lt;<code>unknown</code>&gt; ? <code>R</code> : <code>never</code></p></blockquote><p>T is AsyncIterable ? FixedPromise&lt;R&gt; : R</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>• <strong>T</strong> extends <a href="./UniversalIterable.html"><code>UniversalIterable</code></a></p><p>• <strong>R</strong> = <a href="./UniversalIterableItem.html"><code>UniversalIterableItem</code></a>&lt;<code>T</code>&gt;</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/fbceb745a53f3aa7c9d0ca36c47c247cc9c6fd0e/packages/core/src/types/iterable.ts#L14" target="_blank" rel="noreferrer">packages/core/src/types/iterable.ts:14</a></p>',9),c=[o];function s(n,d,i,p,u,h){return t(),a("div",null,c)}const m=e(l,[["render",s]]);export{f as __pageData,m as default};
