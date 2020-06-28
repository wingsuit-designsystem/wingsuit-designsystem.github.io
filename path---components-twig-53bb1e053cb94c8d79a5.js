webpackJsonp([0xdc3a479674e6],{748:function(t,e){t.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/","/guides/create-component-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/","/configurations/preset-webpack/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/","/components/assets/","/components/javascript/"],testing:["/testing/manual-testing/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Pattern)",id:"wingsuit"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/guides/create-component-guide/"},frontmatter:{title:"Create new component",id:"create-component-guide"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/components/assets/"},frontmatter:{title:"Images & Icons",id:"assets"}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables",id:"globals"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/components/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}},{node:{fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}}]},markdownRemark:{html:"<p>A twig only component works without any wingsuit yml file. The patterns are useful if you don’t need or don’t want a UI Patterns integeration.</p>\n<p>A typical use case for twig only components are menu or header components. </p>\n<p>The data for this components can be provided as variables or defined globaly inside yaml files in <code>apps/storybook/data</code>. So typically </p>\n<p><b>A twig only component contains:</b></p>\n<ul>\n<li>index.js</li>\n<li>pattern.stories.jsx</li>\n<li>pattern.twig</li>\n<li>css file (optional)</li>\n<li>javascript file. (optional)</li>\n</ul>\n<p>Wingsuit provides a react component <code>RenderTwig</code> to render twig templates.</p>\n<pre><code class=\"language-js\">import { RenderTwig } from '@wingsuit-designsystem/storybook';\nimport React from 'react';\nimport 'index';\n\nexport default { title: '01-folder/Name' };\n\nconst twigTemplate = require('./twigfile.twig');\n\nexport const Variant = () => &#x3C;RenderTwig data={twigTemplate}>&#x3C;/RenderTwig>;\n</code></pre>\n<p>You can assign variables as properties to the twig component.</p>\n<pre><code class=\"language-js\">export const Variant2 = () => &#x3C;RenderTwig data={twigTemplate} variable1=\"value1\">&#x3C;/RenderTwig>;\n</code></pre>",fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},pathContext:{slug:"/components/twig/"}}}});
//# sourceMappingURL=path---components-twig-53bb1e053cb94c8d79a5.js.map