export class Api {
  static getTitles() {}

  static async getTitle(slug) {
    const result = await fetch('/data.json').then(data => data.json());
    return Array.from(result).find(res => res.slug === slug);
  }
}
