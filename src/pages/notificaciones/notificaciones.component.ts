import { Component } from "@angular/core";

@Component({
    selector: 'notificaciones',
    templateUrl: './notificaciones.component.html',
    styleUrls: ['./notificaciones.component.css']
})


export class NotificacionesComponent{
    public form = [
        {val: '3 veces', isChecked: true},
        {val: '5 veces', isChecked: false},
        {val: 'continuamente', isChecked: false}
    ];
    

}

