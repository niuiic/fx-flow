import{_ as e,o as t,c as a,X as r}from"./chunks/framework.6e839c56.js";const b=JSON.parse('{"title":"Class: Result<T>","description":"","frontmatter":{},"headers":[],"relativePath":"api/flow/classes/class.Result.md","filePath":"api/flow/classes/class.Result.md","lastUpdated":null}'),o={name:"api/flow/classes/class.Result.md"},l=r('<h1 id="class-result-t" tabindex="-1">Class: Result<code>&lt;T&gt;</code> <a class="header-anchor" href="#class-result-t" aria-label="Permalink to &quot;Class: Result`&lt;T&gt;`&quot;">​</a></h1><p>To describe a result of program.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Result</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unwrapOr</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 1</span></span>\n<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Result</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">err</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unwrapOr</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 2</span></span></code></pre></div><p><a href="https://github.com/niuiic/flow/blob/main/tests/flow/result.spec.ts" target="_blank" rel="noreferrer">More examples</a></p><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="new-result" tabindex="-1">new Result <a class="header-anchor" href="#new-result" aria-label="Permalink to &quot;new Result&quot;">​</a></h3><blockquote><p><strong>new Result</strong>&lt;<code>T</code>&gt;(<code>args</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p></blockquote><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;">{<code>err</code>: <code>string</code>;} | {<code>data</code>: <code>T</code>;}</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p><h4 id="defined-in" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L19" target="_blank" rel="noreferrer">src/flow/result.ts:19</a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="data" tabindex="-1">data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;data&quot;">​</a></h3><blockquote><p><code>private</code> <strong>data</strong>: <code>undefined</code> | <code>T</code></p></blockquote><h4 id="defined-in-1" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L17" target="_blank" rel="noreferrer">src/flow/result.ts:17</a></p><hr><h3 id="err" tabindex="-1">err <a class="header-anchor" href="#err" aria-label="Permalink to &quot;err&quot;">​</a></h3><blockquote><p><code>private</code> <strong>err</strong>: <code>undefined</code> | <code>string</code></p></blockquote><h4 id="defined-in-2" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L16" target="_blank" rel="noreferrer">src/flow/result.ts:16</a></p><hr><h3 id="success" tabindex="-1">success <a class="header-anchor" href="#success" aria-label="Permalink to &quot;success&quot;">​</a></h3><blockquote><p><code>private</code> <strong>success</strong>: <code>boolean</code></p></blockquote><h4 id="defined-in-3" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L15" target="_blank" rel="noreferrer">src/flow/result.ts:15</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="error" tabindex="-1">error <a class="header-anchor" href="#error" aria-label="Permalink to &quot;error&quot;">​</a></h3><blockquote><p><strong>error</strong>(): <code>undefined</code> | <code>string</code></p></blockquote><p>Return error message if result is failure</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <code>string</code></p><h4 id="defined-in-4" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L56" target="_blank" rel="noreferrer">src/flow/result.ts:56</a></p><hr><h3 id="iserror" tabindex="-1">isError <a class="header-anchor" href="#iserror" aria-label="Permalink to &quot;isError&quot;">​</a></h3><blockquote><p><strong>isError</strong>(): <code>boolean</code></p></blockquote><p>Check if result is failure</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-5" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L118" target="_blank" rel="noreferrer">src/flow/result.ts:118</a></p><hr><h3 id="ispromise" tabindex="-1">isPromise <a class="header-anchor" href="#ispromise" aria-label="Permalink to &quot;isPromise&quot;">​</a></h3><blockquote><p><strong>isPromise</strong>(): <code>boolean</code></p></blockquote><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-6" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L123" target="_blank" rel="noreferrer">src/flow/result.ts:123</a></p><hr><h3 id="issuccess" tabindex="-1">isSuccess <a class="header-anchor" href="#issuccess" aria-label="Permalink to &quot;isSuccess&quot;">​</a></h3><blockquote><p><strong>isSuccess</strong>(): <code>boolean</code></p></blockquote><p>Check if result is success</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-7" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L113" target="_blank" rel="noreferrer">src/flow/result.ts:113</a></p><hr><h3 id="map" tabindex="-1">map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;map&quot;">​</a></h3><blockquote><p><strong>map</strong>&lt;<code>R</code>&gt;(<code>fn</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p></blockquote><p>Return a result whose data is the result of <code>fn</code>, if result is success</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>data</code>) =&gt; <code>R</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p><h4 id="defined-in-8" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L63" target="_blank" rel="noreferrer">src/flow/result.ts:63</a></p><hr><h3 id="maperr" tabindex="-1">mapErr <a class="header-anchor" href="#maperr" aria-label="Permalink to &quot;mapErr&quot;">​</a></h3><blockquote><p><strong>mapErr</strong>(<code>err</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p></blockquote><p>Return a result with the same data of the original one if result is success or return a result with <code>err</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>err</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p><h4 id="defined-in-9" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L87" target="_blank" rel="noreferrer">src/flow/result.ts:87</a></p><hr><h3 id="mapor" tabindex="-1">mapOr <a class="header-anchor" href="#mapor" aria-label="Permalink to &quot;mapOr&quot;">​</a></h3><blockquote><p><strong>mapOr</strong>&lt;<code>R</code>&gt;(<code>fn</code>, <code>data</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p></blockquote><p>Return a result whose data is the result of <code>fn</code>, if result is success, or <code>data</code></p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>data</code>) =&gt; <code>R</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p><h4 id="defined-in-10" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L71" target="_blank" rel="noreferrer">src/flow/result.ts:71</a></p><hr><h3 id="maporelse" tabindex="-1">mapOrElse <a class="header-anchor" href="#maporelse" aria-label="Permalink to &quot;mapOrElse&quot;">​</a></h3><blockquote><p><strong>mapOrElse</strong>&lt;<code>R</code>&gt;(<code>fn</code>, <code>fn2</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p></blockquote><p>Return a result whose data is the result of <code>fn</code>, if result is success, or the result of <code>fn2</code></p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>data</code>) =&gt; <code>R</code></td></tr><tr><td style="text-align:left;"><code>fn2</code></td><td style="text-align:left;">(<code>err</code>) =&gt; <code>R</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p><h4 id="defined-in-11" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L79" target="_blank" rel="noreferrer">src/flow/result.ts:79</a></p><hr><h3 id="unwrap" tabindex="-1">unwrap <a class="header-anchor" href="#unwrap" aria-label="Permalink to &quot;unwrap&quot;">​</a></h3><blockquote><p><strong>unwrap</strong>(): <code>T</code></p></blockquote><p>Return data of result if result is success, or throw an error</p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="defined-in-12" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L32" target="_blank" rel="noreferrer">src/flow/result.ts:32</a></p><hr><h3 id="unwrapor" tabindex="-1">unwrapOr <a class="header-anchor" href="#unwrapor" aria-label="Permalink to &quot;unwrapOr&quot;">​</a></h3><blockquote><p><strong>unwrapOr</strong>(<code>data</code>): <code>T</code></p></blockquote><p>Return data of result if result is success, or return <code>data</code></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="defined-in-13" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L40" target="_blank" rel="noreferrer">src/flow/result.ts:40</a></p><hr><h3 id="unwraporelse" tabindex="-1">unwrapOrElse <a class="header-anchor" href="#unwraporelse" aria-label="Permalink to &quot;unwrapOrElse&quot;">​</a></h3><blockquote><p><strong>unwrapOrElse</strong>(<code>fn</code>): <code>T</code></p></blockquote><p>Return data of result if result is success, or return the result of <code>fn</code></p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>err</code>) =&gt; <code>T</code></td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="defined-in-14" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L48" target="_blank" rel="noreferrer">src/flow/result.ts:48</a></p><hr><h3 id="wait" tabindex="-1">wait <a class="header-anchor" href="#wait" aria-label="Permalink to &quot;wait&quot;">​</a></h3><blockquote><p><strong>wait</strong>(): <code>Promise</code>&lt; <a href="./class.Result.html"><code>Result</code></a>&lt; <a href="./../../types/internal_/type-aliases/type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>T</code> &gt; &gt; &gt;</p></blockquote><p>Wait for <code>data</code></p><ul><li>Result&lt;Promise<code>&lt;T&gt;</code> &gt; -&gt; Promise&lt;Result<code>&lt;T&gt;</code> &gt;</li><li>Result&lt;T&gt; -&gt; Promise&lt;Result<code>&lt;T&gt;</code> &gt;</li></ul><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt; <a href="./class.Result.html"><code>Result</code></a>&lt; <a href="./../../types/internal_/type-aliases/type-alias.Awaited.html"><code>Awaited</code></a>&lt; <code>T</code> &gt; &gt; &gt;</p><h4 id="defined-in-15" tabindex="-1">Defined In <a class="header-anchor" href="#defined-in-15" aria-label="Permalink to &quot;Defined In&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/b5ed549/src/flow/result.ts#L100" target="_blank" rel="noreferrer">src/flow/result.ts:100</a></p><hr><p>Generated using <a href="https://typedoc.org/" target="_blank" rel="noreferrer">TypeDoc</a> and <a href="https://www.npmjs.com/package/typedoc-plugin-markdown" target="_blank" rel="noreferrer">typedoc-plugin-markdown</a></p>',147),s=[l];function n(d,c,i,h,u,p){return t(),a("div",null,s)}const m=e(o,[["render",n]]);export{b as __pageData,m as default};