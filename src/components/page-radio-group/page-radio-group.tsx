import { Component } from '@stencil/core';

@Component({
  tag: 'page-radio-group'
})
export class PageRadioGroup {
  dynamicDisabled: any;

  componentDidLoad() {
    this.dynamicDisabled = document.getElementById('dynamicDisabled');
  }

  toggleDisabled() {
    this.dynamicDisabled.disabled = !this.dynamicDisabled.disabled;
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Radio Group - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="outer-content">
          <ion-radio-group id="dynamicDisabled" disabled name="tannen" value="biff">
            <ion-list-header>
              <ion-label>Luckiest Man On Earth</ion-label>
            </ion-list-header>

            <ion-item>
              <ion-label>
                Biff <span id="biff" />
              </ion-label>
              <ion-radio value="biff" slot="start" />
            </ion-item>

            <ion-item>
              <ion-label>
                Griff <span id="griff" />
              </ion-label>
              <ion-radio value="griff" slot="start" />
            </ion-item>

            <ion-item>
              <ion-label>
                Buford <span id="buford" />
              </ion-label>
              <ion-radio value="buford" slot="start" />
            </ion-item>

            <ion-item>
              <ion-label>George</ion-label>
              <ion-radio value="george" slot="start" />
            </ion-item>
          </ion-radio-group>

          <ion-button onClick={() => this.toggleDisabled()}>Toggle Disabled</ion-button>
        </ion-content>
      </div>
    );
  }
}
