import { Component } from '@stencil/core';

@Component({
  tag: 'page-text',
  styleUrl: 'page-text.css'
})
export class PageText {
  componentDidLoad() {
    let dynamicColor: any = document.getElementById('dynamicColor');
    dynamicColor.color = 'secondary';
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Text - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content" padding>
          <ion-text color="secondary">
            <h1>H1: The quick brown fox jumps over the lazy dog</h1>
          </ion-text>

          <ion-text color="primary">
            <h2>H2: The quick brown fox jumps over the lazy dog</h2>
          </ion-text>

          <ion-text color="light">
            <h3>H3: The quick brown fox jumps over the lazy dog</h3>
          </ion-text>

          <ion-text color="danger">
            <h4>H4: The quick brown fox jumps over the lazy dog</h4>
          </ion-text>

          <ion-text color="dark">
            <h5>H5: The quick brown fox jumps over the lazy dog</h5>
          </ion-text>

          <ion-text id="dynamicColor">
            <h6>H6: The quick brown fox jumps over the lazy dog</h6>
          </ion-text>

          <p>
            I saw a werewolf with a Chinese menu in his hand. Walking through the{' '}
            <ion-text color="danger">
              <sub>streets</sub>
            </ion-text>{' '}
            of Soho in the rain. He{' '}
            <ion-text color="primary">
              <i>was</i>
            </ion-text>{' '}
            looking for a place called Lee Ho Fook's. Gonna get a{' '}
            <ion-text color="secondary">
              <a>big dish of beef chow mein.</a>
            </ion-text>
            <a class="color-purple">My purple class link.</a>
          </p>

          <p>
            He's the hairy-handed gent who ran amuck in Kent. Lately he's{' '}
            <ion-text color="primary">
              <sup>been</sup>
            </ion-text>{' '}
            overheard in Mayfair. Better stay away from him. He'll rip your lungs out, Jim. I'd like to meet his tailor.
            <ion-text color="danger">
              <ion-icon name="cut" />
            </ion-text>
          </p>
        </ion-content>
      </div>
    );
  }
}
