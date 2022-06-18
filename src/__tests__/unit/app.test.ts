import supertest from 'supertest';
import server from '../../server';

describe('should test', () => {
    it('Verify funcionality corretly app running', async () => {
        // console.log('ok');

        const app = supertest(server);
        const result = await app.get('/').send();

        // console.log(result);

        expect(10).toBe(10);
    })
})
