import{_ as e,o as t,c as a,X as o}from"./chunks/framework.6e839c56.js";const u=JSON.parse('{"title":"Type alias: Immutable<T, Ignore>","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/type-aliases/type-alias.Immutable.md","filePath":"api/types/type-aliases/type-alias.Immutable.md","lastUpdated":null}'),l={name:"api/types/type-aliases/type-alias.Immutable.md"},d=o('<h1 id="type-alias-immutable-t-ignore" tabindex="-1">Type alias: Immutable<code>&lt;T, Ignore&gt;</code> <a class="header-anchor" href="#type-alias-immutable-t-ignore" aria-label="Permalink to &quot;Type alias: Immutable`&lt;T, Ignore&gt;`&quot;">​</a></h1><blockquote><p><strong>Immutable</strong>: &lt;<code>T</code>, <code>Ignore</code>&gt; <code>T</code> <em>extends</em> <code>T</code> ? <code>T</code> <em>extends</em> <a href="./type-alias.Primitive.html"><code>Primitive</code></a> | <a href="./type-alias.AnyFunction.html"><code>AnyFunction</code></a> | <code>Ignore</code> ? <code>T</code> : <code>T</code> <em>extends</em> infer U[] ? <a href="./type-alias.IsTuple.html"><code>IsTuple</code></a>&lt; <code>T</code> &gt; <em>extends</em> <code>true</code> ? <a href="./../internal_/type-aliases/type-alias.ImmutableTuple.html"><code>ImmutableTuple</code></a>&lt; <code>T</code>, <code>Ignore</code> &gt; : <a href="./../internal_/type-aliases/type-alias.ImmutableArray.html"><code>ImmutableArray</code></a>&lt; <code>U</code>, <code>Ignore</code> &gt; : <code>T</code> <em>extends</em> <code>Map</code>&lt; infer K, infer V &gt; ? <a href="./../internal_/type-aliases/type-alias.ImmutableMap.html"><code>ImmutableMap</code></a>&lt; <code>K</code>, <code>V</code>, <code>Ignore</code> &gt; : <code>T</code> <em>extends</em> <code>Set</code>&lt; infer M &gt; ? <a href="./../internal_/type-aliases/type-alias.ImmutableSet.html"><code>ImmutableSet</code></a>&lt; <code>M</code>, <code>Ignore</code> &gt; : <a href="./../internal_/type-aliases/type-alias.ImmutableObject.html"><code>ImmutableObject</code></a>&lt; <code>T</code>, <code>Ignore</code> &gt; : <code>never</code></p></blockquote><p>Make types to readonly, work recursively</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>Ignore</code></td><td style="text-align:left;"><code>never</code></td></tr></tbody></table><h2 id="defined-in" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined In&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/types/immutable.ts#L15" target="_blank" rel="noreferrer">src/types/immutable.ts:15</a></p><hr><p>Generated using <a href="https://typedoc.org/" target="_blank" rel="noreferrer">TypeDoc</a> and <a href="https://www.npmjs.com/package/typedoc-plugin-markdown" target="_blank" rel="noreferrer">typedoc-plugin-markdown</a></p>',9),r=[d];function c(n,s,i,m,p,y){return t(),a("div",null,r)}const b=e(l,[["render",c]]);export{u as __pageData,b as default};