const parseEnv = () => {
    Object.keys(process.env).forEach((key) => {
        if(key.match(/^rss_/i)){
            console.log(`${key}=${process.env[key]};`)
        }
    });
};

parseEnv();