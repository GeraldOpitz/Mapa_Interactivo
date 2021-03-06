import { Component } from "@angular/core";
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'borrar',
    templateUrl: './borrar.component.html',
    styleUrls: ['./borrar.component.css']
})
export class BorrarComponent {

 constructor(
    public alertController: AlertController
  ) {}
  showAlert() {

    this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle for alert',
      message: 'This is an alert message.',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }

  showConfirm() {
    this.alertController.create({
      header: 'Alerta',
      message: '¿Esta seguro de borrar este recordatorio?',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Si',
          handler: () => {
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  showPrompt() {
    this.alertController.create({
      header: 'Prompt Alert',
      subHeader: 'Enter information requested',
      message: 'Enter your favorate place',
      inputs: [
        {
          name: 'Place',
          placeholder: 'Eg.NY',
          
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {
            console.log('Canceled', data);
          }
        },
        {
          text: 'Done!',
          handler: (data: any) => {
            console.log('Saved Information', data);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

}