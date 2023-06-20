import{_ as e,o as t,c as a,O as r}from"./chunks/framework.ecf7cd05.js";const f=JSON.parse('{"title":"Interface: AsyncIterableIterator<T>","description":"","frontmatter":{},"headers":[],"relativePath":"api/strict/internal_/interfaces/interface.AsyncIterableIterator.md","filePath":"api/strict/internal_/interfaces/interface.AsyncIterableIterator.md"}'),o={name:"api/strict/internal_/interfaces/interface.AsyncIterableIterator.md"},l=r('<h1 id="interface-asynciterableiterator-t" tabindex="-1">Interface: AsyncIterableIterator<code>&lt;T&gt;</code> <a class="header-anchor" href="#interface-asynciterableiterator-t" aria-label="Permalink to &quot;Interface: AsyncIterableIterator`&lt;T&gt;`&quot;">​</a></h1><h2 id="extends" tabindex="-1">Extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h2><ul><li><a href="./interface.AsyncIterator.html"><code>AsyncIterator</code></a>&lt; <code>T</code> &gt;</li></ul><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="asynciterator" tabindex="-1"><a href="./.html">asyncIterator</a> <a class="header-anchor" href="#asynciterator" aria-label="Permalink to &quot;[asyncIterator]()&quot;">​</a></h3><blockquote><p><strong>[asyncIterator]</strong>(): <a href="./interface.AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt; <code>T</code> &gt;</p></blockquote><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./interface.AsyncIterableIterator.html"><code>AsyncIterableIterator</code></a>&lt; <code>T</code> &gt;</p><h4 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/typescript@5.1.3/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:42</p><hr><h3 id="next" tabindex="-1">next() <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next()&quot;">​</a></h3><blockquote><p><strong>next</strong>(...<code>args</code>): <code>Promise</code>&lt; <a href="./../type-aliases/type-alias.IteratorResult.html"><code>IteratorResult</code></a>&lt; <code>T</code>, <code>any</code> &gt; &gt;</p></blockquote><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;">...<code>args</code></td><td style="text-align:left;">[] | [<code>undefined</code>]</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt; <a href="./../type-aliases/type-alias.IteratorResult.html"><code>IteratorResult</code></a>&lt; <code>T</code>, <code>any</code> &gt; &gt;</p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./interface.AsyncIterator.html"><code>AsyncIterator</code></a>.<a href="./interface.AsyncIterator.html#next"><code>next</code></a></p><h4 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/typescript@5.1.3/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:32</p><hr><h3 id="return" tabindex="-1">return() <a class="header-anchor" href="#return" aria-label="Permalink to &quot;return()&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>return</strong>(<code>value</code>?): <code>Promise</code>&lt; <a href="./../type-aliases/type-alias.IteratorResult.html"><code>IteratorResult</code></a>&lt; <code>T</code>, <code>any</code> &gt; &gt;</p></blockquote><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code>?</td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt; <a href="./../type-aliases/type-alias.IteratorResult.html"><code>IteratorResult</code></a>&lt; <code>T</code>, <code>any</code> &gt; &gt;</p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./interface.AsyncIterator.html"><code>AsyncIterator</code></a>.<a href="./interface.AsyncIterator.html#return"><code>return</code></a></p><h4 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/typescript@5.1.3/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:33</p><hr><h3 id="throw" tabindex="-1">throw() <a class="header-anchor" href="#throw" aria-label="Permalink to &quot;throw()&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>throw</strong>(<code>e</code>?): <code>Promise</code>&lt; <a href="./../type-aliases/type-alias.IteratorResult.html"><code>IteratorResult</code></a>&lt; <code>T</code>, <code>any</code> &gt; &gt;</p></blockquote><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>e</code>?</td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt; <a href="./../type-aliases/type-alias.IteratorResult.html"><code>IteratorResult</code></a>&lt; <code>T</code>, <code>any</code> &gt; &gt;</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./interface.AsyncIterator.html"><code>AsyncIterator</code></a>.<a href="./interface.AsyncIterator.html#throw"><code>throw</code></a></p><h4 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/typescript@5.1.3/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:34</p>',45),c=[l];function d(n,s,i,h,u,m){return t(),a("div",null,c)}const b=e(o,[["render",d]]);export{f as __pageData,b as default};
