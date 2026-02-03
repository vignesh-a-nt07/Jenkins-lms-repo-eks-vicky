import client from "prom-client";

// collect default Node.js metrics
client.collectDefaultMetrics({
  prefix: "node_",
});

export default client;
