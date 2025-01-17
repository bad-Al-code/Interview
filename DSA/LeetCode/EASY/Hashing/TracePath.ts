function tracePath(map: Record<string, string>): [string, string][] {
    const destinations = new Set<string>(Object.values(map));

    let startCity = '';

    for (const source in map) {
        if (!destinations.has(source)) {
            startCity = source;
            break;
        }
    }

    if (!startCity) {
        throw new Error('Invalid input: No valid starting city found');
    }

    const result: [string, string][] = [];
    let currentCity = startCity;
    while (currentCity && map[currentCity]) {
        let nextCity = map[currentCity];
        result.push([currentCity, nextCity]);
        currentCity = nextCity;
    }

    return result;
}
