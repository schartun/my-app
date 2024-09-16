function CreationDate(target: Function) {
    return class extends Cart {
        constructor() {
          super();
          this.created = new Date().toString();
        }
      };
}

@CreationDate
class Cart {
  created: string;
}