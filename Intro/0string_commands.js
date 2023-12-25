//String Operations with Redis Commands

//1. SET key value [OPTIONS]
//Example - SET website educative NX EX 5

// Explain with AI
// We can pass multiple options with the SET command to perform specific operations. Let’s discuss a few options in detail.

// NX or XX: We can specify either of the two options in the SET command. The NX option denotes that we want Redis to set the value of the key if it’s not already available in the Redis data store. The XX option denotes that we want Redis to set the value of the key only if it’s already available.

// EX or PX: These options are very useful if we want to store data in Redis and automatically remove it after a defined interval of time. We can use the EX option and give the time in seconds, after which the key-value pair is expired and removed from the Redis data store; or we use the PX option and give the time in milliseconds.


//2 GET key

//3 MSET key1 value1 key2 value2 key3 value3 ....
//4 MGET key1 key2 key3 ...