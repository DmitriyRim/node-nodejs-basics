import { env } from 'node:process';

const parseEnv = () => {
    const listKeys = Object.keys(process.env).filter((key) => key.match(/^RSS_/));
    console.log(...listKeys.map((key) => `${key}=${env[key]};`))
};

parseEnv();