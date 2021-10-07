import { Component } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
    selector: 'perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']
})

export class PerfilComponent{
    constructor (private menu: MenuController){}
        toggleMenu(){
            this.menu.toggle();
    }
}