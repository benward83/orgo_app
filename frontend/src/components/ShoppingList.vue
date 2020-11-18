<template>
  <div class="shopping">
    <div id="container">
      <h1>Shopping List <span id="toggle-form">
          <i class="fa fa-plus" ></i></span>
        </h1>
            <input type="text" v-model="name" name="name" placeholder="Add New Item">
          <ul>
            <li v-for="(ingredient) in ingredients" :key="ingredient.id"><span
            >
            <i class="fa fa-trash" ></i></span>{{ ingredient.name }}</li>
          </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      ingredients: [],
      name: '',
      id: '',
    };
  },
  methods: {
    // deleteItem(id) {
    //   axios.delete(`http://localhost:3000/ingredients${id}`)
    //     .then(() => {
    //       this.ingredients = this.ingredients
    //         .filter((ingredient) => ingredient.id !== id);
    //     })
    //     .catch((err) => console.log(err));
    // },
  },
  created() {
    axios.get('http://localhost:3000/ingredients')
      .then(((res) => { this.ingredients = res.data; }));
  },
};

</script>

<style scoped>
  body {
  font-family: Roboto;
  background: #EB5757;
  background: -webkit-linear-gradient
  (to right, #000000, #EB5757);
  background: linear-gradient
  (to right, #000000, #EB5757)

}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

h1 {
    background: #2980b9 ;
    color: whitesmoke;
    margin: 0;
    padding: 10px 20px;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: normal;
}

.fa-plus {
    float: right;
}

li {
    background: white;
    height: 50px;
    line-height: 40px;
    color: #666;
}

li:nth-child(2n) {
    background-color: #f7f7f7;
}

li span {
    background: #e74c3c;
    height: 40px;
    margin-right: 20px;
    text-align: center;
    color: white;
    width: 0px;
    display: inline-block;
    transition: 0.2s linear;
    opacity: 0;
}

li:hover span {
    width: 40px;
    opacity: 1.0;
}

input {
    font-size: 20px;
    color: black;
    background-color: #f7f7f7;
    width: 100%;
    padding: 13px 13px 13px 20px;
    box-sizing: border-box;
    border: 3px solid rgba(0,0,0,0);
}

input:focus {
  background: whitesmoke;
  border: 3px solid #2980b9;
  outline: none;

}

#container {
    width: 500px;
    margin: 150px auto;
    background: #f7f7f7;
    box-shadow: 0 0 3px rgba(0,0,0 0.1)ß
}

.bought {
    color: gray;
    text-decoration: line-through;
}
</style>
