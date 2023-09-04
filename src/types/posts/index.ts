export interface PostInterface {
  id: string;
  tags: Array<"Tecnologia" | "Ciencia" | "Economia" | "Noticias">;
  banner: Banner;
  description: string;
  date: string;
  slug: string;
  title: string;
}

export interface Banner {
  name: string;
  type: string;
  external: External;
  file: External;
}

export interface External {
  url: string;
}
