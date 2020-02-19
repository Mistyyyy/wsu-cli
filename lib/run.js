
const WsuCli = require('./wsu-cli');

const DEFAULT_COMMAND = "dev";

const useCommand = (command) => (...flags) => {
  return flags.find(item => command.includes(item));
}

const 


async function runCli(cli, command) {

  const find = useCommand(command);

  const isEjectOrder = find('eject');
  const startUpEnv = find("dev", "test", "prod", "analysis");
  const isConfigFlag = find("--config");

  if (isEjectOrder) {
    return cli.enjectConfig()
  }

  if (startUpEnv) {
    let customConfig;

    if (find("config"))
    const customConfig = 
  }

}

const wsu = new WsuCli();

runCli(wsu, process.argv);