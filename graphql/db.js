export const people = [
    {
        id: "0",
        name: "DevRappers",
        age: 22,
        gender: "male"
    },
    {
        id: "1",
        name: "Japan Guy",
        age: 18,
        gender: "male"
    },
    {
        id: "2",
        name: "asapz",
        age: 19,
        gender: "male"
    },
    {
        id: "3",
        name: "Dayun",
        age: 22,
        gender: "female"
    },
    {
        id: "4",
        name: "testUser",
        age: 25,
        gender: "male"
    },
    {
        id: "5",
        name: "flynn",
        age: 18,
        gender: "male"
    },
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0]
}