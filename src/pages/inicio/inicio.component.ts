import { Component } from "@angular/core";
import { MenuController } from "@ionic/angular";




@Component ({
    selector:'inicio',
    templateUrl:'./inicio.component.html',
    styleUrls:['./inicio.component.css'],
    
})
export class InicioComponent{
    constructor (private menu: MenuController){}
        toggleMenu(){
            this.menu.toggle();
    }
    
}
