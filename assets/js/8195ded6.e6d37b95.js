"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[4260],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?o.createElement(h,s(s({ref:t},d),{},{components:n})):o.createElement(h,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2204:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],i={title:"Cogs"},l=void 0,c={unversionedId:"popular-topics/cogs",id:"popular-topics/cogs",title:"Cogs",description:"Cogs, often known as modules or extensions, are used to organize commands into groups. This is useful",source:"@site/docs/popular-topics/cogs.mdx",sourceDirName:"popular-topics",slug:"/popular-topics/cogs",permalink:"/popular-topics/cogs",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/popular-topics/cogs.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1673556110,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{title:"Cogs"},sidebar:"defaultSidebar",previous:{title:"Popular Topics",permalink:"/category/popular-topics"},next:{title:"Error Handling",permalink:"/popular-topics/error-handling"}},d={},m=[{value:"Getting Started",id:"getting-started",level:2},{value:"Cog Rules",id:"cog-rules",level:2},{value:"The <code>self</code> variable",id:"the-self-variable",level:3},{value:"Creating Commands",id:"creating-commands",level:3},{value:"Events",id:"events",level:3}],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cogs, often known as modules or extensions, are used to organize commands into groups. This is useful\nfor grouping commands that have the same general idea (such as moderation commands). This also helps\nto avoid making your bot's files messy and cluttered."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"First, you'll need to create a folder to store your cogs, eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"cogs/"),"."),(0,r.kt)("p",null,"Then, create a file inside the folder, eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"cogs/greetings.py"),". By convention, the file name should\nbe the same as the name of the cog or module."),(0,r.kt)("p",null,"We can then create the cog."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="./cogs/greetings.py"',title:'"./cogs/greetings.py"'},"import discord\nfrom discord.ext import commands\n\nclass Greetings(commands.Cog): # create a class for our cog that inherits from commands.Cog\n    # this class is used to create a cog, which is a module that can be added to the bot\n\n    def __init__(self, bot): # this is a special method that is called when the cog is loaded\n        self.bot = bot\n\n    @commands.command() # creates a prefixed command\n    async def hello(self, ctx): # all methods now must have both self and ctx parameters\n        await ctx.send('Hello!')\n\n    @discord.slash_command() # we can also add application commands\n    async def goodbye(self, ctx):\n        await ctx.respond('Goodbye!')\n\n    @discord.user_command()\n    async def greet(self, ctx, member: discord.Member):\n        await ctx.respond(f'{ctx.author.mention} says hello to {member.mention}!')\n\n    @commands.Cog.listener() # we can add event listeners to our cog\n    async def on_member_join(self, member): # this is called when a member joins the server\n    # you must enable the proper intents\n    # to access this event.\n    # See the Popular-Topics/Intents page for more info\n        await member.send('Welcome to the server!')\n\ndef setup(bot): # this is called by Pycord to setup the cog\n    bot.add_cog(Greetings(bot)) # add the cog to the bot\n")),(0,r.kt)("p",null,"You can add any number of commands to your cog, as well as event listeners. However, this code will\nnot work on its own. In your main bot file, you must add the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"bot.load_extension('cogs.greetings')\n")),(0,r.kt)("p",null,"This loads the file ",(0,r.kt)("inlineCode",{parentName:"p"},"cogs/greetings.py")," and adds it to the bot.\nThe argument of ",(0,r.kt)("inlineCode",{parentName:"p"},"load_extension")," should be your cog's path (eg. cogs/greetings.py) without the file\nextension and with the ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},".")),(0,r.kt)("p",null,"If you have multiple cogs, you can add them all at once by adding the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"cogs_list = [\n    'greetings',\n    'moderation',\n    'fun',\n    'owner'\n]\n\nfor cog in cogs_list:\n    bot.load_extension(f'cogs.{cog}')\n")),(0,r.kt)("h2",{id:"cog-rules"},"Cog Rules"),(0,r.kt)("p",null,"When using a cog instead of the main file, there are some changes you have to make to your code. This\nis because cogs work slightly different from a regular file."),(0,r.kt)("h3",{id:"the-self-variable"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"self")," variable"),(0,r.kt)("p",null,"The self variable is a variable that represents a class. In the case of cogs, ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," represents\nthe cog. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"__init__")," function, you can see that we have ",(0,r.kt)("inlineCode",{parentName:"p"},"self.bot = bot"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"bot")," represents your\n",(0,r.kt)("inlineCode",{parentName:"p"},"discord.Bot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"discord.ext.commands.Bot")," instance, which is used for some functions. "),(0,r.kt)("p",null,"This means that instead of using functions that would usually be accessed via ",(0,r.kt)("inlineCode",{parentName:"p"},"bot"),", you now need\nto access them via ",(0,r.kt)("inlineCode",{parentName:"p"},"self.bot")),(0,r.kt)("p",null,"Because we're in a class, all of our commands are methods of that class. Because of this, all of our\nfunctions need to have ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," as the first parameter, where ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," is the cog. Without this, we\nwouldn't be able to access our bot instance."),(0,r.kt)("h3",{id:"creating-commands"},"Creating Commands"),(0,r.kt)("p",null,"When creating prefixed commands, your decorator would usually be something like ",(0,r.kt)("inlineCode",{parentName:"p"},"@bot.command()"),". If you're using\ncogs, this isn't the case. In a cog, you can't access the bot instance outside of functions, so to\nregister a function as a command, you must instead use ",(0,r.kt)("inlineCode",{parentName:"p"},"@commands.command()"),"."),(0,r.kt)("p",null,"Similar to prefixed commands, you'll have to use either the ",(0,r.kt)("inlineCode",{parentName:"p"},"@discord.slash_command()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@discord.user_command()"),",\nor ",(0,r.kt)("inlineCode",{parentName:"p"},"@discord.message_command()")," decorators for Application Commands."),(0,r.kt)("p",null,"Also, when creating a command, make sure that it is indented. If we want a command to be actually\ninside a cog, it has to be inside your cog's class. If the command is not inside the cog,\nyour command becomes useless."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"When creating events, you can no longer use ",(0,r.kt)("inlineCode",{parentName:"p"},"@bot.event")," as a decorator. This is because we cannot\naccess the ",(0,r.kt)("inlineCode",{parentName:"p"},"bot")," variable outside a function. To make an event, you have to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ext.commands"),"\nmethod, ",(0,r.kt)("inlineCode",{parentName:"p"},"@commands.Cog.listener()"),". Events also need ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," as their first parameter."),(0,r.kt)("p",null,"And that's it! Cogs are a simple and easy way of organizing your code. Now you can check out how to\ncreate a help command ",(0,r.kt)("a",{parentName:"p",href:"../extensions/commands/help-command"},"here"),"."),(0,r.kt)("admonition",{title:"Related Topics",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../extensions/commands/help-command"},"Creating a Help Command")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../getting-started/rules-and-common-practices"},"Rules and Common Practices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../extensions/commands/prefixed-commands"},"Prefixed Commands")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../interactions#application-commands"},"Application Commands")))))}u.isMDXComponent=!0}}]);