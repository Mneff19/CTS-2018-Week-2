/*
| ___ \ ___ \  _  |  \/  |_   _/  ___|  ___| /  |
| |_/ / |_/ / | | | .  . | | | \ `--.| |__   `| |
|  __/|    /| | | | |\/| | | |  `--. \  __|   | |
| |   | |\ \\ \_/ / |  | |_| |_/\__/ / |___  _| |_
\_|   \_| \_|\___/\_|  |_/\___/\____/\____/  \___/
*/



let sleepyGreeting = new Promise((resolve, reject) => {
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




/*
| ___ \ ___ \  _  |  \/  |_   _/  ___|  ___| /  |
| |_/ / |_/ / | | | .  . | | | \ `--.| |__   `| |
|  __/|    /| | | | |\/| | | |  `--. \  __|   | |   But it's actually 2
| |   | |\ \\ \_/ / |  | |_| |_/\__/ / |___  _| |_
\_|   \_| \_|\___/\_|  |_/\___/\____/\____/  \___/
*/

console.log("Starting fetch call");
const postsPromise = fetch('https://docs.unity3d.com/ScriptReference/', null)
console.log('After fetch call');
console.log(postsPromise);
console.log('After the program has run');

postsPromise
  /*.then(data => data.json())*/
  /*.then(data => {
    data.posts.forEach((item) => {
      console.log(item.title);
    });
  })*/
  .then(data => {console.log(data.body)})
  .catch(err => {
    console.log(err);
  });





  /*
  | ___ \ ___ \  _  |  \/  |_   _/  ___|  ___| /  |
  | |_/ / |_/ / | | | .  . | | | \ `--.| |__   `| |
  |  __/|    /| | | | |\/| | | |  `--. \  __|   | |   But it's actually 3
  | |   | |\ \\ \_/ / |  | |_| |_/\__/ / |___  _| |_
  \_|   \_| \_|\___/\_|  |_/\___/\____/\____/  \___/
  */

const greeting = new Promise((resolve, reject) =>{
  resolve('Hi there');
  reject('Oops, bad greeting');
});
const updateAccount = new Promise((resolve, reject) => {
  resolve('Updating last login...');
  reject('Error updating account with login.');
});

const loginActivities = Promise.all([greeting, updateAccount]);
loginActivities.then(res => {
  res.forEach(activity => {
    console.log(activity);
  })
})

/*
| ___ \ ___ \  _  |  \/  |_   _/  ___|  ___| /  |
| |_/ / |_/ / | | | .  . | | | \ `--.| |__   `| |
|  __/|    /| | | | |\/| | | |  `--. \  __|   | |   But it's actually 4
| |   | |\ \\ \_/ / |  | |_| |_/\__/ / |___  _| |_
\_|   \_| \_|\___/\_|  |_/\___/\____/\____/  \___/
*/

const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User logged in...');
    }, 2000);
  });
}

const updateAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);
  });
}

async function loginActivities() {
  const returnedLogin = await login();
  console.log(returnedLogin);

  const returnedUpdateAccount = await updateAccount();
  console.log(returnedUpdateAccount);
}

loginActivities();





/*
| ___ \ ___ \  _  |  \/  |_   _/  ___|  ___| /  |
| |_/ / |_/ / | | | .  . | | | \ `--.| |__   `| |
|  __/|    /| | | | |\/| | | |  `--. \  __|   | |   But it's actually 4- but also not
| |   | |\ \\ \_/ / |  | |_| |_/\__/ / |___  _| |_
\_|   \_| \_|\___/\_|  |_/\___/\____/\____/  \___/
*/

const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User logged in...');
    }, 4000);
  });
}

const updateAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);
  });
}

async function loginActivities(login, updateAccount) {
  const returnedLogin = await login;
  console.log(returnedLogin);

  const returnedUpdateAccount = await updateAccount;
  console.log(returnedUpdateAccount);
}

loginActivities(login(), updateAccount());

/*
| ___ \ ___ \  _  |  \/  |_   _/  ___|  ___| /  |
| |_/ / |_/ / | | | .  . | | | \ `--.| |__   `| |
|  __/|    /| | | | |\/| | | |  `--. \  __|   | |   But it's actually 5, and it's actually good
| |   | |\ \\ \_/ / |  | |_| |_/\__/ / |___  _| |_
\_|   \_| \_|\___/\_|  |_/\___/\____/\____/  \___/
*/

async function queryApis(){
  try{
    const postsPromise = fetch('https://api.dailysmarty.com/posts');
    const posts = await postsPromise.then(res => res.json());
    console.log(posts);
} catch(err){
    console.log(err);
    console.log('There was an error with the DailySmarty API');
  }

  try{
    const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
    const repos = await reposPromise.then(res => res.json());
    console.log(repos);
} catch(err){
    console.log(err);
    console.log('There was an error with the GitHub API');
  }
};
queryApis();
