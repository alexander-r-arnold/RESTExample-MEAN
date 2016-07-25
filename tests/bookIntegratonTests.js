var should = require('should'),
	request = require('supertest'),
	app = ('../app.js'),
	mongoose = require('mongoose'),
	Book = mongoose.model('Book'),
	agent = request.agent(app);

describe('Book Crud Test', function() {
	it('Should allow a book to be posted and return a read and _id', function(done) {
		var bookPost = {title: 'my new book', author: 'me', genre: 'Fiction'};

		agent.post('/api/books')
			.send(bookPost)
			.expect(200)
			.send(function(err, results) {
				results.body.read.should.equal(false);
				results.body.should.have.property('_id');
				done();
			})
	})

	afterEach(function(done) {
		Book.remove().exec();
		done();
	})
})