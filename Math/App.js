
export class App
{ 
    constructor()
    {
        this.plugins = [];
    }    

    registerPlugin( plugin )
    {
       this.plugins.push(plugin);
    }

    run()
    {
        var self = this;
        window.addEventListener('DOMContentLoaded', (event) => {
            this.plugins.forEach((pluginObject) => {
                pluginObject.execute(self);
                pluginObject.handlePluginEvents(self);
            });

            // add focus to the input field
            var form = document.forms[0];
            form.elements[0].focus();

        });
    }
}