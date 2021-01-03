webpackJsonp([0x71344d9b6fe0],{1375:function(e,t){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/","/guides/create-component-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/","/configurations/preset-webpack/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/"],assets:["/assets/overview/","/assets/images/","/assets/svg/","/assets/javascript/"],drupal:["/drupal/ui_patterns/"],documentation:["/documentation/overview/","/documentation/mdx/"],testing:["/testing/visual-testing/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/assets/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}},{node:{fields:{slug:"/assets/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/assets/svg/"},frontmatter:{title:"SVGs",id:"svg"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/documentation/overview/"},frontmatter:{title:"Get started",id:"overview"}}},{node:{fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/documentation/mdx/"},frontmatter:{title:"MDX",id:"mdx"}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables",id:"globals"}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/drupal/overview/"},frontmatter:{title:"Component-Based Theming in Drupal",id:"overview"}}},{node:{fields:{slug:"/guides/create-component-guide/"},frontmatter:{title:"Create new component",id:"create-component-guide"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Patterns)",id:"wingsuit"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/drupal/ui_patterns/"},frontmatter:{title:"Wingsuit Kickstarter (with UI Patterns and Layout Builder)",id:"ui_patterns"}}},{node:{fields:{slug:"/testing/visual-testing/"},frontmatter:{title:"Visual Testing",id:"visual-testing"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/assets/images/"},frontmatter:{title:"Images & Icons",id:"images"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}}]},markdownRemark:{html:'<p>Wingsuit comes with a <a href="https://github.com/wingsuit-designsystem/wingsuit/blob/master/packages/core/src/stubs/defaultWingsuitConfig.stub.ts">preset</a> of variables that are suitable for most use cases.</p>\n<p><b>The Wingsuit configuration file has three main sections</b></p>\n<ul>\n<li>\n<p><code>apps</code> for app-specific configuration. A typical app is Drupal. Here you can configure where your app is located and how you want to compile and store your assets.   </p>\n</li>\n<li>\n<p><code>designSystem</code> for design system configuration. The design system is where your patterns living. Here you can configure everything around your patterns.</p>\n</li>\n<li>\n<p><code>presets</code> list of loaded webpack presets. <a href="../preset-webpack">Here you can find more information</a> about webpack bundles.</p>\n</li>\n</ul>\n<h2 id="app-details"><a href="#app-details" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>App details</h2>\n<p>Each app is configurable by following properties:</p>\n<ul>\n<li><code>type</code> the type of the app.</li>\n<li><code>path</code> the path to the app.</li>\n<li><code>cssMode</code> extract CSS or not.</li>\n<li><code>designSystem</code> The name to the design system.</li>\n<li><code>distFolder</code> the path to the dist folder.</li>\n<li><code>assetBundleFolder</code> the folder name under the dist folder for assets.</li>\n</ul>\n<h2 id="design-systems-details"><a href="#design-systems-details" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design systems details</h2>\n<p>In the <code>designSystems</code> section you define the folder structure of your design system.\nEach designSystem is configurable by following properties:</p>\n<ul>\n<li><code>path</code> the path to the design system.</li>\n<li><code>patternFolder</code> the folder name under the designsystem folder for patterns.</li>\n<li><code>namespaces</code> to configure folder aliases.</li>\n</ul>\n<h4 id="namespaces"><a href="#namespaces" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Namespaces:</h4>\n<pre><code class="language-js">const path = require(\'path\' );\n\nconst patterns = path.resolve(__dirname, \'patterns\');\n\nmodule.exports = {\n  tokens: path.resolve(__dirname, \'tokens\'),\n  protons: path.resolve(patterns, \'00-protons\'),\n  atoms: path.resolve(patterns, \'01-atoms\'),\n  molecules: path.resolve(patterns, \'02-molecules\'),\n  organisms: path.resolve(patterns, \'03-organisms\'),\n  templates: path.resolve(patterns, \'04-templates\'),\n  pages: path.resolve(patterns, \'05-pages\'),\n};\n</code></pre>\n<p>You can use namespaces in twig and javascript imports.</p>\n<p><b>TWIG:</b></p>\n<pre><code class="language-js">  {% include "@atoms/button/button.twig" %}\n</code></pre>\n<p><b>Javascript:</b></p>\n<pre><code class="language-js">  import "atoms/button";\n</code></pre>\n<h3 id="environment-specific-configuration"><a href="#environment-specific-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Environment specific configuration</h3>\n<p>With <code>environments</code> you can overwrite a configuration value for a specific environment.</p>\n<p>Here is an example of overwriting the cssMode for development:</p>\n<pre><code class="language-js">environments: {\n  ...\n      development: {\n        apps: {\n          storybook: {\n            cssMode: "extract"\n          }\n        }\n      }\n</code></pre>\n<h2 id="presets-details"><a href="#presets-details" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Presets details</h2>\n<p>Check the <a href="../preset-webpack">presets documentation</a> for more infos.</p>',fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},pathContext:{slug:"/configurations/details/"}}}});
//# sourceMappingURL=path---configurations-details-a40e8033fef5eb5c7f5e.js.map