'use strict'

class Movie {
    constructor(title, director) {
        this.title = title;
        this.director = director;
        this.stars = [];
        this.writers = [];
        this.rating = [];
    }

    getTitle() {
        return this.title;
    }

    getDirector() {
        return this.director;
    }

    addStar(star) {
        this.stars.push(star);
    }

    getStars() {
        return this.stars;
    }

    addWriter(writer) {
        this.stars.push(new StaffMember('Alfonso Cuarón', 'writer', '28-11-1961'));
    }

    getWriters() {
        this.stars.writer;
    }

    addRating(rating) {
        return this.rating.push(rating);
    }

    getAverageRating() {
        let sum = this.rating.reduce((a, b) => a + b, 0);
        return sum / this.rating.length;
    }

}

class StaffMember {
    constructor(name, role, dateOfBirth) {
        this.name = name;
        this.role = role;
        this.dateOfBirth = dateOfBirth;
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(new Movie('The Martian', 'Ridley Scott'));
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    getAge() {
        return this.dateOfBirth;
    }
}


const myMovie = new Movie('Gravity', 'Alfonso Cuarón');

const firstActor = new StaffMember('Sandra Bullock', 'actor', '26-07-1964');
myMovie.addStar(firstActor);

const secondActor = new StaffMember('George Cloony', 'actor', '06-5-1961');
myMovie.addStar(secondActor);

const mainDirector = new StaffMember('Alfonso Cuarón', 'director', '28-11-1961');
myMovie.addStar(mainDirector);

// create and add more staff members

// Make sure that the following actions work.
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));

const director = myMovie.getDirector();
console.log(director);

console.log(`Director: ${director.getName()}`);