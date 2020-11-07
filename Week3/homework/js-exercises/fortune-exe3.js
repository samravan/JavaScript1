node const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ['Ali', 'Amir', 'Lili', 'Mina', 'Masood'];
const locations = ['Iran', 'USA', 'Holland', 'UK', 'Jordan'];
const jobs = ['Doctor', 'Programmer', 'Killer', 'Police', 'President'];
function tellFortune(numChildren, partnerNames, locations, jobs){
    const randomNum = numChildren[Math.floor(Math.random() * numChildren.length)];
    const randomName = partnerNames[Math.floor(Math.random() * partnerNames.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomJob = jobs[Math.floor(Math.random() * jobs.length)];

    console.log(`You will be a ${randomJob} in ${randomLocation}, married to ${randomName} with ${randomNum} kids.`)
};

tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);