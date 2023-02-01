import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Nux',
    email: 'n@nuxli.dev',
    maps: {
      create: [
        {
          name: 'First Demo Map',
          description:
            'The first game map created by the first 3D scan object file.',
          tags: {
            create: [
              {
                name: 'Indoors',
                description: 'Indoor maps.',
              },
            ],
          },
          scan: {
            create: {
              name: 'First 3D Scan',
              description:
                "The first stock 3D Scan used to create any map available on MeshCat (I'm rambling).",
              tags: {
                create: [
                  {
                    name: 'Industrial',
                    description: 'Industrial maps.',
                  },
                ],
              },
            },
          },
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
