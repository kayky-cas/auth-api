export class JwtSingedUser {
  sub: string;
  username: string;
  name: string | null;

  constructor(sub: string, username: string, name: string | null = null) {
    this.sub = sub;
    this.username = username;
    this.name = name;
  }
}
