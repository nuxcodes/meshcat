import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// const userData: Prisma.UserCreateInput[] = [
//   {
//     name: 'Nux',
//     email: 'n@nuxli.dev',
//     maps: {
//       create: [
//         {
//           name: 'First Demo Map',
//           description:
//             'The first game map created by the first 3D scan object file.',
//           tags: {
//             create: [
//               {
//                 name: 'Indoors',
//                 description: 'Indoor maps.',
//               },
//             ],
//           },
//           scan: {
//             create: {
//               name: 'First 3D Scan',
//               description:
//                 "The first stock 3D Scan used to create any map available on MeshCat (I'm rambling).",
//               tags: {
//                 create: [
//                   {
//                     name: 'Industrial',
//                     description: 'Industrial maps.',
//                   },
//                 ],
//               },
//             },
//           },
//         },
//       ],
//     },
//   },
// ];

async function main() {
  const commercial = await prisma.scanTag.create({
    data: {
      name: 'Commercial',
      description: 'Commercial maps.',
    },
  });
  const industrial = await prisma.scanTag.create({
    data: {
      name: 'Industrial',
      description: 'Commercial maps.',
    },
  });
  const indoors = await prisma.scanTag.create({
    data: {
      name: 'Indoors',
      description: 'Indoor maps.',
    },
  });
  const scanData: Prisma.ScanCreateInput[] = [
    {
      name: 'Commercial Office',
      description: 'A commercial office scan at Ontario.',
      tags: {
        connect: { id: commercial.id },
      },
    },
    {
      name: 'Commercial Workspace',
      description: 'A commercial workspace scan at British Columbia.',
      tags: {
        connect: { id: commercial.id },
      },
    },
    {
      name: 'Hotel Ballroom',
      description: 'A quiet, compact hotel ballroom scan.',
      tags: {
        connect: { id: indoors.id },
      },
    },
    {
      name: 'Outlet Mall',
      description: 'An outlet mall retail store scan.',
      tags: {
        connect: { id: commercial.id },
      },
    },
    {
      name: 'Campus Complex',
      description: 'A modern campus scan at Vancouver, BC.',
      tags: {
        connect: { id: indoors.id },
      },
    },
    {
      name: 'Suburban House',
      description: 'A beautiful suburban house scan at West Vancouver.',
      tags: {
        connect: { id: indoors.id },
      },
    },
    {
      name: 'Mechanical Room',
      description: 'A mechanical scan at West Vancouver.',
      tags: {
        connect: { id: industrial.id },
      },
    },
  ];
  console.log(`Start seeding ...`);
  for (const u of scanData) {
    const scan = await prisma.scan.create({
      data: u,
    });
    console.log(`Created scan with id: ${scan.id}`);
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
