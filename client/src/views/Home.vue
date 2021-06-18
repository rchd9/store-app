<template>
  <div class="container">

      <div class="row justify-content-center">
          <div class="col-md-6">
                <form v-on:submit.prevent="onSubmit">
                    <div class="form-group">
                      <label for="product_store">Product Store</label>
                      <select v-model="form.store" id="product_store" class="form-control" required>
                          <option value="1">1</option>
                          <option value="2">2</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Name" required>
                    </div>
                    <div class="form-group">
                      <label for="description">Description</label>
                      <input v-model="form.description" type="text" class="form-control" id="description" placeholder="Description" required>
                    </div>
                    <div class="form-group">
                      <label for="price">Price</label>
                      <input v-model="form.price" type="number" class="form-control" id="price" placeholder="Price" required>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
          </div>

          <div class="col-md-8 mt-5">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in products" :value="item" :key="index">
                  <td>{{ item.name }}</td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.price }}</td>
                </tr>
              </tbody>
            </table>

          </div>

      </div>

  </div>
</template>

<script>
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      form: {
        name: '',
        description: '',
        price: 0,
        store: '',
      },
      stores: [],
      products: []
    }
  },
  created() {
      this.fetchProducts();
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    fetchProducts() {
        axios.get('localhost:3000/products')
          .then( ({ data }) => {
              console.log('response', data);
              this.products = data;
          })
          .catch(e => {
              console.log(e);
          });
    }
  }
}
</script>

<style>
.form-group {
  margin-bottom: 1rem;
}
.form-control {
 appearance: auto !important;
}
</style>
