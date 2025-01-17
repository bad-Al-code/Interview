const names: string[] = ['aanya', 'arjun', 'vihaan', 'arjun', 'siya', 'anika'];
const countMap: Map<string, number> = new Map();

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (!countMap.has(name)) {
        countMap.set(name, 1);
    } else {
        countMap.set(name, countMap.get(name)! + 1);
    }
}

console.log(countMap);
