import{_ as e,c as a,o,a4 as t}from"./chunks/framework.CGUKru78.js";const _=JSON.parse('{"title":"Type alias: ExpandT, Ignore","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/type-aliases/Expand.md","filePath":"api/types/type-aliases/Expand.md","lastUpdated":null}'),d={name:"api/types/type-aliases/Expand.md"},c=t('<p><a href="./../../modules.html">fx-flow</a> / <a href="./../">types</a> / Expand</p><h1 id="type-alias-expandt-ignore" tabindex="-1">Type alias: Expand&lt;T, Ignore&gt; <a class="header-anchor" href="#type-alias-expandt-ignore" aria-label="Permalink to &quot;Type alias: Expand\\&lt;T, Ignore\\&gt;&quot;">​</a></h1><blockquote><p><strong>Expand</strong>&lt;<code>T</code>, <code>Ignore</code>&gt;: <code>T</code> extends <code>T</code> ? <code>T</code> extends <code>Ignore</code> ? <code>T</code> : <code>T</code> extends (...<code>args</code>) =&gt; <code>Promise</code>&lt;infer R&gt; ? (...<code>args</code>) =&gt; <code>Promise</code>&lt;<a href="./Expand.html"><code>Expand</code></a>&lt;<code>R</code>, <code>Ignore</code>&gt;&gt; : <code>T</code> extends (...<code>args</code>) =&gt; infer R ? (...<code>args</code>) =&gt; <a href="./Expand.html"><code>Expand</code></a>&lt;<code>R</code>, <code>Ignore</code>&gt; : <code>T</code> extends <code>object</code> ? <code>{ [K in keyof T]: Expand&lt;T[K], Ignore&gt; }</code> : <code>T</code> : <code>never</code></p></blockquote><p>Expand nested type deeply</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><p>• <strong>T</strong></p><p>• <strong>Ignore</strong> = <code>never</code></p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/niuiic/fx-flow/blob/fbceb745a53f3aa7c9d0ca36c47c247cc9c6fd0e/packages/core/src/types/basic.ts#L22" target="_blank" rel="noreferrer">packages/core/src/types/basic.ts:22</a></p>',9),r=[c];function s(n,p,l,i,g,h){return o(),a("div",null,r)}const f=e(d,[["render",s]]);export{_ as __pageData,f as default};
