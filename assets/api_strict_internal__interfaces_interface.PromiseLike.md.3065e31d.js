import{_ as e,o as t,c as a,O as r}from"./chunks/framework.ecf7cd05.js";const p=JSON.parse('{"title":"Interface: PromiseLike<T>","description":"","frontmatter":{},"headers":[],"relativePath":"api/strict/internal_/interfaces/interface.PromiseLike.md","filePath":"api/strict/internal_/interfaces/interface.PromiseLike.md"}'),o={name:"api/strict/internal_/interfaces/interface.PromiseLike.md"},l=r('<h1 id="interface-promiselike-t" tabindex="-1">Interface: PromiseLike<code>&lt;T&gt;</code> <a class="header-anchor" href="#interface-promiselike-t" aria-label="Permalink to &quot;Interface: PromiseLike`&lt;T&gt;`&quot;">​</a></h1><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="then" tabindex="-1">then() <a class="header-anchor" href="#then" aria-label="Permalink to &quot;then()&quot;">​</a></h3><blockquote><p><strong>then</strong>&lt;<code>TResult1</code>, <code>TResult2</code>&gt;(<code>onfulfilled</code>?, <code>onrejected</code>?): <a href="./interface.PromiseLike.html"><code>PromiseLike</code></a>&lt; <code>TResult1</code> | <code>TResult2</code> &gt;</p></blockquote><p>Attaches callbacks for the resolution and/or rejection of the Promise.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TResult1</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>TResult2</code></td><td style="text-align:left;"><code>never</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>onfulfilled</code>?</td><td style="text-align:left;"><code>null</code> | (<code>value</code>) =&gt; <code>TResult1</code> | <a href="./interface.PromiseLike.html"><code>PromiseLike</code></a>&lt; <code>TResult1</code> &gt;</td><td style="text-align:left;">The callback to execute when the Promise is resolved.</td></tr><tr><td style="text-align:left;"><code>onrejected</code>?</td><td style="text-align:left;"><code>null</code> | (<code>reason</code>) =&gt; <code>TResult2</code> | <a href="./interface.PromiseLike.html"><code>PromiseLike</code></a>&lt; <code>TResult2</code> &gt;</td><td style="text-align:left;">The callback to execute when the Promise is rejected.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./interface.PromiseLike.html"><code>PromiseLike</code></a>&lt; <code>TResult1</code> | <code>TResult2</code> &gt;</p><p>A Promise for the completion of which ever callback is executed.</p><h4 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/typescript@5.1.3/node_modules/typescript/lib/lib.es5.d.ts:1529</p>',16),d=[l];function c(i,s,n,h,m,f){return t(),a("div",null,d)}const b=e(o,[["render",c]]);export{p as __pageData,b as default};
