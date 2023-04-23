import { BasePlugin } from "./BasePlugin.js";
import { getGenerator ,supported } from "../Numbers/NumberConfig.js";

export class NumberPlugin  extends BasePlugin
{
    execute( app )
    {
        const self = this;
        const btn = document.querySelector("#calculate");

        btn.addEventListener('click',function(e){

            const form =  document.forms[0];
            const num  =  parseInt( form.elements[0].value );
            self.displayNumProps( num );
        });
        
    }

    displayNumProps( num )
    {

        let table = `<p><button onclick="saveScreenshot()" id="screenshot-btn">Take Screenshot</button></p>`;
        
        table += "<table>";
       
        table += "<tr><th> property </th><th> description </th></tr>";
        
        for( const obj of supported )
        {
            const numberGenerator = getGenerator( obj ,num );
            table += `<tr><td> ${ obj } </td><td> ${ numberGenerator  }</td></tr>`;
        }
       
        table += `</table>`;

        document.querySelector("#results").innerHTML = table;
    }
}