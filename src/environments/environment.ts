// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config: {
    tenant: 'careportfol.io',
    clientId: 'fa765f60-4357-4ed3-8369-307e8247f5fe',
    endpoints: {
      'https://graph.microsoft.com': '00000003-0000-0000-c000-000000000000'
    },
    cacheLocation: 'localStorage',  // enable this for IE, as sessionStorage does not work for localhost.
    popUp: true,
    redirectUri: "http://localhost:4200/"

  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
