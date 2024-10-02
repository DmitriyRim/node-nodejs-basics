const parseArgs = () => {
    const args = process.argv.slice(2);

    args.forEach(((item, index, arr) => {
        if (item.match(/^--/)) {
            console.log(`${item.slice(2)} is ${arr[index + 1]}`)
        }
    }))
};

parseArgs();