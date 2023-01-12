"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[763],{8624:function(e,t,o){o.d(t,{v:function(){return i}});var n=o(7294),a=o(7674),i=Object.assign({},a.TW,{profiles:{bob:{author:"BobDotCom",avatar:"/img/bob.png",roleColor:"#2cd6f7"},robocord:{author:"Robocord",avatar:"/img/robocord.png",roleColor:"#9b59b6",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});t.Z=function(e){var t=e.options,o=void 0===t?i:t,r=e.children;return n.createElement(a.qs.Provider,{value:o},n.createElement(a.dZ,null,r))}},3522:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return m}});var n=o(7462),a=o(3366),i=(o(7294),o(3905)),r=o(7674),s=o(8624),l=["components"],d={title:"Creating Your First Bot"},p=void 0,c={unversionedId:"getting-started/creating-your-first-bot",id:"getting-started/creating-your-first-bot",title:"Creating Your First Bot",description:"Excited to create your first bot? Once you install Pycord, you can start right",source:"@site/docs/getting-started/creating-your-first-bot.mdx",sourceDirName:"getting-started",slug:"/getting-started/creating-your-first-bot",permalink:"/getting-started/creating-your-first-bot",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/getting-started/creating-your-first-bot.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1673556110,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{title:"Creating Your First Bot"},sidebar:"defaultSidebar",previous:{title:"Getting Started",permalink:"/category/getting-started"},next:{title:"Hosting Your Pycord Bot",permalink:"/getting-started/hosting-your-bot"}},u={},m=[{value:"Creating the Bot Application",id:"creating-the-bot-application",level:2},{value:"Inviting the bot",id:"inviting-the-bot",level:2},{value:"Tokens",id:"tokens",level:2},{value:"Protecting Tokens",id:"protecting-tokens",level:3},{value:"Using dotenv",id:"using-dotenv",level:4},{value:"Coding the Basics",id:"coding-the-basics",level:2},{value:"FAQ",id:"faq",level:2},{value:"How do I make prefixed commands?",id:"how-do-i-make-prefixed-commands",level:3},{value:"How do I setup modules/cogs?",id:"how-do-i-setup-modulescogs",level:3},{value:"How do I add components, such as buttons and dropdown menus, to my bot?",id:"how-do-i-add-components-such-as-buttons-and-dropdown-menus-to-my-bot",level:3}],h={toc:m};function k(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Excited to create your first bot? Once you ",(0,i.kt)("a",{parentName:"p",href:"/installation"},"install Pycord"),", you can start right\naway!"),(0,i.kt)("h2",{id:"creating-the-bot-application"},"Creating the Bot Application"),(0,i.kt)("p",null,"Just like how you need to sign up to use Discord, your bot also has to be signed up. To do this,\nyou should:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications"},"Discord Developer Portal")," and click\non ",(0,i.kt)("button",{class:"blurplebutton"},"New Application"),"."),(0,i.kt)("li",{parentName:"ol"},"Give your bot a name, and click ",(0,i.kt)("button",{class:"blurplebutton"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Now, you should see a page like this.\n",(0,i.kt)("img",{parentName:"li",src:"https://gblobscdn.gitbook.com/assets%2F-MjPk-Yu4sOq8KGrr_yG%2F-MjdW3OQnwUhacopqSWw%2F-Mjd_-mxrJCrzmaXrAg8%2Fimage.png?alt=media&token=b8e2ae6c-2290-4d37-ad7c-eb412f3fb00e",alt:"image"})),(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("button",{class:"greybutton"},"Bot")," tab on the left side of the screen."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("button",{class:"blurplebutton"},"Add bot"),"."),(0,i.kt)("li",{parentName:"ol"},"You can give it a name, change the Avatar, etc.")),(0,i.kt)("h2",{id:"inviting-the-bot"},"Inviting the bot"),(0,i.kt)("p",null,"Now, lets get the bot added to some servers. Go to the ",(0,i.kt)("button",{class:"greybutton"},"OAuth2")," tab\nin the left pane and select ",(0,i.kt)("inlineCode",{parentName:"p"},"bot")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"applications.commands")," as scopes."),(0,i.kt)("p",null,"You may want your bot to have application commands, which is what the ",(0,i.kt)("inlineCode",{parentName:"p"},"application.commands")," scope\nallows your bot to make."),(0,i.kt)("p",null,"Next, you want to choose what permissions the bot will have and select them. For now, you can just\ngive your bot the ",(0,i.kt)("inlineCode",{parentName:"p"},"administrator")," permission, which gives your bot every permission. Once you select\nyour bot's permissions, click on ",(0,i.kt)("button",{class:"blurplebutton"},"copy")," to get the bot invite link."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When your bot is all ready to go, make sure that administrator permissions aren't selected unless\nyour bot truly needs them. Try selecting only permissions the bot will need. For testing,\nAdministrator permissions are fine.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://gblobscdn.gitbook.com/assets%2F-MjPk-Yu4sOq8KGrr_yG%2F-Mk6tNY3LfDkjd6pqdpL%2F-Mk6tkdpddEWoa2jczZk%2Fimage.png?alt=media&token=52c8a29f-a798-48f8-a8c7-4ecca2681f79",alt:"image"})),(0,i.kt)("p",null,"You can use this link to invite the bot."),(0,i.kt)("h2",{id:"tokens"},"Tokens"),(0,i.kt)("p",null,'Now that you have an account for your bot, you need to log in. To log in, we need the bot\'s\npassword. All users and bots have a "token." You may think of this token as a password, as this allows\nus to log our bot into Discord.'),(0,i.kt)("p",null,'Tokens are "snowflakes." Not actual snowflakes, though. Just like how no two snowflakes in real life have the same\npattern, snowflakes in computers are unique things - no two bots have the same token - so a token is\nconsidered a snowflake. A Discord user ID is also a snowflake.'),(0,i.kt)("p",null,"Now, lets get your bot's token. To do this, you want to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go back to the ",(0,i.kt)("button",{class:"greybutton"},"Bot")," tab."),(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("button",{class:"blurplebutton"},"Copy"),' button in the "Token" section.\n',(0,i.kt)("img",{parentName:"li",src:"https://gblobscdn.gitbook.com/assets%2F-MjPk-Yu4sOq8KGrr_yG%2F-MjdbU12JISJorAZxrKH%2F-MjdbpUsapzb5n15Po5P%2Fimage.png?alt=media&token=118e259f-940a-4f6c-b3a3-c29f3a54100d",alt:"image"}))),(0,i.kt)("p",null,"Now, you have your bot's token copied to your clipboard."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Do not, under any circumstances, give your token to anyone. Even if you are contacted by someone\nclaiming to be Discord staff, do not give them your bot's token. They are lying to you to try and\ngain access to your bot. If an unauthorized user gains access to your bot's token, they can access\nyour bot and use it in malicious ways."),(0,i.kt)("p",{parentName:"admonition"},"Never push your token to GitHub or include it in your code. One way to prevent your token from\ngetting leaked is to store it in ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," files.")),(0,i.kt)("h3",{id:"protecting-tokens"},"Protecting Tokens"),(0,i.kt)("h4",{id:"using-dotenv"},"Using dotenv"),(0,i.kt)("p",null,"You can store your tokens in ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," files. This is a simple way to store sensitive information."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a file with the name ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," (only the extension, with a dot/period at the start and without a name before it)."),(0,i.kt)("li",{parentName:"ol"},"Define the token in the ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file (replace the example value with your token).",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},"TOKEN = NzkyNzE1NDU0MTk2MDg4ODQy.X-hvzA.Ovy4MCQywSkoMRRclStW4xAYK7I\n"))),(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/python-dotenv/"},(0,i.kt)("inlineCode",{parentName:"a"},"python-dotenv")),".",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python -m pip install python-dotenv\n"))),(0,i.kt)("li",{parentName:"ol"},"Load the token from the ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import dotenv\ndotenv.load_dotenv()\ntoken = str(os.getenv("TOKEN"))\n'))),(0,i.kt)("li",{parentName:"ol"},"Pass your token as parameter when running the bot.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"client.run(token)\n")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are using Git to track your bot's changes, you should create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," and add\n",(0,i.kt)("inlineCode",{parentName:"p"},".env")," to it. This stops your ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file from getting tracked along with the rest of your code, and\nwill not be pushed to a remote Git repository. As a consequence, it will stay secure on your local machine.")),(0,i.kt)("h2",{id:"coding-the-basics"},"Coding the Basics"),(0,i.kt)("p",null,"Here's an example of code you'll write with Pycord:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import discord\nimport os # default module\nfrom dotenv import load_dotenv\n\nload_dotenv() # load all the variables from the env file\nbot = discord.Bot()\n\n@bot.event\nasync def on_ready():\n    print(f"{bot.user} is ready and online!")\n\n@bot.slash_command(name = "hello", description = "Say hello to the bot")\nasync def hello(ctx):\n    await ctx.respond("Hey!")\n\nbot.run(os.getenv(\'TOKEN\')) # run the bot with the token\n')),(0,i.kt)(s.Z,{mdxType:"DiscordComponent"},(0,i.kt)(r.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(r.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"hello")),"Hey!")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Let's go through the code. First, the imports."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import discord\nimport os\nfrom dotenv import load_dotenv\n")),(0,i.kt)("p",null,"In the first line, ",(0,i.kt)("inlineCode",{parentName:"p"},"import discord"),", we import Pycord. Although you install Pycord with ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install py-cord"),", you\nimport it with ",(0,i.kt)("inlineCode",{parentName:"p"},"import discord"),". This is so it's as easy as possible when switching from Discord.py to Pycord."),(0,i.kt)("p",null,"We then import ",(0,i.kt)("inlineCode",{parentName:"p"},"os")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dotenv"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"os")," is a default module that we will use to get the token from the env file. ",(0,i.kt)("inlineCode",{parentName:"p"},"dotenv"),"\nis a module that we will use to load the env file. You installed this with ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install python-dotenv"),"."),(0,i.kt)("p",null,"Next, we load the env file with ",(0,i.kt)("inlineCode",{parentName:"p"},"load_dotenv()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"bot = discord.Bot()\n")),(0,i.kt)("p",null,"In this line, we create a new instance of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.Bot"},(0,i.kt)("inlineCode",{parentName:"a"},"discord.Bot")),".\nIn this object, we can pass various parameters for configuration purposes, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"owner_ids"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html?highlight=get_message#discord.Intents"},(0,i.kt)("inlineCode",{parentName:"a"},"intents")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'@bot.event\nasync def on_ready():\n    print(f"{bot.user} is ready and online!")\n')),(0,i.kt)("p",null,"We use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.Bot.event"},(0,i.kt)("inlineCode",{parentName:"a"},"event"))," decorator to override\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.on_ready"},(0,i.kt)("inlineCode",{parentName:"a"},"on_ready"))," function to define an\nevent that is automatically called when the bot is ready to use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'@bot.slash_command(name = "hello", description = "Say hello to the bot")\nasync def say_hello(ctx):\n    await ctx.respond("Hey!")\n')),(0,i.kt)("p",null,"Here, we use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.Bot.slash_command"},(0,i.kt)("inlineCode",{parentName:"a"},"slash_command")),"\ndecorator to define a slash command. We specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," arguments. If not\nspecified, the name of the slash command would be the function name and the command description would\nbe empty."),(0,i.kt)("p",null,"Finally, you want to run the bot using the token specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("p",null,"Now you have finished creating your first Pycord bot! What we have shown you is just the basic structure\nof a bot. You can do a lot more with Python and Pycord knowledge, as well as your imagination! Pycord\nwill not limit your bot's abilities."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The part where we load the token from the environmental variables is not required. You may use another way to keep your token secure, or, although not recommended, simply specify the token normally as a string, as shown below."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"A Basic Bot without securing the token"),(0,i.kt)("div",{class:"markdown-body"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import discord\n\nbot = discord.Bot()\n\n@bot.event\nasync def on_ready():\n    print(f"{bot.user} is ready and online!")\n\n@bot.slash_command(name = "hello", description = "Say hello to the bot")\nasync def hello(ctx):\n    await ctx.send("Hey!")\n\nbot.run("TOKEN")\n'))))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"how-do-i-make-prefixed-commands"},"How do I make prefixed commands?"),(0,i.kt)("p",null,"Prefixed commands are an older method of creating bot commands that listen for messages and replies\nif the message starts with a certain character. You can read ",(0,i.kt)("a",{parentName:"p",href:"/extensions/commands/prefixed-commands"},"this page"),"\nto learn more about prefixed commands."),(0,i.kt)("h3",{id:"how-do-i-setup-modulescogs"},"How do I setup modules/cogs?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../popular-topics/cogs"},"Cogs")," are a great way to organize your commands by putting them into\ngroups called cogs. Cogs are separate files that your bot loads to get the commands inside.\nYou can read more about cogs, as well as learn how to use them and their benefits,\n",(0,i.kt)("a",{parentName:"p",href:"../popular-topics/cogs"},"here"),"."),(0,i.kt)("h3",{id:"how-do-i-add-components-such-as-buttons-and-dropdown-menus-to-my-bot"},"How do I add components, such as buttons and dropdown menus, to my bot?"),(0,i.kt)("p",null,"Pycord makes it very easy to use Message Commands with your bot by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"discord.ui")," module.\nTo learn more, read about Message Commands in our ",(0,i.kt)("a",{parentName:"p",href:"../interactions"},"interactions directory"),"."),(0,i.kt)("admonition",{title:"Related Topics",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../extensions/commands/prefixed-commands"},"Prefixed Commands")))))}k.isMDXComponent=!0}}]);