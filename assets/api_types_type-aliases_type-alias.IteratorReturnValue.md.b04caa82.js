import{_ as e,o as t,c as a,X as r}from"./chunks/framework.6e839c56.js";const u=JSON.parse('{"title":"Type alias: IteratorReturnValue<T, R>","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/type-aliases/type-alias.IteratorReturnValue.md","filePath":"api/types/type-aliases/type-alias.IteratorReturnValue.md","lastUpdated":null}'),l={name:"api/types/type-aliases/type-alias.IteratorReturnValue.md"},o=r('<h1 id="type-alias-iteratorreturnvalue-t-r" tabindex="-1">Type alias: IteratorReturnValue<code>&lt;T, R&gt;</code> <a class="header-anchor" href="#type-alias-iteratorreturnvalue-t-r" aria-label="Permalink to &quot;Type alias: IteratorReturnValue`&lt;T, R&gt;`&quot;">​</a></h1><blockquote><p><strong>IteratorReturnValue</strong>: &lt;<code>T</code>, <code>R</code>&gt; <code>T</code> <em>extends</em> <a href="./../internal_/interfaces/interface.Iterable.html"><code>Iterable</code></a>&lt; <code>unknown</code> &gt; ? <a href="./../internal_/interfaces/interface.IterableIterator.html"><code>IterableIterator</code></a>&lt; <code>R</code> &gt; : <code>T</code> <em>extends</em> <a href="./../internal_/interfaces/interface.AsyncIterable.html"><code>AsyncIterable</code></a>&lt; <code>unknown</code> &gt; ? <a href="./../internal_/interfaces/interface.AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt; <a href="./../internal_/type-aliases/type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>R</code> &gt; &gt; : <code>never</code></p></blockquote><p>T is async(AsyncIterable) ? AsyncIterableIterator&lt;Awaited<code>&lt;R&gt;</code> &gt; : IterableIterator&lt;R&gt;</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code> <em>extends</em> <a href="./type-alias.UniversalIterable.html"><code>UniversalIterable</code></a></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>R</code></td><td style="text-align:left;"><a href="./type-alias.UniversalIterableItem.html"><code>UniversalIterableItem</code></a>&lt; <code>T</code> &gt;</td></tr></tbody></table><h2 id="defined-in" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/types/iterable.ts#L32" target="_blank" rel="noreferrer">src/types/iterable.ts:32</a></p><hr><p>Generated using <a href="https://typedoc.org/" target="_blank" rel="noreferrer">TypeDoc</a> and <a href="https://www.npmjs.com/package/typedoc-plugin-markdown" target="_blank" rel="noreferrer">typedoc-plugin-markdown</a></p>',9),n=[o];function d(c,s,i,p,h,f){return t(),a("div",null,n)}const m=e(l,[["render",d]]);export{u as __pageData,m as default};