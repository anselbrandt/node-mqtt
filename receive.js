import * as mqtt from "mqtt";
const client = mqtt.connect("mqtt://test.mosquitto.org");

const handleSubscribe = (err) => {
  if (!err) {
    console.log("connected...");
  }
};

const handleIncoming = (topic, message) => {
  console.log(
    "topic: ",
    topic.toString() + ",",
    "message: ",
    message.toString()
  );
};

const handleConnect = () => {
  client.subscribe("presence", handleSubscribe);
};

client.on("connect", handleConnect);
client.on("message", handleIncoming);
//   client.end();
