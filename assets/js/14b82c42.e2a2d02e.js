"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[217],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7336:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:1},p="$WRLD Payments API Plugin",s={unversionedId:"payments/wrld-payments-api",id:"payments/wrld-payments-api",isDocsHomePage:!1,title:"$WRLD Payments API Plugin",description:"The WRLD Payments API provides Spigot plugins with the ability to:",source:"@site/docs/payments/wrld-payments-api.md",sourceDirName:"payments",slug:"/payments/wrld-payments-api",permalink:"/payments/wrld-payments-api",editUrl:"https://github.com/NFT-Worlds/dev.nftworlds.com/edit/main/docs/payments/wrld-payments-api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Smart Contract Links",permalink:"/architecture/contracts"},next:{title:"$WRLD Commands Plugin",permalink:"/payments/wrld-payments-commands"}},c=[{value:"Plugin integration",id:"plugin-integration",children:[{value:"Include the library with the build",id:"include-the-library-with-the-build",children:[{value:"Maven",id:"maven",children:[],level:4},{value:"Gradle",id:"gradle",children:[],level:4}],level:3},{value:"Declare dependency in plugin.yml",id:"declare-dependency-in-pluginyml",children:[],level:3}],level:2},{value:"Paying players with server-to-player transactions",id:"paying-players-with-server-to-player-transactions",children:[],level:2},{value:"Configuring Ethereum and Polygon RPC endpoints",id:"configuring-ethereum-and-polygon-rpc-endpoints",children:[],level:2},{value:"Reference",id:"reference",children:[{value:'<a href="/payments-javadoc/com/nftworlds/wallet/api/WalletAPI.html" target="_blank">WalletAPI</a>',id:"walletapi",children:[],level:3},{value:'<a target="_blank" href="/payments-javadoc/com/nftworlds/wallet/objects/NFTPlayer.html">NFTPlayer</a>',id:"nftplayer",children:[],level:3},{value:'<a target="_blank" href="/payments-javadoc/com/nftworlds/wallet/event/PlayerTransactEvent.html">PlayerTransactEvent</a>',id:"playertransactevent",children:[],level:3},{value:'<a href="/payments-javadoc/com/nftworlds/wallet/event/PeerToPeerPayEvent.html" target="_blank">PeerToPeerPayEvent</a>',id:"peertopeerpayevent",children:[],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wrld-payments-api-plugin"},"$WRLD Payments API Plugin"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NFT-Worlds/WRLD-Payments-API"},"WRLD Payments API")," provides Spigot plugins with the ability to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create player payment requests from the server (such as charging for in-world experiences)"),(0,l.kt)("li",{parentName:"ul"},"Initiate player-to-player transfers"),(0,l.kt)("li",{parentName:"ul"},"Recieve information about completed transactions")),(0,l.kt)("h2",{id:"plugin-integration"},"Plugin integration"),(0,l.kt)("p",null,"This section assumes you've already ",(0,l.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/wiki/creating-a-plugin-with-maven-using-intellij-idea/"},"set up a Spigot plugin using IntelliJ and Maven"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Important: you must replace the Spigot API in your ",(0,l.kt)("inlineCode",{parentName:"strong"},"pom.xml")," with the Paper API"),". If you have an ",(0,l.kt)("inlineCode",{parentName:"p"},"org.spigotmc:spigot-api")," dependency, replace it with this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.papermc.paper</groupId>\n    <artifactId>paper-api</artifactId>\n    <version>1.17.1-R0.1-SNAPSHOT</version>\n    <scope>provided</scope>\n</dependency>\n")),(0,l.kt)("h3",{id:"include-the-library-with-the-build"},"Include the library with the build"),(0,l.kt)("h4",{id:"maven"},"Maven"),(0,l.kt)("p",null,"Open ",(0,l.kt)("inlineCode",{parentName:"p"},"pom.xml"),". Add new entries under ",(0,l.kt)("inlineCode",{parentName:"p"},"<repositories>")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"<dependencies>")," like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<repositories>\n...\n\n    <repository>\n        <id>worldql-partners</id>\n        <url>https://maven.worldql.com/releases</url>\n    </repository>\n</repositories>\n\n<dependencies>\n...\n\n    <dependency>\n        <groupId>com.nftworlds</groupId>\n        <artifactId>wrld-payments-api</artifactId>\n        <version>0.1.0</version>\n    </dependency>\n\n</dependencies>\n")),(0,l.kt)("h4",{id:"gradle"},"Gradle"),(0,l.kt)("p",null,"Open ",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle"),". Append to ",(0,l.kt)("inlineCode",{parentName:"p"},"repositories")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," clauses like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"repositories: {\n    maven {\n        url \"https://maven.worldql.com/release\"\n    }\n}\ndependencies {\n    ...\n    \n    compileOnly 'com.nftworlds:wrld-payments-api:0.1.0'\n}\n")),(0,l.kt)("h3",{id:"declare-dependency-in-pluginyml"},"Declare dependency in plugin.yml"),(0,l.kt)("p",null,"To ensure that the library gets loaded properly, we need to depend on the plugin in ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin.yml"),".\nOpen ",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/resources/plugin.yml")," and append the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'...\ndepend: ["WRLDPaymentsAPI"]\n')),(0,l.kt)("p",null,"The resulting ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin.yml")," should look like so:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"plugin.yml example",src:n(3581).Z})),(0,l.kt)("h2",{id:"paying-players-with-server-to-player-transactions"},"Paying players with server-to-player transactions"),(0,l.kt)("p",null,"If you want to reward players for achieving victory in your world, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Wallet.payPlayer")," method."),(0,l.kt)("p",null,"First, you'll need to configure your ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yml")," with a ",(0,l.kt)("inlineCode",{parentName:"p"},"server_wallet_private_key"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'server_wallet_private_key: "0xYourPrivateKey"\n')),(0,l.kt)("p",null,"You will see a warning in your server logs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[14:27:04 WARN]: A private key has been set in the plugin config! Only install plugins you trust. \n")),(0,l.kt)("p",null,"Now, you can use the Java API to send payments to players:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Player payee = Bukkit.getPlayer(someUUID);\ndouble amount = Double.parseDouble("0.25");\nString reason = "Congrats on completing the parkour challenge!";\n\nWRLDPaymentsCommands.getPayments().getNFTPlayer(payee)\n    .getPrimaryWallet().payWRLD(amount, Network.POLYGON, reason);\n')),(0,l.kt)("p",null,"The player will be immediately notified they have an incoming pending transactions. Within a minute, the player will be notified of the successful incoming payment alongside a clickable link to a block explorer.\n",(0,l.kt)("img",{alt:"Successful payment chat message",src:n(2857).Z})),(0,l.kt)("h2",{id:"configuring-ethereum-and-polygon-rpc-endpoints"},"Configuring Ethereum and Polygon RPC endpoints"),(0,l.kt)("p",null,"In order to use the WRLD Payments API, you must obtain HTTPS RPC endpoints for both Ethereum and Polygon. If you don't host your own node, we recommend ",(0,l.kt)("a",{parentName:"p",href:"https://www.alchemy.com/"},"Alchemy")," or ",(0,l.kt)("a",{parentName:"p",href:"https://infura.io/"},"Infura"),". These endpoints can be set using ",(0,l.kt)("inlineCode",{parentName:"p"},"polygon_https_rpc")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ethereum_https_rpc")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins/WRLDPaymentsAPI/config.yml"),". A correct configuration looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"polygon_https_rpc: https://polygon-mainnet.g.alchemy.com/v2/ZZhQHYourAPIKeyrIy9o5XT9M\nethereum_https_rpc: https://eth-mainnet.alchemyapi.io/v2/BJKYourAPIKeyExYsd\n")),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("p",null,"Click on any header to go to the Javadocs for that class. "),(0,l.kt)("h3",{id:"walletapi"},(0,l.kt)("a",{href:"/payments-javadoc/com/nftworlds/wallet/api/WalletAPI.html",target:"_blank"},"WalletAPI")),(0,l.kt)("p",null,"This is the main class you should use when writing a plugin. Create an instance of it and reuse it across your plugin."),(0,l.kt)("h3",{id:"nftplayer"},(0,l.kt)("a",{target:"_blank",href:"/payments-javadoc/com/nftworlds/wallet/objects/NFTPlayer.html"},"NFTPlayer")),(0,l.kt)("p",null,"The class used throughout the WRLD Payments API to represent a player and their attached wallets."),(0,l.kt)("h3",{id:"playertransactevent"},(0,l.kt)("a",{target:"_blank",href:"/payments-javadoc/com/nftworlds/wallet/event/PlayerTransactEvent.html"},"PlayerTransactEvent")),(0,l.kt)("p",null,"Listen for this event to detect completed player-to-server transactions."),(0,l.kt)("h3",{id:"peertopeerpayevent"},(0,l.kt)("a",{href:"/payments-javadoc/com/nftworlds/wallet/event/PeerToPeerPayEvent.html",target:"_blank"},"PeerToPeerPayEvent")),(0,l.kt)("p",null,"Listen for this event to detect completed peer-to-peer transactions."),(0,l.kt)("p",null,"These are just the most important classes, ",(0,l.kt)("strong",{parentName:"p"},"please explore the ",(0,l.kt)("a",{target:"_blank",href:"/payments-javadoc/index.html"},"auto-generated Javadocs")," for complete reference documentation"),"."))}u.isMDXComponent=!0},2857:function(e,t,n){t.Z=n.p+"assets/images/successfulpayment-f3acdee567661d140e19add942f92beb.png"},3581:function(e,t,n){t.Z=n.p+"assets/images/wrld-payments-api-pluginyml-8c2aca619bf3371dbd07983409a53e72.png"}}]);