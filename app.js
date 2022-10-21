function isLoggedInAndSubscribed(LoggedIn, Subscribed) {
    return (LoggedIn === `LOGGEDIN`) && (Subscribed === `SUBSCRIBED`)
   }
   console.log(isLoggedInAndSubscribed(`LOGGEDIN`, `SUBSCRIBED`))

function isLoggedInAndSubscribed(LoggedIn, Subscribed) {
    return (LoggedIn === `LOGGEDIN`) || (Subscribed === `SUBSCRIBED`)
   }
   console.log(isLoggedInAndSubscribed(`LOGGEDIN`, `UNSUBSCRIBED`))