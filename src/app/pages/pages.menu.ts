export const PAGES_MENU = [{
  path: 'app',
  children: [
    {
      path: '',
      data: {
        menu: {
          title: 'Home',
          icon: 'ion-android-home',
          selected: false,
          expanded: false,
          order: 0
        }
      }
    },
    {
      path: 'events',
      data: {
        menu: {
          title: 'Events',
          icon: 'ion-calendar',
          selected: false,
          expanded: false,
          order: 100,
        }
      },
      children: [{
        path: '',
        data: {
          menu: {
            title: 'All Events',
          }
        }
      },
      {
        path: 'calendar',
        data: {
          menu: {
            title: 'Events Calendar',
          }
        }
      }]
    },
    {
      path: 'time',
      data: {
        menu: {
          title: 'Time',
          icon: 'ion-clock',
          selected: false,
          expanded: false,
          order: 200,
        }
      },
      children: [{
        path: '',
        data: {
          menu: {
            title: 'My Time Card',
          }
        }
      }]
    },
    {
      path: 'manage',
      data: {
        menu: {
          title: 'Manage',
          icon: 'ion-calendar',
          selected: false,
          expanded: false,
          order: 300,
        }
      },
      children: [{
        path: '',
        data: {
          menu: {
            title: 'Users',
          }
        }
      }]
    }
  ]
}];
