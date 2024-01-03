function developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.greet = () => {
      console.log(`Hello ${name}`)
    }
  };
  
  const me = new developer('Dan','JS')
  
  me.greet()