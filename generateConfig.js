import fs from "fs";

const animateLoadingMessage =(message, duration) =>{
    let index = 0;
    const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  
    const intervalId = setInterval(() => {
      process.stdout.write(`\r${frames[index % frames.length]} ${message}`);
      index += 1;
    }, 100); // Change the interval duration based on your preference
  
    setTimeout(() => {
      clearInterval(intervalId);
      console.log('\n'); // Move to the next line after the loading message is complete
    }, duration);
}

try {
  // Read the configuration data from svelteflow.json
  const configFileContent = fs.readFileSync("svelteflow.json", "utf-8");
  const appConfig = JSON.parse(configFileContent);

  const config = {
    // Your configuration data here
  };

  const configString = JSON.stringify(config, null, 2);
  const configFilePath = "svelteflow.config.json";

  fs.writeFileSync(configFilePath, configString);
  
  animateLoadingMessage(`Generating svelteflow Config for ${appConfig?.appName}`, 6000);
} catch(err) {
  console.error(
    "Error reading or generating the configuration file:",err);
}

