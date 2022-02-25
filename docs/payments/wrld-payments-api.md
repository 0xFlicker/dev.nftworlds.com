---
sidebar_position: 1
---

# $WRLD Payments API Plugin

The [WRLD Payments API](https://github.com/NFT-Worlds/WRLD-Payments-API) provides Spigot plugins with the ability to:

- Create player payment requests from the server (such as charging for in-world experiences)
- Initiate player-to-player transfers
- Recieve information about completed transactions

## Plugin integration
This section assumes you've already [set up a Spigot plugin using IntelliJ and Maven](https://www.spigotmc.org/wiki/creating-a-plugin-with-maven-using-intellij-idea/).

**Important: you must replace the Spigot API in your `pom.xml` with the Paper API**. If you have an `org.spigotmc:spigot-api` dependency, replace it with this:
```xml
<dependency>
    <groupId>io.papermc.paper</groupId>
    <artifactId>paper-api</artifactId>
    <version>1.17.1-R0.1-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

### Include the library with the build

#### Maven

Open `pom.xml`. Add new entries under `<repositories>` and `<dependencies>` like so:
```xml
<repositories>
...

    <repository>
        <id>worldql-partners</id>
        <url>https://maven.worldql.com/releases</url>
    </repository>
</repositories>

<dependencies>
...

    <dependency>
        <groupId>com.nftworlds</groupId>
        <artifactId>wrld-payments-api</artifactId>
        <version>0.1.0</version>
    </dependency>

</dependencies>
```

#### Gradle

Open `build.gradle`. Append to `repositories` and `dependencies` clauses like so:

```groovy
repositories: {
    maven {
        url "https://maven.worldql.com/release"
    }
}
dependencies {
    ...
    
    compileOnly 'com.nftworlds:wrld-payments-api:0.1.0'
}
```

### Declare dependency in plugin.yml

To ensure that the library gets loaded properly, we need to depend on the plugin in `plugin.yml`.
Open `src/main/resources/plugin.yml` and append the following:

```yaml
...
depend: ["WRLDPaymentsAPI"]
```

The resulting `plugin.yml` should look like so:

![plugin.yml example](/img/wrld-payments-api-pluginyml.png)

## Reference

Click on any header to go to the Javadocs for that class. 

### <a href="/payments-javadoc/com/nftworlds/wallet/api/WalletAPI.html" target="_blank">WalletAPI</a>
This is the main class you should use when writing a plugin. Create an instance of it and reuse it across your plugin.

### <a target="_blank" href="/payments-javadoc/com/nftworlds/wallet/objects/NFTPlayer.html">NFTPlayer</a>
The class used throughout the WRLD Payments API to represent a player and their attached wallets.

### <a target="_blank" href="/payments-javadoc/com/nftworlds/wallet/event/PlayerTransactEvent.html">PlayerTransactEvent</a>
Listen for this event to detect completed player-to-server transactions.

### <a href="/payments-javadoc/com/nftworlds/wallet/event/PeerToPeerPayEvent.html" target="_blank">PeerToPeerPayEvent</a>
Listen for this event to detect completed peer-to-peer transactions.

These are just the most important classes, **please explore the <a target="_blank" href="/payments-javadoc/index.html">auto-generated Javadocs</a> for complete reference documentation**.