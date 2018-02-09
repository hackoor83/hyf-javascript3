'use strict'

class Movie {
    constructor(title, director) {
        // add your code here
        this.title = title;
        this.director = director;
        this.stars = [];
    }

    getTitle() {
        // add your code here
        return this.title;
    }

    getDirector() {
        // add your code here
        return this.director;
    }

    addStar(star) {
        // add your code here
        this.stars.push(new StaffMember('Grorge Cloony', 'Second actor', dateOfBirth));
    }

    getStars() {
        // add your code here
    }

    addWriter(writer) {
        // add your code here
    }

    getWriters() {
        // add your code here
    }

    addRating(rating) {
        // add your code here
    }

    getAverageRating() {
        // add your code here
    }

}

class StaffMember {
    constructor(name, role, dateOfBirth) {
        // add your code here
    }

    addMovie(movie) {
        // add your code here
    }

    getName() {
        // add your code here
    }

    getRole() {
        // add your code here
    }

    getAge() {
        // add your code here
    }
}

// Pick your favorite movie from http://www.imdb.com/

const myMovie = new Movie(...);

const firstActor = new StaffMember(...);
myMovie.addStar(firstActor);
// create and add more staff members

// Make sure that the following actions work.
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = myMovie.getDirector();
console.log(`Director: ${director.getName()}`);