const request = require('supertest');

describe("Rick and Morty API", () => {
  it("/get a valid character", async () => {
    const characterId = 1; 
    const response = await request("https://rickandmortyapi.com/api").get(
      `/character/${characterId}`
    );
  
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Rick Sanchez"); 
    expect(response.body.status).toBe("Alive"); 
    expect(response.body.species).toBe("Human"); 
    expect(response.body.gender).toBe("Male"); 
    expect(response.body.origin.name).toBe("Earth (C-137)"); 
  });

    it("/get a invalid character", async () => {
        const characterId = 9999; 
        const response = await request("https://rickandmortyapi.com/api").get(
        `/character/${characterId}`
        );
    
        expect(response.status).toBe(404);
    });
});