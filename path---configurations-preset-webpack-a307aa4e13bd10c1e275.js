webpackJsonp([87895020720080],{1376:function(e,t){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/","/guides/create-component-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/","/configurations/preset-webpack/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/"],assets:["/assets/overview/","/assets/images/","/assets/svg/","/assets/javascript/"],drupal:["/drupal/ui_patterns/"],documentation:["/documentation/overview/","/documentation/mdx/"],testing:["/testing/visual-testing/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/assets/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}},{node:{fields:{slug:"/assets/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/assets/svg/"},frontmatter:{title:"SVGs",id:"svg"}}},{node:{fields:{slug:"/assets/images/"},frontmatter:{title:"Images & Icons",id:"images"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/documentation/overview/"},frontmatter:{title:"Get started",id:"overview"}}},{node:{fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/documentation/mdx/"},frontmatter:{title:"MDX",id:"mdx"}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables",id:"globals"}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/drupal/overview/"},frontmatter:{title:"Component-Based Theming in Drupal",id:"overview"}}},{node:{fields:{slug:"/guides/create-component-guide/"},frontmatter:{title:"Create new component",id:"create-component-guide"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Patterns)",id:"wingsuit"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/testing/visual-testing/"},frontmatter:{title:"Visual Testing",id:"visual-testing"}}},{node:{fields:{slug:"/drupal/ui_patterns/"},frontmatter:{title:"Wingsuit Kickstarter (with UI Patterns and Layout Builder)",id:"ui_patterns"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}}]},markdownRemark:{html:'<p>Wingsuit uses <code>presets</code> to make webpack configurations reusable across different apps.</p>\n<p>The goal is to deliver a community-driven set of webpack presets. Check out the predefined presets in the <a href="@TODO">default config stub</a>.</p>\n<h2 id="what-is-a-preset"><a href="#what-is-a-preset" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is a preset</h2>\n<p>A preset provides a pre configured webpack configuration bundled in a node module.</p>\n<p>A good starting point is the <a href="https://github.com/wingsuit-designsystem/wingsuit/blob/master/presets/scss/src/index.ts">wingsuit scss bundle</a>.</p>\n<pre><code class="language-js">module.exports = {\n  name: function (appConfig) {\n    return \'preset-name\';\n  },\n  defaultConfiguration: function(appConfig) {\n    return {\'param1\': \'value1\'};\n  },\n  webpack: function(appConfig, config) {\n    return {\n    // Custom Webpack.\n    };\n  },\n  webpackFinal: function(appConfig, webpack, config) {\n    // Alter final webpack config.\n    return webpack; \n  }\n}\n</code></pre>\n<ul>\n<li><code>name</code> The unique name of the preset.</li>\n<li><code>defaultConfiguration</code> should return a default configuration. This configuration can be overwritten.</li>\n<li><code>webpack</code> should return the webpack code</li>\n<li><code>webpackFinal</code> is optional and should only be implemented if the preset needs to make changes to the final webpack.</li>\n</ul>\n<h2 id="install-a-preset"><a href="#install-a-preset" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install a preset</h2>\n<p>To install a preset add your preset to your <code>package.json</code> and add it to your <code>wingsuit.yml</code>:</p>\n<pre><code class="language-js">  module.exports = {\n    ... \n    presets: {\n      \'node-module-preset-name\'\n    }\n    ...\n  };\n</code></pre>\n<h2 id="configure-a-preset"><a href="#configure-a-preset" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configure a preset</h2>\n<p>Every presets should work with zero configuration out of the box. A preset ship with a default configuration by the defaultConfiguration method.\nYou can overwrite the configuration with the parameters key in your <code>wingsuit.yml</code>.</p>\n<pre><code class="language-js">  module.exports = {\n    parameters: {\n      \'preset-name\': {\n        \'param1\': \'newValue\'\n      }\n    }, \n    presets: {\n      "custom/Preset"\n    }\n    ...\n  };\n</code></pre>',fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}},pathContext:{slug:"/configurations/preset-webpack/"}}}});
//# sourceMappingURL=path---configurations-preset-webpack-a307aa4e13bd10c1e275.js.map