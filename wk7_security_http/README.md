# Security and Real World HTTP Servers

## Outline
1. Security
    1. Storing passwords
    1. Encrypting cookies
    1. HTTPS
1. REST & Advanced Express
    1. REST
    1. Express modules

# Security
When building web apps we often refer to a strategy called `zero trust`. Zero trust tells us that we should never trust an incoming request and helps us prevent data breaches by ensuring at every stage that the request is coming from an authorized party.

## Storing passwords
When building an application it's easy to begin storing passwords as plain text in our database. After all, if done correctly no one but you should have access to your database so what's the harm right? In reality we can all think of a few major data breaches at well known companies with security professionals much more experienced than we are. Since we don't trust anybody we're going to assume that every piece of our app is vulnerable!

So if we assume our database is vulnerable, how can we store passwords in it without putting our users at risk? The answer is hashing!

> Hashing is a **one-way function** that scrambles plain text or a key. **One-way** means that it cannot be unscrambled to get the original value. This means that even if someone hacks our database and steals all our users' passwords they can't reverse engineer the hashed values to figure out the user's original password.

***Don't roll your own encryption!***

So how do we hash passwords in our app? The answer is `bcrypt`. Bcrypt is a password-hashing function that has been built into an `npm` package of the same name that lets us quickly hash passwords and compare input to hashed values.

[Bcrypt documentation](https://openbase.com/js/bcrypt/documentation)

## Encrypting cookies
Why do we use cookies? HTTP is stateless, which means we can't remember anything about previous requests. We use cookies to get around this and store data for our server to read again, such as whether a user is logged in.

Cookie values are plain text by default and since they belong to a user they can be changed manually at will. So how do we trust the data in a cookie? We don't!

Whenever we store data in a cookie we should encrypt that data by default. This means that if someone is able to view a user's cookies they won't be able to read any of the data stored there. Further if a user changes the cookie's value the result will simply be nonsense when unencrypted.

Why do we care if cookies are visible to the user? Because we store their data their! If we store a user's id in a cookie as plain text then anyone could pretend to be that user by changing their cookie's value to that id.

> Encryption is a **two-way function** that turns plain text into what we refer to as ciphertext. Ciphertext is scrambled text that can't be read without decrypting it. Because encryption is **two-way** this means that the resulting ciphertext can be unscrambled (or decrypted) by anyone with the correct key.

So how do we encrypt our cookies in express? One option is a middleware called `cookie-session`.

[Cookie session documentation](https://github.com/expressjs/cookie-session)

### When can I use plain text cookies?
While encrypted cookies should be your default there are some scenarios when it **might** be appropriate to use plain text cookies.
* language preferences
* shopping cart for non-logged in users
* analytics

## HTTPS
HTTP is plain text! Using HTTP any data we send over the internet is easily read by anyone that is able to intercept our request. So even if we've hashed passwords in our database when a user logs in the password they type into our password field is sent in plain text to the server.

This is where HTTPS comes in! HTTPS (the S is for secure) is end-to-end encrypted, meaning the data sent in the request cannot be read while it is in transit. This is achieved through public-key encryption.

> Public-key encryption is an encryption method where one key (the public key) is used to encrypt plain text and the resulting ciphertext can only be decrypted with another key (the private key). This way we can share our public key with anyone that wants to send us a message and that message cannot be read by anyone unless they have our private key (even if they have the public key). This strategy is an alternative to symmetric-key encryption where the same key is used to both encrypt plain text and decrypt ciphertext.

[Let's Encrypt](https://letsencrypt.org/about/) is a non-profit authority run by the [Internet Security Research Group (ISRG)](https://www.abetterinternet.org/) that provides free certificates needed to enable HTTPS for websites.

### Man-in-the-middle attacks
One of the most common ways that people try hack users and websites is through a *man-in-the-middle* attack. This is where a hacker intercepts traffic between to parties (eg. a user's browser and our server) and can either read the data being sent or can alter that data in some way.

One example of this is [Firesheep](https://en.wikipedia.org/wiki/Firesheep) which was a firefox extension that allowed users to intercept cookies on public wifi for sites like Facebook and hijack that users logged in session.

# REST & Advanced express

## REST
REST stands for Representational state transfer. REST is an architectural style for building APIs that conform to a set of constraints. APIs that conform to these constraints can be referred to as RESTful.

https://en.wikipedia.org/wiki/Representational_state_transfer

### REST constraints
* Client–server architecture
* Statelessness
* Cacheability
* Layered system
* Code on demand (optional)
* Uniform interface

The majority of these constraints are met by using standard HTTP methods and web architecture (Browsers enable the client-server architecture model, HTTP is stateless by design, etc.)

### RESTful APIs
A RESTful API follows a few basic patterns:

* Requests specify the resource they are requesting (using the URI)
* HTTP verbs are used semantically (CRUD) to express the intention of the request
* Requests are scoped (collection of resources or single resource)
* Uses a uniform data format (usually JSON for APIs)
* Requests are stateless & must include all information needed to fulfill the request
* Idempotency — making multiple identical requests should have the same result as making a single request

### Example RESTful API endpoints
| action               | method | endpoint     |
|----------------------|--------|--------------|
| List all users       | GET    | "/users"     |
| Get a single user    | GET    | "/users/:id" |
| Change a user's info | PUT    | "/users/:id" |
| Add a new user       | POST   | "/users"     |
| Remove a user        | DELETE | "/users/:id" |

## Express modules
Like we've explored with other JavaScript programs, Express apps should be broken in multiple smaller modules to help us manage our code.

The most basic level of modularization involves grouping routes that deal with the same resource into separate files called routers.

A common modular code structure involves grouping logic into Routes, Controllers, and Services.

* Routes — define API endpoints that map to controllers
* Controllers — validate requests, parse queries, and send responses
* Services — interact with other layers of our app (databases, external APIs) and return objects or errors