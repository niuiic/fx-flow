import{_ as e,o as t,c as a,O as o}from"./chunks/framework.571309da.js";const h=JSON.parse('{"title":"Type alias: Immutable<T, Ignore>","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/type-aliases/type-alias.Immutable.md","filePath":"api/types/type-aliases/type-alias.Immutable.md"}'),l={name:"api/types/type-aliases/type-alias.Immutable.md"},d=o('<h1 id="type-alias-immutable-t-ignore" tabindex="-1">Type alias: Immutable<code>&lt;T, Ignore&gt;</code> <a class="header-anchor" href="#type-alias-immutable-t-ignore" aria-label="Permalink to &quot;Type alias: Immutable`&lt;T, Ignore&gt;`&quot;">​</a></h1><blockquote><p><strong>Immutable</strong>: &lt;<code>T</code>, <code>Ignore</code>&gt; <code>T</code> <em>extends</em> <code>T</code> ? <code>T</code> <em>extends</em> <a href="./type-alias.Primitive.html"><code>Primitive</code></a> | <a href="./type-alias.AnyFunction.html"><code>AnyFunction</code></a> | <code>Ignore</code> ? <code>T</code> : <code>T</code> <em>extends</em> infer U[] ? <a href="./type-alias.IsTuple.html"><code>IsTuple</code></a>&lt; <code>T</code> &gt; <em>extends</em> <code>true</code> ? <a href="./../../flow/internal_/type-aliases/type-alias.ImmutableTuple.html"><code>ImmutableTuple</code></a>&lt; <code>T</code>, <code>Ignore</code> &gt; : <a href="./../../flow/internal_/type-aliases/type-alias.ImmutableArray.html"><code>ImmutableArray</code></a>&lt; <code>U</code>, <code>Ignore</code> &gt; : <code>T</code> <em>extends</em> <code>Map</code>&lt; infer K, infer V &gt; ? <a href="./../../flow/internal_/type-aliases/type-alias.ImmutableMap.html"><code>ImmutableMap</code></a>&lt; <code>K</code>, <code>V</code>, <code>Ignore</code> &gt; : <code>T</code> <em>extends</em> <code>Set</code>&lt; infer M &gt; ? <a href="./../../flow/internal_/type-aliases/type-alias.ImmutableSet.html"><code>ImmutableSet</code></a>&lt; <code>M</code>, <code>Ignore</code> &gt; : <a href="./../../flow/internal_/type-aliases/type-alias.ImmutableObject.html"><code>ImmutableObject</code></a>&lt; <code>T</code>, <code>Ignore</code> &gt; : <code>never</code></p></blockquote><p>Make types to readonly, work recursively</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>Ignore</code></td><td style="text-align:left;"><code>never</code></td></tr></tbody></table><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/types/immutable.ts#L15" target="_blank" rel="noreferrer">src/types/immutable.ts:15</a></p>',7),c=[d];function r(s,i,m,n,p,u){return t(),a("div",null,c)}const b=e(l,[["render",r]]);export{h as __pageData,b as default};
