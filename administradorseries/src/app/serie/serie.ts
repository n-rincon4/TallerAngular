export class Serie {
  public num: number;
  public name: string;
  public channel: string;
  public seasons: number;
  public description: string;
  public link: string;
  public picture: string;

  constructor(num: number, name: string, channel: string, seasons: number, description: string, link: string, picture: string) {
      this.num = num;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.link = link;
      this.picture = picture;
  }
}
