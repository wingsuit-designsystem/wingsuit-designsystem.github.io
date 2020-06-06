webpackJsonp([54645014386105],{724:function(e,n){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/"],configurations:["/configurations/overview/","/configurations/details/","/configurations/custom-webpack-config/"],testing:["/testing/manual-testing/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/configurations/overview/"},frontmatter:{title:"Configuration overview",id:"overview"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quick Start Guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Detailed configuration overview",id:"details"}}}]},markdownRemark:{html:'<p>For CLI options see: <a href="../cli-options">here</a>.</p>\n<h2 id="main-configuration"><a href="#main-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Main configuration</h2>\n<p>By default, Wingsuit will look for wingsuit.config.js file at the root of your project where you can define any customizations.</p>\n<p>The minimal configuration file includes only the namespaces:</p>\n<pre><code class="language-js">const namespaces = require(\'./source/default/namespaces\');\n\nmodule.exports = {\n  designSystems: {\n    default: {\n      namespaces,\n    },\n  },\n};\n</code></pre>\n<p>If you want to customize the folder structure or the webpack configuration you can extend the configuration. </p>\n<p>Here is the complete configuration: (The configuration stub is located <a href="https://github.com/wingsuit-designsystem/wingsuit/blob/master/packages/core/src/stubs/defaultWingsuitConfig.stub.ts">here</a>)</p>\n<pre><code class="language-js">{\n  designSystems: {\n    default: {\n      path: "source/default",\n      patternPath: "patterns",\n      namespaces: {}\n    }\n  },\n  environments: {\n    development: {},\n    production: {}\n  },\n  apps: {\n    storybook: {\n      type: "storybook",\n      path: "./apps/storybook",\n      cssMode: "hot",\n      distFolder: "dist/app-storybook",\n      assetBundleFolder: "assets",\n      designSystem: "default",\n      webpackBundles: [\n        "DefaultBundle",\n        "StorybookAssetBundle",\n        "TwingBundle",\n        "StorybookBundle",\n        "CssBundle",\n        "BabelBundle"\n      ]\n    },\n    drupal: {\n      type: "drupal",\n      path: "./apps/drupal",\n      cssMode: "extract",\n      distFolder: "dist/app-drupal",\n      assetBundleFolder: "assets",\n      designSystem: "default",\n      webpackBundles: [\n        "BabelBundle",\n        "DefaultBundle",\n        "AssetBundle",\n        "DrupalBundle",\n        "CssBundle"\n      ]\n    }\n  }\n}\n</code></pre>\n<p>Each of this values can overwritten in the <code>wingsuit.config.js</code>.</p>\n<p>Here a short overview of the main concepts.\n<code>apps</code> to configure each app. </p>\n<p><code>environments</code> to overwrite a configuration value for a specific environment.</p>\n<p><code>designsystems</code> to configure the designsystem itself.</p>\n<h2 id="configuration-details"><a href="#configuration-details" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuration details:</h2>\n<p>For detailed  <a href="../custom-webpack-config/">configuration overview</a></p>\n<h2 id="webpack"><a href="#webpack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>webpack</h2>\n<p>For how to customize webpack, <a href="../custom-webpack-config/">view the customize webpack section</a></p>',fields:{slug:"/configurations/overview/"},frontmatter:{title:"Configuration overview",id:"overview"}}},pathContext:{slug:"/configurations/overview/"}}}});
//# sourceMappingURL=path---configurations-overview-1a072018afb37b4f6c9c.js.map