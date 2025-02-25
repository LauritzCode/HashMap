
### **📌 HashMap Implementation in JavaScript**
A **custom-built HashMap** using **vanilla JavaScript** with **linked list collision handling**—because we don’t take shortcuts here. 😉

---

## **🚀 Features**
✔️ **Store Key-Value Pairs** like a real hash table.  
✔️ **Handles Collisions** using a **linked list** in each bucket.  
✔️ **Basic Hashing Function** for distributing values.  
✔️ **Supports Common HashMap Operations**:
- `set(key, value)`
- `get(key)`
- `has(key)`
- `remove(key)`
- `length()`
- `clear()`
- `keys()`
- `values()`
- `entries()`

---

## **📦 Installation**
1. **Clone this repo**:
   ```sh
   git clone git@github.com:LauritzCode/HashMap.git
   cd HashMap
   ```
2. **Run in the browser**:
   - Open `index.html` in a live server.
   - Open **DevTools (F12) → Console** to interact with the HashMap.

---

## **📖 How It Works**
### **Creating a HashMap**
```js
const hash = new HashMap();
```

### **Adding Values**
```js
hash.set("name", "Lauritz");
hash.set("age", 25);
hash.set("hobby", "Coding");
```

### **Retrieving Values**
```js
console.log(hash.get("name")); // Output: "Lauritz"
console.log(hash.get("age")); // Output: 25
console.log(hash.get("unknown")); // Output: null (doesn't exist)
```

### **Checking if a Key Exists**
```js
console.log(hash.has("hobby")); // Output: true
console.log(hash.has("pet")); // Output: false
```

### **Removing a Key**
```js
hash.remove("age");
console.log(hash.has("age")); // Output: false
console.log(hash.length()); // Output: 2
```

### **Getting All Keys, Values, and Entries**
```js
console.log(hash.keys()); 
// Output: ["name", "hobby"]

console.log(hash.values()); 
// Output: ["Lauritz", "Coding"]

console.log(hash.entries()); 
// Output: [["name", "Lauritz"], ["hobby", "Coding"]]
```

### **Clearing the HashMap**
```js
hash.clear();
console.log(hash.length()); // Output: 0
console.log(hash.keys()); // Output: []
```

---

## **🛠 How It Works Under the Hood**
- **Buckets** are stored in an **array**, each index holding a **linked list**.
- **Keys are hashed** using a **simple prime number hash function**.
- **Collisions are handled** by chaining values in a **linked list** at the same index.

---



### **📜 License**
This project is open-source.  

---
