const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const petProfile = () => {
  rl.question('Do you have a furry friend? If not, what would you like to have?', (answer) => {
    // TODO: Log the answer in a database
    rl.question('What kind of pet do you have', (breed) => {
      rl.question('Do they have a name or nickname?', (name) => {
        rl.question('What do you like to do with your furry friend?', (activity) => {
          rl.question('What\'s their favourite treat?', (food) => {
            // console.log(`Yeah ${food}'s  gross. Me neither`);
            // console.log(`No way. Didnt think you were a ${music} fan!`);
            // console.log(`Thats Cool, I like ${activity} too.`);    
            // console.log(`Thank you for sharing your nickname: ${nickname}`);
            // console.log(`Thank you for your valuable feedback: ${answer}`);
            console.log(`Your pet is the cutest thing in the world! It is a ${breed}! When you need to get their attention, you say their name: ${name}! In my spare time, I bring ${name} to go and ${activity}.\nMy pet's favourite treat is ${food}.`);
          rl.close();
          });
        });
      });
    });
  });
}

petProfile();