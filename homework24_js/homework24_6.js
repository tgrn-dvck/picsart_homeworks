function retry(fn, maxRetries) {
    let attempts = 0;

    while (attempts <= maxRetries) {
        try {
            return fn();
        } catch (error) {
            attempts++;

            if (attempts > maxRetries) {
                throw error;
            }
        }
    }
}