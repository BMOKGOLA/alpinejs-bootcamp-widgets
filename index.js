
document.addEventListener('alpine:init', () => {
    const handler = greetHandler();
    handler.runTests();
});
document.addEventListener('alpine:init', () => {
    const handler = transportFeeHandler();
    handler.runTests();
});
document.addEventListener('alpine:init', () => {
    const handler = phoneBillHandler();
    handler.runTests();
});

