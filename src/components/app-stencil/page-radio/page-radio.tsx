import { Component } from '@stencil/core';


@Component({
  tag: 'page-radio',
  styleUrl: 'page-radio.css'
})
export class PageRadio {
  radioValues: any;

  componentDidLoad() {
    this.radioValues = ['fruitRadio', 'pizzaRadio', 'veggiesRadio'];

    this.printRadioValues();
  }

  printForm() {
    console.log('TODO get working with forms');
  }

  printRadioValues() {
    var html = 'Values:<br>';

    for (var i = 0; i < this.radioValues.length; i++) {
      var radio = this.radioValues[i];
      var el = document.getElementById(radio);
      html += '<span>' + radio + ': ' + el['value'] + ' </span><br>';
    }

    var valueEle = document.getElementById('valuesCode');
    valueEle.innerHTML = html;
  }

  toggleBoolean(id, prop) {
    var el = document.getElementById(id);

    var isTrue = el[prop] ? false : true;
    el[prop] = isTrue;
    console.debug('in toggleBoolean, setting', prop, 'to', isTrue);
  }

  toggleString(id, prop, firstVal, secondVal) {
    var el = document.getElementById(id);

    var stringVal = el[prop] == firstVal ? secondVal : firstVal;
    el[prop] = stringVal;
    console.debug('in toggleString, setting', prop, 'to', stringVal);
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Radio - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content" class="radio-test outer-content">
          <ion-list>
            <ion-radio-group id="fruitRadio">
              <ion-item-divider>
                <ion-label>Fruits (Group w/ values)</ion-label>
              </ion-item-divider>
              <ion-item>
                <ion-label>Apple</ion-label>
                <ion-radio slot="start" value="apple"></ion-radio>
              </ion-item>

              <ion-item>
                <ion-label>Grape, checked, disabled</ion-label>
                <ion-radio slot="start" id="grapeChecked" value="grape" checked disabled></ion-radio>
              </ion-item>

              <ion-item>
                <ion-label>Cherry</ion-label>
                <ion-radio slot="start" color="danger" value="cherry"></ion-radio>
              </ion-item>
            </ion-radio-group>

            <ion-radio-group id="pizzaRadio">
              <ion-item-divider>
                <ion-label>Extra Pizza Topping (Group w/ no values)</ion-label>
              </ion-item-divider>
              <ion-item>
                <ion-label>Pepperoni</ion-label>
                <ion-radio slot="end" name="pepperoni" checked></ion-radio>
              </ion-item>

              <ion-item>
                <ion-label>Sausage</ion-label>
                <ion-radio slot="end" color="danger" name="sausage"></ion-radio>
              </ion-item>
            </ion-radio-group>

            <ion-radio-group id="veggiesRadio" allow-empty-selection>
              <ion-item-divider>
                <ion-label>Veggies (Group w/ allow empty)</ion-label>
              </ion-item-divider>
              <ion-item>
                <ion-label>Carrot</ion-label>
                <ion-radio slot="end" value="carrot"></ion-radio>
              </ion-item>

              <ion-item>
                <ion-label>Tomato</ion-label>
                <ion-radio slot="end" value="tomato"></ion-radio>
              </ion-item>

              <ion-item>
                <ion-label>Broccoli</ion-label>
                <ion-radio id="dangerRadio" slot={'end'} color="danger" value="broccoli" checked></ion-radio>
              </ion-item>
            </ion-radio-group>

            <ion-item>
              <ion-button slot={'start'} onClick={() => this.toggleBoolean('grapeChecked', 'checked')} fill="outline" size="small">Checked</ion-button>
              <ion-button slot={'start'} onClick={() => this.toggleBoolean('grapeChecked', 'disabled')} fill="outline" size="small">Disabled</ion-button>
              <ion-button slot={'end'} onClick={() => this.printRadioValues()} fill="outline" size="small">Print</ion-button>
              <ion-button slot={'end'} onClick={() => this.toggleString('dangerRadio', 'color', 'danger', 'secondary')} fill="outline" size="small" color="danger">Color</ion-button>
            </ion-item>
          </ion-list>

          <pre id="valuesCode"></pre>

          <ion-list>
            <ion-list-header>
              No Radio Group
            </ion-list-header>
            <ion-item>
              <ion-label>Kiwi, (ionChange) Secondary color</ion-label>
              <ion-radio slot={'start'} color="secondary"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-label>Strawberry, (ionChange) checked="true"</ion-label>
              <ion-radio slot={'start'} color="light" checked={true}></ion-radio>
            </ion-item>

            <ion-item>
              <ion-label>Checkbox right, checked, really long text that should ellipsis</ion-label>
              <ion-radio slot="end" color="danger" checked></ion-radio>
            </ion-item>

            <ion-item>
              <ion-label>Checkbox right side</ion-label>
              <ion-radio slot="end" checked></ion-radio>
            </ion-item>

            <ion-item>
              <ion-label>Button w/ right side default icon, really long text that should ellipsis</ion-label>
              <ion-icon name="information-circle" slot="end"></ion-icon>
            </ion-item>

          </ion-list>

          <p>
            <ion-radio id="standAloneChecked"></ion-radio>
            Stand-alone checkbox: <span id="standAloneCheckedSpan"></span>
          </p>

          <ion-item>
            <ion-label>Checkbox / Toggle</ion-label>
            <ion-radio slot="start" id="checked"></ion-radio>
            <ion-toggle id="checked"></ion-toggle>
          </ion-item>
          <ion-item>
            <ion-label>Checked</ion-label>
            <ion-radio slot="start" checked></ion-radio>
            <ion-toggle checked></ion-toggle>
          </ion-item>
          <ion-item>
            <ion-label>Disabled</ion-label>
            <ion-radio slot="start" disabled></ion-radio>
            <ion-toggle disabled></ion-toggle>
          </ion-item>

        </ion-content>
      </div>
    );
  }
}