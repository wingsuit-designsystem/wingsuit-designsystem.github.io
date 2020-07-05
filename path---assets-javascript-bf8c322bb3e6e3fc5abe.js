webpackJsonp([0xa89fa2370e20],{748:function(e,t){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/","/guides/create-component-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/","/configurations/preset-webpack/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/"],assets:["/assets/overview/","/assets/images/","/assets/svg/","/assets/javascript/"],drupal:["/drupal/overview/","/drupal/ui_patterns/","/drupal/presenter/"],testing:["/testing/manual-testing/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/assets/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}},{node:{fields:{slug:"/assets/images/"},frontmatter:{title:"Images & Icons",id:"images"}}},{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables.",id:"globals"}}},{node:{fields:{slug:"/assets/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/assets/svg/"},frontmatter:{title:"Svgs",id:"svg"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Pattern)",id:"wingsuit"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/drupal/ui_patterns/"},frontmatter:{title:"UI Patterns",id:"ui_patterns"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}},{node:{fields:{slug:"/drupal/overview/"},frontmatter:{title:"Component-Based Theming in Drupal 8",id:"overview"}}},{node:{fields:{slug:"/drupal/presenter/"},frontmatter:{title:"Presenter",id:"presenter"}}},{node:{fields:{slug:"/guides/create-component-guide/"},frontmatter:{title:"Create new component",id:"create-component-guide"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}}]},markdownRemark:{html:'<h2 id="custom-javascript"><a href="#custom-javascript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom javascript</h2>\n<p>Drupal javascript behaviors are working out of the box in Wingsuit.\nPlace your custom javascript code in a <code>component.behavior.js</code> file inside your component.</p>\n<p>Wingsuit will load the file automatically and call the <code>attach</code> function after component initialization. </p>\n<p><b>Sample behavior file:</b></p>\n<pre><code class="language-js">Drupal.behaviors.button = {\n  attach(context, settings) {\n    // Do some stuff\n  },\n};\n</code></pre>\n<p>Wingsuit supports ES6 and compiles (babel) every behavior file to a separately compiled behavior file.\nYou can find the compiled files in <code>dist/behaviors/*.behavior.js</code>.</p>\n<h2 id="vendor-libraries"><a href="#vendor-libraries" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vendor libraries</h2>\n<p>To embed a 3d party library: </p>\n<ol>\n<li>Add the 3d party library to your package.json. Run <code>yarn add library</code>.</li>\n<li>\n<p>Create a javascript file under <code>source/default/vendorjs/lib.vendor.js</code> and <code>@import</code> the referenced library.\n<b>Sample</b> </p>\n<pre><code class="language-js">import \'regenerator-runtime/runtime\';\nimport \'alpinejs\';\n</code></pre>\n</li>\n</ol>\n<p>Wingsuit compiles every vendor file to a separate compiled vendor file so you can easily embed it in drupal.\nYou can find your vendor file under <code>dist/app-[type]/vendors/[your-library].js</code>. </p>\n<p>Checkout the <a href="https://github.com/wingsuit-designsystem/wingsuit/blob/master/packages/core/src/server/presets/assets.ts">webpack asset preset</a> for more details. </p>',fields:{slug:"/assets/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}},pathContext:{slug:"/assets/javascript/"}}}});
//# sourceMappingURL=path---assets-javascript-bf8c322bb3e6e3fc5abe.js.map