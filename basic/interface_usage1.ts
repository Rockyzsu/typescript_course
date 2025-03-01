interface AnimalType {
  fly: () => string;
  sing: () => string;
  walk(): string;
}

let bird: AnimalType = {
  fly: () => {
    return "fly";
  },
  sing: () => {
    return "sing";
  },

  walk: () => {
    return "walk";
  },
};

console.log(bird.fly());
console.log(bird.sing());
console.log(bird.walk());

interface User {
  id: number;
  name: string;
  email?: string;
  [key: string]: any; // 扩展任意
}

let admin: User = {
  id: 1,
  name: "admin",
  age: 20,
};
console.log(admin);
export {};

interface PhoneIndex {
  [index: number]: number[];
}

let jingdong_phone_shop: PhoneIndex = {
  1: [1, 2, 34],
  2: [8, 8, 8],
  3: [8, 9, 0],
};

for (let index in jingdong_phone_shop) {
  console.log("key: ", index, " value:", jingdong_phone_shop[index]);
}
