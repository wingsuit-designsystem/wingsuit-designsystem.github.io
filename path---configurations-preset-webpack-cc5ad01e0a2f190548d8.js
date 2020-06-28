webpackJsonp([87895020720080],{752:function(e,t){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/","/guides/create-component-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/","/configurations/preset-webpack/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/","/components/assets/","/components/javascript/"],testing:["/testing/manual-testing/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Pattern)",id:"wingsuit"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/guides/create-component-guide/"},frontmatter:{title:"Create new component",id:"create-component-guide"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/components/assets/"},frontmatter:{title:"Images & Icons",id:"assets"}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables",id:"globals"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/components/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}},{node:{fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}}]},markdownRemark:{html:'<p>Wingsuit uses <code>presets</code> to make webpack configurations reusable across different apps.</p>\n<p>A preset is a set of hooks that is called by Wingsuit on webpack initialization and can override configurations for webpack.</p>\n<p>The goal is to deliver a community driven set of webpack presets. Checkout the predefined presets in the <a href="@TODO">default config stub</a>.</p>\n<p>Each preset have two possible hooks:</p>\n<pre><code class="language-js">module.exports = {\n  webpack: function(appConfig) {\n    return {\n    // Custom Webpack.\n    };\n  },\n  webpackFinal: function(appConfig, webpack) {\n    // Alter final webpack config.\n    return webpack; \n  }\n}\n</code></pre>\n<p>Then register the bundle inside your wingsuit.config.js:</p>\n<pre><code class="language-js">  const customPreset = require(\'custom/Preset\');\n  \n  module.exports = {\n    ... \n    presets: {\n      "CustomPreset": customPreset\n    }\n    ...\n  };\n</code></pre>\n<h2 id="extend-or-replace-config"><a href="#extend-or-replace-config" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extend or replace config?</h2>\n<p>There are two ways to use presets: </p>\n<h3 id="1-extend"><a href="#1-extend" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. Extend</h3>\n<p>The most common use case is to extend the existing <code>presets</code> config. For this you can use the <code>extend</code> keyword inside the <code>webpack.config.js</code>.</p>\n<pre><code class="language-js">module.exports = {\n  extend: {\n      apps: {\n        storybook: {\n          presets: [\n            "customPreset"\n          ],\n        }\n      }\n    } \n  };\n</code></pre>\n<h3 id="2-replace"><a href="#2-replace" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Replace</h3>\n<p>It’s also possible to replace the existing bundles with a completely custom configuration. Doing so overwrites the existing app config. </p>\n<pre><code class="language-js">module.exports = {\n  apps: {\n    storybook: {\n      presets: [\n        "storybook",\n        "css",\n        "customPreset"\n      ],\n    }\n  }\n};\n</code></pre>\n<p>Place your <code>preset</code> file wherever you want, if you want to share it far and wide you’ll want to make it its own package.</p>',fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}},pathContext:{slug:"/configurations/preset-webpack/"}}}});
//# sourceMappingURL=path---configurations-preset-webpack-cc5ad01e0a2f190548d8.js.map