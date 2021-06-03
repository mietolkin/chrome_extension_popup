console.log('hello world!');


init();

async function init() {


    let getName = await elementAppear('.text-heading-xlarge');
    let changedName = getName.innerHTML + ' Just for test';
    getName.innerHTML = changedName;




    // let result = await requestBackground(
    //     new ExtensionMessage(config.keys.getBackgroundInfo, {})
    // );

    // let testElement = await elementAppear("#result-stats");
    // testElement.textContent = JSON.stringify(result);
}
