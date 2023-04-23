import { App } from "./App.js";
import { NumberPlugin } from "./Plugins/NumberPlugin.js";


var Application = new App();
Application.registerPlugin(new NumberPlugin());
Application.run();
