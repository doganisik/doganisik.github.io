(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return m});var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(155),c=a(158),l=a(159),u=a(156),p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return i.a.createElement(c.a,{location:this.props.location,title:e},i.a.createElement(l.a,{title:"Tüm yazılar"}),a.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return i.a.createElement("div",{key:e.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},i.a.createElement(s.a,{style:{boxShadow:"none"},to:e.fields.slug},a)),i.a.createElement("small",null,e.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))},e}(i.a.Component);e.default=p;var m="2785444898"},154:function(t,e,a){var n;t.exports=(n=a(157))&&n.default||n},155:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(33),c=a.n(s);a.d(e,"a",function(){return c.a});a(154),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},156:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"b",function(){return l});var n=a(161),r=a.n(n),o=a(162),i=a.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var s=new r.a(i.a);var c=s.rhythm,l=s.scale},157:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(55),c=a(2),l=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},158:function(t,e,a){"use strict";a(34);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(155),c=a(156),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1),{marginBottom:Object(c.a)(1),marginTop:0})},i.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},i.a.createElement("header",null,t),i.a.createElement("main",null,r),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(i.a.Component);e.a=l},159:function(t,e,a){"use strict";var n=a(160),r=a(0),o=a.n(r),i=a(4),s=a.n(i),c=a(163),l=a.n(c);function u(t){var e=t.description,a=t.lang,r=t.meta,i=t.title,s=n.data.site,c=e||s.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},e.a=u},160:function(t){t.exports={data:{site:{siteMetadata:{title:"Doğan Işık Köşe Yazıları",description:"A starter blog demonstrating what Gatsby can do.",author:"Doğan Işık"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-c6ec915f3ea2d76acf32.js.map