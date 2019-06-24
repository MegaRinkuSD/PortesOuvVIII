import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner";



@IonicPage()
@Component({
  selector: 'page-qr-result',
  templateUrl: 'qr-result.html',
})
export class QrResultPage {
  options: BarcodeScannerOptions
  result: {}

  constructor(private scanner: BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrResultPage');

    this.options = {
      prompt: 'Vous avez trouvé un code QR? Scannez le!'
    }

    this.result = this.scanner.scan(this.options).then(scannedText =>{
      this.result = scannedText.text
    });
    
    console.log(this.result)

  }

  async scanQRcode(){
    this.options = {
      prompt: 'Vous avez trouvé un code QR? Scannez le!'
    }

    this.result = this.scanner.scan(this.options).then(scannedText =>{
      this.result = scannedText.text
    });
    
    console.log(this.result)


  }
  

}
