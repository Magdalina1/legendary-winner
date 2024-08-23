import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.mjs'; // Adjust the path as necessary

// Configure Chai to use chai-http
chai.use(chaiHttp);

describe('User API', function() {
  let createdUserId;

  before(function(done) {
    // Optional: setup before tests
    done();
  });

  after(function(done) {
    // Optional: teardown after tests
    done();
  });

  it('should create a user', function(done) {
    chai.request(app)
      .post('/users')
      .send({
        name: 'Alice',
        description: 'Test user',
        status: 'Pending'
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('_id');
        createdUserId = res.body._id;
        done();
      });
  });

  it('should get a user by ID', function(done) {
    chai.request(app)
      .get(`/users/${createdUserId}`)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('_id', createdUserId);
        done();
      });
  });

  it('should update a user by ID', function(done) {
    chai.request(app)
      .put(`/users/${createdUserId}`)
      .send({
        description: 'Updated test user',
        status: 'In Progress'
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('description', 'Updated test user');
        expect(res.body).to.have.property('status', 'In Progress');
        done();
      });
  });

  it('should delete a user by ID', function(done) {
    chai.request(app)
      .delete(`/users/${createdUserId}`)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res).to.have.status(204);
        done();
      });
  });

  it('should return 404 for a non-existing user', function(done) {
    chai.request(app)
      .get(`/users/${createdUserId}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('should return all users', function(done) {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
