import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

type Role = "OWNER" | "RESIDENT";

async function main() {
    const roles: Role[] = ["OWNER", "RESIDENT"];

    // Mengenerate 10 user dummy
    for (let i = 0; i < 10; i++) {
        await prisma.user.create({
            data: {
                name: faker.name.fullName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                role: roles[Math.floor(Math.random() * roles.length)],
            },
        });
    }

    console.log("User dummy data has been generated!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
