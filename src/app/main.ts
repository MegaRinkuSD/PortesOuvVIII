import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import { AppModule } from './app.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);


//ionic cordova run android --target=08f21e55 --device -l --debug -c



/*
f this is a new application no changes are required.

If this is an update to an existing application that did not specify an "AndroidPersistentFileLocation" you may need to add:

      "<preference name="AndroidPersistentFileLocation" value="Compatibility" />"

to config.xml in order for the application to find previously stored files.
*/