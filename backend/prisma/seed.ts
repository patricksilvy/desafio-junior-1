import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@exemplo.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'senhaSuperSecreta';

  const adminExists = await prisma.user.findUnique({ where: { email: adminEmail } });
  
  if (!adminExists) {
    await prisma.user.create({
      data: {
        name: 'Admin Master',
        email: adminEmail,
        password: await bcrypt.hash(adminPassword, 10),
        role: 'admin',
      },
    });
    console.log('Admin criado com sucesso!');
  } else {
    console.log('Admin já existe.');
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
