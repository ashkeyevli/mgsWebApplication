function expect(val) {
    return {
        toBe: function(compareVal) {
            if (val === compareVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(compareVal) {
            if (val !== compareVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}

// Usage example:
try {
    expect(5).toBe(5); // true
    expect(5).notToBe(4); // true
    expect(5).toBe(4); // throws Error: Not Equal
} catch (e) {
    console.error(e.message);
}

try {
    expect(5).notToBe(5); // throws Error: Equal
} catch (e) {
    console.error(e.message);
}
