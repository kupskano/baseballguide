import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { SettingsPage } from '../settings/settings.page';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  rulesbases = [
    {
      "id": 1,
      "title": "BASEBALL OVERVIEW",
      "description": "Baseball is a sport that dates back as far as 1744 and formats of the game have been in place until the modern era today. The game is predominantly big in North America, Canada and Japan. ",
      "full_description": "Baseball is a sport that dates back as far as 1744 and formats of the game have been in place until the modern era today. The game is predominantly big in North America, Canada and Japan. The game is played worldwide with the pinnacle of sport coming from the World Series of Baseball. Ironically, this event is only competed by North American teams.",
      "credits": "www.rulesofsport.com/sports/baseball.html"
    },
    {
      "id": 2,
      "title": "OBJECT OF THE GAME",
      "description": "The object of baseball is to score more runs than your opponent. ",
      "full_description": "The object of baseball is to score more runs than your opponent. The idea is to hit the ball thrown at you as far as you can before running around 4 bases to complete a run. Once a player manages to get around the four bases before being tagged out, then another batter steps in.",
      "credits": "www.rulesofsport.com/sports/baseball.html"
    },
    {
      "id": 3,
      "title": "PLAYERS & EQUIPMENT",
      "description": "A game is played out between two teams, each made up of 9 players. ",
      "full_description": "A game is played out between two teams, each made up of 9 players. The scores at the end of the innings are added to a cumulative score and the team with most points wins. The bats are made out of either wood, aluminium or metal materials. The catcher (standing behind the batter to catch any balls missed) wears extra padding in their glove, along with leg guards, a body pad, and a helmet.",
      "credits": "www.rulesofsport.com/sports/baseball.html"
    },
    {
      "id": 4,
      "title": "SCORING",
      "description": "To score, a batter must hit the ball with the bat into the designated fielding area and make it around all four bases (before the fielding team is able to collect the ball and throw it to the base the batter is running to). ",
      "full_description": "To score, a batter must hit the ball with the bat into the designated fielding area and make it around all four bases (before the fielding team is able to collect the ball and throw it to the base the batter is running to). A player can score a mandatory point if they hit a home run, which usually means the ball has left the playing area, often landing in the crowd. A player can stop at any base if they feel they might not make it to the next base before being tagged out.",
      "credits": "www.rulesofsport.com/sports/baseball.html"
    },
    {
      "id": 5,
      "title": "WINNING THE GAME",
      "description": "To win a game, you must outscore your opposition through the 9 innings played. The team with the most points after 9 innings is deemed the winner.",
      "full_description": "To win a game, you must outscore your opposition through the 9 innings played. The team with the most points after 9 innings is deemed the winner. In the event of a tie, extra innings are played until a winner has been concluded.",
      "credits": "www.rulesofsport.com/sports/baseball.html"
    },
   
  ]
  popoverController: any;
 



  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private modalController: ModalController

  ) { }

  ionViewDidEnter() {
    this.rulesbases;
  }


  refresh() {
    this.loadingController.create({
      duration: 3000,
      message: 'Refreshing...'
    }).then((load) => {
      load.present();
      load.onDidDismiss();
      this.ionViewDidEnter();
    })
    
  }


  ngOnInit() {
  }

  viewDetails(rulesbase) {
    this.router.navigate(['/guide-details', {
      'id': rulesbase.id,
      'title': rulesbase.title,
      'description': rulesbase.description,
      'full_description': rulesbase.full_description,
      'credits': rulesbase.credits
    }
  ])
  }

  async presentHalfModal() {
    const modal = await this.modalController.create({
      component: SettingsPage,
      cssClass: 'half-modal'
    });
    return await modal.present();
  }


 
}
