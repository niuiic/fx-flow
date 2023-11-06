import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.ed6abfc6.js";const u=JSON.parse('{"title":"Debug","description":"","frontmatter":{},"headers":[],"relativePath":"guide/debug.md","filePath":"guide/debug.md","lastUpdated":1698937391000}'),p={name:"guide/debug.md"},l=o(`<h1 id="debug" tabindex="-1">Debug <a class="header-anchor" href="#debug" aria-label="Permalink to &quot;Debug&quot;">​</a></h1><p>Debugging in chain is difficult, fortunately there are some functions provided to help.</p><h2 id="flow" tabindex="-1">flow <a class="header-anchor" href="#flow" aria-label="Permalink to &quot;flow&quot;">​</a></h2><p><code>inspect</code> can inject an inspector without an effect.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Do not modify <code>data</code>, or subsequent steps will be affected.</p></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">inspector</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">args</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">success</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">; </span><span style="color:#FFAB70;">data</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">success</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">; </span><span style="color:#FFAB70;">err</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(args)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">userInfo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">flow</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">ok</span><span style="color:#E1E4E8;">(userId), </span><span style="color:#B392F0;">andThen</span><span style="color:#E1E4E8;">(queryUserInfo), </span><span style="color:#B392F0;">inspect</span><span style="color:#E1E4E8;">(inspector), </span><span style="color:#B392F0;">errThen</span><span style="color:#E1E4E8;">(notify))).</span><span style="color:#B392F0;">unwrap</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">inspector</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> &lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;(</span><span style="color:#E36209;">args</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">success</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">; </span><span style="color:#E36209;">data</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">success</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">; </span><span style="color:#E36209;">err</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(args)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">userInfo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">flow</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">ok</span><span style="color:#24292E;">(userId), </span><span style="color:#6F42C1;">andThen</span><span style="color:#24292E;">(queryUserInfo), </span><span style="color:#6F42C1;">inspect</span><span style="color:#24292E;">(inspector), </span><span style="color:#6F42C1;">errThen</span><span style="color:#24292E;">(notify))).</span><span style="color:#6F42C1;">unwrap</span><span style="color:#24292E;">()</span></span></code></pre></div><p><code>log</code> can output result of each step in flow.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">flow</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">ok</span><span style="color:#E1E4E8;">(userId), </span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;INFO&#39;</span><span style="color:#E1E4E8;">), </span><span style="color:#B392F0;">andThen</span><span style="color:#E1E4E8;">(queryUserInfo), </span><span style="color:#B392F0;">errThen</span><span style="color:#E1E4E8;">(notify))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">flow</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">ok</span><span style="color:#24292E;">(userId), </span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;INFO&#39;</span><span style="color:#24292E;">), </span><span style="color:#6F42C1;">andThen</span><span style="color:#24292E;">(queryUserInfo), </span><span style="color:#6F42C1;">errThen</span><span style="color:#24292E;">(notify))</span></span></code></pre></div><h2 id="pipe" tabindex="-1">pipe <a class="header-anchor" href="#pipe" aria-label="Permalink to &quot;pipe&quot;">​</a></h2><p><code>tap</code> can inject an inspector for the result of the previous operation, and <code>peek</code> can apply an function to each item in iterable.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Do not modify the arguments of <code>tap</code> and <code>peek</code>.</p></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> v </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">tap</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(result)), </span><span style="color:#6A737D;">// log an iterator</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">peek</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(item)), </span><span style="color:#6A737D;">// log 2, 3, 4, 5</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b)</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pipe</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">((</span><span style="color:#E36209;">v</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> v </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">tap</span><span style="color:#24292E;">((</span><span style="color:#E36209;">result</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(result)), </span><span style="color:#6A737D;">// log an iterator</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">peek</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(item)), </span><span style="color:#6A737D;">// log 2, 3, 4, 5</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">reduce</span><span style="color:#24292E;">((</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b)</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div>`,12),e=[l];function t(c,r,y,E,i,d){return a(),n("div",null,e)}const g=s(p,[["render",t]]);export{u as __pageData,g as default};
