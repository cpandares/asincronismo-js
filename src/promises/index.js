let Api = "https://rickandmortyapi.com/api/character/";

const somethinWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("success");
    } else {
      reject("Error");
    }
  });
};

somethinWillHappen()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

const somethinWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("success");
      });
    } else {
      const error = new Error("Error");
      reject(error);
    }
  });
};

somethinWillHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));


Promise.all([somethinWillHappen(), somethinWillHappen2()])
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
