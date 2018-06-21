/*
| ___ \ ___ \  _  |  \/  |_   _/  ___|  ___| /  |
| |_/ / |_/ / | | | .  . | | | \ `--.| |__   `| |
|  __/|    /| | | | |\/| | | |  `--. \  __|   | |
| |   | |\ \\ \_/ / |  | |_| |_/\__/ / |___  _| |_
\_|   \_| \_|\___/\_|  |_/\___/\____/\____/  \___/
*/



/*let sleepyGreeting = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('Hello!')
  },2000);

  setTimeout(() => {
    reject(Error('Too sleepy...'))
  }, 2000);
});

sleepyGreeting
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
*/



/*
| ___ \ ___ \  _  |  \/  |_   _/  ___|  ___| /  |
| |_/ / |_/ / | | | .  . | | | \ `--.| |__   `| |
|  __/|    /| | | | |\/| | | |  `--. \  __|   | |   But it's actually 2
| |   | |\ \\ \_/ / |  | |_| |_/\__/ / |___  _| |_
\_|   \_| \_|\___/\_|  |_/\___/\____/\____/  \___/
*/

console.log("Starting fetch call");
const postsPromise = fetch('https://api.dailysmart.com/posts', null)
console.log('After fetch call');
console.log(postsPromise);
console.log('After the program has run');

postsPromise
  .then(data => console.log(data));
  .catch((err) => {
    console.log(err);
  });
