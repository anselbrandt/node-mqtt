import * as mqtt from "mqtt";

const MOSQUITTO = "mqtt://test.mosquitto.org";
const ECLIPSE = "tcp://mqtt.eclipseprojects.io:1883";
const client = mqtt.connect(ECLIPSE);

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
  client.subscribe("go-mqtt/sample", handleSubscribe);
};

client.on("connect", handleConnect);
client.on("message", handleIncoming);
//   client.end();
