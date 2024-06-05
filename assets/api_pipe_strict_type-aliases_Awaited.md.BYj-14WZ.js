import{_ as e,c as t,o as a,a3 as o}from"./chunks/framework.B_D3VkG0.js";const _=JSON.parse('{"title":"Type alias: Awaited&lt;T&gt;","description":"","frontmatter":{},"headers":[],"relativePath":"api/pipe/strict/type-aliases/Awaited.md","filePath":"api/pipe/strict/type-aliases/Awaited.md","lastUpdated":null}'),d={name:"api/pipe/strict/type-aliases/Awaited.md"},c=o('<p><a href="./../../../modules.html">fx-flow v0.7.0</a> / <a href="./../">pipe/strict</a> / Awaited</p><h1 id="type-alias-awaited-lt-t-gt" tabindex="-1">Type alias: Awaited&lt;T&gt; <a class="header-anchor" href="#type-alias-awaited-lt-t-gt" aria-label="Permalink to &quot;Type alias: Awaited&amp;lt;T&amp;gt;&quot;">​</a></h1><blockquote><p><strong>Awaited</strong>&lt;<code>T</code>&gt;: <code>T</code> <em>extends</em> <code>null</code> | <code>undefined</code> ? <code>T</code> : <code>T</code> <em>extends</em> <code>object</code> &amp; <code>object</code> ? <code>F</code> <em>extends</em> (<code>value</code>, ...<code>args</code>) =&gt; <code>any</code> ? <a href="./Awaited.html"><code>Awaited</code></a>&lt;<code>V</code>&gt; : <code>never</code> : <code>T</code></p></blockquote><p>Recursively unwraps the &quot;awaited type&quot; of a type. Non-promise &quot;thenables&quot; should resolve to <code>never</code>. This emulates the behavior of <code>await</code>.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>• <strong>T</strong></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p>node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1563</p>',8),s=[c];function i(r,p,l,n,m,h){return a(),t("div",null,s)}const T=e(d,[["render",i]]);export{_ as __pageData,T as default};