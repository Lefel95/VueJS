new Vue ({
  el: '#vue-app',
  data: {
    nome: 'Felipe',
    trabalho: 'Full Stack Developer',
    website: 'https://felipe.com.br',
    websiteTag: '<a href="https://felipe.com.br"> Outro esquema de Site </a>',
    idade: 21,
    x: 0,
    y: 0,
    name: '',
    age: '',
    a: 0,
    b: 0,
    gender: ''
  },

  methods: {
    greet: function( time ) {
      return 'Bom ' + time + ' ' + this.nome;
    },
    adicionar: function( numero ) {
      this.idade += numero;

    },

    subtrair: function ( numero ) {
      this.idade -= numero;
    },

    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },

    click: function () {
      alert('ESTAMOS EM MANUTENÇÃO!');
    },

    logName: function() {
      console.log('Voce digitou o seu nome');
    },

    logAge: function() {
      console.log('Voce digitou a sua idade');
    },

    changeGender: function(gender) {
      this.gender = gender;
    }

  },

  computed: {
    agePlusA: function() {
      return this.a + this.idade;
    },

    agePlusB: function () {
      return this.b + this.idade;
    },

    compClass: function() {
      return gender = this.gender;
    }
  }
});
