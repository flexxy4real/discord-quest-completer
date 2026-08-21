/**
 * Discord DevTools Configurator
 * Safely updates %APPDATA%/discord/settings.json to enable client console access.
 */
const fs = require('fs');
const path = require('path');

const settingsPath = path.join(
  process.env.APPDATA || (process.platform === 'darwin' ? `${process.env.HOME}/Library/Application Support` : `${process.env.HOME}/.config`),
  'discord',
  'settings.json'
);

function enableDevTools() {
  try {
    if (!fs.existsSync(settingsPath)) {
      console.error(`❌ Settings file not found at: ${settingsPath}`);
      return;
    }

    const config = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));

    if (config.DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING === true) {
      console.log('✅ Developer Tools are already enabled.');
      return;
    }

    config.DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING = true;
    fs.writeFileSync(settingsPath, JSON.stringify(config, null, 2), 'utf8');

    console.log('🚀 Developer Tools successfully enabled!');
    console.log('⚠️ Restart your Discord Desktop App for changes to take effect.');
  } catch (error) {
    console.error('❌ Failed to update settings:', error.message);
  }
}

enableDevTools();