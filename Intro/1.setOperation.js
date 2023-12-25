//1. SADD key value1 value2 value3 ...

//SADD ip 123.123.123.123 123.123.123.1 123.123.123.2 123.123.123


//2. SPOP key count
//example of how to remove three values from a set named ip is given below:  SPOP ip 3


//3. SMEMBERS key

//example SMEMBERS ip



//4. UNION key1 key2 key3 ...
//ex- SUNION allowedIp blockedIp

//5. SUNIONSTORE keyToStoreUnion key1 key2 key3 ...
//ex- SUNIONSTORE ipAddress allowedIp blockedIp


//intersection
// 5. SINTER key1 key2 key3 ...
//ex- SINTER allowedIp blockedIp

// 6. SINTERSTORE keyToStoreInter key1 key2 key3 ...
//ex-SINTERSTORE commonIp allowedIp blockedIp


//7 
//SDIFF key1 key2 key3 ...
//EX- SDIFF key1 key2 ...

//8. SDIFFSTORE keyToStoreDiff key1 key2 key3 ...
//EX- SDIFFSTORE onlyAllowedIp allowedIp blockedIp
