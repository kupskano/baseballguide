import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private toastController: ToastController,
    private modalController: ModalController
  ) {
    this.modalController.dismiss();
  }


  redirectWelcome() {
    this.toastController.create({
      duration:3000,
      message:'Please wait'
    }).then((toast)=> {
      toast.present();
      toast.onDidDismiss().then(() => {
        this.router.navigate(['/welcome']);
      })
    })
  }

  


}
