kyu
===
> /kjuː/ A simple Promise-based queue.

##Why?
During building [Loadbuster](https://github.com/rezozo/loadbuster), I needed a simple solution for queueing the HTTP requests, so that they'll be serialized and that I'll be able to add / remove them to the queue as needed. A simple npm search for the word queue resulted in a lot of queue modules, but none of them seemed to work good with Promises.

##How does it work?
The `Kyu` class has an internal array of the promises you supply to it (every time using `addAction`). Each object inside the array has two properties: `id` and `action`. The `action` property holds your pending promise, and the `id` is either a v4 uuid generated when you supply only the promise to the `addAction` function, or your desired id when you supply both the id and the 

##Still, you could use callbacks
Yeah, but... No...

##Sample Usage
I'll add a full API documentation when I'll have more time :P
```javascript
const Kyu = require('kyu')
const queue = new Kyu()

queue.addAction()

```
