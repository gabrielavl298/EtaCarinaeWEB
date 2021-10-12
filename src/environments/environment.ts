// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebaseConfig : {
  apiKey: 'AIzaSyCxc4c4cQ2CLqpvGL2z7qiGCE_lbfKZ4RM',
  authDomain: 'etacarinae-e197e.firebaseapp.com',
  projectId: 'etacarinae-e197e',
  storageBucket: 'etacarinae-e197e.appspot.com',
  messagingSenderId: '605036753784',
  appId: '1:605036753784:web:6c08c744b3b0e2a75c0e8d'
},

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
