import {App, PluginSettingTab, Setting} from "obsidian";
import ObservablePlugin from "./main";

export interface ObservablePluginSettings {
	mySetting: string;
}

export const DEFAULT_SETTINGS: ObservablePluginSettings = {
	mySetting: 'default'
}

export class ObservableSettingsTab extends PluginSettingTab {
	plugin: ObservablePlugin;

	constructor(app: App, plugin: ObservablePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Settings #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
