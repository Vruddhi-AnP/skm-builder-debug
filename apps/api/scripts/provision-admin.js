const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname, '..', '.env'),
  override: false,
});

const {
  PrismaClient,
  Role,
  AccountStatus,
} = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME?.trim() || 'SKM Administrator';

  if (!email) {
    throw new Error('ADMIN_EMAIL is required');
  }

  if (!password) {
    throw new Error('ADMIN_PASSWORD is required');
  }

  if (password.length < 12) {
    throw new Error('ADMIN_PASSWORD must be at least 12 characters');
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    if (existingUser.role !== Role.admin) {
      throw new Error(
        `Cannot provision admin: ${email} already belongs to a non-admin user`,
      );
    }

    console.log(`Admin already exists: ${email}`);
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const admin = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role: Role.admin,
      accountStatus: AccountStatus.APPROVED,
    },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      accountStatus: true,
    },
  });

  console.log('Admin provisioned successfully');
  console.table([admin]);
}

main()
  .catch((error) => {
    console.error('Admin provisioning failed');
    console.error(
      error instanceof Error ? error.message : String(error),
    );
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
