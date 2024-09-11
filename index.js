const { ClientShard } = require("aoi.js");

const token = "Discord Bot Token"

const sharder = new ClientShard("./aoiClient.js", {
    token: token,
    totalShards: 1
});

sharder.on("shardCreate", (shard) => console.log(`Launched shard ${shard.id}`));
sharder.startProcess();
