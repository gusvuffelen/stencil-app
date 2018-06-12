import { Component } from '@stencil/core';

@Component({
  tag: 'page-card',
  styleUrl: 'page-card.css'
})
export class PageCard {
  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Card - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content">
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </ion-card-content>
          </ion-card>

          <ion-card>
            <ion-item>
              <ion-icon name="pin" slot="start" />
              <ion-label>ion-item in a card, icon left, button right</ion-label>
              <ion-button fill="outline" slot="end">
                View
              </ion-button>
            </ion-item>

            <ion-card-content>This is content, without any paragraph or header tags, within an ion-card-content element.</ion-card-content>
          </ion-card>

          <ion-card>
            <ion-item href="#" class="activated">
              <ion-icon name="wifi" slot="start" />
              <ion-label>Card Link Item 1 .activated</ion-label>
            </ion-item>

            <ion-item href="#">
              <ion-icon name="wine" slot="start" />
              <ion-label>Card Link Item 2</ion-label>
            </ion-item>

            <ion-item class="activated">
              <ion-icon name="warning" slot="start" />
              <ion-label>Card Button Item 1 .activated</ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="walk" slot="start" />
              <ion-label>Card Button Item 2</ion-label>
            </ion-item>
          </ion-card>
        </ion-content>
      </div>
    );
  }
}