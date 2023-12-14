import{_ as e,o as a,c as t,R as r}from"./chunks/framework.YqPgmvU8.js";const f=JSON.parse('{"title":"Type alias: UniversalIterableItem<T>","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/type-aliases/UniversalIterableItem.md","filePath":"api/types/type-aliases/UniversalIterableItem.md","lastUpdated":null}'),l={name:"api/types/type-aliases/UniversalIterableItem.md"},s=r('<p><a href="./../../modules.html">fx-flow</a> / <a href="./../">types</a> / UniversalIterableItem</p><h1 id="type-alias-universaliterableitem-t" tabindex="-1">Type alias: UniversalIterableItem&lt;T&gt; <a class="header-anchor" href="#type-alias-universaliterableitem-t" aria-label="Permalink to &quot;Type alias: UniversalIterableItem\\&lt;T\\&gt;&quot;">​</a></h1><blockquote><p><strong>UniversalIterableItem</strong>&lt;<code>T</code>&gt;: <code>T</code> extends <a href="./../-internal-/interfaces/Iterable.html"><code>Iterable</code></a>&lt;infer U&gt; ? <code>U</code> : <code>T</code> extends <a href="./../-internal-/interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;infer U&gt; ? <a href="./../-internal-/type-aliases/Awaited.html"><code>Awaited</code></a>&lt;<code>U</code>&gt; : <code>never</code></p></blockquote><p>Item of Iterable or AsyncIterable</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>• <strong>T</strong> extends <a href="./../-internal-/interfaces/Iterable.html"><code>Iterable</code></a>&lt;<code>unknown</code>&gt; | <a href="./../-internal-/interfaces/AsyncIterable.html"><code>AsyncIterable</code></a>&lt;<code>unknown</code>&gt;</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/28ef58d/packages/core/src/types/iterable.ts#L4" target="_blank" rel="noreferrer">packages/core/src/types/iterable.ts:4</a></p>',8),o=[s];function n(c,i,d,p,h,m){return a(),t("div",null,o)}const I=e(l,[["render",n]]);export{f as __pageData,I as default};
