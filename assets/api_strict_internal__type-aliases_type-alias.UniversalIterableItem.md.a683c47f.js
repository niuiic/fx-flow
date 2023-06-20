import{_ as e,o as t,c as a,O as r}from"./chunks/framework.ecf7cd05.js";const f=JSON.parse('{"title":"Type alias: UniversalIterableItem<T>","description":"","frontmatter":{},"headers":[],"relativePath":"api/strict/internal_/type-aliases/type-alias.UniversalIterableItem.md","filePath":"api/strict/internal_/type-aliases/type-alias.UniversalIterableItem.md"}'),l={name:"api/strict/internal_/type-aliases/type-alias.UniversalIterableItem.md"},s=r('<h1 id="type-alias-universaliterableitem-t" tabindex="-1">Type alias: UniversalIterableItem<code>&lt;T&gt;</code> <a class="header-anchor" href="#type-alias-universaliterableitem-t" aria-label="Permalink to &quot;Type alias: UniversalIterableItem`&lt;T&gt;`&quot;">​</a></h1><blockquote><p><strong>UniversalIterableItem</strong>: &lt;<code>T</code>&gt; <code>T</code> <em>extends</em> <a href="./../interfaces/interface.Iterable.html"><code>Iterable</code></a>&lt; infer U &gt; ? <code>U</code> : <code>T</code> <em>extends</em> <a href="./../interfaces/interface.AsyncIterable.html"><code>AsyncIterable</code></a>&lt; infer U &gt; ? <a href="./type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>U</code> &gt; : <code>never</code></p></blockquote><p>Item of Iterable or AsyncIterable</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code> <em>extends</em> <a href="./../interfaces/interface.Iterable.html"><code>Iterable</code></a>&lt; <code>unknown</code> &gt; | <a href="./../interfaces/interface.AsyncIterable.html"><code>AsyncIterable</code></a>&lt; <code>unknown</code> &gt;</td></tr></tbody></table><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/a95b5a4/src/types/iterable.ts#L4" target="_blank" rel="noreferrer">src/types/iterable.ts:4</a></p>',7),o=[s];function c(i,n,d,p,m,b){return t(),a("div",null,o)}const _=e(l,[["render",c]]);export{f as __pageData,_ as default};
