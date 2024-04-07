let str = "javascript";
let frequencyObj = {};

for(var ch of str)
{
    if(frequencyObj[ch])
    {
        frequencyObj[ch] += 1;
    }
    else
    {
        frequencyObj[ch] = 1;
    }
}


console.log(frequencyObj);