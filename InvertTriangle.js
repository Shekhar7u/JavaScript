let num = 6;
for (let i = num; i >= 1; i--) {
    let pattern = ""
    for (let j = 1; j <= i; j++) {
        pattern = pattern + "*";

    }
    console.log(pattern);
}