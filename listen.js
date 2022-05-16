/*
mqtt.eclipseprojects.io

This is a public test MQTT broker service. It currently listens on the following ports:

1883 : MQTT over unencrypted TCP
8883 : MQTT over encrypted TCP
80 : MQTT over unencrypted WebSockets (note: URL must be /mqtt )
443 : MQTT over encrypted WebSockets (note: URL must be /mqtt )
*/

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
