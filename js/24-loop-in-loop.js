`strict mode`;

console.log(`\n--- LOOP IN A LOOP ---\n `);
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--- Start exercise ${exercise} ---`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lift weight repitition ${rep}`);
    }
}