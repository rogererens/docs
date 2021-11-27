"use strict";(self.webpackChunkfirst_docusaurus=self.webpackChunkfirst_docusaurus||[]).push([[454],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2667:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Basic Product Tour",p={unversionedId:"user_guide/basics",id:"user_guide/basics",isDocsHomePage:!1,title:"Basic Product Tour",description:"Athens starts with a daily note",source:"@site/docs/user_guide/basics.md",sourceDirName:"user_guide",slug:"/user_guide/basics",permalink:"/docs/user_guide/basics",editUrl:"https://github.com/athensresearch/docs/edit/main/docs/user_guide/basics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation Guide",permalink:"/docs/user_guide/installation"},next:{title:"Feature Reference",permalink:"/docs/user_guide/feature-reference"}},u=[{value:"Athens starts with a daily note",id:"athens-starts-with-a-daily-note",children:[],level:2},{value:"Write and create in blocks",id:"write-and-create-in-blocks",children:[],level:2},{value:"Link between pages to build your graph",id:"link-between-pages-to-build-your-graph",children:[],level:2},{value:"Create your own formatting",id:"create-your-own-formatting",children:[],level:2},{value:"Drag, drop, and indent",id:"drag-drop-and-indent",children:[],level:2},{value:"Find everything in one command",id:"find-everything-in-one-command",children:[],level:2},{value:"Get help inside Athens",id:"get-help-inside-athens",children:[],level:2}],c={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-product-tour"},"Basic Product Tour"),(0,i.kt)("h2",{id:"athens-starts-with-a-daily-note"},"Athens starts with a daily note"),(0,i.kt)("p",null,"Every time you open Athens, you'll be in the daily note for that day. This is a unique page for that particular date, and while it seems like Athens wants you to write a traditional journal, you don't have to go down that route."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1153921/116891070-26b11f00-abe3-11eb-8e7c-466bdb2ccd9d.png",alt:"The daily note in Athens"})),(0,i.kt)("p",null,"You don't have to use daily notes if you prefer not to."),(0,i.kt)("h2",{id:"write-and-create-in-blocks"},"Write and create in blocks"),(0,i.kt)("p",null,"Athens puts all your writing into blocks, which are kind of like paragraphs. Unlike writing in plain text, Markdown, or even word processing software, blocks can be many different types of content, and they're all flexible and moveable."),(0,i.kt)("p",null,"Start by typing into the first block of your daily note. Hit ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," to start a new block or ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," to start a new line within the same block. We'll talk about ",(0,i.kt)("a",{parentName:"p",href:"/docs/user_guide/basics#create-your-own-formatting"},"formatting")," in a little bit."),(0,i.kt)("p",null,"Blocks are way more than text. Hit ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," to see all the other types of blocks, like TODOs, LaTeX equations, embedded images or YouTube videos, and much more."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1153921/117014690-e4044b00-aca5-11eb-8f6e-144346f0fa4b.png",alt:"Some of the blocks in Athens"})),(0,i.kt)("h2",{id:"link-between-pages-to-build-your-graph"},"Link between pages to build your graph"),(0,i.kt)("p",null,"Athens' magic is in the links. To create a link, type ",(0,i.kt)("inlineCode",{parentName:"p"},"[[")," and then the name of the page you want to link to. No other pages yet? No worries. Type the name of a new page, then hit ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),". Click on the link to jump to your new page."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1153921/117019096-f41e2980-aca9-11eb-871b-69075c67de4d.gif",alt:"Creating links between pages"})),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("strong",{parentName:"p"},"Linked References")," section at the bottom of every page. See how your first page is mentioned here? As you create links, Athens builds connections between pages and then shows you all the ",(0,i.kt)("em",{parentName:"p"},"pages linked to the current page"),'. These two pages are now part of the same "flow" of information.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1153921/117019034-e799d100-aca9-11eb-963e-458eeffef1f9.png",alt:"An example of Linked References"})),(0,i.kt)("p",null,"The more links you create between pages, the more interconnected, personal, and powerful your knowledge graph becomes."),(0,i.kt)("h2",{id:"create-your-own-formatting"},"Create your own formatting"),(0,i.kt)("p",null,"Aside from indenting blocks, you can also stylize your text however you'd like. Click on any block to change from ",(0,i.kt)("em",{parentName:"p"},"presentation")," mode to ",(0,i.kt)("em",{parentName:"p"},"raw")," mode, which shows you all the formatting code you'll soon put to use."),(0,i.kt)("p",null,"Use double asterisks ",(0,i.kt)("inlineCode",{parentName:"p"},"**bold**")," to make text ",(0,i.kt)("strong",{parentName:"p"},"bold"),", or single asterisks ","(",(0,i.kt)("inlineCode",{parentName:"p"},"*italics*"),")"," to ",(0,i.kt)("em",{parentName:"p"},"italicize")," text. There's other ways to format your text, plus keyboard shortcuts to make it simple."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"\u2318"),"+",(0,i.kt)("inlineCode",{parentName:"li"},"b")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"**bold**"),": Bold"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"\u2318"),"+",(0,i.kt)("inlineCode",{parentName:"li"},"i")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"*italic*"),": Italic"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"\u2318"),"+",(0,i.kt)("inlineCode",{parentName:"li"},"h")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"^^highlight^^"),": Highlight"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"\u2318"),"+",(0,i.kt)("inlineCode",{parentName:"li"},"u")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"~~strikethrough~~")," : Strikethrough")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1153921/117018595-7ce89580-aca9-11eb-8f90-573ff5239ebe.gif",alt:"Showing the presentation/raw mode and formatting"})),(0,i.kt)("h2",{id:"drag-drop-and-indent"},"Drag, drop, and indent"),(0,i.kt)("p",null,"Every block can be moved or indented beneath another block."),(0,i.kt)("p",null,"Hover your cursor over the gray dot, click and hold, then drag to a new location. Blocks can also be indented beneath other blocks, which you can do by dragging just a little further to the right, or to the left to un-indent."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1153921/117058635-bcc47280-acd3-11eb-8b9e-094bc247783e.gif",alt:"Drag-and-drop a block"})),(0,i.kt)("p",null,"Hit ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"Tab")," to indent the current block, or ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"Shift"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"Tab")," to un-indent it. This works for indented blocks or multiple blocks, too. Use your mouse to select them, or hit ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"Up")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"Down"),", and then drag."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1153921/117058656-c2ba5380-acd3-11eb-8770-ced1f61b2738.gif",alt:"Intenting multiple blocks"})),(0,i.kt)("h2",{id:"find-everything-in-one-command"},"Find everything in one command"),(0,i.kt)("p",null,"Hit ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"\u2318"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"k")," to search your new knowledge graph. If keyboard shortcuts aren't your thing, click the ",(0,i.kt)("strong",{parentName:"p"},"Find or Create a Page")," button in the top panel to start searching."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1153921/117059494-b682c600-acd4-11eb-82eb-6a62c6e28517.gif",alt:"Use the search to find or create pages"})),(0,i.kt)("p",null,"If you search for a page that doesn't exist, hit ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," or click ",(0,i.kt)("strong",{parentName:"p"},"Create Page")," to create a new page."),(0,i.kt)("h2",{id:"get-help-inside-athens"},"Get help inside Athens"),(0,i.kt)("p",null,"Press the question mark button on the right-side of the app toolbar to open up help within Athens!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"help-menu-1",src:n(2543).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"help-menu-2",src:n(2543).Z})))}d.isMDXComponent=!0},2543:function(e,t,n){t.Z=n.p+"assets/images/help-menu-1-04d28d5d5e3cdf2c419f83b6ad2f9c21.png"}}]);