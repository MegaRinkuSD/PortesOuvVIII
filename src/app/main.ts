import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import {enableProdMode} from '@angular/core';

import { AppModule } from './app.module';

//enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);


//ionic cordova run android --target=08f21e55 --device -l --debug -c