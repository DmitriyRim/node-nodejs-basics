const parseArgs = () => {
    const args = process.argv.splice(2);

    args.forEach((arg, index) => {
        if(arg.match(/^--/i)) {
            console.log(`${arg.slice(2)} is ${args[index + 1]}`);
        }
    });

};

parseArgs();