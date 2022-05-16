import * as mqtt from "mqtt";
const client = mqtt.connect("mqtt://test.mosquitto.org");

const handleSubscribe = (err) => {
  if (!err) {
    client.publish("presence", "Hello from montreal");
    client.end();
  }
};

const handleConnect = () => {
  client.subscribe("presence", handleSubscribe);
};

client.on("connect", handleConnect);
