//using the KEYS command in production environments is generally not recommended. 
//Instead, Redis provides other commands and mechanisms for working with keys and patterns, 
//such as SCAN and Lua scripting. These commands are designed to be more efficient and scalable 
//and don’t block other Redis operations.

//Syntax- KEYS pattern


// We create some data by executing the commands SET course:price 100, SET course:offer 20, SET course:title "Learn Programming", LPUSH course:tags coding programming javascript java cpp, and SET course:author Educative.

// To get all the keys available in our Redis data store, we can execute the command KEYS *. Observe that the output contains a list of all the available keys.

// We execute the command KEYS course:t* to get all the keys that start with course:t, followed by zero or more characters. Observe that the output consists of two such keys: course:title and course:tags.

// We execute the command KEYS cou?se:p* to get all the keys that start with cou followed by zero or one character, followed by se:p, and finally followed by zero or more characters. Observe that the output consists of one such key: course:price.

// We execute the command KEYS course:[^t]* to get all the keys that start with course: followed by any character except t, and then followed by zero or more characters. Observe that the output consists of three such keys: course:price, course:offer, and course:author.