webpackJsonp([0xd47632b8685d],{1190:function(e,t){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/","/guides/create-component-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/","/configurations/preset-webpack/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/"],assets:["/assets/overview/","/assets/images/","/assets/svg/","/assets/javascript/"],drupal:["/drupal/ui_patterns/"],testing:["/testing/manual-testing/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/assets/images/"},frontmatter:{title:"Images & Icons",id:"images"}}},{node:{fields:{slug:"/assets/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables.",id:"globals"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/assets/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/drupal/ui_patterns/"},frontmatter:{title:"How to use Wingsuit with UI Patterns and Layout Builder",id:"ui_patterns"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Patterns)",id:"wingsuit"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/drupal/overview/"},frontmatter:{title:"Component-Based Theming in Drupal",id:"overview"}}},{node:{fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}},{node:{fields:{slug:"/guides/create-component-guide/"},frontmatter:{title:"Create new component",id:"create-component-guide"}}},{node:{fields:{slug:"/assets/svg/"},frontmatter:{title:"SVGs",id:"svg"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}}]},markdownRemark:{html:'<p>Wingsuit knows following component types:</p>\n<ul>\n<li>\n<h3 id="wingsuit-component"><a href="#wingsuit-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Wingsuit component</h3>\n<p>Use this component in most cases. Read <a href="../wingsuit">here for more infos</a></p>\n</li>\n<li>\n<h3 id="wingsuit-component-with-presentation-template"><a href="#wingsuit-component-with-presentation-template" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Wingsuit component with presentation template</h3>\n<p>A Wingsuit component if you need an additional <a href="../presentation">presentation template</a>.</p>\n</li>\n<li>\n<h3 id="twig-only-component"><a href="#twig-only-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Twig only component</h3>\n<p>Use <a href="../twig">Twig only</a> if you have a very simple template without any data. </p>\n</li>\n<li>\n<h3 id="twig-only-component-with-presentation-template"><a href="#twig-only-component-with-presentation-template" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Twig only component with presentation template</h3>\n<p>The same as a Twig template with an additional presentation template </p>\n</li>\n<li>\n<h3 id="presentation-template"><a href="#presentation-template" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Presentation template</h3>\n<p>A presentation template only. Choose this if you want to build a complete Page.</p>\n</li>\n</ul>',fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},pathContext:{slug:"/components/overview/"}}}});
//# sourceMappingURL=path---components-overview-3cbc3072a618dbf94455.js.map