webpackJsonp([0xc641b59d517c],{730:function(e,n){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/"],testing:["/testing/manual-testing/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Pattern)",id:"wingsuit"}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables",id:"globals"}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}}]},markdownRemark:{html:'<h2 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>\n<p>Wingsuit uses <code>webpack bundles</code> to make webpack configs reusable across different apps. </p>\n<p>The goal is to deliver a community driven set of webpack configurations which can easily be extended or replaced.</p>\n<p>A webpack bundle is a class which returns a webpack config object. </p>\n<h2 id="create-a-new-webpack-bundle"><a href="#create-a-new-webpack-bundle" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create a new <code>webpack bundle</code></h2>\n<p>Create a new class under <code>.wingsuit/webpackBundle</code> which extends <code>BaseConfigBundle</code>.</p>\n<pre><code class="language-js">const wingsuitCore = require("@wingsuit-designsystem/core");\n\nclass CustomBundle extends wingsuitCore.BaseWebpackBundle {\n  getSharedWebpackConfig() {\n    // Custom webpack config.\n    return {}\n  }\n}\n\nmodule.exports = CustomBundle;\n</code></pre>\n<p>Then register the bundle inside your wingsuit.config.js:</p>\n<pre><code class="language-js">  const CustomBundle = require(\'./.wingsuit/webpackBundle/CustomBundle\');\n  \n  module.exports = {\n    ... \n    webpackBundles: {\n      "CustomBundle": CustomBundle\n    },\n    ...\n  };\n</code></pre>\n<h2 id="extend-or-replace-config"><a href="#extend-or-replace-config" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extend or replace config?</h2>\n<p>There are two ways to use webpack bundles: </p>\n<h3 id="extend"><a href="#extend" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extend</h3>\n<p>The most common use case is to extend the existing <code>webpackBundles</code> config. For this you can use the <code>extend</code> keyword inside the <code>webpack.config.js</code>.</p>\n<pre><code class="language-js">module.exports = {\n  extend: {\n      apps: {\n        storybook: {\n          webpackBundles: [\n            "CustomBundle"\n          ],\n        }\n      }\n    } \n  };\n</code></pre>\n<h3 id="replace"><a href="#replace" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Replace</h3>\n<p>It’s also possible to replace the existing bundles with a completely custom configuration. Doing so overwrites the existing app config. </p>\n<pre><code class="language-js">module.exports = {\n  apps: {\n    storybook: {\n      webpackBundles: [\n        "StorybookBundle",\n        "CssBundle",\n        "CustomBundle"\n      ],\n    }\n  }\n};\n</code></pre>',fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},pathContext:{slug:"/configurations/custom-webpack-config/"}}}});
//# sourceMappingURL=path---configurations-custom-webpack-config-dc09edaf6a65b389c1bb.js.map