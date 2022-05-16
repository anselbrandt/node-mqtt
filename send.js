import * as mqtt from "mqtt";

const MOSQUITTO = "mqtt://test.mosquitto.org";
const ECLIPSE = "tcp://mqtt.eclipseprojects.io:1883";
const client = mqtt.connect(ECLIPSE);

const handleSubscribe = (err) => {
  if (!err) {
    client.publish("go-mqtt/sample", "Hello from montreal");
    client.end();
  }
};

const handleConnect = () => {
  client.subscribe("presence", handleSubscribe);
};

client.on("connect", handleConnect);
