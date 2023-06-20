import{_ as e,o as t,c as a,O as o}from"./chunks/framework.ecf7cd05.js";const u=JSON.parse('{"title":"Type alias: Awaited<T>","description":"","frontmatter":{},"headers":[],"relativePath":"api/strict/internal_/type-aliases/type-alias.Awaited.md","filePath":"api/strict/internal_/type-aliases/type-alias.Awaited.md"}'),d={name:"api/strict/internal_/type-aliases/type-alias.Awaited.md"},c=o('<h1 id="type-alias-awaited-t" tabindex="-1">Type alias: Awaited<code>&lt;T&gt;</code> <a class="header-anchor" href="#type-alias-awaited-t" aria-label="Permalink to &quot;Type alias: Awaited`&lt;T&gt;`&quot;">​</a></h1><blockquote><p><strong>Awaited</strong>: &lt;<code>T</code>&gt; <code>T</code> <em>extends</em> <code>null</code> | <code>undefined</code> ? <code>T</code> : <code>T</code> <em>extends</em> <code>object</code> &amp; {<code>then</code>: ;} ? <code>F</code> <em>extends</em> (<code>value</code>, ...<code>args</code>) =&gt; <code>any</code> ? <a href="./type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>V</code> &gt; : <code>never</code> : <code>T</code></p></blockquote><p>Recursively unwraps the &quot;awaited type&quot; of a type. Non-promise &quot;thenables&quot; should resolve to <code>never</code>. This emulates the behavior of <code>await</code>.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p>node_modules/.pnpm/typescript@5.1.3/node_modules/typescript/lib/lib.es5.d.ts:1555</p>',7),s=[c];function i(r,l,n,p,h,_){return t(),a("div",null,s)}const y=e(d,[["render",i]]);export{u as __pageData,y as default};
