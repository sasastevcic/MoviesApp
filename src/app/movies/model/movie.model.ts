export class Movie {
  _id: number;
  name: string;
  director: string;
  description: string;
  genre: string;
  year: number;
  rating: number;
  duration: number;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.name = obj && obj.name || "";
    this.director = obj && obj.director || "";
    this.description = obj && obj.description || "";
    this.genre = obj && obj.genre || "";
    this.year = obj && obj.year || 0;
    this.rating = obj && obj.rating || 0;
    this.duration = obj && obj.duration || 0;
  }
}