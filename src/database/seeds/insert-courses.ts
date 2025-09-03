import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // 17.1  Inserts seed entries at the same time
    await knex("courses").insert([
        {name: "CSS" },
        {name: "Javascript" },
        {name: "React" },
        {name: "Node.js" },
        {name: "Git" },
        {name: "Github" },
        {name: "Typescript" },
        {name: "Express.js" },
        {name: "Banco de dados" }
    ]);
};
