const app = require('../app');
const request = require('supertest'); 
const { Todo } = require('../models')

describe('Todo Routes', () => {
    it('should return all todos get /todos', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .then(response => {
            const firstData = response.body[0]
            expect(firstData.title).toBe('Morning Workout')
            done()
        })
        .catch(done)
    })

    it('should return todo by id get /todos/:id', (done) => {
        const id = 1
        request(app)
          .get('/todos/' + id)
          .expect(200)
          .then(response => {
            const data = response.body
            expect(data.title).toBe('Morning Workout')
            done()
          })
          .catch(done)
      })

    it('should create new todo post /todos', (done) => {
        request(app)
        .post('/todos')
        .send(
            {
                 title: 'Minum 2 liter air',
                 status: 'In Progress'
            }
        )
        .expect(201)
        .then(response => {
            const data = response.body
            expect(data.title).toBe('Minum 2 liter air')
            expect(data.status).toBe('In Progress')
            done()
        })
        .catch(done)
    })

    it('should delete todo update /todos:id', (done) => {
        const id = 1
        request(app)
        .put('/todos/' + id)
        .send({ status: 'Done' })
        .expect(200)
        .then((response) => {
            expect(response.body.status).toBe('Done'); 
            done();
        })
        .catch(done);
    });
});