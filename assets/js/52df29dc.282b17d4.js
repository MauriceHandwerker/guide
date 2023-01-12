"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[9436],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(o),m=n,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return o?a.createElement(h,i(i({ref:t},u),{},{components:o})):a.createElement(h,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},1029:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=o(7462),n=o(3366),r=o(7294),i=o(3905),s=["components"],l={title:"Rules and Common Practices",description:"All about the rules and common practices for coding a Discord bot"},d="Rules and Common Practices of Creating a Bot",u={unversionedId:"getting-started/rules-and-common-practices",id:"getting-started/rules-and-common-practices",title:"Rules and Common Practices",description:"All about the rules and common practices for coding a Discord bot",source:"@site/docs/getting-started/rules-and-common-practices.mdx",sourceDirName:"getting-started",slug:"/getting-started/rules-and-common-practices",permalink:"/getting-started/rules-and-common-practices",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/getting-started/rules-and-common-practices.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1673556110,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{title:"Rules and Common Practices",description:"All about the rules and common practices for coding a Discord bot"},sidebar:"defaultSidebar",previous:{title:"More Features",permalink:"/getting-started/more-features"},next:{title:"Discord Interactions",permalink:"/interactions/"}},c={},p=[{value:"Rules",id:"rules",level:2},{value:"Terms of Service and Privacy Policy",id:"terms-of-service-and-privacy-policy",level:3},{value:"Developer Policy",id:"developer-policy",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Bot Sharding",id:"bot-sharding",level:3},{value:"Verification",id:"verification",level:3},{value:"Subclassing",id:"subclassing",level:3},{value:"Your Bot&#39;s Token",id:"your-bots-token",level:3},{value:"Backups",id:"backups",level:3},{value:"Organization and Cleanliness",id:"organization-and-cleanliness",level:3},{value:"Databases",id:"databases",level:3},{value:"MongoDB",id:"mongodb",level:4},{value:"SQLite",id:"sqlite",level:4},{value:"PostgreSQL",id:"postgresql",level:4},{value:"MariaDB",id:"mariadb",level:4}],m={toc:p};function h(e){var t=e.components,o=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rules-and-common-practices-of-creating-a-bot"},"Rules and Common Practices of Creating a Bot"),(0,i.kt)("p",null,"When creating almost anything, there's always a certain set of rules to follow or common practices,\nsuch as ",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/dev/peps/pep-0008/"},"PEP8")," for Python. This applies to creating bots\nwith Pycord as well."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Most of these rules and common practices are only applicable for\n",(0,i.kt)("a",{parentName:"p",href:"https://support.discord.com/hc/en-us/articles/360040720412-Bot-Verification-and-Data-Whitelisting"},"verified bots"),",\nbut it's good to follow them nonetheless.")),(0,i.kt)("h2",{id:"rules"},"Rules"),(0,i.kt)("p",null,"There are rules for creating bots, and most of these are required by Discord themselves, not us at\nPycord. Not following these rules may get your bot denied for verification."),(0,i.kt)("h3",{id:"terms-of-service-and-privacy-policy"},"Terms of Service and Privacy Policy"),(0,i.kt)("p",null,"Starting at some point in time, Discord has made providing a privacy policy with your bot a requirement.\nThis is so that Discord knows exactly what you are doing with its users' data."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You don't need a lawyer or anyone special to write out a privacy policy for you, nor do you need\nit approved by some official entity. Simply writing out how you are going to use Discord user\ninformation neatly is all you need to do.")),(0,i.kt)("p",null,"Providing a Terms of Service for your bot is optional, though usually a best practice. It tells users\nwhat they can and cannot do with your service, and makes it easier to settle disputes if someone\ndisagrees with you."),(0,i.kt)("p",null,"Read more in Discord's official ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/legal"},"Legal Docs"),"."),(0,i.kt)("h3",{id:"developer-policy"},"Developer Policy"),(0,i.kt)("p",null,"We could list almost every rule about using Discord's API here. ",(0,i.kt)("em",{parentName:"p"},"Or")," we could simply link Discord's\nDeveloper Policy to make it easier on us. You can find Discord's Developer Policy\n",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/policy"},"here"),". This outlines what you can and cannot do with\nDiscord's Developer API. And, don't worry, it's completely readable and understandable."),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("p",null,"Now, here's something we ",(0,i.kt)("em",{parentName:"p"},"can't")," simply link an article for. We're going to discuss the best practices\nof creating a Discord bot with Pycord."),(0,i.kt)("h3",{id:"bot-sharding"},"Bot Sharding"),(0,i.kt)("p",null,"To any new or maybe even experienced bot developer, sharding a bot sounds beneficial once you hear\nabout it. I'm here to tell you that it isn't a good idea to shard your bot."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Wait a minute, why would it be an option if it wasn't a good idea?")," It's simple. I lied. Sort of.\nI'm not going to go into the details of sharding a bot, so you can read about it on\n",(0,i.kt)("a",{parentName:"p",href:"../Popular-Topics/sharding"},"this page"),". Sharding is the process of taking your bot\nand breaking it up into small pieces, so it's easier to perform tasks. This is very useful for large\nbots, as it makes them faster and more reliable. Sharding is not a good practice for small bots."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Discord will notify you once it is time to shard your bot, and will eventually force you to do so.")),(0,i.kt)("p",null,"At the very least, wait for one thousand servers to shard your bot. If you shard your bot while it's\nsmall, you'll just be wasting resources and possibly making your bot slower."),(0,i.kt)("h3",{id:"verification"},(0,i.kt)("a",{parentName:"h3",href:"https://support.discord.com/hc/en-us/articles/360040720412-Bot-Verification-and-Data-Whitelisting"},"Verification")),(0,i.kt)("p",null,"Verifying your Discord bot is something every developer would like to achieve. It shows that your bot\nis in more than 75 servers. It's generally a good idea to try to get your bot verified as soon as\npossible. We're talking at 76 servers soon. This is because Discord can be somewhat slow in terms of\nbot verification, so verifying as soon as possible gives them enough time to verify before your bot\nreaches the 100 server cap. If a bot is not verified, it cannot grow beyond 100 servers."),(0,i.kt)("p",null,"It's also a good idea to only apply for the privileged intents that you need. Applying for intents\nyour bot doesn't use wastes both your time and Discord's time, as your privileged intent request\nwill be denied simply because you applied for an intent you didn't need."),(0,i.kt)("h3",{id:"subclassing"},"Subclassing"),(0,i.kt)("p",null,"While it may take some time, subclassing a bot is very worth it. Once again, this was explained\nelsewhere, so I won't go into the details, but I felt it fit here, so I put it here."),(0,i.kt)("p",null,"Subclassing a bot makes it more flexible and allows it to do a lot more. Read more about subclassing\nbots ",(0,i.kt)("a",{parentName:"p",href:"../Popular-Topics/subclassing-bots"},"here")),(0,i.kt)("h3",{id:"your-bots-token"},"Your Bot's Token"),(0,i.kt)("p",null,"Your bot is only able to be run for one reason: its token. If you followed the\n",(0,i.kt)("a",{parentName:"p",href:"creating-your-first-bot"},"guide for creating your first bot"),", you should already know a bit about\nkeeping that token safe. That's exactly what you want to do."),(0,i.kt)("p",null,"Sharing your token is never good. If someone evil gets a hold of your token, they can do terrible things,\nsuch as making your bot leave all of its servers, spamming all the members the bot has contact with,\nand even manipulating the servers the bot is in, if given the permissions. That's why it's very important\nto keep your token safe. To learn how to do so, read ",(0,i.kt)("a",{parentName:"p",href:"creating-your-first-bot#tokens"},"this part")," of\nthe Creating Your First Bot guide."),(0,i.kt)("h3",{id:"backups"},"Backups"),(0,i.kt)("p",null,"You always want to back up your bot's data. This includes both its code ",(0,i.kt)("em",{parentName:"p"},"and")," its databases. This way,\nif something tragic happens, such as your host failing a data migration or you breaking your Raspberry\nPi's SD card that held your bot, you'll still have its precious user data. I have a small program for\nmy bot that uploads its databases to a remote GitHub repository periodically to not lose any data.\nIt may be smarter to find a bit more of a reliable way to do so, though."),(0,i.kt)("p",null,"Public or private, having a local Git repository connected to a remote one is a good idea for making\nalmost any application. For a lot of developers, it's like saving your work. If you do this, all of\nyour bot's code won't be lost if your computer spontaneously combusts, or you smash it to bits from\nanger. You can simply grab the backup computer that everyone has lying around, and you're back\nin business. "),(0,i.kt)("h3",{id:"organization-and-cleanliness"},"Organization and Cleanliness"),(0,i.kt)("p",null,"It is ",(0,i.kt)("em",{parentName:"p"},"extremely")," important to have organized code. This includes commands, objects, functions,\nand classes. If you don't have organized code, it will get progressively harder for you to recognize\nit, and others won't be able to decipher it. "),(0,i.kt)("p",null,"Make sure you utilize indents and spaces, as these are very important in making your code readable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Bad Spacing"',title:'"Bad','Spacing"':!0},"class MyClass:\n    async def add(self,num1,num2):\n        return num1+num2\n    async def sub(self,num1,num2):\n        return num1-num2\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Good Spacing"',title:'"Good','Spacing"':!0},"class MyClass:\n    async def add(self, num1, num2):\n        return num1 + num2\n\n    async def sub(self, num1, num2):\n        return num1 - num2\n")),(0,i.kt)("p",null,"See the difference? Now, which one looks more readable? Hopefully, you answered the second example.\nPython's ",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/dev/peps/pep-0008/"},"PEP8")," is a PEP (",(0,i.kt)("strong",{parentName:"p"},"Python Enhancement Proposal"),")\nstyle guide for Python. It is the style guide that is used by most Python developers and programmers,\nproviding a universal way to write and read code."),(0,i.kt)("h3",{id:"databases"},"Databases"),(0,i.kt)("p",null,"As your bot grows, you'll inevitably have to store data for your bot. Now, most people would probably just load up some\nJSON file on boot into a ",(0,i.kt)("inlineCode",{parentName:"p"},"dict"),", modify it in memory then write to the file. However, JSON files aren't the solution.\nWhen you write to a JSON file, it rewrites the entire file instead of just rewriting the section that changed. It's also\na configuration file format, not a storage file format."),(0,i.kt)("p",null,"Instead of using a JSON file or some other related format, you should instead use a database. There are many databases\nout there, like MongoDB, SQLite, and PostgreSQL to name a few."),(0,i.kt)("p",null,"All of these databases I named do the job well, and which one you use depends on what features you want out of a database."),(0,i.kt)(r.Fragment,null),(0,i.kt)("h4",{id:"mongodb"},"MongoDB"),(0,i.kt)("p",null,"MongoDB is a JSON-like format and if you already use JSON files, it shouldn't be too hard to migrate over to."),(0,i.kt)("h4",{id:"sqlite"},"SQLite"),(0,i.kt)("p",null,"SQLite is based on SQL, a common relational data model. It's a lightweight, easy-to-use, portable database solution that\nworks entirely on files. However, if for some reason you cannot read/write to and from a file, and you need to manage\nlots of data, SQLite might not be for you."),(0,i.kt)("p",null,"While SQLite is a part of the Python Standard Library as the ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlite3")," package, we recommend not using it as it is\nsynchronous and blocking. You should use an asynchronous alternative, such as ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/aiosqlite/"},(0,i.kt)("inlineCode",{parentName:"a"},"aiosqlite")),"."),(0,i.kt)("h4",{id:"postgresql"},"PostgreSQL"),(0,i.kt)("p",null,"PostgreSQL is also based on SQL, but it also has more features than SQLite. It's compliant with the SQL standard,\nopen-source, and extensible. However, it's not that fast or simple compared to SQLite."),(0,i.kt)("h4",{id:"mariadb"},"MariaDB"),(0,i.kt)("p",null,"MariaDB is also based on SQL and is a fork of the MySQL project. It's compliant with the SQL standard, it's also open\nsource and is a complete drop-in replacement for any code with MySQL. You don't even need to change what package you're\nusing!"))}h.isMDXComponent=!0}}]);