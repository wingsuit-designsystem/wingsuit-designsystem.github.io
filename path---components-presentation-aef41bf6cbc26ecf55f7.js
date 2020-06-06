webpackJsonp([83206809846738],{727:function(t,e){t.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/"],testing:["/testing/manual-testing/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables",id:"globals"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Pattern)",id:"wingsuit"}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}}]},markdownRemark:{html:'<p>Presentation templates located typically at <code>apps/storybook/patterns/type/</code>.\nThey are useful to present a combination of components. A very typical use case are the pages in atomic design.\nBut often it makes also sense for other use cases.</p>\n<p><b>A Presentation component contains:</b></p>\n<ul>\n<li>pattern.stories.jsx</li>\n<li>pattern.twig</li>\n</ul>\n<p>Inside the stories you load the twig file the same way you do it at the twig only component.</p>\n<pre><code class="language-js">import { RenderTwig } from \'@wingsuit-designsystem/storybook\';\nimport React from \'react\';\nimport \'index\';\n\nexport default { title: \'05-folder/Name\' };\n\nconst twigTemplate = require(\'./twigfile.twig\');\n\nexport const Variant = () => &#x3C;RenderTwig data={twigTemplate}>&#x3C;/RenderTwig>;\n</code></pre>\n<h3 id="additonal-twig-functions"><a href="#additonal-twig-functions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Additonal twig functions</h3>\n<p>Inside the twig template you two additonal twig functions:</p>\n<ul>\n<li><code>pattern_preview(patterId, variantId, variables)</code> to render a existing pattern including all preview data from the component. You can overwrite preview data with variables.</li>\n<li><code>pattern(patterId, variantId, variables)</code> to render a pattern without any preview data. You need to provide all variables as the third argument.</li>\n</ul>',fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},pathContext:{slug:"/components/presentation/"}}}});
//# sourceMappingURL=path---components-presentation-aef41bf6cbc26ecf55f7.js.map