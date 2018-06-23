export class ControlFlIO {
  constructor(fl = 1, kr = 1) {
    this.fl = fl;
    this.kr = kr;
  }
}

export class ControlTchIO {
  constructor(tch = 1, kr = 1, r168 = 'MN825') {
    this.tch = tch;
    this.kr = kr;
    this.r168 = r168;
  }
}

export class ApdConfig {
  constructor(
    controlFl = { input: new ControlFlIO(), output: new ControlFlIO() },
    controlTch = { input: new ControlTchIO(), output: new ControlTchIO() },
  ) {
    this.controlFl = controlFl;
    this.controlTch = controlTch;
  }
}

export class R168Settings {
  constructor(timeOutputCall = 1) {
    this.timeOutputCall = timeOutputCall;
  }
}

export class Channel {
  constructor({
    selfSipPort = 5061, voicePort = 50000, selfSipName = 1000,
    typeR168 = 'R-168', r168Settings = new R168Settings(),
    subscriber1 = 1000, subscriber2 = 1000,
    subscriber3 = 1000, subscriber4 = 1000,
  } = {}) {
    this.selfSipPort = selfSipPort;
    this.voicePort = voicePort;
    this.selfSipName = selfSipName;
    this.typeR168 = typeR168;
    this.r168Settings = r168Settings;

    this.subscriber1 = subscriber1;
    this.subscriber2 = subscriber2;
    this.subscriber3 = subscriber3;
    this.subscriber4 = subscriber4;
  }
}

export class Device {
  constructor({
    name = 'MN825', serverIp = '127.0.0.1', serverSipPort = 5060,
    selfIp = '127.0.0.1', subnetMask = '255.255.255.0', gateway = '127.0.0.1',
    r168ConfigPort = '10000', apdConfig = new ApdConfig(),
    channel1 = new Channel(), channel2 = new Channel(),
  } = {}) {
    this.name = name;
    this.serverIp = serverIp;
    this.serverSipPort = serverSipPort;
    this.selfIp = selfIp;
    this.subnetMask = subnetMask;
    this.gateway = gateway;
    this.r168ConfigPort = r168ConfigPort;

    this.apdConfig = apdConfig;
    this.channel1 = channel1;
    this.channel2 = channel2;
  }
}
