import{_ as e,o as t,c as a,O as r}from"./chunks/framework.571309da.js";const p=JSON.parse('{"title":"Class: Result<T>","description":"","frontmatter":{},"headers":[],"relativePath":"api/flow/classes/class.Result.md","filePath":"api/flow/classes/class.Result.md"}'),o={name:"api/flow/classes/class.Result.md"},l=r('<h1 id="class-result-t" tabindex="-1">Class: Result<code>&lt;T&gt;</code> <a class="header-anchor" href="#class-result-t" aria-label="Permalink to &quot;Class: Result`&lt;T&gt;`&quot;">​</a></h1><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor() <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor()&quot;">​</a></h3><blockquote><p><strong>new Result</strong>&lt;<code>T</code>&gt;(<code>args</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p></blockquote><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;">{<code>err</code>: <code>string</code>;} | {<code>data</code>: <code>T</code>;}</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p><h4 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L9" target="_blank" rel="noreferrer">src/flow/result.ts:9</a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="data" tabindex="-1">data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;data&quot;">​</a></h3><blockquote><p><code>private</code> <strong>data</strong>: <code>undefined</code> | <code>T</code></p></blockquote><h4 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L7" target="_blank" rel="noreferrer">src/flow/result.ts:7</a></p><hr><h3 id="err" tabindex="-1">err <a class="header-anchor" href="#err" aria-label="Permalink to &quot;err&quot;">​</a></h3><blockquote><p><code>private</code> <strong>err</strong>: <code>undefined</code> | <code>string</code></p></blockquote><h4 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L6" target="_blank" rel="noreferrer">src/flow/result.ts:6</a></p><hr><h3 id="success" tabindex="-1">success <a class="header-anchor" href="#success" aria-label="Permalink to &quot;success&quot;">​</a></h3><blockquote><p><code>private</code> <strong>success</strong>: <code>boolean</code></p></blockquote><h4 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L5" target="_blank" rel="noreferrer">src/flow/result.ts:5</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="andthen" tabindex="-1">andThen() <a class="header-anchor" href="#andthen" aria-label="Permalink to &quot;andThen()&quot;">​</a></h3><blockquote><p><strong>andThen</strong>&lt;<code>R</code>&gt;(<code>fn</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p></blockquote><p>Call <code>fn</code> if result is success</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>data</code>) =&gt; <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p><h4 id="source-4" tabindex="-1">Source <a class="header-anchor" href="#source-4" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L66" target="_blank" rel="noreferrer">src/flow/result.ts:66</a></p><hr><h3 id="andthenasync" tabindex="-1">andThenAsync() <a class="header-anchor" href="#andthenasync" aria-label="Permalink to &quot;andThenAsync()&quot;">​</a></h3><blockquote><p><strong>andThenAsync</strong>&lt;<code>R</code>&gt;(<code>fn</code>): <a href="./../../types/type-aliases/type-alias.FixedPromise.html"><code>FixedPromise</code></a>&lt; <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt; &gt;</p></blockquote><p>Call async function <code>fn</code> if result is success</p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>data</code>) =&gt; <a href="./../../types/type-aliases/type-alias.FixedPromise.html"><code>FixedPromise</code></a>&lt; <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt; &gt;</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../types/type-aliases/type-alias.FixedPromise.html"><code>FixedPromise</code></a>&lt; <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt; &gt;</p><h4 id="source-5" tabindex="-1">Source <a class="header-anchor" href="#source-5" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L78" target="_blank" rel="noreferrer">src/flow/result.ts:78</a></p><hr><h3 id="anyway" tabindex="-1">anyway() <a class="header-anchor" href="#anyway" aria-label="Permalink to &quot;anyway()&quot;">​</a></h3><blockquote><p><strong>anyway</strong>&lt;<code>R</code>&gt;(<code>fn</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p></blockquote><p>Call <code>fn</code> anyway</p><h4 id="type-parameters-4" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-4" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>args</code>) =&gt; <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p><h4 id="source-6" tabindex="-1">Source <a class="header-anchor" href="#source-6" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L113" target="_blank" rel="noreferrer">src/flow/result.ts:113</a></p><hr><h3 id="anywayasync" tabindex="-1">anywayAsync() <a class="header-anchor" href="#anywayasync" aria-label="Permalink to &quot;anywayAsync()&quot;">​</a></h3><blockquote><p><strong>anywayAsync</strong>&lt;<code>R</code>&gt;(<code>fn</code>): <code>Promise</code>&lt; <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt; &gt;</p></blockquote><p>Call async function <code>fn</code> anyway</p><h4 id="type-parameters-5" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-5" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>args</code>) =&gt; <code>Promise</code>&lt; <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt; &gt;</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt; <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt; &gt;</p><h4 id="source-7" tabindex="-1">Source <a class="header-anchor" href="#source-7" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L133" target="_blank" rel="noreferrer">src/flow/result.ts:133</a></p><hr><h3 id="errthen" tabindex="-1">errThen() <a class="header-anchor" href="#errthen" aria-label="Permalink to &quot;errThen()&quot;">​</a></h3><blockquote><p><strong>errThen</strong>(<code>fn</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>unknown</code> &gt;</p></blockquote><p>Call <code>fn</code> if result is failure</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>err</code>) =&gt; <code>unknown</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>unknown</code> &gt;</p><h4 id="source-8" tabindex="-1">Source <a class="header-anchor" href="#source-8" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L90" target="_blank" rel="noreferrer">src/flow/result.ts:90</a></p><hr><h3 id="errthenasync" tabindex="-1">errThenAsync() <a class="header-anchor" href="#errthenasync" aria-label="Permalink to &quot;errThenAsync()&quot;">​</a></h3><blockquote><p><strong>errThenAsync</strong>(<code>fn</code>): <code>Promise</code>&lt; <a href="./class.Result.html"><code>Result</code></a>&lt; <code>unknown</code> &gt; &gt;</p></blockquote><p>Call async function <code>fn</code> if result is failure</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>err</code>) =&gt; <code>Promise</code>&lt; <code>unknown</code> &gt;</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt; <a href="./class.Result.html"><code>Result</code></a>&lt; <code>unknown</code> &gt; &gt;</p><h4 id="source-9" tabindex="-1">Source <a class="header-anchor" href="#source-9" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L103" target="_blank" rel="noreferrer">src/flow/result.ts:103</a></p><hr><h3 id="error" tabindex="-1">error() <a class="header-anchor" href="#error" aria-label="Permalink to &quot;error()&quot;">​</a></h3><blockquote><p><strong>error</strong>(): <code>undefined</code> | <code>string</code></p></blockquote><p>Return error message if result is failure</p><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <code>string</code></p><h4 id="source-10" tabindex="-1">Source <a class="header-anchor" href="#source-10" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L45" target="_blank" rel="noreferrer">src/flow/result.ts:45</a></p><hr><h3 id="expect" tabindex="-1">expect() <a class="header-anchor" href="#expect" aria-label="Permalink to &quot;expect()&quot;">​</a></h3><blockquote><p><strong>expect</strong>(<code>err</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p></blockquote><p>Throw error with <code>err</code> if result is failure</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>err</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p><h4 id="source-11" tabindex="-1">Source <a class="header-anchor" href="#source-11" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L218" target="_blank" rel="noreferrer">src/flow/result.ts:218</a></p><hr><h3 id="ifthen" tabindex="-1">ifThen() <a class="header-anchor" href="#ifthen" aria-label="Permalink to &quot;ifThen()&quot;">​</a></h3><blockquote><p><strong>ifThen</strong>(<code>condition</code>, <code>fn</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p></blockquote><p>Call <code>fn</code> if result is success and <code>condition</code> is satisfied</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>condition</code></td><td style="text-align:left;">(<code>data</code>) =&gt; <code>boolean</code></td></tr><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>data</code>) =&gt; <code>unknown</code></td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p><h4 id="source-12" tabindex="-1">Source <a class="header-anchor" href="#source-12" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L155" target="_blank" rel="noreferrer">src/flow/result.ts:155</a></p><hr><h3 id="ifthenasync" tabindex="-1">ifThenAsync() <a class="header-anchor" href="#ifthenasync" aria-label="Permalink to &quot;ifThenAsync()&quot;">​</a></h3><blockquote><p><strong>ifThenAsync</strong>(<code>condition</code>, <code>fn</code>): <code>Promise</code>&lt; <a href="./class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt; &gt;</p></blockquote><p>Call async function <code>fn</code> if result is success and <code>condition</code> is satisfied</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>condition</code></td><td style="text-align:left;">(<code>data</code>) =&gt; <code>boolean</code></td></tr><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>data</code>) =&gt; <code>unknown</code></td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt; <a href="./class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt; &gt;</p><h4 id="source-13" tabindex="-1">Source <a class="header-anchor" href="#source-13" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L171" target="_blank" rel="noreferrer">src/flow/result.ts:171</a></p><hr><h3 id="inspect" tabindex="-1">inspect() <a class="header-anchor" href="#inspect" aria-label="Permalink to &quot;inspect()&quot;">​</a></h3><blockquote><p><strong>inspect</strong>(<code>fn</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p></blockquote><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>args</code>) =&gt; <code>unknown</code></td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>T</code> &gt;</p><h4 id="source-14" tabindex="-1">Source <a class="header-anchor" href="#source-14" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L51" target="_blank" rel="noreferrer">src/flow/result.ts:51</a></p><hr><h3 id="iserror" tabindex="-1">isError() <a class="header-anchor" href="#iserror" aria-label="Permalink to &quot;isError()&quot;">​</a></h3><blockquote><p><strong>isError</strong>(): <code>boolean</code></p></blockquote><p>Check if result is failure</p><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="source-15" tabindex="-1">Source <a class="header-anchor" href="#source-15" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L213" target="_blank" rel="noreferrer">src/flow/result.ts:213</a></p><hr><h3 id="issuccess" tabindex="-1">isSuccess() <a class="header-anchor" href="#issuccess" aria-label="Permalink to &quot;isSuccess()&quot;">​</a></h3><blockquote><p><strong>isSuccess</strong>(): <code>boolean</code></p></blockquote><p>Check if result is success</p><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="source-16" tabindex="-1">Source <a class="header-anchor" href="#source-16" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L208" target="_blank" rel="noreferrer">src/flow/result.ts:208</a></p><hr><h3 id="map" tabindex="-1">map() <a class="header-anchor" href="#map" aria-label="Permalink to &quot;map()&quot;">​</a></h3><blockquote><p><strong>map</strong>&lt;<code>R</code>&gt;(<code>fn</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p></blockquote><p>Replace <code>data</code> of result with the result of <code>fn</code>, if result is success</p><h4 id="type-parameters-6" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-6" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>data</code>) =&gt; <code>R</code></td></tr></tbody></table><h4 id="returns-14" tabindex="-1">Returns <a class="header-anchor" href="#returns-14" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p><h4 id="source-17" tabindex="-1">Source <a class="header-anchor" href="#source-17" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L184" target="_blank" rel="noreferrer">src/flow/result.ts:184</a></p><hr><h3 id="mapor" tabindex="-1">mapOr() <a class="header-anchor" href="#mapor" aria-label="Permalink to &quot;mapOr()&quot;">​</a></h3><blockquote><p><strong>mapOr</strong>&lt;<code>R</code>&gt;(<code>fn</code>, <code>data</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p></blockquote><p>Replace <code>data</code> of result with the result of <code>fn</code>, if result is success, or <code>data</code></p><h4 id="type-parameters-7" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-7" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h4 id="parameters-12" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-12" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>data</code>) =&gt; <code>R</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h4 id="returns-15" tabindex="-1">Returns <a class="header-anchor" href="#returns-15" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p><h4 id="source-18" tabindex="-1">Source <a class="header-anchor" href="#source-18" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L192" target="_blank" rel="noreferrer">src/flow/result.ts:192</a></p><hr><h3 id="maporelse" tabindex="-1">mapOrElse() <a class="header-anchor" href="#maporelse" aria-label="Permalink to &quot;mapOrElse()&quot;">​</a></h3><blockquote><p><strong>mapOrElse</strong>&lt;<code>R</code>&gt;(<code>fn</code>, <code>fn2</code>): <a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p></blockquote><p>Replace <code>data</code> of result with the result of <code>fn</code>, if result is success, or the result of <code>fn2</code></p><h4 id="type-parameters-8" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-8" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h4 id="parameters-13" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-13" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(<code>data</code>) =&gt; <code>R</code></td></tr><tr><td style="text-align:left;"><code>fn2</code></td><td style="text-align:left;">() =&gt; <code>R</code></td></tr></tbody></table><h4 id="returns-16" tabindex="-1">Returns <a class="header-anchor" href="#returns-16" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./class.Result.html"><code>Result</code></a>&lt; <code>R</code> &gt;</p><h4 id="source-19" tabindex="-1">Source <a class="header-anchor" href="#source-19" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L200" target="_blank" rel="noreferrer">src/flow/result.ts:200</a></p><hr><h3 id="unwrap" tabindex="-1">unwrap() <a class="header-anchor" href="#unwrap" aria-label="Permalink to &quot;unwrap()&quot;">​</a></h3><blockquote><p><strong>unwrap</strong>(): <code>T</code></p></blockquote><p>Return data if result is success, or throw an error</p><h4 id="returns-17" tabindex="-1">Returns <a class="header-anchor" href="#returns-17" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="source-20" tabindex="-1">Source <a class="header-anchor" href="#source-20" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L21" target="_blank" rel="noreferrer">src/flow/result.ts:21</a></p><hr><h3 id="unwrapor" tabindex="-1">unwrapOr() <a class="header-anchor" href="#unwrapor" aria-label="Permalink to &quot;unwrapOr()&quot;">​</a></h3><blockquote><p><strong>unwrapOr</strong>(<code>data</code>): <code>T</code></p></blockquote><p>Return data if result is success, or return <code>data</code></p><h4 id="parameters-14" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-14" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="returns-18" tabindex="-1">Returns <a class="header-anchor" href="#returns-18" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="source-21" tabindex="-1">Source <a class="header-anchor" href="#source-21" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L29" target="_blank" rel="noreferrer">src/flow/result.ts:29</a></p><hr><h3 id="unwraporelse" tabindex="-1">unwrapOrElse() <a class="header-anchor" href="#unwraporelse" aria-label="Permalink to &quot;unwrapOrElse()&quot;">​</a></h3><blockquote><p><strong>unwrapOrElse</strong>(<code>fn</code>): <code>T</code></p></blockquote><p>Return data if result is success, or return the result of <code>fn</code></p><h4 id="parameters-15" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-15" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">() =&gt; <code>T</code></td></tr></tbody></table><h4 id="returns-19" tabindex="-1">Returns <a class="header-anchor" href="#returns-19" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="source-22" tabindex="-1">Source <a class="header-anchor" href="#source-22" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/niuiic/flow/blob/4030aaf/src/flow/result.ts#L37" target="_blank" rel="noreferrer">src/flow/result.ts:37</a></p>',224),s=[l];function c(d,h,n,i,u,f){return t(),a("div",null,s)}const m=e(o,[["render",c]]);export{p as __pageData,m as default};
