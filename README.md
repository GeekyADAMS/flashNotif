# flash-notif

## About @flash-notif/vue-component

flash-notif is a vue component that let's you show flash notifications across your entire app, depending on user processes, actions and even system processes.

You can pass neutral messages, warnings, notify of successful processes and failures .e.t.c

This version is dependent uses Vuex store. Hence, you need to have Vuex installed in your Vue project.


### Warning
Note: This is a Vue component plugin and should be used in Vue/Nuxt projects only. Also, make sure to have vuex enabled in your project.

### Step 1: Installation
```
npm i flash-notif
```

### Step 2: Setup and Import in your project

Add these lines to your main.js file
```
import flashNotif from 'flash-notif'

Vue.use(flashNotif, { store })
```

### Step 3: Usage

Add the component anywhere in your App.vue template
```
<flashNotif />
```

### Step 4: How to show notification to user

#### Method 1:
When an event occurs and you want to show notification to the user, just use the following inside that event handler/method/fuction...
```
this.$store.dispatch('flashNotif', {
        message: {
        title: 'Your notification title',
        text: 'Your notification text body'
        },
        type: 'notification type e.g. warning, error, success, neutral',
        pos: 'notification position e.g. top, bottom',
        duration: 'how long you want the notification to stay on the screen in milliseconds e.g 7000 for 7 seconds'
    })
```

#### Method 2:
import Vuex mapActions into the script that of any component you want to use flash-notif in.
```
import { mapActions } from 'vuex'
```

Then, add the following to your "methods" property
```
...mapActions('flashNotif')
```

When an event occurs and you want to show notification to the user, just use the following inside that event handler/method/fuction...
```
flashNotif({
        message: {
        title: 'Your notification title',
        text: 'Your notification text body'
        },
        type: 'notification type e.g. warning, error, success, neutral',
        pos: 'notification position e.g. top, bottom',
        duration: 'how long you want the notification to stay on the screen in milliseconds e.g 7000 for 7 seconds'
    })
```

### Customize configuration

#### type
Notification type can be warning, error, success, neutral. It is important to specify type. e.g
```
type: 'success'
```

#### pos
pos property defines where the notification should be displayed on the screen. You can pass either 'top' or 'bottom'. If nothing is passed, the notification automatically displaced at the top right. e.g
```
pos: 'bottom'
```

#### duration
The 'duration' property defines how long the notification stays on the screen before disappearing if the user doesnt manually close it. Its value is in millimeter e.g. to show notification for 5 seconds
```
duration: 5000
```
Note: It is ok to pass the value as string or integer, anyone works.


### Examples
Success Notification:

![Success notification](https:///res-console.cloudinary.com/geekyadams/thumbnails/transform/v1/image/upload/v1593531281/https:///res-console.cloudinary.com/geekyadams/thumbnails/transform/v1/image/upload//v1593531281/YXBwLXN1Y2Nlc3NfdnVvazNx/drilldown)

```
flashNotif({
        message: {
        title: 'Application Successful',
        text: 'Your application details has been sent to your mail. Please proceed from there.'
        },
        type: 'success',
        pos: 'top',
        duration: 7000
    })
```

#### other example
![Welcome notification](https:///res-console.cloudinary.com/geekyadams/thumbnails/transform/v1/image/upload/v1593531965/https:///res-console.cloudinary.com/geekyadams/thumbnails/transform/v1/image/upload//v1593531965/bWFpbC1ub3RpZl9xMW54c2w=/drilldown)

### Source Code
Visit [Github Repo](https://github.com/GeekyADAMS/flashNotif).

Feel free to star and follow.

### Donate 
Donate, become my patreon. [Donate now](https://www.patreon.com/GeekyAdams).

### Hire me
Crrenty available for Frontend roles. [Hire Now](https://www.geekyadams.dev).