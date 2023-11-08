import{_ as e,o as a,c as o,Q as t}from"./chunks/framework.1baa841b.js";const b=JSON.parse('{"title":"Interface: CallSite","description":"","frontmatter":{},"headers":[],"relativePath":"api/utils/<internal>/interfaces/CallSite.md","filePath":"api/utils/<internal>/interfaces/CallSite.md","lastUpdated":null}'),r={name:"api/utils/<internal>/interfaces/CallSite.md"},n=t('<p><a href="./../../../modules.html">fx-flow</a> / <a href="./../../">utils</a> / <a href="./../">&lt;internal&gt;</a> / CallSite</p><h1 id="interface-callsite" tabindex="-1">Interface: CallSite <a class="header-anchor" href="#interface-callsite" aria-label="Permalink to &quot;Interface: CallSite&quot;">​</a></h1><h2 id="contents" tabindex="-1">Contents <a class="header-anchor" href="#contents" aria-label="Permalink to &quot;Contents&quot;">​</a></h2><ul><li><a href="./CallSite.html#methods">Methods</a><ul><li><a href="./CallSite.html#getcolumnnumber">getColumnNumber()</a></li><li><a href="./CallSite.html#getevalorigin">getEvalOrigin()</a></li><li><a href="./CallSite.html#getfilename">getFileName()</a></li><li><a href="./CallSite.html#getfunction">getFunction()</a></li><li><a href="./CallSite.html#getfunctionname">getFunctionName()</a></li><li><a href="./CallSite.html#getlinenumber">getLineNumber()</a></li><li><a href="./CallSite.html#getmethodname">getMethodName()</a></li><li><a href="./CallSite.html#getthis">getThis()</a></li><li><a href="./CallSite.html#gettypename">getTypeName()</a></li><li><a href="./CallSite.html#isconstructor">isConstructor()</a></li><li><a href="./CallSite.html#iseval">isEval()</a></li><li><a href="./CallSite.html#isnative">isNative()</a></li><li><a href="./CallSite.html#istoplevel">isToplevel()</a></li></ul></li></ul><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getcolumnnumber" tabindex="-1">getColumnNumber() <a class="header-anchor" href="#getcolumnnumber" aria-label="Permalink to &quot;getColumnNumber()&quot;">​</a></h3><blockquote><p><strong>getColumnNumber</strong>(): <code>null</code> | <code>number</code></p></blockquote><p>Current column number [if this function was defined in a script]</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>null</code> | <code>number</code></p><h4 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.9.0/node_modules/@types/node/globals.d.ts:193</p><hr><h3 id="getevalorigin" tabindex="-1">getEvalOrigin() <a class="header-anchor" href="#getevalorigin" aria-label="Permalink to &quot;getEvalOrigin()&quot;">​</a></h3><blockquote><p><strong>getEvalOrigin</strong>(): <code>undefined</code> | <code>string</code></p></blockquote><p>A call site object representing the location where eval was called [if this function was created using a call to eval]</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <code>string</code></p><h4 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.9.0/node_modules/@types/node/globals.d.ts:199</p><hr><h3 id="getfilename" tabindex="-1">getFileName() <a class="header-anchor" href="#getfilename" aria-label="Permalink to &quot;getFileName()&quot;">​</a></h3><blockquote><p><strong>getFileName</strong>(): <code>undefined</code> | <code>string</code></p></blockquote><p>Name of the script [if this function was defined in a script]</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <code>string</code></p><h4 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.9.0/node_modules/@types/node/globals.d.ts:183</p><hr><h3 id="getfunction" tabindex="-1">getFunction() <a class="header-anchor" href="#getfunction" aria-label="Permalink to &quot;getFunction()&quot;">​</a></h3><blockquote><p><strong>getFunction</strong>(): <code>undefined</code> | <code>Function</code></p></blockquote><p>Current function</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>undefined</code> | <code>Function</code></p><h4 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.9.0/node_modules/@types/node/globals.d.ts:165</p><hr><h3 id="getfunctionname" tabindex="-1">getFunctionName() <a class="header-anchor" href="#getfunctionname" aria-label="Permalink to &quot;getFunctionName()&quot;">​</a></h3><blockquote><p><strong>getFunctionName</strong>(): <code>null</code> | <code>string</code></p></blockquote><p>Name of the current function, typically its name property. If a name property is not available an attempt will be made to try to infer a name from the function&#39;s context.</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>null</code> | <code>string</code></p><h4 id="source-4" tabindex="-1">Source <a class="header-anchor" href="#source-4" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.9.0/node_modules/@types/node/globals.d.ts:172</p><hr><h3 id="getlinenumber" tabindex="-1">getLineNumber() <a class="header-anchor" href="#getlinenumber" aria-label="Permalink to &quot;getLineNumber()&quot;">​</a></h3><blockquote><p><strong>getLineNumber</strong>(): <code>null</code> | <code>number</code></p></blockquote><p>Current line number [if this function was defined in a script]</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>null</code> | <code>number</code></p><h4 id="source-5" tabindex="-1">Source <a class="header-anchor" href="#source-5" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.9.0/node_modules/@types/node/globals.d.ts:188</p><hr><h3 id="getmethodname" tabindex="-1">getMethodName() <a class="header-anchor" href="#getmethodname" aria-label="Permalink to &quot;getMethodName()&quot;">​</a></h3><blockquote><p><strong>getMethodName</strong>(): <code>null</code> | <code>string</code></p></blockquote><p>Name of the property [of &quot;this&quot; or one of its prototypes] that holds the current function</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>null</code> | <code>string</code></p><h4 id="source-6" tabindex="-1">Source <a class="header-anchor" href="#source-6" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.9.0/node_modules/@types/node/globals.d.ts:178</p><hr><h3 id="getthis" tabindex="-1">getThis() <a class="header-anchor" href="#getthis" aria-label="Permalink to &quot;getThis()&quot;">​</a></h3><blockquote><p><strong>getThis</strong>(): <code>unknown</code></p></blockquote><p>Value of &quot;this&quot;</p><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>unknown</code></p><h4 id="source-7" tabindex="-1">Source <a class="header-anchor" href="#source-7" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.9.0/node_modules/@types/node/globals.d.ts:152</p><hr><h3 id="gettypename" tabindex="-1">getTypeName() <a class="header-anchor" href="#gettypename" aria-label="Permalink to &quot;getTypeName()&quot;">​</a></h3><blockquote><p><strong>getTypeName</strong>(): <code>null</code> | <code>string</code></p></blockquote><p>Type of &quot;this&quot; as a string. This is the name of the function stored in the constructor field of &quot;this&quot;, if available. Otherwise the object&#39;s [[Class]] internal property.</p><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>null</code> | <code>string</code></p><h4 id="source-8" tabindex="-1">Source <a class="header-anchor" href="#source-8" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.9.0/node_modules/@types/node/globals.d.ts:160</p><hr><h3 id="isconstructor" tabindex="-1">isConstructor() <a class="header-anchor" href="#isconstructor" aria-label="Permalink to &quot;isConstructor()&quot;">​</a></h3><blockquote><p><strong>isConstructor</strong>(): <code>boolean</code></p></blockquote><p>Is this a constructor call?</p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="source-9" tabindex="-1">Source <a class="header-anchor" href="#source-9" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.9.0/node_modules/@types/node/globals.d.ts:219</p><hr><h3 id="iseval" tabindex="-1">isEval() <a class="header-anchor" href="#iseval" aria-label="Permalink to &quot;isEval()&quot;">​</a></h3><blockquote><p><strong>isEval</strong>(): <code>boolean</code></p></blockquote><p>Does this call take place in code defined by a call to eval?</p><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="source-10" tabindex="-1">Source <a class="header-anchor" href="#source-10" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.9.0/node_modules/@types/node/globals.d.ts:209</p><hr><h3 id="isnative" tabindex="-1">isNative() <a class="header-anchor" href="#isnative" aria-label="Permalink to &quot;isNative()&quot;">​</a></h3><blockquote><p><strong>isNative</strong>(): <code>boolean</code></p></blockquote><p>Is this call in native V8 code?</p><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="source-11" tabindex="-1">Source <a class="header-anchor" href="#source-11" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.9.0/node_modules/@types/node/globals.d.ts:214</p><hr><h3 id="istoplevel" tabindex="-1">isToplevel() <a class="header-anchor" href="#istoplevel" aria-label="Permalink to &quot;isToplevel()&quot;">​</a></h3><blockquote><p><strong>isToplevel</strong>(): <code>boolean</code></p></blockquote><p>Is this a toplevel invocation, that is, is &quot;this&quot; the global object?</p><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="source-12" tabindex="-1">Source <a class="header-anchor" href="#source-12" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p>node_modules/.pnpm/@types+node@20.9.0/node_modules/@types/node/globals.d.ts:204</p>',108),l=[n];function i(s,d,u,c,h,p){return a(),o("div",null,l)}const g=e(r,[["render",i]]);export{b as __pageData,g as default};
