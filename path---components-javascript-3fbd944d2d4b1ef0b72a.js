webpackJsonp([0x8c77917d3607],{745:function(e,t){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/","/guides/create-component-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/","/configurations/preset-webpack/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/","/components/assets/","/components/javascript/"],testing:["/testing/manual-testing/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/components/assets/"},frontmatter:{title:"Assets",id:"assets"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables",id:"globals"}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/components/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Pattern)",id:"wingsuit"}}},{node:{fields:{slug:"/guides/create-component-guide/"},frontmatter:{title:"Create new component",id:"create-component-guide"}}},{node:{fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}}]},markdownRemark:{html:'<p>Place your javascript code in a <code>component.behavior.js</code> file inside your component and <code>@import</code> the javascript file in your <code>index.js</code>.</p>\n<p>Wingsuit will compile and babel this behavior file to <code>dist/behaviors/component.behavior.js</code>.</p>\n<p><b>Sample behavior file:</b></p>\n<pre><code class="language-js">Drupal.behaviors.button = {\n  attach(context, settings) {\n    // Do some stuff\n  },\n};\n</code></pre>\n<h2 id="vendor-libraries"><a href="#vendor-libraries" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vendor libraries</h2>\n<p>For each vendor library create a javascript file under <code>source/default/vendorjs/lib.vendor.js</code> and <code>@import</code> the referenced library.</p>\n<p><b>Sample <code>alpine.vendor.js</code> vendor file:</b></p>\n<pre><code class="language-js">import \'regenerator-runtime/runtime\';\nimport \'alpinejs\';\n</code></pre>\n<p>Checkout the <a href="https://github.com/wingsuit-designsystem/wingsuit/blob/master/packages/core/src/server/presets/assets.ts">webpack asset preset</a> for more details. </p>',fields:{slug:"/components/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}},pathContext:{slug:"/components/javascript/"}}}});
//# sourceMappingURL=path---components-javascript-3fbd944d2d4b1ef0b72a.js.map