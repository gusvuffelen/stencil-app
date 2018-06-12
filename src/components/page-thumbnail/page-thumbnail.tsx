import { Component } from '@stencil/core';

@Component({
  tag: 'page-thumbnail'
})
export class PageThumbnail {
  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Thumbnail - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content">
          <ion-thumbnail>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </ion-thumbnail>

          <ion-item>
            <ion-thumbnail slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </ion-thumbnail>
            <ion-label>Item Thumbnail</ion-label>
          </ion-item>

          <ion-item>
            <ion-thumbnail slot="start">
              <img src="https://images.unsplash.com/photo-1511125357779-27038c647d9d?auto=format&fit=crop&w=1951&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
            </ion-thumbnail>
            <ion-label>Wide Thumbnail</ion-label>
          </ion-item>
        </ion-content>
      </div>
    );
  }
}
