import {getOrdersByUser} from '@/app/(backend)/api/order/order.service';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

describe('getOrdersByUser', () => {
  beforeAll(async () => {
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('Should be pass', async () => {


    const expected = {
    };

  });

});
