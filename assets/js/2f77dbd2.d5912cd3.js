"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[393],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},817:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),o=n(3366),l=(n(7294),n(3905)),r=["components"],i={sidebar_position:1},s="Selling Plots of Land for $WRLD",p={unversionedId:"example-projects/plots",id:"example-projects/plots",isDocsHomePage:!1,title:"Selling Plots of Land for $WRLD",description:"The source code for this example project can be found at https://github.com/NFT-Worlds/WRLD-Example-Projects/tree/main/wrld-buy-plot.",source:"@site/docs/example-projects/plots.md",sourceDirName:"example-projects",slug:"/example-projects/plots",permalink:"/example-projects/plots",editUrl:"https://github.com/NFT-Worlds/dev.nftworlds.com/edit/main/docs/example-projects/plots.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Creating and processing transactions",permalink:"/payments/tx-flow"},next:{title:"NPC Shopkeeper",permalink:"/example-projects/npc"}},c=[{value:"plugin.yml",id:"pluginyml",children:[],level:2},{value:"Transaction payload",id:"transaction-payload",children:[],level:2},{value:"Listing a plot for sale",id:"listing-a-plot-for-sale",children:[{value:"Finding plots from player location",id:"finding-plots-from-player-location",children:[],level:3}],level:2},{value:"Buying a plot",id:"buying-a-plot",children:[],level:2},{value:"Handling the PlayerTransactEvent",id:"handling-the-playertransactevent",children:[],level:2},{value:"Setting up a test server",id:"setting-up-a-test-server",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"selling-plots-of-land-for-wrld"},"Selling Plots of Land for $WRLD"),(0,l.kt)("p",null,"The source code for this example project can be found at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NFT-Worlds/WRLD-Example-Projects/tree/main/wrld-buy-plot"},"https://github.com/NFT-Worlds/WRLD-Example-Projects/tree/main/wrld-buy-plot"),"."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Get your hands dirty to learn quicker! Clone the examples repository and open this project using IntelliJ. Then run Maven ",(0,l.kt)("inlineCode",{parentName:"p"},"package")," and install the plugin on a server."))),(0,l.kt)("p",null,"Here's a video of what this example project does:"),(0,l.kt)("video",{controls:!0,src:"/img/2022-02-22.out.mp4"}),(0,l.kt)("h2",{id:"pluginyml"},"plugin.yml"),(0,l.kt)("p",null,"This example has the following ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin.yml")," file which defines an admin-only command for selling a plot and a ",(0,l.kt)("inlineCode",{parentName:"p"},"/buyplot")," command accessible to everyone."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"name: wrld-buy-plot\nversion: 1.0\nauthors: [Jackson, ArkDev]\nmain: com.nftworlds.wrldplots.WRLDPlots\napi-version: 1.17\ndepend: [WRLDPaymentsAPI, WorldGuard]\n\ncommands:\n  sellplot:\n    description: List the plot you're standing on up for sale.\n    usage: /sellplot\n    permission: wrldplots.sellplot\n    default: op\n  buyplot:\n    description: Buy the plot you're standing on.\n    usage: /buyplot\n    default: true\n\n\n")),(0,l.kt)("h2",{id:"transaction-payload"},"Transaction payload"),(0,l.kt)("p",null,"This project defines a transaction payload called ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NFT-Worlds/WRLD-Example-Projects/blob/main/wrld-buy-plot/src/main/java/com/nftworlds/wrldplots/PlayerBuyPlotPayload.java"},"PlayerBuyPlotPayload"),". It contains a single member variable that contains a ",(0,l.kt)("inlineCode",{parentName:"p"},"ProtectedRegion")," referring to the plot the player is purchasing."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class PlayerBuyPlotPayload {\n    public ProtectedRegion plotToBuy;\n\n    public PlayerBuyPlotPayload(ProtectedRegion plotToBuy) {\n        this.plotToBuy = plotToBuy;\n    }\n}\n")),(0,l.kt)("h2",{id:"listing-a-plot-for-sale"},"Listing a plot for sale"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This example plugin does not create plots. You'll need to create them using the standard WorldGuard commands prior to selling them."))),(0,l.kt)("h3",{id:"finding-plots-from-player-location"},"Finding plots from player location"),(0,l.kt)("p",null,"We need to find the plot a player is standing on, so we define the following class that makes some WorldGuard API code reusable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class PlotUtility {\n    public static ProtectedRegion getPlotAtLocation(Location l) {\n        RegionContainer container = WorldGuard.getInstance().getPlatform().getRegionContainer();\n        RegionManager regions = container.get(BukkitAdapter.adapt(l.getWorld()));\n        BlockVector3 position = BlockVector3.at(l.getX(), l.getY(), l.getZ());\n        if (regions == null) {\n            return null;\n        }\n        ApplicableRegionSet set = regions.getApplicableRegions(position);\n\n        // If we're at an intersection of multiple plots or not on a plot, abort.\n        if (set.size() != 1) {\n            return null;\n        }\n\n        return set.iterator().next();\n\n    }\n}\n")),(0,l.kt)("p",null,"Now we're ready to implement our ",(0,l.kt)("inlineCode",{parentName:"p"},"CommandExecutor")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"/sellplot"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class CommandListPlotForSale implements CommandExecutor {\n    // Persisting this data between server reboots is left as an exercise to the developer.\n    private static final HashMap<String, Double> plotsForSaleAndPrice = new HashMap<>();\n\n    public static Double getPlotPrice(String plotId) {\n        return plotsForSaleAndPrice.get(plotId);\n    }\n\n    public boolean onCommand(@NotNull CommandSender sender, @NotNull Command command, @NotNull String label, @NotNull String[] args) {\n        if (args.length != 1) {\n            sender.sendMessage("Usage: /sellplot <amount>");\n            return false;\n        }\n\n        Double amount = Double.valueOf(args[0]);\n        // get the plot\n        ProtectedRegion region = PlotUtility.getPlotAtLocation(((Player) sender).getLocation());\n        if (region != null) {\n            String plotId = region.getId();\n\n            sender.sendMessage("You have listed " + plotId + " for sale for " + amount + " WLRD.");\n\n            region.setFlag(Flags.GREET_MESSAGE, "&aThis plot is for sale for &6" + amount + " WRLD&f. Run /buyplot to purchase it!");\n            plotsForSaleAndPrice.put(plotId, amount);\n\n            return true;\n        }\n        sender.sendMessage("There is no plot at your current location to sell!");\n        return false;\n    }\n}\n')),(0,l.kt)("h2",{id:"buying-a-plot"},"Buying a plot"),(0,l.kt)("p",null,"Now that we an admin-only command for listing a plot, we need to implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"CommandExecutor")," for buying it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class CommandBuyPlot implements CommandExecutor {\n    public boolean onCommand(@NotNull CommandSender sender, @NotNull Command command, @NotNull String label, @NotNull String[] args) {\n        ProtectedRegion region = PlotUtility.getPlotAtLocation(((Player)sender).getLocation());\n        if (region != null) {\n            Double price = CommandListPlotForSale.getPlotPrice(region.getId());\n            if (price == null) {\n                sender.sendMessage("Error: There is no plot for sale here!");\n                return false;\n            }\n            PlayerBuyPlotPayload payload = new PlayerBuyPlotPayload(region);\n            WRLDPlots.getPayments().getNFTPlayer((Player) sender).requestWRLD(\n                    price, Network.POLYGON, "Purchasing plot " + region.getId(), payload\n            );\n        }\n        return true;\n    }\n}\n')),(0,l.kt)("h2",{id:"handling-the-playertransactevent"},"Handling the PlayerTransactEvent"),(0,l.kt)("p",null,"Now that we've implemented the command which sends a payment request, we need to write the handler that processes the completed transaction:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class PlayerTransactEventListener implements Listener {\n    @EventHandler\n    public void onPlayerTransact(PlayerTransactEvent<?> e) {\n        if (e.getPayload() instanceof PlayerBuyPlotPayload payload) {\n            e.getPlayer().playSound(e.getPlayer().getLocation(), Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 15, 0.5F);\n            e.getPlayer().sendMessage("Your transaction has been finalized, enjoy your new plot!");\n            payload.plotToBuy.getOwners().clear();\n            payload.plotToBuy.getOwners().addPlayer(WorldGuardPlugin.inst().wrapPlayer(e.getPlayer()));\n            payload.plotToBuy.setFlag(Flags.GREET_MESSAGE, null);\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"setting-up-a-test-server"},"Setting up a test server"),(0,l.kt)("p",null,"Once you've compiled your plugin, place it in the ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins")," folder of a Paper server alongside the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NFT-Worlds/WRLD-Payments-API/releases"},"WRLD-Payments-API jarfile which you can download from GitHub"),"."))}u.isMDXComponent=!0}}]);