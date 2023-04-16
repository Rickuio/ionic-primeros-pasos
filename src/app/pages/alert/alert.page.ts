import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is a message',
      buttons: ['Ok']
    });
    await alert.present();
  }

  async presentAlertMultiple() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is a message',
      buttons: ['Ok', 'Cancel', 'Delete']
    });
    await alert.present();
  }

  async presentAlertMultiplePersonalize() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is a message',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Ok personalizado');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Cancel');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Prompt',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Place Holder 2'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Place Holder 2'
        }
      ],
      subHeader: 'Subtitle',
      message: 'This is a message',
      buttons: [
        {
          text: 'Ok',
          handler: ( data: any ) => {
            console.log(data);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Cancel');
          }
        }
      ]
    });
    await alert.present();
  }

}
